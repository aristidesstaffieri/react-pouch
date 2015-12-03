import React from 'react'
import passMeProps from '../hoc/Test'

class Test extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.passThisMethod}></button>
        <p>{this.props.greeting}</p>
      </div>
    )
  }
}

export default passMeProps(Test)
