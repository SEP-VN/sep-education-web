import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ModalRegistrationSuccessful({showModal, setShowModal}) {
 

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };



  return (
    <>
      {showModal && (
        	<div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body text-center">
                <div id="checkIcon">
                <i class="fa fa-check-circle" style={{ color: '#ffb03b' }}></i>
                </div>
                <div className="mt-4 py-5 px-4">
                  <h3 className="px-4 pb-0 mb-1 mb-3 " style={{ color: "#ffa012" }}>Đăng kí thành công !</h3>
                  <h4 className="h5">Bạn đã đăng kí chuyến đi thành công, hãy check mail của bạn thường xuyên để nhận được thông tin mới nhất từ chúng mình nhé 😊!</h4>
                </div>
                <div className="py-1">
                  
                  <Link type="button" class="btn btn-primary mb-4" to="/log-in">
                       Quay về trang chủ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalRegistrationSuccessful;
