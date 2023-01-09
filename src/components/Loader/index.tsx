import React from 'react'

import "./style.css"

const Loading = () => {
  return (
    <div
      className='loading-overlay'
      data-test-id='loading'
    >
      Carregando...
    </div>
  )
}

export default Loading