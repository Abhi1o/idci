import { testimonialSlider } from "@/src/sliderProps";
import { Component, Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Link from "next/link";
// import './YourSliderStyles.css';

export default class TestimonialsSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <Fragment>
        <div className="row justify-content-between align-items-end mb-30">
          <div className="col-lg-8">
            <div className="section-title mb-25 wow fadeInRight delay-0-2s">
              <span className="sub-title mb-15">Clients Feedback</span>
              <h2>What Our Clients Say Us</h2>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="slider-arrow mb-25 text-lg-end">
              <button
                className="slick-arrow testi-prev"
                onClick={this.previous}
              >
                <i className="far fa-angle-left" />
              </button>
              <button className="slick-arrow testi-next" onClick={this.next}>
                <i className="far fa-angle-right" />
              </button>
            </div>
          </div>
        </div>
        <Slider
          {...testimonialSlider}
          ref={(c) => (this.slider = c)}
          className="testimonial-slider"
        >
          <div className="testimonial-item wow fadeInUp delay-0-2s">
            <div className="image">
              <img
                src="assets/images/testimonials/testi-author1.jpg"
                alt="Author"
              />
            </div>
            <div className="content">
              <div className="testi-header">
                <h4>Excellent Works</h4>
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
              <div className="testi-text">
                legal action and court case, you recovered our Bad Debt. You
                saved our time and money both. We appreciate your work process.
                You involved all the senior management in our payment recovery.
                The Biggest thing is that those who were not attending us, were
                ready to meet us face to face. Thank you very much for recovery
                of our Bad Debt.....a
              </div>
              <div className="testi-footer">
                <div className="icon">
                  <i className="flaticon-quotation" />
                </div>
                <div className="title">
                  <h4>Andrew D. Bricker</h4>
                  <span className="designation">CEO &amp; Founder</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item wow fadeInUp delay-0-4s">
            <div className="content">
              <div className="testi-header">
                <h4>Excellent Works</h4>
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
              <div className="testi-text">
                On the other hand denounce righteous indignation's and dislike
                men who beguiled and demoralized by the charms of pleasure
                moment blinded foresee
              </div>
              <div className="testi-footer">
                <div className="icon">
                  <i className="flaticon-quotation" />
                </div>
                <div className="title">
                  <h4>Jose T. McMichael</h4>
                  <span className="designation">Senior Manager</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item wow fadeInUp delay-0-6s">
            <div className="image">
              <img
                src="assets/images/testimonials/testi-author4.jpg"
                alt="Author"
              />
            </div>
            <div className="content">
              <div className="testi-header">
                <h4>Excellent Works</h4>
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
              <div className="testi-text">
                Unde omnis iste natus voluptatem accus antiume dolorem queauy
                antium totam aperiam eaque quaey abillosa inventore veritatis
                etuarchite beatae vitaec
              </div>
              <div className="testi-footer">
                <div className="icon">
                  <i className="flaticon-quotation" />
                </div>
                <div className="title">
                  <h4>Andrew D. Bricker</h4>
                  <span className="designation">CEO &amp; Founder</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </Fragment>
    );
  }
}

const TestimonialsSlider2 = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });
  const thumbs = {
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    speed: 2100,
    arrows: false,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 2100,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  const slider = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 2100,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2100,
  };
  return (
    <Fragment>
      <Slider
        {...thumbs}
        asNavFor={nav1}
        ref={(slider) => setSlider2(slider)}
        className="testi-image-slider"
      >
        <div className="testi-image-item">
          <img src="assets/CompanyLogo/advance.png" alt="Author" />
        </div>
        <div className="testi-image-item">
          <img src="assets/CompanyLogo/Canon.gif" alt="Author" />
        </div>
        <div className="testi-image-item">
          <img src="assets/CompanyLogo/gyan.png" alt="Author" />
        </div>
        <div className="testi-image-item">
          <img src="assets/CompanyLogo/fuji.png" alt="Author" />
        </div>
        <div className="testi-image-item">
          <img src="assets/CompanyLogo/classic.png" alt="Author" />
        </div>
        <div className="testi-image-item">
          <img src="assets/CompanyLogo/egis.png" alt="Author" />
        </div>
      </Slider>
      <Slider
        {...slider}
        asNavFor={nav2}
        ref={(slider) => setSlider1(slider)}
        className="testi-content-slider"
      >
        <div className="testi-content-item">
          <p>
            Your legal action and court cases, recovered our Bad Debt. You saved
            our time and money both. We appreciate your work process. You
            involved all the senior management in our payment recovery. Thank
            you very much for recovery of our Bad Debt..
          </p>
          <div className="author">
            <span className="h4">Advance Tech Engineers</span>
            <span>Satisfied</span>
          </div>
        </div>
        <div className="testi-content-item">
          <p>
            I would like to extend a word of thanks to your company and your
            sincere efforts in the services provided. With the intercession of
            your technical skills in the recovery process, they returned us our
            material. The relationship with our clients is still intact. THANK
            YOU.
          </p>
          <div className="author">
            <span className="h4"> Canon Pvt Ltd</span>
            <span>Very Satisfied</span>
          </div>
        </div>
        <div className="testi-content-item">
          <p>
            On behalf of our company, I would like to extend a word of thanks to
            Mr. Paras Kumar C/o Corporate Law Firm & Consultant for his services
            rendered to us pertaining to loan outstanding dues (bad debts) of
            our distributors / customers. Through his expertise in this field he
            was able to successfully collect the outstanding amount.
          </p>
          <div className="author">
            <span className="h4">Gyan Book Pvt Ltd</span>
            <span>Very Satisfied</span>
          </div>
        </div>
        <div className="testi-content-item">
          <p>
            We appreciate you for your efforts in Recovery and Collection
            Services provided to our Company in recovering our long outstanding
            payments of Rs. 1,40,773/-. The Facility Management services
            provided at pan India to this company Without any legal action and
            court case, you recovered our Bad Debt.Thank you very much.
          </p>
          <div className="author">
            <span className="h4">Fuli Life</span>
            <span>Very Satisfied</span>
          </div>
        </div>
        <div className="testi-content-item">
          <p>
            It was great working with IDCI . We had a very professional
            environment and I appreciate Mr. Paaras for giving us extra time for
            development & testing. I am looking forward to work with IDCI again.
          </p>
          <div className="author">
            <span className="h4">Classic Media</span>
            <span>Satisfied</span>
          </div>
        </div>
        <div className="testi-content-item">
          <p>
            I would like to extend a word thanks to Mr. Paras Kumar, Clo.
            Corporate Law Firm & Consultant for his services rendered to us
            pertaining to export outstanding dues of our buyer. he was able to
            successfully collect the outstanding amount from the buyer in
            Taiwan. We wish him great success and may give more opportunities.
          </p>
          <div className="author">
            <span className="h4">Egis Pvt Ltd</span>
            <span>Satisfied</span>
          </div>
        </div>
      </Slider>
    </Fragment>
  );
};
export { TestimonialsSlider2 };

