import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

// Import BrowserRouter and other necessary components
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
const likeno="https://as2.ftcdn.net/v2/jpg/05/54/76/53/1000_F_554765365_GV87lL7ynZSvGDQt26BBsJ89hfrYfDzU.jpg"
// https://as2.ftcdn.net/v2/jpg/05/54/76/53/1000_F_554765365_GV87lL7ynZSvGDQt26BBsJ89hfrYfDzU.jpg
const likem1="https://www.freeiconspng.com/thumbs/thumbs-up-icon/blue-thumbs-up-icon-2.png"
{/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbKrfMmQvOKGgnJJL6lUKKM2gCx6plyaLlMd0mld2MoA&s" alt="" /> */}
const dislikeno ="https://www.clipartkey.com/mpngs/m/85-858721_dislike-clipart-black-and-white.png"
const dislikem1="https://cdn-icons-png.flaticon.com/128/1612/1612805.png"




const Appch1 = () => {
  // Your existing code here
    // const [count, setCount] = useState(0)
  const [firstlyclicklike, setfirstlyclicklike] = useState(true)
  const [firstlyclickdislike, setfirstlyclickdislike] = useState(true)
  const[countcommentlike,setCountcommentlike]=useState(0)
  const[countcommentdislike,setCountcommentdislike]=useState(0)


  const[count, setCount]=useState(0)
  const [count1, setCount1]= useState(0)
  // const[imgsrc, setImgsrc]=useState()
  // const[imgsrc1, setImgsrc1]=useState()
  const[index,setIndex]=useState(0)
  const[indexi,setIndexi]=useState(0)

  

  const [likecomment,Setlikecomment]=useState(likeno)
  const [dislikecomment,Setdislikecomment]=useState(dislikeno)

  const [image1,setImage1]=useState('https://funmauj.b-cdn.net/test/873098.jpg')
  const [image,setImage]=useState('riya.png')
  const [formData,setformData]=useState({
    fileImg:null,
    name:"",
    email:"",
    message:"",
    submissionDate:""
  })
  const [data,setData]=useState([])

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
    "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/46505/swiss-shepherd-dog-dog-pet-portrait-46505.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1619690/pexels-photo-1619690.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/4588047/pexels-photo-4588047.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1458925/pexels-photo-1458925.jpeg?auto=compress&cs=tinysrgb&w=400"
  ]

  
  //console.log("girlimg arr", girlimg);
  function changeImgOnClick(){
    setImage(girlimg[index]); 
    setImage1(dogimg[indexi]);

    console.log("i=",index);
    console.log("i=",indexi);

    setIndex(index+1)
    setIndexi(indexi+1)

    if (index===girlimg.length -1 ) {
      // setImage("riya.png")
    
      setIndex(0)
      console.log("index", index)
      
    }
    if (indexi===dogimg.length -1 ) {
        // setImage("riya.png")
      
        setIndexi(0)
        console.log("index", indexi)
        
      }
    }
    
    
    //console.log("path =",girlimg[i]);
 


  return (
    <>
      <nav className='place-items-center bg-rose-900 max-w-full h-14'>
        <h1 className='text-center hover:decoration-blue-400 text-3xl text-white'>FACEMASH </h1>
      </nav>
      <div className='container'>
        {/* Your existing content here */}
         
        <p className=' mt-6'><span> <strong>We let for our looks? No. Will be judged on them?</strong></span></p>
        <div className=' bg-slate-50 mt-8 text-xl'><strong>Who's Better?  Click or Double click to choose </strong></div>
        {/* <span><strong>Who's Better? Click to choose </strong></span> */}
        <div className=' flex mt-16 sm:flex w-[40rem]'>
          {/* <div className='border-rounded border-slate-100'><img className='w-65 h-130' src="riya.png" alt="" /></div> */}
          <div>
          {/* girlimg */}
            <img className='w-[30rem] h-[26rem]' src={image} alt="" onClick={()=>{
              // imgsrc(girlimg[i])
              // girlimg
              setCount(count+1)}} onDoubleClick={()=>{setCount(count+1)}}/>
            <div className='flex mt-4'>
              <div>
                <div className='flex'>
                  <img className='mt-6' src="like.png" alt="" /> 
                  <p className='ml-8 mt-12 text-5xl'>{count}</p></div>
              <p className='mt-4'> Like</p>
              </div>
              <div>
                <div className='flex'>
                  <img className='mt-10 ml-20' src="dislike.png" alt="" /> 
                  <p className='ml-8 mt-12 text-5xl'>{count1}</p></div>
              <p className='mt-2 ml-20'>Dislike</p>
              </div>
            </div>
          </div>

          {/*border-2            align-text-top text-center */}
          <div className='w-16 border-black '><p className='text-center mt-[10rem]'>OR</p></div>
          <div>
          {/* https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985_1280.jpg */}
            <img className='w-[28rem] h-[26rem]' src={image1} alt="" onClick={()=>{
                  setCount1(count1+1)
                  console.log("liked!")}}  onDoubleClick={()=>{
                  setCount1(count1+1)
                  console.log("liked!")}}/>
            <div className='flex mt-4'>
              <div>
                <div className='flex'>
                <img className='mt-4' src="like.png" alt="" /> 
                <p className='ml-8 mt-12 text-5xl'>{count1}</p> 
                </div>
              <p className='mt-4'> Like</p>
              </div>
              <div>
                <div className='flex'>
                  <img className='mt-6 ml-20' src="dislike.png" alt="" /> 
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
        <div className='flex justify-center p-2 h-14 bg-slate-400'><h1 className='text-centre text-4xl'>Leave Your comments Below </h1></div>
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
      </div>
      <div className='container'>
      <div className='mt-20'>
          {/* <div> */}

          {data.length>0 ? (

            <div >
              {/* <div className='flex'> */}
              {data.map((item, index)=>(
                <div key={index} className='border-4 border-slate-700 mb-4'>
                <div className='flex m-3' >
                  {/* <div><p>{item.id}</p></div> rounded-full*/}
                  <div className=' '>
                    <span >{item.fileImg && (<img className=' w-14 h-14 rounded-full' src={URL.createObjectURL(item.fileImg) } alt="User_Image" />)}</span>
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
      {/* </div> */}


      </div>
    </>
  );
}

export default Appch1;
