import moment from 'moment'
import {IPost} from '../types'

export default [
  {
    id: 1,
    title: 'Today Post',
    markdown: 'Content',
    html: '<p>Content</p>',
    authorId: 1,
    created: moment()
  } as IPost,
  {
    id: 2,
    title: 'This Week Post',
    markdown: 'Content',
    html: '<p>Content</p>',
    authorId: 1,
    created: moment().subtract(2, 'days')
  } as IPost,
  {
    id: 3,
    title: 'This Month Post',
    markdown: 'Content',
    html: '<p>Content</p>',
    authorId: 1,
    created: moment().subtract(2, 'weeks')
  } as IPost
]
