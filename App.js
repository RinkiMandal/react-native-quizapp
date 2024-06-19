import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [currentquestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);


  const quizData = [
    {
      question: "What is the capital of India?",
      options: ["Chandigarh", "Goa", "Delhi", "Shimla"],
      answer: "Delhi"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter"
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Gold", "Oxygen", "Osmium", "Olive"],
      answer:  "Oxygen"
    },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer:  "Paris"
    },
    {
      question: "What is the chemical formula for water?",
      options: ["H2O", "CO2", "O2", "H2"],
      answer:  "H2O"
    },
  ]



const handleAnswer = (selectedAnswer) => {
  const answer = quizData[currentquestion]?.answer;
  if(answer === selectedAnswer){
    setScore((prevScore)=> prevScore + 1)
  } 
  const nextQuestion = currentquestion + 1;
  if(nextQuestion < quizData.length){
  setCurrentQuestion(nextQuestion)
  }
  else {
setShowScore(true)
  }

}

const handleRestart = () => {
  setCurrentQuestion(0);
  setScore(0);
  setShowScore(false)
}


  return (
    <View style={styles.container}>

      {showScore ? <View>
        <Text style={styles.optionStyle}>{score}</Text>
        <TouchableOpacity style={styles.optionContainer} onPress={handleRestart}>
          <Text style={styles.restBtn}>Restart</Text>
        </TouchableOpacity>

      </View> :

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{ quizData [currentquestion]?.question }</Text>
        {
          quizData[currentquestion]?.options.map((item) => {
            return <TouchableOpacity onPress={()=> handleAnswer(item)} style={styles.optionContainer}>
              <Text style={styles.optionStyle}> {item} </Text>
            </TouchableOpacity>
          })
        }

      </View>
          }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionContainer: {
    // backgroundColor: 'pink',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  optionStyle: {
color: "green",
padding: 5,
alignSelf: "center",
fontSize:18,
  },
  optionContainer: {
borderColor: "black",
borderWidth: 2,
marginTop: 15,
  },
  questionText: {
    fontSize: 24,
  },
  restBtn:{
fontSize: 18,
paddingHorizontal: 10,
  }
});
