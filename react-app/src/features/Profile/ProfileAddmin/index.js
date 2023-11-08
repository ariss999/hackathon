import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";
import CardAdmin from "../../Component/CardProfile/CardAdmin";
import Package from "../../Component/Package";
import Noti from "../../Component/Noti";
import ListChat from "../../Component/ListChat";
import Chat from "../../Component/Chat";
import { Link, useNavigate } from "react-router-dom";

const ProfileAdmin = ({
  url,
  user,
  setUser,
  showNoti,
  setShownoti,
  notis,
  setNotis,
  setCompares,
  showChat,
  setShowChat,
  setShowListChat,
  showListChat,
  listChat,
  socket,
  room,
  setRoom,
  chat,
  setChat,
  className,
}) => {
  const [select1, setSelect1] = useState("regis");
  const [select2, setSelect2] = useState("user");
  const navigate = useNavigate();

  function submit1() {
    if(select1=="regis"){
      navigate("/all/regis")
    }else{
      navigate("/all/package")
    }
  }
  function submit2() {
    if(select2=="user"){
      navigate("/all/user")
    }else{
      navigate("/all/company")
    }
  }

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

      <CardAdmin />
      <div className="rating">
        <div className="box-rating">
          <div className="box-category">
            <div className="number">100K+</div>
            <div className="box-name">Factory</div>
          </div>
          <div className="box-category">
            <div className="number">123K+</div>
            <div className="box-name">Fabric</div>
          </div>
          <div className="box-category">
            <div className="number">45</div>
            <div className="box-name">Designer</div>
          </div>
          <div className="box-category">
            <div className="number">4.5</div>
            <div className="box-name">User</div>
          </div>
        </div>
      </div>

      <div className="check-data-admin">
        <div className="check-data">
          <h1>ข้อมูลที่กำลังรอตรวจสอบ</h1>
          <p>มีข้อมูลมากมายที่กำลังรอให้คุณตรวจสอบใหม่อีกครั้งจากผู้ใช้งาน</p>
          <div className="btn-select">
            <p>ข้อมูลที่ต้องการตรวจสอบ: </p>
            <select
              id="check"
              onChange={(event) => {
                setSelect1(event.target.value);
              }}
            >
              <option value="regis">การสมัครสมาชิก</option>
              <option value="package">การซื้อ/ขายแพ็คเกจโปรโมท</option>
            </select>
          </div>
          <button onClick={submit1} >ตรวจสอบ</button>
        </div>
        <div className="check-data">
          <h1>ข้อมูลทั้งหมด</h1>
          <p>คุณสามารถดูข้อมูลสมาชิกทั้งหมดของเว็บไซต์ได้ที่นี่</p>
          <div className="btn-select">
            <p>ข้อมูลที่ต้องการดู: </p>
            <select 
              id="check"
              onChange={(event) => {
                setSelect2(event.target.value);
              }}
            >
              <option value="user">ผู้ใช้งาน</option>
              <option value="company">ผู้ประกอบการ</option>
            </select>
          </div>
          <button onClick={submit2} >ดูข้อมูล</button>
        </div>
      </div>

      <div className="package">
        <div className="head-name">
          <h1>แพ็คเกจสุดคุ้ม</h1>
        </div>
      </div>
      <div className="sale-package">
        <Package user={user} />
      </div>

      <Footer />
    </div>
  );
};

export default styled(ProfileAdmin)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");

  .rating {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .box-rating {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 150px;
    width: 1100px;
    background-image: linear-gradient(to bottom, #12136e, #6b78ff);
    color: white;
    margin: 50px 0px 80px 0px;
    border-radius: 100px;
  }
  .box-category {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .box-category .number {
    font-family: "Lora";
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .box-category .box-name {
    font-family: "Lora";
    font-size: 18px;
    font-weight: 400;
    text-align: center;
  }
  .package {
    position: relative;
  }
  .package .head-name h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: translate(170%, -90%);
    z-index: 2;
    font-family: "Anuphan";
    font-size: 50px;
  }
  .head-name h1 {
    background-color: white;
    width: 350px;
    height: 80px;
    border: 1px solid;
    border-radius: 50px;
  }
  .sale-package {
    width: 100%;
    height: 500px;
    background-color: black;
    margin-bottom: 50px;
    padding-top: 100px;
  }
  .check-data-admin {
    width: 100%;
    height: 400px;
    margin-bottom: 150px;
    display: flex;
    background-color: black;
  }
  .check-data {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 5px solid white;
    font-family: "Anuphan";
    color: white;
  }
  .check-data p {
    font-size: 19px;
    font-weight: 400;
  }
  .check-data:hover {
    background-image: linear-gradient(to bottom right, #ff9d00, #ded05a);
    color: black;
  }

  .btn-select p {
    font-size: 17px;
  }
  .btn-select {
    display: flex;
  }
  .btn-select #check {
    margin-left: 20px;
    font-size: 15px;
    border-radius: 5px;
  }
  .check-data-admin button {
    margin-top: 30px;
    font-size: 18px;
    border-radius: 30px;
    width: 150px;
    height: 50px;
    background-image: linear-gradient(to bottom right, #12136e, #6b78ff);
    color: white;
    border: none;
  }
`;
