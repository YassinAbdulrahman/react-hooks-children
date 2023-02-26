import React from "react";
import Container from "./Container";
import Example from "./Example";
import Header from "./Header";
function App() {
  return (
    <div className="App">
      <Header header="Hello, I'm in a container!"  description="I'm a description!" />
      <Header header="I'm another container" description="Whoa that's weird!" />
      <Header header="A third container!" description="Cray cray" />
      <Container header="Example header" direction="horizontal">
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
      </Container>
      <Example exampleProp="example value">
        <h1>Example header!</h1>
        <p>Some example text</p>
      </Example>
      <Container header="Example header" textPosition="center">
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
      </Container>
    </div>
  );
}

export default App;
