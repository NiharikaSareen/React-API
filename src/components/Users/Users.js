import React from "react";
import axios from "axios";
import SingleUser from "./SingleUser";

export default class Users extends React.Component {
  state = {
    persons: [],
    id: 1,
    person: null
  };
  handleId = e => {
    console.log(e.target.id, "niharik");
    axios.get(`https://reqres.in/api/users/${e.target.id}`).then(res => {
      this.setState({
        person: res.data.data
      });
    });
  };
  componentDidMount() {
    axios.get(`https://reqres.in/api/users/`).then(res => {
      console.log("hello");
      const persons = res.data.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.persons.map(person => (
            <li key={person.id} id={person.id} onClick={this.handleId}>
              {person.first_name}
            </li>
          ))}
        </ul>
        <SingleUser person={this.state.person} />
      </div>
    );
  }
}
