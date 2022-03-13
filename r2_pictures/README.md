# R1 Pictures - Practice Project

This app :
- enables the users to search by terms such as cars, plants
- Use search term and make a request to an outside API and fetch data
- Take the fetch images and show them on the screen 


## Lessons Learned

1. How to break down and create separate components to make them reusable 
  - App as root component 
  - SearchBar
  - ImageList 
2. Community convention for how to handle input handlers
  - onInputChange 
  - on (handle) + name of element you are assigning the input to + event you are watching for
  - The event will get called when on input being changed.
3. Event handlers : onClic, onSubmit, onChange 
4. Controlled vs Uncontrolled components
  - User types in input
  - callback gets invoked, i.e., onChange
  - update state : call setState with the new value
  - render methods gets called again and re-render
  - input is told what its value is
  - Controlled is preferred since information is stored inside the component (React World), not in DOM
