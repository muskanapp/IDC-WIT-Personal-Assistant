import React from 'react'

const headerStyles = {
    color: "#F4F5F8",
    fontWeight: "300",
    textAlign : 'center',
    margin: '50px 20px 60px 20px',
    fontFamily: "'Josefin Slab', 'serif'"
}

const Header = () => {
  return (
    <div className='header'>
      <h1 style={headerStyles}>Task Manager</h1>
    </div>
  )
}

export default Header
