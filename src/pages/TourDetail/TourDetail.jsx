import * as React from 'react';
import './TourDetailStyle.css'

const TourDetail = () => {
  return (
    <div class="container">
<div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>
<div className="row mt-4">
<h2 className="text-center mb-3">Mục tiêu của dự án</h2>
  <p>
  Du lịch tình nguyện tại Bảo Lộc – Lâm Đồng nhằm hỗ trợ, thúc đẩy phát triển mô hình du lịch cộng đồng tại nơi đây và quảng bá các nghề truyền thống địa phương. Với mục đích phát triển sinh kế cho địa phương đi liền quảng bá du lịch nơi đây. Dự án mang lại cho địa phương cách khai thác các nguồn lực về du lịch còn chưa được khai thác. 

Thông qua các hoạt động hỗ trợ thiết thực như đào tạo kỹ năng việc làm, dạy học phi chính quy, quảng bá, truyền thông về hình ảnh du lịch cộng đồng tại địa phương, tổ chức các chương trình du lịch trải nghiệm, V.E.O mong muốn mang lại những cơ hội thiết thực nhất, phát triển kinh tế bền vững nhất cho bà con nơi đây. 
  </p>
</div>

<div className="row mt-4">
<h2 className="text-center mb-4">Thông tin của chuyến đi</h2>
  <div className="row">
    <div className="col-md-6">
      <h4>Điểm nổi bật của chuyến đi</h4>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Tổ chức các lớp học cộng đồng cho trẻ em địa phương</li>
        <li class="list-group-item">Tìm hiểu các nét văn hóa đặc sắc tại Bảo Lộc</li>
        <li class="list-group-item">Phát triển mô hình và du lịch cộng đồng tại Bảo Lộc – Lâm Đồng</li>
      </ul>
    </div>
    <div className="col-md-6">
      <h4>Điểm nổi bật của điểm đến</h4>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Tham quan các điểm đến đặc biệt: Chùa Di Đà, Thánh đường Giáo xứ Thánh Mẫu,…</li>
        <li class="list-group-item">Trải nghiệm chèo ván SUP tại khu camping</li>
        <li class="list-group-item">Ghé thăm đồi chè bạt ngàn</li>
      </ul>
    </div>
  </div>
</div>

<div className="row mt-4">
<h2 className="text-center mb-4">Các môn giảng dạy dự kiến</h2>
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

<div className="row mt-5">
<h2 className="text-center mb-3">Chi phí</h2>
  <p>
    
  </p>
</div>
  

  


</div>

  );
}

export default TourDetail;
