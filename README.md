# Feed Reader project 

From the Front-End Web Developer Udacity nanodegree 


## Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

![Alt text](/jasmine.PNG?raw=true "jasmine tests")
  
## Installation
**pre requirements:** node.js and grunt. view more at: https://gruntjs.com/getting-started

### 1. download repo to your computer.
### 2. open node.js console and navigate to project root catalog.
### 3. run command : **npm install** (to download and install all req. Grunt Modules). 
### 3. after installation succuss. run command : **grunt**.
grunt will run predefined automation task and verifies JShint runs without errors. If no error occurs. Grunt minimize css and js and removes all comments and saves the production ready code in \dist.
### 5. start application. dist/index.html.

## Live Demo
http://dsenze-feedreader.azurewebsites.net/


## New tests added project

##### RSS Feeds #####
 ###### are defined: ######
      test if allFeed variable is defined
 ###### has valid URLs: ######
      test loops through allFeeds and verifies URL is defined, not empty and contains HTTP/HTTPS
 ###### has name defined: ######
      test loops through allFeeds and verifies name is defined, is string, not empty.
##### The menu #####
 ###### menu hidden by default: ######
      test ensures menu element is hidden by default. And verify this by check if body has menu-hidden class assigned.
 ###### menu changes visibility: ######
      test ensures the menu changes visibility when the menu icon is clicked. 
      test verifiy this by check if body has menu-hidden class assigned.
##### Initial Entries #####
  ###### at least a single .entry element exist: ######
      test ensures atleast a single .entry element exist after loadfeed() function.
      test verifies no changes to index.html are made to faulty success this test.
##### New Feed Selection #####
  ###### content changes: ######
       test ensures a new feeds is loaded by loadfeed function and that content actually changes.
       test runs loadFeed saves first Elements.href (URL) into variable
       test run loadFeed again with new input, saves first elements.href (URL) into variable.
       test OK! if both variables match an URL and they do not match eachother.

