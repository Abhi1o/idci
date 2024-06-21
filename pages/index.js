import Layout from "@/layout";
import { TestimonialsSlider2 } from "@/src/components/slider/TestimonialsSlider";
import { projectSliderActive } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";
import {TestimonialImageSlider1} from "@/src/components/slider/TestimonialsSlider"
const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout header={1}>
      {/* Hero Section Start */}
      <section className="hero-area bgc-gray rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 align-self-center">
              <div className="hero-content pt-md-50 pt-lg-115 pb-125 rpb-0 wow fadeInUp delay-0-4s">
                <h3>
                  National & Overseas Bad Debt Management Corporate Consultant
                  &amp; Technology Solutions
                </h3>
                <p>
                  We aim to provide the best of our collection and recovery
                  services to those clients who are skilled
                </p>
                <Link legacyBehavior href="/contact">
                  <a className="theme-btn mt-20 wow fadeInUp delay-0-6s">
                    Book an appointment <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <div className="hero-shapes">
                
                  <img
                    className="shape one"
                    src="assets/images/shapes/dabble-plus.png"
                    alt="Shape"
                  />
                  <img
                    className="shape two"
                    src="assets/images/shapes/dabble-plus.png"
                    alt="Shape"
                  />
                  <img
                    className="shape three"
                    src="assets/images/shapes/plus.png"
                    alt="Shape"
                  />
                  
                </div>
              </div>
            </div>
            <div className="col-lg-4 align-self-center">
              <div className="hero-images mt-80 wow fadeInLeft">
                <img src="assets/images/hero/hero-one.jpg" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <img
            className="shape bg-lines"
            src="assets/images/shapes/hero-bg-line-shapes.png"
            alt="Shape"
          />
          <img
            className="shape right-shape wow fadeInRight delay-0-8s"
            src="assets/images/shapes/hero-right-shape.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Hero Section End */}
      {/* Partners Area start */}
      <section className="partners-area mt-0 pt-80 pb-100 rmt-30 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Global Partners</span>
            <h2>TRUSTED BY MORE THAN 120+ COMPANIES</h2>
          </div>
          <div className="mw-100" >
          <TestimonialImageSlider1/>
            
          </div>
        </div>
      </section>

      {/* special offers */}
      <section className="services-area-three overflow-hidden pt-10 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-5">
              <div className="services-content-three mb-30 rmb-65 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Special Services</span>
                  <h2>Specialized Domain Centric, Custom Tailored Debt Recovery Services for Each Sector</h2>
                </div>
                <p>
                Our company excels in providing specialized, domain-centric debt recovery services meticulously tailored to meet the unique needs of software companies, pharmaceutical companies, and embassies. With a deep understanding of industry-specific issues, our expert team implements targeted strategies to recover debts swiftly, helping our clients maintain seamless operations and financial health.</p>
                <ul className="list-style-one pt-5">
                  <li>Software company</li>
                  <li>Pharmaceutical company</li>
                  <li>All Embassy</li>
                </ul>
                <Link legacyBehavior href="/services">
                  <a className="theme-btn mt-45">
                    View All Services <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-sm-6">
                  <div className="feature-item style-two mt-25 wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-trust" />
                    </div>
                    <Link legacyBehavior href="/services">
                      <h4> Software specific services</h4>
                    </Link>
                    <p>
                    we tackle issues like invoice disputes, complex licensing agreements, and client financial difficulties.  </p>
                    <Link legacyBehavior href="/services">
                      <a className="more-btn">
                        <i className="far fa-angle-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="feature-item style-two wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-social-media" />
                    </div>
                    <Link legacyBehavior href="/services">
                      <h4>Pharma Specific Services</h4>
                    </Link>
                    <p>
                    we address regulatory compliance issues, supply chain complexities, and insurance reimbursement delays.</p>
                    <Link legacyBehavior href="/services">
                      <a className="more-btn">
                        <i className="far fa-angle-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="feature-item style-two wow fadeInDown delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-technical-support" />
                    </div>
                    <Link legacyBehavior href="/services">
                      <h4>Embassy Specific Services</h4>
                    </Link>
                    <p>
                    we navigate the complexities of currency fluctuations, bureaucratic delays, and cross-border transactions. </p>
                    <Link legacyBehavior href="/services">
                      <a className="more-btn">
                        <i className="far fa-angle-right" />
                      </a>
                    </Link>
                  </div>
                  {/* <div className="feature-item style-two mt-25 wow fadeInDown delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-brainstorming" />
                    </div>
                    <Link legacyBehavior href="/services">
                      <h4>IT Consulting</h4>
                    </Link>
                    <p>
                      With over 20 year of experience 850+ employees flexion
                    </p>
                    <Link legacyBehavior href="/services">
                      <a className="more-btn">
                        <i className="far fa-angle-right" />
                      </a>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="servcies-bg-shape">
          <img src="assets/images/shapes/services-bg-shape.png" alt="Shape" />
        </div>
      </section>
      {/* Partners Area end */}
      {/* About Area start */}
      <section className="about-area pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content rmb-65 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">About Us</span>
                  <h2>We are the Intentional Defaulter Corporate Of India.</h2>
                </div>
                <p>
                  We are Delhi based Debtors Recovery/collection consultant. We
                  started this services in January, 2014, almost 10 years of
                  experience we have but overall experience of this field is 18
                  years. We provide this service especially to Corporate Clients
                  whether Indian or Overseas.
                </p>
                <div className="about-btns mb-45">
                  {/* <Link legacyBehavior href="#">
                    <a className="theme-btn mt-15">
                      Learn More <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link> */}
                  <div className="hotline mt-15">
                    <i className="fas fa-phone" />
                    <div className="content">
                      <span>Hotline</span>
                      <br />
                      <a href="callto:+91 9868423356">+91 9868423356</a>
                    </div>
                  </div>
                </div>
                <div className="row no-gap for-active">
                  <div className="col-sm-6">
                    <div className="service-item active">
                      <div className="icon">
                        <img
                          src="assets/images/services/icon1.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>
                        <Link legacyBehavior href="#">
                          Motto
                        </Link>
                      </h4>
                      <p>
                        Providing best recovery and collection service to Indian
                        and overseas corporate clients.
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="service-item">
                      <div className="icon">
                        <img
                          src="assets/images/services/icon2.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>
                        <Link legacyBehavior href="#">
                          What we do
                        </Link>
                      </h4>
                      <p>
                        We try to recover and collect even those payment which
                        is older than 3 years and legally dead.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item">
                      <div className="icon">
                        <img
                          src="assets/images/services/icon2.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>
                        <Link legacyBehavior href="#">
                          Achievement
                        </Link>
                      </h4>
                      <p>Our success rate is more than 90%.</p>
                    </div>
                  </div>
                  <div className="col-sm-6  ">
                    <div className="service-item active">
                      <div className="icon">
                        <img
                          src="assets/images/services/icon1.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>
                        <Link legacyBehavior href="#">
                          International
                        </Link>
                      </h4>
                      <p>Structured network of overseas clients.</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item active">
                      <div className="icon">
                        <img
                          src="assets/images/services/icon1.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>
                        <Link legacyBehavior href="#">
                          Experience
                        </Link>
                      </h4>
                      <p>
                        We are 10 years young young debtors/collection
                        consultant. But overall we have 18 years of experience..
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item">
                      <div className="icon">
                        <img
                          src="assets/images/services/icon2.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>
                        <Link legacyBehavior href="#">
                          B2B
                        </Link>
                      </h4>
                      <p>
                        We have framed this service for corporate clients. We
                        have always focused on quick collection and recovery of
                        payment from Intentional defaulters.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-images">
                <div className="top-part">
                  <img
                    className="wow fadeInRight delay-0-3s"
                    src="assets/images/about/about1.jpg"
                    alt="About"
                  />
                  <img
                    className="wow zoomIn delay-0-5s"
                    src="assets/images/about/about-logo.png"
                    alt="About"
                  />
                </div>
                <div className="bottom-part">
                  <img
                    className="wow fadeInDown delay-0-5s"
                    src="assets/images/about/about-dots.png"
                    alt="About"
                  />
                  <img
                    className="wow fadeInDown delay-0-3s"
                    src="assets/images/about/about2.jpg"
                    alt="About"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area end */}
      {/* Project Area start */}
      <section className="project-area overflow-hidden bgc-lighter pt-130 rpt-100 rel z-1">
        {/* <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Learn Our Project</span>
            <h2>Our Work Does the Talking</h2>
          </div>
          <Slider {...projectSliderActive} className="project-slider-active">
            <div className="project-slider-item">
              <div className="video">
                <img
                  src="assets/images/projects/project-video.png"
                  alt="Video"
                />
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                  tabIndex={-1}
                >
                  <i className="fas fa-play" />
                </a>
              </div>
              <div className="content">
                <h4>
                  High successful Sa video platform with a patented technology
                  used by global enterprises.
                </h4>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment so blinded by desire
                </p>
                <ul className="list-style-one">
                  <li>Bringing new IT solutions to the market</li>
                  <li>To be included the list of the best 100 IT companies</li>
                </ul>
                <Link legacyBehavior href="/project-details">
                  <a className="theme-btn style-two mt-15">
                    View Details <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="project-slider-item">
              <div className="content">
                <h4>
                  High successful Sa video platform with a patented technology
                  used by global enterprises.
                </h4>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment so blinded by desire
                </p>
                <ul className="list-style-one">
                  <li>Bringing new IT solutions to the market</li>
                  <li>To be included the list of the best 100 IT companies</li>
                </ul>
                <Link legacyBehavior href="/project-details">
                  <a className="theme-btn style-two mt-15">
                    View Details <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="video">
                <img
                  src="assets/images/projects/project-video.png"
                  alt="Video"
                />
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                  tabIndex={-1}
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </Slider>
        </div>
        <div className="project-shapes">
          <img
            className="shape one"
            src="assets/images/shapes/project-left.png"
            alt="shape"
          />
          <img
            className="shape two"
            src="assets/images/shapes/project-right.png"
            alt="shape"
          />
        </div> */}

        {/* special services */}

        
      </section>
      {/* Project Area end */}
      {/* Services Area start */}
      <section className="services-area bgc-gray text-white pt-75 pb-10 rel z-1">
        <div className="container">
          <div className="row medium-gap">
            <div className="col-xl-4 col-md-6">
              <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                <h2>We Provide Best Services</h2>
                <span className="sub-title mb-15">
                  We are mainly experienced in providing following types of
                  recovery services.
                </span>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="flaticon-networking" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="#">
                      Legal Recovery
                    </Link>
                  </h4>
                  <p>
                    This recovery follow the court procedure. It is time taking,
                    but we have some good, effective and different strategies
                    for our valuable clients in LEGAL Recovery System to recover
                    the long outstanding payment from the INTENTIONAL
                    DEFAULTERS.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-7s">
                <div className="icon">
                  <i className="flaticon-seo" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="#">
                    Long Pending Time Consuming Cases Settlement
                    </Link>
                  </h4>
                  <p>
                  We provide expert services designed to resolve long pending, time-consuming cases efficiently and amicably. Our experienced legal team is dedicated to helping you achieve fair and satisfactory outcomes without the need for prolonged litigation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-3s">
                <div className="icon">
                  <i className="flaticon-app-development" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="#">
                      Private Settlement
                    </Link>
                  </h4>
                  <p>
                    In the fast busy work environment for the corporate client
                    whether Indian or Overseas: We have developed a Private
                    Settlement procedure for quick result oriented resolution of
                    bad debt matters. We less prefer to take the cases/matter to
                    the court, we believe that going court is totally wastage of
                    time and money both..
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-5s">
                <div className="icon">
                  <i className="flaticon-logo" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="#">
                      Overseas Debtors Recovery Systems.
                    </Link>
                  </h4>
                  <p>
                    We provide Debtors collection/recovery services overseas
                    too. All overseas countries we cover under Technical Debtors
                    Recovery Systems. Idci has recovered overseas balance
                    outstanding payment of exporters & importers from Taiwan,
                    Chine & Dubai in two months
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-coding" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="#">
                      Technical Recovery
                    </Link>
                  </h4>
                  <p>
                    This is a fast process payment recovery system, which work
                    on fast modus of operandi. In this process we recover the
                    long pending payment from the INTENTIONAL DEFAULTERS
                    corporate clients at pan India in very small duration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Area end */}
      {/* Work Process Area start */}
      <section className="work-process-area pt-130 pb-100 rpt-100 rpb-70 rel z-1">
        <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15">Working Process</span>
          <h2>Industry Best Practices to the Core</h2>
        </div>
        <div className="work-process-line text-center">
          <img src="assets/images/shapes/work-process-line.png" alt="line" />
        </div>
        <div className="container">
          <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-between ">
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">01</div>
                <div className="content">
                  <h4>Evaluate debt status</h4>
                  <p>
                    Involves assessing the status of the debt, including the
                    amount owed, the debtor's contact information, any existing
                    agreements or contracts, and the timeline of the debt.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-10 wow fadeInDown delay-0-2s">
                <div className="number">02</div>
                <div className="content">
                  <h4>Demand Notice</h4>
                  <p>
                    Issue a formal demand letter to the debtor, clearly stating
                    the amount owed, the deadline for payment, consequences of
                    non-payment (such as legal action), and a request for
                    immediate settlement.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">03</div>
                <div className="content">
                  <h4>Negotiate Payment</h4>
                  <p>
                    Engage in negotiations with the debtor to reach a mutually
                    agreeable settlement, which may involve payment plans,
                    reduced amounts, or alternative forms of repayment.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item wow fadeInDown delay-0-2s">
                <div className="number">04</div>
                <div className="content">
                  <h4>Legal Action</h4>
                  <p>
                    If negotiations fail or the debtor refuses to comply,
                    proceed with legal action. This may include filing a
                    lawsuit, obtaining a court judgment, and enforcing legal
                    remedies such as wage garnishment or asset seizure.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-50 wow fadeInUp delay-0-2s">
                <div className="number">05</div>
                <div className="content">
                  <h4>Recovered Debt </h4>
                  <p>
                    After legal action and enforcement, the debt has been fully
                    recovered through court-approved methods such as asset
                    seizure, wage garnishment, or negotiated settlement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Process Area end */}
      {/* Team Area start */}
      {/* <section className="team-area pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Team Member</span>
            <h2>Amazing Team Members</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member wow fadeInUp delay-0-2s">
                <img src="assets/images/team/member1.jpg" alt="Team" />
                <h4>Johnathan P. Bailey</h4>
                <span className="designation">UX/UI Designer</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member wow fadeInUp delay-0-4s">
                <img src="assets/images/team/member2.jpg" alt="Team" />
                <h4>Mark M. Hughes</h4>
                <span className="designation">Web Developer</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member wow fadeInUp delay-0-6s">
                <img src="assets/images/team/member3.jpg" alt="Team" />
                <h4>Donald B. Mitchell</h4>
                <span className="designation">Software Engineer</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member wow fadeInUp delay-0-8s">
                <img src="assets/images/team/member4.jpg" alt="Team" />
                <h4>Bennie N. Bannister</h4>
                <span className="designation">Senior Consultant</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Team Area end */}
      {/* Statistics Area start */}
      <section className="statistics-area rel z-2">
        <div className="container">
          <div
            className="statistics-inner bgs-cover text-white p-80 pb-20"
            style={{
              backgroundImage: "url(assets/images/background/statistics.jpg)",
            }}
          >
            <div className="row align-items-xl-start align-items-center">
              <div className="col-xl-5 col-lg-6">
                <div className="statistics-content mb-55 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-30">
                    <span className="sub-title mb-15">Company Statistics</span>
                    <h2>Learn About Our Company Statistics</h2>
                  </div>
                  {/* <Link legacyBehavior href="/about">
                    <a className="read-more">
                      Learn More <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="row">
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
                      <i className="flaticon-target" />
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop={256}
                      >
                        <Counter end={256} />
                      </span>
                      <span className="counter-title">Project Completed</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                      <i className="flaticon-target-audience" />
                      <span
                        className="count-text percent"
                        data-speed={3000}
                        data-stop="95"
                      >
                        <Counter end={95} decimals={1} />
                      </span>
                      <span className="counter-title">Clients Happy</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
                      <i className="flaticon-customer-experience" />
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop="10"
                      >
                        <Counter end={10} decimals={1} />
                      </span>
                      <span className="counter-title">Years Experience</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                      <i className="flaticon-medal" />
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop={15}
                      >
                        <Counter end={15} />
                      </span>
                      <span className="counter-title">Award Winning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Area end */}
      {/* Pricing Plan Area start */}
      <section className="price-plan-area bgc-lighter mt-30 rmt-0 pt-220 pb-100 rpb-70 rel z-1">
        {/* <div className="container pt-20">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Amazing Pricing Plan</span>
            <h2>Affordable Pricing Packages</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-2s">
                <span className="badge">Best Package</span>
                <h4 className="title">Basic Plan</h4>
                <span className="price-count">5 Services Included</span>
                <span className="price">29.85</span>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn style-two">
                    Choose Package <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <h5>This Plan Included :</h5>
                <ul>
                  <li>
                    <a href="#">Premium Quality Supports (24/7)</a>
                  </li>
                  <li>
                    <a href="#">IT Consultations (Business Growth)</a>
                  </li>
                  <li>
                    <a href="#">Web Design &amp; Development</a>
                  </li>
                  <li>
                    <a href="#">Search Engine Optimization (SEO )</a>
                  </li>
                  <li>
                    <a href="#">User &amp; Market Research</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-4s">
                <span className="badge">Best Package</span>
                <h4 className="title">standard Plan</h4>
                <span className="price-count">7 Services Included</span>
                <span className="price">49.64</span>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn style-two">
                    Choose Package <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <h5>This Plan Included :</h5>
                <ul>
                  <li>
                    <a href="#">Premium Quality Supports (24/7)</a>
                  </li>
                  <li>
                    <a href="#">IT Consultations (Business Growth)</a>
                  </li>
                  <li>
                    <a href="#">Web Design &amp; Development</a>
                  </li>
                  <li>
                    <a href="#">Search Engine Optimization (SEO )</a>
                  </li>
                  <li>
                    <a href="#">User &amp; Market Research</a>
                  </li>
                  <li>
                    <a href="#">UX/UI Strategy (Design &amp; Develop)</a>
                  </li>
                  <li>
                    <a href="#">Product Engineering</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-6s">
                <span className="badge">Best Package</span>
                <h4 className="title">Golden Package</h4>
                <span className="price-count">7 Services Included</span>
                <span className="price">98.73</span>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn style-two">
                    Choose Package <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <h5>This Plan Included :</h5>
                <ul>
                  <li>
                    <a href="#">Premium Quality Supports (24/7)</a>
                  </li>
                  <li>
                    <a href="#">IT Consultations (Business Growth)</a>
                  </li>
                  <li>
                    <a href="#">Web Design &amp; Development</a>
                  </li>
                  <li>
                    <a href="#">Search Engine Optimization (SEO )</a>
                  </li>
                  <li>
                    <a href="#">User &amp; Market Research</a>
                  </li>
                  <li>
                    <a href="#">UX/UI Strategy (Design &amp; Develop)</a>
                  </li>
                  <li>
                    <a href="#">Product Engineering</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="price-shapes">
          <img
            className="shape one wow fadeInLeft delay-0-5s"
            src="assets/images/shapes/price-left.png"
            alt="Shape"
          />
          <img
            className="shape two"
            src="assets/images/shapes/price-right.png"
            alt="Shape"
          />
        </div> */}
      </section>
      {/* Pricing Plan Area end */}
      {/* Testimonials Area start */}
      <section className="testimonials-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="testimonial-left-part rmb-85 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-45">
                  <span className="sub-title mb-15">Our Testimonials</span>
                  <h2>What Our Clients Say About Services</h2>
                </div>
                <TestimonialsSlider2 />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-right-part wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/testimonials/testimonial.jpg"
                  alt="Testimonial"
                />
                <div className="testi-image-over">
                  <h3>We Have More 248+ Reviews From Global Clients</h3>
                  {/* <img
                    src="assets/images/testimonials/signature.png"
                    alt="Signature"
                  /> */}
                </div>
                <div className="dot-shapes">
                  <img
                    src="assets/images/testimonials/testimonial-dots.png"
                    alt="Dots"
                  />
                  <img
                    src="assets/images/testimonials/testimonial-dots.png"
                    alt="Dots"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Area end */}
      {/* Blog Area start */}
      <section className="blog-area pb-150 mb-30 rmb-0 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Our Blog &amp; News</span>
            <h2>Latest Blog, New &amp; Articles</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">May 26, 2024</a>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Comments (5)</a>
                    </li>
                  </ul>
                  <h4>
                    <Link legacyBehavior href="blog-details">
                      Legal Action to Recover your Debt
                    </Link>
                  </h4>
                  <div className="author">
                    <img
                      src="https://irblaw.com.sg/wp-content/uploads/2021/06/rabi-ahmad-150.jpg.webp"
                      alt="Author"
                    />
                    <i>Post By </i>
                    <a href="#">Rabi Ahmad</a>
                  </div>
                  <p>
                    The problem these smaller businesses and private individuals
                    face revolves around the costs involved in taking debt legal
                    advice...
                  </p>
                  {/* <Link legacyBehavior href="/blog">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-two wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#"> March 08, 2024</a>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Comments (2)</a>
                    </li>
                  </ul>
                  <h4>
                    <Link legacyBehavior href="blog">
                      Debt Collection Strategies to Reduce Your Bad Debts
                    </Link>
                  </h4>
                  <div className="author">
                    <img
                      src="https://irblaw.com.sg/wp-content/uploads/2018/08/ameera-bajrai.jpg.webp"
                      alt="Author"
                    />
                    <i>Post By </i>
                    <a href="#">Ameera Bajrai</a>
                  </div>
                  <p>
                    From understanding your debtor's position to using
                    technology to your advantage, these strategies cover the
                    essentials of efficient...
                  </p>
                  {/* <Link legacyBehavior href="/blog">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-two wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Jan 26, 2024</a>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Comments (9)</a>
                    </li>
                  </ul>
                  <h4>
                    <Link legacyBehavior href="blog-details">
                      Managing Overseas Aged Debt
                    </Link>
                  </h4>
                  <div className="author">
                    <img src="assets/images/blog/author.jpg" alt="Author" />
                    <i>Post By </i>
                    <a href="#">Giles Goodman</a>
                  </div>
                  <p>
                    As a business grows, it is inevitable that it will begin
                    partnering with organizations outside its home country.
                    Collecting debts from clients...
                  </p>
                  {/* <Link legacyBehavior href="/blog-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Area end */}
    </Layout>
  );
};
export default Index;
