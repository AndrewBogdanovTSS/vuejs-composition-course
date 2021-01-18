import {IPost} from './index'

/*export interface IPostsState {
  ids: string[]
  all: Record<string, IPost>
  loaded: boolean
}*/

export interface IState {
  posts: IPost[]
}
