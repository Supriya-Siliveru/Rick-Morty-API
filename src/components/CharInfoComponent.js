import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: center;
  border-bottom: 1px solid lightgray;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 300px;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const CharName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.8;
  }
`;
const CharInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  overflow: hidden;
  margin-top: 20px;
  margin-bottom: 20px;
  text-transform: capitalize;
  text-overflow: ellipsis;

  & span {
    opacity: 0.5;
  }
`;
const Close = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: black;
  background: lightgray;
  height: fit-content;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
`;
const CharInfoComponent = (props) => {

    const [charInfo, setCharInfo] = useState();
    const { selectedChar } = props;
    
    useEffect(() => {
      Axios.get(`https://rickandmortyapi.com/api/character/${selectedChar}`)
      .then((response) => setCharInfo(response.data));
    }, [selectedChar]);

    return (
      <Container>
          {charInfo?<>
            <CoverImage src={charInfo?.image}/>
        <InfoColumn>
          <CharName> 
              {charInfo?.name} <br />
              <CharInfo>{charInfo?.status} - {charInfo?.species}</CharInfo>
          </CharName>
          <CharInfo>
            <span>Last known location:</span>
            <div>{charInfo?.location.name}</div>
          </CharInfo>
          <CharInfo>
            <span>First seen in:</span>
            <div>{charInfo?.location.name}</div>
            {/* <div>{charInfo?.episode[0]}</div> */}
          </CharInfo>
        </InfoColumn>
        <Close onClick={() => props.onCharSelect()}>X</Close>
          </>:"Loading..."}
       
      </Container>
    );
};
    
export default CharInfoComponent;