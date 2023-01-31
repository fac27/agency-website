# The Agency


## Table of content

- [About the repo](#about-the-repo)
- [How to install](#how-to-install)
- [What are the fundamental aims of our agency website?](#what-are-the-fundamental-aims-of-our-agency-website)
- [User story](#user-story)
- [Spike](#spike)
- [Learnings](#learnings)

## About the repo

### Why
- The purpose of this repo is to record the production of our mock agency website
- It is an opportunity for us to practice working collaboratively and become more comfortable using github, for example, github workflow and github projects

### What
- This repo stores the progress of our agency website project
- It provides access to the website for potential visitors
- It enables us to review eachothers work and merge asynchronous work

### How
- Github [issues](https://github.com/fac27/agency-website/issues) allow us to communicate asynchronously and track our progress

## How to install

- Clone the repo using your terminal (the download is 3.7MB in size):

    `git clone https://github.com/fac27/agency-website`

- Open and edit the repo files inside your code editor

- Any helpful contributions you wish to make are **greatly appreciated**. If you have suggestions for the project, please fork the repo and create a pull request, following these steps:

    1. Fork the project
    2. Create your feature branch (git checkout -b amazing-feature)
    3. Commit your changes (git commit -m 'Add my amazing feature')
    4. Push to the branch (git push origin amazing-feature)
    5. Open a pull request

## What are the fundamental aims of our agency website?

Our website should give potential clients:

- [x] An introduction to our agency
- [x] Information about each member of our team
- [x] A way to get in touch if they are interested in working with us

## User story

- [x] Navigation menu
- [x] ‘About us’ section
- [x] Contact form
- [x] A user cannot submit a form without filling out all of the mandatory fields (name, company name, email address)
- [x] Information from the form doesn’t get submitted until the user clicks a button

## Spike 

### Accessibility

- Semantic HTML provides easy web access for ALL users and improves readability for other coders 

### CSS architecture 

- CSS naming conventions are useful for collaborative projects so that other coders can access the code
- Specificity might become an issue during collaboration if names are illogical to other readers

### CSS layout

- Different display values determine the visual behaviour of the elements on the page

### Responsive design

- Responsive design adapts the web page according to the size of the screen

## Learnings 
#### Accessibility 
- [x] Structure a site using semantic HTML to aid accessibility
- [x] Ensure a web page is readable for screen readers. After having looked at the site using Microsoft Narrator:

> Alt text reads clearly

> All headings read clearly

> Site navigation with tab/arrow keys/enter is possible

- [x] Ensure our UI has sufficient colour contrast so that everyone can perceive it comfortably
- [x] Use various tools to check that our website meets accessibility criteria
#### Design 
- [x] Use CSS media queries to ensure our content is always presented effectively on screens of different sizes
- [x] Demonstrate a mobile-first approach to building a website
> We considered the mobile-first approach but due to time constraints finally adopted a web-first approach. 
- [x] Use CSS variables to apply repeated colours to HTML elements
> See .grey-box class
- [x] Use CSS Flexbox to style children in a single-direction layout (ie a row or a column)
- [x] Use CSS Grid to style children in two-direction layout
> We did not include a two-direction layout due to time constraints. The "Our Services" features grid layout.
### Workflow 
- [x] Ensure our Git commit history tells a coherent story

## HTML Forms 
- [x] Use the appropriate input types in HTML forms for gathering different types of information




