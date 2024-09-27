import React from 'react';
import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';
import '../../assets/css/accesibility.css';
import '../../assets/css/global-header.css';
import '../../assets/css/facilities.css';
import '../../assets/css/rooms-and-suites.css';
import '../../assets/css/index.css';
import '../../assets/css/global-footer.css';
import '../../assets/css/contact-page.css';
import image1 from '../../assets/img/coffee.svg';
import image2 from '../../assets/img/database.svg';
import image3 from '../../assets/img/wifi.svg';
import image from '../../assets/img/clock.svg';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import RoomCards from './RoomCards';
import ContactSection from './ContactUs';
import Footer from './Footer';
const AboutContainer = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextSection = styled.div`
  flex: 1;
`;

const AboutTitle = styled.h2`
  font-size: 2.5em;
  font-weight: bold;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 50px;
    height: 3px;
    background-color: red;
  }
`;

const AboutDescription = styled.p`
  margin-top: 20px;
  line-height: 1.6;
`;

const ReadMoreButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: grey;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  overflow: hidden;
`;

const HotelImage = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1); /* Zoom effect */
  }
`;

const HomePage = () => {
  return (
    <React.Fragment>
      <Breadcrumb />

      <div>
        {/* Loader */}
        {/* <div id="loader">
          <svg
            version="1.1"
            id="L9"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 0 0"
            xmlSpace="preserve"
          >
            <path fill="#d4af37" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div> */}

        {/* Header */}
        <header>
          <div className="header-container">
            <nav className="header-nav-bar">
              <div className="header-nav-logo">
                <a href="index.html">
                  <img
                    src="https://res.cloudinary.com/joshuafolorunsho/image/upload/v1591615159/star_hotels_logo.png"
                    alt="star hotels logo"
                  />
                </a>
              </div>
              <ul className="header-nav-lists">
                <li className="header-nav-list">
                  <a className="header-nav-link header-active" href="index.html">
                    Home
                  </a>
                </li>
                <li className="header-nav-list">
                  <a className="header-nav-link" href="rooms-and-suites.html">
                    Rooms and Suites
                  </a>
                </li>
                <li className="header-nav-list">
                  <a className="header-nav-link" href="facilities.html">
                    Facilities
                  </a>
                </li>
                <li className="header-nav-list">
                  <a className="header-nav-link" href="contact-page.html">
                    Contact Us
                  </a>
                </li>
                <li className="header-nav-list">
                  <Link
                    to="/myhotel-side/auth/signin-1"
                    className="header-nav-link"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent the default Link behavior
                      window.location.href = '/myhotel-side/auth/signin-1'; // Force a page refresh
                    }}
                  >
                    Login/Register
                  </Link>
                </li>

                <li className="header-nav-list">
                  <a className="header-btn header-btn-custom" href="https://timbu.com/search?query=hotel">
                    BOOK NOW
                  </a>
                </li>
              </ul>
              <div className="header-hamburger-icon">
                <div className="header-hamburger-line-1" />
                <div className="header-hamburger-line-2" />
                <div className="header-hamburger-line-3" />
              </div>
            </nav>
          </div>
        </header>

        {/* Jumbotron */}
        <div className="jumbotron-container">
          <div className="jumbotron-left">
            <h2 className="jumbotron-header" style={{ color: 'white' }}>
              Discover the perfect balance <br /> of hospitality, luxury and <br />
              comfort.
            </h2>
            <p>
              We are focused on providing clients with the highest level
              <br />
              of comfort and excellent affordable rates
            </p>
            <a href="https://timbu.com/search?query=hotel" className="btn btn-fill btn-large">
              Book Now
            </a>
          </div>
          <div className="jumbotron-right">
            <form className="jumbotron-form">
              <h3>Scared you can't afford it?</h3>
              <p>
                Don't worry, our hotel offers the best
                <br /> affordable rates you can ever find.
              </p>
              <input type="text" id="arrival" name="arrival_date" placeholder="Arrival Date" onFocus={(e) => (e.target.type = 'date')} />
              <input
                type="text"
                id="departure"
                name="departure_date"
                placeholder="Departure Date"
                onFocus={(e) => (e.target.type = 'date')}
              />
              <select id="children" name="children" style={{ width: '80%', padding: '13px', marginBottom: '10px' }}>
                <option value="" disabled selected>
                  Select Room Type
                </option>
                <option value="Deluxe Room">Deluxe Room</option>
                <option value="Deluxe Room">Executive Room</option>
                <option value="Deluxe Room">Suite Room</option>
                <option value="Deluxe Room">Junior Suite Room</option>
              </select>
              <input type="text" id="guests" name="guests" placeholder="Guests" />

              <button type="button" className="rates">
                CHECK RATES
              </button>
            </form>
          </div>
        </div>

        {/* Enjoy Section */}
        <div className="enjoy-container">
          <div className="enjoy-header">
            <h2 className="enjoy-heading">
              Enjoy your stay <br />
              at our hotel
            </h2>
            <hr className="horizontal" />
            <p>
              We are more than being a hotel because we are able
              <br /> to combine the quality standard of a hotel with the
              <br /> advantages of an apartment.
            </p>
          </div>
          <div className="enjoy-services">
            <div className="first-col">
              <div className="upper">
                <span>
                  <img src={image} alt="clock icon" className="enjoy__clock-icon" />
                </span>
                <h3>24 hours Room Service</h3>
                <p>You have access to 24-hour room service at our hotel.</p>
              </div>
              <div className="lower">
                <span>
                  <img src={image2} alt="fitness icon" className="enjoy__fitness-icon" />
                </span>
                <h3>Fitness and Spa</h3>
                <p>Access to fitness and Spa is part of our hotel package when you make a booking.</p>
              </div>
            </div>

            {/* Second Column */}
            <div className="sec-col">
              <div className="upper">
                <span>
                  <img src={image1} alt="coffee icon" className="enjoy__coffee-icon" />
                </span>

                <h3>Restaurant </h3>
                <p>You have access to world-class restaurants and bars at our hotel.</p>
              </div>
              <div className="lower">
                <span>
                  <img src={image3} alt="wifi icon" className="enjoy__wifi-icon" />
                </span>
                <h3>Free Wi-Fi Access</h3>
                <p>You have access to free Wi-Fi services regardless of your room.</p>
              </div>
            </div>

            {/* Third Column */}
            <div className="third-col cont">
              <img
                src="/myhotel-side/src/views/assets/img/ant-design_play-circle-filled.svg"
                alt="video play icon"
                className="enjoy__play-icon"
              />
              <img src="/myhotel-side/src/views/assets/img/video link.webp" alt="women in swimming pool" className="third-col-video" />
            </div>
          </div>
        </div>

        {/* Special Offers Section */}
      </div>

      <AboutContainer>
        <TextSection>
          <AboutTitle>ABOUT US</AboutTitle>
          <AboutDescription>
            The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again
            during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates,
            websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.
          </AboutDescription>
          <ReadMoreButton>Read More</ReadMoreButton>
        </TextSection>
        <ImageSection>
          <HotelImage src="/myhotel-side/src/views/assets/img/about.png" alt="Hotel" />
        </ImageSection>
      </AboutContainer>
      <RoomCards />
      <ContactSection />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
