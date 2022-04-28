# Time Tracker App 

This application is developed to learn more about:
  - OOP in JavaScript
  - Breaking down the design into components
  - a framework for developing a React app from scratch.

To run the app, execute below

````
npm run server
````

The server is now running at [localhost:3000](localhost:3000).

## Steps for developing a React app

1. Break the app into components
  - Break down as much as you can
  - For the time tracker app, components are below
    - TimersDashboard
    - EditableTimerList
    - TimerForm
    - ToggleableTimerForm
    - Timer
2. Build a static version of the app
3. Determine what should be stateful
    - Is it passed in from a parent via props? If so, it probably isn't a state.
    - Does it change over time? If not, it probably isn't a state.
    - Can you compute it based on any other state or props in your component? If so, it probably isn't a state.
4. Determine in which component each piece of state should live
5. Hard-code initial states
6. Add inverse data flow
7. Add server communication 


