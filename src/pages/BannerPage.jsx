import Banner from '../components/Banner'



export default function BannerPage(){


    return(
        <>
        <section className='banner-section'>
        
        <h1>BANNERS</h1>
        
        <div className='banner-pair-div'>
        <h1>SUCCESS</h1>

        <div className='banner-with-type'>
        <Banner type="success" isMultiLine={true}/>
        <h1>MULTI LINE</h1>
        </div>

        <div className='banner-with-type'>
        <Banner type="success" isMultiLine={false}/>
        <h1>SINGLE LINE</h1>
        </div>

        </div>


        <div className='banner-pair-div'>
        <h1>ERROR</h1>

        <div className='banner-with-type'>
        <Banner type="error" isMultiLine={true}/>
        <h1>MULTI LINE</h1>
        </div>

        <div className='banner-with-type'>
        <Banner type="error" isMultiLine={false}/>
        <h1>SINGLE LINE</h1>
        </div>

        </div>



        <div className='banner-pair-div'>
        <h1>WARNING</h1>

        <div className='banner-with-type'>
        <Banner type="warning" isMultiLine={true}/>
        <h1>MULTI LINE</h1>
        </div>

        <div className='banner-with-type'>
        <Banner type="warning" isMultiLine={false}/>
        <h1>SINGLE LINE</h1>
        </div>

        </div>



        <div className='banner-pair-div'>
        <h1>NEUTRAL</h1>

        <div className='banner-with-type'>
        <Banner type="neutral" isMultiLine={true}/>
        <h1>MULTI LINE</h1>
        </div>

        <div className='banner-with-type'>
        <Banner type="neutral" isMultiLine={false}/>
        <h1>SINGLE LINE</h1>
        </div>

        </div>






        </section>

        </>
    )


}