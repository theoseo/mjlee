import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'


class ContactIndex extends React.Component {
  render() {
    const contactPage = get(this, 'props.data.contentfulPage')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
  
   return(

      <div className="image-pannel">
      <Helmet title={siteTitle} />
      <div className="stext"
      dangerouslySetInnerHTML={{
        __html: contactPage.description.childMarkdownRemark.html,
      }}
      />         
      </div>

   )
  }
}

export default ContactIndex

export const contactQuery = graphql`
query ContactPage {
   contentfulPage(slug:{eq:"contact"}){
    title
    description {
          childMarkdownRemark {
            html
          }    
    }
     } 
  }
`