import React, { Component } from 'react';

/*props*/
//親から子に渡される。変更不可能(イミュータブル)

/*state*/
//コンポーネント内で使用する。変更可能(ミュータブル)

const App = () => (<Conuter></Conuter>)

class Conuter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <React.Fragment>
        <div>Counter: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>＋1</button>
        <button onClick={this.handleMinusButton}>－1</button>
      </React.Fragment>
    )
  }
}

export default App;
