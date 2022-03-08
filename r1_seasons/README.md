# R1 Seasons Display - Practice Project

Depending on the user geolocation, the app will shows whether it is summer or winter.

- Get users physical location
- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- Determine current month
- Change text and styling based on location and month 
  - Winter 
      - If the user is in northern hemisphere && between Oct and March 
      - If the user is in southern hemisphere && between March and Oct 
  - Summer
      - If the user is in northern hemisphere && between March and Oct 
      - If the user is in southern hemisphere && between Oct and March 

## Lessons Learned 
- Geolocation API call - navigator.geolocation - cause the user's browser to ask them for permission to access their location data
  - Geolocation.getCurrentPosition() - retrieves the device's current location
- console - three dots vertical 
  - sensors - geolocation override
- reset location - geolocation error 
- Rule of State
  - only usable with class components 
  - You might confuse props with state :(
  - State is a JS object that contains data relevant to a component 
  - Updating 'state' on a component causes the component to (almost) instantly rerender 
  - State must be initialised when a component is created.
  - **State property/object can only be updated using the function 'setState'**
- States Scenarios
  - Have latitude and no errorMessage => show latitude
  - No latitude && Have errorMessage => show errorMessage
  - No latitude && no errorMessage => show loading