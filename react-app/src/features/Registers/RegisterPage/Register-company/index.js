import React, { useState } from "react";
import Button from "../../../Component/Botton";
import InputField from "../../../Component/input";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const Backgroud = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap');
  background-color: #000;
  font-family: "Anuphan";
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledButton = styled.div`
  display: flex;
  font-family: "Anuphan";
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: #141415;
  width: 288.75px;
  padding: 8.663px 5.775px;
  border-radius: 8.663px;
  cursor: pointer;
  margin-top: 20px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  font-family: "Anuphan";
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

const Stylep = styled.div`
  p {
    margin: 10px;
    font-family: "Anuphan";
    text-align: center;
    font-size: 17.55px;
  }
`;
const StyleContainer = styled.div`
  .container {
    font-family: "Anuphan";
    display: flex;
    flex-direction: column;
    width: 95%;
    max-width: 1110px;
    background-color: #ffffff;
    border-radius: 54px;
    padding: 30px;
    padding-top: 20px;
    box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    margin: 10px;
    border-radius: 20px;
    width: 50%;
    font-family: "Anuphan";
    height: auto;
    max-width: 100%;
    max-height: none;
  }
`;
const Styleprevious = styled.div`
  .previous {
    text-decoration: none;
    display: inline-block;
    padding: 8px 16px;
    background-color: #f1f1f1;
    color: black;
    border-radius: 50%;
  }

  .previous:hover {
    background-color: #ddd;
    color: black;
  }
`;
const Styledinput = styled.div`
  .input-container2 {
    display: flex;
    font-family: "Anuphan";
    height: 34.65px;
    padding: 5.775px 8.663px;
    align-items: center;
    gap: 10.425px;
    border-radius: 8.663px;
    border: 0.722px solid #dbdbdb;
    margin-top: 5px;
  }

  .input-container2 input {
    color: #807d7d;
    font-family: "Anuphan";
    font-size: 14.55px;
    line-height: 17.325px;
    border: none;
    outline: none;
  }
`;
const StyledSelect = styled.div`
.select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 14px;
    background-color: #fff;
    font-family: "Anuphan";
    color: #333;
    appearance: none; 
}

.select:hover {
    border-color: #666;
    font-family: "Anuphan";
}

.select:focus {
    outline: none;
    border-color: #000000;
    box-shadow: 0 0 5px rgba(77, 77, 77, 0.5);
    font-family: "Anuphan";
}

.select::after {
    content: '\25BC'; /* Down arrow character */
    font-family: "Anuphan";
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 12px;
    color: #777;
    pointer-events: none;
}
`;

const Styledtextinput = styled.div`
  .textinput {
    color: #807d7d;
    font-family: "Anuphan";
    font-size: 13.55px;
    font-weight: 400;
    line-height: 11.325px;
    border: none;
    font-family: "Anuphan";
    outline: none;
  }
`;

const StyledGroupline = styled.div`
  .group-underline {
    display: flex;
  
    justify-content: center;
  }
`;
const Styleline1 = styled.div`
  .underline {
    width: 50%;
    font-family: "Anuphan";
    height: 1.444px;
    background: #000;
  }
`;

const Styleline2 = styled.div`
  .underline2 {
    width: 50%;
    font-family: "Anuphan";
    height: 1.444px;
    background: #dbdbdb;
  }
`;

const StyleAddtext = styled.div`
  .additional-text {
    font-size: 13.55px;
    display: flex;
    justify-content: center;
    font-family: "Anuphan";
    margin-top: 10px;
  }
`;

const Styledtext1 = styled.div`
  .text1 {
    margin-right: 5px;
    font-size: 13.55px;
    font-family: "Anuphan";
    color: #807d7d;
  }
