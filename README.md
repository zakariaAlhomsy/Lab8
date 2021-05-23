# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

Within a Github action that runs whenever code is pushed 

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

no, because the message feature is probably made up of smaller parts of code. Those smaller sections are what we would be unit testing

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

yes, as this is a small feature that can be easily tested with a unit test.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

it will run it with a browser UI

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

