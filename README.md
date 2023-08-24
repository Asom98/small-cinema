# Cinema

This project utilizes React, Vite, and React-Bootstrap to create a cinema website. It includes five components designed to showcase movies and their screenings.

## Components

- **App**: The root component of the application. It sets up React Router to manage navigation within the website. There is a single route defined for the path `'/'`, which renders the `Screenings` component.

- **Movie**: In this component, React Bootstrap's card component is utilized to create visually appealing individual cards for each movie. The styling is done to ensure a decent and engaging card design.

- **Screenings**: The Screenings component is responsible for fetching data from APIs. It utilizes the Movie component to display each movie. Utilizing the useState hook, this component centralizes the API calls and displays details such as the date, time, and length of each movie.

- **DatesDropdown**: This component uses React Bootstrap's dropdown menu to create a user-friendly date selection interface. It populates the dropdown with all available dates for each movie and sorts them based on the user's choice.

- **CategoryDropdown**: Similarly to DatesDropdown, this component uses React Bootstrap's dropdown menu to enable users to filter movies by category. It presents all possible categories for each movie and allows users to sort movies based on their chosen category.

By effectively utilizing these components, the cinema website provides an engaging and dynamic platform for users to explore and interact with movie details.
