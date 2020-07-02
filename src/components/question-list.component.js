import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Question = props => (
  <tr>
    <td>{props.question.questionName}</td>
    <td>{props.question.option1}</td>
    <td>{props.question.option2}</td>
    <td>{props.question.option3}</td>
    <td>{props.question.option4}</td>
   
    <td>
      <Link to={"/edit/"+props.question._id}>edit</Link> | <a href="#" onClick={() => { props.deleteQuestion(props.question._id) }}>delete</a>
    </td>
  </tr>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteQuestion = this.deleteQuestion.bind(this)

    this.state = {question: []};
  }

  componentDidMount() {
    axios.get('http://localhost:4000/question/')
      .then(response => {
        this.setState({ question: response.data })
        console.log(response.data[3].option1);
      })
      .catch((error) => {
        console.log(error);
      }) 
  }

  deleteQuestion(id) {
    axios.delete('http://localhost:4000/question/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      question: this.state.question.filter(el => el._id !== id)
    })
  }

  questionList() {
    return this.state.question.map(currentquestion => {
      return <Question question={currentquestion} deleteQuestion={this.deleteQuestion} key={currentquestion._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>question list</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Question</th>
              <th>option1</th>
              <th>option2</th>
              <th>option3</th>
              <th>option4</th>
            </tr>
          </thead>
          <tbody>
            { this.questionList() }
          </tbody>
        </table>
      </div>
    )
  }
}