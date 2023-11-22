import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Error404 from "@/app/not-found";

    export const metadata = {
        title: 'Project | Kodeum: Showcasing Excellence in IT Solutions',
        description: `Browse through Kodeum's portfolio to witness our excellence in web development, mobile app development, ecommerce solutions, bespoke software development, digital marketing, and business branding. See how we bring ideas to life.`
        }

export default function Home({params: {projectId}}) {

    const projectsArray =  [
        {
        id: 77,
        Client: 'Sentosa',
        image: '/assets/images/gallery/image-6.jpg',
        Insutry: 'Hotel',
        Project_Description: `Nestled in the heart of culinary innovation, Sentosa's website mirrors the sophistication and delectable offerings of their restaurant. With a seamless blend of vibrant visuals and intuitive navigation, we've created an online space that captivates visitors from the first click.<br/><br/>
        From showcasing the exquisite menu to offering a virtual tour of the ambiance, every element has been meticulously crafted to enhance the overall dining experience. Sentosa's website doesn't just represent a restaurant; it embodies a gastronomic journey waiting to be explored.`
        },
        {
        id: 78,
        Client: 'Ethereal Lens',
        image: '/assets/images/gallery/image-5.jpg',
        Insutry: 'Photography',
        Project_Description: `Ethereal Lens, a haven for photography enthusiasts, now has a digital home that echoes the artistry of their craft. Our website design accentuates the stunning visual narratives captured by Ethereal Lens. Visitors are greeted with an immersive gallery, allowing them to traverse through moments frozen in time.<br/><br/>
        The seamless integration of portfolios and an interactive booking system ensures that clients can effortlessly connect with the lens masters behind the magic. Ethereal Lens's website isn't just a platform; it's a celebration of visual storytelling and the pursuit of capturing fleeting moments with everlasting impact.`
        }, 
        {
        id: 79,
        Client:'DreamCrest',
        image: '/assets/images/gallery/image-4.jpg',
        Insutry: 'Real Estate',
        Project_Description: `DreamCrest's online presence mirrors the grandeur and sophistication synonymous with their real estate ventures. Our website seamlessly combines elegance with functionality, offering visitors an immersive journey through upscale properties and innovative architectural designs. From detailed property listings to a user-friendly interface for inquiries and consultations,<br/><br/>
        DreamCrest's website is a gateway to a world where luxury meets innovation. Navigating through the site feels like strolling through a virtual landscape of dream homes, each click bringing clients closer to realizing their aspirations in the realm of real estate excellence.`
        },  ]
    
        const selectedProject = projectsArray.find((el) => el.id === parseInt(projectId));

        if (!selectedProject) {
            return <Error404 />;
        }
    

    return (
        <>
            <Layout headerStyle={15} footerStyle={15} wrapperCls="home_15" breadcrumbTitle={selectedProject?.Client}>
                <section className="project-details">
                    <div className="auto-container">
                        <div className="top-box">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="project-info-wrapper">
                                                <h2>Project <br /> Information</h2>
                                                <div className="project-info">
                                                    <p>Client:</p>
                                                    <h5>{selectedProject?.Client}</h5>
                                                </div>
                                                <div className="project-info">
                                                    <p>Category:</p>
                                                    <h5>{selectedProject?.Insutry}</h5>
                                                </div>
                                                {/* <div className="project-info">
                                                    <p>Date:</p>
                                                    <h5>February 28, 2020</h5>
                                                </div>
                                                <div className="project-info">
                                                    <p>Website:</p>
                                                    <h5>www.example.com</h5>
                                                </div>
                                                <div className="project-info">
                                                    <p>Share:</p>
                                                    <ul className="social-links clearfix">
                                                        <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                                        <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                                        <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                                        <li><Link href="#"><span className="fab fa-skype" /></Link></li>
                                                    </ul>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h4>Project Description</h4>
                                    <div className="text">
                                        <p dangerouslySetInnerHTML={{ __html: selectedProject?.Project_Description }} />
                                    </div>
                                    <div className="link-btn"><Link href="contact-us" className="theme-btn btn-style-ten"><span className="btn-title">CONTACT US</span></Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="image-box">
                            <div style={{display: 'flex', justifyContent: 'center'}} className="row">

                                <div className="col-lg-6">
                                    <div className="image mb-30"><img src={selectedProject?.image} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}