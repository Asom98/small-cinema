import React from 'react'

export const Movie = (props) => {

    let {title, description} = props
    let {posterImage} = description

    posterImage = 'https://cinema-rest.nodehill.se/' + posterImage;

  return  <div className="movie">
    <h2>{title}</h2>
    <img src={posterImage} />
    </div>;
}

export default Movie