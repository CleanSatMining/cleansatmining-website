'use client'
import Box from '@/app/_shared/_components/_utils/Box'
import Button from '@/app/_shared/_components/_utils/_buttons/Button'
import { useMutation } from '@apollo/client'
import { Input } from '@nextui-org/input'
import { useFormik } from 'formik'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { ADD_TO_CART } from '../[slug]/product.graphql'

interface AddToCartBannerProps {
  salesStatus: 'commingSoon' | 'closed' | 'open' | 'lastOpportunities'
  productVariantId: string
  minInvestmentAmount: number
  maxInvestmentAmount: number
}

export default function AddToCartBanner({
  salesStatus,
  productVariantId,
  minInvestmentAmount,
  maxInvestmentAmount,
}: AddToCartBannerProps) {
  const t = useTranslations('ProductPage.AddToCartBanner')
  const router = useRouter()

  let patternTwoDigisAfterComma = /^\d+(\.\d{0,2})?$/
  const schema = Yup.number()
    .min(
      minInvestmentAmount,
      `${t('form.minInvestmentAmountError')} ${minInvestmentAmount}`,
    )
    .test('is-decimal', `${t('form.maxDecimalError')}`, (val: any) => {
      if (val != undefined) {
        return patternTwoDigisAfterComma.test(val)
      }
      return true
    })
    .required(t('form.requiredError'))

  const investmentAmountSchema = Yup.object().shape({
    investmentAmount: maxInvestmentAmount
      ? schema.max(
          maxInvestmentAmount,
          `${t('form.maxInvestmentAmountError')} ${maxInvestmentAmount}`,
        )
      : schema,
  })

  const formik = useFormik({
    initialValues: {
      investmentAmount: minInvestmentAmount,
    },
    validationSchema: investmentAmountSchema,
    onSubmit: (values) => {
      console.log(values)
      if (values.investmentAmount > 0) {
        addItemToCart({
          variables: {
            variantId: productVariantId,
            qty: values.investmentAmount,
          },
        })
      }
    },
  })

  const [addItemToCart] = useMutation(ADD_TO_CART, {
    onCompleted: (data) => {
      if (data?.addItemToOrder?.errorCode) {
        toast.error(data?.addItemToOrder?.message)
        setSubmitting(false)
      } else {
        router.push('/investment-summary')
      }
    },
  })

  const {
    isSubmitting,
    setSubmitting,
    isValid,
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
  } = formik

  if (salesStatus !== 'open' && salesStatus !== 'lastOpportunities') return null

  return (
    <Box className="flex min-h-[169px] flex-col items-center p-8 lg:flex-row">
      <div className="flex justify-center font-title text-2xl font-extrabold lg:w-[60%] lg:text-[32px]">
        {t('investQuestion')}
      </div>
      <form onSubmit={handleSubmit} className="flex justify-end lg:w-[40%] ">
        <div className="flex max-h-fit w-full items-center justify-end gap-7">
          <Input
            data-testid="investmentAmount"
            classNames={{
              base: 'lg:w-[30%]',
              input:
                'text-center font-sans text-[28px] opacity-70 focus:opacity-100 font-semibold [&::-webkit-inner-spin-button]:appearance-none ',
              innerWrapper: 'font-sans text-[28px]  font-bold',
            }}
            isRequired
            variant="underlined"
            endContent={'$'}
            name="investmentAmount"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.investmentAmount.toString()}
            errorMessage={errors.investmentAmount}
          />
          <Button
            data-testid="submitAddToCartForm"
            type="submit"
            className="m-2 max-w-[200px] bg-blue lg:w-1/2 lg:min-w-[100px]"
            disabled={isSubmitting || !isValid}
          >
            {t('buttons.invest')}
          </Button>
        </div>
      </form>
    </Box>
  )
}
