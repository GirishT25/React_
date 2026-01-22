import { useEffect, useState } from "react"
import Card from "./components/Card"
import JobCard from "./components/JobCard"
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import { X } from 'lucide-react';
import LocalStorage from "./components/LocalStorage/LocalStorage";
import ApiFetch from "./components/API/ApiFetch";
import AxiosApi from "./components/API/AxiosApi";

// const Card = ({title }) =>{
// const [count , setCount] = useState(0);
// const [hasLiked , sethasLiked] = useState(false);
// useEffect(()=>{
//   console.log(`${title} has been ${hasLiked}`);
// },[hasLiked]);
//   return(
//     <div onClick={() => setCount(count + 1)}>
//       <h2> {title} <br /> {count ? count : null }</h2>
//       <button onClick={() =>sethasLiked(!hasLiked) }>
//         {
//           hasLiked ? "Liked 😊" : "UnLike😢"
//         }
//       </button>

//     </div>
//   )
// }

const jobListings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZI78WvDPQ241thhVYKtVphlc_J01LbnFVqA&s",
    companyName: "Google",
    jobTitle: "UI / UX Designer",
    datePosted: "5 days ago",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://images.crowdspring.com/blog/wp-content/uploads/2022/08/18131304/apple_logo_black.svg_.png",
    companyName: "Apple",
    jobTitle: "Frontend Developer",
    datePosted: "1 week ago",
    tag1: "Part-time",
    tag2: "Mid Level",
    pay: "$75/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png",
    companyName: "Microsoft",
    jobTitle: "Backend Engineer",
    datePosted: "3 days ago",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: "Amazon",
    jobTitle: "Cloud Engineer",
    datePosted: "2 days ago",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg",
    companyName: "Meta",
    jobTitle: "Product Designer",
    datePosted: "1 day ago",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$100/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    jobTitle: "Software Engineer",
    datePosted: "4 days ago",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$85/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/500px-Tesla_logo.png",
    companyName: "Tesla",
    jobTitle: "Data Analyst",
    datePosted: "6 days ago",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://static.cdnlogo.com/logos/a/90/adobe.png",
    companyName: "Adobe",
    jobTitle: "UI Engineer",
    datePosted: "1 week ago",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$88/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png",
    companyName: "Salesforce",
    jobTitle: "Full Stack Developer",
    datePosted: "2 weeks ago",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$80/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.ibm.com/brand/experience-guides/developer/8f4e3cc2b5d52354a6d43c8edba1e3c9/02_8-bar-reverse.svg",
    companyName: "IBM",
    jobTitle: "DevOps Engineer",
    datePosted: "3 days ago",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$92/hr",
    location: "Kolkata, India"
  }
];

// const users = [
//   {
//     img :'https://media.istockphoto.com/id/2042526830/photo/successful-businesswoman-using-laptop-working-in-office-business-technology-corporate-concept.jpg?s=612x612&w=0&k=20&c=-NJyxcMesUAKzzPwoHXC10ZuBHPGa1dRp1gFl2T37o8=',
//     intro : '',
//     tag : 'Satisfied',
//     color : '#F075AE'
//   },
//   {
//     img :'https://t4.ftcdn.net/jpg/04/43/76/95/360_F_443769563_XLcCTl78ajnm9VS6kEWFIEMHRMUdm26Z.jpg',
//     intro : '',
//     tag : 'Underserved',
//     color : '#FFDAB3'
//   },
//   {
//     img :'https://thumbs.dreamstime.com/b/indian-businessman-working-laptop-standing-desk-contemporary-office-setting-glass-walls-reflecting-positive-411967481.jpg',
//     intro : '',
//     tag : 'Underbanked',
//     color : '#FEC288'
//   },{
//     img :'https://thumbs.dreamstime.com/b/indian-businessman-working-laptop-standing-desk-contemporary-office-setting-glass-walls-reflecting-positive-411967481.jpg',
//     intro : '',
//     tag : 'Underbanked',
//     color : '#00F7FF'
//   },{
//     img :'https://thumbs.dreamstime.com/b/indian-businessman-working-laptop-standing-desk-contemporary-office-setting-glass-walls-reflecting-positive-411967481.jpg',
//     intro : '',
//     tag : 'Underbanked',
//     color : '#F5F2F2'
//   }
// ]




