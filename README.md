# Adice App

A very simple app to display
randomly chosen advice/quote/fortune cookie

## Features

- Randomly pick up advice/quote/fortune cookie (switchable bwtween them)
- Hitting 'Get Another' button to get new one
- Randomly chosen back ground image on every load

## Techs

Built with Next.js, TypeScript, Tanstack query and Material UI

### API Calls
- [Advice Slip JSON API](https://api.adviceslip.com/) (free, no api key is required)
- [Quote](https://rapidapi.com/martin.svoboda/api/Quotes) (free, api key is requred)
- [Fortune Cookie](https://rapidapi.com/wh-iterabb-it-wh-iterabb-it-default/api/Fortune%20Cookie) (free, api key is required)

## Getting Started
- Local enviroment
  - Put your api keys in .env.local
  - yarn dev or yarn start (after yarn build)
  - Open http://localhost:3000 (or use appropriate address) in browser to see the result.
