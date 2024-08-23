import React, { useState, useEffect, useCallback } from 'react';
import 'react-native-url-polyfill/auto';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Dimensions, Alert, ScrollView, Image } from 'react-native';
import { supabase } from '../../data/supabaseClient';
import { Ionicons } from '@expo/vector-icons';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const DeThiKhaiNiemQuyTacTab = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [questionStates, setQuestionStates] = useState([]);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [explanation, setExplanation] = useState('');

  const imageMap = {
    '39.png': require('../../assets/Question/39.png'),
    '40.png': require('../../assets/Question/40.png'),
    '41.png': require('../../assets/Question/41.png'),
    '42.png': require('../../assets/Question/42.png'),
    '44.png': require('../../assets/Question/44.png'),
    '45.png': require('../../assets/Question/45.png'),
  };

  const fetchData = useCallback(async () => {
    const { data, error } = await supabase
      .from('question')
      .select('content, option, image, tip');

    if (error) {
      console.error('Error fetching data:', error);
      return [];
    }

    return data;
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
      setQuestionStates(fetchedData.map(() => ({
        selectedOption: null,
        isChecked: false,
        isCorrect: null
      })));
    };

    loadData();
  }, [fetchData]);

  const handleOptionSelect = useCallback((option) => {
    setQuestionStates(prevStates => {
      const updatedStates = [...prevStates];
      updatedStates[currentIndex].selectedOption = option;
      return updatedStates;
    });
    setSelectedOption(option);
    setIsChecked(false);
    setIsAnswered(false);
  }, [currentIndex]);

  const handleCheckAnswer = useCallback(() => {
    setQuestionStates(prevStates => {
      const updatedStates = [...prevStates];
      const currentState = updatedStates[currentIndex];
      if (currentState.selectedOption && currentState.selectedOption.correct === "1") {
        setScore(prevScore => prevScore + 1);
        currentState.isCorrect = true;
      } else {
        currentState.isCorrect = false;
      }

      currentState.isChecked = true;
      setIsAnswered(true);
      setExplanation(data[currentIndex]?.tip || '');
      return updatedStates;
    });
    setIsChecked(true);
  }, [currentIndex, data]);

  const handleNext = useCallback(() => {
    setCurrentIndex(prevIndex => {
      const newIndex = Math.min(prevIndex + 1, data.length - 1);
      setSelectedOption(questionStates[newIndex]?.selectedOption);
      setIsChecked(questionStates[newIndex]?.isChecked);
      if (newIndex === data.length - 1) {
        setIsQuizFinished(true);
      }
      return newIndex;
    });
  }, [data.length, questionStates]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(prevIndex => {
      const newIndex = Math.max(prevIndex - 1, 0);
      setSelectedOption(questionStates[newIndex]?.selectedOption);
      setIsChecked(questionStates[newIndex]?.isChecked);
      return newIndex;
    });
  }, [questionStates]);

  const handleRestart = useCallback(() => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsQuizFinished(false);
    setIsChecked(false);
    setIsTimeUp(false);
    setQuestionStates(data.map(() => ({
      selectedOption: null,
      isChecked: false,
      isCorrect: null
    })));
  }, [data]);

  const renderOption = ({ item }) => {
    const currentState = questionStates[currentIndex];
    const isCorrect = item.correct === "1";
    const isSelected = selectedOption === item;

    return (
      <TouchableOpacity
        style={[
          styles.optionContainer,
          isSelected && { borderColor: '#333' },
          isSelected && isChecked && { borderColor: isCorrect ? 'green' : 'red' },
          isChecked && !isCorrect && item === currentState.selectedOption && { borderColor: 'red' },
          isChecked && isCorrect && item !== currentState.selectedOption && { borderColor: 'green' },
        ]}
        onPress={() => handleOptionSelect(item)}
        disabled={isChecked}
      >
        <View style={styles.optionContent}>
          <Text style={styles.label}>{item.label}: {item.topic}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    if (isTimeUp) {
      Alert.alert('Hết giờ', 'Nộp bài để chấm điểm');
      setIsQuizFinished(true);
    }
  }, [isTimeUp]);

  if (isQuizFinished) {
    return (
      <View style={styles.container}>
        <Text style={styles.finalScore}>
          {isTimeUp ? 'Hết giờ! ' : 'Quiz Completed!'}
        </Text>
        <Text style={styles.finalScore}>Your Score: {score} / {data.length}</Text>
        <TouchableOpacity style={styles.button} onPress={handleRestart}>
          <Text style={styles.buttonText}>Again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const currentQuestion = data[currentIndex];
  if (!currentQuestion) {
    return <Text style={{ textAlign: 'center' }}>Loading...</Text>;
  }

  const imageSource = currentQuestion.image ? imageMap[currentQuestion.image] : null;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.titleQuestion}>{currentQuestion.content}</Text>
        {imageSource ? (
          <Image
            source={imageSource}
            style={{ width: 150, height: 150, marginBottom: 5, alignSelf: 'center' }}
            resizeMode="contain"
          />
        ) : null}
        <FlatList
          data={currentQuestion.option.options}
          renderItem={renderOption}
          keyExtractor={(optionItem, index) => index.toString()}
          scrollEnabled={false}
        />
        {isChecked && explanation ? (
          <View style={styles.explanationContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="pricetags" size={20} color="#333" />
              <Text style={styles.explanationText}>Giải thích đáp án:</Text>
            </View>
            <Text style={styles.explanationText}>{explanation}</Text>
          </View>
        ) : null}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.navButton} onPress={handlePrev}>
          <Ionicons name="arrow-back" size={25} color="gray" />
        </TouchableOpacity>

        {selectedOption && (
          <TouchableOpacity style={styles.checkButton} onPress={handleCheckAnswer}>
            <Ionicons name="checkmark-circle-outline" size={35} />
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.navButton} onPress={handleNext}>
          <Ionicons name="arrow-forward" size={25} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DeThiKhaiNiemQuyTacStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DeThiKhaiNiemQuyTacTab"
        component={DeThiKhaiNiemQuyTacTab}
        options={({ navigation }) => ({
          headerTitle: 'Đề thi Khái niệm Quy tắc',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#2F95DC' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: () => (
            <Icon
              name="chevron-left"
              size={15}
              onPress={() => navigation.goBack()}
              style={{ color: '#FFFFFF', marginLeft: 10 }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default DeThiKhaiNiemQuyTacStack;

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 10,
    paddingBottom: 50,

  },
  titleQuestion: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  explanationContainer: {
    backgroundColor: '#00FF99',
    padding: 10,
    borderRadius: 8,
    marginTop: 15,
  },
  explanationText: {
    fontSize: 16,
    marginLeft: 5,
    marginBottom: 10,
  },
  optionContainer: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 5,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: '#2F95DC',
  },
  checkButton: {
    backgroundColor: '#33FF33',
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  navButton: {
    padding: 10,
    alignItems: 'center',
  },
  finalScore: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2F95DC',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
