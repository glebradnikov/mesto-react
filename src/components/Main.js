function handleEditAvatarClick() {
  document.querySelector('#popup-avatar').classList.add('popup_opened');
}

function handleEditProfileClick() {
  document.querySelector('#popup-edit-profile').classList.add('popup_opened');
}

function handleAddPlaceClick() {
  document.querySelector('#popup-add-card').classList.add('popup_opened');
}

function Main() {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__content">
          <div className="profile__avatar">
            <button id="edit-avatar-button" type="button"
              aria-label="Редактировать"
              className="profile__edit profile__edit_type_avatar"
              onClick={handleEditAvatarClick}></button>
            <img src="#" alt="Аватар" className="profile__image" />
          </div>
          <div className="profile__info">
            <h1 className="profigle__name">Жак-Ив Кусто</h1>
            <button id="edit-profile-button" type="button"
              aria-label="Редактировать" className="profile__edit" onClick={handleEditProfileClick}></button>
            <p className="profile__workplace">Исследователь океана</p>
          </div>
        </div>
        <button type="button" aria-label="Добавить"
          className="profile__add" onClick={handleAddPlaceClick}></button>
      </section>

      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
    </main>
  );
}

export default Main;
