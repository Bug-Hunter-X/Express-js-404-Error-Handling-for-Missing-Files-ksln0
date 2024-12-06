# Express.js 404 Error Handling
This repository demonstrates a common error in Node.js Express.js applications:  handling 404 errors when serving static files. The `bug.js` file shows the error, and `bugSolution.js` provides the solution.

## Problem
The original code attempts to serve `./index.html` without checking if the file exists. If the file is missing, Express.js throws a 404 error.

## Solution
The solution uses Express.js's built-in static file serving middleware to handle the file serving and 404 errors gracefully.