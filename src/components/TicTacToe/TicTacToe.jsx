import React, { useRef, useState } from 'react';
import './TicTacToe.css';
import circleicon from '../assests/circle.png';
import crossicon from '../assests/cross.png';

const TicTacToe = () => {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleref = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);

  const box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
  const victory = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const toggle = (e, num) => {
    if (lock || data[num] !== "") {
      return;
    }
    const newData = [...data];
    newData[num] = count % 2 === 0 ? "X" : "O";
    setData(newData);
    e.target.innerHTML = `<img src=${newData[num] === "X" ? crossicon : circleicon} alt=${newData[num] === "X" ? "cross" : "circle"} />`;
    setCount(count + 1);
    checkWin(newData);
  };

  const checkWin = (newData) => {
    for (let [a, b, c] of victory) {
      if (newData[a] && newData[a] === newData[b] && newData[a] === newData[c]) {
        won(newData[a]);
        return;
      }
    }
    if (!newData.includes("")) {
      titleref.current.innerHTML = "Game Draw!";
      setLock(true);
    }
  };

  const won = (winner) => {
    setLock(true);
    titleref.current.innerHTML = `${winner === "X" ? "Cross" : "Circle"} Wins`;
  };

  const reset = () => {
    setLock(false);
    setData(["", "", "", "", "", "", "", "", ""]);
    titleref.current.innerHTML = "";
    box_array.forEach(box => {
      if (box.current) {
        box.current.innerHTML = "";
      }
    });
    setCount(0);
  };

  return (
    <div className="container">
      <h1 className="title">Tic Tac Toe by <span>Teresha</span></h1>
      <div className="board">
        <div className="row">
          <div className="boxes" onClick={(e) => toggle(e, 0)} ref={box1}></div>
          <div className="boxes" onClick={(e) => toggle(e, 1)} ref={box2}></div>
          <div className="boxes" onClick={(e) => toggle(e, 2)} ref={box3}></div>
        </div>
        <div className="row">
          <div className="boxes" onClick={(e) => toggle(e, 3)} ref={box4}></div>
          <div className="boxes" onClick={(e) => toggle(e, 4)} ref={box5}></div>
          <div className="boxes" onClick={(e) => toggle(e, 5)} ref={box6}></div>
        </div>
        <div className="row">
          <div className="boxes" onClick={(e) => toggle(e, 6)} ref={box7}></div>
          <div className="boxes" onClick={(e) => toggle(e, 7)} ref={box8}></div>
          <div className="boxes" onClick={(e) => toggle(e, 8)} ref={box9}></div>
        </div>
        <h1 className="title1" ref={titleref}></h1>
      </div>
      <button className="reset" onClick={reset}>Reset</button>
    </div>
  );
};

export default TicTacToe;



// import React,{useRef, useState} from 'react'
// import "./TicTacToe.css"
// import circleicon from "../assests/circle.png"
// import crossicon from "../assests/cross.png"

// let data=["","","","","","","","",""];

// const TicTacToe = () => {
//     let[count,setCount]=useState(0);
//     let[lock,setLock]=useState(false);
//     let titleref=useRef(null);
//     let box1=useRef(null);
//     let box2=useRef(null);
//     let box3=useRef(null);
//     let box4=useRef(null);
//     let box5=useRef(null);
//     let box6=useRef(null);
//     let box7=useRef(null);
//     let box8=useRef(null);
//     let box9=useRef(null);

//     let box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9];


//     const toggle=(e,num)=>{
//         if(lock){
//             return 0;
//         }
//         if(count%2===0){
//             e.target.innerHTML=`<img src=${crossicon} alt="cross" />`;
//             data[num]="X";
//             setCount(++count);
//         }
//         else{
//             e.target.innerHTML=`<img src=${circleicon} alt="circle" />`;
//             data[num]="O";
//             setCount(++count);
//         }
//         checkWin();
//     }


//     const checkWin=()=>{
//         if(data[0]===data[1]&&data[1]===data[2]&&data[2]!==""){
//             won(data[2])
//         }
//         else if(data[3]===data[4]&&data[4]===data[5]&&data[5]!==""){
//             won(data[5])
//         }
//         else if(data[6]===data[7]&&data[7]===data[8]&&data[8]!==""){
//             won(data[8])
//         }
//         else if(data[0]===data[3]&&data[3]===data[6]&&data[6]!==""){
//             won(data[6])
//         }
//         else if(data[1]===data[4]&&data[4]===data[7]&&data[7]!==""){
//             won(data[7])
//         }
//         else if(data[2]===data[5]&&data[5]===data[8]&&data[8]!==""){
//             won(data[8])
//         }
//         else if(data[0]===data[4]&&data[4]===data[8]&&data[8]!==""){
//             won(data[8])
//         }
//         else if(data[0]===data[1]&&data[1]===data[2]&&data[2]!==""){
//             won(data[2])
//         }
//         else if(data[2]===data[4]&&data[4]===data[6]&&data[6]!==""){
//             won(data[6])
//         }
//     }

//     const won=(winner)=>{
//         setLock(true);
//         if(winner==="X"){
//             titleref.current.innerHTML="Cross Wins"
//         }
//         else{
//             titleref.current.innerHTML="Circle Wins"
//         }
       
//     }

//     const reset=()=>{
//         setLock(false);
//         data=["","","","","","","","",""];
//         titleref.current.innerHTML="";
//         box_array.map((e)=>{e.current.innerHTML=""})


//     }
//   return (
//     <div className="container">
//         <h1 className="title">
//             Tic Tac Toe by <span>Teresha</span> </h1>
//             <div className="board">
//                 <div className="row1">
//                     <div className="boxes" onClick={(e)=>{toggle(e,0)}} ref={box1}></div>
//                     <div className="boxes" onClick={(e)=>{toggle(e,1)}} ref={box2}></div>
//                     <div className="boxes" onClick={(e)=>{toggle(e,2)}} ref={box3}></div>
//                 </div>
//                 <div className="row2">
//                     <div className="boxes" onClick={(e)=>{toggle(e,3)}} ref={box4}></div>
//                     <div className="boxes" onClick={(e)=>{toggle(e,4)}} ref={box5}></div>
//                     <div className="boxes" onClick={(e)=>{toggle(e,5)}} ref={box6}></div>
//                 </div>
//                 <div className="row3">
//                     <div className="boxes" onClick={(e)=>{toggle(e,6)}} ref={box7}></div>
//                     <div className="boxes" onClick={(e)=>{toggle(e,7)}} ref={box8}></div>
//                     <div className="boxes" onClick={(e)=>{toggle(e,8)}} ref={box9}></div>
//                 </div>
//                 <h1 className="title1" ref={titleref}></h1>

//             </div>
//         <button className='reset' onClick={()=>{reset()}}>Reset</button>
//     </div>
//   )
// }

// export default TicTacToe