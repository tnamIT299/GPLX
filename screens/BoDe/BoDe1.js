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
import Icon from "react-native-vector-icons/FontAwesome";

const Stack = createStackNavigator();

const BoDe1Tab = ({ navigation }) => {
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
  const [idExam, setIdExam] = useState(null);


  const imageMap = {
    "39.png": require("../../assets/Question/39.png"),
    "40.png": require("../../assets/Question/40.png"),
    "41.png": require("../../assets/Question/41.png"),
    "42.png": require("../../assets/Question/42.png"),
    "44.png": require("../../assets/Question/44.png"),
    "45.png": require("../../assets/Question/45.png"),
    "101.png": require("../../assets/Question/101.png"),
    "102.png": require("../../assets/Question/102.png"),
    "103.png": require("../../assets/Question/103.png"),
    "104.png": require("../../assets/Question/104.png"),
    "105.png": require("../../assets/Question/105.png"),
    "106.png": require("../../assets/Question/106.png"),
    "107.png": require("../../assets/Question/107.png"),
    "108.png": require("../../assets/Question/108.png"),
    "109.png": require("../../assets/Question/109.png"),
    "110.png": require("../../assets/Question/110.png"),
    "111.png": require("../../assets/Question/111.png"),
    "112.png": require("../../assets/Question/112.png"),
    "113.png": require("../../assets/Question/113.png"),
    "114.png": require("../../assets/Question/114.png"),
    "115.png": require("../../assets/Question/115.png"),
    "116.png": require("../../assets/Question/116.png"),
    "117.png": require("../../assets/Question/117.png"),
    "118.png": require("../../assets/Question/118.png"),
    "119.png": require("../../assets/Question/119.png"),
    "120.png": require("../../assets/Question/120.png"),
    "121.png": require("../../assets/Question/121.png"),
    "122.png": require("../../assets/Question/122.png"),
    "123.png": require("../../assets/Question/123.png"),
    "124.png": require("../../assets/Question/124.png"),
    "125.png": require("../../assets/Question/125.png"),
    "126.png": require("../../assets/Question/126.png"),
    "127.png": require("../../assets/Question/127.png"),
    "128.png": require("../../assets/Question/128.png"),
    "129.png": require("../../assets/Question/129.png"),
    "130.png": require("../../assets/Question/130.png"),
    "131.png": require("../../assets/Question/131.png"),
    "132.png": require("../../assets/Question/132.png"),
    "133.png": require("../../assets/Question/133.png"),
    "134.png": require("../../assets/Question/134.png"),
    "135.png": require("../../assets/Question/135.png"),
    "136.png": require("../../assets/Question/136.png"),
    "137.png": require("../../assets/Question/137.png"),
    "138.png": require("../../assets/Question/138.png"),
    "139.png": require("../../assets/Question/139.png"),
    "140.png": require("../../assets/Question/140.png"),
    "141.png": require("../../assets/Question/141.png"),
    "142.png": require("../../assets/Question/142.png"),
    "143.png": require("../../assets/Question/143.png"),
    "144.png": require("../../assets/Question/144.png"),
    "145.png": require("../../assets/Question/145.png"),
    "146.png": require("../../assets/Question/146.png"),
    "147.png": require("../../assets/Question/147.png"),
    "148.png": require("../../assets/Question/148.png"),
    "149.png": require("../../assets/Question/149.png"),
    "150.png": require("../../assets/Question/150.png"),
    "151.png": require("../../assets/Question/151.png"),
    "152.png": require("../../assets/Question/152.png"),
    "153.png": require("../../assets/Question/153.png"),
    "154.png": require("../../assets/Question/154.png"),
    "155.png": require("../../assets/Question/155.png"),
    "156.png": require("../../assets/Question/156.png"),
    "157.png": require("../../assets/Question/157.png"),
    "158.png": require("../../assets/Question/158.png"),
    "159.png": require("../../assets/Question/159.png"),
    "160.png": require("../../assets/Question/160.png"),
    "161.png": require("../../assets/Question/161.png"),
    "162.png": require("../../assets/Question/162.png"),
    "163.png": require("../../assets/Question/163.png"),
    "164.png": require("../../assets/Question/164.png"),
    "165.png": require("../../assets/Question/165.png"),
    "166.png": require("../../assets/Question/166.png"),
    "167.png": require("../../assets/Question/167.png"),
    "168.png": require("../../assets/Question/168.png"),
    "169.png": require("../../assets/Question/169.png"),
    "170.png": require("../../assets/Question/170.png"),
    "171.png": require("../../assets/Question/171.png"),
    "172.png": require("../../assets/Question/172.png"),
    "173.png": require("../../assets/Question/173.png"),
    "174.png": require("../../assets/Question/174.png"),
    "175.png": require("../../assets/Question/175.png"),
    "176.png": require("../../assets/Question/176.png"),
    "177.png": require("../../assets/Question/177.png"),
    "178.png": require("../../assets/Question/178.png"),
    "179.png": require("../../assets/Question/179.png"),
    "180.png": require("../../assets/Question/180.png"),
    "181.png": require("../../assets/Question/181.png"),
    "182.png": require("../../assets/Question/182.png"),
    "183.png": require("../../assets/Question/183.png"),
    "184.png": require("../../assets/Question/184.png"),
    "185.png": require("../../assets/Question/185.png"),
    "186.png": require("../../assets/Question/186.png"),
    "187.png": require("../../assets/Question/187.png"),
    "188.png": require("../../assets/Question/188.png"),
    "189.png": require("../../assets/Question/189.png"),
    "190.png": require("../../assets/Question/190.png"),
    "191.png": require("../../assets/Question/191.png"),
    "192.png": require("../../assets/Question/192.png"),
    "193.png": require("../../assets/Question/193.png"),
    "194.png": require("../../assets/Question/194.png"),
    "195.png": require("../../assets/Question/195.png"),
    "196.png": require("../../assets/Question/196.png"),
    "197.png": require("../../assets/Question/197.png"),
    "198.png": require("../../assets/Question/198.png"),
    "199.png": require("../../assets/Question/199.png"),
    "200.png": require("../../assets/Question/200.png"),
  };

  const fetchData = useCallback(async () => {
    const { data, error } = await supabase
      .from("ExamQuestion")
      .select("idExam, question(id,content, option, image, tip,typeQuestion)")
      .eq("idExam", 1);

    if (error) {
      console.error("Error fetching data:", error);
      return [];
    }
    if (data && data.length > 0) {
      setIdExam(data[0].idExam); // Giả sử idExam là trường đầu tiên trong dữ liệu
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

  const handleCheckAnswer = useCallback(async () => {
    setQuestionStates((prevStates) => {
      const updatedStates = [...prevStates];

      // Kiểm tra nếu `currentIndex` vượt quá giới hạn của mảng
      if (currentIndex < 0 || currentIndex >= updatedStates.length) {
        console.error("Invalid index:", currentIndex);
        return updatedStates;
      }

      const currentState = updatedStates[currentIndex];

      // Kiểm tra nếu `currentState` tồn tại
      if (!currentState) {
        console.error("Current state is undefined for index:", currentIndex);
        return updatedStates;
      }

      // Kiểm tra nếu `selectedOption` tồn tại
      if (
        currentState.selectedOption &&
        currentState.selectedOption.correct === "1"
      ) {
        setScore((prevScore) => prevScore + 1);
        currentState.isCorrect = true;
      } else {
        currentState.isCorrect = false;

        // Lưu câu hỏi sai vào bảng WrongQuestion
        const question = data[currentIndex];

        // Chuyển việc lưu dữ liệu ra ngoài setQuestionStates để tránh lỗi async
        (async () => {
          try {
            const { error } = await supabase
              .from("WrongQuestion")
              .insert([{ idQuestion: question.question.id }]);

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
      currentState.explanations = data[currentIndex]?.question.tip || ""; // Lưu giải thích vào trạng thái
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

  const getLocalISOString = () => {
    const localTimeOffset = 7 * 60 * 60 * 1000; // Chênh lệch múi giờ UTC+7
    const localDate = new Date(new Date().getTime() + localTimeOffset);
    return localDate.toISOString();
  };

  const handleChamdiem = useCallback(async () => {
    let totalScore = 0;
    let hasFailedByLethalQuestion = false;
  
    questionStates.forEach((questionState, index) => {
      const question = data[index];
  
      if (questionState.selectedOption) {
        const isCorrect = questionState.selectedOption.correct === "1";
  
        if (isCorrect) {
          totalScore += 1; // Tăng điểm số
          questionState.isCorrect = true;
  
          // Kiểm tra câu liệt (typeQuestion = 6)
          if (question.typeQuestion === 6) {
            hasFailedByLethalQuestion = false; // Trả lời đúng câu liệt
          }
        } else {
          questionState.isCorrect = false;
  
          // Đánh dấu là không đỗ nếu trả lời sai câu liệt
          if (question.typeQuestion === 6) {
            hasFailedByLethalQuestion = true;
          }
        }
      } else {
        questionState.isCorrect = false; // Đánh dấu câu hỏi chưa được trả lời
      }
  
      questionState.isChecked = true;
      questionState.isAnswered = true;
      questionState.explanation = question.tip || ""; // Thêm giải thích nếu có
    });
  
    const scoreLevel = getScoreLevel(totalScore, data.length);
  
    // Hiển thị kết quả
    setScore(totalScore);
    setScoreLevel(scoreLevel);
    setHasFailedByLethalQuestion(hasFailedByLethalQuestion);
    setIsQuizFinished(true);
  
    const formattedDate = getLocalISOString();
  
    const passed = !hasFailedByLethalQuestion && totalScore >= 21;
    const result = passed ? "Đỗ" : "Trượt";
  
    const { error } = await supabase
      .from('HistoryExam')
      .insert({
        idExam,
        timestamp: formattedDate, 
        score: score,
        result: result, 
      });
  
    if (error) {
      console.error("Failed to save exam result: ", error);
    } else {
      console.log("Exam result saved successfully.");
    }
  
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

  const imageSource = currentQuestion.question.image
    ? imageMap[currentQuestion.question.image]
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
            { color: data[currentIndex].question.typeQuestion === 6 ? "red" : "black" },
          ]}
        >
          {data[currentIndex].question.content}
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
          data={currentQuestion.question.option.options}
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

const BoDe1Stack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BoDe1Tab"
        component={BoDe1Tab}
        options={({ navigation }) => ({
          headerTitle: "Đề thi số 1",
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

export default BoDe1Stack;

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 10,
    paddingBottom: 50,
  },
  titleQuestion: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 15,
  },
  numberQuestion: {
    marginTop: 5,
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
  },
  explanationContainer: {
    backgroundColor: "#00FF99",
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
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 5,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    backgroundColor: "#2F95DC",
  },
  checkButton: {
    backgroundColor: "#33FF33",
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  navButton: {
    padding: 10,
    alignItems: "center",
  },
  finalScore: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2F95DC",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  btnendExam: {
    backgroundColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    maxHeight: 45,
    justifyContent: "center",
  },
  image: {
    resizeMode: "contain",
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  tabContainer: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 15,
  },
  tab: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: "#ddd",
  },
  activeTab: {
    backgroundColor: "#2F95DC",
  },
  tabText: {
    color: "#000",
    fontSize: 15,
  },
  activeTabText: {
    color: "#fff",
  },
  tabSwitch: {
    padding: 3,
    flexDirection: "row",
  },
  timerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
