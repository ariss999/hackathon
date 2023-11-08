import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../Component/Navbar";
import CardUser from "../../Component/CardProfile/CardUser";
import BoxData from "../../Component/BoxData";
import Footer from "../../Component/Footer";
import axios from "axios";
import CardNewData from "../../Component/CardProfile/CardNewData";
import CardEdit from "../../Component/CardProfile/CardEdit";
import PopupCompare from "../../Component/PopupCompare";
import Noti from "../../Component/Noti";
import ListChat from "../../Component/ListChat";
import Chat from "../../Component/Chat";

const ProfileUser = ({
  user,
  url,
  setUser,
  companies,
  favs,
  setFavs,
  information,
  compares,
  setCompares,
  setShownoti,
  showNoti,
  notis,
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
  const [factory, setFactory] = useState([]);
  

  useEffect(() => {
    async function getCompanies() {
      window.scrollTo(0, 0);
      const companiesData = [];
      // กรอง favs ที่มี customerId ตรงกับ user.id
      const filteredFavs = favs.filter((fav) => fav.customerId === user.id);

      try {
        // ใช้ Promise.all เพื่อดึงข้อมูลของบริษัทพร้อมกัน
        await Promise.all(
          filteredFavs.map(async (getFav) => {
            const response = await axios.get(
              `${url}/users/${getFav.companyId}`
            );
            companiesData.push(response.data);
          })
        );
        // หลังจากที่ดึงข้อมูลเสร็จสิ้นให้เรียก setFactory

        setFactory(companiesData);
        console.log(`userPage : ${factory}`);
      } catch (error) {
        // จัดการข้อผิดพลาดในกรณีที่เกิดข้อผิดพลาดในการดึงข้อมูลบริษัท
        console.error("Error fetching company data:", error);
      }
    }

    getCompanies();
  }, [user]);

  return (
    <div className={className}>
      {showNoti == "show" ? (
        <Noti
          url={url}
          user={user}
          setShownoti={setShownoti}
          notis={notis}
        ></Noti>
      ) : null}
      
      {showListChat == "show" ? <ListChat url={url} user={user} listChat={listChat} setShowListChat={setShowListChat} setShowChat={setShowChat} socket={socket} setRoom={setRoom}  /> : null}
      {showChat == "show" ? <Chat url={url} user={user} setShowChat={setShowChat} socket={socket} room={room} setChat={setChat} chat={chat} setRoom={setRoom} /> : null }


      <Navbar
        user={user}
        setUser={setUser}
        setShownoti={setShownoti}
        setCompares={setCompares}
        setShowListChat={setShowListChat}
        setShowChat={setShowChat}
      />
      <CardEdit user={user} information={information} />

      <div className="approved">
        <h1>สิ่งที่คุณสนใจ</h1>
        <div className="line"></div>
        {factory.length > 0 ? (
          <>
            <div className="box-category">
              <div className="name-category">โรงงาน</div>
              <div className="collect">
                {factory.map((company) =>
                  company.type == "company" ? (
                    <BoxData
                      key={company.id}
                      user={user}
                      url={url}
                      item={company}
                      setFavs={setFavs}
                      compares={compares}
                      setCompares={setCompares}
                    />
                  ) : null
                )}
              </div>
            </div>

            <div className="box-category">
              <div className="name-category">ร้านขายผ้า</div>
              <div className="collect">
                {factory.map((company) =>
                  company.type == "frabic shop" ? (
                    <BoxData
                      key={company.id}
                      user={user}
                      url={url}
                      item={company}
                      setFavs={setFavs}
                      compares={compares}
                      setCompares={setCompares}
                    />
                  ) : null
                )}
              </div>
            </div>
            <div className="box-category">
              <div className="name-category">ดีไซน์เนอร์</div>
              <div className="collect">
                {factory.map((company) =>
                  company.type == "designer" ? (
                    <BoxData
                      key={company.id}
                      user={user}
                      url={url}
                      item={company}
                      setFavs={setFavs}
                      compares={compares}
                      setCompares={setCompares}
                    />
                  ) : null
                )}
              </div>
            </div>
          </>
        ) : null}
      </div>
      {compares.length != 0 ? (
        <PopupCompare url={url} compares={compares} setCompares={setCompares} />
      ) : null}
      <Footer />
    </div>
  );
};

export default styled(ProfileUser)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  background-color: black;
  padding-top: 10px;
  font-family: "Anuphan";

  .navbar {
    position: absolute;
    width: 85%;
    height: 75px;
    z-index: 2;
    background-color: white;
    border-radius: 100px;
    left: 90px;
  }
  .approved {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .approved h1 {
    font-size: 80px;
    font-weight: 600;
    color:white;
    margin-bottom: 40px;
  }
  .approved .line {
    border-bottom: 4px solid white;
    width: 70%;
    margin: 20px 0px 50px 0px;
  }
  .box-category {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0px
  }
  .name-category {
    font-family: "Anuphan";
    font-size: 35px;
    font-weight: 500;
    background-color: white;
    border-radius: 50px;
    border: 1px solid black;
    width: fit-content;
    height: fit-content;
    color: black;
    margin: 50px;
    padding: 15px 60px;
    box-shadow: rgb(46 65 240 / 40%) 5px 5px, rgba(46, 65, 240, 0.3) 10px 10px, rgba(46, 65, 240, 0.2) 15px 15px, rgba(46, 65, 240, 0.1) 20px 20px, rgba(46, 65, 240, 0.05) 25px 25px;
  }
  .collect {
    display: flex;
    flex-wrap: wrap;
    margin-left: 20px;
    justify-content: center;
    width: 100%;
    align-items: center;
  }
`;
