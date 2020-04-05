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
        <CurrentList items={this.state.items}/>
      </div>
    );
  }
}

export default App;