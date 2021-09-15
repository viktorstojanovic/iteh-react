import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Learn more about Manchester United</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('../pages/images/man1.jpg').default}
              text='WE ARE ONE OF THE MOST POPULAR AND SUCCESSFUL SPORTS TEAMS IN THE WORLD, PLAYING ONE OF THE MOST POPULAR SPECTATOR SPORTS ON EARTH. THROUGH OUR 141-YEAR HERITAGE WE HAVE WON 66 TROPHIES, INCLUDING A RECORD 20 ENGLISH LEAGUE TITLES, ENABLING US TO DEVELOP WHAT WE BELIEVE IS ONE OF THE WORLDS LEADING SPORTS BRANDS AND A GLOBAL COMMUNITY OF 1.1 BILLION FANS AND FOLLOWERS.'
              path='/about'
            />
            <CardItem
              src={require('../pages/images/man2.jpg').default}
              text='We have a very popular brand page on Facebook with over 73.3 million connections as of 30 June 2019. In comparison, the New York Yankees have approximately 8.6 million Facebook connections and the Dallas Cowboys have approximately 8.6 million Facebook connections. Furthermore, we have more Facebook connections than the NBA, NFL, NHL and MLB combined.'
              path='/about'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
