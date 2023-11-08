import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../Component/Navbar";
import BoxSlelected from "../Component/BoxCompare/BoxSlelected";
import BoxAddSelect from "../Component/BoxCompare/BoxAddSelect";
import Footer from "../Component/Footer";
import PopupCompare from "../Component/PopupCompare";
import TableCompareFabric from "../Component/TableCompareFabric";
import TableCompareDesigner from "../Component/TableCompareDesigner";
import TableCompareCompany from "../Component/TableCompareCompany";
import Noti from "../Component/Noti";
import ListChat from "../Component/ListChat";
import Chat from "../Component/Chat";
import { Link, useNavigate } from "react-router-dom";

const Compare = ({
  url,
  user,
  setUser,
  compares,
  setCompares,
  products,
  showListChat,
  showNoti,
  setShowListChat,
  setShownoti,
  notis,
  setNotis,
  setShowChat,
  showChat,
  listChat,
  socket,
  room,
  setRoom,
  chat,
  setChat,
  className,
}) => {
  const navigate = useNavigate();
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div className="title-header">
        {compares.length > 0 ? (
          compares[0].type == "company" ? (
            <h1>เปรียบเทียบ โรงงาน</h1>
          ) : compares[0].type == "frabic shop" ? (
            <h1>เปรียบเทียบ ร้านขายผ้า</h1>
          ) : (
            <h1>เปรียบเทียบ ดีไซน์เนอร์</h1>
          )
        ) : (
          navigate("/")
        )}

        <div id="line"></div>
      </div>
      <div className="box-compare">
        <div className="selected-choice">
          <div className="box-space"></div>
          {compares.map((compare) => (
            <BoxSlelected
              key={compare.id}
              url={url}
              user = {user}
              item={compare}
              compares={compares}
              setCompares={setCompares}
            />
          ))}
        </div>
        <div className="table-compare">
          {compares.length > 0 ? (
            compares[0].type == "company" ? (
              <TableCompareCompany
                url={url}
                compares={compares}
                products={products}
              />
            ) : compares[0].type == "frabic shop" ? (
              <TableCompareFabric
                url={url}
                compares={compares}
                products={products}
              />
            ) : (
              <TableCompareDesigner
                url={url}
                compares={compares}
                products={products}
              />
            )
          ) : null}
        </div>
      </div>
      <Footer />
      <div className="popup-compare">{/* <PopupCompare /> */}</div>
    </div>
  );
};

export default styled(Compare)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  position: relative;

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
    border: 2.22px solid #333a56;
  }
  .selected-choice {
    display: flex;
    justify-content: flex-start;
    margin: 90px 90px 20px 90px;
  }
  .selected-choice .box-space{
    width: 350px;
    height: 350px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .table-compare {
    display: flex;
    margin: 90px;
  }
`;
