import React from 'react'
import request from 'superagent'

class Nasa extends React.Component {
  constructor () {
    super()
    this.state = {
      nasa: {},
      infoRetrieved: false
    }
  }
  componentDidMount () {
    request.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(result => {
        this.setState({
          nasa: result.body,
          infoRetrieved: true
        })
      })
      .catch(err => {
        console.error(err)
      })
  }
  render () {
    const {date, explanation, title, media_type, url} = this.state.nasa
    if (this.state.infoRetrieved) {
      return (
        <div>
          <h3>{title}</h3>
          {media_type === 'video'
            ? <iframe src={url}/>
            : <img src={url} />}
          <p>Date: {date}</p>
          <p>Description: {explanation}</p>
        </div>
      )
    } else {
      return (<p>Fetching cool things</p>)
    }
  }
}

export default Nasa
