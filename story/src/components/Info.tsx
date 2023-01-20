import React, { useState, useEffect } from 'react'

interface Props {
  level: number
}
const Info:  React.FC<Props> = ({level}) => {
  // const dagger = require('./images/dagger.png')
  return (
    <div className='Info'>
      <h1>Town Map</h1>

      {level === 1 || level === 2 ? 
      <div className='Dot'>
      </div>
      :
      level === 3 || level === 4 ?
        <div className='Dot2'>
        </div>
      :
      level === 5 || level === 6 ? 
        <div className='Dot3'>
        </div>

      :null}




    </div>
  )
}

export default Info