import { Checkbox } from '@nextui-org/react'
import PropTypes from 'prop-types'

interface Props {
  type?: 'default'
  iconIconSquareSizeClassName?: any
  valeurFiltreStateProp?: string
  valeurFiltreIconIconSquareSizeClassName?: any
  valeurFiltreStateProp1?: string
  valeurFiltreIconIconSquareSizeClassNameOverride?: any
  valeurFiltreStateProp2?: string
  valeurFiltreIconIconSquareSelectedClassName?: any
  valeurFiltreStateProp3?: string
  valeurFiltreIconIconSquareSelectedClassNameOverride?: any
  valeurFiltreStateProp4?: string
  valeurFiltreIconDivClassName?: any
}

export const FilterSort = ({
  type,
  iconIconSquareSizeClassName,
  valeurFiltreStateProp = 'selected',
  valeurFiltreIconIconSquareSizeClassName,
  valeurFiltreStateProp1 = 'default',
  valeurFiltreIconIconSquareSizeClassNameOverride,
  valeurFiltreStateProp2 = 'selected',
  valeurFiltreIconIconSquareSelectedClassName,
  valeurFiltreStateProp3 = 'default',
  valeurFiltreIconIconSquareSelectedClassNameOverride,
  valeurFiltreStateProp4 = 'default',
  valeurFiltreIconDivClassName,
}: Props): JSX.Element => {
  return (
    <div className=" flex w-full  flex-col items-start gap-[12px] rounded-[24px] border border-solid border-grey-200 bg-grey-100 p-[36px]">
      <div className=" flex w-full  items-center justify-between self-stretch">
        <div className="font-poppins  mt-[-1.00px] w-fit whitespace-nowrap font-semibold text-green">
          FILTRER PAR
        </div>
        <div className=" inline-flex  items-center gap-[4px]">
          <div className="font-poppins  mt-[-1.00px] w-fit whitespace-nowrap font-semibold text-green">
            TRIER PAR
          </div>
        </div>
      </div>
      <div className=" flex w-full items-start justify-between self-stretch">
        <div className=" flex w-full flex-col items-start gap-[10px]">
          <div className=" inline-flex  items-center gap-[12px]">
            <div className="font-texte-m-semibold  mt-[-1.00px] w-fit whitespace-nowrap text-grey-600 ">
              Statut
            </div>
            <div className=" inline-flex  items-center gap-[12px]">
              <Checkbox defaultSelected color="secondary">
                Opérationnel
              </Checkbox>
              <Checkbox defaultSelected color="secondary">
                Financement
              </Checkbox>
              <Checkbox defaultSelected color="secondary">
                {'A venir'}
              </Checkbox>
            </div>
          </div>
          <div className=" inline-flex  items-center gap-[12px]">
            <div className="font-texte-m-semibold text-secondarysecondary-500  mt-[-1.00px] w-fit whitespace-nowrap ">
              Puissance
            </div>
            <div className=" inline-flex  items-center gap-[12px]">
              <Checkbox defaultSelected color="secondary">
                50-100 Mw
              </Checkbox>
              <Checkbox defaultSelected color="secondary">
                100-150 Mw
              </Checkbox>
              <Checkbox defaultSelected color="secondary">
                150-200 Mw
              </Checkbox>
            </div>
          </div>
          <div className=" inline-flex  items-center gap-[12px]">
            <div className="font-texte-m-semibold text-secondarysecondary-500  mt-[-1.00px] w-fit whitespace-nowrap ">
              Type d’énergie
            </div>
            <div className=" inline-flex  items-center gap-[12px]">
              <Checkbox defaultSelected color="secondary">
                {'Nucléaire'}
              </Checkbox>
              <Checkbox defaultSelected color="secondary">
                {'Solaire'}
              </Checkbox>
              <Checkbox defaultSelected color="secondary">
                {'Eolienne'}
              </Checkbox>
              <Checkbox defaultSelected color="secondary">
                {'Hydraulique'}
              </Checkbox>
              <Checkbox defaultSelected color="secondary">
                {'Torchage'}
              </Checkbox>
              <Checkbox defaultSelected color="secondary">
                {'Géothermie'}
              </Checkbox>
            </div>
          </div>
        </div>
        <div className="font-poppins text-base font-semibold leading-[19.2px]">
          Défaut
        </div>
      </div>
    </div>
  )
}

FilterSort.propTypes = {
  type: PropTypes.oneOf(['default']),
  valeurFiltreStateProp: PropTypes.string,
  valeurFiltreStateProp1: PropTypes.string,
  valeurFiltreStateProp2: PropTypes.string,
  valeurFiltreStateProp3: PropTypes.string,
  valeurFiltreStateProp4: PropTypes.string,
}
