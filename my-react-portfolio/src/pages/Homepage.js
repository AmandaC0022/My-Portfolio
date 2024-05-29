import image from '../images/IMG_3563-2.jpg'
const Homepage = () => {
    return ( 
        <div className="home-container">
            <img src={image} className="profile-image" alt="Amanda Morgan"/> 
            <div className="home-text-container">
                <h1>Amanda Morgan</h1>
                <hr/>
                <div className="titles">
                    <h3>Developer</h3>
                    <h3>Designer</h3>
                    <h3>Ecommerce</h3>
                </div>
                <p>I am a dedicated Web Developer and Designer who is committed to building intuitive, user-friendly digital experiences. I describe myself as an innovative problem solver, passionate about web design and development, with a go-getter attitude and high attention to detail, that is not afraid to take on tasks outside of my job description. With each project, my goal is to always be learning and tackle new opportunities with a positive attitude. I am excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web. </p>
            </div>
        </div>
     );
}
 
export default Homepage;