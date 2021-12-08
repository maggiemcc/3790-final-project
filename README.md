# Final Project/Adding Animation:

## Effectively use conditional logic and JavaScript array methods(e.g. Filter, Map, Reduce, Find) to render large lists.

- Some Examples:

1. [characters.map in CharacterContainer.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/pages/CharacterContainer.js)
2. [breakingBadData.episodes.slice(0, 62).map in EpisodesContainer.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/pages/EpisodesContainer.js)
3. [breakingBadData.quotes.map in QuotesContainer.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/pages/QuotesContainer.js)

## Encapsulate your code as React functional components.

- Some Examples:

1. [const Welcome = () => {} export default Welcome; in Welcome.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/pages/Welcome.js)
2. [const NotFound = () => {} export default NotFound; in NotFound.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/pages/NotFound.js)

## Work with command-line tools and NPM to create and manage your project within a real development toolset.

## Allow communication between components using props and the Context API.

- Some examples:

1. [Breaking Bad Context API](https://github.com/maggiemcc/3790-final-project/blob/master/src/contexts/BreakingBadContext.js)
2. [props EX: const { death } = props; ](https://github.com/maggiemcc/3790-final-project/blob/master/src/components/DeathsCard.js)
3. [props EX: const { episode } = props; ](https://github.com/maggiemcc/3790-final-project/blob/master/src/components/EpisodesCard.js)

## Present a form for user input that provides useful form validation and feedback for at least 3 data input items (e.g. name, password).

1. [Login](https://github.com/maggiemcc/3790-final-project/blob/master/src/components/login/LoginForm.js)

- Login asks for email and password.

2. [Signup](https://github.com/maggiemcc/3790-final-project/blob/master/src/components/login/SignupForm.js)

- Signup asks for user name, email, and password.

## Create at least 5 custom components and use them within at least two of your other components.

- Some Examples:

1. [CharacterCard.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/components/CharacterCard.js)
   - Used in [CharacterContainer.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/pages/CharacterContainer.js)
2. [EpisodesCard.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/components/EpisodesCard.js)
   - Used in [EpisodesContainer.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/pages/EpisodesContainer.js)
3. [QuotesCard.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/components/QuotesCard.js)
   - Used in [QuotesContainer.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/pages/QuotesContainer.js)
4. [Character DeathsCard.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/components/DeathsCard.js)
   - Used in [DeathsContainer.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/pages/DeathsContainer.js)
5. [ButtonAppBar.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/components/nav/ButtonAppBar.js)
   - Used in [App.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/App.js)
6. [Login/Signup.js](https://github.com/maggiemcc/3790-final-project/tree/master/src/components/login)
   - Used in [ButtonAppBar.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/components/nav/ButtonAppBar.js)

## Use a mix of CSS animations and Transition Component transitions to enhance some aspects of your project.

- Some Examples:

1. [Fade Transition on Welcome Page (<Fade in timeout={3500}></Fade>)](https://github.com/maggiemcc/3790-final-project/blob/master/src/pages/Welcome.js)
2. [Heart Icon animation (const heartColor = keyframes``; animation: favorite ? `${heartColor}...) on quotes (& character) cards](https://github.com/maggiemcc/3790-final-project/blob/master/src/components/QuotesCard.js)
3. [const buttonColor = keyframes; for login/signup buttons in ButtonAppBar.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/components/nav/ButtonAppBar.js)
4. [Grow Transistion on Character death cards; <Grow in timeout={3000}></Grow](https://github.com/maggiemcc/3790-final-project/blob/master/src/components/DeathsCard.js)

## Connect to a server using Netlify functions and display retrieved data including at least 5 item details (accessed by details route) in your UI.

1. [Netlify Functions: BreakingBad.js](https://github.com/maggiemcc/3790-final-project/blob/master/netlify/functions/breakingBad.js)
2. [Character Details Route: CharacterDetails.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/pages/CharacterDetail.js)

## Provide at least 3 different routes with navigation between them using React Router.

1. [React Router, 10 routes](https://github.com/maggiemcc/3790-final-project/blob/master/src/App.js)

## Manage your application's general and signup/login Authentication state using Hooks and the Context API.

- EX:

## Structure, document, and deploy your final project code according to common industry practices.

## Netlify:

- [Netlify Final Project](https://dgm-3790-final-react-app.netlify.app/)

## API:

- Created using the [BREAKING BAD API](https://breakingbadapi.com/documentation)
