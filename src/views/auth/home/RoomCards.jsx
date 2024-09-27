import React from 'react';
import styled from 'styled-components';

// Styled Components
const RoomSection = styled.div`
  padding: 40px;
  text-align: center;
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

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 30%;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardImage = styled.div`
  overflow: hidden;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1); /* Image zoom effect */
    }
  }
`;

const CardBody = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.5em;
  color: #333;
`;

const CardDescription = styled.p`
  margin-top: 10px;
  color: #777;
  font-size: 0.9em;
`;

// Component
const RoomCards = () => {
  const rooms = [
    { title: 'Bed Room', img: '/myhotel-side/src/views/assets/img/room1.jpg', description: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there.' },
    { title: 'Bed Room', img: '/myhotel-side/src/views/assets/img/room2.jpg', description: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there.' },
    { title: 'Bed Room', img: '/myhotel-side/src/views/assets/img/room3.jpg', description: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there.' },
    { title: 'Bed Room', img: '/myhotel-side/src/views/assets/img/room4.jpg', description: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there.' },
    { title: 'Bed Room', img: '/myhotel-side/src/views/assets/img/room5.jpg', description: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there.' },
    { title: 'Bed Room', img: '/myhotel-side/src/views/assets/img/room6.jpg', description: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there.' }
  ];

  return (
    <RoomSection>
      <Title>OUR ROOM</Title>
      <SubText>Lorem Ipsum available, but the majority have suffered</SubText>
      <CardsContainer>
        {rooms.map((room, index) => (
          <Card key={index}>
            <CardImage>
              <img src={room.img} alt={room.title} />
            </CardImage>
            <CardBody>
              <CardTitle>{room.title}</CardTitle>
              <CardDescription>{room.description}</CardDescription>
            </CardBody>
          </Card>
        ))}
      </CardsContainer>
    </RoomSection>
  );
};

export default RoomCards;
