
import Card from '../components/Card'


export default function CardPage(){


    return(

        <>
        
        <section className='cards-section'>

        <h1>CARDS</h1>

        <div className='cards-container'>

        <Card />
        <Card canHover={true}/>

        <h1 className='hover-text'>HOVER</h1>
            
        </div>

        


        </section>
        
        </>


    )

}