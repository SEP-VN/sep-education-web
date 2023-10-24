
import TourInformationImage from "../../assets/images/tour_information/educational-tour.jpg";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TourRegister } from "../../api/TourRegistration";
import ModalRegistrationSuccessful from "../../components/ModalRegistrationSuccessful";

const TourInformation = () => {
  const navigate = useNavigate();
  const [selectedPlace, setSelectedPlace] = useState(''); // State for the "Địa điểm" dropdown
  const [selectedDate, setSelectedDate] = useState(''); // State for the "Thời gian" dropdown
  const [selectedSubject, setSelectedSubject] = useState(''); // State for the "Môn giảng dạy" dropdown
  const [numberOfParticipants, setNumberOfParticipants] = useState(''); // State for the number input field

  const [showModal, setShowModal] = useState(false);

  const places = [
    "Tà Lài",
    "TP.HCM"
    // Add more options as needed
  ];
  const dates = [
    "22/11/2023",
    "5/12/2023",
    "14/12/2023"
    // Add more options as needed
  ];

  const subjects = [
    "Toán trí tuệ",
    "Tiếng Anh",
    "Kỹ năng mềm"
    // Add more options as needed
  ];
  const handleSubmit = (event) => {
    event.preventDefault();
     // Make the Axios call and store the customer ID
      TourRegister(selectedPlace, selectedDate, selectedSubject, numberOfParticipants)
      setShowModal(!showModal)
    
    // Redirect to the "/tour-information" page
    // navigate('/');
  };
  return (
   
        <section class="text-center">
          {/* <!-- Background image --> */}
          <div className="p-5 bg-image" style={{ backgroundImage: `url(${TourInformationImage})`, height: '500px', 
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>

          <div className="card mx-auto shadow-5-strong" style={{
              maxWidth: '80%', // Adjust the maximum width as needed
              marginTop: '-180px',
              background: 'hsla(0, 0%, 100%, 0.8)',
              backdropFilter: 'blur(2px)',
              padding: '20px' // Add padding for spacing inside the div
            }}>
            <div class="card-body py-5 px-md-5">

              <div class="row d-flex justify-content-center">
                <div class="col-lg-8">
                  <h2 class="fw-bold mb-5">Đăng kí chuyến đi</h2>
                  <form onSubmit={handleSubmit}>
                    {/* Dropdown list */}
                    <div className="form-outline mb-4">
                    <select
                      className="form-select"
                      aria-label="Địa điểm"
                      value={selectedPlace}
                      onChange={(e) => setSelectedPlace(e.target.value)}
                    >
                      <option value="" disabled selected>Địa điểm</option> {/* Placeholder */}
                        {places.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Dropdown list */}
                    <div className="form-outline mb-4">
                    <select
                        className="form-select"
                        aria-label="Thời gian"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                      >
                        <option value="" disabled selected>Thời gian</option> {/* Placeholder */}
                          {dates.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                    {/* Dropdown list */}
                    <div className="form-outline mb-4">
                    <select
                      className="form-select"
                      aria-label="Môn giảng dạy"
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                    >
                        <option value="" disabled selected>Môn giảng dạy</option> {/* Placeholder */}
                          {subjects.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                    <div class="form-group mb-4">
                    <input
                      type="number"
                      className="form-control"
                      id="numberInput"
                      placeholder="Số lượng người tham gia (bao gồm cả bạn)"
                      min="1"
                      max="10"
                      value={numberOfParticipants}
                      onChange={(e) => setNumberOfParticipants(e.target.value)}
                    />
                    </div>

                    {/* <!-- Submit button --> */}
                    <button type="submit" class="btn btn-primary btn-lg btn-block mb-4">
                      Cùng đi thôi !
                    </button>
                    
                  </form>
                  <ModalRegistrationSuccessful showModal={showModal} setShowModal={setShowModal}/>
                </div>
              </div>
            </div>
          </div>
        </section>

  )
}

export default TourInformation;