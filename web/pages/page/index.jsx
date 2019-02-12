import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterActions from 'action/count';
import './index.less';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      test: '我是测试'
    }
  }

  onClick() {
    this.props.computedAdd();
  }

  componentWillMount() {

  }

  render() {
    return <div className='title-name'>
      <h1>
        {this.props.counter}
      </h1>
      <h2>{this.state.test}</h2>
      <button onClick={this.onClick.bind(this)}>点我加1</button>
    </div>
  }
}

// if(process.env.WEBPACK_WEB) {
//   ReactDOM.hydrate(<Title/>, document.querySelector('#app'));
// } else {

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
