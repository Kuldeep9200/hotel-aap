import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaEnvelopeOpen, FaTelegramPlane } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaGooglePlusG } from 'react-icons/fa';

const FooterSection = styled.footer`
  background: #151414;
  position: relative;
`;

const FooterCta = styled.div`
  border-bottom: 1px solid #373636;
`;

const CtaTextHeading = styled.h4`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2px;
`;

const CtaTextSpan = styled.span`
  color: #757575;
  font-size: 18px;
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 2;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const FooterLogo = styled.div`
  margin-bottom: 30px;

  img {
    max-width: 200px;
  }
`;

const FooterText = styled.p`
  margin-bottom: 14px;
  font-size: 18px;
  color: #7e7e7e;
  line-height: 28px;
`;

const FooterSocialIcon = styled.div`
  span {
    color: #fff;
    display: block;
    font-size: 20px;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 20px;
  }

  a {
    color: #fff;
    font-size: 16px;
    margin-right: 15px;

    i {
      height: 40px;
      width: 40px;
      text-align: center;
      line-height: 38px;
      border-radius: 50%;
    }
  }
`;
const SingleCta = styled.div`
  display: flex; /* Use flexbox for alignment */
  align-items: baseline; /* Align items vertically */
  margin-bottom: 30px; /* Adjust spacing as needed */
`;

const CtaText = styled.div`
  margin-left: 15px; /* Space between icon and text */
  display: flex; /* Use flexbox for vertical alignment */
  flex-direction: column; /* Stack heading and span vertically */
`;

const FooterWidgetHeading = styled.h3`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -15px;
    height: 2px;
    width: 50px;
    background: #ff5e14;
  }
`;

const SubscribeForm = styled.form`
  position: relative;
  overflow: hidden;

  input {
    width: 100%;
    padding: 14px 28px;
    background: #2e2e2e;
    border: 1px solid #2e2e2e;
    color: #fff;
  }

  button {
    position: absolute;
    right: 0;
    background: white;
    padding: 13px 20px;
    border: 1px solid white;
    top: 0;

    i {
      color: #fff;
      font-size: 22px;
      transform: rotate(-6deg);
    }
  }
`;

const CopyrightArea = styled.div`
  background: #202020;
  padding: 25px 0;
`;

const FooterMenu = styled.ul`
  display: flex;
  justify-content: flex-end;

  li {
    margin-left: 20px;

    a {
      font-size: 14px;
      color: #878787;

      &:hover {
        color: #ff5e14;
      }
    }
  }
`;
const SocialIcon = styled.a`
  color: #fff; /* Default color */
  font-size: 16px;
  margin-right: 15px;
  display: inline-flex; /* To enable flex properties */
  justify-content: center; /* Center the icon */
  align-items: center; /* Center the icon */
  width: 40px; /* Set a fixed width */
  height: 40px; /* Set a fixed height */
  border-radius: 50%; /* Make it circular */
  transition: transform 0.3s; /* Add a transition for the zoom effect */

  &:hover {
    transform: scale(1.1); /* Zoom effect on hover */
  }

  i {
    height: 40px;
    width: 40px;
    text-align: center;
    line-height: 38px;
  }
`;

// Example icons with different backgrounds
const FacebookBg = styled(FaFacebookF)`
  background: #3b5998; /* Facebook color */
  border-radius: 50%; /* Ensure it is circular */
  padding: 8px; /* Add padding for spacing */
`;

const TwitterBg = styled(FaTwitter)`
  background: #55acee; /* Twitter color */
  border-radius: 50%; /* Ensure it is circular */
  padding: 8px; /* Add padding for spacing */
`;

const GoogleBg = styled(FaGooglePlusG)`
  background: #dd4b39; /* Google color */
  border-radius: 50%; /* Ensure it is circular */
  padding: 8px; /* Add padding for spacing */
`;

const Footer = () => {
  return (
    <FooterSection>
      <div className="container">
        <FooterCta>
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <SingleCta>
                <FaMapMarkerAlt style={{ color: 'white', fontSize: '19px' }} />
                <CtaText>
                  <CtaTextHeading>Find us</CtaTextHeading>
                  <CtaTextSpan>1010 Avenue, sw 54321, Chandigarh</CtaTextSpan>
                </CtaText>
              </SingleCta>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <SingleCta>
                <FaPhone style={{ color: 'white', fontSize: '19px' }} />
                <CtaText>
                  <CtaTextHeading>Call us</CtaTextHeading>
                  <CtaTextSpan>9876543210</CtaTextSpan>
                </CtaText>
              </SingleCta>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <SingleCta>
                <FaEnvelopeOpen style={{ color: 'white', fontSize: '19px' }} />
                <CtaText>
                  <CtaTextHeading>Mail us</CtaTextHeading>
                  <CtaTextSpan>mail@info.com</CtaTextSpan>
                </CtaText>
              </SingleCta>
            </div>
          </div>
        </FooterCta>

        <FooterContent>
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <FooterLogo>
                <a href="index.html">
                  <img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo" />
                </a>
              </FooterLogo>
              <FooterText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </FooterText>
              <FooterSocialIcon>
                <span>Follow us</span>
                <SocialIcon href="#">
                  <FacebookBg style={{ fontSize: '2.3rem' }} />
                </SocialIcon>
                <SocialIcon href="#">
                  <TwitterBg style={{ fontSize: '2.3rem' }} />
                </SocialIcon>
                <SocialIcon href="#">
                  <GoogleBg style={{ fontSize: '2.3rem' }} />
                </SocialIcon>
              </FooterSocialIcon>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <FooterWidgetHeading>Useful Links</FooterWidgetHeading>
              <ul>
                {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <FooterWidgetHeading>Subscribe</FooterWidgetHeading>
              <FooterText>Don’t miss to subscribe to our new feeds, kindly fill the form below.</FooterText>
              <SubscribeForm action="#">
                <input type="text" placeholder="Email Address" />
                <button>
                  <FaTelegramPlane />
                </button>
              </SubscribeForm>
            </div>
          </div>
        </FooterContent>
      </div>
    </FooterSection>
  );
};

export default Footer;
