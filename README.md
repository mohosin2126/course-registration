
- Course Selection:
Users can browse through a list of available courses displayed on the main card section. Each course is presented with details such as the course title, description, price, and credit hours. Users can select a course by clicking the "Select" button. The system checks if the user has sufficient credit hours remaining and provides feedback via toast notifications. If the user has enough credits, the selected course is added to their list of selected courses.

- Credit Hour Management:
The project keeps track of the total credit hours selected by the user and displays it in the "Right" section of the interface. It also calculates and displays the remaining credit hours a user can select based on a maximum limit of 20 credit hours. This feature ensures that users do not exceed their credit hour limit and provides transparency regarding their course choices.

- User Interface:
The project provides a user-friendly interface for course selection and credit hour management. It includes responsive design elements, such as a grid layout for course cards and a right sidebar for displaying selected courses and credit hour information. The use of toast notifications provides real-time feedback to users regarding course selection and any errors or constraints they may encounter during the registration process.






handled program 
MainCard Component (MainCard.js):

This component fetches data from a JSON file using the fetch API and stores it in the allCard state variable using the useState hook.
It also manages other state variables like selectedCourse, remaining, and totalCredit.
Inside the useEffect hook, it fetches the data when the component mounts.
handleSelectCourse is a function that handles the selection of courses. It checks if the selected course already exists in the selectedCourse state and calculates the remaining credits. It uses the toast function to show notifications.
It renders a list of course cards, and when you click the "Select" button, it adds the selected course to the selectedCourse state.
Right Component (Right.js):

This component receives the selectedCourse, remaining, and totalCredit as props.
It displays the remaining credit hours, the list of selected courses, and the total credit hours.
App Component (App.js):

This is the main component that serves as the entry point of your application.
It renders a header, and then it renders the MainCard component.
Styling and Toast Notifications:

You have applied some styling to your components using CSS classes.
You use the react-toastify library to display notifications when a user tries to select a course or when there's an error.