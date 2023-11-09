import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const NavbarSearch = ({
  user,
  setUser,
  setShownoti,
  setCompares,
  setShowListChat,
  search,
  setSearch,
  setShowChat,
  className,
}) => {
  const noti = require("../../image Hackathon/icon/notification.png");
  const chat = require("../../image Hackathon/icon/send.png");
  const profile = require("../../image Hackathon/icon/contact.png");
  const logout = require("../../image Hackathon/icon/logout-black.png");
  const navigate = useNavigate(); // นำเข้า useNavigate ที่นี่

  function logOut() {
    setUser("");
    setCompares([]);
    setShowListChat("");
    navigate("/");
    setShowChat('');
  }

  function showNoti() {
    setShownoti("show");
  }

  function showChat() {
    setShowListChat("show");
  }

  function login() {
    navigate("/login");
  }

  return (
    <div className={className}>
      <div className="navbar">
        <div className="category">
          {/* {user.status == "addmin"?(
            <Link to="/edit-home">Home</Link>
          ):(
            <Link to="/">Home</Link>
          )} */}
          <Link to="/">หน้าหลัก</Link>
          <Link to="/fabric">ร้านขายผ้า</Link>
          <Link to="/designer">ดีไซน์เนอร์</Link>
          <Link to="/company">โรงงาน</Link>
        </div>
        <div className="search">
          <input
            placeholder="ค้นหา...."
            className="search"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          ></input>
        </div>
        <div className="about-user">
          {typeof user == "object" ? (
            <>
              <img src={noti} className="round-image" onClick={showNoti} />
              <img src={chat} className="round-image-chat" onClick={showChat} />
            </>
          ) : (
            <>
              <img src={noti} className="round-image" onClick={login} />
              <img src={chat} className="round-image-chat" onClick={login} />
            </>
          )}

          {typeof user === "object" ? (
            user.status === "customer" ? (
              <Link to="/profile-user">
                <img
                  src={profile}
                  className="round-image"
                  id="profile"
                  alt="Profile"
                />
              </Link>
            ) : user.status === "company" || user.status === "waiting" ? (
              <Link to="/profile-company">
                <img
                  src={profile}
                  className="round-image"
                  id="profile"
                  alt="Profile"
                />
              </Link>
            ) : user.status === "addmin" ? (
              <Link to="/profile-addmin">
                <img
                  src={profile}
                  className="round-image"
                  id="profile"
                  alt="Profile"
                />
              </Link>
            ) : null
          ) : typeof user === "string" ? (
            <Link to="/login">
              <img
                src={profile}
                className="round-image"
                id="profile"
                alt="Profile"
              />
            </Link>
          ) : null}

          {typeof user === "object" ? (
            <button className="logout" onClick={logOut}>
              <img src={logout} alt="Logout" />
              ออกจากระบบ
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default styled(NavbarSearch)`
@import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  
  .navbar a {
    margin: 25px;
    font-size: 23px;
    font-weight: 500;
    text-decoration: none;
    color:white;
    font-family: "Anuphan";
  }

  .navbar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 30px;
    background-image: linear-gradient(to bottom right, #12136e, #6b78ff);
  }

  @media only screen and (max-width: 1400px) {
    .navbar a {
      margin: 20px;
      
    }
    .navbar {
      margin: 30px 20px;
    }
  }

  @media only screen and (max-width: 1300px) {
    .navbar a {
      margin: 5px;
    }
    .navbar {
      margin: 30px 20px;
    }
  }
  
  .search {
    width: 250px;
    height: 30px;
    border-radius: 100px;
    font-family: "lora";
    font-size: 16px;
    font-weight: 400;
    padding-left: 10px;
    margin-right: 30px;
  }
  .input .search {
    padding-left: 10px;
  }
  .about-user {
    display: flex;
    align-items: center;
  }
  .round-image {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-right: 15px;
    cursor: pointer;
  }

  .round-image img {
    max-width: 100%;
    max-height: 100%;
    cursor: pointer;
  }
  .round-image-chat {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-right: 15px;
    cursor: pointer;
  }
  .round-image-chat img {
    max-width: 100%;
    max-height: 100%;
  }
  .about-user a {
    margin: 40px 0px;
  }
  .logout {
    height: 45px;
    padding: 10px;
    font-size: 16px;
    font-weight: 500;
    color: #333a56;
    font-family: "Anuphan";
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    margin-right: 10px;
  }
  .logout img {
    max-width: 100%;
    max-height: 100%;
    margin-right: 10px;
    cursor: pointer;
  }
`;
