import { NavLink } from '@/models/NavLink'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

interface DropdownMenuProps {
  navLink: NavLink
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ navLink }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState<number | undefined>(
    undefined,
  )

  navLink
  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout)
    setIsMenuOpen(true)
  }

  const handleMouseLeave = () => {
    setHoverTimeout(
      window.setTimeout(() => {
        setIsMenuOpen(false)
      }, 300),
    ) // Change this to the number of milliseconds you want
  }
  navLink.href

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={navLink.href}
        target={navLink.external ? '_blank' : undefined}
        rel={navLink.external ? 'noopener noreferrer' : undefined}
      >
        <button
          className={classNames(
            'flex items-center',
            'border-b-[1px] py-1',
            false ? 'border-green' : 'border-transparent',
            false
              ? 'font-semibold leading-5 hover:text-green'
              : 'font-semibold leading-5 hover:border-green',
          )}
        >
          Sites
          <FaChevronDown
            className="text-gray-400 -mr-1 h-5 w-5"
            aria-hidden="true"
          />
        </button>
      </Link>
      {isMenuOpen && (
        <div className="absolute left-0 z-10 mt-1 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <div>
              <a
                href="#"
                className={classNames(
                  'text-grey-400',
                  'block px-4 py-2 text-sm',
                  'hover:bg-grey-100',
                )}
              >
                CSM Alpha
              </a>
            </div>
            <div>
              <a
                href="#"
                className={classNames(
                  'text-grey-400',
                  'block px-4 py-2 text-sm',
                  'hover:bg-grey-100',
                )}
              >
                CSM Beta
              </a>
            </div>
            <div>
              <a
                href="#"
                className={classNames(
                  'text-grey-400',
                  'block px-4 py-2 text-sm',
                  'hover:bg-grey-100',
                )}
              >
                CSM Omega
              </a>
            </div>
            <div>
              <a
                href="#"
                className={classNames(
                  'text-grey-400',
                  'block px-4 py-2 text-sm',
                  'hover:bg-grey-100',
                )}
              >
                CSM Gamma
              </a>
            </div>
            <div>
              <a
                href="#"
                className={classNames(
                  'text-grey-400',
                  'block px-4 py-2 text-sm',
                  'hover:bg-grey-100',
                )}
              >
                CSM delta
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
