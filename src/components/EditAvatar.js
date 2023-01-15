import PopupWithForm from './PopupWithForm';

function EditAvatar(props) {
  return (
    <PopupWithForm
      title={'Обновить аватар'}
      name={'edit-avatar'}
      submitText={'Сохранить'}
      isOpen={props.isOpen}
      onClose={props.onClose}>
      <fieldset className='popup__fieldset'>
        <label className='popup__field'>
          <input
            type='url'
            name='avatar'
            placeholder='Ссылка на картинку'
            id='url-input-avatar'
            className='popup__input'
            required
          />
          <span id='url-input-avatar-error' className='popup__error'></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatar;
