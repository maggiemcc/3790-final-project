# Final Project/Adding Animation:

## API: Created using the [BREAKING BAD API](https://breakingbadapi.com/documentation)

1.  Effectively use conditional logic and JavaScript array methods(e.g. Filter, Map, Reduce, Find) to render large lists. Some Examples:

    - [characters.map in CharacterContainer.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/pages/CharacterContainer.js)
    - [characterData.characters.find in CharacterDetail.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/pages/CharacterDetail.js)
    - [breakingBadData.episodes.slice(0, 62).map in EpisodesContainer.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/pages/EpisodesContainer.js)
    - [breakingBadData.quotes.map in QuotesContainer.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/pages/QuotesContainer.js)
<br></br>

2.  [Encapsulate your code as React functional components](https://github.com/maggiemcc/3790-final-project/blob/master/src/components)

3.  [Work with command-line tools and NPM to create and manage your project within a real development toolset](https://github.com/maggiemcc/3790-final-project/blob/master/package.json)

4.  [Allow communication between components using props and Context API](https://github.com/maggiemcc/3790-final-project/blob/master/src/contexts/BreakingBadContext.js)

5.  [Present a form for user input that provides useful form validation and feedback for at least 3 data input items (e.g. name, password)](https://github.com/maggiemcc/3790-final-project/blob/master/src/components/login/SignupForm.js)

    - ```validationSchema={Yup.object().shape({
             userName: Yup.string()
               .min(4, "Must be at least 4 characters")
               .max(50, "Must be less than 50 characters")
               .required("User name is required"),
             email: Yup.string()
               .email("This must be a valid email")
               .max(100)
               .required("Email required"),
             password: Yup.string()
               .min(6, "Password must have at least 6 characters")
               .max(50, "Password should not exceed 50 characters")
               .required("Password required"),
           })}

6.  [Create at least 5 custom components and use them within at least two of your other components](https://github.com/maggiemcc/3790-final-project/tree/master/src/components) Some Examples:

    - [CharacterCard.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/components/CharacterCard.js) used in [CharacterContainer.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/pages/CharacterContainer.js)
    - [EpisodesCard.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/components/EpisodesCard.js) used in [EpisodesContainer.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/pages/EpisodesContainer.js)
    - [QuotesCard.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/components/QuotesCard.js) used in [QuotesContainer.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/pages/QuotesContainer.js)
    - [Character DeathsCard.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/components/DeathsCard.js) used in [DeathsContainer.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/pages/DeathsContainer.js)
    - [Login/Signup.js](https://github.com/maggiemcc/3790-final-project/tree/master/src/components/login) used in [ButtonAppBar.js](https://github.com/maggiemcc/3790-final-project/blob/master/src/components/nav/ButtonAppBar.js)
<br></br>

7.  1.  [EX: Use a mix of CSS animations](https://github.com/maggiemcc/3790-final-project/blob/master/src/components/nav/ButtonAppBar.js) 
         - `const menuWobble = keyframes 0%, 100% {transform: rotate(0deg);} 50% {transform: rotate(3deg);}`
         - ```<Box sx={{animation: `${buttonWobble} 10s ease-in-out infinite`}}>```

      2. [EX: Transition Component transitions to enhance some aspects of your project.](https://github.com/maggiemcc/3790-final-project/blob/master/src/components/QuotesCard.js)
         - ````<Grow in timeout={3000}><Box>...</Box></Grow>````
<br></br>

8.  [Connect to a server using Netlify functions](https://github.com/maggiemcc/3790-final-project/blob/master/netlify/functions/breakingBad.js)

    - [Display retrieved data including at least 5 item details (accessed by details route) in your UI.](https://github.com/maggiemcc/3790-final-project/blob/master/src/pages/CharacterDetail.js) 
    - `<Typography>{character.name}</Typography>` 
    - `<img src={character.img} />` 
    - `<Typography>{character.nickname}</Typography>` 
    - `<Typography>{character.portayed}</Typography>` 
    - `<Typography>{character.birthday}</Typography>` 
    - `<Typography>{character.status}</Typography>` 
    - `<Box>{character.occupation.map((occupation, index) => {...})}</Box>`
<br></br>

9.  [Provide at least 3 different routes with navigation between them using React Router.](https://github.com/maggiemcc/3790-final-project/blob/master/src/App.js)

    - `<Route path="/characters">...</Route>`
    - `<Route path="/quotes">...</Route>`
    - `<Route path="/episodes">...</Route>`
    - `<Route path="/deaths">...</Route>`
    - `<Route path="/favorites">...</Route>`
<br></br>

10. [Manage your application's general and signup/login Authentication state using Hooks and the Context API.](https://github.com/maggiemcc/3790-final-project/blob/master/src/components/login)

11. Structure, document, and deploy your final project code according to common industry practices:

   - [Netlify Final Project Link](https://dgm-3790-final-react-app.netlify.app/)
