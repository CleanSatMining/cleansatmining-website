import { getSitesData } from '@/api/sites/getSitesData'
import { LightCard } from '@/app/_shared/_components/_site/LightCard'
import { Site } from './Site'

interface Props {}

export const SitesList = ({}: Props): JSX.Element => {
  const items = getSitesData
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-1">
        <LightCard
          alt="alt"
          src={items[0].src}
          subtitle={items[0].description}
          title={items[0].title}
        ></LightCard>
      </div>
      <div className="col-span-4">
        <Site data={items[0]}></Site>
      </div>
      <div className="col-span-1">
        <LightCard
          alt="alt"
          src={items[1].src}
          subtitle={items[1].description}
          title={items[1].title}
        ></LightCard>
      </div>
      <div className="col-span-4">
        {/* Contenu de la deuxième colonne (80%) */}
      </div>
    </div>
  )
}
