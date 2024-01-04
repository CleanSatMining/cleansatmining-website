# [#4488](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/4488/) Signup Page

Page to register as a user in the application.
It will be composed of 6 fields :

- email (required)
- password (required)
- password validation (required)
- country (required)
- citizenship (required)
- terms and conditions (required true)

Tasks:
[#4842](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/4842) [INT] Formulaire inscription
[#4844](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/4844) [FO] Gestion du formulaire (erreurs, soumission)
[#5003](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/5003) [INT] Intégration nouveaux champs du formulaire[#5002](https://dev.azure.com/coexya-dgl/RealT.CSM/_workitems/edit/5002) [FO] Dev front formulaire d'inscription (nouveaux champs)

## Prerequisites

- Sign up is done via email, password, country and citizenship .
- Install formik and yup libraries to make forms.
- No validation regex for password. Simple validation for mail
- No verification by email is done, client is directly verified for now

## Conception

- Installation of formik and yup libraries.
- Creation of the subfolder signup in [locale] folder and its page.tsx to create the route.
- Creation of the email and password input components in src/app/components/forms. See to make them autonomous and reusable
- Creation of the country and citizenship select components in src/app/components/forms. See to make them autonomous and reusable
- Creation of the termsAndConditions checkbox in src/app/components/forms.
- Integration of the form in the page.tsx
- Retrieve graphql api call to sign up
- Handle the errors of the form if both passwords don't match.
- Handle the error if the email is already used
- Write the submit method that will send the signup call in the signup form component.

## Tests

- If I type a wrong email, an error is displayed telling me that my email hasn't the right format
- If I type different passwords, an error tells me that my password aren't identical
- If every input is correctly filled and termsAndConditions is checked, my account is created directly and I can login with.

## Reminders for RealT Project

A custom verification via email and kyc will have to be done later, registered client won't be directly verified.
