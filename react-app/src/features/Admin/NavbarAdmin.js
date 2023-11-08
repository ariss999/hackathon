import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavbarAdmin = ({
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
    setShowChat('');
    navigate("/");
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

  const [selectedOption, setSelectedOption] = useState("");

  // Function to handle the selection change
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Use navigate to change the route
    switch (selectedValue) {
      case "all/regis":
        navigate("/all/regis");
        break;
      case "all/package":
        navigate("/all/package");
        break;
      case "all/company":
        navigate("/all/company");
        break;
      case "all/user":
        navigate("/all/user");
        break;
      default:
        break;
    }
  };

  return (
    <div className={className}>
      <div className="navbar">
        <div className="category">
          <Link to="/">หน้าหลัก</Link>
          
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            id="selection"
          >
            <option value="">เลือกหมวดหมู่</option>
            <option value="all/regis">ลงทะเบียนไม่ผ่าน</option>
            <option value="all/package">ซื้อแพคเก็จไม่ผ่าน</option>
            <option value="all/company">ผู้ประกอบการ</option>
            <option value="all/user">ผู้ใช้งาน</option>
          </select>
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

export default styled(NavbarAdmin)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");

  .navbar a {
    margin: 30px;
    font-size: 23px;
    font-weight: 500;
    text-decoration: none;
    color: white;
    font-family: "Anuphan";
  }
  .navbar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 30px;
    background-image: linear-gradient(to bottom right, #12136e, #6b78ff);
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
  .category select{
    width: 180px;
    font-family: "Anuphan";
    margin: 30px;
    font-size: 23px;
    font-weight: 500;
    color: white;
    background: none;
    border: none;
    outline: none;
    appearance: none;
    cursor: pointer;
  }
  .category option {
    font-family: "Anuphan";
    font-size: 18px;
    font-weight: 400;
    background: black;
  }
`;
