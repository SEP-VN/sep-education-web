import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [items, setItems] = useState([]);
 
  const [changeStatus, setChangeState ]= useState(false)
 
  const [isCollapsed, setIsCollapsed] = useState(true); 

  function toggleCollapse() {
    setIsCollapsed(!isCollapsed);
  }

  const handleLogout =()=>{
    // Logout();
    setChangeState(!changeStatus)
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('account'));
    if (items) {
     setItems(items);
    }
    else {
      setItems(null);
    }
  }, [changeStatus]);

  return (
    <nav
      class="navbar navbar-expand-lg  "
      style={{ padding: "15px", position:"relative" }}
    >
      <Link to="/" class="navbar-brand" href="#" onClick={()=>setIsCollapsed(true) }>
        <img src={logo} alt="Logo" className="img-fluid" />
      </Link>
      <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      <div
       className={`collapse navbar-collapse${isCollapsed ? '' : ' show'}`}
       id="navbarSupportedContent"
        style={{ justifyContent: "space-between" }}
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link to="/" class="nav-link text-header mr-2" onClick={toggleCollapse}>
              Trang chủ 
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/voluntary-tourism" class="nav-link text-header mr-2" href="#" onClick={toggleCollapse}>
              Du lịch tình nguyện
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/travel-partner" class="nav-link text-header mr-2" href="#" onClick={toggleCollapse}>
              Đối tác du lịch
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" class="nav-link text-header mr-2" href="#" onClick={toggleCollapse}>
              Liên hệ
            </Link>
          </li>
          <li class="nav-item">
            <a target="_blank" class="nav-link text-header mr-2" href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAACzTRwNUNlhMR1NPV0I0NFdRNFY1OVBUSlRUMjBPTS4u" onClick={toggleCollapse}>
              Feedback cho dự án
            </a>
          </li>
        </ul>
       { !items ?<div>
          <button className="btn-primary mr-45">
            <Link
              to="/sign-in"
              style={{ textDecoration: "none", color: "white" }} 
              onClick={toggleCollapse}
            >
              Đăng kí
            </Link>
          </button>
        </div> : <div>
          <button className="btn-primary mr-8">
            <Link
              to="/profile"
              style={{ textDecoration: "none", color: "white" }}
            >
              Hồ sơ
            </Link>
          </button>
          <button className="btn-secondary ml-8">
            <Link
              // to="/sign-up"
              className="c-primary"
              style={{ textDecoration: "none" }}
              onClick={()=>{toggleCollapse(); handleLogout();}}
            >
              Đăng xuất
            </Link>
          </button>
        </div>}
    
      </div>
    </nav>
  );
};

export default Header;




