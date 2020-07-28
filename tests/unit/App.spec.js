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

  it('distributeOddNumOfPlayers adds additional player appropriately', () => {
    let mockName = ['Tommy']
    let mockTeamObjects = [
      { teamID: 1, names: ['Chuckie', 'Angelica'] },
      { teamID: 2, names: ['Phil', 'Lil'] }
    ]
    let expected = [
      { teamID: 1, names: ['Chuckie', 'Angelica', 'Tommy'] },
      { teamID: 2, names: ['Phil', 'Lil'] }
    ]
    wrapper.vm.$data.teamObjects = mockTeamObjects
    wrapper.vm.distributeOddNumOfPlayers(mockName)
    expect(wrapper.vm.$data.teamObjects).toEqual(expected)
  })

  it('generateTeams', () => {
    let mockNames = ['Tommy', 'Chuckie', 'Phil', 'Lil']
    let mockNumOfTeams = 2
    expect(wrapper.vm.$data.teamObjects.length).toEqual(0)
    
  })

})
