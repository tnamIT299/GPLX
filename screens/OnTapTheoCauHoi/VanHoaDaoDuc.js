import React, { useState, useEffect, useCallback } from "react";
import "react-native-url-polyfill/auto";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
  ScrollView,
  Image,
} from "react-native";
import { supabase } from "../../data/supabaseClient";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

const Stack = createStackNavigator();

const VanHoaDaoDucTab = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [questionStates, setQuestionStates] = useState([]);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [explanations, setExplanations] = useState([]);

  const fetchData = useCallback(async () => {
    const { data, error } = await supabase
      .from("question")
      .select("content, option")
      .eq("typeQuestion", 2);

    if (error) {
      console.error("Error fetching data:", error);
      return [];
    }

    return data;
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
      setQuestionStates(
        fetchedData.map(() => ({
          selectedOption: null,
          isChecked: false,
          isCorrect: null,
          explanations: "",
        }))
      );
    };

    loadData();
  }, [fetchData]);

  const handleOptionSelect = useCallback(
    (option) => {
      setQuestionStates((prevStates) => {
        const updatedStates = [...prevStates];
        updatedStates[currentIndex].selectedOption = option;
        return updatedStates;
      });
      setSelectedOption(option);
      setIsChecked(false);
      setIsAnswered(false);
    },
    [currentIndex]
  );

  const handleCheckAnswer = useCallback(() => {
    setQuestionStates((prevStates) => {
      const updatedStates = [...prevStates];
      const currentState = updatedStates[currentIndex];

      if (
        currentState.selectedOption &&
        currentState.selectedOption.correct === "1"
      ) {
        setScore((prevScore) => prevScore + 1);
        currentState.isCorrect = true;
      } else {
        currentState.isCorrect = false;
      }

      currentState.isChecked = true;
      currentState.isAnswered = true;
      currentState.explanations = data[currentIndex]?.tip || ""; // Lưu giải thích vào trạng thái
      setIsAnswered(true);
      setExplanations(currentState.explanations);

      return updatedStates;
    });
    setIsChecked(true);
  }, [currentIndex, data]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = Math.min(prevIndex + 1, data.length-1);
      const nextState = questionStates[newIndex];
      setSelectedOption(nextState?.selectedOption);
      setIsChecked(nextState?.isChecked);
      setIsAnswered(nextState?.isAnswered);
      setExplanations(nextState?.explanations || "");

      if (newIndex === data.length) {
        setIsQuizFinished(true);
      }
      return newIndex;
    });
  }, [data.length, questionStates]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = Math.max(prevIndex - 1, 0);
      const prevState = questionStates[newIndex];
      setSelectedOption(prevState?.selectedOption);
      setIsChecked(prevState?.isChecked);
      setIsAnswered(prevState?.isAnswered);
      setExplanations(prevState?.explanations || "");
      return newIndex;
    });
  }, [questionStates]);

  const deleteProgress = useCallback(() => {
    Alert.alert(
      "Xoá tiến trình",
      "Bạn có chắc chắn muốn xoá tất cả tiến trình và làm lại?",
      [
        {
          text: "Huỷ",
          style: "cancel",
        },
        {
          text: "Xoá",
          onPress: () => {
            setCurrentIndex(0);
            setScore(0);
            setSelectedOption(null);
            setIsQuizFinished(false);
            setIsChecked(false);
            setIsTimeUp(false);
            setQuestionStates(
              data.map(() => ({
                selectedOption: null,
                isChecked: false,
                isCorrect: null,
                explanation: "",
                isAnswered: false,
              }))
            );
          },
        },
      ]
    );
  }, [data]);

  const handleChamdiem = useCallback(() => {
    let totalScore = 0;

    questionStates.forEach((questionState, index) => {
      const question = data[index];

      if (questionState.selectedOption) {
        const isCorrect = questionState.selectedOption.correct === "1";
        if (isCorrect) {
          totalScore += 1; // Thay đổi điểm số nếu cần
          questionState.isCorrect = true;
        } else {
          questionState.isCorrect = false;
        }
      } else {
        questionState.isCorrect = false; // Đánh dấu câu hỏi chưa được trả lời
      }

      questionState.isChecked = true;
      questionState.isAnswered = true;
      questionState.explanation = question.tip || ""; // Thêm giải thích nếu có
    });

    setScore(totalScore);
    setIsQuizFinished(true);
  }, [questionStates, data]);

  const handleTabPress = useCallback(
    (index) => {
      setCurrentIndex(index);
      const selectedState = questionStates[index];
      setSelectedOption(selectedState?.selectedOption);
      setIsChecked(selectedState?.isChecked);
      setIsAnswered(selectedState?.isAnswered);
      setExplanations(selectedState?.explanations || "");
    },
    [questionStates]
  );

  const handleRestart = useCallback(() => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsQuizFinished(false);
    setIsChecked(false);
    setIsTimeUp(false);
    setQuestionStates(
      data.map(() => ({
        selectedOption: null,
        isChecked: false,
        isCorrect: null,
      }))
    );
  }, [data]);

  const getScoreLevel = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage >= 90) return "excellent";
    if (percentage >= 50) return "good";
    if (0 <= percentage < 50) return "bad";
    return "poor";
  };

  const renderOption = ({ item }) => {
    const currentState = questionStates[currentIndex];
    const isCorrect = item.correct === "1";
    const isSelected = selectedOption === item;

    return (
      <TouchableOpacity
        style={[
          styles.optionContainer,
          isSelected && { borderColor: "#333" },
          isSelected &&
            isChecked && { borderColor: isCorrect ? "green" : "red" },
          isChecked &&
            !isCorrect &&
            item === currentState.selectedOption && { borderColor: "red" },
          isChecked &&
            isCorrect &&
            item !== currentState.selectedOption && { borderColor: "green" },
        ]}
        onPress={() => handleOptionSelect(item)}
        disabled={isChecked}
      >
        <View style={styles.optionContent}>
          <Text style={styles.label}>
            {item.label}: {item.topic}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderTab = ({ item, index }) => {
    const isActive = index === currentIndex;
    const isCorrect = questionStates[index]?.isCorrect;

    let backgroundColor = "#BBB"; // Màu mặc định
    if (isCorrect === true) {
      backgroundColor = "#00CD00";
    } else if (isCorrect === false) {
      backgroundColor = "#FF3030";
    }

    return (
      <TouchableOpacity
        style={[styles.tab, isActive && styles.activeTab, { backgroundColor }]}
        onPress={() => handleTabPress(index)}
      >
        <Text style={[styles.tabText, isActive && styles.activeTabText]}>
          Câu {index + 1}
        </Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    if (isTimeUp) {
      Alert.alert("Hết giờ", "Nộp bài để chấm điểm");
      setIsQuizFinished(true);
    }
  }, [isTimeUp]);

  if (isQuizFinished) {
    const scoreLevel = getScoreLevel(score, data.length);
    return (
      <View style={styles.container}>
        <Text style={styles.finalScore}>
          {isTimeUp ? "Hết giờ! " : "Hoàn Thành Bài Kiểm Tra"}
        </Text>
        {scoreLevel === "excellent" && (
          <>
            <Image
              source={require("../../assets/splash/doneExam.webp")}
              style={styles.image}
            />
            <Text style={styles.finalScore}>Xuất sắc! Bạn đã làm rất tốt!</Text>
          </>
        )}
        {scoreLevel === "good" && (
          <>
            <Image
              source={require("../../assets/splash/tryagain.webp")}
              style={styles.image}
            />
            <Text style={styles.finalScore}>
              Tốt! Bạn có thể làm tốt hơn nữa!
            </Text>
          </>
        )}
        {scoreLevel === "bad" && (
          <>
            <Image
              source={require("../../assets/splash/sad.webp")}
              style={styles.image}
            />
            <Text style={styles.finalScore}>
              {" "}
              Bạn cần ôn tập lại nhiều hơn!
            </Text>
          </>
        )}

        <Text style={styles.finalScore}>
          Điểm của bạn: {score} / {data.length}
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleRestart}>
          <Text style={styles.buttonText}>Làm lại</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const currentQuestion = data[currentIndex];
  if (!currentQuestion) {
    return <Text style={{ textAlign: "center" }}>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabSwitch}>
        <FlatList
          data={data}
          horizontal
          renderItem={renderTab}
          keyExtractor={(item, index) => index.toString()}
          style={styles.tabContainer}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#fff",
          }}
        >
          <TouchableOpacity style={styles.btnendExam} onPress={handleChamdiem}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "blue" }}>
              Chấm điểm
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={deleteProgress}>
            <Ionicons name="trash" size={25} color="red" />
          </TouchableOpacity>
        </View>
        <Text style={styles.numberQuestion}>Câu {currentIndex + 1} :</Text>
        <Text style={styles.titleQuestion}>{currentQuestion.content}</Text>
        <FlatList
          data={currentQuestion.option.options}
          renderItem={renderOption}
          keyExtractor={(optionItem, index) => index.toString()}
          scrollEnabled={false}
        />
        {isChecked && explanations ? (
          <View style={styles.explanationContainer}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="pricetags" size={20} color="#333" />
              <Text style={styles.explanationText}>Giải thích đáp án:</Text>
            </View>
            <Text style={styles.explanationText}>{explanations}</Text>
          </View>
        ) : null}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.navButton} onPress={handlePrev}>
          <Ionicons name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>

        {selectedOption && (
          <TouchableOpacity
            style={styles.checkButton}
            onPress={handleCheckAnswer}
          >
            <Ionicons name="checkmark-circle-outline" size={35} />
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.navButton} onPress={handleNext}>
          <Ionicons name="arrow-forward" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const VanHoaDaoDucStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="VanHoaDaoDucTab"
        component={VanHoaDaoDucTab}
        options={({ navigation }) => ({
          headerTitle: "Văn Hóa và Đạo Đức",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#2F95DC" },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: { fontWeight: "bold" },
          headerLeft: () => (
            <Icon
              name="chevron-left"
              size={15}
              onPress={() => navigation.goBack()}
              style={{ color: "#FFFFFF", marginLeft: 10 }}
            >
              Back
            </Icon>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default VanHoaDaoDucStack;

const { width } = Dimensions.get("window");

