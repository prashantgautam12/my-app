import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom"
import List from "./list"
import Details from "./details";
const AppRoute = () => {
    return(
        <Routes>
        <Route path="/" element={ <List/> } />
        <Route path="/details" element={ <Details/> } />
      </Routes>
    )
}
export default AppRoute