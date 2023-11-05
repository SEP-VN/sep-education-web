import * as React from 'react';
import './TourDetailStyle.css'
import ta_lai_tour_1 from "../../assets/images/tour_detail/ta_lai/1.png";
import ta_lai_tour_2 from "../../assets/images/tour_detail/ta_lai/2.png";
import ta_lai_tour_3 from "../../assets/images/tour_detail/ta_lai/3.png";
import ta_lai_tour_4 from "../../assets/images/tour_detail/ta_lai/4.png";
import ta_lai_tour_5 from "../../assets/images/tour_detail/ta_lai/5.png";
import ta_lai_tour_6 from "../../assets/images/tour_detail/ta_lai/6.png";
import { Link } from "react-router-dom";

const TourDetail = () => {
  return (
    <div className="container">
<div className="row mt-4">
  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src={ta_lai_tour_1}
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    <img
      src={ta_lai_tour_2}
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src={ta_lai_tour_3}
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    <img
      src={ta_lai_tour_4}
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src={ta_lai_tour_5}
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    <img
      src={ta_lai_tour_6}
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>
  <div className="text-center py-3">
  <Link to="/registration" type="button" className="btn" style={{ backgroundColor: "#ffb03b", color: "white", borderRadius: "5px", fontSize: "1.3rem", fontWeight: "400", padding: "15px", width: "40%" }}>
    Đăng kí ngay
  </Link>
</div>

</div>
<hr className="mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
<div className="row mt-5">
<h3 className="fw-bold mb-3">Mục tiêu của chuyến đi</h3>
  <p>
  Tuyến du lịch tình nguyện tại làng Tà Lài được S.E.P phát triển với mục tiêu hỗ trợ giáo dục, thúc đẩy mô hình du lịch cộng đồng và quảng bá các loại hình nghề truyền thống địa phương.
 
Bên cạnh việc mang đến giá trị về mặt giáo dục cho địa phương cũng như với đối tượng thụ hưởng trực tiếp là trẻ em độ tuổi từ 6-14 tuổi thì Tình nguyện viên (TNV) cũng sẽ được trải nghiệm và khám phá văn hóa, thiên nhiên, con người nơi đây. 

Với hành trình 2 ngày 1 đêm, bạn lần được đi qua các trải nghiệm thú vị từ dạy học, tương tác với bà con, trekking, thưởng thức ẩm thực và không gian văn hóa, lối sống của làng Tà Lài và tận hưởng hệ thống sinh quyển tại khu vực này.

  </p>
</div>
<hr className="mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
<div className="row mt-4">
<h3 className="fw-bold mb-3">Thông tin của chuyến đi</h3>
  <div className="row">
    <div className="col-md-6">
    <h4>Điểm nổi bật của chuyến đi</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Tổ chức các lớp học cộng đồng cho trẻ em địa phương</li>
        <li className="list-group-item">Tổ chức hoạt động ngoại khóa giúp phát triển kỹ năng</li>
        <li className="list-group-item">Khám phá văn hóa, thiên nhiên, con người tại Tà Lài: thưởng thức văn hóa cồng chiêng, học dệt thổ cẩm, trekking, thưởng thức đặc sản địa phương, tham gia lửa trại, đạp xe đạp,…</li>
      </ul>
    </div>
    <div className="col-md-6">
      <h4>Điểm nổi bật của điểm đến</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Tham quan cánh đồng rừng dầu</li>
        <li className="list-group-item">Khám phá Vườn quốc gia Nam Cát Tiên</li>
        <li className="list-group-item">Tham quan sông La Ngà hoặc Trung tâm Đức mẹ Núi Cúi</li>
        <li className="list-group-item">Khám phá đời sống người dân tại làng Tà Lài</li>
      </ul>
    </div>
  </div>
</div>
<hr className="mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
<div className="row mt-4">
<h3 className="fw-bold mb-3">Các môn giảng dạy dự kiến</h3>
  <ol className="list-group list-group-numbered">
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Ngoại ngữ</div>
      Kiến thức ngoại ngữ cho học sinh cấp 1, cấp 2
    </div>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Kiến thức xã hội</div>
      Kiến thức xã hội như văn hóa, địa lý, con người,… cho học sinh cấp 1, cấp 2
    </div>
  </li>
</ol> </div>
<hr className="mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
<div className="row mt-5">
<h3 className="fw-bold">Lịch trình</h3>
<div className="container-fluid py-9 py-lg-11 position-relative z-index-1">
    <div className="row">
            <div className="col-lg-4 py-4 mb-lg-0">
             
                <div className="nav nav-pills flex-column aos-init aos-animate" id="myTab" role="tablist" data-aos="fade-up">
                    <button className="btn-schedule-tour nav-link px-4 text-start mb-3 active" id="d1-tab" data-bs-toggle="tab" data-bs-target="#day1"
                     type="button" role="tab" aria-controls="day1" aria-selected="true">
                        <span className="d-block fs-5 fw-bold">Ngày 1</span>
                        <span className="small">T7 - 11/11/2023</span>
                    </button>
                    
                    <button className="nav-link px-4 text-start" id="d2-tab" data-bs-toggle="tab" data-bs-target="#day2" type="button" role="tab" aria-controls="day2" aria-selected="false" tabindex="-1">
                        <span className="d-block fs-5 fw-bold">Ngày 2</span>
                        <span className="small">CN - 12/11/2023</span>
                    </button>

                </div>
            </div>
            
            <div className="col-lg-8 col-xl-8">
                <div data-aos="fade-up" className="tab-content aos-init aos-animate" id="myTabContent">
                    <div className="tab-pane fade active show" id="day1" role="tabpanel" aria-labelledby="d1-tab">
                        <ul className="pt-4 list-unstyled mb-0">
                            <li className="d-flex flex-column flex-md-row py-4">
                                <span className="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">06:30</span>
                                <div className="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Khởi hành từ TPHCM</h5>
                                  
                                </div>
                            </li>
                            <li className="d-flex flex-column flex-md-row py-4">
                                <span className="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">08:30</span>
                                <div className="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Tham quan Trung tâm đức mẹ Núi Cúi. Đoàn ăn sáng và thỉnh mẹ</h5>
                                    
                                </div>
                            </li>
                            <li className="d-flex flex-column flex-md-row py-4">
                                <span className="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">09:30
                                     </span>
                                <div className="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Tiếp tục di chuyển đến Tà lài</h5>
                                
                                </div>
                            </li>
                            <li className="d-flex flex-column flex-md-row py-4">
                                <span className="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">11:00
                                     </span>
                                <div className="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Check in nhận phòng</h5>
                                  
                                </div>
                            </li>
                            <li className="d-flex flex-column flex-md-row py-4">
                                <span className="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">11:00
                                    - 11:45 </span>
                                <div className="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Họp với team để bàn về lớp buổi chiều</h5>
                                  
                                </div>
                            </li>
                            <li className="d-flex flex-column flex-md-row py-4">
                                <span className="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">12:00
                                     - 13:00 </span>
                                <div className="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Ăn trưa </h5>
                                  
                                </div>
                            </li>
                            <li className="d-flex flex-column flex-md-row py-4">
                                <span className="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">13:00
                                     - 15:00 </span>
                                <div className="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Đi bộ tham quan làng cùng HDV bản địa</h5>
                                
                                </div>
                            </li>
                            <li className="d-flex flex-column flex-md-row py-4">
                                <span className="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">15:30
                                     - 17:30 </span>
                                <div className="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Dạy học cho trẻ em</h5>
                                
                                </div>
                            </li>
                            <li className="d-flex flex-column flex-md-row py-4">
                                <span className="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">17:30 - 18:30
                                    </span>
                                <div className="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Vệ sinh cá nhân ở nhà nghỉ</h5>
                                
                                </div>
                            </li>
                            <li className="d-flex flex-column flex-md-row py-4">
                                <span className="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">18:30 - 19:30
                                    </span>
                                <div className="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Ăn tối</h5>
                                
                                </div>
                            </li>
                            <li className="d-flex flex-column flex-md-row py-4">
                                <span className="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">19:30 - 21:00
                                    </span>
                                <div className="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Giao lưu lửa trại</h5>
                                
                                </div>
                            </li>
                            <li className="d-flex flex-column flex-md-row py-4">
                                <span className="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">21:00 - 22:00
                                    </span>
                                <div className="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Dọn dẹp và tổng kết ngày 1</h5>
                                
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-pane fade" id="day2" role="tabpanel" aria-labelledby="d2-tab">
                        <ul className="pt-4 list-unstyled mb-0">
                        <li className="d-flex flex-column flex-md-row py-4">
                                <span className="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">06:00 - 06:45</span>
                                <div className="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Ăn sáng</h5>
                                  
                                </div>
                            </li>
                            <li className="d-flex flex-column flex-md-row py-4">
                                <span className="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">07:00 - 09:00</span>
                                <div className="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Học dệt bệt (xem nghệ nhân may thổ cẩm, học dệt thổ cẩm và học đan vòng tay)</h5>
                                    
                                </div>
                            </li>
                            <li className="d-flex flex-column flex-md-row py-4">
                                <span className="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">09:30 - 11:00</span>
                                <div className="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Dạy học cho trẻ em</h5>
                                    
                                </div>
                            </li>
                            <li className="d-flex flex-column flex-md-row py-4">
                                <span className="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">11:00 - 11:30</span>
                                <div className="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Dọn dẹp</h5>
                                    
                                </div>
                            </li>
                            <li className="d-flex flex-column flex-md-row py-4">
                                <span className="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">11:30
                                     - 12:30</span>
                                <div className="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Ăn trưa</h5>
                                
                                </div>
                            </li>
                            <li className="d-flex flex-column flex-md-row py-4">
                                <span className="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">12:45</span>
                                <div className="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Di chuyển đến VQG Nam Cát Tiên</h5>
                                  
                                </div>
                            </li>
                            <li className="d-flex flex-column flex-md-row py-4">
                                <span className="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">13:30
                                    - 16:30 </span>
                                <div className="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Đạp xe đạp quanh VQG Nam Cát Tiên</h5>
                                  
                                </div>
                            </li>
                            <li className="d-flex flex-column flex-md-row py-4">
                                <span className="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">17:00
                                     </span>
                                <div className="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Xuất phát về TPHCM</h5>
                                  
                                </div>
                            </li>
                            <li className="d-flex flex-column flex-md-row py-4">
                                <span className="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">18:30
                                     - 19:30 </span>
                                <div className="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Ăn tối </h5>
                                
                                </div>
                            </li>
                            <li className="d-flex flex-column flex-md-row py-4">
                                <span className="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">22:00 </span>
                                <div className="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Về đến TPHCM</h5>
                                
                                </div>
                            </li>
                            
              
                       
                        </ul>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
</div>
<hr className="mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
<div className="row mt-5">
<h3 className="fw-bold mb-3">Chi phí</h3>
  <p>
    - Chi phí tổng : <span className="fw-bold" style={{color: "#ffb03b"}}> 1.890.000/khách</span>
  </p>
  <p>
    - Chi phí bao gồm :
  </p>
    <ul className="px-5" style={{listStyleType:"disc"}}>
    <li>Training giảng dạy trước tour</li>
    <li>Hậu cần và học cụ cần thiết cho lớp học</li>
    <li>Phí ăn uống 6 buổi </li>
    <li>Phí lưu trú homestay 1 đêm </li>
    <li>Phí tham quan các điểm </li>
    <li>Phí di chuyển bằng xe 16 chỗ </li>
    <li>Nước suối, khăn </li>
    <li>Hướng dẫn viên tại điểm </li>
    <li>Bảo hiểm du lịch </li>
    </ul>
    
</div>
  

  


</div>

  );
}

export default TourDetail;
