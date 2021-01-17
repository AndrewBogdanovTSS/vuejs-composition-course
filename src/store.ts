import {reactive, readonly} from 'vue'
import mocks from './mocks/posts'
import {IState} from './types/store'

class Store {
  protected _state: IState

  constructor(initState: IState) {
    this._state = reactive(initState)
  }
  public get state(): IState {
    return readonly(this._state)
  }
}

const store = new Store({})

console.log(store)
