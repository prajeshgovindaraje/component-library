
import Badge from '../components/Badge'

export default function BadgePage(){
    return(
      <>
  
      <section className="badge-section">
          <h1>BADGES</h1>
  
          <div className="badge-row">
  
            <h1>SQUARE</h1>
            <Badge color="gray" shape="square">Badge</Badge>
            <Badge color="red" shape="square">Badge</Badge>
            <Badge color="yellow" shape="square">Badge</Badge>
            <Badge color="green" shape="square">Badge</Badge>
            <Badge color="blue" shape="square">Badge</Badge>
            <Badge color="purple" shape="square">Badge</Badge>
            <Badge color="indigo" shape="square">Badge</Badge>
            <Badge color="pink" shape="square">Badge</Badge>
            
  
          </div>
          <div className="badge-row">
  
            <h1>PILL</h1>
            <Badge color="gray" shape="pill">Badge</Badge>
            <Badge color="red" shape="pill">Badge</Badge>
            <Badge color="yellow" shape="pill">Badge</Badge>
            <Badge color="green" shape="pill">Badge</Badge>
            <Badge color="blue" shape="pill">Badge</Badge>
            <Badge color="purple" shape="pill">Badge</Badge>
            <Badge color="indigo" shape="pill">Badge</Badge>
            <Badge color="pink" shape="pill">Badge</Badge>
  
          </div>
      </section>
  
  
  
      </>
  
    )
  }