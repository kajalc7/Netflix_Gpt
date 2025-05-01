 ## Netflix GPT
    -installed using vite
    -configured tailwind css
    -Routing
    -Header
    -Login Form
    -signup form
    -form validation(using rejex)
    -useRef Hook
    -authentication using google firebase(backend)
    -deploying our app to  production
    -create signup/signin user api
    -we want the user object we logged in to store in redux store which we will be further using it fo browsing our app
    -created redux store with userslice
    -implemented signput
    -update profile
    -Bug fix : Signup user display name and profile picture update
    -Bug Fix: If a user is not loggedin redirect/browse to login page and viceversa
    -Unsubscribed to the onauthstatechange callback
    -Added hardcoded values to the constants file
    -Registred TMDB and created app
    -get data from TMDB now playing movie list API
    -added movieslice reducer and  in redux store stored movie data
    -creating custom hook
    -added main container file for video title and video background
    -added secondary container for n number of files which will display as cards with its details
    -added trailer using redux store
    -created custom hook for trailer video
    -applied css for trailer video
    -added movie card and displayed movielist for diff genre
    -added popular movie list also using custom hook
    -Gpt Search feature
    -handled toggle functionality using redux  for got search view
    -improved css in searchgpt component
    -added language preference using modular coding
    -language prefercne using redux store
    -visibility of language selection only if user is on gptsearch page
    -when user is on gpt search page user change gpt search button to home page

# ChatGpt
    -generated api key from platform.openai.com
    -install npm open ai
    -added chatgpt code to fetch movies on based on prompt passed
    -make the result given bt openai in form of array and for each moview will make Tmdb api call to get the movie 


# Features

    -Login/signup page
        -signin/signup free
        -redirect to browse page

    -Browse page for logged in user
    -Header
    -Main movie
        -Trailer in background
        -Title and description
        -Movie suggestion
            -MovieList(so many based on categories)

    -Netflix GPt
        -Search Bar
        -Movie suggestion
