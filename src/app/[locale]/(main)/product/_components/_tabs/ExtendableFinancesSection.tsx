import { MinusCircle } from '@phosphor-icons/react/dist/ssr/MinusCircle'
import { PlusCircle } from '@phosphor-icons/react/dist/ssr/PlusCircle'
import classNames from 'classnames'
import { useState } from 'react'
import { DisplayFinanceData } from './DisplayFinanceData'

interface ExtendableFinancesSectionProps {
  name: string
  className?: string
  value?: number
  classNameContents?: string
  contents?: ExtendableFinancesSectionProps[]
  isExtendable?: boolean
}

export function ExtendableFinancesSection({
  name,
  className,
  value,
  classNameContents,
  contents,
  isExtendable,
}: ExtendableFinancesSectionProps) {
  const [isExtanded, setIsExtanded] = useState(false || !isExtendable)

  const sumContentsValues = (
    contents: ExtendableFinancesSectionProps[],
  ): number => {
    let sum = 0
    for (const child of contents) {
      if (child.value) {
        sum += child.value
      }
      if (child.contents) {
        sum += sumContentsValues(child.contents)
      }
    }
    return sum
  }

  let subpart: JSX.Element[] | undefined

  if (contents) {
    subpart = contents.map((content, i) => {
      return (
        <div
          key={i}
          className={classNames(
            `flex flex-col leading-tight`,
            classNameContents,
          )}
        >
          <ExtendableFinancesSection
            className={content.className}
            name={content.name}
            value={content.value}
            classNameContents={content.classNameContents}
            contents={content.contents}
            isExtendable={content.isExtendable}
          />
        </div>
      )
    })
  }

  return (
    <div
      className={classNames(
        'overflow-hidden transition-all duration-400',
        `${isExtanded ? 'max-h-full' : 'max-h-4'}`,
        `${className ? className : 'text-sm leading-[16.8px] text-white/70'}`,
      )}
    >
      {isExtendable ? (
        <div
          onClick={() => {
            isExtendable && setIsExtanded(!isExtanded)
          }}
          className={classNames({ 'cursor-pointer': isExtendable })}
        >
          <DisplayFinanceData
            name={name}
            Icon={isExtendable && (isExtanded ? MinusCircle : PlusCircle)}
            value={contents ? sumContentsValues(contents) : value || 0}
          />
        </div>
      ) : (
        <DisplayFinanceData
          name={name}
          value={contents ? sumContentsValues(contents) : value || 0}
        />
      )}
      {subpart && <>{subpart}</>}
    </div>
  )
}
