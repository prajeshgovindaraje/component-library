
import clsx from 'clsx';

import warningIcon from "../assets/warningIcon.png"
import errorIcon from "../assets/errorIcon.png"
import successIcon from "../assets/successIcon.png"
import neutralIcon from "../assets/neutralIcon.png"

export default function Banner({type,isMultiLine=true,children}){

    const success = {
        msgIcon:successIcon,
        msgTitle:"Congratulations!",
        msgContent:(children)?children:"You have a success response"

    }

    const warning = {
        msgIcon:warningIcon,
        msgTitle:"Attention",
        msgContent:(children)?children:"You have a warning response"
    }


    const error = {
        msgIcon:errorIcon,
        msgTitle:"There is a problem with your application!",
        msgContent:(children)?children:"You have a error response"

    }

    const neutral = {
        msgIcon:neutralIcon,
        msgTitle:"Update available!",
        msgContent:(children)?children:"You have a neutral response"

    }

    let finalType = {}

    if(type === "success"){
        finalType = success
    }else if(type === "warning"){
        finalType = warning

    }else if(type === "error"){
        finalType = error

    }else{
        finalType = neutral

    }
    

    let color = clsx({
        "banner-div green"  :  type==="success",
        "banner-div red"    :  type==="error",
        "banner-div yellow" :  type==="warning",
        "banner-div blue"   :  type==="neutral"
    })

    return(
        
        <div className={color}>

            <div className='banner-icon-div'>
                <img src={finalType.msgIcon} alt="lol" />
            </div>

            <div className='banner-content-div'>
                <p class="banner-title">{finalType.msgTitle}</p>
                {isMultiLine && <p class="banner-content">{finalType.msgContent}</p>}
            </div>

        </div>


    )

}