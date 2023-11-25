import Link from "next/link"


export default function Project() {
    return (
        <>
            <section className="project-section-home15">
                <div className="auto-container">
                    <div className="sec-title-four text-center">
                        <h2>Our Projects</h2>
                        <p id="below-heading" >Our Projects Standout in Quality & Performance</p>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="project-block">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images/gallery/image-3.jpg" alt="" /></figure>
                                    <div className="text">
                                        <p className="project-name">Sentosa</p>
                                        <h3><Link href="/portfolio/77">Hotel</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="project-block">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images/gallery/image-1.jpg" alt="" /></figure>
                                    <div className="text">
                                        <p className="project-name">DreamCrest</p>
                                        <h3><Link href="/portfolio/79">Real Estate</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="project-block">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images/gallery/image-2.jpg" alt="" /></figure>
                                    <div className="text">
                                        <p className="project-name">Ethereal Lens</p>
                                        <h3><Link href="/portfolio/78">Photography</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more-btn text-center">
                        <Link href="/portfolio" className="theme-btn btn-style-ten"><span className="btn-title">View Details</span></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
