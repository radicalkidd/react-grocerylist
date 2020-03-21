import React from 'react';
import styled from 'styled-components';

const List = styled.section `
  display: flex;
  padding-left: 5%;
`

const CurrentList = props => (
  <List>
  <ul>
    {
      props.items.map((item, idx) => 
      <li key={idx}>
        {item[0].toUpperCase() + item.slice(1)}
      </li>
      )
    }
  </ul>
  </List>
);

export default CurrentList;