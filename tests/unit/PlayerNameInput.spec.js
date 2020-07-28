import { shallowMount } from '@vue/test-utils'
import PlayerNameInput from '../../src/components/PlayerNameInput/PlayerNameInput.vue'

describe('PlayerNameInput.vue', () => {

  it('component renders and matches snapshot', () => {
    const wrapper = shallowMount(PlayerNameInput)
    expect(wrapper).toMatchSnapshot()
  })

})
