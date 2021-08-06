import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: block;
  border: 1px solid red;
`;

const Title = styled.h2`
  margin: 10px 0;
  font-size: 30px;
`;

const Content = styled.div`
  font-size: 20px;
  color: red;
`;

export default function TestStyledComponents() {
  return (
    <Container>
      <Title>Test</Title>
      <Content>Styled Components is cool</Content>
    </Container>
  );
}
