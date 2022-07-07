import { actions } from './modules'

export type State = Readonly<{}>
export type DispatchProps = Readonly<{
  readonly actions: typeof actions
}>
