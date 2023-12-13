import React from 'react'
import { RenderResult, render } from '@testing-library/react'
import { IntlProvider } from 'next-intl'
import messages from '../../messages/fr.json'
import { MockedProvider } from '@apollo/client/testing'

// Wrapper to render components with the intlProvider. It has to be used in every unit test that renders a component with translation keys.
const renderWithNextIntl = (component: React.ReactNode) => {
  return render(
    <IntlProvider locale="fr" messages={messages}>
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
  mocks?: any[],
): RenderResult<
  typeof import('@testing-library/dom/types/queries'),
  HTMLElement,
  HTMLElement
> => {
  return render(
    <MockedProvider mocks={mocks ?? []} addTypename={false}>
      <IntlProvider locale="fr" messages={messages}>
        {component}
      </IntlProvider>
    </MockedProvider>,
  )
}

export {
  renderWithNextIntl,
  renderWithApolloProvider,
  renderWithApolloProviderAndNextIntl,
}
