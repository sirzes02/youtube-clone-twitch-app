import React from "react";
import { Text } from "react-native";
import { withTheme } from "styled-components";
import Header from "../../components/Header";
import { Wrapper, Container, Main } from "./styles";

const CoomingSoon: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Main />
      </Container>
    </Wrapper>
  );
};

export default CoomingSoon;
