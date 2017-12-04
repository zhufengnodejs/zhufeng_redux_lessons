import React,{Component} from 'react';
import {connect} from '../react-redux';
import * as types from '../store/action-types';
class Counter2 extends Component {
  render() {
    const {number, onIncreaseClick} = this.props
    return (
      <div>
        <span>{number}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return state.counter2;
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch({type: types.INCREASE})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter2)