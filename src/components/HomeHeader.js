import React from "react";
import Footer from "../pages/Footer";
//import '../components/HomeHeader.css'

const HomeHeader = () => {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        />
      </head>

      <div>
        <div
          className="fixed navbar"
          style={{
            backgroundColor: "#000080",
            fontFamily: "Adamina",
            color: "white",
            fontSize: "22px",
          }}
        >
          <div className="navbar-start flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <a href="#logo" className="flex items-center">
                <img
                  src="https://th.bing.com/th/id/OIP.rfrrCinbvDKXF4eLBqXuCAHaH2?rs=1&pid=ImgDetMain"
                  alt="Logo"
                  className="h-12 w-12 rounded-full"
                />
                <span className="text-white"></span>
              </a>
              <a href="#about-us" className="nav-link">
                <span className="font-normal text-white">About Us</span>
              </a>
              <a href="#pricing" className="nav-link">
                <span className="font-normal text-white">Pricing</span>
              </a>
              <a href="#customer" className="nav-link">
                <span className="font-normal text-white">Customers</span>
              </a>
              <a href="/contactus" className="nav-link">
                <span className="font-normal text-white">Contact Us</span>
              </a>
            </div>
          </div>
          <div className="navbar-end">
            <a href="/login" className="btn text-white ">
              Log In
            </a>{" "}
            <a href="/register" className="btn text-white text-center">
              Get Now!
            </a>
          </div>
        </div>
        

        <br></br>
        <div class="landing-content text-center text-justify-center container font-Adamina">
          <h1 class="display-4">
            Store Stock or Inventory Management System designed for Global
            Businesses
          </h1>
          <br></br>
          <h4>
            Product management, Manage orders. Track inventory. Handle
            suppliers.{" "}
          </h4>
          <h3>
            || One inventory management software to run all your inventory
            operations. ||
          </h3>
          {/* <!-- Add additional content or calls to action as needed --> */}
          <br /><br></br>
          <button
            className="btn round-btn"
            style={{
              width: "250px",
              height: "50px",
              fontSize: "18px",
              backgroundColor: "#000080",
              color: "white",
              borderRadius: "15px",
              padding: "1px",
            }}
          ><a href="/register" className="text-white nav-link  ">
            SIGN UP - IT'S FREE
            </a>
          </button>
        </div>
        {/* @* About-Us Section *@ */}
        <div className="px-10">
          <div class="about-us " id="about">
            <h2>About Us</h2>
            <hr
              style={{
                width: "100%",
                borderStyle: "solid",
                borderWidth: "2px",
              }}
            />
            <p style={{ textAlign: "justify" }}>
              Welcome to SSIMS, your trusted solution for efficient and
              streamlined inventory management. At SSIMS, we understand the
              challenges businesses face in managing their stock effectively,
              and our mission is to provide a user-friendly platform that
              simplifies this process.
              <br />
              With years of experience in the industry, our team is dedicated to
              developing innovative solutions that empower businesses of all
              sizes to optimize their inventory management practices. Whether
              you're a small retail store, a growing e-commerce platform, or a
              large-scale enterprise, our web application is designed to meet
              your unique needs and exceed your expectations.
              <br />
              At SSIMS, we pride ourselves on:
              <br />
              1. Simplicity: We believe that effective inventory management
              shouldn't be complicated. Our intuitive interface and
              user-friendly features make it easy for you to track stock levels,
              manage orders, and make informed decisions.
              <br />
              2. Efficiency: Time is valuable, and we're committed to helping
              you save it. By automating manual tasks and providing real-time
              insights, our web application streamlines your inventory
              management processes, allowing you to focus on growing your
              business.
              <br />
              3. Reliability: Trust is essential in business, and we prioritize
              reliability in everything we do. Our robust infrastructure ensures
              the security and integrity of your data, giving you peace of mind
              knowing that your inventory is in safe hands.
              <br />
              4. Support: Your success is our success, and we're here to support
              you every step of the way. From onboarding assistance to ongoing
              support, our dedicated team is ready to help you maximize the
              value of our web application and achieve your business goals.
              <br />
              Join the countless businesses that have already benefited from
              SSIMS and take control of your inventory management today.
            </p>
          </div>
          <br />
          {/* @* Pricing Section *@ */}
          <div class="pricing" id="pricing">
            <h2>Pricing</h2>
            <hr
              style={{
                width: "100%",
                borderStyle: "solid",
                borderWidth: "2px",
              }}
            />
            <div class="container px-4">
              <div class="row gx-5">
                <div class="col">
                  <div class="p-3" style={{ textAlign: "justify" }}>
                    <h4>Basic Plan</h4>
                    Ideal for small businesses and startups
                    <br />
                    Features:
                    <br />
                    <ul>
                      <li>Inventory tracking</li>
                      <li>Stock level alerts</li>
                      <li>Purchase order management</li>
                      <li>Price: $X/month</li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div class="p-3">
                    <h4>Standard Plan</h4>
                    Perfect for growing businesses with moderate inventory needs
                    <br />
                    Features:
                    <br />
                    <ul>
                      <li>All features of the Basic plan, plus:</li>
                      <li>Sales order management</li>
                      <li>Supplier management</li>
                      <li>Reporting and analytics</li>
                      <li>Price: $Y/month</li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div class="p-3">
                    <h4>Professional Plan</h4>
                    Designed for larger businesses with advanced inventory
                    management needs
                    <br />
                    Features:
                    <br />
                    <ul>
                      <li>All features of the Standard plan, plus:</li>
                      <li>Barcode scanning</li>
                      <li>Integration with accounting systems</li>
                      <li>Customizable alerts and notifications</li>
                      <li>Price: $Z/month</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* @* Customer's Section *@ */}
          <div class="customer" id="customer">
            <h2>Customers</h2>
            <hr
              style={{
                width: "100%",
                borderStyle: "solid",
                borderWidth: "2px",
              }}
            />
            <p>
              At SSIMS, we take pride in serving a diverse range of businesses
              across industries. Our inventory management solution has helped
              countless customers optimize their operations, streamline their
              processes, and achieve their business goals. Here's what some of
              our satisfied customers have to say:
            </p>
            <div id="carouselExampleCaptions" class="carousel slide">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="carousel-content">
                    <h4>Testimonial 1</h4>
                    <p>
                      "Using SSIMS has revolutionized how we manage our
                      inventory. The intuitive interface and powerful features
                      have saved us time and money, allowing us to focus on
                      growing our business." - John Doe, CEO of XYZ Retail
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="carousel-content">
                    <h4>Testimonial 2</h4>
                    <p>
                      "We've tried other inventory management systems in the
                      past, but none have compared to SSIMS. The ease of use and
                      comprehensive functionality have made a significant impact
                      on our efficiency and productivity." - Jane Smith,
                      Operations Manager at ABC Manufacturing
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="carousel-content">
                    <h4>Testimonial 3</h4>
                    <p>
                      "As a small business owner, keeping track of inventory was
                      always a challenge. SSIMS has simplified the process and
                      given me peace of mind knowing that my stock levels are
                      always up-to-date. I highly recommend it to fellow
                      entrepreneurs." - Sam Brown, Owner of Brown's Boutique
                    </p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <br />
            <h5>Join Our Growing List of Satisfied Customers</h5>
            <p>
              Ready to experience the benefits of SSIMS for yourself? Sign up
              for a free trial today and join the thousands of businesses that
              trust us for their inventory management needs.
            </p>
          </div>
        </div>
      </div>
      <footer>
        <div  className="py-2 text-center  fixed-bottom-0 w-full"
        style={{ backgroundColor: "#000080" }}>
        <p className="text-white text-sm">
          &copy; 2024 Inventory System. All rights reserved.
        </p>
        </div>
      </footer>
    </>
  );
};

export default HomeHeader;
