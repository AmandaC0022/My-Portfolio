import scimage from '../images/IMG_7369.jpg'; 
import gabbyimage from '../images/IMG_7365.jpg';
import gabbyfabrics from '../images/IMG_7367.jpg'; 
import scfabrics from '../images/IMG_7368.jpg';
import contractimage from '../images/IMG_7366.jpg';   
import scblog from '../images/IMG_7369.jpg'; 
import gabbyblog from '../images/IMG_7370.jpg'; 
// import gergsworld from '../images/'; 

const Projects = () => {
    const projectList = [
        {
            image:`${scimage}`, 
            title:"summerclassics.com",
            url:"https://summerclassics.com/", 
            role:"Project Manager, UX Designer, Power User and Business Analyst", 
            framework:"Magento", 
            description:"I was a part of a small internal team that project managers, designed, developed and launched this Magento Commerce site. Post launch, I continue to manage, design and develop new user interfaces within the magento framework.", 
        }, 
        {
            image:`${gabbyimage}`, 
            title:"gabby.com", 
            url:"https://gabby.com/",
            role:"Project Manager, UX Designer, Power User and Business Analyst", 
            framework:"Magento",
            description:"This site is the sister brand to Summer Classics. This site was launched accompanying the launch of summerclassics.com. Post launch, I continue to design, develop, and manage this Magneto Commerce site.", 
        },
        {
            image:`${gabbyfabrics}`, 
            title:"fabrics.gabby.com", 
            url:"https://fabrics.gabby.com/",
            role:"Project Manager, UX Designer, Power User and Business Analyst", 
            framework:"Wordpress",
            description:"This site handles free fabric samples orders. I worked with an outside agency to develop and design this Wordpress WooComerce site. This site launched a week prior to the launch of the E-commerce sites. Post launch, I am managing the product data.", 
        }, 
        {
            image:`${scfabrics}`, 
            title:"fabrics.summerclassics.com", 
            url:"https://fabrics.summerclassics.com/",
            role:"Project Manager, UX Designer, Power User and Business Analyst", 
            framework:"Wordpress",
            description:"This site handles free fabric samples orders for summer classics outdoor performance fabrics. I worked with an outside agency to develop and design this Wordpress WooComerce site. This site launched a week prior to the launch of the E-commerce sites. Post launch, I am managing the product data.", 
        },
        {
            image:`${contractimage}`, 
            title:"contract.summerclassics.com", 
            url:"https://contract.summerclassics.com/",
            role:"Power User and Business Analyst", 
            framework:"Magento",
            description:"I handle the daily oppations for this site. I worked with a software developer to generate product feeds from the ERP system. This site is now entirely feed and populated by those feeds. Now, I just handle content updates.", 
        },
        {
            image:`${scblog}`, 
            title: "blog.summerclassics.com", 
            url:"https://blog.summerclassics.com/",
            role:"Project Manager, UX Designer and Power User", 
            framework:"Wordpress",
            description:"I was head of a small team to build this content site. I worked very closely with an outside agency to design and develop this site. This site was launch in random with the new Commerce sites. Post launch, I manage this site and handle all content updates.", 
        },
        {
            image:`${gabbyblog}`, 
            title: "blog.gabby.com", 
            url:"https://blog.gabby.com/",
            role:"Project Manager, UX Designer and Power User", 
            framework:"Wordpress",
            description:"This is the sister site to blog.summerclassics.com. Post launch, I now manage this site and handle all content updates.", 
        },
        // {
        //     image:{gergsworld}, 
        //     url: "", 
        //     role:"UX Designer and Developer", 
        //     framework:"React, MongoDB, Express, and GraphQL",
        //     description:"This is a fun website that I am making for my father. I am using the traditional MERN stack and building this site from scratch.", 
        // },
    ]
    return ( 
        <div>
            <h2>Projects</h2>
            <hr/>
            <div className="project-container">
                {projectList.map((project) => (
                    <div className="project">
                        <div className="container">
                            <img src={project.image} alt={project.url}/>
                            <div className="overlay">
                                <button className="custombtn"><a href={project.url} target="_blank" rel="noreferrer">Visit Site</a></button>
                            </div>
                        </div>
                        <h4>{project.title}</h4>
                        <button className="custombtn mobilebtn"><a href={project.url} target="_blank" rel="noreferrer">Visit Site</a></button>
                        <p>Role: {project.role}</p>
                        <p>Framework: {project.framework}</p>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Projects;