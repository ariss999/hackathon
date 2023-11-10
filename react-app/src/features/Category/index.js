import styled from "styled-components";
import BoxData from "../Component/BoxData";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import PopupCompare from "../Component/PopupCompare";
import Noti from "../Component/Noti";
import ListChat from "../Component/ListChat";
import { Link, useNavigate } from "react-router-dom";
import Chat from "../Component/Chat";
import NavbarSearch from "../Component/NavbarSearch";
import Swal from "sweetalert2";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Category = ({
  url,
  user,
  setUser,
  setFavs,
  companies,
  type,
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
  className,
}) => {
  const image = require("../../image Hackathon/image/background.jpeg");
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  function login() {
    navigate("/login");
  }

  function setProduct(){
    setFilterProduct(products)
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

      <NavbarSearch
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
          <h1>สายผลิต</h1>
        ) : type == "fabric" ? (
          <h1>ร้านขายผ้า</h1>
        ) : (
          <h1>ดีไซน์เนอร์</h1>
        )}

        <div id="line"></div>
      </div>
      <div className="box-btn">
        {type == "company" ? (
          <p>หาสายผลิตที่คุณต้องการได้ง่ายขึ้นเพียงกดปุ่ม กลั่นกรอง</p>
        ) : type == "fabric" ? (
          <p>หาร้านขายผ้าที่คุณต้องการได้ง่ายขึ้นเพียงกดปุ่ม กลั่นกรอง</p>
        ) : (
          <p>หานักออกแบบที่คุณต้องการได้ง่ายขึ้นเพียงกดปุ่ม กลั่นกรอง</p>
        )}

        <div className="button">
          {typeof user == "object" ? (
            type == "company" ? (
              <Link to="/HelpmeFactoryOne">
                <button className="btn-help-me" onClick={setProduct}>กลั่นกรอง</button>
              </Link>
            ) : type == "fabric" ? (
              <Link to="/HelpmeFabicOne">
                <button className="btn-help-me"onClick={setProduct}>กลั่นกรอง</button>
              </Link>
            ) : (
              <Link to="/HelpmeDesignOne">
                <button className="btn-help-me"onClick={setProduct}>กลั่นกรอง</button>
              </Link>
            )
          ) : (
            <button className="btn-help-me" onClick={login}>
              กลั่นกรอง
            </button>
          )}

          {type == "company" ? (
            <Link to="/company">
              <button className="btn-see-all">ดูทั้งหมด</button>
            </Link>
          ) : type == "fabric" ? (
            <Link to="/fabric">
              <button className="btn-see-all">ดูทั้งหมด</button>
            </Link>
          ) : (
            <Link to="/designer">
              <button className="btn-see-all">ดูทั้งหมด</button>
            </Link>
          )}
        </div>

        {/* นำBoxData มาใส่ตรงนี้ได้เลยจ้า*/}
        <div className="show">
          {type == "company"
            ? data
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
            ? data
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
            : data
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
export default styled(Category)`
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
