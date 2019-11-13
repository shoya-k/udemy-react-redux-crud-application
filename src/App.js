import React, { Component } from 'react';
import {connect} from "react-redux"

import { increment, decrement } from "../action"
import { dispatch } from '../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/rxjs/internal/observable/pairs';

/*props*/
//親から子に渡される。変更不可能(イミュータブル)

/*state*/
//コンポーネント内で使用する。変更可能(ミュータブル)

const App = () => (<Conuter></Conuter>)

class Conuter extends Component {

  render() {
    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>＋1</button>
        <button onClick={props.decrement}>－1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({value:state.conut.value});
const mapDispatchToProps = dispat => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default App;
