import React from 'react';
import PropTypes from 'prop-types';

import './MovieCard.scss';

export const MovieCard = ({ imgUrl, title, imdbUrl, description }) => (
  <>
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          src={imgUrl}
          alt={`${title} poster`}
        />
      </figure>
    </div>

    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src="/images/imdb-logo.jpeg" alt="imdb" />
          </figure>
        </div>

        <div className="media-content">
          <p className="title is-8">{ title }</p>
        </div>
      </div>

      <div className="content">
        { description }
        <br />
        <a href={imdbUrl}>
          IMDB
        </a>
      </div>
    </div>
  </>
);

MovieCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
  description: PropTypes.string,
};

MovieCard.defaultProps = {
  description: 'no description',
};
