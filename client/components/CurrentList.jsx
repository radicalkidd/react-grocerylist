import React from 'react';
import styled from 'styled-components';


const List = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
	margin: 20px 0 0 -25px; 
	font-family: 'Pacifico', sans-serif;
	list-style-type: square;
  list-style-position: inside;
  position: center;
`
const CurrentList = props => (
  <List>
    {
      props.items.map((item, idx) => 
      <li key={idx}>
        {item[0].toUpperCase() + item.slice(1)}
      </li>
      )
    }
  </List>
);

export default CurrentList;