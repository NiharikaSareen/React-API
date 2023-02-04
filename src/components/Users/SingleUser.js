import React from "react";

class SingleUser extends React.Component {
  state = {
    persons: null
  };
  render() {
    return (
      <div>
        {this.props.person && this.props.person.id}

        <p>{this.props.person && this.props.person.first_name}</p>
      </div>
    );
  }
}

export default SingleUser;
