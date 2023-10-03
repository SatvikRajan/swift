import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './News.css';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';

const responsive = {
  0: {
    items: 1,
  },
  720: {
    items: 2, // Adjust the number of items to display on medium screens
  },
  1024: {
    items: 4, // Adjust the number of items to display on larger screens
  },
};

export default function News() {
  const newsItems = [
    {
      id: 1,
      imageSrc: image1,
      title: 'Asia-US container rates tick lower; Canada port strike enters 7th day',
      description: 'Network of strategically based sites located on port (within 1km of container terminals) and off-port (within 15kms of capital city industrial zones) ',
    },
    {
        id: 2,
        imageSrc: image2,
        title: 'World Shipping Council Releases Containers Lost At Sea Report',
        description: 'Network of strategically based sites located on port (within 1km of container terminals) and off-port (within 15kms of capital city industrial zones) ',
      },
      {
        id: 3,
        imageSrc: image3,
        title: 'Top Shipping Stocks for Q2 2023',
        description: 'ZIM Integrated Shipping Services, Kirby Corp., and Ardmore Shipping are the top performers for value, growth, and momentum, respectively.',
      },
      {
        id: 4,
        imageSrc: image3,
        title: 'Aurizon wins rail freight contract from TGE in Australia',
        description: 'The company will offer rail linehaul services that will link Perth, Adelaide, Melbourne, Sydney and Brisbane.',
      },
    // Add more news items as needed
  ];

  return (
    <div className="mainbox">
      <p id='newshead'>News</p>
      <div className="carousel-container">

      <AliceCarousel
        autoPlay 
        autoPlayInterval={1000} 
        // animationDuration={1500}
        responsive={responsive}
        animationType="fadeout" 
        infinite
        mouseTrackingEnabled
        disableDotsControls={true} 
        disableButtonsControls={true} 
        >
        {newsItems.map((item) => (
            <div key={item.id} className='box1'>
            <img src={item.imageSrc} alt="" id='image' />
                <p id='newshead1'>{item.title}</p>
                <p id='newsdesc'>{item.description}</p>
            <div className="news-content">
                <a href="rm" id='btn'>Read More</a>
            </div>
          </div>
        ))}
      </AliceCarousel>
    </div>
    </div>
  );
}
