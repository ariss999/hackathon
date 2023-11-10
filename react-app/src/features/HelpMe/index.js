import React, { useState } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RangeSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #4caf50;
    cursor: pointer;
  }
`;

const HelpMe = ({ className }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [filterText, setFilterText] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [sliderValue, setSliderValue] = useState(25000);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const filterDropdown = (e) => {
        const text = e.target.value;
        setFilterText(text);
        filterItems(text);
    };

    const filterItems = (text) => {
        const items = ["Cow", "Cat", "Dog", "Giraffe", "Lion", "Leopard", "Cheetah"];
        const filtered = items.filter(item => item.toLowerCase().includes(text.toLowerCase()));
        setFilteredItems(filtered);
    };

    const handleSliderChange = (e) => {
        setSliderValue(parseInt(e.target.value));
    };

    return (
        <div className={className}>
            <div className='body'>
            <div className="content">
                <div className="container">
                    <h1>Factory</h1>
                    <div className="group-underline">
                        <div className="underline"></div>
                        <div className="underline2"></div>
                    </div>
                    <div className="previous" href="#">
                        &#8249;
                    </div>
                    <div className="group-container">
                        <div className="container-inside1">
                            <div className="groupButton">
                                <button className="button1">หมวดหมู่</button>
                                <button className="button2">งานปักหรือสกรีน</button>
                                <button className="button2">เนื้อผ้า</button>
                            </div>
                        </div>
                        <div className="container-inside2">
                            <div className="grouph2">
                                <h2>Factory</h2>
                                <h2>Factory</h2>
                                <h2>Factory</h2>
                            </div>

                            <div className="dropdown">
                                <button className="dropbtn" onClick={toggleDropdown}>Dropdown</button>
                                <div id="myDropdown" className={`dropdownList ${dropdownVisible ? 'show' : ''}`}>
                                    <input
                                        type="text"
                                        placeholder="Search.."
                                        className="searchField"
                                        value={filterText}
                                        onChange={filterDropdown}
                                    />
                                    {filteredItems.map((item, index) => (
                                        <a key={index} href="#">{item}</a>
                                    ))}
                                </div>
                            </div>

                            <SliderContainer>
                                <RangeSlider
                                    type="range"
                                    min="50"
                                    max="5000"
                                    step="10"
                                    value={sliderValue}
                                    onChange={handleSliderChange}
                                />
                            </SliderContainer>

                            <p>เรทราคา : {sliderValue}</p>

                            <div className="groupButton1">
                                <button className="selectlong"> <span>ทางสายผลิตมีเนื้อผ้าที่เหมาะสมให้เลือก (รับทำเฉพาะผ้าที่มีในสายผลิตเท่านั้น)</span> </button>
                                <button className="selectlong"> <span>ทางสายผลิตมีเนื้อผ้าที่เหมาะสมให้เลือก (สามารถนำผ้ามาทำกับสายผลิตได้)</span> </button>
                                <button className="selectlong"> <span>ต้องนำผ้ามาให้สายผลิตเท่านั้น</span> </button>
                                <button className="select"> <span>กระโปรง</span> </button>
                                <button className="select"> <span>เสื้อ</span> </button>
                                <button className="select"><span>ชุดเซ็ต</span> </button>
                                <button className="select"><span>ผ้าคลุม</span></button>
                            </div>
                            <div className="groupButton1">
                                <button className="select"> <span>กระโปรง</span> </button>
                                <button className="select"> <span>เสื้อ</span> </button>
                                <button className="select"><span>ชุดเซ็ต</span> </button>
                                <button className="select"><span>ผ้าคลุม</span></button>
                                <button className="select"> <span>กางเกง</span></button>
                                <button className="select"> <span>สูท</span></button>
                                <button className="select"> <span>เดรส</span></button>
                                <button className="select"> <span>ครบวงจร</span></button>
                                <button className="select"><span>ชุดเซ็ต</span> </button>
                                <button className="select"><span>ผ้าคลุม</span></button>
                            </div>
                            <div className="groupButton2">
                                <button className="select2"> <span>ข้าม</span></button>
                                <button className="select2"> <span>ต่อไป</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};



    export default styled(HelpMe)`

    @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
        .body{
        background-color: rgba(198, 204, 215, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        font-family: "Lora";
    }

       
        
        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        h1 {
            font-size: 40px;
            font-weight: bold;
            text-align: center;
            font-family: 'Lora';
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
            height: 18%;
            flex-shrink: 0;
            margin-top:45px; 
            
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
            margin-top:13px;
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
            margin-top:13px;
            color: #333A56;
            text-align: center;
            font-family: "Lora";
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
            margin-top:13px;
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
            font-family: 'Lora';
            font-weight: 500;
            color:#fff;
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
            margin-top:20px;
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
            font-family: 'Lora';
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
