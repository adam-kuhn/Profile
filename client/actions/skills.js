import request from 'superagent'

export const SET_SKILLS = 'SET_SKILLS'

const setSkills = (skills) => {
  return {
    type: SET_SKILLS,
    skills
  }
}

export const getSkills = (skillType) => {
  return dispatch => {
    request
      .post('/api/v1/skills')
      .set('Content-Type', 'application/json')
      .send({skillType})
      .then(skills => {
        dispatch(setSkills(skills.body))
      })
  }
}
