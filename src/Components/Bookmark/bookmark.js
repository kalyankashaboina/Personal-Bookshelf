import { useLocation } from "react-router-dom"
import "../Books/books.css"
import "./bookmark.css"


function BookMark(){

    const location=useLocation()
    const data=location.state||{cart:[]}       //you can comment this and uncomment below data variable

    // const data=JSON.parse(localStorage.getItem("data"))        //umcomment this and comment above data variable to get datafrom local storge otherwise it comes through routes

console.log("data",data)

    return(<>


<div className="parent2">
    <h2>My Bookshelf</h2></div>


<div className={data.length>0?"container":"parent2"}>
 {data&&data.length>0?data.map((val,ind)=>{



return<div className="card" key={ind}>
  <div className="child">
   <div className="childOne"><h5 className="child1">Book Title :</h5>
    <p className="child3">{val.title}</p>
    </div> 
    <div className="childOne">
    <h5 className="child1">Edition Count :</h5> 
    <p className="child2">{val.count}</p>
    </div>
  </div> 
</div>










}):<h2>No Books in Book Mark</h2>}
    
</div>
    </>)
}
export default BookMark