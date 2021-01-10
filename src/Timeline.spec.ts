import {mount} from '@vue/test-utils'
import Timeline from './Timeline.vue'

describe('Timeline', () => {
  it('renders 3 timeline periods', () => {
    const wrapper = mount(Timeline)
    expect(wrapper.findAll('[data-test=period]')).toHaveLength(3)
  })
  it('updates the period when clicked', () => {
    const wrapper = mount(Timeline)
    expect(wrapper.findAll('[data-test=period]')[0].classes()).toContain('is-active')
  })

})
