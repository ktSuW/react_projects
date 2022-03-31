import axios from "axios";

// // Approach 1
// const searchImages = (searchTerm) => {

// }

// Approach 2
// axios.create() method creates an instance method of a client
export default axios.create({
  baseURL : 'https://api.unsplash.com',
  headers: {
    Authorization: "Client-ID 0zEQ2dDkrk4o_52n_2_xSB4zJdeHUsvhG9vBQOidWvo",
  },
});