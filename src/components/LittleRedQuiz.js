/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Question from './Question';
import Result from './Result';
import child from '../img/child.jpg';

import listen from '../img/listen.jpg';
import stranger from '../img/stranger.jpg';
import book from '../img/book.jpg';
import caution from '../img/caution.jpg';

import short from '../img/short.jpg';
import medium from '../img/medium.jpg';
import long from '../img/long.jpg';

import noChildren from '../img/noChildren.jpg';
import teenager from '../img/teenager.jpg';
import Children from '../img/children.jpg';

import Grimm from '../img/grimm.jpg';
import someGrimm from '../img/someGrimm.jpg';
import noGrimm from '../img/noGrimm.jpg';

import Disney from '../img/disney.jpg';
import someDisney from '../img/someDisney.jpg';
import noDisney from '../img/noDisney.jpg';

class LittleRedQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: '',
      result: '',
    };
  }

    saveQuestion1 = (answerval) => {
      this.setState({
        question1: answerval,
      });
    }

    saveQuestion2 = (answerval) => {
      this.setState({
        question2: answerval,
      });
    }

    saveQuestion3 = (answerval) => {
      this.setState({
        question3: answerval,
      });
    }

    saveQuestion4 = (answerval) => {
      this.setState({
        question4: answerval,
      });
    }

    saveQuestion5 = (answerval) => {
      this.setState({
        question5: answerval,
      });
    }

    submit = () => {
      let survives = 0;
      let overshadowed = 0;
      let children = 0;
      let doesNotSurvive = 0;

      if (!this.state.question1 || !this.state.question2 || !this.state.question3 || !this.state.question4 || !this.state.question5) {
        this.setState({
          result: 'invalid',
        });
        return;
      }

      switch (this.state.question1) {
        case 'parents':
          children += 1;
          break;
        case 'strangers':
          overshadowed += 1;
          doesNotSurvive += 1;
          break;
        case 'cautious':
          survives += 1;
          break;
        default:
          break;
      }

      switch (this.state.question2) {
        case 'short':
          overshadowed += 1;
          children += 1;
          break;
        case 'medium':
          children += 1;
          survives += 1;
          break;
        case 'long':
          doesNotSurvive += 1;
          break;
        default:
          break;
      }

      switch (this.state.question3) {
        case 'notChildren':
          overshadowed += 1;
          doesNotSurvive += 1;
          break;
        case 'older':
          survives += 1;
          overshadowed += 1;
          break;
        case 'children':
          survives += 1;
          children += 1;
          break;
        default:
          break;
      }

      switch (this.state.question4) {
        case 'noGrimm':
          doesNotSurvive += 1;
          break;
        case 'someGrimm':
          overshadowed += 1;
          children += 1;
          break;
        case 'Grimm':
          survives += 1;
          children += 1;
          break;
        default:
          break;
      }

      switch (this.state.question5) {
        case 'noDisney':
          survives += 1;

          break;
        case 'someDisney':
          overshadowed += 1;
          doesNotSurvive += 1;
          break;
        case 'Disney':
          children += 1;
          break;
        default:
          break;
      }

      const max = Math.max(survives, overshadowed, doesNotSurvive, children);
      let result = '';

      if (max === survives) {
        result = 'survives';
      } else if (max === overshadowed) {
        result = 'overshadowed';
      } else if (max === doesNotSurvive) {
        result = 'doesNotSurvive';
      } else if (max === children) {
        result = 'children';
      }
      this.setState({
        result,
      });
    }

    renderResult = () => {
      if (this.state.result === '') {
        return <Result result="none" />;
      }
      if (this.state.result === 'invalid') {
        return <Result result="invalid" />;
      }
      if (this.state.result === 'survives') {
        return (
          <Result
            result="SURVIVE"
            image={book}
            description="Your story survived! You chose enough characteristics that worked together to make sure your story would outlast time...for now, at least."
          />
        );
      }
      if (this.state.result === 'children') {
        return (
          <Result
            result="CHILDREN'S STORY"
            image={child}
            description="Your story lives on, but only as a children's tale. Adults find it to be silly and, well, childish, but the moral survives."
          />
        );
      }
      if (this.state.result === 'overshadowed') {
        return (
          <Result
            result="OVERSHADOWED"
            image={Disney}
            description="Your story lives on, but it is not a famous version. It is told from time to time in some places, but some characteristics just made it not as noteworthy."
          />
        );
      }
      return (
        <Result
          result="FORGOTTEN"
          image={long}
          description="Your story has been forgotten. Other versions must have been better suited to be remembered."
        />
      );
    }

    render() {
      return (
        <div className="quiz red-quiz">
          <Question
            title="What would you like the moral of your story to be?"
            answer1="Make sure to listen to your parents!"
            answer2="Don't trust strangers, especially if you're a child."
            answer3="Always be cautious."
            answerval1="parents"
            answerval2="strangers"
            answerval3="cautious"

            image1={listen}
            image2={stranger}
            image3={caution}

            onSelect={this.saveQuestion1}
          />
          <Question
            title="How long is your story?"
            answer1="Extremely short"
            answer2="Medium length"
            answer3="Super long"

            answerval1="short"
            answerval2="medium"
            answerval3="long"

            image1={short}
            image2={medium}
            image3={long}

            onSelect={this.saveQuestion2}
          />
          <Question
            title="How appropriate is the story for children?"
            answer1="Not for children at all"
            answer2="Could be for older children"
            answer3="Basically a bedtime story!"
            answerval1="notChildren"
            answerval2="older"
            answerval3="children"
            image1={noChildren}
            image2={teenager}
            image3={Children}
            onSelect={this.saveQuestion3}
          />
          <Question
            title="Two brothers approach you asking to retell your story. What do you say?"
            answer1="No way"
            answer2="Sure, but don't change it"
            answer3="Change it as you'd like"
            answerval1="noGrimm"
            answerval2="someGrimm"
            answerval3="Grimm"
            image1={noGrimm}
            image2={someGrimm}
            image3={Grimm}
            onSelect={this.saveQuestion4}
          />
          <Question
            title="A mysterious man named Disney asks to retell your story. What do you say?"
            answer1="Nope!"
            answer2="Sure thing, but give me credit"
            answer3="Let's work together on it!"
            answerval1="noDisney"
            answerval2="someDisney"
            answerval3="Disney"

            image1={noDisney}
            image2={someDisney}
            image3={Disney}
            onSelect={this.saveQuestion5}
          />
          {this.renderResult()}
          <button className="button submit" type="button" onClick={this.submit}>Submit</button>
        </div>
      );
    }
}

export default LittleRedQuiz;
