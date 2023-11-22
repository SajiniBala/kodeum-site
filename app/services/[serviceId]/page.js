import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Error404 from "@/app/not-found";

export const metadata = {
    title: 'Service | Kodeum: Comprehensive IT Solutions for Growth',
    description: `Explore Kodeum's range of services, including web development, mobile app development, ecommerce solutions, bespoke software development, digital marketing, business branding, and IT outsourcing. Elevate your business with our innovative solutions.`
    }

export default function Home({params: {serviceId}}) {


    const serviceArray = [
        {
        id: 'web-development',
        title: 'Web Development',
        image: '/assets/images/resource/news-23.jpg',
        heading: 'Comprehensive Web Development Solutions Tailored to Your Business Needs',
        description: `In today's dynamic digital landscape, a strong online presence is paramount for business success. Our Web Development Services are designed to empower your brand with cutting-edge solutions that not only meet but exceed your unique business requirements. <br/><br/>
        At Kodeum, we understand that a one-size-fits-all approach doesn't cut it in the ever-evolving world of web technologies. Our team of skilled developers is dedicated to crafting bespoke websites and web applications that seamlessly integrate with your business objectives. From user-friendly interfaces to robust backend systems, we specialize in creating a digital experience that engages your audience and drives results.<br/><br/>
        Our development process begins with a thorough analysis of your business goals, ensuring that every line of code contributes to achieving measurable outcomes. Whether you're launching a new website, upgrading an existing one, or seeking e-commerce solutions, we leverage the latest technologies and industry best practices to deliver a product that stands out in terms of performance, security, and scalability.<br/><br/>
        With a focus on innovation and adaptability, our Web Development Services ensure that your online presence not only meets current industry standards but is also poised for future growth. Partner with us to transform your digital vision into a reality that captivates your audience and propels your business forward.`,
        },
        {
        id: 'mobile-app-development',
        title: 'Mobile App Development',
        image: '/assets/images/resource/news-23.jpg',
        heading: 'Innovate on the Go: Redefining Mobility with Our Trendsetting Mobile App Development Solutions',
        description: `Step into the future of mobile technology with Kodeum, where our Mobile App Development services transcend expectations, introducing a fusion of creativity, functionality, and cutting-edge innovation.<br/><br/>
        "Apps Unleashed, Experiences Redefined" encapsulates our commitment to delivering mobile applications that not only meet but exceed the standards of the ever-evolving digital landscape. At Kodeum, we don't just build apps; we craft immersive experiences that resonate with users and elevate your brand to new heights.<br/><br/>
        Imagine mobile applications that seamlessly blend sleek design with robust functionality, providing users with an intuitive, engaging, and unforgettable experience. Our team of app maestros specializes in creating solutions that not only cater to your business objectives but also anticipate the dynamic needs of your target audience.<br/><br/>
        Choose Kodeum for a Mobile App Development partnership that goes beyond conventional app creation. We promise not just an app but a digital masterpiece tailored to your brand, ensuring your presence is felt in the palms of your users' hands. Your journey to mobile app success starts here, where every tap is an opportunity and every download is a testament to your digital eminence.`,
        },
        {
        id: 'bespoke-software-development',
        title: 'Bespoke Software Development',
        image: '/assets/images/resource/news-23.jpg',
        heading: `Crafting Tomorrow’s Solutions Today: Bespoke Software Mastery Redefined`,
        description: `In the ever-evolving landscape of technology, your business deserves bespoke software solutions that resonate with innovation and precision. Welcome to Kodeum, where we transcend the ordinary and redefine the extraordinary in the realm of custom software development.<br/><br/>
        Our subheading “Beyond Expectations, Beyond Code” encapsulates our commitment to delivering not just functional software but groundbreaking solutions that anticipate your every need. At Kodeum, we pride ourselves on being architects of the future, where our team of visionary developers transforms your unique business challenges into bespoke digital triumphs.<br/><br/>
        Imagine software that not only aligns with your current requirements but adapts seamlessly to the dynamic shifts of tomorrow's technology. Our expertise extends beyond lines of code; we architect digital ecosystems that elevate your business with unparalleled functionality, user-centric design, and scalability that anticipates your growth.<br/><br/>
        At the core of our service is a promise to exceed your expectations. From concept to execution, our bespoke software development journey is a collaborative venture, ensuring your vision is not just realized but elevated to new heights. Choose Kodeum for a partnership that goes beyond conventional development, crafting tailored solutions that set the standard for the future of your industry.`,
        },
        {
        id: 'e-commerce-solutions',
        title: 'E-Commerce Solutions',
        image: '/assets/images/resource/news-23.jpg',
        heading: `Revolutionize Your Retail Experience: Next-Level E-Commerce Solutions Unleashed`,
        description: `In the pulsating heartbeat of online commerce, your brand deserves more than just a digital storefront; it deserves a captivating and seamless shopping experience. Welcome to Kodeum, where our E-Commerce Solutions redefine the retail landscape with innovation, style, and unparalleled performance.<br/><br/>
        "Shopping Redefined, Solutions Perfected" embodies our commitment to transforming the ordinary into the extraordinary. At Kodeum, we don't just build e-commerce platforms; we architect digital marketplaces that transcend expectations. Imagine an online presence that not only reflects your brand essence but also anticipates and satisfies the ever-evolving needs of your customers.<br/><br/>
        Our team of e-commerce maestros specializes in creating visually stunning, user-friendly platforms backed by robust technology. From intuitive navigation to secure transactions and personalized shopping experiences, we craft solutions that not only meet the demands of today's consumers but elevate your brand in the eyes of the digital-savvy audience.<br/><br/>
        Choose Kodeum for an e-commerce partnership that goes beyond transactions. We promise a symphony of technology and design that not only meets the expectations of modern retail but sets new standards for online excellence. Your journey to e-commerce success starts here, where innovation meets implementation, and shopping experiences are redefined.`,
        },
        {
        id: 'erp',
        title: 'Enterprise resource planning',
        image: '/assets/images/resource/news-23.jpg',
        heading: 'Future-Ready Business Intelligence: Unleashing the Power of Next-Gen ERP Solutions',
        description: `In the era of rapid business evolution, where every decision counts, your enterprise deserves more than a system – it deserves a dynamic force propelling it towards success. Step into the future with Kodeum, where our ERP solutions redefine the landscape of business intelligence with innovation, agility, and unmatched efficiency. <br/><br/>
        "Strategic Synergy, Seamless Solutions" encapsulates our commitment to crafting ERP solutions that go beyond the ordinary. At Kodeum, we don't just implement Enterprise Resource Planning; we orchestrate a transformative journey that streamlines your processes, empowers your decision-makers, and positions your business for unparalleled growth.<br/><br/>
        Imagine an ERP system that not only centralizes your operations but adapts to the evolving needs of your industry. Our team of ERP architects specializes in tailoring solutions that integrate seamlessly with your business objectives, offering real-time insights, and paving the way for agile, data-driven decision-making.<br/><br/>
        Choose Kodeum for an ERP partnership that transcends conventional boundaries. We promise a convergence of technology and innovation that not only meets but anticipates the demands of tomorrow's business landscape. Your journey to a future-ready enterprise starts here, where every module is a strategic step towards unmatched operational efficiency and sustainable growth.`,
        },
        {
        id: 'cloud-solutions',
        title: 'Cloud Solutions',
        image: '/assets/images/resource/news-23.jpg',
        heading: `Elevate Your Business Skyward: Cutting-Edge Cloud Solutions for the Digital Frontier`,
        description: `Embark on a transformative journey with Kodeum, where Cloud Solutions transcend traditional boundaries, propelling your business into a realm of innovation and limitless possibilities.<br/><br/>
        "Dream, Deploy, Dominate" encapsulates our commitment to delivering Cloud Solutions that not only meet but exceed your expectations. At Kodeum, we are not just providers; we are architects of a cloud-powered future. Imagine a business environment where scalability, security, and seamless collaboration converge to redefine the way you operate.<br/><br/>
        Our team of cloud virtuosos specializes in crafting bespoke solutions that align perfectly with your business objectives. From scalable infrastructure to data-driven insights and collaborative platforms, we leverage the latest in cloud technology to ensure your business stays ahead in the fast-paced digital landscape.<br/><br/>
        Choose Kodeum for a Cloud Solutions partnership that transcends the ordinary. We promise not just cloud integration but a digital revolution tailored to your unique needs. Your journey to an agile, responsive, and infinitely scalable business starts here, where the clouds are not just in the sky but an integral part of your success story.`,
        },
        {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        image: '/assets/images/resource/news-23.jpg',
        heading: `Ignite Your Brand's Digital Presence: Unleashing Tomorrow's Marketing Strategies Today`,
        description: `In the pulsating heartbeat of the digital age, your brand deserves more than marketing; it deserves a dynamic and captivating online presence. Welcome to Kodeum, where our Digital Marketing Services redefine the rules of engagement, fusing innovation, strategy, and unparalleled creativity.<br/><br/>
        "Dare to Dream, Market to Thrive" encapsulates our commitment to delivering Digital Marketing Solutions that not only keep pace with but set the trends in today's dynamic landscape. At Kodeum, we are not just marketers; we are architects of digital success. Imagine a marketing strategy that not only engages your audience but anticipates and influences their every digital move.<br/><br/>
        Our team of digital maestros specializes in crafting bespoke campaigns that resonate with your brand identity. From cutting-edge social media strategies to SEO mastery and data-driven insights, we leverage the latest in digital marketing trends to ensure your brand stands out in the ever-crowded digital arena.<br/><br/>
        Choose Kodeum for a Digital Marketing partnership that goes beyond conventional tactics. We promise not just visibility but an immersive digital experience tailored to your unique needs. Your journey to digital eminence starts here, where every click is not just a statistic but a step towards building lasting connections and achieving unparalleled digital success. Embrace the future of marketing with Kodeum.`,
        },
        {
        id: 'business-branding',
        title: 'Business Branding',
        image: '/assets/images/resource/news-23.jpg',
        heading: `Crafting Identities, Igniting Legacies: Elevate Your Brand with Our Cutting-Edge Business Branding Services`,
        description: `At Kodeum, we don't just create brands; we forge legacies. "Designing Tomorrow, Branding Today" encapsulates our commitment to delivering Business Branding Services that transcend the conventional, offering a perfect blend of creativity, strategy, and forward-thinking innovation.<br/><br/>
        In the dynamic world of business, your brand is your essence, and we understand that it deserves more than just a logo. Our team of branding visionaries specializes in creating a visual and narrative identity that not only reflects your company's values but resonates with your target audience, leaving an indelible mark in the market.<br/><br/>
        Imagine a brand presence that not only stands out but tells a compelling story, captivating your audience at every touchpoint. From logo design to comprehensive brand guidelines, we ensure every aspect of your brand is meticulously crafted for lasting impact and recognition.<br/><br/>
        Choose Kodeum for a Business Branding partnership that transcends the ordinary. We promise not just branding but a strategic elevation of your brand, setting the stage for enduring success. Your journey to a distinctive, unforgettable brand identity starts here, where innovation meets intention, and your brand becomes a beacon in the competitive business landscape.`,
        },
        {
        id: 'maintenance-and-support',
        title: 'Maintenance and Support',
        image: '/assets/images/resource/news-23.jpg',
        heading: `Seamless Excellence Beyond Implementation: Elevate Your Experience with Our Next-Level Maintenance and Support Services`,
        description: `In the ever-evolving landscape of technology, your IT infrastructure deserves more than just routine maintenance; it deserves a proactive, responsive support system that anticipates needs and ensures uninterrupted excellence. Welcome to Kodeum, where our Maintenance and Support Services redefine industry standards with innovation, efficiency, and a commitment to uninterrupted operations.<br/><br/>
        "Beyond Fixes, Embracing Solutions" encapsulates our approach to maintaining and supporting your IT ecosystem. At Kodeum, we are not just providers; we are partners in your technological journey. Imagine a support system that not only resolves issues promptly but actively works to prevent them, ensuring your systems operate at peak performance around the clock.<br/><br/>
        Our team of support experts specializes in delivering solutions tailored to your unique needs. From rapid issue resolution to proactive system monitoring and continuous improvement, we ensure your IT infrastructure remains robust and resilient in the face of technological challenges.<br/><br/>
        Choose Kodeum for a Maintenance and Support partnership that goes beyond traditional services. We promise not just support but a strategic collaboration aimed at enhancing your operational efficiency and minimizing downtime. Your journey to worry-free IT operations starts here, where every challenge is an opportunity for improvement, and your success is our constant commitment.`,
        },

    ];

    const element = serviceArray.find((el) => el.id === serviceId);

    if (!element) {
        return <Error404 />;
    }


    return (
        <>
        <Layout
            headerStyle={15}
            footerStyle={15}
            wrapperCls="home_15"
            breadcrumbTitle={element?.title}
        >
                <section className="sidebar-page-container">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-8 content-side">
                                <div className="blog-single-post">
                                    <h3>{element?.heading}</h3>
                                    <div className="text">
                                    <p dangerouslySetInnerHTML={{ __html: element?.description }} />
                                    </div>
                                </div>
                            </div>
                            <aside className="col-lg-4 sidebar">
                                <div className="widget widget_contact" style={{ backgroundImage: `url('/assets/images-4/background/chooseus-5.jpg')` }}>
                                            <div className="widget-content">
                                                <img src="/assets/images/icons/icon-55.png" alt="" />
                                                <h4>Do you need our service?</h4>
                                                <div className="phone-number"><a>+94 77 882 3376</a></div>
                                                <div className="email"><Link href="mailto:contact@kodeum.com">contact@kodeum.com</Link></div>
                                                <div className="link-btn" ><Link href="/contact-us" style={{background: '#10e3ad'}} className="theme-btn btn-style-one text-white">
                                                    <span className="btn-title">CONTACT US</span>
                                                </Link></div>
                                            </div>
                                        </div>
                            </aside>
                        </div>
                    </div>
                </section>
                <section className="feature-section-two mt-0">
                <div className="auto-container">
                            <div className="row">
                                <div style={{marginBottom: '20px'}} className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-9.png" alt="" /></div>
                                            <h4>Become a Partner of Kodeum</h4>
                                            <div className="text">Unlock boundless possibilities as you join forces with Kodeum, your gateway to innovation, & success.</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{marginBottom: '20px'}} className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-10.png" alt="" /></div>
                                            <h4>Career Opportunities in Kodeum</h4>
                                            <div className="text">Ignite  your career at Kodeum, where every opportunity propels you to excellence.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>

            </Layout>
        </>
    )
}