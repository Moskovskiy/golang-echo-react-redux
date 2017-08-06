import React from 'react'
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions/app';

import configureStore from './store/configureStore';

const store = configureStore();

class AppMain extends React.Component {
  componentDidMount() {
    this.props.fetchMessages()
  }
  render () {
    return (
      <div>
        <h1>{this.props.messages.name}</h1>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer name="React" />
    </Provider>,
    document.getElementById('app')
  );
});

// Connect to Redux
function mapStateToProps(state) {
  return {
    // propsを通して取得する際に使う名前: Storeのstateの値
    messages: state.messages,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppMain);
