import {SET_SKILLS} from '../actions/skills'

const initialState = {
  skills: []
}

function skillSet (state = initialState, action) {
  switch (action.type) {
    case (SET_SKILLS): {
      return {skills: action.skills}
    }
    default: {
      return state
    }
  }
}

export default skillSet
