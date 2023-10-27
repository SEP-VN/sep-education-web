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
import gioi_thieu from "../../assets/images/blogs/gioi_thieu.png";
import nong_thon from "../../assets/images/blogs/nong_thon.png";

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


<section class="mt-5 py-3 py-md-5" >

  <div class="container-fluid" style={{ maxWidth: '90%' }}>
 
    <div class="row gy-4 gy-md-4 gy-lg-0 align-items-lg-center">
      <div class="col-12 col-lg-6 col-xl-5">
        <img class="img-fluid rounded" loading="lazy" src="https://hnm.1cdn.vn/2021/07/08/hanoimoi.com.vn-uploads-images-phananh-2021-07-08-_dulich1.jpg" alt="About 1"/>
      </div>
      <div class="col-12 col-lg-6 col-xl-7">
        <div class="row justify-content-xl-center">
          <div class="col-12 col-xl-11">
            <h1 class="mb-3">S.E.P là ai ?</h1>
            <p class="text-secondary mb-5 lead fs-5">S.E.P (Share Edu Project) - mô hình tình nguyện tích hợp du lịch với mong muốn mang tri thức về các vùng nông thôn. Trong dự án này, các tình nguyện viên trẻ trong độ tuổi từ 18-35 đến từ thành thị sẽ tham gia để chia sẻ kiến thức và trải nghiệm du lịch bản địa với các bạn học sinh tại vùng. Các tình nguyện viên sẽ được đào tạo trước khi tham gia dạy học, và giáo trình dạy học sẽ được biên soạn bởi các chuyên gia, phù hợp với từng độ tuổi và trình độ của học sinh ở vùng nông thôn.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>



<hr class="mx-auto mb-5 mb-xl-9 border-dark-subtle"/>

<div className="container-fluid" style={{ maxWidth: '90%'}}>
<div class="row">
    <div class="heading-title text-center" style={{ marginBottom: 0}}>
        <h1>Các bài Blogs mới</h1>

        <hr class="w-50 mx-auto mb-2 mb-xl-9 border-dark-subtle"/>
    </div>
    </div>


<div class="row">
<div class="col-5 col-md-5 col-lg-5 d-flex flex-column" >

<div class="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4" data-mdb-ripple-color="light">
<a href="https://seprojectvietnam.blogspot.com/2023/10/ong-nai-kham-pha-ta-lai-thien-ang-cua.html" class="text-dark">
<div style={{ display: 'flex', justifyContent: 'center' }}>

  <img src={ta_lai} style={{ width: '100%' }} alt=""/>
 
</div>
</a>
  <a href="#!">
    <div class="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
  </a>
</div>


<div class="row mb-3">
  <div class="col-6">
  <Link class="text-info" to="/voluntary-tourism"> 
  <i class="fas fa-plane"></i>
      Du lịch tình nguyện</Link>
  </div>

  <div class="col-6 text-end">
  <u> 27.10.2023</u>
  </div>
</div>



<a href="https://seprojectvietnam.blogspot.com/2023/10/ong-nai-kham-pha-ta-lai-thien-ang-cua.html" class="text-dark">
  <h5>Khám Phá Tà Lài - Thiên Đàng của Văn Hóa và Thiên Nhiên Hoang Sơ</h5>

  <p>
  Khi bạn tìm kiếm một điểm đến đầy sự kết hợp giữa thiên nhiên hoang sơ và văn hóa độc đáo, Tà Lài, xã nằm sâu trong lòng tỉnh Đồng Nai, chắc chắn sẽ là sự lựa chọn đáng cân nhắc...
  </p>
</a>

</div>
<div class="col-7 col-md-7 col-lg-7 d-flex flex-column">

<a href="https://seprojectvietnam.blogspot.com/2023/10/thach-thuc-va-co-hoi-trong-xay-dung-he_26.html" class="text-dark">
  <div class="row mb-4 border-bottom pb-2">
    <div class="col-5" >
      <img src={nong_thon}
        class="img-fluid shadow-1-strong rounded h-100" alt="" />
        
    </div>
    

    <div class="col-7">
      <p class="mb-2"><strong>Thách thức và Cơ hội trong Xây dựng Hệ thống Giáo dục Công Bằng và Hiệu Quả tại Việt Nam</strong></p>
      

  <p>
  Giáo dục là yếu tố quan trọng để xây dựng tương lai của một quốc gia, và hệ thống giáo dục Việt Nam không phải là một ngoại lệ...
  </p>

      <p>
        <u> 27.10.2023</u>
      </p>
    </div>
  </div>
</a>

<a href="https://seprojectvietnam.blogspot.com/2023/10/su-menh-cua-sep.html" class="text-dark">
  <div class="row mb-4 border-bottom pb-2">
    <div class="col-5">
      <img src={gioi_thieu}
        class="img-fluid shadow-1-strong rounded h-100" alt="Hollywood Sign on The Hill" />
        
    </div>
    

    <div class="col-7">
      <p class="mb-2"><strong>Sứ mệnh của S.E.P (Share Education Project)</strong></p>


  <p>
  S.E.P (Share Education Project) mang trong mình sứ mệnh và mong muốn góp phần giải quyết vấn đề thiếu cân bằng giáo dục giữa thành thị và nông thôn...
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

<hr class="mx-auto mb-5 mb-xl-9 border-dark-subtle"/>

<div class="container-fluid" style={{ maxWidth: '80%' }}>
                    <div class="row">
                        <div class="heading-title text-center">
                            <h1>Đội ngũ của chúng tôi </h1>
                            <p class="mb-3 mt-3 text-center lead fs-4" style={{color: '#ffa012' }}>Tình nguyện  |  Trãi nghiệm  | Bền Vững </p>
                            <hr class="w-50 mx-auto mb-2 mb-xl-9 border-dark-subtle"/>
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
