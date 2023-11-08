import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../Component/Navbar";
import CardNewData from "../../Component/CardProfile/CardNewData";
import PhotoProductEdit from "../../Component/Product/PhotoProductEdit";
import ProductSaleEdit from "../../Component/Product/ProductSaleEdit";
import Package from "../../Component/Package";
import Footer from "../../Component/Footer";
import { Link, useNavigate } from "react-router-dom";
import Noti from "../../Component/Noti";
import Swal from "sweetalert2";
import axios from "axios";
import ListChat from "../../Component/ListChat";
import Chat from "../../Component/Chat";

const ProfileFactoryEdit = ({
  user,
  url,
  setUser,
  companies,
  favs,
  setFavs,
  information,
  setInformation,
  products,
  setProducts,
  setCompares,
  setShownoti,
  showNoti,
  notis,
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
      <div className="products">
        
        <h1>สินค้าตัวอย่าง</h1>
        <div className="sale-product">
          {user.type == "company" ? (
            <Link to="/add-product-company">
              <div className="add-product">
                <p>+</p>
              </div>
            </Link>
          ) : user.type == "designer" ? (
            <Link to="/add-product-desingner">
              <div className="add-product">
                <p>+</p>
              </div>
            </Link>
          ) : user.type == "frabic shop" ? (
            <Link to="/add-product-fabric">
              <div className="add-product">
                <p>+</p>
              </div>
            </Link>
          ) : null}

          {products.length > 0
            ? products.map((product) => {
                return product.companyId === user.id ? (
                  <ProductSaleEdit
                    key={product.id}
                    url={url}
                    setProducts={setProducts}
                    product={product}
                  />
                ) : null;
              })
            : null}
        </div>
        <div className="package">
          <h1>แพ็คเกจสุดคุ้ม</h1>
        </div>
      </div>
      <div className="shop-package">
        <Package user={user}/>
      </div>
      <Footer />
    </div>
  );
};

export default styled(ProfileFactoryEdit)`
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
  .add-product {
    width: 320px;
    height: 420px;
    border: 4px dashed gray;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 40px 40px 0px;
    cursor: pointer;
  }
  .add-product p, a{
    font-size: 80px;
    font-weight: 600;
    color: gray;
    cursor: pointer;
    text-decoration: none;
  }

  .products {
    position: relative;
    height: fit-content;
    background-color: white;
    margin-bottom: 100px;
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
    flex-wrap: wrap;
    justify-content: center;
  }
  .products .package {
    position: absolute;
    transform: translate(140%, 10%);
  }
  .package h1 {
    font-size: 55px;
    font-weight: 600;
    color: white;
    width: fit-content;
    padding: 0px 25px;
    height: 100px;
    background-color: black;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
