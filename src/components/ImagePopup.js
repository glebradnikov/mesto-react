function ImagePopup(props) {
  return (
    <div id='popup-image' className='popup popup_type_image'>
      <div className='popup__image-container'>
        <button
          type='button'
          aria-label='Закрыть'
          className='popup__close'></button>
        <figure className='popup__figure'>
          <img src='#' alt='' className='popup__image' />
          <figcaption className='popup__caption'>{props.caption}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
