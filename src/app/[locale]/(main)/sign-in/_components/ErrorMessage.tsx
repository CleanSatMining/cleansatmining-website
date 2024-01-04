'use client'
import Box from '@/app/_shared/_components/_utils/Box'
import { ErrorMessageKey } from '@/models/ErrorMessageKey'
import { Icon } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

interface ErrorMessageProps {
  IconName: Icon
  titleKey: ErrorMessageKey
  contentKeys?: ErrorMessageKey[]
}

export default function ErrorMessage({
  IconName,
  titleKey,
  contentKeys,
}: ErrorMessageProps) {
  let t = useTranslations('errors')

  const error = useMemo(
    () => (
      <Box
        className="flex items-center gap-4 px-4 py-2"
        bgColor="dark:bg-grey-700"
      >
        <div>
          <IconName size={24} className="dark:text-red-500" />
        </div>
        <div>
          <div className="gap-1">
            <div>
              <p
                data-testid="errorTitle"
                className="text-sm font-bold dark:text-red-500"
              >
                {t(titleKey)}
              </p>
            </div>
            {contentKeys && (
              <div>
                {contentKeys.map((contentKey) => (
                  <p
                    data-testid={contentKey}
                    className="text-xs"
                    key={contentKey}
                  >
                    {t(contentKey)}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </Box>
    ),
    [t, IconName, titleKey, contentKeys],
  )

  return error
}
