import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import style from './style.css'
import Container from '../components/container'
import get from 'lodash/get'


class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const postIndex = get(this.props, 'data.allContentfulProject')

    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    let navigation = <div className="menu" style={{display:'hidden'}}></div>
    let projects =  <ul className="projects">
    {postIndex.edges.map(({ node }) => {
       return (
       <li key={node.slug}>
          <Link to={`/project/${node.slug}`}>{node.title}</Link>
       </li>
       )
    })}      
    <li>
    </li>
   </ul>
    console.log(location.pathname)
    if (location.pathname !== '/'){
      let navStyle = null
       if(location.pathname === '/project/'){
          navStyle = {display:'block'}
       }

      navigation = <div className="menu" style={navStyle}>
      {projects}
       <ul className="other-menu">
       <li>
       <Link to="/drawings/">drawings</Link>
       </li>

       <li>
       <Link to="/contact/">contact</Link>
       </li>
       </ul>
       </div>
    }

    return (
      <Container>
      <Helmet title={siteTitle} />
      <div className="main-pannel">
        {children(this.props)}
        {navigation}
        <div className="main-title">
          <Link to="/project/">mjlee-draws</Link>
        </div>         
  
      </div>
      </Container>
    )
  }
}

export default Template

export const query = graphql`
  query menuQuery {
   allContentfulProject(sort: { fields: [createdTime], order: ASC }) {
      edges {
        node {
          title
          slug
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }    
  }
`
