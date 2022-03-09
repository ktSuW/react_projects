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

1. Geolocation API call - navigator.geolocation - cause the user's browser to ask them for permission to access their location data
  - Geolocation.getCurrentPosition() - retrieves the device's current location
2. console - three dots vertical
  - sensors - geolocation override
3. reset location - geolocation error
4. Rule of State
  - only usable with class components
  - You might confuse props with state :(
  - State is a JS object that contains data relevant to a component
  - Updating 'state' on a component causes the component to (almost) instantly rerender
  - State must be initialised when a component is created.
  - **State property/object can only be updated using the function 'setState'**
5. States Scenarios
  - Have latitude and no errorMessage => show latitude
  - No latitude && Have errorMessage => show errorMessage
  - No latitude && no errorMessage => show loading
6. [JavaScript Configuration Object pattern](https://modernweb.com/javascript-configuration-object-pattern/)
  ```
      // config object
      const seasonConfig = {
        summer: { text: "Let's hit the beach 🏖️!", iconName: "sun" },
        winter: { text: "It is chilly☃️❄️!", iconName: "snowflake" },
      };
  ```
7. Class based vs Functional components

  | Class-based                                                                                        | Functional                       |
  | -------------------------------------------------------------------------------------------------- | -------------------------------- |
  | class XY extends Component                                                                         | const XY = props =>{ ... }       |
  | Access State - ✅                                                                                  | Access to State (useState() - ✅ |
  | Lifecycle Hooks - ✅                                                                               | Lifecycle Hooks - ❌             |
  | Access State and Props via "this"                                                                  | Access Props via "props"         |
  | this.state.XY & this.props.XY                                                                      | props.XY                         |
  | Use if you need to manage State or access to lifecycle hooks and you don't want to use React Hooks | Use in all other cases           |

8. Best practice : Order of things inside the file
   1. config object first
   2. helper functions
   3. functional component 