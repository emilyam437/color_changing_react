import React from 'react';


// function Colors() {
//     return (
//         <div>
//         <h1>Press the button to find your favorite color.</h1> 
//            <p>Make a note of the colors you like.</p>
//            </div>
//     );
// }


import { Button } from './button';

class Colors extends React.Component {
  constructor(props){
    super(props);
    this.state = { color: this.chooseColor() }
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick() {
    this.setState({
      color: this.chooseColor()
    })
  }
  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

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

  render() {
    return (
      <div>
   <h1>Press the button to find your favorite color.</h1> 
   <p>Make a note of the colors you like.</p>
        <h3 className={this.isLight() ? 'white' : 'black'}>
 Your color is: {this.formatColor(this.state.color)}
        </h3>
         <Button light={this.isLight()} 
         onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Colors;