const TestimonialImageSlider1 = () => {
  const thumbs = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    speed: 400,
    arrows: false,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  const slider = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    speed: 900,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1900,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Fragment className="swiperimage-hero">
      <Slider {...slider} className="swiperimage-hero">
        {/* Add more image elements as needed */}

        <div className="col align-items-center">
          <a className="partner-item wow fadeInUp delay-0-3s">
            <img src="assets/CompanyLogo/1ab.png" alt="Partner" className="partner-item-image"/>
          </a>
        </div>
        <div className="col align-items-center">
          <a className="partner-item wow fadeInUp delay-0-5s">
            <img src="assets/CompanyLogo/gyan.png" alt="Partner" className="partner-item-image"/>
          </a>
        </div>
        <div className="col align-items-center">
          <a className="partner-item wow fadeInUp delay-0-6s">
            <img src="assets/CompanyLogo/fuji.png" alt="Partner" className="partner-item-image"/>
          </a>
        </div>
        <div className="col align-items-center">
          <a className="partner-item wow fadeInUp delay-0-7s">
            <img src="assets/ClientsLogo/EON.png" alt="Partner" className="partner-item-image"/>
          </a>
        </div>
        <div className="col align-items-center">
          <a className="partner-item wow fadeInUp delay-0-7s">
            <img
              src="assets/CompanyLogo/PLACEHOLDER_image1.jpg"
              alt="Partner" className="partner-item-image"
            />
          </a>
        </div>
        {/* <div className="col">
          <a className="partner-item wow fadeInUp delay-0-7s">
            <img src="assets/CompanyLogo/skylark.jpg" alt="Partner" className="partner-item-image"/>
          </a>
        </div> */}
        <div className="col align-items-center">
          <a className="partner-item wow fadeInUp delay-0-7s">
            <img
              src="assets/CompanyLogo/H R Exports Pvt Ltd.png"
              alt="Partner" className="partner-item-image"
            />
          </a>
        </div>
        <div className="col">
          <a className="partner-item wow fadeInUp delay-0-7s">
            <img
              src="assets/CompanyLogo/Vands Engineering Solution.jpg"
              alt="Partner" className="partner-item-image"
            />
          </a>
        </div>
        <div className="col">
          <a className="partner-item wow fadeInUp delay-0-7s">
            <img
              src="assets/CompanyLogo/Super Touch Paints Ltd.png"
              alt="Partner" className="partner-item-image"
            />
          </a>
        </div>
        <div className="col">
          <a className="partner-item wow fadeInUp delay-0-7s">
            <img
              src="assets/CompanyLogo/Arihant Oil & Chemicals.jpg"
              alt="Partner" className="partner-item-image"
            />
          </a>
        </div>
        {/* <div className="col">
          <a className="partner-item wow fadeInUp delay-0-7s">
            <img src="assets/CompanyLogo/Brinks Surgical.png" alt="Partner"  className="partner-item-image"/>
          </a>
        </div> */}
        <div className="col">
          <a className="partner-item wow fadeInUp delay-0-7s">
            <img
              src="assets/CompanyLogo/Competent Pneumatic Pvt Ltd.png"
              alt="Partner" className="partner-item-image"
            />
          </a>
        </div>
        <div className="col">
          <a className="partner-item wow fadeInUp delay-0-7s">
            <img src="assets/CompanyLogo/Aditya Overseas.gif" alt="Partner" className="partner-item-image"/>
          </a>
        </div>
        <div className="col">
          <a className="partner-item wow fadeInUp delay-0-7s">
            <img src="assets/CompanyLogo/nath3.jpg" alt="Partner" className="partner-item-image"/>
          </a>
        </div>
      </Slider>
    </Fragment>
  );
};
export { TestimonialImageSlider1 };
