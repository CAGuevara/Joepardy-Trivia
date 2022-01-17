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
    document.getElementById('reveal').style.visibility = "hidden";
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
    // Will reveal the question for the trivia
    // console.log(`Inside handleSubmit -> ${this.state.randomQuestion.answer}`)
    e.preventDefault()
    document.getElementById('reveal').style.visibility = "visible";
  }

increasePoints = e =>{
  //Will increase the Score Points with the value of the question
  // console.log("inside increase Points");
  this.setState({points : this.state.points +=this.state.randomQuestion.value})
}
decreasePoints = e =>{
  //Will decrease the Score Points with the value of the question
  // console.log("inside decrease Points");
  this.setState({points : this.state.points -=this.state.randomQuestion.value})
}
resetPoints = e =>{
  //Will reset the Score Points to 0
  this.setState({points : this.state.points = 0})
}
  render() {
     return (
      <div className="trivia-container">
        <h1>Welcome to Jeopardy!</h1>
        <h3>Score : {this.state.points}</h3>
        <div className="button-Container">
          <button id="decrease" onClick={this.decreasePoints}>Decrease</button>
          <button id="increase" onClick={this.increasePoints}>Increase</button>
          <button id="reset"    onClick={this.resetPoints}>Reset</button>
        </div>
        <div className="second-Container">
            <span id="play">Let's Play!</span>
            <button id="getQuestion" onClick={this.handleSubmit} >Get Question</button>
        </div>
        <div>
          
          <h3>Category : {this.state.randomQuestion?.category?.title}</h3>
          <h3> Points : {this.state.randomQuestion.value}</h3>
           <h3> Answer : {this.state.randomQuestion.question}</h3>
           <h4 id='reveal'> Question : {this.state.randomQuestion.answer}</h4>
        </div>
        <div>
          <button id="revealQuestion" onClick={this.showAnswer} >Click To Reveal the Question</button>
        </div>

      </div>
    );
  }
}

export default App;