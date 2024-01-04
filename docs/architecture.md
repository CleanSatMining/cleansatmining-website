
📦ECOMMERCE-NEXTJS
  ┣ 📂__mocks__
  ┣ 📂__tests__
  ┣ 📂docs
  ┃  ┣ 📂decisions
  ┃  ┃  ┣ 📜<chrono> - <title>.md
  ┃  ┃  ┗ 📜...
  ┃  ┣ 📂deployment
  ┃  ┃  ┣ 📜deploy-on-prod.md
  ┃  ┃  ┗ 📜deploy-on-uat.md
  ┃  ┗ 📂development
  ┃     ┗ 📂feature conception
  ┃        ┣ 📂<FEATURE ID> - <FEATURE title>
  ┃        ┃  ┗ 📜<US ID> - <US title> - <Task ID> - <Task ID>.md
  ┃        ┗ 📂...
  ┣ 📂messages
  ┃  ┣📜en.json
  ┃  ┗📜fr.json
  ┣ 📂public
  ┣ 📦src
  ┃  ┣ 📂app
  ┃  ┃  ┣ 📂[locale]
  ┃  ┃  ┃  ┣ 📂(checkout)
  ┃  ┃  ┃  ┃  ┣ 📜layout.tsx
  ┃  ┃  ┃  ┃  ┣ 📂pageCheckout1
  ┃  ┃  ┃  ┃  ┃  ┣ 📂_components                 //components used only in pageCheckout1
  ┃  ┃  ┃  ┃  ┃  ┗ 📜page.tsx
  ┃  ┃  ┃  ┃  ┣ 📂pageCheckout2
  ┃  ┃  ┃  ┃  ┗ 📂...
  ┃  ┃  ┃  ┗ 📂(main)
  ┃  ┃  ┃     ┣ 📜layout.tsx
  ┃  ┃  ┃     ┣ 📂pageMain1
  ┃  ┃  ┃     ┃  ┣ 📂_components                 //components used only in pageMain1
  ┃  ┃  ┃     ┃  ┗ 📜page.tsx
  ┃  ┃  ┃     ┣ 📂pageMain2
  ┃  ┃  ┃     ┗ 📂...
  ┃  ┃  ┣ 📂_shared
  ┃  ┃  ┃  ┣ 📂_components                       //components used at least twice on two different pages
  ┃  ┃  ┃  ┃  ┣ 📂_utils                         //component frequently used throughout the project
  ┃  ┃  ┃  ┃  ┃  ┣ 📂_buttons
  ┃  ┃  ┃  ┃  ┃  ┣ 📂_inputs
  ┃  ┃  ┃  ┃  ┃  ┗ 📂_...
  ┃  ┃  ┃  ┃  ┣ 📂_product
  ┃  ┃  ┃  ┃  ┃  ┣ 📜componentsProduct1.tsx
  ┃  ┃  ┃  ┃  ┃  ┣ 📜componentsProduct2.tsx
  ┃  ┃  ┃  ┃  ┃  ┗ 📜...
  ┃  ┃  ┃  ┃  ┣ 📂_checkout
  ┃  ┃  ┃  ┃  ┗ 📂...
  ┃  ┃  ┃  ┣ 📂_services                         //api call function
  ┃  ┃  ┃  ┃  ┣ 📂_product
  ┃  ┃  ┃  ┃  ┃  ┗ 📜getProduct.tsx
  ┃  ┃  ┃  ┃  ┣ 📂_order
  ┃  ┃  ┃  ┃  ┗ 📂...
  ┃  ┃  ┃  ┣ 📂_helpers
  ┃  ┃  ┃  ┣ 📂_hooks
  ┃  ┃  ┃  ┗ 📂...
  ┃  ┃  ┗ 📂api
  ┃  ┃     ┗ 📂auth
  ┃  ┃        ┗ 📂[...nextauth]
  ┃  ┃           ┗ 📜route.ts                    // interceptor handling the authentication
  ┃  ┣ 📂models
  ┃  ┗ 📂config
  ┣ 📜.env.local
  ┣ 📜graphql.config.yaml
  ┣ 📜jest.config.ts
  ┣ 📜next.config.js
  ┣ 📜tsconfig.json
  ┣ 📜postcss.config.js
  ┣ 📜tailwind.config.ts
  ┗ 📜package.json
