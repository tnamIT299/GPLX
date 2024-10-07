import { StyleSheet } from 'react-native'
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
      paddingVertical: 10,
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
    },
  });
  export default styles;