import { Component } from 'react';
import Section from './Section';
import Notification from 'components/Notification/Notification';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

const OPTIONS = ['good', 'neutral', 'bad'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evt => {
    const option = evt.target.id;
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const optionValues = Object.values(this.state);
    return optionValues.reduce((previousValue, optionValue) => {
      return previousValue + optionValue;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (!total) {
      return '0';
    }
    return ((good * 100) / total).toFixed();
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <><Section title="Please, leave your feedback">
        <FeedbackOptions
          options={OPTIONS}
          onLeaveFeedback={this.onLeaveFeedback} />
      </Section><Section title="Please, leave your feedback two">
          
     
    <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
  
    <Notification message="There is no feedback" />
  
         
        </Section></>
    );
  }
}

export { App };
