import request from 'superagent'

export const GET_TECH_SKILLS = 'GET_TECH_SKILLS'
export const SET_TECH_SKILLS = 'SET_TECH_SKILLS'

const setTechSkills = (skills) => {
  return {
    type: SET_TECH_SKILLS,
    skills
  }
}

export const getTechSkills = () => {
  return dispatch => {
    request
      .get('/api/v1/tech-skills')
      .then(skills => {
        dispatch(setTechSkills(skills.body))
      })
  }
}
