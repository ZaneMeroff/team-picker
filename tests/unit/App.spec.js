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

  describe('validatePlayerNameInputs', () => {

    it('if playerNames contains an empty string, error message is true', () => {
      let mockPlayerNames = ['Tommy', '', 'Chuckie']
      wrapper.vm.$data.playerNames = mockPlayerNames
      expect(wrapper.vm.$data.nameInputsErrorMessage).toEqual(false)
      wrapper.vm.validatePlayerNameInputs()
      expect(wrapper.vm.$data.nameInputsErrorMessage).toEqual(true)
    })

    it('if playerNames does not contain an empty string, error message is false ', () => {
      let mockPlayerNames = ['Tommy', 'Chuckie', 'Phil']
      wrapper.vm.$data.playerNames = mockPlayerNames
      expect(wrapper.vm.$data.nameInputsErrorMessage).toEqual(false)
      wrapper.vm.validatePlayerNameInputs()
      expect(wrapper.vm.$data.nameInputsErrorMessage).toEqual(false)
    })

    it('if playerNames does not contain an empty string, generateTeams is called', () => {
      let mockPlayerNames = ['Tommy', 'Chuckie', 'Phil']
      wrapper.vm.generateTeams = jest.fn()
      wrapper.vm.$data.playerNames = mockPlayerNames
      wrapper.vm.validatePlayerNameInputs()
      expect(wrapper.vm.generateTeams).toHaveBeenCalled()
    })

  })

  describe('nextScreen', () => {

    it('if nextScreen is called with next, currentStep is incremented by 1', () => {
      expect(wrapper.vm.$data.currentStep).toEqual(1)
      wrapper.vm.nextScreen('next')
      expect(wrapper.vm.$data.currentStep).toEqual(2)
    })

    it('if nextScreen is called with back, error message is false', () => {
      wrapper.vm.$data.nameInputsErrorMessage = true
      expect(wrapper.vm.$data.nameInputsErrorMessage).toEqual(true)
      wrapper.vm.nextScreen('back')
      expect(wrapper.vm.$data.nameInputsErrorMessage).toEqual(false)
    })

    it('if nextScreen is called with back, currentStep is decremented by 1', () => {
      wrapper.vm.$data.currentStep = 2
      expect(wrapper.vm.$data.currentStep).toEqual(2)
      wrapper.vm.nextScreen('back')
      expect(wrapper.vm.$data.currentStep).toEqual(1)
    })

  })

  describe('updateNumber', () => {

    it('if updateNumber is called with teamsUp, numberOfTeams is incremented by 1', () => {
      let mockAction = 'teamsUp'
      wrapper.vm.$data.numberOfTeams = 4
      expect(wrapper.vm.$data.numberOfTeams).toEqual(4)
      wrapper.vm.updateNumber(mockAction)
      expect(wrapper.vm.$data.numberOfTeams).toEqual(5)
    })

    it('if updateNumber is called with teamsDown, numberOfTeams is decremented by 1', () => {
      let mockAction = 'teamsDown'
      wrapper.vm.$data.numberOfTeams = 4
      expect(wrapper.vm.$data.numberOfTeams).toEqual(4)
      wrapper.vm.updateNumber(mockAction)
      expect(wrapper.vm.$data.numberOfTeams).toEqual(3)
    })

    it('if updateNumber is called with teamsUp, updatePlayers is called with teamsUp', () => {
      let mockAction = 'teamsUp'
      let expected = 'teamsUp'
      wrapper.vm.updatePlayers = jest.fn()
      wrapper.vm.updateNumber(mockAction)
      expect(wrapper.vm.updatePlayers).toHaveBeenCalledWith(expected)
    })

    it('if updateNumber is called with teamsDown, updatePlayers is called with teamsDown', () => {
      let mockAction = 'teamsDown'
      let expected = 'teamsDown'
      wrapper.vm.updatePlayers = jest.fn()
      wrapper.vm.updateNumber(mockAction)
      expect(wrapper.vm.updatePlayers).toHaveBeenCalledWith(expected)
    })

  })

  describe('updatePlayers', () => {

    it('if updatePlayers is called with playersUp, playerNames.length increases by 1', () => {
      let mockPlayerNames = ['Tommy', 'Chuckie', 'Phil']
      wrapper.vm.$data.playerNames = mockPlayerNames
      expect(wrapper.vm.$data.playerNames.length).toEqual(3)
      wrapper.vm.updatePlayers('playersUp')
      expect(wrapper.vm.$data.playerNames.length).toEqual(4)
    })

    it('if updatePlayers is called with playersDown, playerNames.length decreases by 1', () => {
      let mockPlayerNames = ['Tommy', 'Chuckie', 'Phil']
      wrapper.vm.$data.playerNames = mockPlayerNames
      expect(wrapper.vm.$data.playerNames.length).toEqual(3)
      wrapper.vm.updatePlayers('playersDown')
      expect(wrapper.vm.$data.playerNames.length).toEqual(2)
    })

    it('if updatePlayers is called with potato, playerNames.length stays the same', () => {
      let mockPlayerNames = ['Tommy', 'Chuckie', 'Phil']
      wrapper.vm.$data.playerNames = mockPlayerNames
      expect(wrapper.vm.$data.playerNames.length).toEqual(3)
      wrapper.vm.updatePlayers('potato')
      expect(wrapper.vm.$data.playerNames.length).toEqual(3)
    })

  })

  it('updateNames correctly finds and updates a player name based on index', () => {
    let mockPlayerNames = ['', '', '']
    let expected = ['Tommy', '', '']
    wrapper.vm.$data.playerNames = mockPlayerNames
    expect(wrapper.vm.$data.playerNames).toEqual(mockPlayerNames)
    wrapper.vm.updateNames('Tommy', 0)
    expect(wrapper.vm.$data.playerNames).toEqual(expected)
  })

})
