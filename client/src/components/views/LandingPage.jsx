import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LandingPage = () => (
  <Container>
    <h2>Welcome to Darnes and Global!</h2>
  </Container>
);

export default LandingPage;
