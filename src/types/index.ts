import {Moment} from 'moment'

export type TPeriod = 'today' | 'this week' | 'this month'

export interface IPost {
  id: number
  title: string
  markdown: string
  html: string
  authorId: number
  created: Moment
}
