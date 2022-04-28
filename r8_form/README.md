# React Form - practice project

This repo contains the code for Form project.

## Key lessons learned 

1. [React Form in general](https://reactjs.org/docs/forms.html)
2. Basic HTML form validation without using any library
3. Manage input states
4. [Simple regex patters to check for password validation](https://www.ocpsoft.org/tutorials/regular-expressions/password-regular-expression/)

  ```
    ^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$
  ```
  - [0-9] : at least one digit 
  - [a-zA-Z] : at least one lowercase or upper case
  - [!@#$%^&*] : at least one special character
  - {8, 20} : Min 8 characters in length, max 20
  - ^ : match the beginning of the string
  - (?=.*[0-9]) : require that at least one digit appear anywhere in the string

5. useState hook use
6. Passing props