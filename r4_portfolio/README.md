# Portfolio Planning 

This repo contains react code. I wanted to learn more about React components and hook and have rebuilt [this simple portfolio website (HTML + CSS + JavaScript)](https://ktsuw.github.io/portfolio/) with Reactjs.

## Planning

1. Identify components 
2. Make design coherence 
- **style.module** : keep css within its Component and does not affect any other HTML elements outside of that Component 
- It enforces 
- Reusable component - portable 
  - Component must have its own file inside.
- Use normal function for Component 
  - Scope for this variable as parent
- Types
  - primary
  - secondary
  - tertiary 

## Components 

- Hero Image Component
- Profile Image Component 
- Header Navigation Component - Home, About, Portfolio, Contact 
- About Component 
  - Parent Component : SkillsetList - contains a list of skillsets components
  - Child Component : Skillset - Display each skillset 
- Skill Component 
- Project Component 
- Contact Form Component 
- Footer Component 

## Properties of Components
- [Icons](https://react-icons.github.io/react-icons/search?q=bulb)
- React icons are always SVG
- {children} property
- Attribute destructuring : you don't have to define every single property 
  - 


