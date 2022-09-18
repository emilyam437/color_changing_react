import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Colors from "./pages/colors";
import { Contact } from "./pages/contact";
import { AboutMe } from "./pages/aboutme";

export default function AppTwo() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="colors" element={<Colors />} />
          <Route path="contact" element={<Contact />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const purple = '#9933ff';
const green = '#39D1B4';
const yellow = '#FFD712';
const orange = '#ff6600';
const red = '#ff0000';
const colors = [purple, green, yellow, orange, red]

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to Travel Europe</h1>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: 'New User',
                  country: 'Anywhere',
                  city: 'Anywhere',
                  color: green,
                  type: 'Beach'};
    this.country_choice = this.country_choice.bind(this);
    this.city_choice = this.city_choice.bind(this);
    this.change_color = this.change_color.bind(this)
    this.toggleType = this.toggleType.bind(this)
  }
  country_choice(e) {
    const country  = e.target.querySelector(
      'input[class="country"]').value;
      this.setState({
        country: country
      });
  }
  city_choice(e) {
    const city  = e.target.querySelector(
      'input[class="city"]').value;
      this.setState({
        city: city
      });
  }
  change_color() {
    this.setState({
      color: colors[Math.floor(Math.random()*colors.length)]
    });
  }
  toggleType() {
    const newType = this.state.type == 'Beach' ? 'Mountains' : 'Beach';
    this.setState({
      type: newType
    })
  }
  render() {
    let forms = (
      <div>
      <form action="#" onSubmit={this.country_choice}>
      <input type="text" class="country" placeholder="Enter country"/>
      <input type="submit"/>
    </form>
      <form action="#" onSubmit={this.city_choice}>
      <input type="text" class='city' placeholder="Enter city"/>
      <input type="submit"/>
      </form>
      <button onClick={this.change_color}>
        I'm fun!
      </button>
      <p>Click me to change the type of destination</p>
      <button onClick={this.toggleType}>
        {this.state.type}
      </button>
      </div>
    );
    return (
      <div style={{background: this.state.color}}>
        <NavBar />
        <Hello />
        <h3>Hello, {this.state.username}</h3>
        {forms}
        <p>We will help you plan a great vacation in {this.state.city}, {this.state.country}.</p>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
<AppTwo />)

reportWebVitals();
