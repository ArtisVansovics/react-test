import React, { FC } from 'react';
import './Card.scss';

type CardProps = {
  image: string
  name: string
  eppSeason: number
  eppNumber: number
  length: number
  rating: number
}

const Card:FC<CardProps> = ({
  image, name, eppSeason, eppNumber, length, rating,
}) => (
  <div className="card">
    <div className="card__row">
      {(image) ? (
        <img
          className="card__image"
          src={image}
          alt={name}
        />
      )
        : (
          <img
            className="card__image"
            // eslint-disable-next-line max-len
            src="https://static.wikia.nocookie.net/homelandtv/images/2/25/Homeland_Season_2_Cast_Promo.jpg/revision/latest?cb=20130721020146"
            alt="placeholder"
          />
        )}
    </div>
    <div className="card__row">
      <div className="card__box">
        <p>{name}</p>
        <p>{`length: ${length}m`}</p>
      </div>
      <div className="card__box align-right">
        <p>
          {eppNumber < 10
            ? `s0${eppSeason}e0${eppNumber}`
            : `s0${eppSeason}e${eppNumber}`}
        </p>
        {rating && <p>{`Rating: ${rating}`}</p>}
      </div>
    </div>
  </div>
);

export default Card;
