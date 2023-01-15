import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditAvatar from './EditAvatar';
import EditProfile from './EditProfile';
import AddPlace from './AddPlace';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState();
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState();
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState();

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  }

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      <EditAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <EditProfile isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <AddPlace isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <PopupWithForm
        title={'Вы уверены?'}
        name={'popup-confirm'}
        submitText={'Да'}
      />
      <ImagePopup />

      <template className='template'>
        <li className='elements__item'>
          <div className='elements__delete'></div>
          <img src='#' alt='' className='elements__image' />
          <div className='elements__content'>
            <h2 className='elements__title'></h2>
            <div className='elements__like-container'>
              <button
                type='button'
                aria-label='Нравится'
                className='elements__like'></button>
              <p className='elements__like-counter'>0</p>
            </div>
          </div>
          <span className='elements__hover'></span>
        </li>
      </template>
    </>
  );
}

export default App;
