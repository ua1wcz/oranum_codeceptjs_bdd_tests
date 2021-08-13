#!/bin/bash

# Install CodeceptJs dependencies
npm install -g npm
npm init -y
npm install --save-dev puppeteer
npm install codeceptjs playwright --save-dev
npm install -g allure-commandline --save-dev
npm i @codeceptjs/ui --save
# npx codeceptjs init

# Run a single scenario to check if everything works:
npx codeceptjs run --features --steps --grep '@view_all'

