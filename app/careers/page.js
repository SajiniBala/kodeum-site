import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: 'Careers at Kodeum | Join a Innovative IT Solutions Provider',
    description: 'Explore exciting career opportunities at Kodeum, a top software development company. Join our dynamic team and contribute to innovative projects in web development, mobile app development, ecommerce solutions, and more.'
    }

export default function Home() {

    function getDate(daysToAdd) {
        const today = new Date();
        today.setDate(today.getDate() + daysToAdd);
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
    }
    const currentDate = getDate(38);
    const currentDate2 = getDate(36);

    return (
        <>
            <Layout headerStyle={15} footerStyle={15} wrapperCls="home_15" breadcrumbTitle="Job Openings">
                <div>
                    <section className="career-section">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Explore our exceptional career opportunities</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="career-block col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div className="time">Full time</div>
                                        <div className="icon"><img style={{width: '50px', height: '50px'}} src="/assets/images/icons/icon-96.png" alt="" /></div>
                                        <h4>Backend Developer</h4>
                                        <div className="location">Hybrid</div>
                                        <a  className="theme-btn btn-style-one">
                                            <span className="btn-title">Send CV</span>
                                        </a>
                                        <ul className="list">
                                            <li><a ><i className="flaticon-suitcase" />careers@kodeum.io</a></li>
                                            <li><a ><i className="flaticon-clock-2" />Apply until {currentDate}</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="career-block col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div className="time">Full time</div>
                                        <div className="icon"><img style={{width: '50px', height: '50px'}} src="/assets/images/icons/icon-97.png" alt="" /></div>
                                        <h4>Frontend Developer</h4>
                                        <div className="location">Hybrid</div>
                                        <a  className="theme-btn btn-style-one">
                                            <span className="btn-title">Send CV</span>
                                        </a>
                                        <ul className="list">
                                            <li><a ><i className="flaticon-suitcase" />careers@kodeum.io</a></li>
                                            <li><a ><i className="flaticon-clock-2" />Apply until {currentDate}</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="career-block col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div className="time">Part time</div>
                                        <div className="icon"><img style={{width: '50px', height: '50px'}} src="/assets/images/icons/icon-98.png" alt="" /></div>
                                        <h4>Content Writer</h4>
                                        <div className="location">Remote</div>
                                        <a  className="theme-btn btn-style-one">
                                            <span className="btn-title">Send CV</span>
                                        </a>
                                        <ul className="list">
                                            <li><a ><i className="flaticon-suitcase" />careers@kodeum.io</a></li>
                                            <li><a ><i className="flaticon-clock-2" />Apply until {currentDate2}</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="career-block col-lg-3 col-md-6">
                                    <div className="inner-box">
                                        <div className="time">Part time</div>
                                        <div className="icon"><img style={{width: '50px', height: '50px'}} src="/assets/images/icons/icon-99.png" alt="" /></div>
                                        <h4>UI/UX Developer</h4>
                                        <div className="location">Remote</div>
                                        <a  className="theme-btn btn-style-one">
                                            <span className="btn-title">Send CV</span>
                                        </a>
                                        <ul className="list">
                                            <li><a ><i className="flaticon-suitcase" />careers@kodeum.io</a></li>
                                            <li><a ><i className="flaticon-clock-2" />Apply until {currentDate2}</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Meet Up Section */}
                    <section className="meet-up-section" style={{ backgroundImage: 'url(assets/images-4/background/about-bg3.jpg)' }}>
                        <div className="auto-container">
                            <div className="content-box"  style={{marginBottom:'-70px',marginTop:'20vh' }}>
                                <div className="icon"><span className="flaticon-team-1" /></div>
                                <h3>Elevate Your Career With</h3>
                                <h1>KODEUM</h1>
                                <div className="text">College Road, Point Pedro, 40000, Sri Lanka</div>
                                <ul>
                                    <li><a ><i className="flaticon-phone" />+ 94 77 882 3376</a></li>
                                    <li><a href="mailto:careers@kodeum.io"><i className="flaticon-mail-1" />careers@kodeum.io</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}