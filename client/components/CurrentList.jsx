import React, { Component } from 'react';

class CurrentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      qty: ''
    }
  }

  render() {
    const groceryItems = this.props.groceries.map((item, i) => {
      const { name, qty } = item;
      return <li key={i}>
        <span>{name + ""}</span>
        <span>{" " + qty}</span>
      </li>
    })
    return (
      <div>
        <ul className="groceries">
          {groceryItems}
        </ul>
      </div>
    );
  }
}

export default CurrentList;