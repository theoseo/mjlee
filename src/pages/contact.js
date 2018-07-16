import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import styles from './blog.module.css'


class ContactIndex extends React.Component {
  render() {
    const contactPage = get(this, 'props.data.contentfulPage')

    /*return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className="wrapper">
          <div className={styles.hero}>Blog</div>
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
    */
   return(

      <div className="image-pannel">
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