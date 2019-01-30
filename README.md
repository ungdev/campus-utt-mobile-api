# CAMPUS UTT API

## Requirements

* [Node.js](https://nodejs.org/)
* [yarn](https://yarnpkg.com/)

## Installation

```
git clone git@github.com:ungdev/campus-utt-mobile-api.git
# or
git clone https://github.com/ungdev/campus-utt-mobile-api.git

cd campus-utt-mobile-api
yarn
```

## Database

```
# create the databse 'campus', should be in utf8 not utf8mb4, otherwise it wont work
CREATE DATABASE campus CHARACTER SET utf8;
```

## Configuration

```
# copy env file for all environments
cp .env.example .env
# makes your changes in .env, which will not be pushed
nano .env
```


## Commands

```
yarn dev    # development server
yarn start  # production server
yarn serve  # pm2 production server (load balancing)
yarn reload # pm2 hot reload
yarn lint   # prettier lint
```

## Structure
