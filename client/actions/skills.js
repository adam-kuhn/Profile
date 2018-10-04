import request from 'superagent'

export const SET_SKILLS = 'SET_SKILLS'

const setSkills = (skills) => {
  return {
    type: SET_SKILLS,
    skills
  }
}

export const getTechSkills = () => {
  return dispatch => {
    request
      .get('/api/v1/tech-skills')
      .then(skills => {
        dispatch(setSkills(skills.body))
      })
  }
}

export const getSoftSkills = () => {
  return dispatch => {
    request
      .get('api/v1/soft-skills')
      .then(skills => {
        dispatch(setSkills(skills.body))
      })
  }
}
