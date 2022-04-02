import { useState } from "react";
import queryString from "query-string";
import styled from "styled-components";

import quizzes from "./quizzes.json";

import { Quiz } from "./Quiz";
import { Chapters } from "./Chapters";
import { Challenge } from "./Challenge";

const Main = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const params = queryString.parse(window.location.search);

const initial = params.chapter
  ? quizzes.chapters[parseInt(params.chapter)]
  : null;

function App() {
  const [chapter, setChapter] = useState(initial);
  const [challenge, setChallenge] = useState(false);

  const startQuiz = (chapter) => {
    setChapter(chapter);
  };

  const showChallenge = (chapter) => {
    setChallenge(chapter.challenge);
  };

  const quizDone = () => {
    setChapter(null);
    setChallenge(null);
  };

  return (
    <>
      {challenge ? (
        <Challenge challenge={challenge} onDone={quizDone} />
      ) : chapter ? (
        <Quiz chapter={chapter} onDone={quizDone} />
      ) : (
        <Main>
          <Chapters
            quizzes={quizzes}
            onSelect={startQuiz}
            onChallenge={showChallenge}
          />
        </Main>
      )}
    </>
  );
}

export default App;
