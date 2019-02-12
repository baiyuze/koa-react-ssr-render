import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducer'

const configureStore = (initStore) => {
  const store = createStore(
    rootReducer,
    initStore,
    applyMiddleware(thunk)
  )

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     store.replaceReducer(rootReducer)
  //   })
  // }

  return store
}

export default configureStore