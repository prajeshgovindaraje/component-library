
import Testimonial from '../components/Testimonial'

export default function TestimonialPage(){


    return(
        
        <>
              
              <section className='testimonial-section'>
      
              <h1>TESTIMONIALS</h1>
      
              <div className='testimonial-container'>

             <div class="testimonials">
             <p>WITHOUT IMAGE</p>
             <Testimonial />
             </div>

              <div class="testimonials">
              <p>WITH IMAGE</p>
              <Testimonial withImage={true}/>
              </div>
      

                  
              </div>
      
              
      
      
              </section>
              
              </>
      
    )


}