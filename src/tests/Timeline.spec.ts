import {mount} from '@vue/test-utils'
import Home from '../pages/Home.vue'
import flushPromises from 'flush-promises'
import fetch from 'jest-fetch-mock'

fetch.enableMocks()

const {posts} = require('../../db')()

// Mocking fetch manually
// @ts-ignore
// global.fetch = jest.fn(() => Promise.resolve({json: () => Promise.resolve(mock.posts)}))

beforeEach(() => {
  fetch.mockClear()
})

describe('Home', () => {
  it('renders a loader', () => {
    const wrapper = mount(Home)
    expect(wrapper.find('[data-test=progress]').exists()).toBe(true)
  })
  it('renders 3 Home periods', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(JSON.stringify(posts))
    const wrapper = mount(Home)
    await flushPromises()
    expect(wrapper.findAll('[data-test=period]')).toHaveLength(3)
  })
  it('renders error text when data fails to load', async () => {
    fetch.mockReject(() => Promise.reject('API Failure'))
    const wrapper = mount(Home)
    await flushPromises()
    expect(wrapper.text()).toBe('I failed to load')
  })
  it('updates the period when clicked', async () => {
    fetch.mockResponseOnce(JSON.stringify(posts))
    const wrapper = mount(Home)
    await flushPromises()
    const periods = wrapper.findAll('[data-test=period]')
    const today = periods[0]
    const thisWeek = periods[1]
    const thisMonth = periods[2]

    expect(today.classes()).toContain('is-active')
    await thisWeek.trigger('click')
    expect(today.classes()).not.toContain('is-active')
    expect(thisWeek.classes()).toContain('is-active')
    await thisMonth.trigger('click')
    expect(thisWeek.classes()).not.toContain('is-active')
    expect(thisMonth.classes()).toContain('is-active')
  })
  it('renders correct posts when period is selected', async () => {
    fetch.mockResponseOnce(JSON.stringify(posts))
    const wrapper = mount(Home)
    await flushPromises()
    const periods = wrapper.findAll('[data-test=period]')
    expect(wrapper.findAll('[data-test=post]')).toHaveLength(4)
    await periods[1].trigger('click')
    expect(wrapper.findAll('[data-test=post]')).toHaveLength(7)
    await periods[2].trigger('click')
    expect(wrapper.findAll('[data-test=post]')).toHaveLength(10)
  })
})
