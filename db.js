module.exports = () => {
  const moment = require('moment')
  const data = { posts: [] }
  const moments = [
    moment(),
    moment().subtract(2, 'days'),
    moment().subtract(2, 'weeks')
  ]
  // Create 1000 users
  for (let i = 0; i < 10; i++) {
    data.posts.push({
      id: i.toString(),
      title: `Today Post ${i+1}`,
      markdown: 'Content',
      html: '<p>Content</p>',
      authorId: i.toString(),
      created: moments[i % 3]
    })
  }

  return data
}