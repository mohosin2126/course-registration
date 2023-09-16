import { useEffect, useState } from "react";
import Right from "../RightCard/Right";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const MainCard = () => {
    const[allCard, setAllCourse]= useState([]); 
    const [selectedCourse,setSelectedCourse]=useState([])
    const [remaining,setRemaining]=useState(0)
    const [totalCredit,setTotalCredit]=useState(0)
    
    useEffect(()=>{
        fetch('./../../../public/data.json')
        .then(res=>res.json())
        .then(data=>setAllCourse(data))
    },[])



const handleSelectCourse=(card)=>{
    const isExist=selectedCourse.find((item)=> item.id == card.id);
    let count=card.creditInHours
    if(isExist){
        return toast(" This course Already added ")
    }
    else{
    selectedCourse.forEach((item)=>{
        count +=item.creditInHours
    })
 const totalRemaining = 20-count
 
 if(count>20){
 return toast("Don't have sufficient balance ")
 }
 else{
    setTotalCredit(count)
 setRemaining(totalRemaining)
        setSelectedCourse([...selectedCourse,card])
 }
    }
    
    
}

    return (
        <div className="md:flex mx-w-screen-xl mx-auto px-8">
      <div className="w-2/3 md:grid md:grid-cols-3">
      {allCard.map((card)=><div key={card.id} className='w-80 h-[402px]'>
    <img className='h-36 w-72' src={card.image} alt="" />
   <div >
    <h2 className='text-black  font-bold text-lg mt-2' >{card.title} </h2>
    <p className="p-1">{card.description}</p>
    <div className='flex gap-5 mt-3'>
        <img src={card.dollarIcon}alt="" />
        <p>
Price: {card.price}
        </p>
        <img src={card.bookIcon} alt="" />
        <p>Credit: {card.creditInHours}</p>
    </div>
    <div className='mt-4 '>
      <button onClick={()=>handleSelectCourse(card)} className=" w-72 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Select</button>
      <ToastContainer></ToastContainer>
    </div>
  </div>
</div>
        )
      }
      </div>
            <div className="w-1/3">
               <Right selectedCourse={selectedCourse} remaining={remaining} totalCredit={totalCredit}></Right>
            </div>
        </div>
    );
};

export default MainCard;