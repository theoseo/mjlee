import React from 'react'

import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import Glide from '@glidejs/glide'
import styles from './glider.module.css'

class Glider extends React.Component {

   constructor(props){

      super(props);

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

   render(){
      const { page, data, post } = this.props

      let drawingSlide;
      if(data!==undefined){

      
         drawingSlide = <ul className="glide__slides" >
         { 
            data.map((test, index) => (
               <li className="glide__slide" key={index} style={{
                  backgroundImage:'url(' + test.node.image.file.url + ')',
                  backgroundRepeat:'no-repeat'     
               }}></li>))
         }
         </ul>
      }
      else {

         drawingSlide = <ul className="glide__slides" >
         {
            post.images.map((data, index) => (
               <li className="glide__slide" key={index} style={{
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
      }     
              
         


      
      return(
         <div className="glide" ref={this.setGlideRef} >
         <div className="glide__track" data-glide-el="track">

         {drawingSlide}
         </div>
         <div className="glide__arrows" data-glide-el="controls">
         <div className={"glide__arrow glide__arrow--left " + styles.glide_back_left } data-glide-dir="<"></div>
         <div className={"glide__arrow glide__arrow--right " + styles.glide_back_right} data-glide-dir=">"></div>
         </div>      
         </div>
   
         );
   }
}

export default Glider
