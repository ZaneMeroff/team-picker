import { shallowMount } from '@vue/test-utils'
import NumSelector from '../../src/components/NumSelector/NumSelector.vue'

describe('NumSelector.vue', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(NumSelector, {
      propsData: {
        label: 'teams',
        number: 2,
        updateNumber: jest.fn()
      }
    })
  })

  it('component render matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('component has correct props', () => {
    expect(wrapper.props().label).toEqual('teams')
    expect(wrapper.props().number).toEqual(2)
    expect(typeof wrapper.props().updateNumber).toEqual('function')
  })

  it('component has correct default data values', () => {
    expect(wrapper.vm.$data.buttonTypeUp).toEqual('teamsUp')
    expect(wrapper.vm.$data.buttonTypeDown).toEqual('teamsDown')
  })

})
