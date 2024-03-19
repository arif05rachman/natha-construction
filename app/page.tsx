import Review from "@/components/Review";
import React from "react";

const Home = () => {
  return (
    <>
      <section id="featured">
        {/* <!-- slideshow start here --> */}

        <div className="camera_wrap" id="camera-slide">
          {/* <!-- slide 1 here --> */}
          <div data-src="img/slides/camera/slide1/img1.jpg">
            <div className="camera_caption fadeFromLeft">
              <div className="container">
                <div className="row">
                  <div className="span6">
                    <h2 className="animated fadeInDown">
                      <strong>
                        Great template for{" "}
                        <span className="colored">multi usage</span>
                      </strong>
                    </h2>
                    <p className="animated fadeInUp">
                      {" "}
                      Vim porro dicam reprehendunt te, populo quodsi dissentiet
                      cum ad. Ne natum deseruisse vis. Iisque deseruisse
                      sententiae mel ne, dolores appetere vim ut. Sea no tamquam
                      reprimique.
                    </p>
                    <a
                      href="#"
                      className="btn btn-success btn-large animated fadeInUp"
                    >
                      <i className="icon-link"></i> Read more
                    </a>
                    <a
                      href="#"
                      className="btn btn-theme btn-large animated fadeInUp"
                    >
                      <i className="icon-download"></i> Download
                    </a>
                  </div>
                  <div className="span6">
                    <img
                      src="img/slides/camera/slide1/screen.png"
                      alt=""
                      className="animated bounceInDown delay1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- slide 2 here --> */}
          <div data-src="img/slides/camera/slide2/img1.jpg">
            <div className="camera_caption fadeFromLeft">
              <div className="container">
                <div className="row">
                  <div className="span6">
                    <img src="img/slides/camera/slide2/iMac.png" alt="" />
                  </div>
                  <div className="span6">
                    <h2 className="animated fadeInDown">
                      <strong>
                        Put your <span className="colored">Opt in form</span>
                      </strong>
                    </h2>
                    <p className="animated fadeInUp">
                      {" "}
                      Vim porro dicam reprehendunt te, populo quodsi dissentiet
                      cum ad. Ne natum deseruisse vis. Iisque deseruisse
                      sententiae mel ne, dolores appetere vim ut. Sea no tamquam
                      reprimique.
                    </p>
                    <form>
                      <div className="input-append">
                        <input className="span3 input-large" type="text" />
                        <button
                          className="btn btn-theme btn-large"
                          type="submit"
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- slide 3 here --> */}
          <div data-src="img/slides/camera/slide2/img1.jpg">
            <div className="camera_caption fadeFromLeft">
              <div className="container">
                <div className="row">
                  <div className="span12 aligncenter">
                    <h2 className="animated fadeInDown">
                      <strong>
                        <span className="colored">Responsive</span> and{" "}
                        <span className="colored">cross broswer</span>{" "}
                        compatibility
                      </strong>
                    </h2>
                    <p className="animated fadeInUp">
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada
                    </p>
                    <img
                      src="img/slides/camera/slide3/browsers.png"
                      alt=""
                      className="animated bounceInDown delay1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- slideshow end here --> */}
      </section>

      <section id="content">
        <div className="container">
          <div className="row">
            <div className="span12">
              <div className="row">
                <div className="span4">
                  <div className="box flyLeft">
                    <div className="icon">
                      <i className="ico icon-circled icon-bgdark icon-star active icon-3x"></i>
                    </div>
                    <div className="text">
                      <h4>
                        High <strong>Quality</strong>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, has ei ipsum scaevola
                        deseruisse am sea facilisis.
                      </p>
                      <a href="#">Learn More</a>
                    </div>
                  </div>
                </div>

                <div className="span4">
                  <div className="box flyIn">
                    <div className="icon">
                      <i className="ico icon-circled icon-bgdark icon-dropbox active icon-3x"></i>
                    </div>
                    <div className="text">
                      <h4>
                        Rich of <strong>Features</strong>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, has ei ipsum scaevola
                        deseruisse am sea facilisis.
                      </p>
                      <a href="#">Learn More</a>
                    </div>
                  </div>
                </div>
                <div className="span4">
                  <div className="box flyRight">
                    <div className="icon">
                      <i className="ico icon-circled icon-bgdark icon-laptop active icon-3x"></i>
                    </div>
                    <div className="text">
                      <h4>
                        Modern <strong>Design</strong>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, has ei ipsum scaevola
                        deseruisse am sea facilisis.
                      </p>
                      <a href="#">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="span12">
              <div className="solidline"></div>
            </div>
          </div>

          <div className="row">
            <div className="span12">
              <div className="row">
                <div className="span12">
                  <div className="aligncenter">
                    <h3>
                      Our <strong>Pricing</strong>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, labores dolorum scriptorem eum
                      an, te quodsi sanctus neglegentur.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="span3">
                  <div className="pricing-box-wrap animated-fast flyIn">
                    <div className="pricing-heading">
                      <h3>
                        Very <strong>Basic</strong>
                      </h3>
                    </div>
                    <div className="pricing-terms">
                      <h6>&#36;15.00 / Month</h6>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <i className="icon-ok"></i> 100 applications
                        </li>
                        <li>
                          <i className="icon-ok"></i> 24x7 support available
                        </li>
                        <li>
                          <i className="icon-ok"></i> No hidden fees
                        </li>
                        <li>
                          <i className="icon-ok"></i> Free 30-days trial
                        </li>
                        <li>
                          <i className="icon-ok"></i> Stop anytime easily
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-action">
                      <a href="#" className="btn btn-medium btn-theme">
                        <i className="icon-chevron-down"></i> Sign Up
                      </a>
                    </div>
                  </div>
                </div>

                <div className="span3">
                  <div className="pricing-box-wrap animated-fast flyIn">
                    <div className="pricing-heading">
                      <h3>
                        Simple <strong>Choice</strong>
                      </h3>
                    </div>
                    <div className="pricing-terms">
                      <h6>&#36;20.00 / Month</h6>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <i className="icon-ok"></i> 100 applications
                        </li>
                        <li>
                          <i className="icon-ok"></i> 24x7 support available
                        </li>
                        <li>
                          <i className="icon-ok"></i> No hidden fees
                        </li>
                        <li>
                          <i className="icon-ok"></i> Free 30-days trial
                        </li>
                        <li>
                          <i className="icon-ok"></i> Stop anytime easily
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-action">
                      <a href="#" className="btn btn-medium btn-theme">
                        <i className="icon-chevron-down"></i> Sign Up
                      </a>
                    </div>
                  </div>
                </div>

                <div className="span3">
                  <div className="pricing-box-wrap special animated-slow flyIn">
                    <div className="pricing-heading">
                      <h3>
                        Special <strong>Choice</strong>
                      </h3>
                    </div>
                    <div className="pricing-terms">
                      <h6>&#36;15.00 / Month</h6>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <i className="icon-ok"></i> 100 applications
                        </li>
                        <li>
                          <i className="icon-ok"></i> 24x7 support available
                        </li>
                        <li>
                          <i className="icon-ok"></i> No hidden fees
                        </li>
                        <li>
                          <i className="icon-ok"></i> Free 30-days trial
                        </li>
                        <li>
                          <i className="icon-ok"></i> Stop anytime easily
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-action">
                      <a href="#" className="btn btn-medium btn-theme">
                        <i className="icon-chevron-down"></i> Sign Up
                      </a>
                    </div>
                  </div>
                </div>

                <div className="span3">
                  <div className="pricing-box-wrap animated flyIn">
                    <div className="pricing-heading">
                      <h3>
                        Just <strong>Happy</strong>
                      </h3>
                    </div>
                    <div className="pricing-terms">
                      <h6>&#36;15.00 / Month</h6>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <i className="icon-ok"></i> 100 applications
                        </li>
                        <li>
                          <i className="icon-ok"></i> 24x7 support available
                        </li>
                        <li>
                          <i className="icon-ok"></i> No hidden fees
                        </li>
                        <li>
                          <i className="icon-ok"></i> Free 30-days trial
                        </li>
                        <li>
                          <i className="icon-ok"></i> Stop anytime easily
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-action">
                      <a href="#" className="btn btn-medium btn-theme">
                        <i className="icon-chevron-down"></i> Sign Up
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Review />
        </div>
      </section>

      <section id="works">
        <div className="container">
          <div className="row">
            <div className="span12">
              <h4 className="title">
                Recent <strong>Works</strong>
              </h4>
              <div className="row">
                <div className="grid cs-style-4">
                  <div className="span3">
                    <div className="item">
                      <figure>
                        <div>
                          <img src="img/dummies/works/1.jpg" alt="" />
                        </div>
                        <figcaption>
                          <div>
                            <span>
                              <a
                                href="img/dummies/works/big.png"
                                data-pretty="prettyPhoto[gallery1]"
                                title="Portfolio caption here"
                              >
                                <i className="icon-plus icon-circled icon-bglight icon-2x"></i>
                              </a>
                            </span>
                            <span>
                              <a href="#">
                                <i className="icon-file icon-circled icon-bglight icon-2x"></i>
                              </a>
                            </span>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  <div className="span3">
                    <div className="item">
                      <figure>
                        <div>
                          <img src="img/dummies/works/2.jpg" alt="" />
                        </div>
                        <figcaption>
                          <div>
                            <span>
                              <a
                                href="img/dummies/works/big.png"
                                data-pretty="prettyPhoto[gallery1]"
                                title="Portfolio caption here"
                              >
                                <i className="icon-plus icon-circled icon-bglight icon-2x"></i>
                              </a>
                            </span>
                            <span>
                              <a href="#">
                                <i className="icon-file icon-circled icon-bglight icon-2x"></i>
                              </a>
                            </span>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  <div className="span3">
                    <div className="item">
                      <figure>
                        <div>
                          <img src="img/dummies/works/3.jpg" alt="" />
                        </div>
                        <figcaption>
                          <div>
                            <span>
                              <a
                                href="img/dummies/works/big.png"
                                data-pretty="prettyPhoto[gallery1]"
                                title="Portfolio caption here"
                              >
                                <i className="icon-plus icon-circled icon-bglight icon-2x"></i>
                              </a>
                            </span>
                            <span>
                              <a href="#">
                                <i className="icon-file icon-circled icon-bglight icon-2x"></i>
                              </a>
                            </span>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  <div className="span3">
                    <div className="item">
                      <figure>
                        <div>
                          <img src="img/dummies/works/4.jpg" alt="" />
                        </div>
                        <figcaption>
                          <div>
                            <span>
                              <a
                                href="img/dummies/works/big.png"
                                data-pretty="prettyPhoto[gallery1]"
                                title="Portfolio caption here"
                              >
                                <i className="icon-plus icon-circled icon-bglight icon-2x"></i>
                              </a>
                            </span>
                            <span>
                              <a href="#">
                                <i className="icon-file icon-circled icon-bglight icon-2x"></i>
                              </a>
                            </span>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
