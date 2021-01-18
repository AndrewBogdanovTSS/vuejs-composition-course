import {Moment} from 'moment'

export type TPeriod = 'today' | 'this week' | 'this month'

export interface IPost {
  id: string
  title: string
  markdown: string
  html: string
  authorId: string
  created: Moment
}
