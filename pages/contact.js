import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
const Contact = () => {
  return (
    <Layout>
      <PageBanner pageName={"Contact Us"} />{" "}
      <section className="contact-page-info pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row text-center mb-35 justify-content-center wow fadeInUp delay-0-2s">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title mb-25">
                <span className="sub-title mb-15">Need any Helps</span>
                <h2>Contact Information</h2>
              </div>
              <p>
                Reclaim Your Financial Stability with Our Professional Debt
                Recovery Services - Contact Us Today for Expert Assistance and
                Personalized Solutions to Resolve Your Outstanding Debts.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="fal fa-map-marker-alt" />
                </div>
                <h4>Locations</h4>
                <span>India</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-3s">
                <div className="icon">
                  <i className="fal fa-envelope-open" />
                </div>
                <h4>Email Us</h4>
                <a href="mailto:idci.delhi@gmail.com">idci.delhi@gmail.com</a>
                <br />
                <a href="https://www.idci.in/">www.idci.in/</a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="fal fa-phone-plus" />
                </div>
                <h4>Contact</h4>
                <span>
                  Mobile : <a href="callto:+91 9868423356">+91 9868423356</a>
                </span>
                <span>
                  Phone : <a href="callto:+91 9868423356">+91 9868423356</a>
                </span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-5s">
                <div className="icon">
                  <i className="fal fa-clock" />
                </div>
                <h4>Working Hour</h4>
                <b>Monday _ Friday,</b>
                <span>10:00am - 05:00pm</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Info Area end */}
      {/* Location Map Area Start */}
      {/* <div className="contact-page-map wow fadeInUp delay-0-2s">
        <div className="our-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m12!1m10!1m3!1d142190.2862584524!2d-74.01298319978558!3d40.721725351435126!2m1!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1663473911885!5m2!1sen!2sbd"
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div> */}
      {/* Location Map Area End */}
      {/* Contact Form Start */}
      <section className="contact-page-form pb-130 rpb-100">
        <div className="container">
          <div className="contact-form-wrap form-style-two bgc-lighter wow fadeInUp delay-0-2s">
            <div className="row text-center mb-35 justify-content-center">
              <div className="col-xl-9 col-lg-11">
                <div className="section-title mb-25 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Get In Touch</span>
                  <h2>Contact Us</h2>
                </div>
                <p>
                  Are you interested in receiving our services? Do you want to
                  know more about how we work and function? Give us a chance to
                  serve you! Let us help you grow and recover from bad debts!
                  Contact us today!
                </p>
              </div>
            </div>
            <form
              // onSubmit={(e) => e.preventDefault()}
              id="contactForm"
              className="contactForm"
              action="https://formspree.io/f/xnqeykwz"
              name="contactForm"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      defaultValue=""
                      placeholder="Full name"
                      required
                      data-error="Please enter your name"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="phone_number"
                      name="phone_number"
                      className="form-control"
                      defaultValue=""
                      placeholder="Phone Number"
                      required
                      data-error="Please enter your Phone Number"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      defaultValue=""
                      placeholder="Email Address"
                      required
                      data-error="Please enter your Email"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      defaultValue=""
                      placeholder="Subject"
                      required
                      data-error="Please enter your Subject"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows={3}
                      placeholder="Message"
                      required
                      data-error="Please enter your Message"
                      defaultValue={""}
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="form-group text-center mb-0">
                    <button type="submit" className="theme-btn style-two">
                      send message <i className="far fa-long-arrow-right" />
                    </button>
                    <div id="msgSubmit" className="hidden" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Contact;
