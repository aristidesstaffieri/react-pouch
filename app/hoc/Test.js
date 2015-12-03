import React, { Component } from 'react'

const passMeProps = (WrappedComponent) => {
  WrappedComponent.prototype.passThisMethod = () => {
    console.log('yo man')
  }
  class LoggerWrap extends Component {
    render() {
      return (
        <WrappedComponent greeting={'Yo'} />
      )
    }
  }
  LoggerWrap.defaultProps = {
    greeting: 'Yo!'
  }
  return LoggerWrap
}

export default passMeProps
