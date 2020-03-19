import React from 'react';
import styled from 'styled-components';

const List = styled.section `
  display: flex;
  justify-content: center;
`

const CurrentList = props => (
  <List>
  <ul>
    {
      props.items.map((item, idx) => <li key={idx}>{item}</li>)
    }
  </ul>
  </List>
);

export default CurrentList;