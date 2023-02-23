// TODO
import React from 'react'
import {RootStoreModel} from 'state/models/root-store'

const _analytics = {
  screen(_name: string) {},
  track(_name: string, _opts: any) {},
}
export function useAnalytics() {
  return _analytics
}

export function init(_store: RootStoreModel) {}

export function Provider({children}: React.PropsWithChildren<{}>) {
  return children
}