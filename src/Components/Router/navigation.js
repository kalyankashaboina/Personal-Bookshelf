import { BrowserRouter, Route, Routes } from "react-router-dom"
import Books from "../Books/Books"
import BookMark from "../Bookmark/bookmark"

function NavigationComponent(){

return(<>

<BrowserRouter>
<Routes>

<Route path="/" element={<Books />} />
        <Route path="/bookmark" element={<BookMark/>} />

</Routes>


</BrowserRouter>




</>)


}
export default NavigationComponent