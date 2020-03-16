import React, { Component } from 'react';
import CurrentList from './CurrentList.jsx';
import GroceryTitle from './GroceryTitle.jsx';

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
        {/* <AddGroceries submitHandler={this.submitHandler}/> */}
        <form className="App" onSubmit={this.submitHandler}>
          <input value={this.state.word} onChange={this.onChange} />
          <button>Add</button>
        </form>
        <CurrentList items={this.state.items}/>
      </div>
    );
  }
}

export default App;