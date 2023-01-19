function Card(props) {
  const handleCardClick = () => {
    props.onCard(props);
  };

  return (
    <li className='elements__item' key={props._id}>
      <div className='elements__delete'></div>
      <img
        src={props.link}
        alt={props.name}
        className='elements__image'
        onClick={handleCardClick}
      />
      <div className='elements__content'>
        <h2 className='elements__title'>{props.name}</h2>
        <div className='elements__like-container'>
          <button
            type='button'
            aria-label='Нравится'
            className={`elements__like ${
              props.isCardLike ? 'elements__like_active' : ''
            }`}></button>
          <p className='elements__like-counter'>{props.likeCounter}</p>
        </div>
      </div>
      <span className='elements__hover'></span>
    </li>
  );
}

export default Card;
