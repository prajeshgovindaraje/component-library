

import uploadIcon from '../assets/uploadIcon.png'
import clsx from 'clsx';



export default function Card({canHover=false}){

    let hoverClass = clsx({
        "card-div-hover":canHover
    })

    console.log("hover class is " + hoverClass)

    return(
        <>


           <div className={`${hoverClass} ${"card-div"} `}>


            <div className='upload-icon-div'>
                <img src={uploadIcon} />
            </div>

                <p>Easy Deployment</p>
                <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
           </div>
        
        </>
    )

}