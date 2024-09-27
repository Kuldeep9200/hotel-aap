import React from 'react';
import styled from 'styled-components';

// Create styled components
const StyledInput = styled.input`
  border: #fff solid 1px;
  padding: 0 15px;
  margin-bottom: 25px;
  width: 100%;
  height: 58px;
  background: #fff;
  color: #000000;
  font-size: 18px;
  font-weight: normal;
  box-shadow: 2px 0px 6px rgba(255, 9, 9, 0.2);
`;

const StyledTextarea = styled.textarea`
  border: #fff solid 1px;
  padding: 0 15px;
  margin-bottom: 25px;
  width: 100%;
  height: 120px; /* You can adjust the height as needed */
  background: #fff;
  color: #000000;
  font-size: 18px;
  font-weight: normal;
  box-shadow: 2px 0px 6px rgba(255, 9, 9, 0.2);
`;

const StyledButton = styled.button`
  padding: 10px 20px; /* Adjust padding as needed */
  background-color: #007bff; /* Change background color as needed */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3; /* Darker shade on hover */
  }
`;
const ReadMoreButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;s
  cursor: pointer;
  border-radius:10px;
  margin-bottom: 10px;
  &:hover {
    background-color: grey;
  }
`;

const Title = styled.h2`
  font-size: 2.5em;
  font-weight: bold;
  position: relative;
 
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    width: 50px;
    height: 3px;
    background-color: red;
  }
`;

const SubText = styled.p`
  margin-top: 10px;
  font-size: 1.1em;
  color: #666;
`;
const ContactSection = () => {
  return (
    <React.Fragment>
        
      <Title style={{textAlign:"center"}}>Contact Us</Title>
      <SubText style={{textAlign:"center"}}>Lorem Ipsum available, but the majority have suffered</SubText>
      <div className="row" style={{ width: '95%', margin: 'auto' }}>
        <div className="col-md-6">
          <form id="request" className="main_form">
            <div className="row">
              <div className="col-md-12">
                <StyledInput placeholder="Name" type="text" name="Name" />
              </div>
              <div className="col-md-12">
                <StyledInput placeholder="Email" type="email" name="Email" />
              </div>
              <div className="col-md-12">
                <StyledInput placeholder="Phone Number" type="tel" name="Phone Number" />
              </div>
              <div className="col-md-12">
                <StyledTextarea placeholder="Message" name="message" />
              </div>
              <div className="col-md-12">
                <ReadMoreButton>Send Message </ReadMoreButton>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="map_main">
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                width="600"
                height="400"
                frameBorder="0"
                style={{ border: 0, width: '100%' }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
     
    </React.Fragment>
  );
};

export default ContactSection;
