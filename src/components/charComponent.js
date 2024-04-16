import React from "react";
import styled from "styled-components";

const CharContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 362px;
`;
const CharName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const CharInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;

const CharComponent = (props) => {
  const { name, status, species, id, image} = props.char;

  return (
    <CharContainer onClick={()=>props.onCharSelect(id)}>
      <CoverImage src={image} />
      <CharName>{name}</CharName>
      <InfoColumn>
        <span>Status: {status}</span>
        <span>Species: {species}</span>
      </InfoColumn>
    </CharContainer>
  )
};

export default CharComponent;