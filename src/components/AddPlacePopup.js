import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  return (
    <PopupWithForm
      title={'Новое место'}
      name={'add-card'}
      submitText={'Создать'}
      isOpen={props.isOpen}
      onClose={props.onClose}>
      <fieldset className='popup__fieldset'>
        <label className='popup__field'>
          <input
            type='text'
            name='title'
            placeholder='Название'
            minLength='2'
            maxLength='30'
            id='title-input-add-element'
            className='popup__input'
            required
          />
          <span
            id='title-input-add-element-error'
            className='popup__error'></span>
        </label>
        <label className='popup__field'>
          <input
            type='url'
            name='link'
            placeholder='Ссылка на картинку'
            id='url-input-add-element'
            className='popup__input'
            required
          />
          <span
            id='url-input-add-element-error'
            className='popup__error'></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
