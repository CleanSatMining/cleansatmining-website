# Signup Page

Page to register as a user in the application.
It will be composed of 3 fields :

- email
- password
- password validation

## Prerequisites

- Sign up is done via email and password only.
- Install formik and yup libraries to make forms.
- No validation regex for password. Simple validation for mail
- No verification by email is done, client is directly verified for now

## Conception

- Installation of formik and yup libraries.
- Creation of the subfolder signup in [locale] folder and its page.tsx to create the route.
- Creation of the email and password input components in src/app/components/forms. See to make them autonomous and reusable
- Integration of the form in the page.tsx
- Retrieve graphql api call to sign up
- Handle the errors of the form if both passwords don't match.
- Handle the error if the email is already used
- Write the submit method that will send the signup call in the signup form component.

## Tests

- If I type a wrong email, an error is displayed telling me that my email hasn't the right format
- If I type different passwords, an error tells me that my password aren't identical
- If every input is correctly filled, my account is created directly and I can login with.

## Reminders for RealT Project

A custom verification via email and kyc will have to be done later, registered client won't be directly verified.
