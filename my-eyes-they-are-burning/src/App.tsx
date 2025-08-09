import { useState } from 'react';

import Post from './Post';
import EndRacism from './EndRacism';
import HAHAYOUSUCKTRYAGAIN from './HAHAYOUSUCTRYAGAIN';

import './App.css'


function App() {

  const posts = [
  {
    text: "This is a falkkin posto hav some anime biddies or smth",
    img: "../public/Luto_Edit.png",
  },
  {
    text: "yo this stream is actually fire no cap",
    img: "../public/Luto_Edit.png",
  },
  {
    text: "coding at 3am hits different tbh",
    img: "../public/Luto_Edit.png",
  },
  {
    text: "when the code actually works on first try",
    img: "../public/Luto_Edit.png",
  },
  {
    text: "chat help me debug this spaghetti code",
    img: "../public/Luto_Edit.png",
  },
  {
    text: "another day another React component",
    img: "../public/Luto_Edit.png",
  },
  {
    text: "why does CSS always gotta be so weird",
    img: "../public/Luto_Edit.png",
  },
  {
    text: "streaming and coding is the vibe honestly",
    img: "../public/Luto_Edit.png",
  },
  {
    text: "this bug has been haunting me for hours",
    img: "../public/Luto_Edit.png",
  },
  {
    text: "TypeScript really be saving my life rn",
    img: "../public/Luto_Edit.png",
  },
  {
    text: "console.log debugging best debugging don't @ me",
    img: "../public/Luto_Edit.png",
  },
  {
    text: "when you finally understand useEffect",
    img: "../public/Luto_Edit.png",
  },
  {
    text: "git commit -m 'fixed stuff hopefully'",
    img: "../public/Luto_Edit.png",
  },
  {
    text: "npm install anxiety has entered the chat",
    img: "../public/Luto_Edit.png",
  },
  {
    text: "Comic Sans makes everything better prove me wrong",
    img: "../public/Luto_Edit.png",
  }
]
  const [showModal, setShowModal] = useState(true);
  const [isLockedOut, setIsLockedOut] = useState(false);

  return (
    <div style={{background: "red"}}>
     {isLockedOut ? <HAHAYOUSUCKTRYAGAIN /> : null}
       <h1 style={{color: "yellow", fontFamily: 'Comic Sans MS'}}>THE BEST VERSION OF TWEETER/X</h1>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          {showModal ? <EndRacism onClose={setShowModal} onLOCKOUT={setIsLockedOut}></EndRacism> : <></>}
        </div>
       {posts.map((post, i) => (
        <Post key={i} text={post.text} img={post.img}></Post>
       ))}
    </div>
  )
}

export default App;
