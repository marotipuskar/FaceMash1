import React, { useState } from 'react'
// Import BrowserRouter
import { BrowserRouter } from 'react-router-dom';
// import { useState } from 'react'
// import {Link} from 'react-router-dom'
import { Link } from 'react-router-dom';
// import Image from '/public/Images'
import myfav from '/public/Images/myfav.jpg'
import Footer from './Footer';
import 'animate.css';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';
import AboutUs from './AboutUs';

const likeno="https://as2.ftcdn.net/v2/jpg/05/54/76/53/1000_F_554765365_GV87lL7ynZSvGDQt26BBsJ89hfrYfDzU.jpg"
// https://as2.ftcdn.net/v2/jpg/05/54/76/53/1000_F_554765365_GV87lL7ynZSvGDQt26BBsJ89hfrYfDzU.jpg
const likem1="https://www.freeiconspng.com/thumbs/thumbs-up-icon/blue-thumbs-up-icon-2.png"
{/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbKrfMmQvOKGgnJJL6lUKKM2gCx6plyaLlMd0mld2MoA&s" alt="" /> */}
const dislikeno ="https://www.clipartkey.com/mpngs/m/85-858721_dislike-clipart-black-and-white.png"
const dislikem1="https://cdn-icons-png.flaticon.com/128/1612/1612805.png"


function App() {
 
  // const [count, setCount] = useState(0)
  const [firstlyclicklike, setfirstlyclicklike] = useState(true)
  const [firstlyclickdislike, setfirstlyclickdislike] = useState(true)
  const[countcommentlike,setCountcommentlike]=useState(0)
  const[countcommentdislike,setCountcommentdislike]=useState(0)


  const[count, setCount]=useState(0)
  const [count1, setCount1]= useState(0)
  // const[imgsrc, setImgsrc]=useState()
  // const[imgsrc1, setImgsrc1]=useState()
  const [indexri,Setindexri]=useState(0)
  const [imagerimg,Setimagerimg]=useState("Images/wifee.png")
  const[index,setIndex]=useState(0)
  const [likecomment,Setlikecomment]=useState(likeno)
  const [dislikecomment,Setdislikecomment]=useState(dislikeno)

  const [image,setImage]=useState("Images/myfav.jpg")
  const [formData,setformData]=useState({
    fileImg:null,
    name:"",
    email:"",
    message:"",
    submissionDate:""
  })
  const [data,setData]=useState([])


  function CallPopUp(){
    console.log("call pop up function is called ")
    // var call_pop_up=document.getElementById("call-pop-up")
    var img_pop_up=document.getElementById("img-pop-up")
    const StyleImgPopUp={
      display:'block'
    };
    // img-pop-up.display
    img_pop_up.style.display="block"


  }




  function HandleInput(e){
    const {name,value, files }=e.target;
    if (name=="fileImg") {
      setformData((prev)=>({
       ...prev,fileImg:files[0] // Update fileImg state with the selected file

      }))
    }else{
      setformData(prev =>({
        ...prev,[name]:value
       }));
    }
    // setformData(prev =>({
    //  ...prev,[name]:value
    // }));
    // console.log(formData)
  }
  function HandleSubmit(e){
    const mydate=new Date().getDate();
    const mymonth=new Date().getMonth()+1;
    const myyear=new Date().getFullYear();
  // var combinedDate = myyear + "-" + (mymonth < 10 ? "0" : "") + mymonth + "-" + (mydate < 10 ? "0" : "") + mydate; 
   
    var combinedDate=myyear + "-" + mymonth + "-" + mydate;
    console.log("combinedDate:",  combinedDate)
    setformData((prev) =>({
      ...prev, 
      submissionDate:combinedDate

    }))
    console.log("data SUbmitted")
    e.preventDefault();
    setData( prev =>[...prev,formData])
    setformData({
      name: "",
      email: "",
      message:"",
      fileImg:null // Reset fileImg state to null after submission
    });
    console.log("obj data",formData)
  }
  // console.log(data)
  console.log("array data",data)

  function likecommentImage(){
    if (firstlyclicklike) {
      setCountcommentlike(countcommentlike+1)
      Setlikecomment(likem1)
      console.log("1 liked!")
    } else {
      Setlikecomment(likeno)
      setCountcommentlike(countcommentlike-1)
      console.log("2 so unliked!")
    }
    setfirstlyclicklike(!firstlyclicklike)
  // if (function likecommentImage()) {
    
  // }
  }
  
  function doublelikecommentImage(){
    // if (firstlyclicklike) {
      setCountcommentlike(countcommentlike+1)
      Setlikecomment(likem1)
      console.log("1 liked!")
  }

  function doubledislikecommentImage(){
    // if (firstlyclicklike) {
      Setdislikecomment(dislikem1)
      setCountcommentdislike(countcommentdislike+1)
      console.log("1 liked!")
    
}


  function dislikecommentImage(){
    if (firstlyclickdislike) {
      Setdislikecomment(dislikem1)
      setCountcommentdislike(countcommentdislike+1)
      console.log("1 disliked!")
    } else {
      Setdislikecomment(dislikeno)
      setCountcommentdislike(countcommentdislike-1)
      console.log("2 so undisliked!")

    }
    setfirstlyclickdislike(!firstlyclickdislike)
    // Setdislikecomment(dislikem1)
    // console.log("dislike!")
    // Setdislikecomment()
    // console.log(" dis ini")
  }
  //   for (let index = 0; index < 17 ; index++) {
  //     const elementimg = girlimg[16];
      
  //     console.log("1st run")
  //   }
  //   // setImage(elementimg)
  // }
  
  const girlimg=[
    "https://www.gethucinema.com/wp-content/uploads/2022/01/HellyShah-571.jpg",
    "https://images.pexels.com/photos/1130623/pexels-photo-1130623.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1362724/pexels-photo-1362724.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/730055/pexels-photo-730055.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/899757/pexels-photo-899757.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1066116/pexels-photo-1066116.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/17760524/pexels-photo-17760524/free-photo-of-brunette-bride-in-beautiful-wedding-dress-posing-on-terrace.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/17827869/pexels-photo-17827869/free-photo-of-young-woman-in-jeans-and-red-blouse-sitting-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/17653769/pexels-photo-17653769/free-photo-of-beautiful-young-woman-in-dress-in-park.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/17568373/pexels-photo-17568373/free-photo-of-portrait-of-a-young-woman-wearing-feather-earrings.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/19601923/pexels-photo-19601923/free-photo-of-young-woman-wearing-an-ao-dai-dress-and-holding-a-fan.jpeg?auto=compress&cs=tinysrgb&w=400"
  ]
  const dogimg=[
    "https://wallpapercave.com/wp/wp4997652.jpg",
    // "https://images.pexels.com/photos/18083302/pexels-photo-18083302/free-photo-of-beautiful-bride-tredition-indai-2023-photography-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // "https://th.bing.com/th/id/OIP.FvwlNLbMPG-F0k05AEq6VQAAAA?pid=ImgDet&w=184&h=302&c=7&dpr=1.3",
    "https://i.pinimg.com/originals/c6/71/41/c671418ccdfa6a0cd45e0a0caab0379f.jpg",
    "https://th.bing.com/th/id/OIP.9HRSVTPBoihMlaEcKDzEMQHaLJ?pid=ImgDet&w=184&h=276&c=7&dpr=1.3",
    "https://th.bing.com/th/id/OIP.FvwlNLbMPG-F0k05AEq6VQAAAA?pid=ImgDet&w=184&h=302&c=7&dpr=1.3",
    "https://th.bing.com/th/id/OIP.6BpKgnuL9N_Vf77jc9Ue0AHaLH?pid=ImgDet&w=184&h=276&c=7&dpr=1.3",
    "https://th.bing.com/th/id/OIP.OhgVnDG5sG_PGIA81lfkygAAAA?pid=ImgDet&w=184&h=276&c=7&dpr=1.3",
    "https://images.pexels.com/photos/1580270/pexels-photo-1580270.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1580270/pexels-photo-1580270.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://th.bing.com/th/id/OIP.nffTh2brWiOsLn5ySZQxhQHaLH?pid=ImgDet&w=184&h=276&c=7&dpr=1.3",
    "https://th.bing.com/th/id/OIP.zr1XN7T0daOV2kNxzH2E-QHaLG?pid=ImgDet&w=184&h=276&c=7&dpr=1.3",
    // "https://th.bing.com/th/id/OIP.zr1XN7T0daOV2kNxzH2E-QHaLG?pid=ImgDet&w=184&h=276&c=7&dpr=1.3",
    "https://th.bing.com/th/id/OIP.9DD_Mwp4UqNSaYVwotD3ggHaIb?pid=ImgDet&w=184&h=209&c=7&dpr=1.3",
    "https://th.bing.com/th/id/OIP.3hof4InR8As0xfh2cpk5cQHaM3?pid=ImgDet&w=184&h=319&c=7&dpr=1.3",
    "https://th.bing.com/th/id/OIP.LVfAnt7wWUUIMHw89BwmxAHaLH?pid=ImgDet&w=184&h=276&c=7&dpr=1.3",
    "https://th.bing.com/th/id/OIP.GjHEIPVq8hOnT3z_coAJGQHaK5?pid=ImgDet&w=184&h=270&c=7&dpr=1.3",
    "https://th.bing.com/th/id/R.13f786d9427d1b80d892b3556de61249?rik=1NwWY2CcGF976g&riu=http%3a%2f%2fwww.atozpictures.com%2fuploads%2f2017%2f12%2fabhirami-suresh-saree-orange-color-saree-beautiful-photos.jpg&ehk=EH%2fwt%2fIJMVWwa5BdM92HsFKfD16TOouBhQk9ymowMnY%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.cDRJeLiy6YntruZyg7VVmwHaLG?pid=ImgDet&w=184&h=276&c=7&dpr=1.3",
    "https://www.kollywoodzone.com/boxoffice/wp-content/uploads/2022/01/Actress-Varsha-Bollamma-at-Swathi-Muthyam-Movie-Success-Meet-Photos-02.jpg",
    // "https://th.bing.com/th/id/OIP.pRUNsdNJDmcaFk4CtLLsRAHaLH?pid=ImgDet&w=184&h=276&c=7&dpr=1.3",
    "https://www.tamilnow.com/movies/actresses/sai-pallavi/sai-pallavi-south-actress-latest-pic-2488.jpg",
    // "https://th.bing.com/th/id/OIP.VXro6A8EIn0GrH2eP1NpoQHaEK?rs=1&pid=ImgDetMain",
    // "https://th.bing.com/th/id/OIP.pJFUNrdcrTuxm5Jt3VSq3wHaKX?pid=ImgDet&w=184&h=258&c=7&dpr=1.3",
    "https://th.bing.com/th/id/OIP._UcGIdYEUyPfe_6H2-3UlgHaHh?pid=ImgDet&w=184&h=186&c=7&dpr=1.3",
    // "https://th.bing.com/th/id/OIP.-H9CrqvuDmuOzcPv4ibVCQHaE7?pid=ImgDet&w=184&h=122&c=7&dpr=1.3",
    // "https://th.bing.com/th/id/OIP.ch05Ctbj0bWretsYSO2QqAHaFj?pid=ImgDet&w=184&h=138&c=7&dpr=1.3",
    "https://i.pinimg.com/236x/c3/73/58/c373582629bfc478123605cc71a5389f.jpg?nii=t",
    

    // "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400",
    // "https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&w=400",
    // "https://images.pexels.com/photos/46505/swiss-shepherd-dog-dog-pet-portrait-46505.jpeg?auto=compress&cs=tinysrgb&w=400",
    // "https://images.pexels.com/photos/1619690/pexels-photo-1619690.jpeg?auto=compress&cs=tinysrgb&w=400",
    // "https://images.pexels.com/photos/4588047/pexels-photo-4588047.jpeg?auto=compress&cs=tinysrgb&w=400",
    // "https://images.pexels.com/photos/1458925/pexels-photo-1458925.jpeg?auto=compress&cs=tinysrgb&w=400"
  ]

  
  
  //console.log("girlimg arr", girlimg);
  function changeImgOnClick(){
    setImage(girlimg[index]);
    Setimagerimg(dogimg[indexri]);
    setIndex(index+1)
    console.log("i=",index);
    Setindexri(indexri+1)  
    console.log("i=",indexri);
    if (indexri==dogimg.length -1) {
      Setindexri(0)
      
    }
    
    if (index===girlimg.length -1 ) {
      // setImage("riya.png")
    
      setIndex(0)
      console.log("index", index)
      
    }
    
    //console.log("path =",girlimg[i]);
  }

  return (
    <>
    
          <div id='img-pop-up' className='hidden border-2 border-double border-black' >
            <div className='flex '>
            <div className='flex justify-start'><h1>User Image</h1></div>
            <div id='cross-img' className='flex justify-end'><img src="Images/iconcross.png" alt="cross image" /></div>
            <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In molestias iste cumque?</p>
            </div>
          </div>
      <nav className='place-items-center bg-rose-900 max-w-full sm:w-full h-14'>
        {/* <Link className='text-center'>FACEMASH</Link> */}
        {/* <div className='ml-[23rem]'><a className='text-center text-white' href="/" >FaceMash</a></div> */}
        <h1 className='text-center hover:decoration-blue-400 text-3xl text-white animate__animated animate__pulse'><a href="/" className='hover:text-cyan-400 hover:underline'>FACEMASH</a> </h1>
        {/* decoration-wavy */}
      </nav>
      <div className='ml-8'>
        
        <p className=' mt-6 '><span> <strong>We let for our looks? No. Will be judged on them?</strong></span></p>
        <div className=' bg-slate-50 mt-8 text-xl mb-16'><strong>Who's Better?  Click or Double click to choose </strong></div>
        {/* <span><strong>Who's Better? Click to choose </strong></span> */}
        <div className=' lg:flex justify-centre items-center   lg:w-[45rem]'>
        {/* flex w-[40rem] */}
          {/* <div className='border-rounded border-slate-100'><img className='w-65 h-130' src="riya.png" alt="" /></div> */}
          {/* sm:flex-row */}
          <div className='mb-4'>
          {/* girlimg */}
            <img className='w-[31rem] h-[26rem]' src={image} alt="" onClick={()=>{
              // imgsrc(girlimg[i])
              // girlimg
              setCount(count+1)}} onDoubleClick={()=>{setCount(count+1)}}/>
            <div className='flex mt-4'>
              <div>
                <div className='flex'>
                  <img className='mt-6' src="Images/like.png" alt="" /> 
                  <p className='ml-8 mt-12 text-5xl'>{count}</p></div>
              <p className='mt-4'> Like</p>
              </div>
              <div>
                <div className='flex'>
                  <img className='mt-10 ml-20' src="Images/dislike.png" alt="" /> 
                  <p className='ml-8 mt-12 text-5xl'>{count1}</p></div>
              <p className='mt-2 ml-20'>Dislike</p>
              </div>
            </div>
          </div>

          {/*border-2            align-text-top text-center */}
          {/* w-16 */}
          {/* sm:w-full */}
          <div className=' border-black border-2  sm:m-5 mb-4'><p className='text-center '>OR</p></div>
          <div>
          {/* https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985_1280.jpg */}
            <img className='w-[30rem] h-[26rem]' src={imagerimg} alt="" onClick={()=>{
                  setCount1(count1+1)
                  console.log("liked!")}}  onDoubleClick={()=>{
                  setCount1(count1+1)
                  console.log("liked!")}}/>
            <div className='flex mt-4'>
              <div>
                <div className='flex'>
                <img className='mt-4' src="Images/like.png" alt="" /> 
                <p className='ml-8 mt-12 text-5xl'>{count1}</p> 
                </div>
              <p className='mt-4'> Like</p>
              </div>
              <div>
                <div className='flex'>
                  <img className='mt-6 ml-20' src="Images/dislike.png" alt="" /> 
                  <p className='ml-8 mt-12 text-5xl'>{count}</p>
                </div>
              <p className='mt-2 ml-20'>Dislike</p>
              </div>
            </div>
            
             
          </div>
        </div>
        <div className='mt-8 flex justify-center'>
        {/* text-white bg-yellow-950 */}
          <button className='text-centre rounded-lg cursor-pointer border-2 border-black w-52 h-10 hover:text-white bg-orange-600 text-3xl' onClick={changeImgOnClick}>Refresh</button>
        </div>

        <div className='flex'>
        {/* <div className='flex mt-6'>
          <div><img className='mt-4' src="like.png" alt="" />like</div>
          <div className='ml-20'><img className=' mt-6' src="dislike.png" alt="" />Dislike</div>

        </div> */}
        {/* <div className='flex mt-6'>
          <div><img className='mt-4' src="like.png" alt="" />like</div>
          <div className='ml-20'><img className=' mt-6' src="dislike.png" alt="" />Dislike</div>

        </div> */}
          {/* <h1 className=' mt-20 text-7xl'>Thank YOU 😂💓</h1> */}
        </div>
        
        <div className='mt-10 place-items-center'>
        {/* w-52 h-10  */}
        <div className='flex justify-center p-2  bg-slate-400 mb-14'><h1 className='text-centre text-4xl'>Leave Your comments Below </h1></div>
          <form action="" onSubmit={HandleSubmit}>
          {/* bg-slate-50 below */}
            <div className=' bg-cyan-400 m-4 border-4 text-center'>
              <fieldset>
                <legend>
                  <div>
                    <label htmlFor="" className='text-2xl '>Upload Your Image:  </label> <br />
                    <input type="file" className='ml-32 ' name="fileImg" id="fileImgUpload" onChange={HandleInput} required />
                  </div> <br />
                  <div>
                  <label htmlFor="Name " className='text-2xl'>Name</label>: <br />
                  <input type="text" placeholder='Enter Your name'  onChange={HandleInput} value={formData.name} className='border-2 border-black rounded-lg' name="name"  required/><br /> <br />
                  </div><br />
                  <div>
                  <label htmlFor="Email" className='text-2xl'>Email</label>: <br />
                  <input type="text" placeholder='Enter Your Email' onChange={HandleInput} className='border-2 rounded-lg border-black' value={formData.email} name="email" required/><br /> <br />
                  </div><br />
                  {/* <div> */}
                  <label htmlFor="Message" className='text-2xl'>Comments </label>: <br />
                  <textarea name="message" className='border-2 border-black rounded-lg' onChange={HandleInput} cols="30" rows="4" value={formData.message} placeholder='Enter your Comment... ' required></textarea><br /><br /><br />
                  {/* </div> */}
                  {/* <input type="submit"    className='cursor-pointer border-2 border-black'  /> */}
                  <button className='cursor-pointer border-2 border-black w-52 h-16 hover:text-white bg-orange-600 text-5xl' > Submit </button>
                </legend>
              </fieldset>
            </div>

            </form>
            {/* mydate= new Date().getDate();
    mymonth= new Date().getMonth()+1;
    myyear= new Date().getFullYear();
    // full=mydate+"-"+mymonth+"-"+myyear;
    var combinedDate = myyear + "-" + (mymonth < 10 ? "0" : "") + mymonth + "-" + (mydate < 10 ? "0" : "") + mydate; */}

        </div>
        
        <div className='mt-20'>
          {/* <div> */}

          {data.length>0 ? (

            <div >
              {/* <div className='flex'> */}
              {data.map((item, index)=>(
                <div key={index} className='border-4 border-slate-700 mb-4'>
                <div className='flex m-3' >
                  {/* <div><p>{item.id}</p></div> rounded-full*/}
                  <div className=' ' >
                    {/* <a href="#call-pop-up" > */}
                    {/* style={StyleImgPopUp}   ugg ugggggg  */}
                    <button onClick={CallPopUp}>
                    <span >{item.fileImg && (<img className=' w-14 h-14 rounded-full' src={URL.createObjectURL(item.fileImg) } alt="User_Image" />)}</span></button>
                    {/* </a> */}
                  </div>
                  <div className='ml-4'><h1 className='text-4xl'>{item.name}</h1></div>
                  <div><p >{item.submissionDate} </p></div>
                </div>
              <div className='border-2'>
                <div className='text-3xl m-3 '>{item.message}</div>
                <div className='flex m-4 '>
                  {/* <h1>kikje</h1> */}
                  <div className='flex w-1/3'><img src={likecomment} className='w-20 h-20 cursor-auto' alt="" onClick={likecommentImage} onDoubleClick={doublelikecommentImage}/><span className='m-6 mt-6 text-4xl'>{countcommentlike}</span></div>
                  <div className='flex w-1/3'><img src={dislikecomment} className='w-20 h-20' alt="" onClick={dislikecommentImage}  onDoubleClick={doubledislikecommentImage} /><span className='m-6 mt-6 text-4xl'>{countcommentdislike}</span></div>
                </div>
              </div>
              </div>
              ))}
              {/* </div> */}
            </div>

          ):(<p>Comments Loading!</p>)}

          {/* <Footer/> */}
          
         
        {/* </div>   */}

            {/* // <table className='mt-10 ml-8 border-solid border-10 w-10 h-14'>
            //  <thead className='space-x-56'>
            //   <tr className='border-4 p-5 h-11'>
            //     <th  className='border-4 text-center p-5 h-11'>Image</th>
            //     <th className='border-4 text-center p-5 h-11'>name</th>
            //     <th className='border-4 text-center p-5 h-11'>email</th>
            //     <th className='border-4 text-center p-5 h-11'>message</th>
            //   </tr>
            //  </thead>
            //  <tbody> */}
               {/* {data.map((item)=>(
                <tr>
                  <td>{item.fileImg && (<img src={
              URL.createObjectURL  
              (item.fileImg) } alt="User_Image" />)}</td> */}
                
                   {/* <img src={item.fileImg} alt="" /> */}
                 {/* <td className='border-4 p-4 text-center'>{item.fileImg}</td> */}
              {/* //   <td className='border-4 p-4 text-center'>{item.name}</td>
              //   <td className='border-4 p-4 text-center'>{item.email}</td>
              //   <td className='border-4 p-4 text-center'>{item.message}</td>
              // </tr>

              // ))}
              // </tbody>
              
            // </table>
          // ):(<p>COomments Loading!</p>)}
          </div>
        </div> */}


        

      </div>
        {/* <Footer/> */}
        {/* <footer style="background-color: #2c3e50; color: white; padding: 20px; text-align: center;">
    <div style="margin-bottom: 20px;">
        <h3>Stay Connected</h3>
        <a href="https://www.linkedin.com/in/siddharth-taneja-98596588/" target="_blank" style="color: white; margin: 0 10px; text-decoration: none;">
            <i class="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://www.youtube.com/watch?v=lGmRnu--iU8" target="_blank" style="color: white; margin: 0 10px; text-decoration: none;">
            <i class="fab fa-youtube"></i> YouTube
        </a>
        <a href="https://www.instagram.com/" target="_blank" style="color: white; margin: 0 10px; text-decoration: none;">
            <i class="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://twitter.com/" target="_blank" style="color: white; margin: 0 10px; text-decoration: none;">
            <i class="fab fa-twitter"></i> Twitter
        </a>
    </div>

    <div style="margin-bottom: 20px;">
        <p>Stay informed with our updates: <a href="mailto:adinath@gmail.com" style="color: #1abc9c;">adinath@gmail.com</a></p>
    </div>

    <div style="margin-bottom: 20px;">
        <a href="/privacy-policy" style="color: white; margin: 0 10px; text-decoration: none;">Privacy Policy</a>
        <a href="/terms-conditions" style="color: white; margin: 0 10px; text-decoration: none;">Terms & Conditions</a>
        <a href="/about-us" style="color: white; margin: 0 10px; text-decoration: none;">About Us</a>
    </div>

    <div style="margin-bottom: 20px;">
        <p>&copy; 2024 Facemash. All rights reserved.</p>
        <p>This website is designed by <strong>Maroti Puskar</strong></p>
    </div>
        </footer> */}
        {/* <footer class="bg-gray-800 text-white p-6 text-center">
    <div class="mb-4">
        <h3 class="text-xl font-semibold">Stay Connected</h3>
        <div class="flex justify-center space-x-4 mt-2">
            <a href="https://www.linkedin.com/in/siddharth-taneja-98596588/" target="_blank" class="hover:text-blue-500">
                <i class="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://www.youtube.com/watch?v=lGmRnu--iU8" target="_blank" class="hover:text-red-500">
                <i class="fab fa-youtube"></i> YouTube
            </a>
            <a href="https://www.instagram.com/" target="_blank" class="hover:text-pink-500">
                <i class="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://twitter.com/" target="_blank" class="hover:text-blue-400">
                <i class="fab fa-twitter"></i> Twitter
            </a>
        </div>
    </div>

    <div class="mb-4">
        <p class="text-sm">Stay informed with our updates: 
            <a href="mailto:adinath@gmail.com" class="text-teal-400 hover:underline">adinath@gmail.com</a>
        </p>
    </div>

    <div class="mb-4">
        <div class="space-x-4">
            <a href="/privacy-policy" class="text-sm hover:underline">Privacy Policy</a>
            <a href="/terms-conditions" class="text-sm hover:underline">Terms & Conditions</a>
            <a href="/about-us" class="text-sm hover:underline">About Us</a>
        </div>
    </div>

    <div class="mb-4">
        <p class="text-xs">&copy; 2024 Facemash. All rights reserved.</p>
        <p class="text-xs">This website is designed by <strong>Maroti Puskar</strong></p>
    </div>
        </footer> */}

<footer class="bg-gray-900 text-white p-8 mt-4">
    <div class="container mx-auto text-center">
        {/* <!-- Social Media Links --> */}
        <div class="mb-6">
            <h3 class="text-2xl font-bold mb-4">Stay Connected</h3>
            <div class="flex justify-center space-x-6">
                <a href="https://www.linkedin.com/in/maroti-puskar/" target="_blank" class="text-blue-500 hover:text-blue-400 transition duration-300">
                    <i class="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://www.instagram.com/marotitechnics11/" target="_blank" class="text-pink-500 hover:text-pink-400 transition duration-300">
                    <i class="fab fa-instagram fa-2x"></i>
                </a>
                <a href="https://www.youtube.com/@marotitechnics" target="_blank" class="text-red-500 hover:text-red-400 transition duration-300">
                    <i class="fab fa-youtube fa-2x"></i>
                </a>
                <a href="https://x.com/marotipuskar" target="_blank" class="text-blue-400 hover:text-blue-300 transition duration-300">
                    <i class="fab fa-twitter fa-2x"></i>
                </a>
            </div>
        </div>

        {/* <!-- Email Subscription --> */}
        <div class="mb-6">
            <p class="text-lg">Stay informed with our updates:</p>
            <a href="mailto:adinath@gmail.com" class="inline-flex items-center text-teal-400 hover:text-teal-300 transition duration-300 mt-2">
                <i class="fas fa-envelope fa-lg mr-2"></i> 
                <span>adinath@gmail.com</span>
            </a>
        </div>

        {/* <!-- Links --> */}
        <div class="mb-6 space-x-6">
            <a href="PrivacyPolicy.jsx" class="text-sm hover:text-teal-300 transition duration-300">Privacy Policy</a>
            <a href="TermsAndConditions.jsx" class="text-sm hover:text-teal-300 transition duration-300">Terms & Conditions</a>
            <a href="AboutUs.jsx" class="text-sm hover:text-teal-300 transition duration-300">About Us</a>
        </div>

        {/* <!-- Copyright --> */}
        <div>
            <p class="text-xs text-gray-400">copyright &copy; 2024 <a href='/' className='hover:text-white'>Facemash.</a> All rights reserved.</p>
            <p class="text-xs text-gray-400 mt-1">This website is designed by <strong className=' text-white hover:text-sm hover:text-cyan-400'><a href='https://www.linkedin.com/in/maroti-puskar/'>Maroti Puskar</a> </strong></p>
        </div>
    </div>
</footer>





      </div>
    </>
  )
}

export default App;
