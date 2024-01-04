import { intlFormats } from '@/app/_shared/_format/format'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { RenderResult, render } from '@testing-library/react'
import { IntlProvider } from 'next-intl'
import React from 'react'
import messages from '../../messages/fr.json'

// Wrapper to render components with the intlProvider. It has to be used in every unit test that renders a component with translation keys.
const renderWithNextIntl = (component: React.ReactNode) => {
  return render(
    <IntlProvider locale="fr" messages={messages} formats={intlFormats}>
      {component}
    </IntlProvider>,
  )
}

// Wrapper to render components with the Apollo MockedProvider. It has to be used in every unit test that renders a component making graphql calls.
const renderWithApolloProvider = (
  component: React.ReactNode,
  mocks?: any[],
) => {
  return render(
    <MockedProvider mocks={mocks ?? []} addTypename={false}>
      {component}
    </MockedProvider>,
  )
}

const renderWithApolloProviderAndNextIntl = (
  component: React.ReactNode,
  mocks?:
    | readonly MockedResponse<Record<string, any>, Record<string, any>>[]
    | undefined,
): RenderResult<
  typeof import('@testing-library/dom/types/queries'),
  HTMLElement,
  HTMLElement
> => {
  return render(
    <MockedProvider
      mocks={mocks ?? []}
      addTypename={false}
      defaultOptions={{ watchQuery: { fetchPolicy: 'no-cache' } }}
    >
      <IntlProvider locale="fr" messages={messages} formats={intlFormats}>
        {component}
      </IntlProvider>
    </MockedProvider>,
  )
}

export {
  renderWithApolloProvider,
  renderWithApolloProviderAndNextIntl,
  renderWithNextIntl,
}
