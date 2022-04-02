import styled from "styled-components";

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  margin: 2em auto;
  justify-content: space-around;

  @media screen and (min-width: 1180px) {
    width: 50%;
  }
`;
