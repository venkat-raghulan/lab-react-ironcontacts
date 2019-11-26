import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5)
  };

  randomAdd = evt => {
    let randomIndex = Math.floor(Math.random() * (contacts.length - 1));
    if (this.state.contacts.includes(contacts[randomIndex])) {
      this.randomAdd();
    } else {
      let copy = [...this.state.contacts];
      copy.push(contacts[randomIndex]);
      this.setState({ contacts: copy });
    }
  };

  nameSort = evt => {
    let copy = [...this.state.contacts];
    copy.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({ contacts: copy });
  };

  popSort = evt => {
    let copy = [...this.state.contacts];
    copy.sort((a, b) => a.popularity - b.popularity);
    this.setState({ contacts: copy });
  };

  deleteContact = index => {
    let copy = [...this.state.contacts];
    copy.splice(index, 1);
    this.setState({ contacts: copy });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <br></br>
        <div className="buttonDiv">
          <button onClick={this.randomAdd}>Add random contact</button>
          <button onClick={this.nameSort}>Sort by Name</button>
          <button onClick={this.popSort}>Sort by Popularity</button>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <table className="table">
          <thead>
            <tr className="tableRow">
              <th className="cell">Picture</th>
              <th className="cell">Name</th>
              <th className="cell">Popularity</th>
              <th className="cell">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, index) => (
              <tr className="tableRow" key={index}>
                <td className="cell">
                  <img
                    className="tableImage"
                    src={contact.pictureUrl}
                    alt="userimage"
                  />
                </td>
                <td className="cell">{contact.name}</td>
                <td className="cell">
                  {Math.round(contact.popularity * 100) / 100}
                </td>
                <td className="cell">
                  <button onClick={e => this.deleteContact(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {/* <td>
                <img
                  className="tableImage"
                  src={this.state.contacts[0].pictureUrl}
                  alt="userimage"
                />
              </td>
              <td>{this.state.contacts[0].name}</td>
              <td>
                {Math.round(this.state.contacts[0].popularity * 100) / 100}
              </td> */}
          </tbody>
        </table>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
