'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { ToastContainer, toast } from 'react-toastify';
import React, {useState, useEffect } from 'react';
import axios from 'axios'
import Turnstile from "react-turnstile";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {

    const [turnsTileToken, setTurnsTileToken] = useState(undefined);
    const [isTurnstileVerified, setIsTurnstileVerified] = useState(false);
    const [turnstileKey, setTurnstileKey] = useState(Date.now());
  
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [invalidInputs, setInvalidInputs] = useState(true);
  
    const sendContactForm = async (e) => {
        e.preventDefault();
        setInvalidInputs(true);
        setIsTurnstileVerified(false);

        const phoneRegex = /^\+?\d{10,12}$/;

    
        if (name === '' || email === '' || message === '' || phoneNumber === '' ) {
          alert('Please fill in all fields');
          return;
        }

        if (!phoneRegex.test(phoneNumber)) {
            alert('Invalid Phone Number');
            return;
          }
    
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          alert('Enter a valid email address');
          return;
        }
    
        if (message.length > 500) {
          alert('Message should be less than 500 characters');
          return;
        }
    
        try {
          const res = await axios.post('/api/contact', {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            message: message,
            turnsTileToken: turnsTileToken,
          });
          if (res.status == 200 || 201) {
            toast.success(res.data.message, { autoClose: 1500 });
            setTurnstileKey(Date.now());
            setName("");
            setEmail("");
            setPhoneNumber("");
            setMessage("");
            setInvalidInputs(false);
          } else {
            toast.error(res.data.message, { autoClose: 1000 });
            setTurnstileKey(Date.now());
            setName("");
            setEmail("");
            setPhoneNumber("");
            setMessage("");
            setInvalidInputs(false);
          }
        } catch (err) {
          toast.error('Server Error', { autoClose: 1000 });
          setTurnstileKey(Date.now());
          setName("");
          setEmail("");
          setPhoneNumber("");
          setMessage("");
          setInvalidInputs(false);
        }
      };

        
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      name.length < 1 ||
      name.length > 20 ||
      phoneNumber.length < 10 ||
      phoneNumber.length > 14 ||
      message.length < 1 ||
      message.length > 500 ||
      !emailRegex.test(email) ||
      !isTurnstileVerified
    ) {
      setInvalidInputs(true);
    } else {
      setInvalidInputs(false);
    }
  }, [email, name, phoneNumber, message, turnstileKey]);
  
  const handleTurnstileVerification = (token) => {
    setTurnsTileToken(token);
    setIsTurnstileVerified(true);
  };


    return (
        <>
            <Layout headerStyle={15} footerStyle={15} wrapperCls="home_15" breadcrumbTitle="Contact Us">
            <ToastContainer />
                <div>
                    <section className="contact-details-section-two">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Contact us to Elevate Your Online Presence</h2>
                                <div className="text">To discuss your project or learn more about our services, feel free to contact us. <br/>
                                Our dedicated professionals are ready to answer your queries and provide tailored solutions for your unique business needs</div>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 contact-info-block-two">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-50.png" alt="" /></div>
                                        <h4>Location</h4>
                                        <ul>
                                            <li>College Road, Point Pedro, 40000</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 contact-info-block-two">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-51.png" alt="" /></div>
                                        <h4>Call us on</h4>
                                        <ul>
                                            <li><a>+94 77 882 3376</a></li>
                                            <li><a>+94 75 882 3375</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 contact-info-block-two">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-52.png" alt="" /></div>
                                        <h4>Mail at</h4>
                                        <ul>
                                            <li><Link href="mailto:contact@kodeum.io">contact@kodeum.io</Link></li>
                                            <li><Link href="mailto:careers@kodeum.io">careers@kodeum.io</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Contact Section Style Five */}
                    <section className="contact-section style-five">
                        <div className="auto-container">
                            <div className="row m-0">
                                <div className="col-lg-6 left-column" style={{ backgroundImage: 'url(assets/images-4/background/chooseus-4.jpg)' }}>
                                    <div className="inner-container">
                                        <div className="wrapper-box">
                                            <div className="sec-title light">
                                                <h2>Contact us</h2>
                                                <div className="text-decoration">
                                                    <span className="left" />
                                                    <span className="right" />
                                                </div>
                                                <div style={{marginRight: '20px'}} className="text">
                                                    Contact us today and let our experienced web development <br/>
                                                    team transform your online presence into a powerful business <br/>
                                                    asset. We are committed to delivering exceptional results <br/>
                                                    that exceed your expectations and drive tangible growth <br/>
                                                    for your business.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 right-column" style={{ backgroundImage: 'url(assets/images-4/background/chooseus-3.jpg)' }}>
                                    <div className="inner-container">
                                        <div className="contact-form-box">
                                            <form onSubmit={sendContactForm} className="contact-form">
                                                <div className="row">
                                                    <div className="col-md-6 form-group">
                                                        <input maxLength={20} type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                                                    </div>
                                                    <div className="col-md-6 form-group">
                                                        <input maxLength={14} type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                                                    </div>
                                                    <div className="col-md-12 form-group">
                                                        <input type="email" placeholder="Email Id" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                                    </div>
                                                    <div className="col-md-12 form-group">
                                                        <textarea style={{resize: 'none'}} placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                                                    </div>
                                                    <Turnstile key={turnstileKey} sitekey={process.env.NEXT_PUBLIC_HIDDEN_TURNS_TILE_SITE_KEY || ''} onVerify={handleTurnstileVerification} />
                                                    {isTurnstileVerified ?
                                                    <div style={{display: 'flex', justifyContent: 'center'}} className="col-md-12 form-group">
                                                        <button className="theme-btn btn-style-ten" type="submit" disabled={invalidInputs} name="submit-form"><span className="btn-title">Send Message</span></button>
                                                    </div> :
                                                    <div style={{display: 'flex', justifyContent: 'center'}} className="col-md-12 form-group"> 
                                                        <button style={{cursor: 'not-allowed'}} disabled={true} className="theme-btn btn-style-ten"><span className="btn-title">Loading...</span></button>
                                                    </div> }
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Feature Section Two */}
                    <section style={{marginTop: '100px'}} className="feature-section-two">
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
                </div>

            </Layout>
        </>
    )
}