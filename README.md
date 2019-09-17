# Kuvera Mutual Funds Project

## Overview

This app will show a simple table with sorting, filtering and navigational capabilities in React JS.

## Setup

- run `npm install` in the project folder
- run `npm start`
- go to `http://localhost:3000` to view the app

## Following are the testable features of this app

- You will view only the top 100 mutual funds.
- Clicking on the header of table columns will sort the items in alphabetical order for the first 4.
- You can search the entire mutual funds json from the text box provided as you type. However, only the top 100 records matching the search criteria will be shown.
- Clicking on any mutual fund will navigate to its details page showing all its key-value pairs.
- `Go back` button at the end of details page will navigate back to list of MFs.
- Added basic css, to have good look and feel of the app.

## Further enhancements

- Bootstrap css
- Redux store to maintain state. Since there were not many states or components, I have used vanilla react with react-router.
- React-table could be used to have more in built features of table api. All functionalities including sorting, results per page, etc can be parameterised.
- JEST testing to test UI components.
