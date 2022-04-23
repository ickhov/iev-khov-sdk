# LibLab Assessment SDK

LibLab Assessment SDK written using JavaScript.

## Set up the project

- Create a .env file and paste the following data into it

  ```
  NODE_ENV=development
  PORT=8000
  TOKEN=paste-your-Lord-of-the-Rings-API-token-here
  ```

- Install the dependencies
  ```
  npm install
  ```

## Run the project

All of the API endpoints in this project calls the SDK modules.

Run the following command
```
npm start
```
Access the API through http://0.0.0.0:8000 and you can use the same endpoints as [The Lord of the Rings APIs](https://the-one-api.dev/documentation) which includes:
- /book
- /book/{id}
- /book/{id}/chapter
- /movie
- /movie/{id}
- /movie/{id}/quote
- /character
- /character/{id}
- /character/{id}/quote
- /quote
- /quote/{id}
- /chapter
- /chapter/{id}

You can also page, sort, and filter using the same methods as [The Lord of the Rings APIs](https://the-one-api.dev/documentation) which includes:
- limit, i.e. limit=100
- page, i.e. page=1
- offset, i.e. offset=1
- sort, i.e. sort=name:asc
- filter, i.e. name=Gandalf, race!=Orc,Goblin

## Test the project

Unfortunately, I opted not to write the test scripts for this project which would've been written using Mocha and Chai because I had already trigger the rate limiter and got the 429 HTTP error (Too Many Requests). I overbooked myself with coding assessments this weekend and do not have the time to wait for the limiter to reset. I hope you can understand this decision.