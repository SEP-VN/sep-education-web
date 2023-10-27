import * as React from 'react';

const Contact = () => {
  return (
    <main>
        <div className="container-fluid px-1 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-10 col-11 text-center">
                <h3 className="fw-bold mb-3">Liên hệ với chúng tôi</h3>
                <div className="card">
                    
                    <form className="form-card" onsubmit="event.preventDefault()">
                        <div className="row justify-content-between text-left mb-2">
                            <div className="form-group col-sm-6 flex-column d-flex mb-2" > <label className="form-control-label px-3">Email liên hệ<span className="text-danger"> *</span></label> <input type="text" id="email" name="email" placeholder="" onblur="validate(3)"/> </div>
                            <div className="form-group col-sm-6 flex-column d-flex mb-2"> <label className="form-control-label px-3">Số điện thoại liên hệ<span className="text-danger"> *</span></label> <input type="text" id="mob" name="mob" placeholder="" onblur="validate(4)"/> </div>
                        </div>
                        <div className="form-floating mb-4">
                        <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">Câu hỏi của bạn<nav></nav></label> </div>
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
                            <div className="form-group col-sm-2"> <button type="submit" className="btn-block    btn-primary">Gửi</button> </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
      </main>

  );
}

export default Contact;
