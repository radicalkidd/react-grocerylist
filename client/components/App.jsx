import React, { Component } from 'react';
import styled from 'styled-components';
import CurrentList from './CurrentList.jsx';
import GroceryTitle from './GroceryTitle.jsx';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding-left: 15%;
  padding-bottom: 1%;
`
const Box = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -70px;
  margin-left: -190px;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      items: []
    }
    this.onChange = this.onChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  
  onChange(event) {
    this.setState({ word: event.target.value });
  }

  submitHandler(event) {
    //The preventDefault() method stops the default action of an element from happening.
    event.preventDefault();
    this.setState({
      word: '',
      items: [...this.state.items, this.state.word]
    });
  }

  render() {
    return (
      <div>
        <GroceryTitle />
        <Wrapper>
        <form className="form-group field" onSubmit={this.submitHandler}>
          <input className="form-field" placeholder="item" value={this.state.word} onChange={this.onChange} />
          <button className="addButton">Add Item</button>
        </form>
        </Wrapper>
        <Box>
        <CurrentList items={this.state.items}/>
        </Box>
      </div>
    );
  }
}

export default App;