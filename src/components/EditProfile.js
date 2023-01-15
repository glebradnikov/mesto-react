import PopupWithForm from './PopupWithForm';

function EditProfile(props) {
  return (
    <PopupWithForm
      title={'Редактировать профиль'}
      name={'edit-profile'}
      submitText={'Сохранить'}
      isOpen={props.isOpen}
      onClose={props.onClose}>
      <fieldset className='popup__fieldset'>
        <label className='popup__field'>
          <input
            type='text'
            name='name'
            placeholder='Имя'
            minLength='2'
            maxLength='40'
            id='name-input-edit-profile'
            className='popup__input'
            required
          />
          <span
            id='name-input-edit-profile-error'
            className='popup__error'></span>
        </label>
        <label className='popup__field'>
          <input
            type='text'
            name='about'
            placeholder='Место работы'
            minLength='2'
            maxLength='200'
            id='workplace-input-edit-profile'
            className='popup__input'
            required
          />
          <span
            id='workplace-input-edit-profile-error'
            className='popup__error'></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfile;
