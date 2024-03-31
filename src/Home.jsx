import { useState } from 'react';
import './App.css';
import './apps.css'
import Navbars from './components/navbar';
import { useEffect } from 'react';
import Newpost from './components/newpost';
import IndividualIntervalsExample from './caurosel';
//import Footer from './components/footer';

function Home(){
const [file,setFile]=useState();
const [image,setImage] = useState()
useEffect(()=>{
  const getImage = ()=>{
    const img = new Image()
    img.src = URL.createObjectURL(file);
    img.onload =()=>{
    setImage({
      url : img.src,
      width : img.width,
      height : img.height
    })
  }
  }
  file && getImage()
},[file]);

  return (
    <div>
     <Navbars></Navbars>
     {image ? (<Newpost image={image}/>):(
     <div className='newPostCard'>
      <div className='addpost'>
      <h1>𝙲𝚊𝚝𝚌𝚑 𝚝𝚑𝚎  𝙴𝚡𝚙𝚛𝚎𝚜𝚜𝚒𝚘𝚗𝚜  𝚘𝚗 𝙸𝚖𝚊𝚐𝚎𝚜</h1>
        <div>
      <br></br>
          <label htmlFor='file'>
          <img
                  className="addImg"
                  src="https://www.clker.com/cliparts/L/t/3/i/z/1/upload-button-png-hi.png" width={"80px"}
                  alt=""
                />
               
          </label>
          <input
           onChange={(e) => setFile(e.target.files[0])}
           id="file" style={{display:"none"}} type="file"/>
        </div>

      </div>
      <IndividualIntervalsExample></IndividualIntervalsExample>
     </div>
     
     )}
     
    </div>
  
  );
     }

export default Home