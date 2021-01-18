import {reactive, readonly} from 'vue'
import {IState} from './types/store'
import moment from 'moment'

const initState = (): IState => ({
  posts: []
})

class Store {
  protected _state: IState

  constructor(initState: IState) {
    this._state = reactive(initState)
  }

  get state() {
    return readonly(this._state)
  }

  async getPosts() {
    const data = await (await fetch('http://localhost:3000/posts')).json()
    this._state.posts = data.map(item => ({...item, created: moment(item.created)}))
  }
}

export const store = new Store(initState())
