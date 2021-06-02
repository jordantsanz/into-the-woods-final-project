/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Question from './Question';
import Result from './Result';
import child from '../img/child.jpg';
import siblings from '../img/siblings.jpg';
import couple from '../img/couple.jpg';

import listen from '../img/listen.jpg';
import stranger from '../img/stranger.jpg';
import book from '../img/book.jpg';

import germany from '../img/germany.jpg';
import france from '../img/france.jpg';
import england from '../img/england.jpg';

import short from '../img/short.jpg';
import medium from '../img/medium.jpg';
import long from '../img/long.jpg';

import noChildren from '../img/noChildren.jpg';
import teenager from '../img/teenager.jpg';
import children from '../img/children.jpg';

import Grimm from '../img/grimm.jpg';
import someGrimm from '../img/someGrimm.jpg';
import noGrimm from '../img/noGrimm.jpg';

import Disney from '../img/disney.jpg';
import someDisney from '../img/someDisney.jpg';
import noDisney from '../img/noDisney.jpg';

class ChooseYourOwn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: '',
      question6: '',
      question7: '',
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

    saveQuestion6 = (answerval) => {
      this.setState({
        question6: answerval,
      });
    }

    saveQuestion7 = (answerval) => {
      this.setState({
        question7: answerval,
      });
    }

    submit = () => {
      let survives = 0;
      let disney = 0;
      let grimm = 0;
      let doesNotSurvive = 0;

      if (!this.state.question1 || !this.state.question2 || !this.state.question3 || !this.state.question4 || !this.state.question5 || !this.state.question6 || !this.state.question7) {
        this.setState({
          result: 'invalid',
        });
        return;
      }

      switch (this.state.question1) {
        case 'child':
          disney += 1;
          grimm += 1;
          survives += 1;
          break;
        case 'couple':
          grimm += 1;
          doesNotSurvive += 1;
          break;
        case 'siblings':
          grimm += 1;
          survives += 1;
          break;
        default:
          break;
      }
      switch (this.state.question2) {
        case 'parents':
          doesNotSurvive += 1;
          break;
        case 'strangers':
          grimm += 1;
          doesNotSurvive += 1;
          break;
        case 'cautious':
          survives += 1;
          disney += 1;
          break;
        default:
          break;
      }
      switch (this.state.question3) {
        case 'germany':
          grimm += 1;
          break;
        case 'france':
          survives += 1;
          break;
        case 'england':
          disney += 1;
          break;
        default:
          break;
      }

      switch (this.state.question4) {
        case 'short':
          disney += 1;
          survives += 1;
          break;
        case 'medium':
          grimm += 1;
          survives += 1;
          break;
        case 'long':
          doesNotSurvive += 1;
          break;
        default:
          break;
      }

      switch (this.state.question5) {
        case 'notChildren':
          doesNotSurvive += 1;
          break;
        case 'older':
          grimm += 1;
          break;
        case 'children':
          survives += 1;
          disney += 1;
          break;
        default:
          break;
      }

      switch (this.state.question6) {
        case 'noGrimm':
          doesNotSurvive += 1;
          break;
        case 'someGrimm':
          grimm += 1;
          survives += 2;
          break;
        case 'Grimm':
          grimm += 2;
          break;
        default:
          break;
      }

      switch (this.state.question7) {
        case 'noDisney':
          survives += 1;
          grimm += 1;
          break;
        case 'someDisney':
          survives += 2;
          break;
        case 'Disney':
          disney += 4;
          break;
        default:
          break;
      }

      const max = Math.max(survives, doesNotSurvive, grimm, disney);
      let result = '';

      if (max === survives) {
        result = 'survives';
      } else if (max === disney) {
        result = 'disney';
      } else if (max === doesNotSurvive) {
        result = 'doesNotSurvive';
      } else if (max === grimm) {
        result = 'grimm';
      }
      this.setState({
        result,
      });
    }

      renderResult = () => {
        console.log(this.state.result);
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
        if (this.state.result === 'grimm') {
          return (
            <Result
              result="GRIMM"
              image={Grimm}
              description="Your story lives on, but it was rewritten by the Grimm brothers. No one knows it was you that came up with the original tale, but you hold it dear to your heart still."
            />
          );
        }
        if (this.state.result === 'disney') {
          return (
            <Result
              result="DISNEY"
              image={Disney}
              description="Your story lives on, but it was rewritten completely by Walt Disney. You can barely even tell the current tale was once your story."
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
          <div className="quiz own-quiz">
            <Question
              title="Who are your main characters?"
              answer1="A child and her parents."
              answer2="A married couple."
              answer3="A brother and sister."

              answerval1="child"
              answerval2="couple"
              answerval3="siblings"

              image1={child}
              image2={couple}
              image3={siblings}

              onSelect={this.saveQuestion1}
            />
            <Question
              title="What is the moral of your story?"
              answer1="Always listen to your parents."
              answer2="Treat the environment well."
              answer3="Don't judge a book by its cover."

              answerval1="parents"
              answerval2="strangers"
              answerval3="cautious"

              image1={listen}
              image2={stranger}
              image3={book}
              onSelect={this.saveQuestion2}
            />
            <Question
              title="Where are you telling the story from?"
              answer1="Germany"
              answer2="France"
              answer3="England"

              answerval1="germany"
              answerval2="france"
              answerval3="england"

              image1={germany}
              image2={france}
              image3={england}

              onSelect={this.saveQuestion3}
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

              onSelect={this.saveQuestion4}
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
              image3={children}
              onSelect={this.saveQuestion5}
            />
            <Question
              title="Two brothers approach you asking to retell your story. What do you say?"
              answer1="No way"
              answer2="Sure, but don't change it too much"
              answer3="Change it as you'd like"

              answerval1="noGrimm"
              answerval2="someGrimm"
              answerval3="Grimm"

              image1={noGrimm}
              image2={someGrimm}
              image3={Grimm}
              onSelect={this.saveQuestion6}
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

              onSelect={this.saveQuestion7}
            />
            {this.renderResult()}
            <button className="button submit" type="button" onClick={this.submit}>Submit</button>
          </div>
        );
      }
}

export default ChooseYourOwn;
