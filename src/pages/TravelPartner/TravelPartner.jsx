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
        <div className="container-fluid px-1 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-10 col-11 text-center">
                <h3 className="fw-bold mb-3">Đăng kí trở thành đối tác du lịch của S.E.P</h3>
                <div className="card">
                    <h5 className="text-center mb-4">Thông tin của công ty du lịch</h5>
                    <form className="form-card" onsubmit="event.preventDefault()">
                      <div className="row justify-content-between text-left">
                            <div className="form-group col-12 flex-column d-flex mb-2"> <label className="form-control-label px-3">Tên công ty<span className="text-danger"> *</span></label> <input type="text" id="ans" name="ans" placeholder="" onblur="validate(6)"/> </div>
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex mb-2" > <label className="form-control-label px-3">Email liên hệ<span className="text-danger"> *</span></label> <input type="text" id="email" name="email" placeholder="" onblur="validate(3)"/> </div>
                            <div className="form-group col-sm-6 flex-column d-flex mb-2"> <label className="form-control-label px-3">Số điện thoại liên hệ<span className="text-danger"> *</span></label> <input type="text" id="mob" name="mob" placeholder="" onblur="validate(4)"/> </div>
                        </div>

                        <div className="row justify-content-between text-left mb-3">
                        <div className="form-group col-sm-6 flex-column d-flex">
                          <label className="form-control-label px-3">Tỉnh / thành phố hoạt động<span className="text-danger"> *</span></label>
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
                        <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">Mong muốn của bạn khi hợp tác với chúng tôi ?</label> </div>
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
                        <div className="row justify-content-end">
                            <div className="form-group col-sm-2"> <button type="submit" className="btn-block btn-primary">Đăng kí</button> </div>
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