import image from '../components/images/camera.jpg'
import image1 from '../components/images/new.jpg'
function Card(Country){
    return(
    <div >
        <div className="img">
        <img src={image}/>
        <h3>{
            Country.Country}</h3>           <button>
            CLICK HERE
            </button>    
        </div>
        <div className="img">
        <img src={image1}/>
        <h1>
            JOKER
        </h1>
        </div>
       
    </div>)
}

export default Card