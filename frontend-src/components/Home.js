import React, { useEffect } from 'react'

function Home () {
  useEffect(() => {
    document.title = 'SydTek'
  }, [])

  return (
    <div>
      <h2 className='display-4'>Sale your items on the blockchain network with SydTek </h2>
      <p className='lead'>List of items autoscrolling right here</p>
      <p>List some the services our site has here</p>
    </div>
  )
}

export default Home
