import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './movie.css';

function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map( (genre, index) => <MovieGenre genre={genre} key={index} /> )}
                </div>
                <p className="Movie__synopsis">
                    <LinesEllipsis 
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </p>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}){
    return (
        <img className="Movie__poster" src={poster} alt={alt} title={alt} />
    )
}

function MovieGenre({genre}){
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

Movie.PropTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string,
    genres : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired
}

MoviePoster.PropTypes = {
    poster : PropTypes.string.isRequired,
}

export default Movie