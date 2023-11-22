'use client'
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  const blogPosts = [
    {
      id: 1001,
      imageSrc: "/assets/images/resource/1.jpg",
      date: "12",
      month: "November",
      year: "2023",
      category: "Business",
      title: "Unleashing the Power of Web 3.0: A Paradigm Shift in Digital Innovation",link: "/blog/1001",
    },
    {
      id: 1002,
      imageSrc: "/assets/images/resource/2.jpg",
      date: "23",
      month: "October",
      year: "2023",
      title: "Blockchain Unleashed: Transforming Industries Through Decentralized Innovation",link: "/blog/1002",
    },
    {
      id: 1003,
      imageSrc: "/assets/images/resource/3.jpg",
      date: "31",
      month: "August",
      year: "2023",
      title: "Beyond Boundaries: Exploring the Frontiers of Artificial Intelligence",link: "/blog/1003",
    },
    {
      id: 1004,
      imageSrc: "/assets/images/resource/4.jpg",
      date: "14",
      month: "July",
      year: "2023",
      title: "Machine Learning Mastery: Unveiling the Intelligent Revolution",link: "/blog/1004",
    },
    {
      id: 1005,
      imageSrc: "/assets/images/resource/5.jpg",
      date: "27",
      month: "July",
      year: "2023",
      title: "Immersive Realities: Navigating the Frontiers of VR/AR Innovation",link: "/blog/1005",
    },
    {
      id: 1006,
      imageSrc: "/assets/images/resource/6.jpg",
      date: "12",
      month: "May",
      year: "2023",
      title: "Sentinels of the Digital Realm: Fortifying the Future through Cybersecurity Vigilance",link: "/blog/1006",
    },
    {
      id: 1007,
      imageSrc: "/assets/images/resource/7.jpg",
      date: "02",
      month: "April",
      year: "2023",
      title: "Revolutionizing Logistics with Fleet Management Software Development",link: "/blog/1007",
    },
    {
      id: 1008,
      imageSrc: "/assets/images/resource/8.jpg",
      date: "19",
      month: "March",
      year: "2023",
      title: "Beyond Reality: Navigating the Expansive Horizons of the Metaverse",link: "/blog/1008",
    },
    {
      id: 1009,
      imageSrc: "/assets/images/resource/9.jpg",
      date: "23",
      month: "January",
      year: "2023",
      title: "Bluejacking Unveiled: Exploring the Intricacies of Wireless Messaging Intrigue",link: "/blog/1009",
    },
    {
      id: 1010,
      imageSrc: "/assets/images/resource/10.jpg",
      date: "16",
      month: "January",
      year: "2023",
      title: "Unleashing the Power of Quantum Superposition and Entanglement",link: "/blog/1010",
    },
    {
      id: 1011,
      imageSrc: "/assets/images/resource/11.jpg",
      date: "09",
      month: "November",
      year: "2022",
      title: "The Transformative Symphony of SDN Virtualization Technology",link: "/blog/1011",
    },
    {
      id: 1012,
      imageSrc: "/assets/images/resource/12.jpg",
      date: "30",
      month: "October",
      year: "2022",
      title: "Beyond Boundaries: Unraveling the Latest Frontiers in Backend Development",link: "/blog/1012",
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(blogPosts.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const pageChange = (page) => {
    {page == 1 && setCurrentPage(1);}
    {page == 2 && setCurrentPage(4);}
    {page == 3 && setCurrentPage(7);}
    {page == 4 && setCurrentPage(11);}
  };

  const renderPagination = () => {
      const pages = [];
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <li key={i} className={currentPage === i ? 'active' : ''}>
            <a  onClick={() => pageChange(i)}>{i}</a>
          </li>
        );
      }
      return pages;
    };

  return (
    <>
      <Layout
        headerStyle={15}
        footerStyle={15}
        wrapperCls="home_15"
        breadcrumbTitle="Blog"
      >
        <div>
          <section className="sidebar-page-container">
            <div className="auto-container">
              <div className="sec-title text-center">
                <h2>Recent Posts</h2>
                <div className="text-decoration">
                  <span className="left" />
                  <span className="right" />
                </div>
                <div className="text">
                  In today's dynamic digital landscape, technology is the
                  cornerstone of business success. <br />
                  Our blog is your gateway to insights, expertise, and
                  strategies that will transform your IT infrastructure and
                  propel your business forward.
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 content-side order-lg-2">
                  {blogPosts.slice(currentPage-1, currentPage+2).map((post) => (
                    <div className="news-block-one style-two">
                      <div key={post.id} className="row m-0">
                        <div className="col-md-6 p-0">
                          <div className="image">
                            <Link href={post.link}>
                              <img
                                className="lazy-image owl-lazy"
                                src={post.imageSrc}
                                alt=""
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="col-md-6 p-0">
                          <div className="inner-box">
                            <div className="row m-0 justify-content-between">
                              <div className="date">
                                <strong>{post.date}</strong>
                                {post.month} <br />
                                {post.year}
                              </div>
                            </div>
                            <h4>
                              <Link href={post.link}>{post.title}</Link>
                            </h4>
                            <div className="read-more-btn">
                              <Link href={post.link}>
                                Continue reading <i>&gt;&gt;</i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                    <div className="pagination-wrapper clearfix">
                        <ul className="pagination clearfix float-right">
                        <li>
                            <a onClick={() => {currentPage > 1 && handleClick(currentPage - 3)}}><i className="fas fa-angle-left" /></a>
                        </li>
                        {renderPagination()}
                        <li>
                            <a onClick={() => {Math.ceil(blogPosts.length / 2)+1 >= currentPage && handleClick(currentPage + 3)}}><i className="fas fa-angle-right" /></a>
                        </li>
                        </ul>
                    </div>
                </div>
                <aside className="col-lg-4 sidebar">
                  <div className="blog-sidebar">
                    <div className="widget widget_popular_post">
                      <h3 className="widget-title">Popular Posts</h3>
                      <article className="post">
                        <figure className="post-thumb">
                          <Link href="/blog/1002">
                            <img
                              src="/assets/images/resource/blog-image-1.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                        <h5>
                          <Link href="/blog/1002">
                          Blockchain Unleashed: Transforming Industries Through Decentralized Innovation
                          </Link>
                        </h5>
                        <div className="post-info">23 October, 2023</div>
                      </article>
                      <article className="post">
                        <figure className="post-thumb">
                          <Link href="/blog/1005">
                            <img
                              src="/assets/images/resource/blog-image-2.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                        <h5>
                          <Link href="/blog/1005">
                          Immersive Realities: Navigating the Frontiers of VR/AR Innovation
                          </Link>
                        </h5>
                        <div className="post-info">27 July, 2023 </div>
                      </article>
                      <article className="post">
                        <figure className="post-thumb">
                          <Link href="/blog/1008">
                            <img
                              src="/assets/images/resource/blog-image-3.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                        <h5>
                          <Link href="/blog/1008">
                          Beyond Reality: Navigating the Expansive Horizons of the Metaverse
                          </Link>
                        </h5>
                        <div className="post-info">19 March, 2023</div>
                      </article>
                    </div>
                    {/* Tag-cloud Widget */}
                    <div className="widget widget_tag_cloud">
                      <h3 className="widget-title">Tag Cloud</h3>
                      <ul className="clearfix">
                        <li>
                          <Link href="#">#Web3</Link>
                        </li>
                        <li>
                          <Link href="#">#Blockchain</Link>
                        </li>
                        <li>
                          <Link href="#">#WebDevelopment</Link>
                        </li>
                        <li>
                          <Link href="#">#Data</Link>
                        </li>
                        <li>
                          <Link href="#">#Design</Link>
                        </li>
                        <li>
                          <Link href="#">#MobileApp</Link>
                        </li>
                        <li>
                          <Link href="#">#AI</Link>
                        </li>
                        <li>
                          <Link href="#">#VR/AR</Link>
                        </li>
                        <li>
                          <Link href="#">#Technology</Link>
                        </li>
                      </ul>
                    </div>
                    {/* Newsletter Widget */}
                  </div>
                </aside>
              </div>
            </div>
          </section>
          {/* sidebar-page-container end */}
          {/* Feature Section Two */}
          <section className="feature-section-two mt-0">
            <div className="auto-container">
              <div className="row">
                <div
                  style={{ marginBottom: "20px" }}
                  className="col-lg-6 feature-block-two style-two"
                >
                  <div className="shape-box">
                    <div className="inner-box">
                      <div className="icon">
                        <img src="/assets/images/icons/icon-9.png" alt="" />
                      </div>
                      <h4>Become a Partner of Kodeum</h4>
                      <div className="text">
                        Unlock boundless possibilities as you join forces with
                        Kodeum, your gateway to innovation, and success.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{ marginBottom: "20px" }}
                  className="col-lg-6 feature-block-two style-two"
                >
                  <div className="shape-box">
                    <div className="inner-box">
                      <div className="icon">
                        <img src="/assets/images/icons/icon-10.png" alt="" />
                      </div>
                      <h4>Career Opportunities in Kodeum</h4>
                      <div className="text">
                        Ignite your career at Kodeum, where every opportunity
                        propels you to excellence.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}


// 'use client'
// import { useState } from "react";
// import Layout from "@/components/layout/Layout";
// import Link from "next/link";

// export default function Home() {
//   const blogPosts = [
//     {
//       id: 1001,
//       imageSrc: "/assets/images/resource/1.jpg",
//       date: "12",
//       month: "November",
//       year: "2023",
//       category: "Business",
//       title: "Unleashing the Power of Web 3.0: A Paradigm Shift in Digital Innovation",link: "/blog/1001",
//     },
//     {
//       id: 1002,
//       imageSrc: "/assets/images/resource/2.jpg",
//       date: "23",
//       month: "October",
//       year: "2023",
//       title: "Blockchain Unleashed: Transforming Industries Through Decentralized Innovation",link: "/blog/1002",
//     },
//     {
//       id: 1003,
//       imageSrc: "/assets/images/resource/3.jpg",
//       date: "31",
//       month: "August",
//       year: "2023",
//       title: "Beyond Boundaries: Exploring the Frontiers of Artificial Intelligence",link: "/blog/1003",
//     },
//     {
//       id: 1004,
//       imageSrc: "/assets/images/resource/4.jpg",
//       date: "14",
//       month: "July",
//       year: "2023",
//       title: "Machine Learning Mastery: Unveiling the Intelligent Revolution",link: "/blog/1004",
//     },
//     {
//       id: 1005,
//       imageSrc: "/assets/images/resource/5.jpg",
//       date: "27",
//       month: "July",
//       year: "2023",
//       title: "Immersive Realities: Navigating the Frontiers of VR/AR Innovation",link: "/blog/1005",
//     },
//     {
//       id: 1006,
//       imageSrc: "/assets/images/resource/6.jpg",
//       date: "12",
//       month: "May",
//       year: "2023",
//       title: "Sentinels of the Digital Realm: Fortifying the Future through Cybersecurity Vigilance",link: "/blog/1006",
//     },
//     {
//       id: 1007,
//       imageSrc: "/assets/images/resource/7.jpg",
//       date: "02",
//       month: "April",
//       year: "2023",
//       title: "Revolutionizing Logistics with Fleet Management Software Development",link: "/blog/1007",
//     },
//     {
//       id: 1008,
//       imageSrc: "/assets/images/resource/8.jpg",
//       date: "19",
//       month: "March",
//       year: "2023",
//       title: "Beyond Reality: Navigating the Expansive Horizons of the Metaverse",link: "/blog/1008",
//     },
//     {
//       id: 1009,
//       imageSrc: "/assets/images/resource/9.jpg",
//       date: "23",
//       month: "January",
//       year: "2023",
//       title: "Bluejacking Unveiled: Exploring the Intricacies of Wireless Messaging Intrigue",link: "/blog/1009",
//     },
//     {
//       id: 1010,
//       imageSrc: "/assets/images/resource/10.jpg",
//       date: "16",
//       month: "January",
//       year: "2023",
//       title: "Unleashing the Power of Quantum Superposition and Entanglement",link: "/blog/1010",
//     },
//     {
//       id: 1011,
//       imageSrc: "/assets/images/resource/11.jpg",
//       date: "09",
//       month: "November",
//       year: "2022",
//       title: "The Transformative Symphony of SDN Virtualization Technology",link: "/blog/1011",
//     },
//     {
//       id: 1012,
//       imageSrc: "/assets/images/resource/12.jpg",
//       date: "30",
//       month: "October",
//       year: "2022",
//       title: "Beyond Boundaries: Unraveling the Latest Frontiers in Backend Development",link: "/blog/1012",
//     },
//   ];

//   const itemsPerPage = 3;
//   const totalPages = Math.ceil(blogPosts.length / itemsPerPage);

//   const [currentPage, setCurrentPage] = useState(1);

//   const handleClick = (page) => {
//     setCurrentPage(page);
//   };

//   const pageChange = (page) => {
//     {page == 1 && setCurrentPage(1);}
//     {page == 2 && setCurrentPage(4);}
//     {page == 3 && setCurrentPage(7);}
//     {page == 4 && setCurrentPage(11);}
//   };

//   const renderPagination = () => {
//       const pages = [];
//       for (let i = 1; i <= totalPages; i++) {
//         pages.push(
//           <li key={i} className={currentPage === i ? 'active' : ''}>
//             <a  onClick={() => pageChange(i)}>{i}</a>
//           </li>
//         );
//       }
//       return pages;
//     };

//   return (
//     <>
//       <Layout
//         headerStyle={15}
//         footerStyle={15}
//         wrapperCls="home_15"
//         breadcrumbTitle="Blog"
//       >
//         <div>
//           <section className="sidebar-page-container">
//             <div className="auto-container">
//               <div className="sec-title text-center">
//                 <h2>Recent Posts</h2>
//                 <div className="text-decoration">
//                   <span className="left" />
//                   <span className="right" />
//                 </div>
//                 <div className="text">
//                   In today's dynamic digital landscape, technology is the
//                   cornerstone of business success. <br />
//                   Our blog is your gateway to insights, expertise, and
//                   strategies that will transform your IT infrastructure and
//                   propel your business forward.
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-lg-8 content-side order-lg-2">
//                   {blogPosts.slice(currentPage-1, currentPage+2).map((post) => (
//                     <div className="lock-one style-two">
//                       <div key={post.id} className="row m-0">
//                         <div className="col-md-6 p-0">
//                           <div className="image">
//                             <Link href={post.link}>
//                               <img
//                                 className="lazy-image owl-lazy"
//                                 src={post.imageSrc}
//                                 alt=""
//                               />
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="col-md-6 p-0">
//                           <div className="inner-box">
//                             <div className="row m-0 justify-content-between">
//                               <div className="date">
//                                 <strong>{post.date}</strong>
//                                 {post.month} <br />
//                                 {post.year}
//                               </div>
//                             </div>
//                             <h4>
//                               <Link href={post.link}>{post.title}</Link>
//                             </h4>
//                             <div className="read-more-btn">
//                               <Link href={post.link}>
//                                 Continue reading <i>&gt;&gt;</i>
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                     <div className="pagination-wrapper clearfix">
//                         <ul className="pagination clearfix float-right">
//                         <li>
//                             <a onClick={() => {currentPage > 1 && handleClick(currentPage - 3)}}><i className="fas fa-angle-left" /></a>
//                         </li>
//                         {renderPagination()}
//                         <li>
//                             <a onClick={() => {Math.ceil(blogPosts.length / 2)+1 >= currentPage && handleClick(currentPage + 3)}}><i className="fas fa-angle-right" /></a>
//                         </li>
//                         </ul>
//                     </div>
//                 </div>
//                 <aside className="col-lg-4 sidebar">
//                   <div className="blog-sidebar">
//                     <div className="widget widget_popular_post">
//                       <h3 className="widget-title">Popular Posts</h3>
//                       <article className="post">
//                         <figure className="post-thumb">
//                           <Link href="/blog/1002">
//                             <img
//                               src="/assets/images/resource/2.jpg"
//                               alt=""
//                             />
//                           </Link>
//                         </figure>
//                         <h5>
//                           <Link href="/blog/1002">
//                           Blockchain Unleashed: Transforming Industries Through Decentralized Innovation
//                           </Link>
//                         </h5>
//                         <div className="post-info">23 October, 2023</div>
//                       </article>
//                       <article className="post">
//                         <figure className="post-thumb">
//                           <Link href="/blog/1005">
//                             <img
//                               src="/assets/images/resource/5.jpg"
//                               alt=""
//                             />
//                           </Link>
//                         </figure>
//                         <h5>
//                           <Link href="/blog/1005">
//                           Immersive Realities: Navigating the Frontiers of VR/AR Innovation
//                           </Link>
//                         </h5>
//                         <div className="post-info">27 July, 2023 </div>
//                       </article>
//                       <article className="post">
//                         <figure className="post-thumb">
//                           <Link href="/blog/1008">
//                             <img
//                               src="/assets/images/resource/8.jpg"
//                               alt=""
//                             />
//                           </Link>
//                         </figure>
//                         <h5>
//                           <Link href="/blog/1008">
//                           Beyond Reality: Navigating the Expansive Horizons of the Metaverse
//                           </Link>
//                         </h5>
//                         <div className="post-info">19 March, 2023</div>
//                       </article>
//                     </div>
//                     {/* Tag-cloud Widget */}
//                     <div className="widget widget_tag_cloud">
//                       <h3 className="widget-title">Tag Cloud</h3>
//                       <ul className="clearfix">
//                         <li>
//                           <a>#Web3</a>
//                         </li>
//                         <li>
//                           <a>#Blockchain</a>
//                         </li>
//                         <li>
//                           <a>#WebDevelopment</a>
//                         </li>
//                         <li>
//                           <a>#Data</a>
//                         </li>
//                         <li>
//                           <a>#Design</a>
//                         </li>
//                         <li>
//                           <a>#MobileApp</a>
//                         </li>
//                         <li>
//                           <a>#AI</a>
//                         </li>
//                         <li>
//                           <a>#VR/AR</a>
//                         </li>
//                         <li>
//                           <a>#Technology</a>
//                         </li>
//                       </ul>
//                     </div>
//                     {/* tter Widget */}
//                   </div>
//                 </aside>
//               </div>
//             </div>
//           </section>
//           {/* sidebar-page-container end */}
//           {/* Feature Section Two */}
//           <section className="feature-section-two mt-0">
//             <div className="auto-container">
//               <div className="row">
//                 <div
//                   style={{ marginBottom: "20px" }}
//                   className="col-lg-6 feature-block-two style-two"
//                 >
//                   <div className="shape-box">
//                     <div className="inner-box">
//                       <div className="icon">
//                         <img src="/assets/images/icons/icon-9.png" alt="" />
//                       </div>
//                       <h4>Become a Partner of Kodeum</h4>
//                       <div className="text">
//                         Unlock boundless possibilities as you join forces with
//                         Kodeum, your gateway to innovation, and success.
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   style={{ marginBottom: "20px" }}
//                   className="col-lg-6 feature-block-two style-two"
//                 >
//                   <div className="shape-box">
//                     <div className="inner-box">
//                       <div className="icon">
//                         <img src="/assets/images/icons/icon-10.png" alt="" />
//                       </div>
//                       <h4>Career Opportunities in Kodeum</h4>
//                       <div className="text">
//                         Ignite your career at Kodeum, where every opportunity
//                         propels you to excellence.
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </Layout>
//     </>
//   );
// }
