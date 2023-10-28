import React, { useState } from "react";
import { Link } from "react-router-dom";
import bannerProject from "../../assets/images/banner/banner_project.png";
import bannerProject2 from "../../assets/images/banner/banner_project_2.png";
import bannerProject3 from "../../assets/images/banner/banner_project_3.png";
import duyimg from "../../assets/images/teams/duy.jpg";
import vyimg from "../../assets/images/teams/vy.jpg";
import phuimg from "../../assets/images/teams/phu.jpg";
import linhimg from "../../assets/images/teams/linh.jpg";
import veeimg from "../../assets/images/teams/vee.jpg";
import dungimg from "../../assets/images/teams/dung.jpg"; 
import "./HomeStyle.css"
import ta_lai from "../../assets/images/blogs/ta_lai.png";
// import gioi_thieu from "../../assets/images/blogs/gioi_thieu_2.png";
import nong_thon from "../../assets/images/blogs/nong_thon.png";
import nct from "../../assets/images/blogs/nct.png";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % 3);
  };

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + 3) % 3);
  };

  // const handleButtonUse =()=>{
  //   redirect('/log-in');
  // }

  const slides = [
    {
      id: 0,
      imageUrl: bannerProject,
    },
    {
      id: 1,
      imageUrl: bannerProject2,
    },
    {
      id: 2,
      imageUrl: bannerProject3,
    },
  ];
