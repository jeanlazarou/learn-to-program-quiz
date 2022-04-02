import { useState } from "react";
import styled from "styled-components";

import { View } from "./View";
import { Button } from "./Button";
import { Section } from "./Section";
import { Actions } from "./Actions";
import { Question } from "./Question";
import { Markdown } from "./Markdown";

const Solution = styled.div`
  margin: 2em auto;
  padding-top: 2em;
  font-weight: bold;
  border-top: 1px solid #616a94;
`;

export const Challenge = ({ challenge, onDone }) => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <View>
      <Question>
        <Markdown>{challenge.text}</Markdown>
      </Question>

      {showSolution && (
        <Section>
          <Solution>Solution:</Solution>
          <Markdown>{challenge.solution}</Markdown>
        </Section>
      )}

      <Actions>
        <Button onClick={onDone}>Back</Button>

        {!showSolution && (
          <Button onClick={() => setShowSolution(true)}>Solution</Button>
        )}
      </Actions>
    </View>
  );
};
