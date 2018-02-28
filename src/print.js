import React from 'react'

export default class PrintMe extends React.Component {

  render() {

    return (
      <div>{ this.props.name }</div>
    )
  }
}
