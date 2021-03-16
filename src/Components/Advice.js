import React from "react";

class Advice extends React.Component {
  state = {
    advice: "Be the best of the best",
  };
  handleClick = () => {
    this.setState({
      advice: "loading...",
    });
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => data.slip)
      .then(({ advice }) => this.setState({ advice: advice }))
      .catch((Err) => console.log(Err));
  };
  render() {
    return (
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <p className="lead mt-3">{this.state.advice}</p>
          <p>by Rinto Libiyanto.</p>
          <button className="btn btn-primary" onClick={this.handleClick}>
            <i className="fas fa-sync fa-fw"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Advice;
