import React, { Component } from "react";
import "./App.css";

const employees = [
  {
    id: 0,
    firstName: "Aaron",
    lastName: "Martin",
    votes: 0
  },
  {
    id: 1,
    firstName: "Andy",
    lastName: "Yu",
    votes: 0
  },
  {
    id: 2,
    firstName: "Jessey",
    lastName: "Clarke",
    votes: 0
  },
  {
    id: 3,
    firstName: "Haylee",
    lastName: "Slusser",
    votes: 0
  },
  {
    id: 4,
    firstName: "LaKell",
    lastName: "Lawson",
    votes: 0
  },
  {
    id: 5,
    firstName: "Elijah",
    lastName: "Alcala",
    votes: 0
  }
];

class App extends Component {
  state = {
    members: [],
    employees: []
  };

  componentDidMount() {
    this.setState({ members: employees });
  }

  handleEvent = memberId => {
    const updatedList = this.state.members.map(member => {
      if (member.id === memberId && member.votes === 0) {
        return Object.assign({}, member, {
          votes: member.votes + 1
        });
      } else if (member.id === memberId && member.votes > 0) {
        return Object.assign({}, member, {
          votes: member.votes - 1
        });
      } else {
        return member;
      }
    });

    this.setState({
      members: updatedList
    });
  };

  render() {
    return this.state.members.map(member => (
      <Employee
        key={member.id}
        id={member.id}
        firstName={member.firstName}
        lastName={member.lastName}
        votes={member.votes}
        onVote={this.handleEvent}
      />
    ));
  }
}

class Employee extends Component {
  handleClick = () => {
    this.props.onVote(this.props.id);
  };

  render() {
    return (
      <div className="container App">
        <div className="row">
          <div className="switch col s6">
            <label>
              <input type="checkbox" />
              <span className="lever" onClick={this.handleClick} />
            </label>
          </div>
          <div className="col s6">
            {this.props.firstName} {this.props.lastName}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
