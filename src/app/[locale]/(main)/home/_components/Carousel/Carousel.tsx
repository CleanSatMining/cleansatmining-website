import { getSitesData } from '@/api/sites/getSitesData'
import { FullCard } from '@/app/_shared/_components/_site/FullCard'
import { StatusCode } from '@/app/_shared/_components/_site/Types'
import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const SiteData = getSitesData

  const settings = {
    className: 'center',
    centerMode: true,
    dots: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    centerPadding: '0px',
    afterChange: (index: number) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div
      id="content"
      className="content"
      style={{ padding: 0, margin: 0, width: '100%' }}
    >
      <div id="container" className="" style={{ width: '100%' }}>
        <Slider {...settings}>
          {SiteData.map((item, index) => (
            <div key={item.id}>
              <FullCard
                alt={item.alt}
                src={item.src}
                title={item.title}
                subtitle={item.description}
                status={item.status}
                statusCode={item.statusCode as StatusCode}
                selected={index === currentSlide}
              ></FullCard>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
