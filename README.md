# Key to Cardiff
*Unlock the City*

The purpose of the website is to promote my city, the city of Cardiff and what it has to offer. A modern guide book.

![Responsiveness](https://i.imgur.com/5JKhHUD.png?1)

You can view the live website [here](https://jblk99.github.io/Key-to-Cardiff/index.html)

# User Experiance (UX)

## User Stories

*As a user, I want to*

* know the purpose of this website.
* navigate this website with ease on any device from my first visit.
* be able to read all content and clearly view images displayed.
* be able to find interesting locations to visit in Cardiff.
* discover upcoming events happening in the city.
* be able to contact the owner of the website.

*As a Site owner, I want to*

* provide accurate and up to date information about activities and attractions in the city of Cardiff and also display this information as geographical locations.
* promote the city of Cardiff using imagery throughout the website.
* display an error message if a feature or function fails to communicate this to the user.
* provide a way to contact me if people have questions or suggestions about information on my website.
---
## Strategy

The purpose of the website is to promote my city, the city of Cardiff and what it has to offer. A modern guide book. It holds all the best locations in the city whether we are talking restaurants, bars or recreational spots. The target audience of Key to Cardiff isn't restricted to people new to the city, but instead anyone who wants to get more put of Cardiff and discover somewhere new. Whether you've been here for a day or all your life, you'll find something new at key to Cardiff.

Once I reviewed the competing websites in this market, I noticed a common theme in that they all seemed to have the same popular locations that would be great for tourists of the city but no other hidden gems favourited by the locals that are helping make Cardiff what it is today. So I wanted to use this to my advantage and help my website stand out by appealing to tourists and also those who live in Cardiff by suggesting locations they might have not heard of or tried as they don't get put in the limelight on other sites.

The business goals that the website is required aimed to fulfil start with the aim to increase brand awareness and loyalty. This will be achieved by strategic brand logo placement throughout the website and keeping a colour scheme that will be associated with the brand throughout the website. At the footer of the website, they can also connect to the company social media platforms. As the websites user base grows so will the return rate of users looking for updated information and new locations to visit this will help improve business for any business displayed on my website which will increase demand to be listed and that will result in sales between Key to Cardiff and local businesses.

To maximise the efficiency of this website I will implement the User needs stated in the user stories and combine that with the business goals.

---
## Scope

Features to be included on the website are:

* Buttons that the user can select for different attractions such as bars, attractions and restaurants. These buttons will display the corresponding categories on the adjacent map.
* A dark mode toggle switch on the website that changes font and background colour to a darker colour scheme as well as displaying photos of Cardiff at night.
* An Events section with upcoming events happening in Cardiff. Displayed on cards.
* Animated photo gallery that highlights Cardiff moving side to side.
* A contact form that sends an email to the site owner once submitted.
* A section for Cardiff bay to show what that has to offer.

---
## Structure

Key to Cardiff is a single scrollable website with 7 sections. The sections are:

### Home / About us
The home section of Key to Cardiff is comprised of a navigation bar, a hero image, a dark mode toggler and finally a brief text section about Cardiff.

### Map
The Map section contains information and locations of places in Cardiff. A set of buttons are used to filter the results, the results are then desplayed on the map.

### Photo carousel
The photo carousel will display photos of Cardiff and Cardiff bay. The photos displayed are also dependent on whether dark mode is activated or not.

### Events
The Events section contains information about upcoming events in Cardiff and links to more information and where to purchase tickets at Ticketmaster. This is done using the Ticketmaster API.

### Contact us
The Contact us section contains a form for feedback from the user as well as a way for businesses to contact Key to Cardiff to get their business displayed on the website.

---
## Surface Design

I used [Miro](https://miro.com/) to plan and create wireframes of this project.

View the [planning board](https://miro.com/app/board/o9J_lUUI8hs=/).

### Colours

I used Y In Mn Blue and Pacific Blue as the main two colours for my themes. I have a dark theme and a light theme. The light theme is displayed by default and is used when looking for activities/locations to visit in the day. The Dark theme is displayed when looking for locations to visit in the evening/night. The dark orange is for an opposing colour to add some contrast to certain elements on the website. I then have Alice Blue and Oxford Blue as text colours.

View the [colour scheme](https://i.imgur.com/MeKSwbc.png).

### Typography
I have chosen to use [Quicksand](https://fonts.google.com/specimen/Quicksand) for my headings as it has a modern but welcoming feel to it. 
As for my body font, I decided to use [Montserrat](https://fonts.google.com/specimen/Montserrat) as I feel it compliments Quicksand very well as they are from the same font family.

### Icons
All icons used in this project are sourced from [Font Awesome](https://fontawesome.com/).

---

## Technologies used in this project

### Languages
- HTML5
- CSS3
- JavaScript

### Programs, frameworks and Libraries

1. Git

   Used for version control

2. GitPod

   Used to write the code to the project

3. GitHub

   Used  to view files that were pushed from GitPod to GitHub

4. jquery

   Used throught the project for DOM tree traversal, event handling and manipulation.

5. Bootstrap

   Used for button classes and form classes.

6. Google Fonts

   Used to import fonts into project.

7. Font Awsome

   Used to display icons in project.

8. Miro

   Used for planning and wireframes of project.

9. Imgur

   Used to host images used in the project.

10. Google Maps JS API

    Used to display map element and chosen locations for the project.

11. Ticketmaster JS API

    Used to display upcoming events for cardiff.

12. EmailJS

    Used to deliver messages from website to me.

---

## Testing

### Validations

The W3C Markup Validator, W3C CSS Validator Services and jshint were used to validate the project to ensure there were no errors. All tests came back with no errors. 

### Testing User Stories

#### Site Users

1. *know the purpose of this website.* -This is achived by the brief descriptionon the welcome section of the website.

2. *navigate this website with ease on any device from my first visit.* - This is achived using a clear layout and discriptive headers and sectioned layout.

3. *be able to read all content and clearly view images displayed.* - This is achived through clear text and good quality images.

4. *be able to find interesting locations to visit in Cardiff.* - This is achived by having a variaty of locations ranging in diffrent attractions and activities

5. *discover upcoming events happening in the city.* - This is achived through the Ticketmaster API and clear layouit of the informationprovided

6. *be able to contact the owner of the website.* - This is achived through the "Contact us" form.

#### Site Owners

1. *provide accurate and up to date information about activities and attractions in the city of Cardiff and also display this information as geographical locations.* - This is achived through the Google maps API in the attractions section of the webpage

2. *promote the city of Cardiff using imagery throughout the website.* - This is achived using the Gallery section of the webpage

3. *display an error message if a feature or function fails to communicate this to the user.* - Achived through the used of error messaged in the console for me the developer and error messageson screen for the user.

4. *provide a way to contact me if people have questions or suggestions about information on my website.* - THis is achived through the contact us form at the end of the webpage.

---


## Further Testing

### Feature tests

*Feature testing was manually done on the site*

1. Navigation

   - Visted all links to ensure they proceded to the intended direction/section.

   - Hover effects on buttons work.

2. Theme toggler

   - Click toggler to ensure all correct changes happen. 

3. Google Maps

   - Click all key buttons to ensure they work as needed.

   - All location markers appear as required.

   - Hover effects on buttons work.

4. Gallery

   - All buttons function as intended.

   - Hover effects work as intended.

   - Images render correctly.

5. Contact us form

   - Form renders as intended on al devices.

   - Form sends as inteded to chosen email address.

6. footer

   - All social links in footer take you to correct links in a new tab.

   - All hover effects work as intended.

### Other testings

- Website has been tested on latest version of Chrome, Safari, Edge, Opera and Firefox.

---

## Bugs/Fixes

1. Maps Not recentering when loading new set of markers.

   - Fixed by specifying central central quadrants for each set of markers.

2. Gallery buttons not responding.

   - Fixed by specifying the correct id names

---

## Deployment

### Publishing

This website was published using GitHub Pages. I will take you through the steps below:

1. Go to GitHub and log in.

2. On the top right-hand corner click the dropdown icon, and select 'Your repositories'.

3. Select the appropriate repository.

4. The header of your chosen repository will have a menu of different pages you can select. Click on 'Settings' located on the far right-hand side.

5. Scroll down until you see the heading 'GitHub Pages'.

6. Under 'Source' there is a dropdown menu titled 'Branch' - click on this and select the option 'master branch'.

7. The page will reload and you will see the link of your published page displayed under 'GitHub pages'. The text will say 'Your site is published at website'.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes.

1. Log in to GitHub and locate the GitHub Repository of choice

2. At the top of the Repository just above the "Settings" button on the menu, locate the "Fork" button and click it.

3. You should now have a copy of the original repository in your GitHub account to do ass you please. This will not affect the original repository.

### Making a Local Clone

1. Log in to GitHub and locate the GitHub Repository of choice.

2. Under the repository name, locate the option "Clone or download" and click it.

3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link. it will be used in the following steps.

4. Open Git Bash.

5. Change the current working directory to the location where you want the new cloned directory to be made.

6. Type git clone into the terminal, and then paste the URL that was copied in the previous steps in Step 3.

7. Press Enter. Your local clone will be created.

---

## Credits 

1.  [Nav](https://www.w3schools.com/howto/howto_js_sidenav.asp) 

2.  [Gallery](https://www.w3schools.com/howto/howto_js_slideshow.asp) 

3.  [Forms](https://getbootstrap.com/docs/4.0/components/forms/) 

---

## Media

1.  [Icons](https://fontawesome.com/)

2.  [Image hosting](https://imgur.com/)

3.  [Canva](https://www.canva.com/)

4.  [shutter stock](https://www.shutterstock.com/)

5.  [Pixabay](https://pixabay.com/)
