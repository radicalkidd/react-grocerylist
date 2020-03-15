import React from 'react';

const CurrentList = props => (
  <ul>
    {
      props.items.map((item, idx) => <li key={idx}>{item}</li>)
    }
  </ul>
);

export default CurrentList;