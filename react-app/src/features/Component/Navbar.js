import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({
  user,
  setUser,
  setShownoti,
  setCompares,
  setShowListChat,
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
    setShowListChat("")
    navigate("/");
  }

  function showNoti() {
    setShownoti("show");
  }

  function showChat() {
    setShowListChat("show")
  }

  function login(){
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
          <Link to="/">Home</Link>
          <Link to="/fabric">Fabric</Link>
          <Link to="/designer">Designer</Link>
          <Link to="/company">Factory</Link>
        </div>
        <div className="search">
          {/* <input placeholder="Search" className="search"></input> */}
        </div>
        <div className="about-user">
          {typeof user == "object" ? (
            <>
              <img src={noti} className="round-image" onClick={showNoti} />
              <img src={chat} className="round-image-chat" onClick={showChat}/>
            </>
          ) : (
            <>
              <img src={noti} className="round-image" onClick={login}/>
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
              Log out
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default styled(Navbar)`
  .navbar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 30px;
  }

  @media (max-width: 768px) {
    .navbar {
      flex-direction: column;
      text-align: center;
    }
    .search {
      width: 100%;
    }
    .round-image,
    .round-image-chat {
      margin-right: 0;
      margin-bottom: 10px;
      cursor: pointer;
    }
    .round-image img,
    .round-image-chat img {
      max-width: 100%;
      max-height: 100%;
      cursor: pointer;
    }
  }

  @media (max-width: 480px) {
    .navbar {
      margin: 15px;
    }
    .search {
      height: 40px;
      font-size: 14px;
    }
  }

  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");

  .navbar a {
    margin: 40px;
    font-size: 26px;
    font-weight: 500;
    text-decoration: none;
    color: black;
  }
  .navbar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 30px;
  }
  .search {
    width: 250px;
    height: 30px;
    border-radius: 100px;
    font-family: "lora";
    font-size: 16px;
    font-weight: 400;
    padding-left: 10px;
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
    background-color: #333a56;
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
    font-family: "lora";
    font-size: 16px;
    font-weight: 400;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    border: none;
    cursor: pointer;
  }
  .logout img {
    max-width: 100%;
    max-height: 100%;
    margin-right: 10px;
    cursor: pointer;
  }
`;
