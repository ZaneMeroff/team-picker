import { shallowMount } from '@vue/test-utils'
import TeamDisplay from '../../src/components/TeamDisplay/TeamDisplay.vue'

describe('TeamDisplay.vue', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TeamDisplay, {
      propsData: {
        id: 1,
        playerNames: ['','']
      }
    })
  })

  it('component render matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('component has correct props', () => {
    expect(wrapper.props().id).toEqual(1)
    expect(wrapper.props().playerNames).toEqual(['',''])
  })

})
