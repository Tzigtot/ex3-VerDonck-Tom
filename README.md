This is a simple calculator app designed by Tom Ver Donck for Data Distribution.

Thanks to Jelle Van Loock, Jeroen van Wauwe and Jonas Cristens who's code provided the base structure and insights needed to construct this project.

CURRENT PROBLEMS: 

Error, empty response upon both running and executing any GET or POST. This may be a problem within the code or a local browser issue, still being investigated.

DOCUMENTATION:

All URLs are localhost due to the local nature of thi s project.

In this simple web-based calculator we use the HTTP methods to expose our calculator functions without needing the client to do any calculations.

Using a GET method we expose our HTML code providing the buttons and display to our client. This happens on the URL http://localhost:8383/index.html .

The client is then able to enter numbers and operators using the buttons which are added to a string that is displayed and updated real-time. Upon clicking the '=' operator the string is exposed to us using a POST method. 

This string is then interpreted using an eval expression before the result is exposed back to the client with a 200-OK code. Additionally the results are also exposed through the URL http://localhost:8383/results.html .
