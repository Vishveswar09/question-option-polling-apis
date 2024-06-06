# About Project
This is a simple backend project where anyone can create a question with options including a poll to vote a specific option. Implemented a slight tricky part in options api, where we can navigate dynamically to vote an option.
Used mongoose as database to store questions and options in seperate collection.

# How to setup the project on local system
1. Clone from git repo and install node modules.
2. Use command to run server 'node index.js'
3. Use the following routes to create a question and options.

To create a question:
/api/questions/create

To add options to a specific question
/api/options/questions/:id/create

To delete a question
/api/questions/:id/delete

To add a vote to an option
/api/votes/options/:id/add_vote

To show a specific question with options
/api/questions/:id

