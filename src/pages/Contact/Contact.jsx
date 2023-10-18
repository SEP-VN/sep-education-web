import * as React from 'react';

const Contact = () => {
  return (
    <main>
        <div class="container-fluid px-1 py-5 mx-auto">
        <div class="row d-flex justify-content-center">
            <div class="col-xl-8 col-lg-9 col-md-10 col-11 text-center">
                <h3>Liên hệ với chúng tôi</h3>
                <div class="card">
                    
                    <form class="form-card" onsubmit="event.preventDefault()">
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex mb-2" > <label class="form-control-label px-3">Email liên hệ<span class="text-danger"> *</span></label> <input type="text" id="email" name="email" placeholder="" onblur="validate(3)"/> </div>
                            <div class="form-group col-sm-6 flex-column d-flex mb-2"> <label class="form-control-label px-3">Số điện thoại liên hệ<span class="text-danger"> *</span></label> <input type="text" id="mob" name="mob" placeholder="" onblur="validate(4)"/> </div>
                        </div>
                        <div className="form-floating mb-4">
                        <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">Câu hỏi của bạn<nav></nav></label> </div>
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
                            <div class="form-group col-sm-2"> <button type="submit" class="btn-block    btn-primary">Gửi</button> </div>
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