`;

const Styledh1 = styled.div`
  h1 {
    font-size: 43px;
    font-weight: bold;
    margin: 10px;
    font-family: "Anuphan";
    text-align: center;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: your-desired-color;
  font-family: "Anuphan"; 
`;
const right = styled.div`
  .right-content {
    width: 600px;
    max-height: 420px;
    border-radius: 40px;
    flex-shrink: 0;
    display: flex;
    margin-left: 15px;
    justify-content: center;
    align-items: center;
    background: url("https://happiestcamper.com/wp-content/uploads/2020/09/DSC03551.jpg") -228.551px -176.433px /
      150.681% 182.082% no-repeat;
  }
`;

const RegisterCompany = ({ companies, setUser, url }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState("");
  const [type, setType] = useState("frabic shop");
  const [juristicNumber, setJuristicNumber] = useState("");
  const [JuristicFile, setJuristicFile] = useState("");
  const navigate = useNavigate();


  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      if (file.size <= 70 * 1024) { // ตรวจสอบขนาดของไฟล์ (70KB)
        const reader = new FileReader();
        reader.onload = function (e) {
          const imagePath = e.target.result;
          setJuristicFile(imagePath); // เก็บ URL ของภาพใน state
        };
        reader.readAsDataURL(file);
        
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "ภาพใหญ่ไป",
          text: 'กรุณาลองใหม่อีกครั้ง',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  }

  

  async function submit() {
    if (
      !username ||
      !email ||
      !password ||
      !comfirmPassword ||
      !juristicNumber ||
      !JuristicFile
    ) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "โปรดกรอกข้อมูลให้ครบ",
        text: 'กรุณาลองใหม่อีกครั้ง',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    if (password !== comfirmPassword) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "รหัสผ่านไม่ตรงกัน",
        text: 'กรุณาลองใหม่อีกครั้ง',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    if (!email.includes("@")) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "โปรดกรอกอีเมลที่ถูกต้อง",
        text: 'กรุณาลองใหม่อีกครั้ง',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    try {
      const findUser = companies.find(
        (user) => user.email == email || user.username == username
      );

      if (findUser) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "มีชื่อผู้ใช้งานหรืออีเมลนี้อยู่แล้ว",
            text: 'กรุณาลองใหม่อีกครั้ง',
            showConfirmButton: false,
            timer: 2000,
          });
          
      } else {
        const newUser = {
          username: username,
          email: email,
          password: password,
          type: type,
          juristicNumber: juristicNumber,
          JuristicFile: JuristicFile,
          status: "waiting",
          pack: 0,
        };

        const response1 = await axios.post(`${url}/informations`, "");
        const response = await axios.post(`${url}/users`, {
          ...newUser,
          informationId: response1.data.id,
        });

        await axios.post(`${url}/notis`, {
          companyId: response.data.id,
          icon: "login.png",
          type: "wait regis",
          description: "รอตรวจสอบข้อมูลเพื่อดำเนินการเป็นสมาชิก",
        });

        //////////////////////*************************/////////////////////////////

        await axios.post(`${url}/listChats`, {
          userId: 1,
          companyId: response.data.id,
          room: Number(`1${response.data.id}`),
        });
        await axios.post(`${url}/listChats`, {
          userId: response.data.id,
          companyId: 1,
          room: Number(`1${response.data.id}`),
        });

        await axios.post(`${url}/listChats`, {
          userId: response.data.id,
          companyId: 0,
          room: response.data.id,
        });
        ///////////////////////////////////////////////////////////////////////////

        Swal.fire({
          position: "center",
          icon: "success",
          title: "สมัครบัญชีเรียบร้อย",
          text: 'ยินดีต้อนรับ',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate("/login");
        });
        console.log("User registered successfully", response.data);
      }
    } catch (error) {
      console.error(`Register error : ${error}`);
    }
  }

  return (
    <Backgroud>
      <StyleContainer>
        <div className="container">
          <div className="left-content">
            <Styleprevious>
              <Link to="/choose-login-page" className="previous">
                &#8249;
              </Link>
            </Styleprevious>
            <Styledh1>
              <h1>สร้างบัญชี</h1>
            </Styledh1>

            <Stylep>
              <p>ผู้ใช้งาน</p>
            </Stylep>

            <StyledGroupline>
              <div className="group-underline">
                <Styleline1>
                  <div className="underline"></div>
                </Styleline1>
                <Styleline2>
                  <div className="underline2"></div>
                </Styleline2>
              </div>
            </StyledGroupline>

            <InputField
              placeholder="ใส่อีเมล์"
              type="text"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />

            <InputField
              placeholder="รหัสผ่าน"
              type="password"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.8686 10.6558C6.43086 10.6558 5.26383 9.48879 5.26383 8.05105C5.26383 6.61332 6.43086 5.44629 7.8686 5.44629C9.30633 5.44629 10.4734 6.61332 10.4734 8.05105C10.4734 9.48879 9.30633 10.6558 7.8686 10.6558ZM7.8686 6.34863C6.93016 6.34863 6.16618 7.11262 6.16618 8.05105C6.16618 8.98949 6.93016 9.75348 7.8686 9.75348C8.80704 9.75348 9.57102 8.98949 9.57102 8.05105C9.57102 7.11262 8.80704 6.34863 7.8686 6.34863Z"
                    fill="#828C97"
                  />
                  <path
                    d="M7.86857 13.4772C5.60669 13.4772 3.47115 12.1538 2.00334 9.85578C1.36568 8.8632 1.36568 7.245 2.00334 6.24641C3.47716 3.94844 5.61271 2.625 7.86857 2.625C10.1244 2.625 12.26 3.94844 13.7278 6.24641C14.3654 7.23898 14.3654 8.85719 13.7278 9.85578C12.26 12.1538 10.1244 13.4772 7.86857 13.4772ZM7.86857 3.52734C5.92552 3.52734 4.06669 4.69438 2.76732 6.73367C2.31615 7.4375 2.31615 8.66469 2.76732 9.36852C4.06669 11.4078 5.92552 12.5748 7.86857 12.5748C9.81162 12.5748 11.6704 11.4078 12.9698 9.36852C13.421 8.66469 13.421 7.4375 12.9698 6.73367C11.6704 4.69438 9.81162 3.52734 7.86857 3.52734Z"
                    fill="#828C97"
                  />
                </svg>
              }
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <InputField
              placeholder="ยืนยันรหัสผ่าน"
              type="password"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.8686 10.6558C6.43086 10.6558 5.26383 9.48879 5.26383 8.05105C5.26383 6.61332 6.43086 5.44629 7.8686 5.44629C9.30633 5.44629 10.4734 6.61332 10.4734 8.05105C10.4734 9.48879 9.30633 10.6558 7.8686 10.6558ZM7.8686 6.34863C6.93016 6.34863 6.16618 7.11262 6.16618 8.05105C6.16618 8.98949 6.93016 9.75348 7.8686 9.75348C8.80704 9.75348 9.57102 8.98949 9.57102 8.05105C9.57102 7.11262 8.80704 6.34863 7.8686 6.34863Z"
                    fill="#828C97"
                  />
                  <path
                    d="M7.86857 13.4772C5.60669 13.4772 3.47115 12.1538 2.00334 9.85578C1.36568 8.8632 1.36568 7.245 2.00334 6.24641C3.47716 3.94844 5.61271 2.625 7.86857 2.625C10.1244 2.625 12.26 3.94844 13.7278 6.24641C14.3654 7.23898 14.3654 8.85719 13.7278 9.85578C12.26 12.1538 10.1244 13.4772 7.86857 13.4772ZM7.86857 3.52734C5.92552 3.52734 4.06669 4.69438 2.76732 6.73367C2.31615 7.4375 2.31615 8.66469 2.76732 9.36852C4.06669 11.4078 5.92552 12.5748 7.86857 12.5748C9.81162 12.5748 11.6704 11.4078 12.9698 9.36852C13.421 8.66469 13.421 7.4375 12.9698 6.73367C11.6704 4.69438 9.81162 3.52734 7.86857 3.52734Z"
                    fill="#828C97"
                  />
                </svg>
              }
              onChange={(event) => {
                setComfirmPassword(event.target.value);
              }}
            />

            <InputField
              placeholder="ชื่อผู้ใช้"
              type="text"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />

            <Styledinput>
              <div className="input-container2">
                <Styledtextinput>
                  <div className="textinput">ประเภทธุรกิจ</div>
                </Styledtextinput>
                <StyledSelect>
                  <select
                    onChange={(event) => {
                      setType(event.target.value);
                    }}
                  >
                    <option value="ofrabic shop">ร้านขายผ้า</option>
                    <option value="company">โรงงาน</option>
                    <option value="designer">ผู้ออกแบบ</option>
                  </select>
                </StyledSelect>
              </div>
            </Styledinput>

            <InputField
              placeholder="ทะเบียนนิติบุคคลเลขที่"
              type="text"
              onChange={(event) => {
                setJuristicNumber(event.target.value);
              }}
            />

            <Styledinput>
              <div className="input-container2">
                <Styledtextinput>
                  <div className="textinput">
                    สำเนารับรองหนังสือทะเบียนนิติบุคคล
                  </div>
                </Styledtextinput>

                <input
                  className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="small_size"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
            </Styledinput>

            <StyledButtonContainer>
              <StyledButton>
                <Button text="ยืนยัน" onClick={submit} />
              </StyledButton>
            </StyledButtonContainer>

            <StyleAddtext>
              <div className="additional-text">
                <div className="text1">คุณมีบัญชีอยู่แล้ว</div>
                <StyledLink to="/login" className="text2">
                  เข้าสู่ระบบ
                </StyledLink>
              </div>
            </StyleAddtext>

            <right>
              <div className="right-content">
                <div className="right-img"></div>
              </div>
            </right>
          </div>
        </div>
      </StyleContainer>
    </Backgroud>
  );
};

export default RegisterCompany;
