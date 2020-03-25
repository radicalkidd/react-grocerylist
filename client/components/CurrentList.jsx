import React from 'react';
import styled from 'styled-components';

const List = styled.section`
  display: flex;
  padding-left: 5%;
`
const Item = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  margin-bottom: 2px;
  margin-top: 2px;
`

const CurrentList = props => (
  <List>
  <ul>
    {
      props.items.map((item, idx) => 
      <li key={idx}>
        <Item>{item[0].toUpperCase() + item.slice(1)}</Item>
      </li>
      )
    }
  </ul>
  </List>
);

export default CurrentList;