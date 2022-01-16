import React, { Component } from 'react';

class App extends Component {

  state = {
    randomQuestion: 'randomQuestion',
    id: 0,
    answer: '',
    question: '',
    Category:'',
    points: 0,
    score: 0
  }


  handleSubmit = e => {
    console.log("Inside handleSubmit")
    e.preventDefault()

    fetch('http://jservice.io/api/random')
      .then(response => response.json())
      .then(data => this.setState({ randomQuestion: data[0] }))
      .then(question => console.log(this.state.randomQuestion))
      .then(value => console.log(this.state.randomQuestion.value))
      .then(category=> console.log(this.state.randomQuestion?.category.title))
      .catch(error => console.error(error))
  }

  showAnswer = e =>{
    console.log(`Inside handleSubmit -> ${this.state.randomQuestion.answer}`)
    e.preventDefault()

  }


  render() {
     return (
      <div className="trivia-container">
        <h3>Score : </h3>
        <h1>Welcome to Jeopardy!</h1>
        <div className="button-Container">
          <button>Decrease</button>
          <button>Increase</button>
          <button>Reset</button>
        </div>
        <div>
            <button onClick={this.handleSubmit} >Get Question</button>
        </div>
        <div>
          
          <h3>{this.state.randomQuestion?.category?.title}</h3>
          <h3> Points : {this.state.randomQuestion.value}</h3>
           <h3> Answer : {this.state.randomQuestion.question}</h3>
        </div>
        <div>
          <button onClick={this.showAnswer}>Click To Reveal the Question</button>
        </div>

      </div>
    );
  }
}

export default App;