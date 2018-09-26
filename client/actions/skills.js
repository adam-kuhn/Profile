import request from 'superagent'

export const GET_TECH_SKILLS = 'GET_TECH_SKILLS'

const setTechSkills = () => {

}

export const getTechSkills = () => {
  return dispatch => {
    request
      .get('/api/v1/tech-skills')
      .then(skills => {
        // do stuff
        dispatch(setTechSkills())
      })
  }
}
