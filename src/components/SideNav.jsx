import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 90vh;
  width: 20%;
  background-color:lightblue;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SideNav = () => {
  return (
    <Container>
      <TitleContainer><p>hi</p></TitleContainer>
      <TitleContainer><p>hi</p></TitleContainer>
      <TitleContainer><p>hi</p></TitleContainer>
      <TitleContainer><p>hi</p></TitleContainer>
    </Container>
  )
}

export default SideNav
