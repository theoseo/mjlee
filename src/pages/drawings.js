import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import Glide from '@glidejs/glide'

class DrawingsIndex extends React.Component {

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
    const drawings = get(this, 'props.data.allContentfulDrawing')
   console.log(drawings)

   return(

      <div className="image-pannel">
      <div className="glide" ref={this.setGlideRef} >
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides" >
        {
         drawings.edges.map(({node}) => (
          <li className="glide__slide" style={{
               minHeight:'600px',
               backgroundImage:'url(' + node.image.file.url + ')',
               backgroundSize: 'cover',
               backgroundPosition: 'center'      
            
         }}>
          </li>))
        }
        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
      <button className="glide__arrow glide__arrow--left" data-glide-dir="<">before</button>
      <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
      </div>      
      </div>
   
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