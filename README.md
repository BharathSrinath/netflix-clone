# Flow of the project:
    # Created Header and Footer
        # Since there is a tint of black color along with background we have positioned Header and Central text in the Home as absolutely positioned.
        # When you get time, please learn more about absolute positioning to understand its intricacies. Faced a lot of challenges implementing it, although it looked simpler.
    # Created Home page
    # Created Login and Sign Up page as a single component which can be toggled
        # Used to firebase to help with authentication.  
        # We imported authentication functions for sign-up, sign-in, sign-out
        # There is a function which manages the auth state of a user. We have avoided that from firebase as it didn't suit our requirements. So we are manually managing the user's state by navigating them to certain pages when they are logged-in and navigating to others while they are logged-out. 
        # Also we are using redux-persist package to store user's session in local storage.   
    # Once authenticated, authentication function returns you the user details. We are placing the user details in a redux store to pass around the application.  
        # Encountered error: ""A non-serializable value was detected in an action" 
            # We tried storing the entire object into redux store. That is not possible as it contained non-serializable values returned by firebase.
            # Redux Toolkit by default requires actions and state to be serializable. (We can change that if we want but with respect to our case we dont want to do that)
            # So later we just extracted the values needed such as userid, email, name and profilePic. With respect to passwords, they are securely managed by firebase and never accessible directly through the client-side or server-side code after a user is created or signed in. However there are function using which we can provide a feature for the user so that they can update the password.
            # IMPORTANT LESSON: In upcoming projects dont store your passwords in state/redux-store/local storage. (Here local storage is not same as browsers password manager)
    # We are obtaining the data for the movies from TMDB where we have registered to get the API keys.
    # We are dividing the browse page into MainContainer and SecondaryContainer.
        # MainContainer: Video Trailer as the background and VideoTitle as the text overlaying on trailer.
        # SecondaryContainer: List of all the videos based on different conditions.
    # Created Dropdown: When clicking the user icon one can see couple of options. 
        # Logout: It will logout based on a firebase pre-defined function
        # Account
    # Created Modal: Clicking on Account opens-up a modal which shows users information.
     Here image and name can be updated. Again this is based on firebase's predefined function.
    # Created Searchbar and integrated openAI API
        # Login into https://platform.openai.com/
        # Generate an API key for our project 
        # npm i --save openai
        # use this boiler plate code  - https://www.npmjs.com/package/openai and create a config file called openai.js
        # We pass the output of the openAI API call to tmdb website and fetch movies
    # We display the fetched movies details in Watch Video Page
    # Added favourites feature
