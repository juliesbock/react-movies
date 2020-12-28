import React from "react";
const API_KEY = "ef37f842";

export default class Movies2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: "",
      data: null,
      userInput: "",
      page: 1
    };
  }

  getMovieData = () => {
    const { userInput, page } = this.state;
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${userInput}&page=${page}`;
    this.setState({ data: null, page: this.state.page + 1 });

    fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        if (res.Response === "True") {
          console.log(res.Search);
          this.setState({ data: res.Search });
        } else {
          this.setState({ errors: "Invalid Request" });
        }
      })
      .catch((err) => {
        this.setState({ errors: err });
      });
  };

  handleChange = (e) => {
    this.setState({ userInput: e.target.value, page: 1 });
  };

  render() {
    const { errors, data, userInput, page } = this.state;

    return (
      <>
        <input
          value={userInput}
          onChange={this.handleChange}
          placeholder="Search for movies..."
        />
        <button onClick={this.getMovieData}>Search</button>
        <div>Page Number: {page - 1 + "  "}</div>
        <div>
          {data !== null &&
            data.map((movie, i) => (
              <p key={i}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={"https://www.imdb.com/title/" + movie.imdbID}
                >
                  {movie.Title}
                </a>
                {" (" + movie.Year + ")"}
                <img src={movie.Poster} alt={movie.Title} />
              </p>
            ))}
        </div>
        <div>{errors === null ? "" : errors}</div>
      </>
    );
  }
}
