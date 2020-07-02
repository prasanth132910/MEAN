import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeQuestionName = this.onChangeQuestionName.bind(this);
    this.onChangeOption1 = this.onChangeOption1.bind(this);
    this.onChangeOption2 = this.onChangeOption2.bind(this);
    this.onChangeOption3 = this.onChangeOption3.bind(this);
    this.onChangeOption4 = this.onChangeOption4.bind(this);
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
   this.onSubmit=this.onSubmit.bind(this);
   



    this.state = {
    questionName: '',
    option1: '',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
    Question:[]
    }
  }

onChangeQuestionName(e) {
    this.setState({
      questionName: e.target.value
    })
  }

  onChangeOption1(e) {
    this.setState({
      option1: e.target.value
    })
  }

  onChangeOption2(e) {
    this.setState({
      option2: e.target.value
    })
  }
  onChangeOption3(e) {
    this.setState({
      option3: e.target.value
    })
  }
  onChangeOption4(e) {
    this.setState({
      option4: e.target.value
    })
  }
  onChangeAnswer(e) {
    this.setState({
      answer: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const question = {
    
    questionName:this.state.questionName,
    option1: this.state.option1,
    option2: this.state.option2,
    option3: this.state.option3,
    option4: this.state.option4,
    answer: this.state.answer

    }

    console.log(question);

    axios.post('http://localhost:4000/question/add', question)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Question </h3>
      <form onSubmit={this.onSubmit}>
       <div className="form-group"> 
          <label>questionName: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.questionName}
              onChange={this.onChangeQuestionName}
              />
        </div>
        <div className="form-group"> 
          <label>Option-1: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.option1}
              onChange={this.onChangeOption1}
              />
        </div>
        <div className="form-group"> 
          <label>Option-2: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.option2}
              onChange={this.onChangeOption2}
              />
        </div>
        <div className="form-group"> 
          <label>Option-3: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.option3}
              onChange={this.onChangeOption3}
              />
        </div>
        <div className="form-group"> 
          <label>Option-4: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.option4}
              onChange={this.onChangeOption4}
              />
        </div>
        <div className="form-group"> 
          <label>Answer: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.answer}
              onChange={this.onChangeAnswer}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Create Question" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}