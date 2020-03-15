import React, { Component } from 'react';
import AddGroceries from './AddGroceries.jsx';
import CurrentList from './CurrentList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries : [
        {name: 'ham', qty: 1},
        {name: 'cheese', qty: 1},
        {name: 'bread', qty: 1 },
        {name: 'tomatoes', qty: 2}
      ]
    }
    this.submitHandler = this.submitHandler.bind(this);
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: 'http://localhost:3000/',
  //     method: 'GET',
  //     success: (data) => {
  //       this.setState({
  //         groceries: data
  //       });
  //     }
  //   });
  // }

  submitHandler(name, quantity) {
    console.log(name, quantity);
    let copyState = this.state.groceries.slice();

    copyState.push({name:name, qty:quantity});

    // this.setState(
    //   {groceries: copyState}
    // );
  }

  render() {
    const { groceries } = this.state;
    return (
      <div>
        <h1>Todays Groceries</h1>
        <AddGroceries submitHandler={this.submitHandler}/>
        <CurrentList groceries={groceries}/>
      </div>
    );
  }
}

export default App;