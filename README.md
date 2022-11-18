# twitterNunki

Start the project 

yarn && yarn build && yarn start


URL : /users/{userId} : Retrieves a user's informations
METHOD : GET
curl --location --request GET 'localhost:3000/users/831297523901935616'

URL : /search/... : Retrieves popular tweets where there is the keyword (q), the keyword (media) is used to tell if the tweet should have a media or not
METHOD : GET
curl --location --request GET 'localhost:3000/search?q=fortnite&media=false'
