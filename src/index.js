// import React from 'react'
// import ReactDOM from 'react-dom'

import PrintMe from './print'

// ReactDOM.render( <PrintMe name='my name is ah' />, document.getElementById( 'content' ) )

require.ensure( [], ( require ) => {

  let PrintMe = require( './print' ) || ''
  ReactDOM.render( <PrintMe name='my name is ah' />, document.getElementById( 'content' ) )
} )
