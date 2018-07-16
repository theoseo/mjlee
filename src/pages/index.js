import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class RootIndex extends React.Component {
  render() {
   const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      
      <div className="image-pannel">
      <Helmet title={siteTitle} />
      </div>
      
    );
  }
}

export default RootIndex

