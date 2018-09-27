import {SET_TECH_SKILLS} from '../actions/skills'

const initialState = {
  skills: []
}

function skillSet (state = initialState, action) {
  switch (action.type) {
    case (SET_TECH_SKILLS): {
      return {skills: action.skills}
    }
    default: {
      return state
    }
  }
}

export default skillSet
