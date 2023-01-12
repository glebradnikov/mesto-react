function App() {
  return (
    <>
      <div id="popup-avatar" className="popup">
        <div className="popup__form-container">
          <button type="button" aria-label="Закрыть"
            className="popup__close"></button>
          <form name="avatar" id="form-avatar" className="popup__form" noValidate>
            <fieldset className="popup__fieldset">
              <legend className="popup__legend">Обновить
                аватар
              </legend>
              <label className="popup__field">
                <input type="url" name="avatar" placeholder="Ссылка на картинку"
                  id="url-input-avatar" className="popup__input" required />
                <span id="url-input-avatar-error" className="popup__error"></span>
              </label>
              <button type="submit" className="popup__submit">Сохранить</button>
            </fieldset>
          </form>
        </div>
      </div>

      <div id="popup-edit-profile" className="popup">
        <div className="popup__form-container">
          <button type="button" aria-label="Закрыть"
            className="popup__close"></button>
          <form name="editProfile" id="form-edit-profile" className="popup__form"
            noValidate>
            <fieldset className="popup__fieldset">
              <legend className="popup__legend">Редактировать профиль</legend>
              <label className="popup__field">
                <input type="text" name="name" placeholder="Имя" minLength="2"
                  maxLength="40" id="name-input-edit-profile"
                  className="popup__input" required />
                <span id="name-input-edit-profile-error"
                  className="popup__error"></span>
              </label>
              <label className="popup__field">
                <input type="text" name="about" placeholder="Место работы"
                  minLength="2" maxLength="200"
                  id="workplace-input-edit-profile" className="popup__input"
                  required />
                <span id="workplace-input-edit-profile-error"
                  className="popup__error"></span>
              </label>
              <button type="submit" name="submit"
                className="popup__submit">Сохранить</button>
            </fieldset>
          </form>
        </div>
      </div>

      <div id="popup-add-card" className="popup">
        <div className="popup__form-container">
          <button type="button" aria-label="Закрыть"
            className="popup__close"></button>
          <form name="addElement" id="form-add-element" className="popup__form"
            noValidate>
            <fieldset className="popup__fieldset">
              <legend className="popup__legend">Новое место</legend>
              <label className="popup__field">
                <input type="text" name="title" placeholder="Название"
                  minLength="2" maxLength="30" id="title-input-add-element"
                  className="popup__input" required />
                <span id="title-input-add-element-error"
                  className="popup__error"></span>
              </label>
              <label className="popup__field">
                <input type="url" name="link" placeholder="Ссылка на картинку"
                  id="url-input-add-element" className="popup__input" required />
                <span id="url-input-add-element-error"
                  className="popup__error"></span>
              </label>
              <button type="submit" className="popup__submit">Создать</button>
            </fieldset>
          </form>
        </div>
      </div>

      <div id="popup-image" className="popup popup_type_image">
        <div className="popup__image-container">
          <button type="button" aria-label="Закрыть"
            className="popup__close"></button>
          <figure className="popup__figure">
            <img src="#" alt="" className="popup__image" />
            <figcaption className="popup__caption">
            </figcaption>
          </figure>
        </div>
      </div>

      <div id="popup-confirm" className="popup">
        <div className="popup__form-container">
          <button type="button" aria-label="Закрыть"
            className="popup__close"></button>
          <form name="confirm" id="form-confirm" className="popup__form" noValidate>
            <fieldset className="popup__fieldset">
              <legend className="popup__legend popup__legend_type_confirm">Вы уверены?
              </legend>
              <button type="submit" className="popup__submit">Да</button>
            </fieldset>
          </form>
        </div>
      </div>

      <template className="template">
        <li className="elements__item">
          <div className="elements__delete"></div>
          <img src="#" alt="" className="elements__image" />
          <div className="elements__content">
            <h2 className="elements__title"></h2>
            <div className="elements__like-container">
              <button type="button" aria-label="Нравится"
                className="elements__like"></button>
              <p className="elements__like-counter">0</p>
            </div>
          </div>
          <span className="elements__hover"></span>
        </li>
      </template>
    </>
  );
}

export default App;
