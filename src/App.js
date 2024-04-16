import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import CharComponent from "./components/charComponent";
import CharInfoComponent from "./components/CharInfoComponent";


const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
`;
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
const CharImage = styled.img`
  width: 36px;
  height: 36px;
  margin: 15px;
`;
const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;
const CharListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;;
`;
const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 150px;
  opacity: 50%;
`;

function App() {
  const [charList, updateCharList] = useState();
  const [selectedChar, onCharSelect] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('https://rickandmortyapi.com/api/character'); 
        updateCharList(response.data.results);
        // console.log(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <Container>
        <Header>
          <AppName>
            <CharImage src="./app-img/logo.svg" />
            Rick and Morti Api
          </AppName>
          <SearchBox>
            <SearchIcon src="./app-img/search-icon.svg" />
              <SearchInput Placeholder="Search Character" />
          </SearchBox>
        </Header>
        {selectedChar && 
          (<CharInfoComponent 
              selectedChar={selectedChar}
              onCharSelect={onCharSelect}  
              />
            )}
        <CharListContainer>
          {charList?.length 
            ? charList.map((char, index) => <CharComponent key={index} char={char} onCharSelect={onCharSelect}/>)
            : "No Character Found"
          }
        </CharListContainer>
    </Container>
  )
}

export default App;