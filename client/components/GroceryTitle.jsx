import React from 'react';
import styled from 'styled-components';

const Title = styled.h1 `
 @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
	margin: 10px 0 0 -25px; 
	font-family: 'Pacifico', sans-serif;
  font-size: 2em;
  color: black;
  display: flex;
  justify-content: center;
`

const GroceryTitle = props => (
  <Title>Weekly Grocery List</Title>
);

export default GroceryTitle; 