import React from "react";

const FooterList = ({ content, title }) => {
  return (
    <div className="col-md-6 col-12 flex-c-start" >
      <ul className="gap-into">
        <p className="fw-600 fs-larger">{title}</p>
        {content &&
          content.map((value, index) => {
            return (
              <a className="list-group-item c-primary" style={{zIndex:10}} href={value.redirect}>{value.content}</a>
            );
          })}
      </ul>
    </div>
  );
};

const Footer = () => {
  // const first_list = [
  //   {
  //     redirect: "/scan",
  //     content: "Quét món",
  //   },
  //   { 
  //     redirect: "/reccomend-meals", 
  //     content: "Gợi ý món ăn" 
  //   },
  //   { 
  //     redirect: "/profile", 
  //     content: "Theo dõi hồ sơ dinh dưỡng" 
  //   }
  // ];

  const second_list = [
    { 
      redirect: "https://www.facebook.com/profile.php?id=61552680084970", 
      content:"Fanpage"
    }, 
    { 
      redirect: "mailto:seprojectvietnam@gmail.com", 
      content:"Email"
    }
  ];

  const second_title = "Liên hệ";

  return (
    <footer className="container" >
      <div className="row" style={{ gap: "20px",zIndex:"10000" }}>
        <div className="col-md-6 col-12 row ">
          {/* <FooterList content={first_list} title={first_title} /> */}
          <FooterList content={second_list} title={second_title} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
