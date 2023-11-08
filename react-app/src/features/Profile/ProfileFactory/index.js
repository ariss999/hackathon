import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../Component/Navbar";
import CardEdit from "../../Component/CardProfile/CardEdit";
import PhotoProduct from "../../Component/Product/PhotoProduct";
import ProductSale from "../../Component/Product/ProductSale";
import Footer from "../../Component/Footer";
import Noti from "../../Component/Noti";
import ListChat from "../../Component/ListChat";
import Chat from "../../Component/Chat";
import axios from "axios";

const ProfileFactory = ({
  user,
  setUser,
  information,
  url,
  products,
  setProducts,
  className,
  compares,
  setCompares,
  showChat,
  setShowChat,
  setShownoti,
  showNoti,
  showListChat,
  setShowListChat,
  listChat,
  socket,
  room,
  setRoom,
  chat,
  setChat,
  notis,
}) => {
  
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
      <div className="products">

        <h1>สินค้าตัวอย่าง</h1>
        <div className="sale-product">
          {products.length > 0
            ? products.map((product) => {
                return product.companyId === user.id ? (
                  <ProductSale key={product.id} product={product} />
                ) : null;
              })
            : null}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default styled(ProfileFactory)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  background-color: black;
  padding-top: 10px;

  .navbar {
    position: absolute;
    width: 85%;
    height: 75px;
    z-index: 2;
    background-color: white;
    border-radius: 100px;
    left: 90px;
  }

  .products {
    height: fit-content;
    background-color: white;
    margin-bottom: 200px;
    padding: 120px 70px 70px 70px;
    border-radius: 100px;
  }
  .products h1 {
    font-family: "Anuphan";
    font-size: 85px;
    font-weight: 600;
    color: #333a56;
    text-align: center;
    margin-top: 0px

  }
  .sale-product {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
