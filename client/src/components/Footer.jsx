import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        &copy; {new Date().getFullYear()} MyBlog. All rights reserved.
        <span style={{marginLeft: '8px'}}>
          | Made with <span style={{color: '#e25555'}}>&hearts;</span> by <a href="https://github.com/" target="_blank" rel="noopener noreferrer">YourName</a>
        </span>
      </div>
    </div>
  )
}

export default Footer