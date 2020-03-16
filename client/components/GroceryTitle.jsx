import React from 'react';
import styled from 'styled-components';

const Title = styled.h1 `
  font-size: 2em;
  color: salmon;
  display: flex;
  justify-content: center;
`

const GroceryTitle = props => (
  <Title>Weekly Grocery List</Title>
)

export default GroceryTitle; 