import React, { useState } from 'react';
import { Card, Table, Col, Button, Modal } from 'react-bootstrap'; // Import necessary components
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'; // Icons for view, edit, and delete
import Imge1 from '../assets/img/room1.jpg';
import Imge2 from '../assets/img/room1.jpg';
import Imge3 from '../assets/img/room1.jpg';
const RoomCategory = () => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [showFacilityModal, setShowFacilityModal] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedFacility, setSelectedFacility] = useState('');

  // Function to show image modal with selected images
  const handleShowImageModal = (images) => {
    setSelectedImages(images);
    setShowImageModal(true);
  };

  // Function to show facility modal with facility details
  const handleShowFacilityModal = (facility) => {
    setSelectedFacility(facility);
    setShowFacilityModal(true);
  };

  const handleCloseImageModal = () => setShowImageModal(false);
  const handleCloseFacilityModal = () => setShowFacilityModal(false);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + selectedImages.length) % selectedImages.length
    );
  };

  const rooms = [
    {
      no: 101,
      type: 'Single',
      cost: 100,
      facility: 'Wi-Fi, Air Conditioning',
      images: [Imge1, Imge2], // Array of images for slideshow
      capacity: 1,
      area: 200,
      status: 'Active',
    },
    {
      no: 102,
      type: 'Double',
      cost: 150,
      facility: 'Wi-Fi, TV, Refrigerator',
      images: [Imge3, Imge2], // Array of images for slideshow
      capacity: 2,
      area: 300,
      status: 'Active',
    },
    // Add more room data as needed
  ];

  return (
    <div>
      <Col sm={12}>
        <Card>
          <Card.Header>
            <Card.Title as="h5">Room Categories</Card.Title>
            <Button variant="primary" style={{ float: 'right' }}>
              Create Category
            </Button>
          </Card.Header>
          <Card.Body className="p-0">
            <div className="table-card" style={{ height: '362px' }}>
              <PerfectScrollbar>
                <Table responsive>
                  <thead>
                    <tr>
                      <th className="text-center">Room No</th>
                      <th className="text-center">Room Type</th>
                      <th className="text-center">Cost</th>
                      <th className="text-center">Facility</th>
                      <th className="text-center">Image</th>
                      <th className="text-center">Pax(Max)</th>
                      <th className="text-center">Area (Sq ft.)</th>
                      <th className="text-center">Active Status</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rooms.map((room, index) => (
                      <tr key={index}>
                        <td className="text-center">{room.no}</td>
                        <td className="text-center">{room.type}</td>
                        <td className="text-center">${room.cost}</td>
                        <td className="text-center">
                         
                          <Button
                            variant="link"
                            onClick={() => handleShowFacilityModal(room.facility)} // Show facility details in modal
                          >
                            <FaEye />
                          </Button>
                        </td>
                        <td className="text-center">
                          
                          <Button
                            variant="link"
                            onClick={() => handleShowImageModal(room.images)} // Show all images in modal
                          >
                            <FaEye />
                          </Button>
                        </td>
                        <td className="text-center">{room.capacity}</td>
                        <td className="text-center">{room.area}</td>
                        <td className="text-center">{room.status}</td>
                        <td className="text-center">
                          <Button variant="link">
                            <FaEdit style={{ color: 'blue' }} />
                          </Button>
                          <Button variant="link">
                            <FaTrash style={{ color: 'red' }} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </PerfectScrollbar>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Modal for Facility Details */}
      <Modal show={showFacilityModal} onHide={handleCloseFacilityModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Facility Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedFacility}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseFacilityModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Image Slideshow */}
      <Modal show={showImageModal} onHide={handleCloseImageModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Facility Images</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedImages.length > 0 && (
            <div>
              <img
                src={selectedImages[currentImageIndex]}
                alt="Facility"
                style={{ width: '100%', height: 'auto' }}
              />
              <div className="d-flex justify-content-between mt-2">
                <Button variant="secondary" onClick={handlePrev} disabled={selectedImages.length <= 1}>
                  Previous
                </Button>
                <Button variant="secondary" onClick={handleNext} disabled={selectedImages.length <= 1}>
                  Next
                </Button>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseImageModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RoomCategory;
