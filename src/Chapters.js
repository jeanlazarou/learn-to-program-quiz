import styled from "styled-components";

import { SmallButton } from "./Button";

const Actions = styled.div`
  display: inline-flex;
`;

const Chapter = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 2.8em;
  padding-left: 0.5em;

  &:not(:last-child) {
    border-bottom: 1px solid #616a94;
  }

  &:hover {
    background-color: #242545;
    border-radius: 3px;
  }

  // &:hover ${Actions} {
  //   display: inline-flex;
  // }

  @media screen and (max-width: 900px) {
    font-size: 0.6em;
  }
`;

const Badge = styled.div`
  position: absolute;
  right: -2em;
  top: -0.8em;
  width: 0.6em;
  height: 0.6em;
  margin-right: 0.5em;
  padding: 0.6em 0.9em 1em 1em;
  border-radius: 50%;
  background-color: #1d08b5;
  color: white;
  font-size: 1em;
  line-height: 1em;
  text-align: center;
`;

export const Empty = styled.div`
  padding: 10px 15px;
  margin: 5px 10px 2px 10px;
  font-size: 0.5em;
  opacity: 0;
`;

export const Chapters = ({ quizzes, onSelect, onChallenge }) => {
  return (
    <>
      <h2>Learning to program: by example</h2>

      {quizzes.chapters.map((chapter, index) => (
        <Chapter key={chapter.number}>
          Chapter {chapter.number}: {chapter.title}
          {chapter.quiz.length > 0 && (
            <Actions>
              <SmallButton
                key={chapter.number}
                onClick={() => onSelect(chapter)}
                style={{ position: "relative" }}
              >
                Quiz
                <Badge>{chapter.quiz.length}</Badge>
              </SmallButton>

              {chapter.challenge ? (
                <SmallButton onClick={() => onChallenge(chapter)}>
                  Challenge
                </SmallButton>
              ) : (
                <Empty>Challenge</Empty>
              )}
            </Actions>
          )}
        </Chapter>
      ))}
    </>
  );
};
