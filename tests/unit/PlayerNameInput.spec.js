import { shallowMount } from '@vue/test-utils'
import PlayerNameInput from '../../src/components/PlayerNameInput/PlayerNameInput.vue'

describe('PlayerNameInput.vue', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PlayerNameInput, {
      propsData: {
        updateNames: jest.fn(),
        id: 1
      }
    })
  })

  it('component render matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('component has correct props', () => {
    expect(typeof wrapper.props().updateNames).toBe('function')
    expect(wrapper.props().id).toEqual(1)
  })

  it('component has correct default data values', () => {
    expect(wrapper.vm.$data.name).toEqual(name)
  })

})
