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

  it('generateTeams correctly distributes players', () => {
    let mockNames = ['Tommy', 'Chuckie', 'Phil', 'Lil']
    let mockNumOfTeams = 2
    wrapper.vm.nextScreen = jest.fn()
    expect(wrapper.vm.$data.teamObjects.length).toEqual(0)
    wrapper.vm.generateTeams(mockNames, mockNumOfTeams)
    expect(wrapper.vm.$data.teamObjects.length).toEqual(2)
    expect(wrapper.vm.nextScreen).toHaveBeenCalledWith('next')
  })

  describe('validatePlayersExceedTeams', () => {

    it('if numberOfTeams exceeds number of players, error message is true', () => {
      let mockPlayerNames = ['Tommy', 'Chuckie']
      wrapper.vm.$data.numberOfTeams = 3
      wrapper.vm.$data.playerNames = mockPlayerNames
      expect(wrapper.vm.playerCountErrorMessage).toEqual(false)
      wrapper.vm.validatePlayersExceedTeams()
      expect(wrapper.vm.playerCountErrorMessage).toEqual(true)
    })

    it('if numberOfTeams does not exceed number of players, error message is false', () => {
      let mockPlayerNames = ['Tommy', 'Chuckie']
      wrapper.vm.$data.numberOfTeams = 2
      wrapper.vm.$data.playerNames = mockPlayerNames
      expect(wrapper.vm.playerCountErrorMessage).toEqual(false)
      wrapper.vm.validatePlayersExceedTeams()
      expect(wrapper.vm.playerCountErrorMessage).toEqual(false)
    })

  })

})
