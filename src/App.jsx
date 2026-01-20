import { useEffect, useState } from "react"
import Card from "./components/Card"
import JobCard from "./components/JobCard"
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";


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

const users = [
  {
    img :'https://media.istockphoto.com/id/2042526830/photo/successful-businesswoman-using-laptop-working-in-office-business-technology-corporate-concept.jpg?s=612x612&w=0&k=20&c=-NJyxcMesUAKzzPwoHXC10ZuBHPGa1dRp1gFl2T37o8=',
    intro : '',
    tag : 'Satisfied',
    color : '#F075AE'
  },
  {
    img :'https://t4.ftcdn.net/jpg/04/43/76/95/360_F_443769563_XLcCTl78ajnm9VS6kEWFIEMHRMUdm26Z.jpg',
    intro : '',
    tag : 'Underserved',
    color : '#FFDAB3'
  },
  {
    img :'https://thumbs.dreamstime.com/b/indian-businessman-working-laptop-standing-desk-contemporary-office-setting-glass-walls-reflecting-positive-411967481.jpg',
    intro : '',
    tag : 'Underbanked',
    color : '#FEC288'
  },{
    img :'https://thumbs.dreamstime.com/b/indian-businessman-working-laptop-standing-desk-contemporary-office-setting-glass-walls-reflecting-positive-411967481.jpg',
    intro : '',
    tag : 'Underbanked',
    color : '#00F7FF'
  },{
    img :'https://thumbs.dreamstime.com/b/indian-businessman-working-laptop-standing-desk-contemporary-office-setting-glass-walls-reflecting-positive-411967481.jpg',
    intro : '',
    tag : 'Underbanked',
    color : '#F5F2F2'
  }
]

const App = () => {
  return (
   <div>
   {/* <Card  user="Girish" img="https://plus.unsplash.com/premium_photo-1765390093374-695f6f14af7e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> 
   <Card user="BCS" img="https://images.unsplash.com/photo-1761440567736-1bef26a5afff?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> 
   <Card user="Tony" img="https://images.unsplash.com/photo-1756137074695-88e71b00ef77?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>  */}
    
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

<Section1 users={users}/>
<Section2/>


</div> 
   
  )
}

export default App