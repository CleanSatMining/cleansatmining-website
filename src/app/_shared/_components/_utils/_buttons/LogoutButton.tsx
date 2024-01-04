'use client'
import { useTranslations } from 'next-intl'
import Button from './Button'
import { SignOut } from '@phosphor-icons/react'
import LabelWithIcon from '../LabelWithIcon'

export default function LogoutButton() {
  const t = useTranslations('AccountPage')
  return (
    <Button
      center={false}
      className="mt-4 w-full border border-grey-400 bg-transparent px-4 text-sm font-semibold text-white"
      onClick={() => console.log('sign out')}
    >
      <LabelWithIcon
        className="gap-3"
        label={t("logOut")}
        Icon={SignOut}
        sizeIcon={24}
      />
    </Button>
  )
}
