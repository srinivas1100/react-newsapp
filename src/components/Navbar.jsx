import React from 'react'
import styled from 'styled-components';
import { Menu } from '@material-ui/icons';

const Container = styled.div`
  height: 10vh;
  width: 100%;
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;
const Icon = styled.div`
 height: 100%;
 width: 20%;
 display: flex;
 justify-content:  start;
 align-items: center;
 padding-left: 10px;
 
 
`
const TitleContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const Title = styled.h1`
`;

const Navbar = () => {
  return (
    <Container>
      <Icon><Menu /></Icon>
      <TitleContainer>
        <Title>NEWS APP</Title>
      </TitleContainer>

    </Container>
  )
}

export default Navbar
