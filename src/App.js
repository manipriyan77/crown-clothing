
import { Routes,Route } from "react-router-dom";
import Home from "./Routes/Home/Home-component";
const App = () => {
return(
<Routes>
  <Route path="/" element={<Home/>}/>
</Routes> 
)
};

export default App;
