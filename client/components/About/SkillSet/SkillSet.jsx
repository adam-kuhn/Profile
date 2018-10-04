import React from 'react'
import {connect} from 'react-redux'

import StarRating from './StarRating/StarRating'
import {getSkills} from '../../../actions/skills'

const soft = 'Soft Skills'
const tech = 'Tech Skills'

class SkillSet extends React.Component {
  constructor () {
    super()
    this.state = {
      skillType: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    const skillType = e.target.value
    this.props.dispatch(getSkills(skillType))
    this.setState({
      skillType
    })
  }

  render () {
    return (
      <div>
        <p>
          My Skills are being held in a database.
          Press the button to access my skills
        </p>
        <p>
          Having only been coding for just about 1
          year I am not naive enough to say that I
          have mastered any of the below technologies.
          But I am however extremly proficient with
          them and I am always learning and growing
          and I know that one day I will be a <q>Master</q>.
        </p>
        <button type='button' onClick={this.handleClick} value ={tech}>
          Fetch {tech}
        </button>
        <button type='button' onClick={this.handleClick} value={soft}>
          Fetch {soft}
        </button>
        <h2>{this.state.skillType}</h2>
        <ul>
          {this.props.skills.map(skill => {
            return (
              <li key={skill.id}>
                <p>{skill.skill}: <StarRating stars={skill.rating} /></p>
                <p>{skill.description}</p>
              </li>
            )
          })}
        </ul>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    skills: state.skillSet.skills
  }
}

export default connect(mapStateToProps)(SkillSet)
