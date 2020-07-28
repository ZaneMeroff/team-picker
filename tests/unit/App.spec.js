import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App)
  })

  it('component render matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('component has correct default data values', () => {
    expect(wrapper.vm.$data.numberOfTeams).toEqual(2)
    expect(wrapper.vm.$data.playerNames).toEqual(['',''])
    expect(wrapper.vm.$data.teamObjects).toEqual([])
    expect(wrapper.vm.$data.currentStep).toEqual(1)
    expect(wrapper.vm.$data.playerCountErrorMessage).toEqual(false)
    expect(wrapper.vm.$data.nameInputsErrorMessage).toEqual(false)
  })

  it('buildTeamObjects creates correct number of teams', () => {
    expect(wrapper.vm.$data.teamObjects.length).toEqual(0)
    wrapper.vm.buildTeamObjects(2)
    expect(wrapper.vm.$data.teamObjects.length).toEqual(2)
  })


})
