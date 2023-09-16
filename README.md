

-Three features are given below 

- Users can explore a list of available courses . Each course contains information such as the course title, description, price, and credit hours. By clicking the "Select" button, users can choose a course. The system determines whether the user has enough credit hours remaining and delivers feedback via toast alerts. The selected course gets added to the user's list of selected courses if they have enough credits.

- The project keeps track of the total credit hours picked by the user and displays it in the interface's "Right" section. It also calculates and displays the remaining credit hours that a user can choose from, up to a maximum of 20 credit hours. This feature ensures that customers do not exceed their credit hour limit and that their course selections are transparent.


- The project includes a user-friendly interface for selecting courses and managing credit hours.  The usage of toast notifications gives users real-time feedback on course choices and any errors or constraints they may experience during the registration process.





-Discuss how you managed the state in your assignment project.

-In my project i used state four times in main card the four state are allCard,selectedCourse,remaining,totalCredit the explanation of this four card are given below 

allCard: Manages the condition of all courses that are provided. It is created as an empty array and is updated with course data from the JSON file via the setAllCourse function in the MainCard component.
selectedCourse: Keeps track of the courses that have been chosen. It begins as an empty array and is updated by adding a course to the array when it is selected.
remaining: The number of credit hours still available for choosing. When a course is added or withdrawn from the selectedCourse array, it is updated.
totalCredit: Keeps track of the total credit hours earned by the selected courses. When a course is added or withdrawn from the selectedCourse array, it is updated.

