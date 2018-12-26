import React, { Component } from 'react';

class Jumbotron extends Component {
  render() {
    return (
      <section class="hero is-medium is-light is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Fictional Client Generator 
            </h1>
            <h2 class="subtitle">
              Practice your web development skills by taking on fake clinent requests
            </h2>
            <a class="button is-large">Generate a Client</a>
          </div>
        </div>
      </section>
    )
  }
}

export default Jumbotron;