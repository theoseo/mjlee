import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Glider from '../components/glider'


class DrawingsIndex extends React.Component {

   constructor(props){
      super(props)
   }
   
  render() {
   const drawings = get(this, 'props.data.allContentfulDrawing.edges')
   const siteTitle = get(this.props, 'data.site.siteMetadata.title')
   console.log(drawings)

   return(

      <div className="image-pannel">
      <Helmet title={siteTitle} />
      <Glider page={location.pathname} data={drawings}/>
      </div>
         
    )
  }

}

export default DrawingsIndex

export const drawingQuery = graphql`
query drawings {
   allContentfulDrawing(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          title
          image {
            id
            file {
              url
              fileName
              contentType
            }
          }     
        }
      }
    }
  }
`