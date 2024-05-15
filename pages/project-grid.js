import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";

const ProjectGrid = () => {
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
                From corporate companies to investors to common man, we have served everyone. We have created a legacy by serving over 100 clients and we continue to grow.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="https://idci.in/Company%20Logo/Kwality%20Chemicals%20Industries%20Pvt%20Ltd.png"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="https://idci.in/Company%20Logo/Kwality%20Chemicals%20Industries%20Pvt%20Ltd.png"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="#top">
                    Kwality Chemicals Industries Pvt Ltd
                    </Link>
                  </h4>
                  <Link legacyBehavior href="#top">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="https://idci.in/Clients%20Logo/Zeneth.png"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="https://idci.in/Clients%20Logo/Zeneth.png"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="#top">
                    Zeneth Kitchen Equipment Pvt Ltd
                    </Link>
                  </h4>
                  <Link legacyBehavior href="#top">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="https://idci.in/Clients%20Logo/kitchen.png"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="https://idci.in/Clients%20Logo/kitchen.png"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="#top">
                    Kitchen Designer
                    </Link>
                  </h4>
                  <Link legacyBehavior href="#top">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="https://idci.in/Clients%20Logo/Carpet.png"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="https://idci.in/Clients%20Logo/Carpet.png"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="#top">
                    Carpet Couture By Rashi
                    </Link>
                  </h4>
                  <Link legacyBehavior href="#top">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="https://idci.in/Clients%20Logo/Madura.png"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="https://idci.in/Clients%20Logo/Madura.png"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="#top">
                    Madura India Ortho
                    </Link>
                  </h4>
                  <Link legacyBehavior href="#top">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="https://idci.in/Clients%20Logo/Sneh.png"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="https://idci.in/Clients%20Logo/Sneh.png"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="#top">
                    Sneh Biotech
                    </Link>
                  </h4>
                  <Link legacyBehavior href="#top">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="https://idci.in/Company%20Logo/Classic1.png"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="https://idci.in/Company%20Logo/Classic1.png"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="#top">
                    Classic Media
                    </Link>
                  </h4>
                  <Link legacyBehavior href="#top">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="https://idci.in/Clients%20Logo/Mammen.png"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="https://idci.in/Clients%20Logo/Mammen.png"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="#top">
                    Mammen Export
                    </Link>
                  </h4>
                  <Link legacyBehavior href="#top">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="https://idci.in/Clients%20Logo/Rama.png"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="https://idci.in/Clients%20Logo/Rama.png"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="#top">
                    Rama Doors Pvt Ltd
                    </Link>
                  </h4>
                  <Link legacyBehavior href="#top">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
          <div className="project-more-btn text-center">
            <Link legacyBehavior href="/project-grid">
              <a className="theme-btn style-two wow fadeInUp delay-0-2s">
                View More Gallery <i className="fas fa-long-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ProjectGrid;
