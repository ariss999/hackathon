import styled from "styled-components";
import BoxData from "../Component/BoxData";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import PopupCompare from "../Component/PopupCompare";
import Noti from "../Component/Noti";
import ListChat from "../Component/ListChat";
import { Link, useNavigate, useParams } from "react-router-dom";
import Chat from "../Component/Chat";
import NavbarSearch from "../Component/NavbarSearch";
import Swal from "sweetalert2";
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import NavbarAdmin from "./NavbarAdmin";
import BoxUser from "./BoxUser";

const AdminLookTotalData = ({
  url,
  user,
  setUser,
  setFavs,
  companies,
  compares,
  setCompares,
  setShownoti,
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
  setFilterProduct,
  products,
  packages,
  className,
}) => {
  const image = require("../../image Hackathon/image/background.jpeg");
  const navigate = useNavigate();
  const { type } = useParams();
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [dataPack, setDataPack] = useState([]);

  useMemo(() => {
    async function getCompanies() {
      const newCompanies = [];
      packages.forEach((product) => {
        const findCompany = companies.find(
          (company) =>
            company.id === product.companyId && product.status == "cancel"
        );
        if (findCompany) {
          newCompanies.push(findCompany);
        }
      });

      setDataPack((prevNewCompanys) => [...prevNewCompanys, ...newCompanies]);
    }
    getCompanies();
  }, [packages]);

  function login() {
    navigate("/login");
  }

  function setProduct() {
    setFilterProduct(products);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function findData(search) {
      if (search === "" || search === null || search === undefined) {
        setData(companies);
      } else {
        setData([]);
        for (const item of companies) {
          try {
            const res = await axios.get(`${url}/informations/${item.id}`);
            if (res.data.name.toLowerCase().includes(search.toLowerCase())) {
              setData((prevData) => [...prevData, item]);
            }
          } catch (error) {
            console.error("Error fetching data for item", item.id, error);
          }
        }
      }
    }

    findData(search);
  }, [search]);

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

      <NavbarAdmin
        user={user}
        setUser={setUser}
        setShownoti={setShownoti}
        setCompares={setCompares}
        setShowListChat={setShowListChat}
        search={search}
        setSearch={setSearch}
        setShowChat={setShowChat}
      />

      <div className="title-header">
        {type == "company" ? (
          <h1>ผู้ประกอบการ</h1>
        ) : type == "user" ? (
          <h1>ผู้ใช้งาน</h1>
        ) : type == "package" ? (
          <h1>ซื้อแพคเก็จไม่ผ่าน</h1>
        ) : (
          <h1>ลงทะเบียนไม่ผ่าน</h1>
        )}

        <div id="line"></div>
      </div>

      <div className="box-btn">
        <div className="show">
          {type == "regis"
            ? data
                .filter((company) => company.status == "cancel")
                .map((company) => (
                  <BoxUser
                    key={company.id}
                    user={user}
                    url={url}
                    item={company}
                    type={""}
                    
                  />
                ))
            : type == "company"
            ? data
                .filter((company) => company.status == "company")
                .map((company) => (
                  <BoxUser
                    key={company.id}
                    user={user}
                    url={url}
                    item={company}
                    type={""}
                    
                  />
                ))
            : type == "user"
            ? data
                .filter((company) => company.status == "customer")
                .map((company) => (
                  <BoxUser
                    key={company.id}
                    user={user}
                    url={url}
                    item={company}
                    type={""}
                    
                  />
                ))
            : type == "package"
            ? dataPack.map((company) => (
                <BoxUser
                  key={company.id}
                  user={user}
                  url={url}
                  item={company}
                  type={"pack"}
                  
                />
              ))
            : null}
        </div>
      </div>
      {compares.length != 0 ? (
        <PopupCompare url={url} compares={compares} setCompares={setCompares} />
      ) : null}
      <Footer />
    </div>
  );
};
export default styled(AdminLookTotalData)`
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
