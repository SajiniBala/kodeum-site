import Link from "next/link"

export default function Contact() {
    return (
        <>
            <section className="contact-section-home15" style={{ backgroundImage: 'url(assets/images-4/background/chooseus-2.jpg)' }}>
                <div className="auto-container">
                    <div className="sec-title-four text-center">
                        <h2>Driving Your Success in the Digital Landscape</h2>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className="form-inner">
                        <p>Our mission is to transform your ideas into powerful digital experiences, driving growth and success. With a team of skilled developers, designers, and marketing experts, we deliver cutting-edge solutions tailored to your unique needs. From responsive websites to intuitive mobile apps and results-driven digital campaigns, we're your dedicated partner in navigating the ever-evolving digital landscape. Elevate your business with Kodeum – where technology, creativity, and expertise converge for unparalleled results</p>
                        <Link style={{marginTop: '30px'}}  href="/contact-us" className="theme-btn btn-style-ten"><span className="btn-title">Lets Collaborate</span></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
