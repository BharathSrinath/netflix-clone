# Flow of the project:
    # Created Header and Footer
        # Since there is a tint of black color along with background we have positioned Header and Central text in the Home as absolutely positioned.
        # When you get time, please learn more about absolute positioning to understand its intricacies. Faced a lot of challenges implementing it, although it looked simpler.
    # Created Home page
    # Created Login and Sign Up page as a single component which can be toggled
        # Used to firebase to help with authentication.  
        # We imported authentication functions for sign-up, sign-in and sign-out
    # Once authenticated, authentication function returns you the user details. We are placing the user details in a redux store to pass around the application.  
        # Encountered error: ""A non-serializable value was detected in an action" 
            # We tried store the entire object into redux store. That is not possible as it contained non-serializable values returned by firebase.
            # Redux Toolkit by default requires actions and state to be serializable. (We can change that if we want but with respect to our case we dont want to do that)
            # So later we just extracted the values needed such as userid, email, name and profilePic. With respect to passwords, they are securely managed by firebase and never accessible directly through the client-side or server-side code after a user is created or signed in. However there are function using which we can provide a feature for the user so that they can update the password.
            # IMPORTANT LESSON: In upcoming projects dont store your passwords in state/redux-store/local storage. (Here local storage is not same as browsers paswword manager)