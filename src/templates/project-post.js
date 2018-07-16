import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import  styles from './project-post.module.css';




class ProjectPostTemplate extends React.Component {

   constructor(props){
      super(props)

      this.glide = null;
      this.setGlideRef = (element) => {
         this.glide = element;
      }

   }
   
   componentDidMount(){

      new Glide(this.glide,{
         type: 'carousel',
         startAt: 0,
         focusAt: 'center',
         gap:0,
         perView:1,
         peek:{
            before:0,
            after:0
         }
      }).mount()
   }

  render() {
    const post = get(this.props, 'data.contentfulProject')
    console.log(this.props)
    return(
      
      
      <div className="image-pannel">
      <Helmet title={`${post.title} `} />
      <div className="glide" ref={this.setGlideRef} >
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides" >
        {
         post.images.map((data, index) => (
          <li className="glide__slide" style={{
               backgroundImage:'url(' + data.file.url + ')',
               backgroundRepeat:'no-repeat'
            
         }}>
          </li>))
        }
        <li className="glide__slide">
         <div className="stext"
         dangerouslySetInnerHTML={{
           __html: post.description.childMarkdownRemark.html,
         }}
       />         
        </li>
        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
      <div className={"glide__arrow glide__arrow--left " + styles.glide_back_left } data-glide-dir="<" ></div>
      <div className={"glide__arrow glide__arrow--right " + styles.glide_back_right } data-glide-dir=">" ></div>
      </div>      
      </div>
   
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
