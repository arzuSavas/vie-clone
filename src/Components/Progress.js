import React from 'react'

const Progress=({ done })=> {
  return (
    <div  className='progress' style={{
       
        width:`${done}%`
    }}>
        
    </div>
  )
}

export default Progress