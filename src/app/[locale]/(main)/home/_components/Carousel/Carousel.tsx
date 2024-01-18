import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { SiteCard } from './SiteCard'

const SiteData = [
  {
    id: 1,
    title: 'CSM Alpha',
    description: 'Parc des Virunga (RDC)',
    status: 'Opérationnel',
    alt: 'CSM Alpha',
    src: 'https://cleansatmining.com/data/files/img-7708352.jpg',
  },
  {
    id: 2,
    title: 'CSM Beta',
    description: "Barrage d'Itaipu (Paraguay)",
    status: 'Opérationnel',
    alt: 'CSM Beta',
    src: 'https://cleansatmining.com/data/files/ddd..jpg',
  },
  {
    id: 3,
    title: 'CSM Omega',
    description: 'Carélie du Sud (Finlande)',
    status: 'Opérationnel',
    alt: 'CSM Omega',
    src: 'https://cleansatmining.com/data/files/434184-1260x630-finlande.jpg',
  },
  {
    id: 4,
    title: 'CSM Gamma',
    description: 'Åsele (Suède)',
    status: 'Opérationnel',
    alt: 'CSM Gamma',
    src: 'https://cleansatmining.com/data/files/img_3861.jpg',
  },
  {
    id: 5,
    title: 'CSM Delta',
    description: 'Oregon (USA)',
    status: 'Opérationnel',
    alt: 'CSM Delta',
    src: 'https://cleansatmining.com/data/files/mount-hood-reflected-in-mirror-lake-oregon.jpg',
  },
]

export function Carousel() {
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
    centerPadding: '60px',
  }
  return (
    <div
      id="content"
      className="content"
      style={{ padding: 0, margin: 0, width: '100%' }}
    >
      <div id="container" className="" style={{ width: '100%' }}>
        <Slider {...settings}>
          {SiteData.map((item) => (
            <div key={item.id} style={{ padding: '20px' }}>
              <SiteCard
                alt={item.alt}
                src={item.src}
                title={item.title}
                subtitle={item.description}
                status={item.status}
              ></SiteCard>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
