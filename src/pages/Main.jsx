

import Header from "../components/Header"
import LeftPanel from "../components/LeftPanel"
import MainCard from "../components/MainCard"
import RightPanel from "../components/RightPanel"
import './Main.css'

import { useReadDataQuery } from "../store/postSlice"
import PortalPractice from "../components/PortalPractice"
import { useEffect, useState } from "react"
import Spinner from "../components/Spinner"

const Main = () => {

  const { data , isLoading, isScuucess, isError, error } = useReadDataQuery()
  
  const [content,setContent] = useState(null)


  

  useEffect(()=>{
    
    setContent(data)
  },[data,isLoading])

  if(isLoading){
    return <Spinner />
  }
  
  return (
    <div>
    <Header setContent={setContent} data={data} />
    <div className="maincardcontainer">
    
      <div className="maincardleft">
        <LeftPanel />
      </div>
      <div className="maincardcenter">
                {content?.toReversed().map((item)=> <MainCard key={item._id} id={item._id} cover={item.cover} title={item.title} tags={item.tags} likes={item.likes} userName={item.userName} userImage={item.userImage} discription={item.discription} />)}
      </div>
        <div className="maincardright">
          <RightPanel />
        </div>
    </div>
    
    </div>
  )
}

export default Main