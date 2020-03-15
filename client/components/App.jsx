import React, { Component } from 'react';
// import AddGroceries from './AddGroceries.jsx';
import CurrentList from './CurrentList.jsx';
// import Axios from 'axios';

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
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.word]
    })
  }

  render() {
    return (
      <div>
        <h1>Todays Groceries</h1>
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