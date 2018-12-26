import React, { Component } from 'react'

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.modalClass = this.modalClass.bind(this);
    this.state = {
      active: false,
    };
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({active: !currentState});
  }

  render() {
    return (
        <div className="modal {this.setState.active ? 'is-active' : null}">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
            <h1>Test</h1>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Save changes</button>
            <button className="button">Cancel</button>
          </footer>
        </div>
      </div>
    )
  }
}
