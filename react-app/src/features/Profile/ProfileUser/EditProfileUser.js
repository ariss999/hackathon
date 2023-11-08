import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../Component/Navbar";
import CardUser from "../../Component/CardProfile/CardUser";
import BoxData from "../../Component/BoxData";
import Footer from "../../Component/Footer";
import axios from "axios";
import CardNewData from "../../Component/CardProfile/CardNewData";
import Noti from "../../Component/Noti";
import ListChat from "../../Component/ListChat";
import Chat from "../../Component/Chat";

const EditProfileUser = ({
  user,
  url,
  setUser,
  companies,
  favs,
  setFavs,
  information,
  setInformation,
  setShownoti,
  showNoti,
  notis,
  setCompares,
  setShowChat,
  showChat,
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
  // useEffect(() => {
  //   async function getCompanies() {
  //     // const resCompany = await axios.get(`${url}/users`);
  //     // const resCustomerFavs = await axios.get(`${url}/customerFavs`);
  //     // setCompanies(resCompany.data);
  //     // setFavs(resCustomerFavs.data);
  //     // console.log("seccess");
  //   }
  //   getCompanies();
  // }, []);
  window.scrollTo(0, 0);

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
      
      {showListChat == "show" ? <ListChat url={url} user={user} listChat={listChat} setShowListChat={setShowListChat} setShowChat={setShowChat} socket={socket} setRoom={setRoom} /> : null}
      {showChat == "show" ? <Chat url={url} user={user} setShowChat={setShowChat} socket={socket} room={room} setChat={setChat} chat={chat} /> : null }


      <Navbar
        user={user}
        setUser={setUser}
        setShownoti={setShownoti}
        setCompares={setCompares}
        setShowListChat={setShowListChat}
        setShowChat={setShowChat}
      />

      <CardNewData
        user={user}
        url={url}
        information={information}
        setInformation={setInformation}
      />
      <Footer />
    </div>
  );
};

export default styled(EditProfileUser)`
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
    margin-bottom: 40px;
  }
  .approved .line {
    border-bottom: 4px solid black;
    width: 70%;
    margin: 20px 0px 50px 0px;
  }
  .box-category {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 150px;
  }
  .name-category {
    font-size: 50px;
    font-weight: 600;
    color: #333a56;
    width: 350px;
    height: 90px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    border: 3px solid black;
    margin: 40px 0px;
  }
  .collect {
    display: flex;
    flex-wrap: wrap;
  }
`;
