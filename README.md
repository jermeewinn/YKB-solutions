# YKB Solutions Inc. 

YKB Solutions Inc. is a career consulting firm committed to helping people transition from one career track to another. YKB was founded by college-senior [Michael Mei](https://www.linkedin.com/in/michael-h-mei/) back in 2017 at UC Santa Cruz as campus-wide career services for students transitioning from school to early-career was limited in scope across campus. Today, YKB serves as a means for its clients to leave their dead-end jobs to build new careers for themselves.

This GitHub repository is the official full-stack deployment of YKB Solutions' website using a React.js frontend and Mongo backend for data storage, all to be hosted on AWS servers. Email services are rendered through EmailJS.

## Table of Contents

- [License](#license)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Deployed Link](#deployed-link)
- [Screenshot](#screenshot)
- [Future Development](#future-development)
- [Contact Us](#contact-us)
- [Collaborators](#collaborators)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Copyright 2022 Jeremy Huynh**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

The software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.

## Technologies Used

- [React.js](https://reactjs.org/)
- [JavaScript](https://www.javascript.com/)
- [CSS React](https://reactjs.org/docs/faq-styling.html)
- [React Bootstrap](https://v5.reactrouter.com/web/guides/quick-start)
- [React-Router-DOM](https://v5.reactrouter.com/web/guides/quick-start)
- [React Icons](https://react-icons.github.io/react-icons/)
- [EmailJS](https://www.emailjs.com/)
- [React Helmet](https://github.com/nfl/react-helmet)

## Installation

1) Create a directory on your machine, open terminal, and clone the repository: 

        $ git clone git@github.com:jermeewinn/YKB-solutions.git

2) Run the following commands:

        $ cd ykb-solutions
        $ npm install

    This should be able to install every node package involved in this project, including create-react-app, react-bootstrap, bootstrap, and react-router-dom.

3) Initialize http://localhost:3000/:

        $ npm run start

    This will open your browser to http://localhost:3000/, and the website should be accessible from there.

## Deployed Link

## Screenshot

## Future Development

There are a few things we are planning on implementing into the web app:

- Enable the contact section to send emails to ykbcoaching@gmail.com upon clicking the submit button.
- Refactor the testimonials components so that client use-cases can be opened w/i a modal and maintain SPA viability while showing as much information as possible.
- Restyle footer section so that the website is easy to navigate at a glance.
- Enable users the ability to create an account with us, login/logout functions for said accounts. Logged-in users will be able to access schedule their first career consultation with us for free through Calendly. Paying customers can schedule follow-up meetings with us through Calendly as need be.
- Figure out a way to create dropdown menus from within the NavBar at the top of the page.
- Figure out a way to refactor component file structure so that child components are less confusing to identify and associate with their parent components.
- Figure out a way to implement react-router-dom so that navbar features are easily navigable at a glance, and that navbar can be styled using react-bootstrap node package components.
- Show the user what page they are on via the tab title at the top of the web browser.
- Figure out a way to render the Home banner image without having a the image repeat on bigger screens.

## Contact Us

This React.js application was created by [Jeremy Huynh](https://www.linkedin.com/in/jeremy-huynh/), April 2022. If you would like to contract my freelance services, please reach out to me via LinkedIn or my email at: [jeahuynh18@gmail.com](#jeahuynh18@gmail.com) 

If you are interested in contracting [Michael's](https://www.linkedin.com/in/michael-h-mei/) services via YKB Solutions Inc., please message him via his LinkedIn profile.

## Collaborators
**<u>Michael Mei</u>** - Project Manager
- **[Linkedin Profile](https://www.linkedin.com/in/michael-h-mei/)**

**<u>Jeremy Huynh</u>** - Web Developer
- **[LinkedIn Profile](https://www.linkedin.com/in/jeremy-huynh/)**
- **[GitHub Repository](https://github.com/jermeewinn)**

**<u>Kosal Cheykim</u>** - Web Developer
- **[LinkedIn Profile](https://www.linkedin.com/in/kosal-cheykim-75484321b/)**
- **[GitHub Repository](https://github.com/kcheykim)**

**<u>Kaylin Boyle</u>** - Web Developer
- **[LinkedIn Profile](https://www.linkedin.com/in/kaylin-n-boyle/)**
- **[GitHub Repository](https://github.com/kaynboyle)**

**<u>Howard Lin</u>** - UI/UX Design/Research
- **[LinkedIn Profile](https://www.linkedin.com/in/howard-lin-069b10143/)**
- **[Personal Portfolio](https://howieeedoit.wixsite.com/howardlindesign)**
