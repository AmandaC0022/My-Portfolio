import image from '../images/IMG_3563.png'
const Homepage = () => {
    return ( 
        <div className="home-container">
            <img href={image} alt="my portrait"/> 
            <div className="home-text-container">
                <h1>Amanda Morgan</h1>
                <hr/>
                <h3>Artist</h3>
                <h3>Designer</h3>
                <h3>Developer</h3>
            </div>
        </div>
     );
}
 
export default Homepage;