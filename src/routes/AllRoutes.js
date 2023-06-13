import { Home } from "../pages/home/Home";
import { Creatpst } from "../pages/createpost/Creatpst";
import { Routes, Route } from "react-router-dom";
import { Postdetail } from "../pages/postdetail/Postdetail";
export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="create" element={<Creatpst/>} />
        <Route path="/post/:id" element={ <Postdetail/>}/>
    </Routes>
  )
}
