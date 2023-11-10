import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

const HelpmeFactorythree = ({ className }) => {

    return (
        <div className={className}>
            <body>
            <div className="content">
                <div className="container">
                    <h1>Factory</h1>
                    <div className="group-underline">
                        <div className="underline"></div>
                        <div className="underline2"></div>
                    </div>
                    <Link to="/" className="previous"> &#8249;</Link>
                    <div className="group-container">
                        <div className="container-inside1">
                            
                            <div className="groupButton">
                                <Link to="/HelpmeFactoryOne">
                                <button className="button2">หมวดหมู่</button></Link>
                                <Link to="/HelpmeFactoryTwo">
                                <button className="button2">งานปักหรือสกรีน</button></Link>
                                <Link to="/HelpmeFactoryThree">
                                <button className="button1">เนื้อผ้า</button></Link>
                            
                            </div>
                        </div>
                        <div className="container-inside2">
                            <div className="grouph2">
                                <h2>สินค้าของคุณมีลักษณะเป็นแบบใด</h2>
                            </div>
                            <div className="groupButton1">
                                <button className="selectlong"> <span>ทางสายผลิตมีเนื้อผ้าที่เหมาะสมให้เลือก (รับทำเฉพาะผ้าที่มีในสายผลิตเท่านั้น)</span> </button>
                                
                            </div>
                            <div className="groupButton1">
                                <button className="selectlong"> <span>ทางสายผลิตมีเนื้อผ้าที่เหมาะสมให้เลือก (สามารถนำผ้ามาทำกับสายผลิตได้)</span></button>

                            </div>
                            <div className="groupButton1">
                                <button className="select"> <span>ต้องนำผ้ามาให้สายผลิตเท่านั้น</span> </button>
                            </div>
                           
                            <div className="groupButton2">
                                <button className="select2"> <span>ข้าม</span></button>
                                <button className="select2"> <span>สำรวจ</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </body>
        </div>
    );
};



    export default styled(HelpmeFactorythree)`
    @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");

    background-color: rgba(198, 204, 215, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
   
    
   
    
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-size: 40px;
        font-weight: bold;
        text-align: center;
        font-family: "Lora";
    }
    .group-underline{
        display: flex;
        justify-content: center

    }

    .underline {
        width: 430.375px;
        height: 1.444px;
        background: #000;
        margin-bottom:25px;
    }
    
    .container {
        width: 1110px;
        height: 540px;
        background-color: #ffffff;
        border-radius: 54px;
        display: flex;
        flex-wrap: wrap;
        align-content: space-around;
        flex-direction: column;
        box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.4);
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        margin-bottom:75px;
    }
    .group-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }

    .container-inside1{
        border-radius: 30px;
        background: #C6CCD7;
        width:800px;
        height: 15%;
        flex-shrink: 0;
        margin-top:15px; 
        
    }



    .groupButton{
        display:flex;
        justify-content: space-around
    }

    button.button1
    {
        width: 177px;
        height: 38px;
        flex-shrink: 0;
        border-radius: 20px;
        background: #333A56;border-radius: 20px;
        background: #333A56;
        margin-top:18px;
        color: #FFF;
        text-align: center;
        font-family: 'Lora', serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        border: none;
    }

    button.button2
    {
        width: 177px;
        height: 38px;
        flex-shrink: 0;
        border-radius: 20px;
        background: #C6CCD7;border-radius: 20px;
        background: #C6CCD7;
        margin-top:18px;
        color: #333A56;
        text-align: center;
        font-family: 'Lora', serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        border: none;
    }

    button.button2:hover
    {
        width: 177px;
        height: 38px;
        flex-shrink: 0;
        border-radius: 20px;
        background: #333A56;border-radius: 20px;
        background: #333A56;
        margin-top:18px;
        color: #FFF;
        text-align: center;
        font-family: 'Lora', serif; 
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        border: none;
    }


    .container-inside2{
        width: 1110px;
        height: 90%;
        border-radius: 50px;  
        margin-top:20px;  
        box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.4);
        background: #333A56;
        flex-shrink: 0;
    }

    .grouph2{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
    }

    h2{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        align-items: center;
        color:#fff;
        font-family: "lora";
        font-weight: 500;
    }

    /*for dropdrow*/
    .dropbtn {
        background-color: rgb(76, 78, 175);
        color: white;
        padding: 16px;
        font-size: 16px;
        border: none;
        cursor: pointer;
    }
    .dropbtn:hover, .dropbtn:focus {
        background-color: #4f3e8e;
    }
    .searchField {
        box-sizing: border-box;
        font-size: 16px;
        padding: 14px 20px 12px 45px;
        border: none;
        border-bottom: 1px solid #ddd;
    }
    .searchField:focus {outline: 3px solid #ddd;}
    .dropdown {
        position: relative;
        display: inline-block;
    }
    .dropdownList {
        display: none;
        position: absolute;
        background-color: #f6f6f6;
        min-width: 230px;
        overflow: auto;
        border: 1px solid #ddd;
        z-index: 2x ;
    }
    .dropdownList a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }
    .dropdown a:hover {background-color: #ddd;}
    .show {display: block;}
    

    .groupButton1{
        display:flex;
        justify-content: space-around;
        margin-top:50px;
    }

    .groupButton2{
        display:flex;
        align-content: center;
        justify-content: center;
        margin-top:50px;
    }

    button.select{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        border-radius: 20px;
        width: 145px;
        height: 48px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        background: #FFFFFF;
        border: none;
    }

    button.select:hover{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        border-radius: 20px;
        width: 145px;
        height: 48px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        background: #C6CCD7;
        border: 2px solid #fff;
    }
    
    
    button.select span {
        color: #000;
        text-align: center;
        font-family: 'Lora', serif; 
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }

    button.selectlong{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        border-radius: 20px;
        width: 545px;
        height: 48px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        background: #FFFFFF;
        border: none;
    }

    button.selectlong:hover{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        border-radius: 20px;
        width: 545px;
        height: 48px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        background: #C6CCD7;
        border: 2px solid #fff;
    }
    
    
    button.selectlong span {
        color: #000;
        text-align: center;
        font-family: 'Lora', serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
    
    button.select2{
        margin-left:15px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        border-radius: 20px;
        width: 145px;
        height: 48px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        background: #C6CCD7;
        padding:0px;
        border: none;
    }

    button.select2:hover{
        margin-left:15px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        border-radius: 20px;
        width: 145px;
        height: 48px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        background: #000;
        padding:0px;
        
    }
    button.select2 span {
        color: #000;
        text-align: center;
        font-family: 'Lora', serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }

    button.select2:hover span {
        color: #fff ;
        text-align: center;
        font-family: 'Lora', serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
    .previous {
        text-decoration: none;
        display: inline-block;
        padding: 8px 16px;
        background-color: #f1f1f1;
        color: black;
        border-radius: 50%;
        position: absolute;
        top: 20px;
        left: 40px;
    }

    .previous:hover {
        background-color: #ddd;
        color: black;
    }
`;

