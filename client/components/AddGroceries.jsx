import React, { Component } from 'react';

class AddGroceries extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      qty: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitWrapper = this.submitWrapper.bind(this);
  }

  handleChange(event) {
    console.log(event)
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitWrapper(e) {
    // e.preventDefault();
    this.props.submitHandler(this.state.name, this.state.qty);
  }

  render() {
    return (
      <form>
        <label>
          Item
          <input name="name"
          value={this.state.name}
          onChange={this.handleChange}
          />
        </label>
      <label>
        Quantity 
        <input name="quantity"
        value={this.state.qty}
        onChange={this.handleChange} 
        />
      </label>
      <button onClick={(event)=this.submitWrapper(event)}>Add Item</button>
      </form>
    );
  }
}

export default AddGroceries;