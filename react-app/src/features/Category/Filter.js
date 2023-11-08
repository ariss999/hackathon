import styled from "styled-components";
import BoxData from "../Component/BoxData";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import PopupCompare from "../Component/PopupCompare";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useMemo } from "react";
import Noti from "../Component/Noti";
import ListChat from "../Component/ListChat";
import Chat from "../Component/Chat";
import NavbarSearch from "../Component/NavbarSearch";

const Filter = ({
  url,
  user,
  setUser,
  setFavs,
  companies,
  type,
  compares,
  setCompares,
  products,
  filterProduct,
  setShownoti,
  setFilterProduct,
  showNoti,
  notis,
  setNotis,
  showChat,
  setShowChat,
  showListChat,
  setShowListChat,
  listChat,
  socket,
  room,
  setRoom,
  chat,
  setChat,
  className,
}) => {
  const image = require("../../image Hackathon/image/background.jpeg");
  const navigate = useNavigate();
  const [newCompanys, setNewCompanys] = useState([]);
  window.scrollTo(0, 0);

  function clearAll() {
    setFilterProduct(products);
    if (type == "company") {
      navigate("/company");
    } else if (type == "fabric") {
      navigate("/fabric");
    } else {
      navigate("/designer");
    }
  }

  useMemo(() => {
    async function getCompanies() {
      const newCompanies = [];
      filterProduct.forEach((product) => {
        const findCompany = companies.find((company) => company.id === product.companyId);
        if (findCompany) {
          newCompanies.push(findCompany);
        }
      });

      const filteredData = [...new Set(newCompanies)];
      const filterPack = filteredData.sort((a, b) => b.pack - a.pack);
      setNewCompanys((prevNewCompanys) => [...prevNewCompanys, ...filterPack]);
    }
  
    getCompanies();
  }, [filterProduct, companies]); // Add dependencies if needed
  

  return (
    <div className={className}>
      
      {showListChat == "show" ? <ListChat url={url} user={user} listChat={listChat} setShowListChat={setShowListChat} setShowChat={setShowChat} socket={socket} setRoom={setRoom} /> : null}
      {showChat == "show" ? <Chat url={url} user={user} setShowChat={setShowChat} socket={socket} room={room} setChat={setChat} chat={chat} setRoom={setRoom} /> : null }
      

      <Navbar
        user={user}
        setUser={setUser}
        setShownoti={setShownoti}
        setCompares={setCompares}
        setShowListChat={setShowListChat}
        setShowChat={setShowChat}
      />

      {showNoti == "show" ? (
        <Noti
          url={url}
          user={user}
          setShownoti={setShownoti}
          notis={notis}
          setNotis={setNotis}
        ></Noti>
      ) : null}
      <div className="title-header">
        {type == "company" ? (
          <h1>โรงงาน</h1>
        ) : type == "fabric" ? (
          <h1>ร้านขายผ้า</h1>
        ) : (
          <h1>ดีไซน์เนอร์</h1>
        )}

        <div id="line"></div>
      </div>
      <div className="box-btn">
        {type == "company" ? (
          <p>หาโรงงานที่คุณต้องการได้ง่ายขึ้นเพียงกดปุ่ม กลั่นกรอง</p>
        ) : type == "fabric" ? (
          <p>หาร้านขายผ้าที่คุณต้องการได้ง่ายขึ้นเพียงกดปุ่ม กลั่นกรอง</p>
        ) : (
          <p>หานักออกแบบที่คุณต้องการได้ง่ายขึ้นเพียงกดปุ่ม กลั่นกรอง</p>
        )}

        <div className="button">
          {/* <button className="btn-help-me"onClick={clearAll}>Help Me</button> */}
          <button className="btn-see-all" onClick={clearAll}>
          ดูทั้งหมด
          </button>
        </div>

        {/* นำBoxData มาใส่ตรงนี้ได้เลยจ้า*/}
        <div className="show">
          {type == "company"
            ? newCompanys
                .filter(
                  (company) =>
                    company.type === "company" && company.status == "company"
                )
                .map((company) => (
                  <BoxData
                    key={company.id}
                    user={user}
                    url={url}
                    item={company}
                    setFavs={setFavs}
                    compares={compares}
                    setCompares={setCompares}
                  />
                ))
            : type == "fabric"
            ? newCompanys
                .filter(
                  (company) =>
                    company.type === "frabic shop" &&
                    company.status == "company"
                )
                .map((company) => (
                  <BoxData
                    key={company.id}
                    user={user}
                    url={url}
                    item={company}
                    setFavs={setFavs}
                    compares={compares}
                    setCompares={setCompares}
                  />
                ))
            : newCompanys
                .filter(
                  (company) =>
                    company.type === "designer" && company.status == "company"
                )
                .map((company) => (
                  <BoxData
                    key={company.id}
                    user={user}
                    url={url}
                    item={company}
                    setFavs={setFavs}
                    compares={compares}
                    setCompares={setCompares}
                  />
                ))}
        </div>
      </div>
      {compares.length != 0 ? (
        <PopupCompare url={url} compares={compares} setCompares={setCompares} />
      ) : null}
      <Footer />
    </div>
  );
};
export default styled(Filter)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  .navbar {
    position: absolute;
    width: 85%;
    height: 75px;
    z-index: 2;
    background-color: white;
    border-radius: 100px;
    left: 90px;
  }
  .title-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .title-header h1 {
    font-family: "Anuphan";
    font-size: 65px;
    font-weight: 600;
    color: black;
    margin-top: 180px;
  }
  .title-header #line {
    width: 65%;
    border: 2.22px solid black;
  }
  .box-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
  }
  .box-btn p {
    font-family: "Anuphan";
    font-size: 20px;
    font-weight: 500;
    color: black;
  }
  .button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .btn-help-me {
    font-family: "Anuphan";
    font-size: 18px;
    font-weight: 600;
    background-color: white;
    border-radius: 30px;
    width: 120px;
    height: 50px;
    margin-right: 10px;
    transition: background-color 0.3s;
  }
  .btn-help-me:hover {
    background-image: linear-gradient(to bottom right, #12136e, #6b78ff);
    color: white;
    cursor: pointer;
  }
  .btn-see-all {
    font-family: "Anuphan";
    font-size: 18px;
    font-weight: 600;
    background: none;
    border: none;
    width: 120px;
    height: 50px;
    margin-right: 40px;
    transition: background-color 0.3s;
    color: #12136e;
  }
  .btn-see-all:hover {
    color: #ff9d00;
    cursor: pointer;
  }
  .show {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 50px;
  }
`;
