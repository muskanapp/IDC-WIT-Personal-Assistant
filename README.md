<h1 align="center">Personal Assistant for Busiest Professionals</h1>

<p align="center">
  <img src="https://github.com/muskanapp/IDC-WIT-Personal-Assistant/blob/master/assets/download.png" />
</p>

## 📝 Table of Contents

- [Idea](#idea)
- [Progress so far](#progress_so_far)
- [How it works](#working)
- [Built Using](#built_using)
- [Sample Dashboard](#sample_dashboard)
- [Architecture Design](#architecture_design)
- [Demo / Working](#demo)
- [Debugging and Maintanence](#debugging_and_maintanence)
- [Performance and Scalability](#performance_and_scalability)
- [Future work](#future_work)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 Idea <a name = "Idea"></a>

This project focuses on implementing features that would make the life of the busiest working professionals easy in today's tech-savy world.
The whole project can be mainly divided under 3 umbrellas :- events, a to-do app and health focused features

The TO-DO app includes 3 features:-
- add task
- edit task
- clear task

Under the EVENTS umbrella,the following features are included:-
- Geting Google Calendar events and displaying them in the form of a table
- Productivity Analysis- Using the starting and ending time of meetings in the whole day to show a pie chart indicating the proportion of meeting hours and productive hours(total working hours - meeting hours)

The heath focussed features are as follows:-
- Integrating the app with a smart-watch and display a sleep cycle(sleeping hours while working on each project) 
- Sending timely notifications reminding the person of lunch time,sleep time etc.


## 🎥 Progress so far <a name = "progress_so_far"></a>

- The first umbrella which is the TO-DO app has been implemented successfully.
- Under the events' umbrella, all the features have been implemented on the dashboard.
- Integrating the app with Google API could not succeed due to authentication issues when sending a GET request to fetch the events, although the POST request works fine.
- So, rather, I have used dummy data and implemented the logic behind the pie chart for the productivity analysis.
- Sleep cycles would need data from smartwatches which would need authorization from the manufacturers, so I have rather used dummy data

## 💭 How it works <a name = "working"></a>

- The TO-DO app uses state managament in REACT to retain the data for the tasks.
- The Google Calendar API sends a GET request to fetch all the scheduled events on the user's calendar and sends to the frontend to be displayed in the form of table
- The start and end timings of meetings are used to calculate the productive hours which is displayed in the pie chart as a percentage of the total working hours.
- The sleeping hours for each project are displayed in the form of bar graph.

## ⛏️ Built Using <a name = "built_using"></a>
This app has been built using the MERN stack and a little bit of Flux for the front-end.

## 🎈 Sample dashboard <a name = "sample_dashboard"></a>
<h3>The dashboard displaying the bar chart for sleep cycle and pie chart for productivity</h3>

![dashboard](https://github.com/muskanapp/IDC-WIT-Personal-Assistant/blob/master/assets/Screenshot_1.png)

<h3>The to-do app</h3>

![to-do](https://github.com/muskanapp/IDC-WIT-Personal-Assistant/blob/master/assets/Screenshot%20(47).png)

<h3>The table of events</h3>

![table](https://github.com/muskanapp/IDC-WIT-Personal-Assistant/blob/master/assets/Screenshot_56.png)

## 🔳 Architecture <a name="architecture"></a>

![architecture](https://github.com/muskanapp/IDC-WIT-Personal-Assistant/blob/master/assets/Architecture.png)

## ⛏️ Debugging and Maintanence <a name="debugging_and_maintanence"></a>
- The integration with Google Calendars API needs to be worked upon.

##   Performance and Scalability <a name="performance_and_scalability"></a>


## 🤓 Future Work
- Notifications can be sent to the user reminding them of timely meals and breaks
- Integration of the web app with smart-watch can be a large scale future work which would need authorization from the side of manufacturers
- A small feature in the to-do app to set the priority of tasks (low,medium,high)
- A voice assistant service which works to play music, read out the news etc.\

## ✍️ Authors <a name = "authors"></a>

- [@muskanapp](https://github.com/muskanapp) - Idea & Initial work


## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References
