# Sign in Page

Page to sign in as a user in the application.

## Prerequisites

- Sign in is done via email and password only.
- Install formik and yup to make forms.
- No validation regex for password. Simple validation for mail
- When signed in, the button shows 'Mon compte'

## Conception

- Create the SignInForm component and load it in the sign in page
- Reuse email and password input components created for the sign up form.
- Integration of the form in the page.tsx - it should be the same as the sign up form
- Retrieve api call to sign in
- Handle the errors of the form if sign in and password don't match.
- Write the submit method that will send the sign in call

## Tests

- If I type wrong credentials, a message error is displayed telling me that my credentials are wrong.
- If I type right credentials, login works and I'm redirected to the homepage, and the login button displays "Mon compte"
- Make automatized unit tests for inputs and their error management.

## Reminders for RealT Project

"Remember me"  functionality exists in the vendure api and can be implemented.
