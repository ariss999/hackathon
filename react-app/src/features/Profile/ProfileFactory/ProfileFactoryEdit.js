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
      {showListChat == "show" ? <ListChat setShowListChat={setShowListChat} setShowChat={setShowChat} /> : null}

{showChat == "show" ? <Chat setShowChat={setShowChat}/> : null }

      <Navbar
        user={user}
        setUser={setUser}
        setShownoti={setShownoti}
        setCompares={setCompares}
        setShowListChat={setShowListChat}
      />

      <CardNewData
        user={user}
        url={url}
        information={information}
        setInformation={setInformation}
      />
      <div className="products">
        <PhotoProductEdit
          url={url}
          information={information}
          setInformation={setInformation}
        />
        <h1>Product</h1>
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
          <h1>Package</h1>
        </div>
      </div>
      <div className="shop-package">
        <Package />
      </div>
      <Footer />
    </div>
  );
};

export default styled(ProfileFactoryEdit)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  background-color: #c6ccd7;
  padding-top: 10px;

  .add-product {
    width: 420px;
    height: 520px;
    border: 4px dashed gray;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 20px 30px 0px;
    cursor: pointer;
  }
  .add-product p {
    font-size: 80px;
    font-weight: 600;
    color: gray;
    cursor: pointer;
  }

  .products {
    position: relative;
    height: fit-content;
    background-color: white;
    margin-top: 100px;
    margin-bottom: 100px;
    padding: 120px 70px 70px 70px;
    border-radius: 100px;
  }
  .products h1 {
    font-size: 120px;
    font-weight: 600;
    color: #333a56;
    text-align: center;
  }
  .sale-product {
    display: flex;
    justify-content: center;
  }
  .products .package {
    position: absolute;
    transform: translate(190%, -10%);
  }
  .package h1 {
    font-size: 55px;
    font-weight: 600;
    color: white;
    width: 300px;
    height: 90px;
    background-color: black;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
