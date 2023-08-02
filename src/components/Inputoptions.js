import React from 'react'

import './Inputoptions.css'

function Inputoptions({Icon,title,color}) {
  return (
    <div className='input-options'>
        <Icon style={{color:color}} />
        <h4>{title}</h4>
    </div>
  )
}

export default Inputoptions