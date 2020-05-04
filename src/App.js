import React from "react";
import "./styles.css";
import {Button} from './Button.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={ color: [112, 130, 76] } //initial color of our component
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

//This method transforms an rgb array into something a bit more readable using the .join() array method
  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }

  handleClick() {
    this.setState({color: this.chooseColor()})
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
            Your color is {this.formatColor(this.state.color)}!
        </h1>
        <Button light={this.isLight()} onClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;