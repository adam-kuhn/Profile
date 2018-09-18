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
        console.log(result.body)
        this.setState({
          nasa: result.body,
          infoRetrieved: true
        })
      })
  }
  render () {
    const {date, explanation, title, media_type, url} = this.state.nasa
    if (this.state.infoRetrieved) {
      return (
        <div>
          <h3>{title}</h3>
          {/* {media_type === 'video'
            ? <video>
              <source src={url} type="video/mp4"/>
            </video>
            : <img src={url} />} */}
          <p>Date: {date}</p>
          <p>Description: {explanation}</p>
          <img src="https://www.google.fi/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj85fbqx8TdAhXOp4sKHSNVAGEQjRx6BAgBEAU&url=https%3A%2F%2Fwww.smithsonianmag.com%2Fscience-nature%2Fgreening-future-outer-space-180969212%2F&psig=AOvVaw33n6_dJ7bfzxWqB6kH5369&ust=1537360281778881" />
        </div>
      )
    } else {
      return (<p>Fetching cool things</p>)
    }
  }
}

export default Nasa
