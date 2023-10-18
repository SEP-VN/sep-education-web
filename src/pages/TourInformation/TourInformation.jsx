
import TourInformationImage from "../../assets/images/tour_information/educational-tour.jpg";

const TourInformation = () => {
  const places = [
    "Cần Thơ",
    "Vĩnh Long",
    "Tiền Giang",
    "Sóc Trăng",
    // Add more options as needed
  ];
  const dates = [
    "12/11/2023",
    "15/11/2023",
    "12/11/2023",
    "15/11/2023",
    // Add more options as needed
  ];
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
                  <h2 class="fw-bold mb-5">Thông tin chuyến đi</h2>
                  <form>
                    {/* Dropdown list */}
                    <div className="form-outline mb-4">
                      <select class="form-select" aria-label="Địa điểm">
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
                        <select class="form-select" aria-label="Thời gian">
                        <option value="" disabled selected>Thời gian</option> {/* Placeholder */}
                          {dates.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                    <div class="form-group mb-4">
                      <input type="number" class="form-control" id="numberInput" placeholder="Số lượng người tham gia" min="1" max="10"/>
                    </div>


                    {/* <!-- Submit button --> */}
                    <button type="submit" class="btn btn-primary btn-lg btn-block mb-4">
                      Cùng đi thôi !
                    </button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

  )
}

export default TourInformation;