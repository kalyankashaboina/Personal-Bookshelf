 import { useState} from "react"
import "./books.css"
import {BooksDetails as array} from "../BooksDetails/BooksDeatils"
import { useNavigate } from "react-router-dom"

 
function Books(){

const[inputdata,setInputdata]=useState("")
const navigate=useNavigate()

const[getbook,setGetBook]=useState(array)
const[cart,setCart]=useState([])

// const history = useHistory();





const handleChange=(e)=>{


  const data=e.target.value
  const data1=data.toLowerCase()

  setInputdata(data1)


  const matchingdata=array.filter((val)=>val.title.toLocaleLowerCase().includes(data1))


  setGetBook(matchingdata)
}

console.log(inputdata)


console.log(array)



const handleClick= (val) => {
console.log("clicked",val)


 setCart([...cart,val])            

// localstorage

let data = localStorage.getItem("data");
let dataArray = data ? JSON.parse(data) : [];           
if (!Array.isArray(dataArray)) {                           //i used to methods to book mark books one isusestae using rotes and                                                       //
  dataArray = [];                                            //another one using local store you comment and uncomment in bookmark page to see what happens
}
dataArray.push(val);
localStorage.setItem("data", JSON.stringify(dataArray));

//  till here


};

const handleBookmark=()=>{
  navigate("/Bookmark",{state:cart})
}

console.log(cart)



    return(<>
    <div className="Parent">
<nav>
<div>
<h3>Search by Book name : </h3>
<input id="inputfeild" type="text" value={inputdata} placeholder="You can search Books here......." onChange={handleChange} />

</div>
<div>
  <button className="hi" onClick={handleBookmark}>My BookMark</button>
</div>
</nav>


<div className="container">



  {getbook&&getbook.length>0? getbook.slice(0,10).map((val,ind)=>{



return<div className="card" key={ind}>
  <div className="child">
   <div className="childOne"><h5 className="child1">Book Title :</h5>
    <p className="child3">{val.title}</p>
    </div> 
    <div className="childOne">
    <h5 className="child1">Edition Count :</h5> 
    <p className="child2">{val.count}</p>
    </div>
    <button className="btn" onClick={()=>{handleClick(val)}}>Add to Bookmark</button>
  </div> 
</div>

  }):<h3>Sorry no Books Available...</h3>}



{/* <div className="card">
  <div className="child">
   <div className="childOne"><h5 className="child1">Book Title :</h5>
    <p className="child3">The lords of ring</p>
    </div> 
    <div className="childOne">
    <h5 className="child1">Edition Count :</h5> 
    <p className="child2">99.99</p>
    </div>
    <button className="btn">Add to Bookmark</button>
  </div>

  
</div> */}

</div>

</div>
  
  </>)
}

export default Books