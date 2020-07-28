import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('does something...', () => {
    const msg = 'new message'
    const wrapper = shallowMount(App)
    expect(msg).toEqual('new message')
  })
})
