# aadne-basic-navigation

Created with CodeSandbox

Reproduce:

Add apikey generated from openrouteservice.org in services/index.ts (line 8)

`npm install`
`npm start`

## About

Due to time constraints I've had to reduce the functionality to a manageble level. With more time to spend on this I would have added unit tests, made a better UI and added a weather forcast widget (I tried but didn't get the time :( )

This application has the following functionality:

- Show map of Oslo
- Show your location
- Click anywere on the map and mark a location
- Get visual directions from you location to the map
- Get descriptive directions to the marked location

## Goals

1. Show a map of Oslo ✅
2. Weather widget that shows weather at current location
   - Get current location
   - Create widget
3. Enter an address and get a marker ✅
4. Draw directions to a given address ✅
5. GPS-like description to the location ✅
