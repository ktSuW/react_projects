# Travel Website 

This repo contains code for travel website.

## Sections 
### Phase - 0 
1. npx create-react-app r5_travel
2. Install required packages. You can either use yarn or npm to install them
  - yarn add react-icons styled-components scrollreveal 
  - [react icons](https://react-icons.github.io/react-icons/)
  - [styled components](https://styled-components.com/)
  - [ScrollReveal](npmjs.com/package/scrollreveal)
    - ScrollReveal is a JavaScript library for easily animating elements as they enter/leave the viewport.

    ```
    # with npm.
    npm install --save styled-components
    # with yarn.
    yarn add styled-components
    ```
3. Create components under newly created components folder
  - NavBar
  - Hero
  - Services
  - Recommend
  - Testimonial
  - Footer
  - ScrollToTop

4. Add all the components into App.js
5. Modify styles in index.css

### Section 1 - Navigation bar styling 
- Modify NavBar Component 
- [Nav tag](https://react-bootstrap.github.io/components/navs/)
- scroll-behaviour : smooth
  - The scroll-behavior property specifies whether to smoothly animate the scroll position, instead of a straight jump, when the user clicks on a link within a scrollable box.
- styled.nav``;


### Section 2 - Hero
- Prepare for layout 
- import hero image and style
- CSS Styling to bring the text to center and on top of the image
- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) 


### Section 3 - Services 
- CSS - display grid 
- Inside each card, display flex 
- transform - translateX(), translateY()

### Section 4 - Recommend  
- const [active, setActive] = useState(1);
- styling 
### Section 5 - Testimonials 
- ? image link??
### Section 6 - Footer
- react-icons
- styling
### Section 7 - Scrollbar and Scroll to Top
- ::-webkit-scrollbar-thumb
### Section 8 - Adding Responsiveness

### Section 9 - Adding Animations