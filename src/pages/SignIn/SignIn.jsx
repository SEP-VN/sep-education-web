import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Register } from "../../api/Authenticate";
import { useState } from 'react';

const SignIn = () => {
  const navigate = useNavigate();
  const [inputName, setInputName] = useState(null);
  const [inputPhoneNumber, setInputPhoneNumber] = useState(null);
  const [inputEmail, setInputEmail] = useState(null);

  const handleNameChange = (event) => {
    setInputName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setInputPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setInputEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
     // Make the Axios call and store the customer ID
      Register(inputName, inputPhoneNumber, inputEmail)
    
    // Redirect to the "/tour-information" page
    navigate('/tour-information');
  };

  return (
    <section class="">
      {/* <!-- Jumbotron --> */}
      <div class="py-5 text-center text-lg-start" style={{ backgroundColor: 'hsl(0, 0%, 96%)',  padding: 0 }}>
        <div class="container" style={{ width: '70%' }}>
          <div class="row gx-lg-5 align-items-center" >
            <div class="col-lg-6 mb-5 mb-lg-0">
              <h1 class="my-4 fw-bold ls-tight"> 
              Đăng kí trở thành 1 tình nguyện viên vì giáo dục<hr/>
              <span style={{ color: '#ffb03b' }}>Share Education Project</span>
              </h1>
              
              <p style={{ color: 'hsl(217, 10%, 50.8%)' }}>
              S.E.P (Share Education Project) - mô hình tình nguyện tích hợp du lịch với mong muốn mang tri thức về các vùng nông thôn. Trong dự án này, các tình nguyện viên trẻ trong độ tuổi từ 18-35 đến từ thành thị sẽ tham gia để chia sẻ kiến thức và trải nghiệm du lịch bản địa với các bạn học sinh tại vùng. Các tình nguyện viên sẽ được đào tạo trước khi tham gia dạy học, và giáo trình dạy học sẽ được biên soạn bởi các chuyên gia, phù hợp với từng độ tuổi và trình độ của học sinh ở vùng nông thôn.
              </p>
            </div>

            <div class="col-lg-6 mb-5 mb-lg-0">
              <div class="card" style={{ padding: 0 }}>
                <div class="card-body py-5 px-md-5">
                  <form onSubmit={handleSubmit}>
                    {/* <!-- Name input --> */}
                    <div className="form-outline mb-4">
                    <input
                      type="text" // Change the input type to text
                      id="formName"
                      className="form-control"
                      placeholder="Họ và tên"
                      value={inputName} // Bind value to the state
                      onChange={handleNameChange} // Handle input changes
                    />
                  </div>

                    {/* <!-- Phone number input --> */}
                    <div className="form-outline mb-4">
                    <input
                      type="text" // Change the input type to text
                      id="formPhoneNumber"
                      className="form-control"
                      placeholder="Số điện thoại"
                      value={inputPhoneNumber} // Bind value to the state
                      onChange={handlePhoneNumberChange} // Handle input changes
                    />
                  </div>

                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                    <input
                      type="email" // You can keep this as email
                      id="formEmail"
                      className="form-control"
                      placeholder="Email"
                      value={inputEmail} // Bind value to the state
                      onChange={handleEmailChange} // Handle input changes
                    />
                  </div>

                    {/* <!-- Checkbox --> */}
                    <div class="form-check d-flex justify-content-center mb-4">
                      <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                      <label class="form-check-label" for="form2Example33">
                        Theo dõi tất cả thông tin của chúng tôi
                      </label>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button type="submit" class="col-12 btn btn-primary mb-4">
                       Đăng kí
                    </button>

                    {/* <!-- Register buttons --> */}
                    <div class="text-center">
                      <p>Hoặc đăng kí với:</p>
                      <button type="button" class="btn btn-link btn-floating mx-1">
                      <FontAwesomeIcon icon={faGoogle}/>

                      </button>

                      <button type="button" class="btn btn-link btn-floating mx-1">
                        <FontAwesomeIcon icon={faFacebook} />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignIn;