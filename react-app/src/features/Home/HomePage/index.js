import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Navbar from "../../Component/Navbar";
import BlogSlide from "../../Component/BlogSlide";
import BoxData from "../../Component/BoxData";
import Footer from "../../Component/Footer";
import PopupCompare from "../../Component/PopupCompare";
import Noti from "../../Component/Noti";
import Chat from "../../Component/Chat";
import ListChat from "../../Component/ListChat";
import NavBarHome from "../../Component/NavbarSearch";

const HomePage = ({
  imageHome,
  url,
  user,
  setUser,
  setFavs,
  companies,
  compares,
  setCompares,
  showNoti,
  setShownoti,
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
  const image = require("../../../image Hackathon/image/bk1.png");

  const [frabic, setFrabic] = useState([]);
  const [factory, setFactory] = useState([]);
  const [designer, setDesigner] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      const frabicCompanies = companies.filter(
        (company) =>
          company.type == "frabic shop" && company.status == "company"
      );
      const factoryCompanies = companies.filter(
        (company) => company.type == "company" && company.status == "company"
      );
      const designerCompanies = companies.filter(
        (company) => company.type == "designer" && company.status == "company"
      );

      setFrabic(frabicCompanies);
      setFactory(factoryCompanies);
      setDesigner(designerCompanies);
    }
    getCompanies();
  }, []);

  const imagePaths = [
    require("../../../image Hackathon/image/promote1.jpg"),
    require("../../../image Hackathon/image/promote2.jpg"),
    require("../../../image Hackathon/image/promote3.jpg"),
  ];

  return (
    <div className={className}>
      {showNoti == "show" ? (
        <Noti
          url={url}
          user={user}
          setShownoti={setShownoti}
          notis={notis}
          setNotis={setNotis}
        ></Noti>
      ) : null}

      {showListChat == "show" ? (
        <ListChat
          url={url}
          user={user}
          listChat={listChat}
          setShowListChat={setShowListChat}
          setShowChat={setShowChat}
          socket={socket}
          setRoom={setRoom}
        />
      ) : null}
      {showChat == "show" ? (
        <Chat
          url={url}
          user={user}
          setShowChat={setShowChat}
          socket={socket}
          room={room}
          setChat={setChat}
          chat={chat}
          setRoom={setRoom}
        />
      ) : null}

      <Navbar
        user={user}
        setUser={setUser}
        setShownoti={setShownoti}
        setCompares={setCompares}
        setShowListChat={setShowListChat}
        setShowChat={setShowChat}
      />

      <div className="image">
        <img src={image}></img>
      </div>
      <div className="blog">
        <div className="header-text">
          <p>Blog</p>
        </div>
        {/* <BlogSlide imageHome={imageHome} /> */}
        <div className="blogSlide">
          {imagePaths.map((image, index) => (
            <BlogSlide key={index} index={index} image={image} /> 
          ))}
        </div>
      </div>

      <div className="show-category">
        {/* Factory */}
        <div id="factory">
          <div className="header-category">
            <p>โรงงาน</p>
          </div>
          <div className="detail">
            <p>รับผลิตและจัดจำหน่ายสินค้าประเภทเสื้อผ้า</p>
            <Link to="/company" id="seeAll">
              ดูทั้งหมด
            </Link>
          </div>
          <div className="show-slide">
            {factory.slice(0, 4).map((company) => {
              return (
                <BoxData
                  key={company.id}
                  user={user}
                  url={url}
                  item={company}
                  setFavs={setFavs}
                  compares={compares}
                  setCompares={setCompares}
                />
              );
            })}
          </div>
        </div>

        {/* Fabric */}
        <div id="fabric">
          <div className="header-category">
            <p>ร้านขายผ้า</p>
          </div>
          <div className="detail">
            <p>ร้านค้าขายปลีก-ส่ง ผ้าม้วนนำเข้าราคาถูก</p>
            <Link to="/fabric" id="seeAll">
              ดูทั้งหมด
            </Link>
          </div>
          <div className="show-slide">
            {frabic.slice(0, 4).map((company) => {
              return (
                <BoxData
                  key={company.id}
                  user={user}
                  url={url}
                  item={company}
                  setFavs={setFavs}
                  compares={compares}
                  setCompares={setCompares}
                />
              );
            })}
          </div>
        </div>

        {/* Designer */}
        <div id="designer">
          <div className="header-category">
            <p>ดีไซน์เนอร์</p>
          </div>
          <div className="detail">
            <p>หามืออาชีพออกแบบเสื้อผ้าแฟชั่นงานคุณภาพ</p>
            <Link to="/designer" id="seeAll">
              ดูทั้งหมด
            </Link>
          </div>
          <div className="show-slide">
            {designer.slice(0, 4).map((company) => {
              return (
                <BoxData
                  key={company.id}
                  user={user}
                  url={url}
                  item={company}
                  setFavs={setFavs}
                  compares={compares}
                  setCompares={setCompares}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />

      {compares.length != 0 ? (
        <PopupCompare url={url} compares={compares} setCompares={setCompares} />
      ) : null}
    </div>
  );
};

export default styled(HomePage)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  background-color: black;

  .navbar {
    position: absolute;
    width: 85%;
    height: 75px;
    z-index: 2;
    background-color: white;
    border-radius: 100px;
    left: 90px;
  }
  .image img {
    width: 100%;
    height: 850px;
    border-bottom-left-radius: 400px;
    border-bottom-right-radius: 400px;
    object-fit: cover;
  }
  .blog {
    width: 100%;
    height: 500px;
    margin: 80px 0px;
  }
  .header-text {
    margin-left: 20px;
    background-color: white;
    border-radius: 50px;
    border: 1px solid white;
    width: fit-content;
    height: fit-content;
    box-shadow: rgb(5 5 255 / 57%) 0px 10px 300px -20px,
      rgb(5 55 194 / 83%) 0px 30px 60px -30px,
      rgb(2 44 130 / 81%) 0px -2px 6px 0px inset;
  }
  .header-text p {
    margin: 15px 60px;
    font-family: "lora";
    font-size: 40px;
    font-weight: 500;
  }

  /*Category */
  .show-category {
    background-color: white;
    padding: 40px;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }
  .header-category {
    background-color: black;
    border-radius: 50px;
    border: 1px solid black;
    width: fit-content;
    height: fit-content;
    color: white;
    margin: 50px;
    box-shadow: rgb(46 65 240 / 40%) 5px 5px, rgba(46, 65, 240, 0.3) 10px 10px,
      rgba(46, 65, 240, 0.2) 15px 15px, rgba(46, 65, 240, 0.1) 20px 20px,
      rgba(46, 65, 240, 0.05) 25px 25px;
  }
  .header-category p {
    margin: 15px 60px;
    font-family: "Anuphan";
    font-size: 35px;
    font-weight: 500;
  }
  .detail {
    display: flex;
    padding: 0px 80px 40px 50px;
    align-content: center;
    justify-content: space-between;
  }
  .detail p {
    font-family: "Anuphan";
    font-size: 27px;
    font-weight: 500;
    margin: 0 80px;
  }
  .detail a {
    font-family: "Anuphan";
    font-size: 25px;
    font-weight: 500;
    margin: 0px;
  }
  .detail #seeAll {
    font-family: "Anuphan";
    font-size: 25px;
    font-weight: 500;
    color: #ff9d00;
    text-decoration: none;
  }
  .detail #seeAll:hover {
    color: #12136e;
  }

  /*Showslide */
  .show-slide {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .blogSlide {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 40px 0px;
    justify-content: center;
  }
`;
