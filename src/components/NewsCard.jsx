import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 25vh;
  width: 70%;
  background-color: lightcoral;
  display: flex;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`;

const ImageContainer = styled.div`
    display: flex;
    flex: 2;
    height: 100%;
    width: 100%;
    border-radius:15px;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: fit;
    border-radius:15px;

`;

const DescContainer = styled.div`
    display: flex;
    flex: 3;
    padding: 10px;
    flex-direction: column;
`;

const Desc = styled.p`
  width: 100%;
  height: 90%;
  overflow: hidden;
`;

const ShowMore = styled.a`
  cursor: pointer;
  color: blue;
`;

const NewsCard = ({ news }) => {
    return (
        <Container>
            <ImageContainer>
                <Image src={news.urlToImage} />
            </ImageContainer>
            <DescContainer>
                <Desc>
                    {news.description}
                </Desc>
                <ShowMore>{news.url}</ShowMore>
            </DescContainer>
        </Container>
    )
}

export default NewsCard
