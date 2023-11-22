'use client'
import Link from "next/link"
import { useState } from 'react'
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'

export default function Video() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="video-section-home15 text-center">
                <div className="bg-layer" style={{ backgroundImage: 'url(assets/images-4/background/chooseus-2.jpg)' }} />
                <div className="auto-container">
                    <div className="inner-box" style={{ backgroundImage: 'url(assets/images-4/background/chooseus-1.jpg)' }}>
                        <div className="video-box">
                            {/* <a onClick={() => setOpen(true)} className="overlay-link lightbox-image video-fancybox ripple"><span className="play-icon flaticon-play" /> */}
                               
                                    <ReactCurvedText width='180'
                                        height='180'
                                        cx='90'
                                        cy='90'
                                        rx='60'
                                        ry='60'
                                        startOffset='0'
                                        reversed={true}
                                        text='IT Solutions | Kodeum Digital Architectes |'
                                        textProps={{ "style": { "fontSize": "15" } }}
                                        textPathProps={{ "fill": "#ffffff" }}
                                        tspanProps={null}
                                        ellipseProps={null}
                                        svgProps={null}
                                    />
                            {/* </a> */}
                        </div>
                        <h2>We are committed to delivering exceptional results that exceed your expectations<br /> and drive tangible growth for your business.</h2>
                        <Link href="/contact-us" className="theme-btn btn-style-ten"><span className="btn-title">Let’s Start</span></Link>
                    </div>
                </div>
            </section>
            {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} /> */}
        </>
    )
}
