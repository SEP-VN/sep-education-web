import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Add any form processing logic here.
    
    // Redirect to the "/tour-information" page
    navigate('/tour-information');
  };

  return (
    <section class="">
      {/* <!-- Jumbotron --> */}
      <div class="py-5 text-center text-lg-start" style={{ backgroundColor: 'hsl(0, 0%, 96%)',  padding: 0 }}>
        <div class="container">
          <div class="row gx-lg-5 align-items-center">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <h1 class="my-5 fw-bold ls-tight"> 
              Đăng kí trở thành 1 tình nguyện viên vì giáo dục<hr/>
              <span style={{ color: '#ffb03b' }}>S.E.P</span>
              </h1>
              
              <p style={{ color: 'hsl(217, 10%, 50.8%)' }}>
              S.E.P (Share Edu Project) - mô hình tình nguyện tích hợp du lịch với mong muốn mang tri thức về các vùng nông thôn. Trong dự án này, các tình nguyện viên trẻ trong độ tuổi từ 16-25 đến từ thành thị sẽ tham gia để chia sẻ kiến thức và trải nghiệm du lịch bản địa với các bạn học sinh tại vùng. Các tình nguyện viên sẽ được đào tạo trước khi tham gia dạy học, và giáo trình dạy học sẽ được biên soạn bởi các chuyên gia, phù hợp với từng độ tuổi và trình độ của học sinh ở vùng nông thôn.
              </p>
            </div>

            <div class="col-lg-6 mb-5 mb-lg-0">
              <div class="card" style={{ padding: 0 }}>
                <div class="card-body py-5 px-md-5">
                  <form onSubmit={handleSubmit}>
                    {/* <!-- Name input --> */}
                    <div class="form-outline mb-4">
                      <input type="email" id="form3Example3" class="form-control" placeholder="Họ và tên"/>
                    </div>

                    {/* <!-- Phone number input --> */}
                    <div class="form-outline mb-4">
                      <input type="email" id="form3Example3" class="form-control" placeholder="Số điện thoại" />                     
                    </div>

                    {/* <!-- Email input --> */}
                    <div class="form-outline mb-4">
                      <input type="password" id="form3Example4" class="form-control" placeholder="Email"/>
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