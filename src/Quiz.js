import { useState } from "react";
import styled from "styled-components";

import { View } from "./View";
import { Button } from "./Button";
import { Actions } from "./Actions";
import { Markdown } from "./Markdown";
import { Question } from "./Question";

const Options = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 2em auto;

  @media screen and (min-width: 1180px) {
    width: 50%;
  }
`;

const Choice = styled.button`
  display: block;
  border: 1px solid #616a94;
  border-radius: 15px;
  padding: 15px 30px;
  text-decoration: none;
  color: #616a94;
  background-color: #161a31;
  transition: 0.3s;
  font-size: 1em;
  outline: none;
  user-select: none;
  margin-top: 1em;
  cursor: pointer;

  @media screen and (min-width: 1180px) {
    &:hover {
      color: white;
      background-color: #616a94;
    }
  }
`;

const error = {
  background: "#8e0707",
  color: "#f48c8c",
  border: "1px solid #946161",
};

export const Quiz = ({ chapter, onDone }) => {
  const [quizIndex, setQuizIndex] = useState(0);
  const [errorIndex, setErrorIndex] = useState(null);

  const pickAnswer = (response) => {
    if (chapter.quiz[quizIndex].response - 1 !== response) {
      setErrorIndex(response);
      return;
    }

    nextQuestion();
  };

  const nextQuestion = () => {
    if (quizIndex < chapter.quiz.length - 1) {
      setQuizIndex(quizIndex + 1);
      setErrorIndex(null);
    } else {
      onDone();
    }
  };

  return (
    <View>
      <Question>
        <Markdown>{chapter.quiz[quizIndex].text}</Markdown>
      </Question>

      <Options>
        {chapter.quiz[quizIndex].choices.map((item, index) => (
          <Choice
            key={index}
            onClick={() => pickAnswer(index)}
            style={errorIndex === null || errorIndex !== index ? null : error}
          >
            <Markdown>{item}</Markdown>
          </Choice>
        ))}
      </Options>

      <Actions>
        <Button onClick={onDone}>Back</Button>
        <Button onClick={nextQuestion}>Next</Button>
      </Actions>
    </View>
  );
};
