import * as React from 'react';
import './TravelPartnerStyle.css'



const TravelPartner = () => {
  // List of cities
  const cities = [
    "Hà Nội",
    "Thành Phố Hồ Chí Minh",
    "Đà nẵng",
    "Hải Phòng",
    "Cần Thơ"
  ];
  return (
      <main>
        <div class="container-fluid px-1 py-5 mx-auto">
        <div class="row d-flex justify-content-center">
            <div class="col-xl-8 col-lg-9 col-md-10 col-11 text-center">
                <h3>Đăng kí trở thành đối tác du lịch của SEP</h3>
                <div class="card">
                    <h5 class="text-center mb-4">Thông tin của công ty du lịch</h5>
                    <form class="form-card" onsubmit="event.preventDefault()">
                      <div class="row justify-content-between text-left">
                            <div class="form-group col-12 flex-column d-flex mb-2"> <label class="form-control-label px-3">Tên công ty<span class="text-danger"> *</span></label> <input type="text" id="ans" name="ans" placeholder="" onblur="validate(6)"/> </div>
                        </div>
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex mb-2" > <label class="form-control-label px-3">Email liên hệ<span class="text-danger"> *</span></label> <input type="text" id="email" name="email" placeholder="" onblur="validate(3)"/> </div>
                            <div class="form-group col-sm-6 flex-column d-flex mb-2"> <label class="form-control-label px-3">Số điện thoại liên hệ<span class="text-danger"> *</span></label> <input type="text" id="mob" name="mob" placeholder="" onblur="validate(4)"/> </div>
                        </div>

                        <div class="row justify-content-between text-left mb-3">
                        <div class="form-group col-sm-6 flex-column d-flex">
                          <label class="form-control-label px-3">Tỉnh / thành phố hoạt động<span class="text-danger"> *</span></label>
                          <select id="city" name="city">
                            <option value="" disabled selected>Chọn 1 thành phố</option>
                            {cities.map((option, index) => (
                              <option key={index} value={option}>
                                {option}
                              </option>
                        ))}
                          </select>
                        </div>
                      </div>
                        <div className="form-floating mb-4">
                        <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">Mong muốn của bạn khi hợp tác với chúng tôi ?</label> </div>
                        <textarea
                          className="form-control"
                          id="message"
                          placeholder="Message"
                          style={{ height: '10rem' }}
                          data-sb-validations="required"
                        ></textarea>
                    
                    <div className="invalid-feedback" data-sb-feedback="message:required">
                      Message is required.
                    </div>
                  </div>
                        <div class="row justify-content-end">
                            <div class="form-group col-sm-3"> <button type="submit" class="btn-block btn-primary">Cùng trở thành đối tác</button> </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
      </main>
  );
}

export default TravelPartner;