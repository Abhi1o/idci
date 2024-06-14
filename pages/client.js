import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";
import { useState } from "react";
import Marquee from "react-fast-Marquee";

const ProjectGrid = () => {
  const [showMoreGallery, setShowMoreGallery] = useState(false);

  // Define your company images here
  const companyImages = [
    "assets/ClientsLogo/egis.png",
    "assets/ClientsLogo/EON.png",
    "assets/ClientsLogo/Aura Herbal Pvt Ltd.png",
    "assets/ClientsLogo/Dreams.png",
    "assets/ClientsLogo/CIS.png",
    "assets/ClientsLogo/RD Dutta & Co. Pvt Ltd.jpeg",
    "assets/ClientsLogo/HTHC.png",
    "assets/ClientsLogo//Teslek.png",
    "assets/ClientsLogo/A9HR.png",
    "assets/ClientsLogo/Hillman.png",
    "assets/ClientsLogo/Raj.png",
    "assets/ClientsLogo/Krishna.png",
    "assets/ClientsLogo/Frontline.png",
    "assets/ClientsLogo/Rama.png",
    "assets/ClientsLogo/Parnami.png",
    "assets/ClientsLogo/param_international.jpeg",
    "assets/ClientsLogo/HK.png",
    "assets/ClientsLogo/MSG.png",
    "assets/ClientsLogo/Servicemax.png",
    "assets/ClientsLogo/Madura.png",
    "assets/ClientsLogo/asr_logo.png",
    "assets/ClientsLogo/MillionMinds.png",
    "assets/ClientsLogo/kitchen.png",
    "assets/ClientsLogo/sai_international.jpeg",
    "assets/ClientsLogo/Shaffer Energy Pvt Ltd.png",
    "assets/ClientsLogo/Surgical.png",
    "assets/ClientsLogo/Trackon.png",
    "assets/ClientsLogo/Soft Logic Controld.jpeg",
    "assets/ClientsLogo/Zeneth.png",
    "assets/ClientsLogo/Sneh.png",
    "assets/ClientsLogo/nath.png",
    "assets/ClientsLogo/Carpet.png",
    "assets/ClientsLogo/Shri Solar energy Products Pvt Ltd.png",
    // Add more image URLs as needed
  ];

  const toggleShowMoreGallery = () => {
    setShowMoreGallery(!showMoreGallery);
  };
  return (
    <Layout>
      <PageBanner pageName={"Clients"} />
      <section className="project-grid-area rel z-2 py-130 rpy-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                <h2>Our Clients</h2>
                <p>
                  From corporate companies to investors to common man, we have
                  served everyone. We have created a legacy by serving over 100
                  clients and we continue to grow.
                </p>
              </div>
            </div>
          </div>
          {/* Partners Area start */}
          <div className="partners-area-three text-center rel z-1 pb-110 rpb-80">
            <div className="container">
              <hr className="mb-90" />
              <Marquee direction="left" gradientColor="white" gradient="true">
                {companyImages.map((image, index) => (
                  <img
                    src={image}
                    alt="company image"
                    className="marque-images"
                  />
                ))}
              </Marquee>
              <p className="mb-120" />
              <Marquee direction="right" gradientColor="white" gradient="true" >
                {companyImages.slice(6).map((image, index) => (
                  <img
                    src={image}
                    alt="company image"
                    className="marque-images"
                  />
                ))}
              </Marquee>
              <p className="mb-120" />
              <Marquee direction="left" gradientColor="white" gradient="true" >
                {companyImages.slice(12).map((image, index) => (
                  <img
                    src={image}
                    alt="company image"
                    className="marque-images"
                  />
                ))}
              </Marquee>
              <p className="mb-120" />
              <Marquee direction="right" gradientColor="white" gradient="true" >
                {(companyImages.slice(17)).map((image, index) => (
                  <img
                    src={image}
                    alt="company image"
                    className="marque-images"
                  />
                ))}
              </Marquee>

              {/* <div className="row row-cols-xl-4 row-cols-lg-4 row-cols-md-2 row-cols-2 justify-content-center">
                {companyImages.slice(0, showMoreGallery ? companyImages.length : 5).map((image, index) => (
                  <div className="col" key={index}>
                    <div className="legacyBehavior" >
                      <a className={`partner-item-two wow fadeInUp delay-0-${index + 3}s pb-90`}>
                        <img src={image} alt={`Partner ${index + 1}`} />
                      </a>
                    </div>
                  </div>
                ))}
              </div> */}
              <hr className="mt-45" />
            </div>
          </div>
          {/* <div className="project-more-btn text-center">
            <button
              className="theme-btn style-two wow fadeInUp delay-0-2s"
              onClick={toggleShowMoreGallery}
            >
              {showMoreGallery ? "View Less Gallery" : "View More Gallery"}{" "}
              <i className={`fas ${showMoreGallery ? "fa-long-arrow-left" : "fa-long-arrow-right"}`} />
            </button>
          </div> */}
        </div>
      </section>
    </Layout>
  );
};
export default ProjectGrid;
