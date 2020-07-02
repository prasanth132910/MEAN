import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component"
 import QuestionList from "./components/question-list.component";
 import EditQuestion from "./components/edit-question.component";
 import CreateQuestion from "./components/create-question.component"


function App() {
  return (
    <Router>
      <div className="container" id="nav">
      <Navbar />
      <br/>
      <Route path="/" exact component={QuestionList} />
      <Route path="/edit/:id" component={EditQuestion} />
      <Route path="/create" component={CreateQuestion} />
      
      </div>
    </Router>
  );
}

export default App;
