import React, { useEffect} from "react";
import { findPost, getPosts } from "../actions/posts";
import { useDispatch } from "react-redux";
import About from "./About/About";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from "./Home/Home"
import Homee from "./Home/Homee"
import Header from "./Header";
import NotFound from "./NotFound";
import Contact from "./Contact/Contact"
import Posts from "./Posts/Posts";
import Form from "./Form/Form";
import EbookPage from "./Ebooks/EbookPage";
import Content from "./EbookDetail/Content";
import Navbar from "./Navbar/Navbar";










function App (){

const dispatch = useDispatch()

useEffect(() => {
 dispatch(getPosts())

}, [dispatch]);
   return (
      <Router>
      <div className="container">
            <Navbar />
            
            <Switch>
{            <Route path="/" exact component={Home} />}
            {/* {<Route path="/" exact component={() => <Redirect to="/posts" />} />} */}
            <Route path="/about" component={About} />
            <Route path="/ebooks" exact component={EbookPage} />
            <Route path="/contact" component={Contact} />
            <Route path="/ebooks/:id"  component={Content} />
            <Route path="/posts" component={EbookPage} />
            <Route path="/posts/search" exact component={EbookPage} />
            <Route path="/form" component={Form} />
            <Route component={NotFound} />
         
            </Switch>
            
          </div>
          </Router>
      
       
   )
  
}


export default App ;
