import * as React from 'react';
import './TourDetailStyle.css'

const TourDetail = () => {
  return (
    <div class="container">
<div class="row mt-4">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="https://oms.hotdeal.vn/images/editors/sources/000333275524/333275-333275-body%20(10).jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWpQYycaUu1vqgIF-z8KnGguDE9BwGcPdAqg&usqp=CAU"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT__693esE4EzXKv-UKS357E0Q2ztHysPjFug&usqp=CAU"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img
      src="https://oms.hotdeal.vn/images/editors/sources/000333275524/333275-333275-body%20(10).jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://oms.hotdeal.vn/images/editors/sources/000333275524/333275-333275-body%20(10).jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWpQYycaUu1vqgIF-z8KnGguDE9BwGcPdAqg&usqp=CAU"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>
<hr class="mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
<div className="row mt-5">
<h2 className="fw-bold mb-3">Mục tiêu của dự án</h2>
  <p>
  Du lịch tình nguyện tại làng Tà Lài nhằm hỗ trợ phát triển giáo dục, thúc đẩy phát triển mô hình du lịch cộng đồng tại nơi đây và quảng bá các nghề truyền thống địa phương. Với mục đích phát triển sinh kế cho địa phương đi liền quảng bá du lịch nơi đây. Dự án mang lại cho địa phương cách khai thác các nguồn lực về du lịch còn chưa được khai thác. 

Thông qua các hoạt động hỗ trợ thiết thực như đào tạo kỹ năng việc làm, dạy học phi chính quy, quảng bá, truyền thông về hình ảnh du lịch cộng đồng tại địa phương, tổ chức các chương trình du lịch trải nghiệm, S.E.P mong muốn mang lại những cơ hội thiết thực nhất, phát triển kinh tế bền vững nhất cho bà con nơi đây. 
  </p>
</div>
<hr class="mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
<div className="row mt-4">
<h2 className="fw-bold mb-3">Thông tin của chuyến đi</h2>
  <div className="row">
    <div className="col-md-6">
      <h4>Điểm nổi bật của chuyến đi</h4>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Tổ chức các lớp học cộng đồng cho trẻ em địa phương</li>
        <li class="list-group-item">Tìm hiểu các nét văn hóa đặc sắc tại Tà Lài</li>
        <li class="list-group-item">Phát triển mô hình và du lịch cộng đồng tại làng Tà Lài</li>
      </ul>
    </div>
    <div className="col-md-6">
      <h4>Điểm nổi bật của điểm đến</h4>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Tham quan các điểm đến đặc biệt: đi bộ lên Đồi Xanh, tham quan vườn ca cao, vườn cà phê,…</li>
        <li class="list-group-item">Chèo thuyền kayak trên sông</li>
        <li class="list-group-item">Trekking tại Nam Cát Tiên</li>
      </ul>
    </div>
  </div>
</div>
<hr class="mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
<div className="row mt-4">
<h2 className="fw-bold mb-3">Các môn giảng dạy dự kiến</h2>
  <ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Tiếng Anh</div>
      Tiếng Anh cơ bản cho lớp 1,2,3
    </div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Hướng nghiệp</div>
      Hướng nghiệp cho học sinh lớp 12
    </div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Giáo dục giới tính</div>
      Kiến thức giáo dục giới tính cho học sinh lớp 9
    </div>
  </li>
</ol> </div>
<hr class="mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
<div className="row mt-5">
<h2 className="fw-bold">Lịch trình</h2>
<div class="container-fluid py-9 py-lg-11 position-relative z-index-1">
    <div class="row">
            <div class="col-lg-4 py-4 mb-lg-0">
             
                <div class="nav nav-pills flex-column aos-init aos-animate" id="myTab" role="tablist" data-aos="fade-up">
                    <button class="btn-schedule-tour nav-link px-4 text-start mb-3 active" id="d1-tab" data-bs-toggle="tab" data-bs-target="#day1"
                     type="button" role="tab" aria-controls="day1" aria-selected="true">
                        <span class="d-block fs-5 fw-bold">Ngày 1</span>
                        <span class="small">T2 - 23/10/2023</span>
                    </button>
                    
                    <button class="nav-link px-4 text-start" id="d2-tab" data-bs-toggle="tab" data-bs-target="#day2" type="button" role="tab" aria-controls="day2" aria-selected="false" tabindex="-1">
                        <span class="d-block fs-5 fw-bold">Ngày 2</span>
                        <span class="small">T3 - 24/10/2023</span>
                    </button>

                    <button class="nav-link px-4 text-start" id="d3-tab" data-bs-toggle="tab" data-bs-target="#day3" type="button" role="tab" aria-controls="day3" aria-selected="false" tabindex="-1">
                        <span class="d-block fs-5 fw-bold">Ngày 3</span>
                        <span class="small">T4 - 25/10/2023</span>
                    </button>
                </div>
            </div>
            
            <div class="col-lg-8 col-xl-8">
                <div data-aos="fade-up" class="tab-content aos-init aos-animate" id="myTabContent">
                    <div class="tab-pane fade active show" id="day1" role="tabpanel" aria-labelledby="d1-tab">
                        <ul class="pt-4 list-unstyled mb-0">
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">06:30</span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Khởi hành, ăn sáng trên xe</h5>
                                  
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">09:30</span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Tới Tà Lài, nhận phòng</h5>
                                    
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">10:00
                                     - 10:45</span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Họp BTC và TNV về lịch trình giảng dạy</h5>
                                
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">10:45
                                     - 11:30</span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Tham quan nhà truyền thống trong làng / Tham quan làng (đi bộ vào làng, tham quan đập tràn, khu vực giảng dạy)</h5>
                                  
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">11:45
                                    - 12:45 </span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Ăn trưa</h5>
                                  
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">14:00
                                     - 16:00 </span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Đi tham quan cánh đồng vườn dầu (di chuyển 1h30’, tham quan 30’)</h5>
                                  
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">17:00
                                     - 17:45 </span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Ăn chiều</h5>
                                
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">17:45
                                     - 20:30 </span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Chuẩn bị lớp học và dạy học</h5>
                                
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">20:30
                                    </span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Dọn dẹp, họp tổng kết ngày 1</h5>
                                
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-pane fade" id="day2" role="tabpanel" aria-labelledby="d2-tab">
                        <ul class="pt-4 list-unstyled mb-0">
                        <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">06:00</span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Ăn sáng</h5>
                                  
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">07:30 - 09:30</span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Dạy học</h5>
                                    
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">09:30 - 10:00</span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Dọn dẹp</h5>
                                    
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">10:00 - 11:00</span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Họp bàn cho buổi event mai</h5>
                                    
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">11:00
                                     - 12:00</span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Di chuyển qua NCT</h5>
                                
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">12:00
                                     - 12:45</span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Picnic ở NCT </h5>
                                  
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">13:30
                                    - 16:00 </span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Trekking tại NCT</h5>
                                  
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">17:00
                                     - 17:30 </span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Di chuyển qua nhà Văn hóa để đốt lửa trại</h5>
                                  
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">18:00
                                     - 21:00 </span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Lửa trại guitar và deep talk</h5>
                                
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">21:00
                                     - 22:00 </span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Dọn dẹp</h5>
                                
                                </div>
                            </li>
                            
              
                       
                        </ul>
                    </div>
                    <div class="tab-pane fade" id="day3" role="tabpanel" aria-labelledby="d3-tab">
                        <ul class="pt-4 list-unstyled mb-0">
                        <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">06:00 - 07:00</span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Ăn sáng</h5>
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">07:00 - 07:30</span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Đến nơi tổ chức event và chuẩn bị</h5>
                                    
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">07:45 - 10:00</span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Event</h5>
                                    
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">10:00 - 10:30</span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Dọn dẹp</h5>
                                    
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">10:30
                                     - 12:30</span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Học dệt bên nhà sàn </h5>
                                
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">12:30
                                     - 13:30</span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Ăn trưa và khởi hành về SG </h5>
                                  
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">14:40
                                    - 15:30 </span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Tham quan di tích lịch sử Tượng chiến thắng La Ngà và ngắm nhìn bè cá La Ngà </h5>
                                  
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">16:15
                                     - 17:00 </span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Tham quan địa danh Đức Mẹ Núi Cúi</h5>
                                  
                                </div>
                            </li>
                            <li class="d-flex flex-column flex-md-row py-4">
                                <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">17:00
                                     - 19:00 </span>
                                <div class="flex-grow-1 ps-4 border-start border-3">
                                    <h5>Trở về Hồ Chí Minh</h5>
                                
                                </div>
                            </li>
            
                            
              
                       
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
<hr class="mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
<div className="row mt-5">
<h2 className="fw-bold mb-3">Chi phí</h2>
  <p>
    - Chi phí tổng : <span className="fw-bold" style={{color: "#ffb03b"}}> 3.990.000 VND</span>
  </p>
  <p>
    - Chi phí bao gồm :
  </p>
    <ul class="px-5" style={{listStyleType:"disc"}}>
    <li>Tiền xe di chuyển đến địa điểm</li>
    <li>Tiền ăn uống trong chuyến đi</li>
    <li>Tiền tham gia tour của S.E.P</li>
</ul>
</div>
  

  


</div>

  );
}

export default TourDetail;
