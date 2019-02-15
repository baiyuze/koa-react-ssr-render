import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CounterActions from 'action/count';

class Layout extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <span>

        <a href={`/`} style={{color: 'pink', fontSize: 50}}>首页</a>
        <a href={`/page2`} style={{color: 'pink', fontSize: 50}}>次页</a>
        <a href="">{this.props.counter}</a>
        {
          this.props.children
        }
      </span>
    )
  }
}
const mapStateToProps = (state) => ({
  counter: state.counter,
  state: state
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)