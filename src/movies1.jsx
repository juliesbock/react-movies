import React from "react";
const API_KEY = "ef37f842";

export default class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
      error: null,
      userInput: "",
      page: 1
    };
  }

  componentDidMount = () => {
    this.setState({ isLoaded: true, error: null, items: [] });
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.userInput}&page=${this.state.page}`;
    console.log(url);

    fetch(url, { method: "GET" })
      .then((resp) => resp.json())
      .then((resp) => {
        console.log("resp", resp);
        if (resp.Response === "False") {
          this.setState({ error: resp.Error });
        } else {
          this.setState({ items: resp.Search, page: this.state.page + 1 });
        }
      })
      .catch(({ message }) => {
        console.log("m", message);
        this.setState({ error: message, items: [], isLoaded: false });
      });
  };

  handleInput = (e) => {
    this.setState({ userInput: e.target.value, page: 1 });
  };

  render() {
    console.log(this.state);
    const { items, userInput, page, error } = this.state;
    console.log(items);

    return (
      <div>
        {items &&
          items.map((ele, i) => (
            <div key={i}>
              <>
                {ele.Title} ({ele.Year})
              </>
            </div>
          ))}
        Page: {page - 1}
        <input value={userInput} onChange={this.handleInput}></input>
        <button onClick={this.componentDidMount}>Search</button>
        <div>{error !== null && "Error: " + error}</div>
      </div>
    );
  }
}
