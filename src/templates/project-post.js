import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Glider from '../components/glider'




class ProjectPostTemplate extends React.Component {

   constructor(props){
      super(props)


   }
   
   componentDidMount(){

   }

  render() {
    const post = get(this.props, 'data.contentfulProject')
    console.log(this.props)
    return(
      
      
      <div className="image-pannel">
      <Helmet title={`${post.title} `} />
      <Glider post={post} />   
      </div>
         
    )
  }
}

export default ProjectPostTemplate

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
   contentfulProject(slug: { eq: $slug }) {
      title
      createdAt(formatString: "MMMM Do, YYYY")
      images {
         file {
           url
         }
       }
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
