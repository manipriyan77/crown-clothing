import { Routes, Route } from "react-router-dom";
import Authentication from "./Routes/Authentication/Authentication-component";
import Home from "./Routes/Home/Home-component";
import Navigation from "./Routes/Navigation/Navigation-component";
import Signin from "./Routes/SignIn/Signin-component";

const Shop = () => {
  <div>
    <h1>Shop page</h1>
  </div>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
