import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";

const Blog = () => {
  return (
    <Layout>
      <PageBanner pageName={"Blog "} />
      <section className="blog-standard-area py-130 rpy-100">
        <div className="container">
          <div className="row gap-60">
            <div className="col-lg-8">
              <div className="blog-standard-inner">
                <div className="blog-standard-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/blog/blog-standard1.jpg"
                      alt="Blog"
                    />
                  </div>
                  <div className="content">
                    <div className="blog-meta-two mb-5">
                      <Link legacyBehavior href="/blog">
                        <a className="tag">Recovery</a>
                      </Link>
                    </div>
                    <h4>
                      <Link legacyBehavior href="blog">
                      Legal Action to Recover Debt
                      </Link>
                    </h4>
                    <p>
                    The problem these smaller businesses and private individuals face revolves around the costs involved in taking debt legal advice against the defaulters
                    </p>
                    <div className="blog-meta-two">
                      <a className="author" href="#">
                      Rabi Ahmad
                      </a>
                      <a className="date" href="#">
                        <i className="far fa-calendar-alt" /> May 26, 2024
                      </a>
                    </div>
                    <hr />
                    <Link legacyBehavior href="/blog">
                      <a className="read-more">
                        Read More <i className="far fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-standard-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/blog/blog-standard2.jpg"
                      alt="Blog"
                    />
                  </div>
                  <div className="content">
                    <div className="blog-meta-two mb-5">
                      <Link legacyBehavior href="/blog">
                        <a className="tag">Strategies</a>
                      </Link>
                    </div>
                    <h4>
                      <Link legacyBehavior href="blog">
                      Debt Collection Strategies to Reduce Your Bad Debts
                      </Link>
                    </h4>
                    <p>
                    From understanding your debtor's position to using technology to your advantage, these strategies cover the essentials of efficient debt recovery...
                    </p>
                    <div className="blog-meta-two">
                      <a className="author" href="#">
                      Ameera Bajrai
                      </a>
                      <a className="date" href="#">
                        <i className="far fa-calendar-alt" /> March 08, 2024
                      </a>
                    </div>
                    <hr />
                    <Link legacyBehavior href="/blog">
                      <a className="read-more">
                        Read More <i className="far fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-standard-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/blog/blog-standard3.jpg"
                      alt="Blog"
                    />
                  </div>
                  <div className="content">
                    <div className="blog-meta-two mb-5">
                      <Link legacyBehavior href="blog">
                        <a className="tag">Overseas</a>
                      </Link>
                    </div>
                    <h4>
                      <Link legacyBehavior href="blog">
                      Managing Overseas Aged Debt
                      </Link>
                    </h4>
                    <p>
                    As a business grows, it is inevitable that it will begin partnering with organisations outside its home country.  Collecting debts from clients...
                    </p>
                    <div className="blog-meta-two">
                      <a className="author" href="#">
                      Giles Goodman
                      </a>
                      <a className="date" href="#">
                        <i className="far fa-calendar-alt" /> Jan 26, 2024
                      </a>
                    </div>
                    <hr />
                    <Link legacyBehavior href="/blog">
                      <a className="read-more">
                        Read More <i className="far fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
               
              </div>
            </div>
            <div className="col-lg-4 col-md-7 col-sm-9">
              <div className="main-sidebar rmt-75">
                <div className="widget widget-search wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Search</h4>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    action="#"
                    className="default-search-form"
                  >
                    <input type="text" placeholder="Find Keywords" required />
                    <button
                      type="submit"
                      className="searchbutton far fa-search"
                    />
                  </form>
                </div>
                <div className="widget widget-category wow fadeInUp delay-0-4s">
                  <h4 className="widget-title">Category</h4>
                  <ul>
                    <li>
                      <Link legacyBehavior href="blog">
                      Debt Recovery Strategies
                      </Link>{" "}
                      <span>(25)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="blog">
                      Legal Insights
                      </Link>{" "}
                      <span>(09)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="blog">
                      Case Studies
                      </Link>{" "}
                      <span>(18)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="blog">
                      Industry News
                      </Link>{" "}
                      <span>(05)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="blog">
                      Financial Management Tips
                      </Link>{" "}
                      <span>(03)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="blog">
                      Client Stories
                      </Link>{" "}
                      <span>(04)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="blog">
                      Financial Education
                      </Link>{" "}
                      <span>(05)</span>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-recent-news wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Recent News</h4>
                  <ul>
                    <li>
                      <div className="image">
                        <img src="assets/images/widgets/news1.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link legacyBehavior href="blog">
                          Navigating the Complexities of International Debt Collection
                          </Link>
                        </h5>
                        <span className="date">
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 May 2024</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img src="assets/images/widgets/news2.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link legacyBehavior href="blog">
                          The Role of Technology in Modern Debt Recovery Strategies
                          </Link>
                        </h5>
                        <span className="date">
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 March 2024</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img src="assets/images/widgets/news3.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link legacyBehavior href="blog">
                          Overcoming Challenges in Cross-Border Debt Recovery
                          </Link>
                        </h5>
                        <span className="date">
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 Feb 2024</a>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
               
                {/* <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Popular Tags</h4>
                  <div className="tag-coulds">
                    <Link legacyBehavior href="blog">
                      Design
                    </Link>
                    <Link legacyBehavior href="blog">
                      Landing
                    </Link>
                    <Link legacyBehavior href="blog">
                      software
                    </Link>
                    <Link legacyBehavior href="blog">
                      web
                    </Link>
                    <Link legacyBehavior href="blog">
                      education
                    </Link>
                    <Link legacyBehavior href="blog">
                      email marketing
                    </Link>
                    <Link legacyBehavior href="blog">
                      SEO
                    </Link>
                    <Link legacyBehavior href="blog">
                      development
                    </Link>
                    <Link legacyBehavior href="blog">
                      wordpress
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Blog;
