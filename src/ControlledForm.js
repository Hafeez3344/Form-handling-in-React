import React, { Component } from 'react'


export default class ControlledForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: "Hafeez"
    }
  }

  handleForm = (e) => {
    // console.log(e.target.value);

    this.setState({
      data: e.target.value.toLowerCase()
    })
  }

  render() {
    return (
      <div>
        <form>
          <h1>{this.state.data}</h1>
          <label htmlFor="">Your Name:</label>
          <input type="text" value={this.state.data} onChange={this.handleForm} />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
