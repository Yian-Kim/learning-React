import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

// const moviesTitles = [
//   "Matrix",
//   "Full Metal Jacket",
//   "Oldboy",
//   "Star Wars"
// ]

// const movieImages = [
//   "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
//   "https://posterspy.com/wp-content/uploads/2018/06/small-NEW-fmj-version-3-copy.jpg",
//   "https://fem-img.herokuapp.com/151f5a70b095ed25f97abbfe5f0e359f91fa12e4/?url=http%3A%2F%2Fimg.moviepostershop.com%2Foldboy-movie-poster-2013-1020769011.jpg",
//   "https://oyster.ignimgs.com/wordpress/stg.ign.com/2019/01/celebration-chicago-key-art-720x1066.jpg"
// ]

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> component

  state = {

  }

  componentDidMount(){
    fetch('https://yts.ag/api/v2/list_movies.json?sort_by=rating')
    // setTimeout(() => {
    //   this.setState({
    //     greeting: 'Hello!',
    //     movies: [
    //       {
    //         title: "Matrix",
    //         poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
    //       },
    //       {
    //         title: "Full Metal Jacket",
    //         poster: "https://posterspy.com/wp-content/uploads/2018/06/small-NEW-fmj-version-3-copy.jpg"
    //       },
    //       {
    //         title: "Oldboy",
    //         poster: "https://fem-img.herokuapp.com/151f5a70b095ed25f97abbfe5f0e359f91fa12e4/?url=http%3A%2F%2Fimg.moviepostershop.com%2Foldboy-movie-poster-2013-1020769011.jpg"
    //       },
    //       {
    //         title: "Star Wars",
    //         poster: "https://oyster.ignimgs.com/wordpress/stg.ign.com/2019/01/celebration-chicago-key-art-720x1066.jpg"
    //       },
    //       {
    //         title: "Transpotting",
    //         poster: "https://oyster.ignimgs.com/wordpress/stg.ign.com/2019/01/celebration-chicago-key-art-720x1066.jpg"
    //       }
    //     ]
    //   })
    // }, 1000)

    // setTimeout(() => {
    //   this.setState({
    //     greeting: 'Hello again!'
    //   })
    // }, 2000)
  }

  _renderMovies = () => {
    // const movies = [<Movie props />, <Movie props />]
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {/* <Movie title={moviesTitles[0]} poster={movieImages[0]} />
        <Movie title={moviesTitles[1]} poster={movieImages[1]} />
        <Movie title={moviesTitles[2]} poster={movieImages[2]} />
        <Movie title={moviesTitles[3]} poster={movieImages[3]} /> */}
        {/* this.state.greeting */}
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    )
  }
}

export default App;
