// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {
  
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Input a Band name:</label><br/>
          <input type='text' onChange={this.handleChange} value={this.state.name}/>
        </form>
        <input type='submit' />
      </div>
    )
  }
}

export default BandInput
