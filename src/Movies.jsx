// Implement an infinite scrolling component that retrieves items from the API when
// the user hits the bottom of the page. Do not retrieve additional items if the
// max amount of items (totalResults key in response) has already been retrieved.

// Sample API:
// http://www.omdbapi.com/

// Sample Request:
// http://www.omdbapi.com/?apikey=ef37f842&s=Batman&page=1

// BONUS:
// Build a search bar which will query the movie api based on the user input

// How would you handle the FE having 1mil+ items?

// How would you refactor the component to be used with two more APIs / items?

// HINT:
// Please feel free to google how best to capture when a user reaches the bottom of
// the page. We use the node module react-perfect-scrollbar, with the prop onYReachEnd

// React demo environment (as needed): https://repl.it/languages/reactjs

// Sample response:

// {"Search":[{"Title":"Batman Begins","Year":"2005","imdbID":"tt0372784",
// "Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"}],"totalResults":"381","Response":"True"}
