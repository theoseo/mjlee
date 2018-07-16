import React from 'react'
import Link from 'gatsby-link'

export default ({data}) => {
   console.log("navigation data:" + data)
   return (
      <div>
      <div className="menu" style={{display:'block'}}>
      </div>
      <div className="main-title">
        <Link to="/project/">mjlee-draws</Link>
      </div>     
      </div>
   )
   
}