console.log(`${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_CUSTOMER}`)
  const items = Array.from({ length: slides.length }, (_, i) => (
    <button
      className={`mx-2 ${i === activeIndex ? "bg-white-80" : "bg-white-50"}`}
      style={{
        width: "80px",
        height: "15px",
        borderRadius: "10px",
        backgroundColor: "white",
        cursor: "pointer",
      }}
      onClick={() => {
        setActiveIndex(i);
      }}
    ></button>
  ));

  return (
    <div>
      <div
        id="carouselControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {slides.map((slide, index) => (
            <li
              key={index}
              className={slide.id === activeIndex ? "active" : ""}
              onClick={() => setActiveIndex(slide.id)}
            />
          ))}
        </ol>
        <div className="carousel-inner">
          <ol className="carousel-indicators">{items}</ol>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item  ${
                slide.id === activeIndex ? "active" : ""
              }`}
            >
              <div className="image-container" >
                <img
                  className="d-block w-100 slide-image"
                  src={slide.imageUrl}
                  alt={`Slide ${slide.id}`}
                  style={{objectFit: "cover", height: "600px" }}
                />

                <div className="overlay"></div>
              </div>
              <div
                className="carousel-caption text-center"
                style={{ bottom: "20vh" }}
              >
                <h1>
                  <b style={{ color: "yellow" }}> Tình nguyện </b>
                  kết hợp
                  <b style={{ color: "yellow" }}> du lịch </b>
                </h1>
                <h4 style={{ marginTop: "20px", fontWeight:"400" }}>
                  {" "}
                  Chia sẻ kiến thức và trải nghiệm du lịch{" "}
                </h4>
                <Link to="/sign-in" type="button" className="btn-primary btn-warning" style={{color:"white", borderRadius:"5px", marginTop:"20px", fontSize:"1.3rem",fontWeight:"400", padding:"15px"}}>Đăng kí ngay</Link>
              </div>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselControls"
          role="button"
          onClick={handlePrevClick}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselControls"
          role="button"
          onClick={handleNextClick}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </a>
      </div>

      {/* <section style={{backgroundColor: "#eee"}}>
  <div className="text-center container py-5">
    <h4 className="mt-4 mb-5"><strong>Bestsellers</strong></h4>

    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4">
        <div className="card">
          <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp"
              className="w-100" alt=""/>
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5><span className="badge bg-primary ms-2">New</span></h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </div>
            </a>
          </div>
          <div className="card-body">
            <a href="" className="text-reset">
              <h5 className="card-title mb-3">Product name</h5>
            </a>
            <a href="" className="text-reset">
              <p>Category</p>
            </a>
            <h6 className="mb-3">$61.99</h6>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
              className="w-100" alt=""/>
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5><span className="badge bg-success ms-2">Eco</span></h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </div>
            </a>
          </div>
          <div className="card-body">
            <a href="" className="text-reset">
              <h5 className="card-title mb-3">Product name</h5>
            </a>
            <a href="" className="text-reset">
              <p>Category</p>
            </a>
            <h6 className="mb-3">$61.99</h6>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).webp"
              className="w-100" alt=""/>
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5><span className="badge bg-danger ms-2">-10%</span></h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </div>
            </a>
          </div>
          <div className="card-body">
            <a href="" className="text-reset">
              <h5 className="card-title mb-3">Product name</h5>
            </a>
            <a href="" className="text-reset">
              <p>Category</p>
            </a>
            <h6 className="mb-3">
              <s>$61.99</s><strong className="ms-2 text-danger">$50.99</strong>
            </h6>
          </div>
        </div>
      </div>
    </div>

  </div>
</section> */}


<section className="mt-5 py-3 py-md-5" >

  <div className="container-fluid" style={{ maxWidth: '90%' }}>
 
    <div className="row gy-4 gy-md-4 gy-lg-0 align-items-lg-center">
      <div className="col-12 col-lg-6 col-xl-5">
        <img className="img-fluid rounded" loading="lazy" src="https://hnm.1cdn.vn/2021/07/08/hanoimoi.com.vn-uploads-images-phananh-2021-07-08-_dulich1.jpg" alt="About 1"/>
      </div>
      <div className="col-12 col-lg-6 col-xl-7">
        <div className="row justify-content-xl-center">
          <div className="col-12 col-xl-11">
          <h3 className="fw-bold mb-3">S.E.P là ai ?</h3>
            <p className="mb-5 lead fs-5">S.E.P (Share Edu Project) - mô hình tình nguyện tích hợp du lịch với mong muốn mang tri thức về các vùng nông thôn. Trong dự án này, các tình nguyện viên trẻ trong độ tuổi từ 18-35 đến từ thành thị sẽ tham gia để chia sẻ kiến thức và trải nghiệm du lịch bản địa với các bạn học sinh tại vùng. Các tình nguyện viên sẽ được đào tạo trước khi tham gia dạy học, và giáo trình dạy học sẽ được biên soạn bởi các chuyên gia, phù hợp với từng độ tuổi và trình độ của học sinh ở vùng nông thôn.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>



<hr className="mx-auto mb-5 mb-xl-9 border-dark-subtle"/>

<div className="container-fluid" style={{ maxWidth: '90%'}}>
<div className="row">
    <div className="heading-title text-center" style={{ marginBottom: 0}}>
        <h3 className="fw-bold mb-3">Các bài blogs mới</h3>

        <hr className="w-50 mx-auto mb-2 mb-xl-9 border-dark-subtle"/>
    </div>
    </div>


<div className="row">
<div className="col-5 col-md-5 col-lg-5 d-flex flex-column" >

<div className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4" data-mdb-ripple-color="light">
<a href="https://seprojectvietnam.blogspot.com/2023/10/ong-nai-kham-pha-vuon-quoc-gia-nam-cat.html" className="text-dark">
<div style={{ display: 'flex', justifyContent: 'center' }}>

  <img className="img-fluid shadow-1-strong rounded" src={nct} style={{ width: '100%' }} alt=""/>
 
</div>
</a>
  <a href="#!">
    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
  </a>
</div>


<div className="row mb-3">
  <div className="col-6">
  <Link className="text-info" to="/voluntary-tourism"> 
  <i className="fas fa-plane"></i>
      Du lịch tình nguyện</Link>
  </div>

  <div className="col-6 text-end">
  <u> 28.10.2023</u>
  </div>
</div>



<a href="https://seprojectvietnam.blogspot.com/2023/10/ong-nai-kham-pha-vuon-quoc-gia-nam-cat.html" className="text-dark">
  <h5> [Đồng Nai] Khám Phá Vườn quốc gia Nam Cát Tiên - Hành trình kỳ diệu giữa thiên nhiên và sinh học</h5>

  <p>
  Vườn quốc gia Nam Cát Tiên - Khu rừng chứa đựng nguồn tài nguyên đa dạng sinh học của Việt Nam. Trải dài trên 3 tỉnh Đồng Nai, Lâm Đồng và Bình Phước với diện tích 71.187,9 ha được bao quanh bởi hơn 80km sông Đồng Nai...
  </p>
</a>

</div>
<div className="col-7 col-md-7 col-lg-7 d-flex flex-column">

<a href="https://seprojectvietnam.blogspot.com/2023/10/ong-nai-kham-pha-ta-lai-thien-ang-cua.html" className="text-dark">
  <div className="row mb-4 border-bottom pb-2">
    <div className="col-5" >
      
        <img
    src={ta_lai}
    className="img-fluid shadow-1-strong rounded h-100"
    style={{
      objectFit: "cover",
      width: "100%",
      height: "100%",
    }}
    alt=""
  />
        
    </div>
    

    <div className="col-7">
      <p className="mb-2"><strong>[Đồng Nai] Khám Phá Tà Lài - Thiên Đàng của Văn Hóa và Thiên Nhiên Hoang Sơ</strong></p>
      

      <p>
      Khi bạn tìm kiếm một điểm đến đầy sự kết hợp giữa thiên nhiên hoang sơ và văn hóa độc đáo, Tà Lài, xã nằm sâu trong lòng tỉnh Đồng Nai, chắc chắn sẽ là sự lựa chọn đáng cân nhắc...
      </p>

      <p>
        <u> 27.10.2023</u>
      </p>
    </div>
  </div>
</a>

<a href="https://seprojectvietnam.blogspot.com/2023/10/thach-thuc-va-co-hoi-trong-xay-dung-he_26.html" className="text-dark">
  <div className="row mb-4 border-bottom pb-2">
    <div className="col-5">
    <img
    src={nong_thon}
    className="img-fluid shadow-1-strong rounded h-100"
    style={{
      objectFit: "cover",
      width: "100%",
      height: "100%",
    }}
    alt=""
  />
        
    </div>
    

    <div className="col-7">
      <p className="mb-2"><strong>Thách thức và Cơ hội trong Xây dựng Hệ thống Giáo dục Công Bằng và Hiệu Quả tại Việt Nam</strong></p>


  <p>
  Giáo dục là yếu tố quan trọng để xây dựng tương lai của một quốc gia, và hệ thống giáo dục Việt Nam không phải là một ngoại lệ...
  </p>

      <p>
      <u> 27.10.2023</u>
      </p>
    </div>
  </div>
</a>



</div>


</div>
</div>

<hr className="mx-auto mb-5 mb-xl-9 border-dark-subtle"/>

<div className="container-fluid" style={{ maxWidth: '80%' }}>
                    <div className="row">
                        <div className="heading-title text-center">
                        <h3 className="fw-bold mb-3">Đội ngũ của chúng tôi </h3>
                            <p className="mb-3 mt-3 text-center lead fs-4" style={{color: '#ffa012' }}>Tình nguyện  |  Trải nghiệm  | Bền Vững </p>
                            <hr className="w-50 mx-auto mb-2 mb-xl-9 border-dark-subtle"/>
                        </div>
                        
                        <div className="col-md-4 col-sm-4 mb-3">
                        <div className="team-member">
                            <div className="team-img">
                                <img
                                    src={vyimg}
                                    alt="team member"
                                    className="img-responsive"
                                    style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                                />
                            </div>
                            <div className="team-hover">
                                <div className="desk">
                                    <h4>Xin chào !</h4>
                                    <p>Tôi là Vy, Founder của dự án.</p>
                                </div>
                            </div>
                        </div>
                        <div className="team-title">
                            <h5>Vy NGUYEN</h5>
                            <span>Founder</span>
                        </div>
                    </div>


                    <div className="col-md-4 col-sm-4 mb-3">
                        <div className="team-member">
                            <div className="team-img">
                                <img
                                    src={dungimg}
                                    alt="team member"
                                    className="img-responsive"
                                    style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                                />
                            </div>
                            <div className="team-hover">
                                <div className="desk">
                                    <h4>Xin chào !</h4>
                                    <p>Tôi là Dung, Project Manager của dự án.</p>
                                </div>
                            </div>
                        </div>
                        <div className="team-title">
                            <h5>Dung TRAN</h5>
                            <span>Project Manager</span>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 mb-3">
                        <div className="team-member">
                            <div className="team-img">
                                <img
                                    src={phuimg}
                                    alt="team member"
                                    className="img-responsive"
                                    style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                                />
                            </div>
                            <div className="team-hover">
                                <div className="desk">
                                    <h4>Xin chào !</h4>
                                    <p>Tôi là Phú, Business Development Manager của dự án.</p>
                                </div>
                            </div>
                        </div>
                        <div className="team-title">
                            <h5>Phu NGUYEN</h5>
                            <span>Business Development Manager</span>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 mb-3">
                        <div className="team-member">
                            <div className="team-img">
                                <img
                                    src={duyimg}
                                    alt="team member"
                                    className="img-responsive"
                                    style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                                />
                            </div>
                            <div className="team-hover">
                                <div className="desk">
                                    <h4>Xin chào !</h4>
                                    <p>Tôi là Duy, Software Engineer của dự án.</p>
                                </div>
                            </div>
                        </div>
                        <div className="team-title">
                            <h5>Duy NGUYEN</h5>
                            <span>Software Engineer</span>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 mb-3">
                        <div className="team-member">
                            <div className="team-img">
                                <img
                                    src={veeimg}
                                    alt="team member"
                                    className="img-responsive"
                                    style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                                />
                            </div>
                            <div className="team-hover">
                                <div className="desk">
                                    <h4>Xin chào !</h4>
                                    <p>Tôi là Vee, Expertise Program Executive của dự án.</p>
                                </div>
                            </div>
                        </div>
                        <div className="team-title">
                            <h5>Vee NGUYEN</h5>
                            <span>Expertise Program Executive</span>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 mb-3">
                        <div className="team-member">
                            <div className="team-img">
                                <img
                                    src={linhimg}
                                    alt="team member"
                                    className="img-responsive"
                                    style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                                />
                            </div>
                            <div className="team-hover">
                                <div className="desk">
                                    <h4>Xin chào !</h4>
                                    <p>Tôi là Linh, Marketing Manager của dự án.</p>
                                </div>
                            </div>
                        </div>
                        <div className="team-title">
                            <h5>Linh DANG</h5>
                            <span>Marketing Manager</span>
                        </div>
                    </div>

                    </div>

                </div>



    </div>
  );
};

export default Home;
