import {mount} from '@vue/test-utils'
import Timeline from '../components/Timeline.vue'

describe('Timeline', () => {
  it('renders 3 timeline periods', () => {
    const wrapper = mount(Timeline)
    expect(wrapper.findAll('[data-test=period]')).toHaveLength(3)
  })
  it('updates the period when clicked', async () => {
    const wrapper = mount(Timeline)
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
    const wrapper = mount(Timeline)
    const periods = wrapper.findAll('[data-test=period]')

    expect(wrapper.findAll('[data-test=post]')).toHaveLength(1)
    await periods[1].trigger('click')
    expect(wrapper.findAll('[data-test=post]')).toHaveLength(2)
    await periods[2].trigger('click')
    expect(wrapper.findAll('[data-test=post]')).toHaveLength(3)
  })
})
