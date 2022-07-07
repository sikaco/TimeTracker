// import { routerMiddleware } from 'react-router-redux'
// import createHistory from 'history/createBrowserHistory'
// import { createStore, compose, Reducer, Store } from 'redux'
// import { createEpicMiddleware, combineEpics, Epic } from 'redux-observable'
// import { BehaviorSubject } from 'rxjs'

// import { GlobalState, createReducer } from './reducers'

// // import { createGtaMiddleware } from './middleware'

// import { reduxDevToolEnhancer } from './devtools'
// import { epics } from './epic'

// interface GlobalStore<T> extends Store<T> {
//   asyncReducers: { [key: string]: Reducer<any> }
// }

// export const history = createHistory()

// const epic$ = new BehaviorSubject(combineEpics(...epics))

// const WINDOW_INITIAL_STATE = {}

// const configureStore = () => {
//   const rootEpic = (a$: any, s: any) => epic$.mergeMap(e => e(a$, s))
//   const epicMiddleware = createEpicMiddleware<any, any>(rootEpic)

//   const result = createStore(
//     createReducer({}),
//     WINDOW_INITIAL_STATE,
//     compose(
//       applyMiddleware(createGtaMiddleware(gta), epicMiddleware, routerMiddleware(history)),
//       reduxDevToolEnhancer()
//     )
//   ) as GlobalStore<GlobalState>

//   result.asyncReducers = {}

//   return result
// }

// export const store = configureStore()

// export const addUIReducer = (asyncReducers: { [key: string]: Reducer<any> }) => {
//   store.asyncReducers = { ...store.asyncReducers, ...asyncReducers }
//   store.replaceReducer(createReducer(store.asyncReducers))
// }

// const asyncEpics: Epic<any, any>[] = []
// export const addEpic = (asyncEpic: Epic<any, any>) => {
//   if (asyncEpics.every(e => e !== asyncEpic)) {
//     asyncEpics.push(asyncEpic)
//     epic$.next(asyncEpic)
//   }
// }
