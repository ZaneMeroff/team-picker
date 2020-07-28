import { shallowMount } from '@vue/test-utils'
import NumSelector from '../../src/components/NumSelector/NumSelector.vue'

describe('NumSelector.vue', () => {

  it('component renders and matches snapshot', () => {
    const wrapper = shallowMount(NumSelector)
    expect(wrapper).toMatchSnapshot()
  })

})