const App = () => {
const [a , setA] = useState(0)
const [user , setUser] = useState({user : "Girish" , age : 21})
const [batch , setbatchUpdate] = useState(0);

function changeUser(){
  setUser(prev=>({...user , age : 20})); // this is called the object destructring and updating the value
}
function Increase(){
  console.log(a)
  setA(a + 1);
  console.log(a)

}

function decrease(){
  console.log(a)
  setA(a - 1);
  console.log(a)

}

function batchUpdate(){
  console.log(batch);
  // This is the batch update where once is being updataed 
  setbatchUpdate((prev) => prev+1);
  setbatchUpdate((prev) => prev+1);
  setbatchUpdate((prev) => prev+1);
}

const [title , setTitle] = useState(''); // this is called two way binding where the form data is handle using the input value  
function onSubmitHandler(e){ // passed using the useState 
   e.preventDefault()
   console.log('Form submitted' ,title);
   setTitle('') 
}

const [notes ,setNotes] = useState('')
const [detailNotes , setdetailNotes] = useState();
const [task , setTask] = useState([])
function onSubmitNotes(e){
  e.preventDefault();
  // console.log(notes , detailNotes)
  const copyTask = [...task];
  copyTask.push({notes,detailNotes})
  
  setTask(copyTask);
  console.log(task);

  setNotes('');
  setdetailNotes('');
}

const handleDelete = (id) =>{
  const copyTask = [...task];
  console.log(copyTask[id]);
  copyTask.splice(id ,1);
  setTask(copyTask);
}

  return (
   <div className=""> 
    {/* This is for the job card handling the Props */}
   {/* <Card  user="Girish" img="https://plus.unsplash.com/premium_photo-1765390093374-695f6f14af7e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> 
   <Card user="BCS" img="https://images.unsplash.com/photo-1761440567736-1bef26a5afff?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> 
   <Card user="Tony" img="https://images.unsplash.com/photo-1756137074695-88e71b00ef77?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>  */}
    
    {/* This is used for the more usage of the Props  */}
{/* {
  jobListings.map((ele ,index) =>{
    return <div key={index}>
    <JobCard brandLogo={ele.brandLogo} companyName={ele.companyName} jobTitle={ele.jobTitle} datePosted={ele.datePosted} tag1={ele.tag1} tag2={ele.tag2} pay={ele.pay} location={ele.location}/>
    </div>
  })
} */}


{/* <Header/> */}
{/* <Button/> */}
{/* <button className="mt-5 ml-5 bg-blue-500 p-3 rounded-xl ">
  Click Me
</button> */}

{/* This is an mini project of using the all concept */}
{/* <Section1 users={users}/>
<Section2/> */}
{/* <input className="mt-2.5" onChange={(ele)=>{
    console.log(ele.target.value)
}} type="text" placeholder="Enter the text here" /> */}


{/* this is use for the react hooks */}
{/* <div className="bg-gray-400 w-24 px-2.5 py-2.5 m-2 text-center rounded-4xl ml-10 ">
  <h1> {a} </h1>
</div>

<button onClick={Increase} className="bg-blue-400 p-2.5 rounded-4xl ml-2">Increase</button>
<button onClick={decrease} className="bg-blue-400 p-2.5 rounded-4xl ml-2">Decrease</button>
<h1>{user.user} , {user.age}</h1>
<button onClick={changeUser}>change</button>


<div className="bg-gray-400 w-24 px-2.5 py-2.5 m-2 text-center rounded-4xl ml-10 ">
  <h1> {batch} </h1>
</div>
<button onClick={batchUpdate} className="bg-blue-400 p-2.5 rounded-4xl ml-2">Update the batch</button>

<form onSubmit={onSubmitHandler}>
  <input className="bg-gray-800 p-3 mt-2.5 m-1.5 rounded-3xl text-white"
  value={title}
  onChange={(e)=>{
    setTitle(e.target.value);
  }}
  type="text" placeholder="Enter your name" />
  <button className="bg-gray-800 p-3 mt-2.5 m-1.5 rounded-3xl" >Submit</button>
</form> */}

  {/* Notes application to runn  comment the image */}
{/* <div className="h-screen lg:flex bg-black text-white">
  <form onSubmit={(e)=>{
      onSubmitNotes(e)
  }}  className="flex flex-col gap-4 lg:w-1/2  items-start p-10">
  <h1 className="text-4xl font-semibold text-white"> Add Notes To Do</h1>
    
    Add title
      <input type="text"
       className="px-5 py-2 w-full outline-none font-medium border-2 rounded" 
       value={notes}
       onChange={(e)=>{
        setNotes(e.target.value);
       }}  
      placeholder="Enter your task "/>

Detail notes
      <textarea type="text" 
      placeholder="Enter the task details" 
      className="px-5 py-2 w-full h-32 border-2 font-medium outline-none rounded flex items-start flex-row"
      value={detailNotes}
      onChange={(e)=>{
        setdetailNotes(e.target.value);
      }}
      />
      <button className="bg-white text-black px-5 py-2 outline-none rounded w-full">Add Notes</button>
    <img className="h-60" src="https://img.freepik.com/free-vector/yellow-note-paper-with-red-pin_1284-42430.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
  </form>

 <div className=" lg:w-1/2h-full  lg:border-l-2 p-10">  
  <h1 className="text-4xl font-bold">Your Notes</h1>
  <div className="flex flex-wrap gap-5 mt-5 items-st justify-start overflow-auto ">
   {
  task.map((ele ,idx) => {
    return (
      <div
        key={idx}
        className="relative h-52 w-40 rounded-xl bg-cover py-6 px-2 text-black
                   bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
      >
        Delete Button
        <button
          className="absolute top-5 right-5 bg-red-500 p-1 rounded-full text-xs"
          onClick={() => handleDelete(idx)}
        >
          <X size={14} />
         </button>        Title
        <h3 className="font-bold leading-tight text-xl">
          {ele.notes}
        </h3>

        Description
        <p className="text-gray-600 mt-2 font-medium overflow-hidden text-ellipsis whitespace-nowrap">
          {ele.detailNotes}
        </p>
      </div>
    );
  })
}

  </div>
 </div>

 </div> */}
{/* <LocalStorage/> */}
{/* <ApiFetch/> */}
  <AxiosApi/> 

  
</div> 
   
  )
}

export default App