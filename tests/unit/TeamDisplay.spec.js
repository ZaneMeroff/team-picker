import { shallowMount } from '@vue/test-utils'
import TeamDisplay from '../../src/components/TeamDisplay/TeamDisplay.vue'

describe('TeamDisplay.vue', () => {

  it('component renders and matches snapshot', () => {
    const wrapper = shallowMount(TeamDisplay)
    expect(wrapper).toMatchSnapshot()
  })

})
