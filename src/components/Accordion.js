import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><strong>Book List Tracker</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This project was made by me from scratch. This web application track the books that I have been reading. This project is a test for myself
          to apply the things that I have learned from web development, especially handling NoSQL Databases. This website can enable me to input the author, book title, and genre. This will also track the date and day the book entry was posted. Furthermore, any entries can be updated or deleted as well. <br/><br/>
            Framework: ExpressJS <br/>
            Database: MongoDB <br/>
            Programming Languages: JavaScript <br/>
            Additional Helpers: CSS, HTML, EJS, MongoDB Atlas, Heroku, NodeJS <br/>
            Link to Project: <a href="https://still-shelf-57338.herokuapp.com/">Book List</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><strong>Newsletter</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This project made use of MailChimp's API. This will enable people with the link to input their information and store that information into my MailChimp account. This will enable me to send emails to those people who signed-up all at once if I wish to do so. This required a lot of reading of MailChimp's API documentation.<br/><br/>
          Framework: ExpressJS <br/>
            Programming Languages: JavaScript <br/>
            Additional Helpers: CSS, HTML, Heroku, NodeJS <br/>
            Link to Project: <a href="https://glacial-beyond-04539.herokuapp.com/">Newsletter</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><strong>Dark Jokes</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This project was made out of boredom and does not intend to offend anybody. If you are easily offended with sensitive issues like pedophilia, racism, incest, and the like, please do not continue visiting this website. If you wish to continue, continue at your own risk. This website makes use of an API wherein you can request jokes. The functionality I have implemented is a simple request and posting it in my own website.<br/><br/>
            Framework: ExpressJS <br/>
            Programming Languages: JavaScript <br/>
            Additional Helpers: CSS, HTML, Heroku, NodeJS <br/>
            Link to Project: <a href="https://cryptic-atoll-48017.herokuapp.com/">Dark Jokes</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><strong>Are You Rich?</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This project is a simple yet robust in terms of authentication and security. It uses OAuth of both Facebook and Google.
          This required making an App in both Facebook's and Google's developer consoles. This application has also a Database
          of the users that is hosted by MongoDB Atlas. The password is encrypted in the database with the use of hashing and salting. <br/><br/>
            Framework: ExpressJS <br/>
            Programming Languages: JavaScript <br/>
            Additional Helpers: CSS, HTML, EJS, MongoDB Atlas, Heroku, NodeJS <br/>
            Link to Project: <a href="https://polar-island-44025.herokuapp.com/">Are you Rich?</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><strong>Flash-Book</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This project has a facebook-ish type of front-end without the advertisements on the right side. This was made with the help of
         ReactJS. It has an OAuth that would require you to log-in using your gmail accout.<br/><br/>
             Library: ReactJs <br/>
            Programming Languages: JavaScript <br/>
            Additional Helpers: CSS, HTML, Firebase's Firestore and Hosting<br/>
            Link to Project: <a href="https://flash-book-e6694.web.app/">Flash Book</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><strong>Facebook Clone</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A facebook clone. This project is the where I based my above project. This was inspired by Sonny Sangha. This was also made from 
         ReactJS and Firebase. Same functionality as the one above. <br/><br/>
             Library: ReactJs <br/>
            Programming Languages: JavaScript <br/>
            Additional Helpers: CSS, HTML, Firebase's Firestore and Hosting<br/>
            Link to Project: <a href="https://facebook-clone-dc41e.web.app/">Facebook Clone</a>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><strong>YooDong-API and Interface</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This project was originally an API made by yours truly. The API I made was used to fetch data from a mobile
         application that me and my friends made to practice Flutter. This was part of the backend in our practice project. This was originally built as a RESTful API only. I was able to build an interface using the data we made.<br/><br/>
            Framework: ExpressJs <br/>
            Programming Languages: JavaScript <br/>
            Additional Helpers: CSS, HTML, MongoDB Atlas, Heroku<br/>
            Link to Project: <a href="https://arcane-harbor-11631.herokuapp.com/">Yoodong Interface</a>
            Link to Project API: <a href="https://arcane-harbor-11631.herokuapp.com/tasks">YooDong API</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><strong>Flash-Room</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Inspired by the Discord web-application. This project can enable users to create chat rooms and separately
          render messages from each chat rooms. This project was made in order for me to learn Redux. <br/><br/>
             Library: ReactJs with Redux <br/>
            Programming Languages: JavaScript <br/>
            Additional Helpers: CSS, HTML, Firebase's Firestore and Hosting<br/>
            Link to Project: <a href="https://flash-room-dbe42.web.app/">Flash-Room</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><strong>ISMIS-sage</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This was a project that just came into my mind that I had to do it. This is also a React Application. This is just a simple
          chat application that has channels that render their own messages depending where the user has sent messages. I used timeago
          to have this additional feature that could tell when was the latest message in each channel. I used my school's logo and I do not 
          intend to profit from it. <br/><br/>
             Library: ReactJs with Redux <br/>
            Programming Languages: JavaScript <br/>
            Additional Helpers: CSS, HTML, Firebase's Firestore and Hosting<br/>
            Link to Project: <a href="https://ismessage-2c64f.web.app/">ISMIS-sage</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><strong>COVID-19 Tracker</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          I referred to one of my favorite Reactjs developer Sonny Sangha. I integrated my own features in this application. I wanted to use 
          Redux just to test my knowledge with it. The application takes data from an API and renders it realtime by numbers and graphs. It 
          tracks three things: Cases, Deaths, and Recoveries. This project had a lot of packages and took me 3 days to finally finish it.<br/><br/>
             Library: ReactJs with Redux <br/>
            Programming Languages: JavaScript <br/>
            Additional Helpers: CSS, HTML, Firebase's Firestore and Hosting<br/>
            Link to Project: <a href="https://my-covid19-tracker-411e6.web.app/">COVID-19 Tracker</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><strong>ACES Official Website</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This website gets the list of Eagle Scouts from the API that I made using ExpressJS and MongoDB so that other 
          members of the organization can modify the list of Eagle Scouts and the posts in the website as well. The website 
          wherein the API can be modified can only be accessed by our official gmail. It is fully secured since hashing has been
          integrated in handling the password. This website also uses express-session which can track cookies. <br/><br/>
            Framework/Library: ReactJs with Redux, ExpressJS<br/>
            Programming Languages: JavaScript <br/>
            Additional Helpers: CSS, HTML, Firebase's Firestore and Hosting, Heroku, MongoDB<br/>
            Link to Project: <a href="https://aces-734e2.web.app/">ACES Official Website</a>
          </Typography>
        </AccordionDetails>
      </Accordion>


     
    </div>
  );
}
