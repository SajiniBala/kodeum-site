import CounterUp from "@/components/elements/CounterUp"


export default function About() {
    return (
        <>
            <section className="about-section-home15">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image-box">
                                <div className="bg-layer" />
                                <figure className="image"><img src="/assets/images-4/resource/digital-architect.jpeg" alt="" /></figure>
                                <div className="text"><h2 style={{textAlign: 'center'}}>Digital Architects</h2></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="sec-title-four">
                                    <h2>
We deliver exceptional services to clients both locally and globally</h2>
                                </div>
                                <div className="text">
                                    <p>We understand that your online presence is crucial to your success. That's why our team of experienced professionals is passionate about crafting tailored digital experiences that transform businesses and drive tangible results.</p>
                                </div>
                                <div className="progress-inner">
                                    <h3>We are committed to long-term partnerships with our clients</h3>
                                    <div className="progress-box">
                                        <h5>Web Development</h5>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" data-percent="84%" style={{width:"84%"}} />
                                        </div>
                                        <div><CounterUp end={84}/></div>
                                    </div>
                                    <div className="progress-box">
                                        <h5>E-Commerce Solutions</h5>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" data-percent="82%" style={{width:"82%"}}/>
                                        </div>
                                        <div><CounterUp end={82}/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
