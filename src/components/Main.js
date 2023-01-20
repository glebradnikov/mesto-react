import React, { useState } from 'react';
import Card from './Card';
import { api } from '../utils/Api';

function Main(props) {
  const [userAvatar, setUserAvatar] = useState('');
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    return () => {
      api
        .getUserInfo()
        .then((result) => {
          setUserAvatar(result.avatar);
          setUserName(result.name);
          setUserDescription(result.about);
        })
        .catch((error) => {
          console.log(error);
        });

      api
        .getCards()
        .then((result) => {
          setCards(result);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }, []);

  return (
    <main className='main'>
      <section className='profile'>
        <div className='profile__content'>
          <div className='profile__avatar'>
            <button
              id='edit-avatar-button'
              type='button'
              aria-label='Редактировать'
              className='profile__edit profile__edit_type_avatar'
              onClick={props.onEditAvatar}></button>
            <img src={userAvatar} alt='Аватар' className='profile__image' />
          </div>
          <div className='profile__info'>
            <h1 className='profile__name'>{userName}</h1>
            <button
              id='edit-profile-button'
              type='button'
              aria-label='Редактировать'
              className='profile__edit'
              onClick={props.onEditProfile}></button>
            <p className='profile__workplace'>{userDescription}</p>
          </div>
        </div>
        <button
          type='button'
          aria-label='Добавить'
          className='profile__add'
          onClick={props.onAddPlace}></button>
      </section>

      <section className='elements'>
        <ul className='elements__list'>
          {cards.map((card) => (
            <Card
              key={card._id}
              name={card.name}
              link={card.link}
              onCard={props.onCard}
              likeCounter={card.likes.length}></Card>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
