import companyIcon from '../assets/companyIcon.png'
import dotPattern from "../assets/dotPattern.png"
import profileImage from '../assets/profileImage.png'

import clsx from 'clsx'

export default function Testimonial({withImage=false}){

        let imagePresentClass = clsx({
            "with-image":withImage,
        })

        let image = companyIcon
        if(withImage){
            image = profileImage

            
        }

        return(
            <>
            
            <div className={`testimonial-div ${imagePresentClass}`}>

            <div className="testimonial-title-div">
            {(withImage)?<img className="image-profile" src={profileImage}/> :<><img src={companyIcon} alt="logo"/><p>Work<span>cation</span></p></> }
           </div>

            <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.” </p>
           
            <div className="details-div">
                <p>Mary Anderson</p>
                <p class="slash-bar">/</p>
                <p>Workation, CTO</p>
            </div>
            
            <img class="dot-pattern-img" src={dotPattern} />

            </div>

            </>
        )



}