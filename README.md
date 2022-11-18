# twitterNunki

# Start the project 

yarn && yarn build && yarn start

# Endpoints

# Users

Retrieves a user's informations

**URL** : /users/{userId}
**METHOD** : GET
```
curl --location --request GET 'localhost:3000/users/831297523901935616'
```

# Search

Retrieves popular tweets where there is the keyword (q), the keyword (media) is used to tell if the tweet should have a media or not

**URL** : /search/... 
**METHOD** : GET
```
curl --location --request GET 'localhost:3000/search?q=fortnite&media=false'
```
