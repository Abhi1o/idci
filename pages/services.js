import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";

const Services = () => {
  return (
    <Layout>
      <PageBanner pageName={"Services"} />
      <section className="work-process-area pt-130 pb-100 rpt-100 rpb-70 rel z-1">
        <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15">Working Process</span>
          <h2>Industry Best Practices to the Core</h2>
        </div>
        <div className="work-process-line text-center">
          <img src="assets/images/shapes/work-process-line.png" alt="line" />
        </div>
        <div className="container">
          <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
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
                  <h4>Recovered Debt</h4>
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
      {/* Video Area start */}
      <div className="video-area-two rel z-1">
        <div className="container">
          <div className="video-wrap-two wow fadeInUp delay-0-2s">
            <img src="assets/images/background/video.jpg" alt="Video" />
            <a href="#" className="mfp-iframe video-play" tabIndex={-1}>
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </div>
      {/* Video Area end */}
      {/* Services Area start */}
      <section className="services-area bgc-lighter pt-75 pb-10 rel z-1">
        <div className="container">
          <div className="row medium-gap">
            <div className="col-xl-4 col-md-6">
              <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Latest Services</span>
                <h2>We Provide Best Services</h2>
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
              <div className="service-two-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-coding" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="#">
                      Court Settlement
                    </Link>
                  </h4>
                  <p>
                    we provide expert court settlement services designed to
                    resolve disputes efficiently and amicably. Our experienced
                    legal team is dedicated to helping you achieve fair and
                    satisfactory outcomes without the need for prolonged
                    litigation.
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
                    time and money both..{" "}
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
                    Recovery Systems. IDCI has recovered overseas balance
                    outstanding payment of exporters & importers from Taiwan,
                    Chine & Dubai in two months
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
      {/* Customer Satisfaction Area start */}
      <section className="satisfaction-area-two mt-30 py-100 rpy-70 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="cs-content-part rmb-35 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-15">
                  <span className="sub-title mb-15">
                    Guaranteed Customer Satisfaction
                  </span>
                  <h2>Our Commitment to Customer Satisfaction</h2>
                </div>
                <p>
                  At Idci, we prioritize your satisfaction above everything
                  else. Our commitment to delivering exceptional service and
                  outstanding results is unwavering. Here's how we ensure
                  guaranteed customer satisfaction:
                </p>
                <div className="row pt-15">
                  <div className="col-sm-6">
                    <div className="service-item style-two">
                      <div className="icon">
                        <i className="flaticon-trust" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="#">
                          Best Trusted Partner
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item style-two">
                      <div className="icon">
                        <i className="flaticon-technical-support" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="#">
                          24/7 Technical Support
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs-image-part ps-0 mb-30 wow fadeInRight delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/about/satisfaction-two.jpg"
                    alt="Satisfaction"
                  />
                </div>
                <div className="experience-years">
                  <h4>10 Years Of Experience</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Services;
