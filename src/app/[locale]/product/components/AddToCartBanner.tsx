'use client'
import Box from '@/components/Box'
import Button from '@/components/button/Button'
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
  productId: string
  minInvestmentAmount: number
  maxInvestmentAmount: number
}

export default function AddToCartBanner({
  salesStatus,
  productId,
  minInvestmentAmount,
  maxInvestmentAmount,
}: AddToCartBannerProps) {
  const t = useTranslations('ProductPage.AddToCartBanner')
  const router = useRouter()

  let patternTwoDigisAfterComma = /^\d+(\.\d{0,2})?$/
  const investmentAmountSchema = Yup.object().shape({
    investmentAmount: Yup.number()
      .min(
        minInvestmentAmount,
        `${t('form.minInvestmentAmountError')} ${minInvestmentAmount}`,
      )
      .max(
        maxInvestmentAmount,
        `${t('form.maxInvestmentAmountError')} ${maxInvestmentAmount}`,
      )
      .test('is-decimal', `${t('form.maxDecimalError')}`, (val: any) => {
        if (val != undefined) {
          return patternTwoDigisAfterComma.test(val)
        }
        return true
      })
      .required(t('form.requiredError')),
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
            variantId: productId,
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
      }
      router.push('/cart')
    },
  })

  const { isSubmitting, isValid } = formik

  if (salesStatus !== 'open' && salesStatus !== 'lastOpportunities') return null

  return (
    <Box className="flex min-h-[169px] flex-col items-center p-8 lg:flex-row">
      <div className="flex justify-center font-title text-2xl font-extrabold lg:w-[60%] lg:text-[32px]">
        {t('investQuestion')}
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex justify-end lg:w-[40%] "
      >
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.investmentAmount.toString()}
            errorMessage={formik.errors.investmentAmount}
          />
          <Button
            data-testid="submitAddToCartForm"
            type="submit"
            className="m-2 lg:w-1/2 lg:min-w-[100px] max-w-[200px] bg-blue"
            disabled={isSubmitting || !isValid}
          >
            {t('buttons.invest')}
          </Button>
        </div>
      </form>
    </Box>
  )
}
