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
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { createStackNavigator } from "@react-navigation/stack";
import { imageMap } from "../BoDe/importImage";
import styles from "../BoDe/styles";

const Stack = createStackNavigator();

const DeNgauNhienTab = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [questionStates, setQuestionStates] = useState([]);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [hasFailedByLethalQuestion, setHasFailedByLethalQuestion] =
    useState(false);
  const [scoreLevel, setScoreLevel] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [explanations, setExplanations] = useState([]);


  const fetchData = useCallback(async () => {
    const { data, error } = await supabase
      .from("question")
      .select("id, content, option, image, tip, typeQuestion");

    if (error) {
      console.error("Error fetching data:", error);
      return [];
    }

    return data;
  }, []);

  useEffect(() => {
    const getQuestions = async () => {
      const questions = await fetchData();
      const groupedQuestions = groupQuestionsByType(questions);
      const randomQuestions = selectSpecificQuestions(groupedQuestions);
      setData(randomQuestions);
      setQuestionStates(
        randomQuestions.map(() => ({
          selectedOption: null,
          isChecked: false,
          isCorrect: null,
          explanations: "",
        }))
      );
    };

    getQuestions();
  }, [fetchData]);

  const groupQuestionsByType = (questions) => {
    return questions.reduce((acc, question) => {
      if (!acc[question.typeQuestion]) {
        acc[question.typeQuestion] = [];
      }
      acc[question.typeQuestion].push(question);
      return acc;
    }, {});
  };

  const getRandomQuestionsFromGroup = (group, count) => {
    const shuffled = group.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const selectSpecificQuestions = (groupedQuestions) => {
    const selectionCriteria = {
      1: 8,
      2: 1,
      3: 1,
      4: 7,
      5: 7,
      6: 1,
    };

    let selected = [];
    const selectedIds = new Set();

    for (const type in selectionCriteria) {
      const count = selectionCriteria[type];
      if (groupedQuestions[type]) {
        const randomQuestions = getRandomQuestionsFromGroup(
          groupedQuestions[type],
          count
        );
        randomQuestions.forEach((question) => {
          if (!selectedIds.has(question.id)) {
            selected.push(question);
            selectedIds.add(question.id);
          }
        });
      }
    }

    return selected;
  };
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

  const handleCheckAnswer = useCallback(async () => {
    setQuestionStates((prevStates) => {
      const updatedStates = [...prevStates];
      if (currentIndex < 0 || currentIndex >= updatedStates.length) {
        console.error("Invalid index:", currentIndex);
        return updatedStates;
      }

      const currentState = updatedStates[currentIndex];

      if (!currentState) {
        console.error("Current state is undefined for index:", currentIndex);
        return updatedStates;
      }

      if (
        currentState.selectedOption &&
        currentState.selectedOption.correct === "1"
      ) {
        setScore((prevScore) => prevScore + 1);
        currentState.isCorrect = true;
      } else {
        currentState.isCorrect = false;
        const question = data[currentIndex];

        (async () => {
          try {
            const { error } = await supabase
              .from("WrongQuestion")
              .insert([{ idQuestion: question.id }]);

            if (error) {
              console.error("Error inserting wrong question:", error);
            } else {
              console.log("Wrong question saved successfully.");
            }
          } catch (err) {
            console.error("Unexpected error:", err);
          }
        })();
      }

      currentState.isChecked = true;
      currentState.isAnswered = true;
      currentState.explanations = data[currentIndex]?.tip || ""; 
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

  const handleChamdiem = useCallback(() => {
    let totalScore = 0;
    let hasFailedByLethalQuestion = false;

    questionStates.forEach((questionState, index) => {
      const question = data[index];

      if (questionState.selectedOption) {
        const isCorrect = questionState.selectedOption.correct === "1";

        if (isCorrect) {
          totalScore += 1; 
          questionState.isCorrect = true;

       
          if (question.typeQuestion === 6) {
            hasFailedByLethalQuestion = false; 
          }
        } else {
          questionState.isCorrect = false;

          
          if (question.typeQuestion === 6) {
            hasFailedByLethalQuestion = true;
          }
        }
      } else {
        questionState.isCorrect = false; 
      }

      questionState.isChecked = true;
      questionState.isAnswered = true;
      questionState.explanation = question.tip || ""; 
    });

    const scoreLevel = getScoreLevel(totalScore, data.length);
    setScore(totalScore);
    setScoreLevel(scoreLevel);
    setHasFailedByLethalQuestion(hasFailedByLethalQuestion);
    setIsQuizFinished(true);
  }, [questionStates, data, getScoreLevel]);

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
    if (percentage >= 84) return "excellent";
    if (50 <= percentage <= 84) return "good";
    if (0 <= percentage < 50) return "bad";
    return "poor";
  };

  const renderTab = ({ item, index }) => {
    const isActive = index === currentIndex;
    const isCorrect = questionStates[index]?.isCorrect;

    let backgroundColor = "#BBB";
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

  useEffect(() => {
    if (isTimeUp) {
      Alert.alert("Hết giờ", "Nộp bài để chấm điểm");
      setIsQuizFinished(true);
    }
  }, [isTimeUp]);

  if (isQuizFinished) {
    const passed = !hasFailedByLethalQuestion && score >= 21;
    return (
      <View style={styles.container}>
        <Text style={styles.finalScore}>
          {isTimeUp ? "Hết giờ! " : "Hoàn Thành Bài Kiểm Tra"}
        </Text>
        {passed ? (
          <>
            {scoreLevel === "excellent" && (
              <>
                <Image
                  source={require("../../assets/splash/doneExam.webp")}
                  style={styles.image}
                />
                <Text style={styles.finalScore}>
                  Xuất sắc! Bạn đã đỗ bằng lái xe A1
                </Text>
              </>
            )}
          </>
        ) : (
          <>
            <Image
              source={require("../../assets/splash/sad.webp")}
              style={styles.image}
            />
            <Text style={styles.finalScore}>
              Rất tiếc, bạn chưa đỗ. Hãy ôn tập lại!
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

  const imageSource = currentQuestion.image
    ? imageMap[currentQuestion.image]
    : null;

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
          <CountdownCircleTimer
            size={70}
            strokeWidth={6}
            isPlaying
            duration={1140}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[7, 5, 2, 0]}
            onComplete={() => {
              setIsTimeUp(true);
              return { shouldRepeat: false, delay: 1 };
            }}
          >
            {({ remainingTime }) => (
              <Text style={{ fontSize: 15 }}>
                {Math.floor(remainingTime / 60)}:{remainingTime % 60}
              </Text>
            )}
          </CountdownCircleTimer>
          <TouchableOpacity style={styles.btnendExam} onPress={handleChamdiem}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "blue" }}>
              Nộp bài
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.numberQuestion}>Câu {currentIndex + 1} :</Text>
        <Text
          style={[
            styles.titleQuestion,
            { color: data[currentIndex].typeQuestion === 6 ? "red" : "black" },
          ]}
        >
          {data[currentIndex].content}
        </Text>
        {imageSource ? (
          <Image
            source={imageSource}
            style={{
              width: 300,
              height: 300,
              marginBottom: 5,
              alignSelf: "center",
            }}
            resizeMode="contain"
          />
        ) : null}
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

const DeNgauNhienStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DeNgauNhienTab"
        component={DeNgauNhienTab}
        options={({ navigation }) => ({
          headerTitle: "Bài Thi",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#2F95DC" },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: { fontWeight: "bold" },
        })}
      />
    </Stack.Navigator>
  );
};

export default DeNgauNhienStack;
