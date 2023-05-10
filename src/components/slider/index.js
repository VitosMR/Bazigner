import React, { useState, useEffect } from 'react';
import '../slider/style.css';

const Slider = () => {
const [currentSlide, setCurrentSlide] = useState(0);

const slides = [
    {
      id: 1,
      title: 'Mobile',
      text: 'lorem lorem lorem loremlorem loremlorem ',
      imageUrl: 'https://images.pexels.com/photos/54284/pexels-photo-54284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      downloadUrl: 'url для завантаження першої картинки',
      learnMoreUrl: 'url для детальнішої інформації про першу картинку',
      phoneIconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRERUJ_eT2apU9T0hfPmd5wEuyBLp-L_NJtDg&usqp=CAU',
      androidUrl: 'https://cdn.pixabay.com/photo/2018/05/08/21/08/android-3383929_640.png',
      iosUrl: 'url до додатку iOS',
    },
    {
      id: 2,
      title: 'Заголовок 2',
      text: 'Додатковий текст 2',
      imageUrl: 'https://images.pexels.com/photos/33488/navigation-car-drive-road.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      downloadUrl: 'url для завантаження другої картинки',
      learnMoreUrl: 'url для детальнішої інформації про другу картинку',
      phoneIconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRERUJ_eT2apU9T0hfPmd5wEuyBLp-L_NJtDg&usqp=CAU',
      androidUrl: 'https://cdn.pixabay.com/photo/2018/05/08/21/08/android-3383929_640.png',
      iosUrl: 'url до додатку iOS',
    },
    {
      id: 3,
      title: 'Заголовок 3',
      text: 'Додатковий текст 3',
      imageUrl: 'https://images.pexels.com/photos/163042/pokemon-pokemon-go-mobile-trends-smartphone-163042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      downloadUrl: 'url для завантаження третьої картинки',
      learnMoreUrl: 'url для детальнішої інформації про третю картинку',
      phoneIconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRERUJ_eT2apU9T0hfPmd5wEuyBLp-L_NJtDg&usqp=CAU',
      androidUrl: 'https://cdn.pixabay.com/photo/2018/05/08/21/08/android-3383929_640.png',
      iosUrl: 'url до додатку iOS',
    },
];

  const handleSlideClick = (index) => {
    setCurrentSlide(index);
  };

  const handleNextSlide = () => {
    const nextSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    setCurrentSlide(nextSlide);
  };

  const handlePrevSlide = () => {
    const prevSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(prevSlide);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);
return (
 <div className="slider-container">
      <div className="slider">
        <div className="slider__image-container">
          <img
            src={slides[currentSlide].imageUrl}
            alt={slides[currentSlide].title}
            className="slider__image"
          />
          <div className="slider__buttons-container">
            <button
              className="slider__button slider__button--download"
              onClick={() => window.open(slides[currentSlide].downloadUrl)}
            >
              Download
            </button>
            <button
              className="slider__button slider__button--learn-more"
              onClick={() => window.open(slides[currentSlide].learnMoreUrl)}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="slider__text-container">
          <h2 className="slider__title">{slides[currentSlide].title}</h2>
          <p className="slider__text">{slides[currentSlide].text}</p>
          <div className="slider__phone-icons-container">
            <button
              className="slider__phone-icon"
              onClick={() => window.open(slides[currentSlide].androidUrl)}
            >
              <img
                src={slides[currentSlide].phoneIconUrl}
                alt="Android App"
                className="slider__phone-icon-image"
              />
            </button>
            <button
              className="slider__phone-icon"
              onClick={() => window.open(slides[currentSlide].iosUrl)}
            >
              <img
                src={slides[currentSlide].phoneIconUrl}
                alt="iOS App"
                className="slider__phone-icon-image"
              />
            </button>
          </div>
        </div>
        <div className="slider__controls-container">
          <button 
            className="slider__control slider__control--previous"
            onClick={handlePrevSlide}
          >
            
            {'<'}
          </button>
          <div className=" previems">
          <button
            className="slider__control slider__control--next"
            onClick={handleNextSlide}
            >
            {'>'}
</button>
            </div>
</div>
</div>
<div className="slider__dots-container">
{slides.map((slide, index) => (
<button
key={slide.id}
className={`slider__dot ${index === currentSlide ? 'active' : ''} `}
onClick={() => handleSlideClick(index)}
/>
))}
</div>
</div>
);
};
export default Slider;