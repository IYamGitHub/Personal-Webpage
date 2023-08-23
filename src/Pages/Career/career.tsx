import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import './career.css'
import Solaria from '../../Images/SolariaLabs.png';
import Alignable from '../../Images/Alignable.png';
import OctoWorking from '../../Images/Octo/octo-work.png';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

function Career() {
  const [expandedFront, setExpandedFront] = React.useState<string | false>('panel1');
  const [expandedBack, setExpandedBack] = React.useState<string | false>('panel1b');

  const handleChangeFront =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpandedFront(newExpanded ? panel : false);
    };
  const handleChangeBack =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpandedBack(newExpanded ? panel : false);
    };
  return (
    <div className='Container'> 
      <div className='headerContainer'>
        <img src={OctoWorking} alt='My Octo' className='OctoWorking'/>
        <div className='header'>
          <h1 className='Title'>My Career Experiences</h1>
          <h3>Learn more about some of the work I completed at each job!</h3>
        </div>
      </div>
      <div>
        <div className='titleContainer'>
          <img src={Alignable} alt='Alignable' className='logo'/>
          <div className='titleText'>
            <h2 className='title'>Alignable</h2>
            <h5 className='position'>Full Stack Developer Co-op</h5>
            <h5 className='position'>Remote | May-December 2023</h5>
          </div>
        </div>
        <div className='experience'>
          <div className='stories'>
            <h2 className='subheader'>Frontend Highlights</h2>
            <Accordion disabled expanded={false} onChange={handleChangeFront('panel1')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Upcoming...</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Upcoming...
                </Typography>
              </AccordionDetails>
          </Accordion>
          </div>

          <div className='stories'>
            <h2 className='subheader'>Backend Highlights</h2>
            <Accordion disabled expanded={false} onChange={handleChangeBack('panel1b')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Upcoming...</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Though this task was fairly simple, it was my first backend story, which introduced me to the Strapi and PostgreSQL databases
                  as well as writing the GraphQL APIs.
                  I learned how to create a new field for a table, in this case adding the feedback field
                  with an enum of 'Yes' or 'No', as well as create the appropriate migration tables for the PostgreSQL database. 
                </Typography>
              </AccordionDetails>
          </Accordion>
          </div>
        </div>
      </div>
      <div>
        <div className='titleContainer'>
          <img src={Solaria} alt='Solaria' className='logo'/>
          <div className='titleText'>
            <h2 className='title'>Solaria Labs, A Liberty Mutual Endeavor</h2>
            <h5 className='position'>Full Stack Developer Co-op</h5>
            <h5 className='position'>Boston, MA | July-December 2022</h5>
          </div>
        </div>
        <div className='experience'>
          <div className='stories'>
            <h2 className='subheader'>Frontend Highlights</h2>
            <Accordion expanded={expandedFront === 'panel1'} onChange={handleChangeFront('panel1')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Updating the Liberty+ Logo | July 11, 2022</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Updating the Liberty+ logo was my first story and essentially my introduction
                  to the new code base. I replaced the old logo with the new logo created by our
                  designers in the site header, homepage banner, footer, and email templates. This 
                  story introduced me to SVGs and MJML, our email templating language. Through this
                  story, I learned about corrupted SVGs and communicating with the designers to ensure
                  I have the correct assets to continue with the implementation. After resolving the SVG
                  corruption issue, I faced some issues later on in code review where my changes to the email
                  template did not render correctly on the Windows browser app, but it could render correctly
                  on Mac devices and on any browser of any operating system. 
                </Typography>
              </AccordionDetails>
          </Accordion>
          <Accordion expanded={expandedFront === 'panel2'} onChange={handleChangeFront('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography>Fixing the Liberty+ Logo on Emails | July 19, 2022</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                For this story, I aimed to fix the cross platform errors created by the previous story. 
                As my company device was a Macbook, I needed a virtual machine (VM) to test the emails on
                the Windows Outlook app. More technically speaking, the email incorrectly sized the background
                image that held the logo at the top left and the the "Learn More" button at the bottom.
                As a result, some of the text on the background image was cut off. 
              </Typography>
              <br/>
              <Typography>
                To learn more about the issue,
                I extensively read through the MJML documentation about image sizing and positioning, only for 
                nothing to change no matter what I set any parameters to. After looking into the issue some more
                and finding some reported issues with Windows, I figured that perhaps MJML does not always
                render correctly on Windows, so I may not be able to simply modify the pre-existing code. After
                speaking with a designer, we created a work around solution that instead stacked the components
                one above the other, rather than using the background image and layering everything on top, and 
                replacing the background with a solid color and cutting out the background of the old png. I then
                modified all the sizing until the designer approved of the final look.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expandedFront === 'panel3'} onChange={handleChangeFront('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography>Add Home Profile and Weather Ready Ads | Aug 15, 2022</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                For this story, I was tasked with creating ads for the Home Profile and Weather Ready features
                on the site, which I simplified to creating a generic component for the two ads as well as any future ads.
                I learned how to create custom React Components, pass in props from other places in the code which would make the 
                two ads different,
                as well as create code that is responsive to screen sizes as there were different designs for 
                mobile and desktop. For this story, I also played around a lot in the CSS as there were several image
                components that needed to be precisely placed but not move too much when resizing a window, which proved
                to be difficult with so many image and text components. 
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expandedFront === 'panel4'} onChange={handleChangeFront('panel4')}>
            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
              <Typography> Recovering from Water Damage Guide Landing Page Frontend | Sept 26, 2022</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Following creating the backend for the Guide Homepages, I started using my tables and APIs to create
                the frontend for the Guide Homepage. At the time, we only had planned out one guide homepage, the water
                damage landing page. This story allowed me to experience creating an entire page for the first time
                as well as allowed me to gain a high level understanding of config files, which organize page-url mappings. 
                As a part of this story, I also redesigned the Guide, Article, and Service tiles to fit the new design.
              </Typography>
              <br/> 
              <span>
                Check it out here: &nbsp;
                <a className="link" href="https://libertyplus.libertymutual.com/water-damage">Water Damage Landing Page</a>
              </span>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expandedFront === 'panel5'} onChange={handleChangeFront('panel5')}>
            <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
              <Typography>Update Service Tiles and Ribbon | Oct 11, 2022</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                For this story, I was tasked with updating the service tiles across the website 
                and the service carousel on the homepage to their new designs. Not only did the 
                new designs provide a cleaner look, but they also allowed the users to view more
                services at once due to the added 'max-width' property. After playing around with
                the carousel, looking at its source code and online examples, as well as seeking 
                more senior developers for help, I realized that the library simply did not support
                too much customizability regarding card sizing. I could overwrite the library's
                set width, heights, and margins for the cards, but the swiping
                distance remained set to the old widths and heights leading to offset card windows. 
                If the card widths or margins remained the same, then the swiping would not be offset.
              </Typography>
              <br/>
              
              <Typography>
                After discussing these issues with my team lead, I suggested I try implementing
                a different carousel library that I had also been researching with only a couple
                days left in the sprint. The new library ended up working and supported far more
                customization.
              </Typography>
            </AccordionDetails>
          </Accordion>
          </div>

          <div className='stories'>
            <h2 className='subheader'>Backend Highlights</h2>
            <Accordion expanded={expandedBack === 'panel1b'} onChange={handleChangeBack('panel1b')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Add Feedback Backend and API Mechanism to Articles | Aug 10, 2022</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Though this task was fairly simple, it was my first backend story, which introduced me to the Strapi and PostgreSQL databases
                  as well as writing the GraphQL APIs.
                  I learned how to create a new field for a table, in this case adding the feedback field
                  with an enum of 'Yes' or 'No', as well as create the appropriate migration tables for the PostgreSQL database. 
                </Typography>
              </AccordionDetails>
          </Accordion>
          <Accordion expanded={expandedBack === 'panel2b'} onChange={handleChangeBack('panel2b')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography>Create New Task Tables | Aug 25, 2022</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                For this story, I created the entire backend for our tasks page, including the Tasks table and several
                relational tables. For this story, I gained an even better understanding of how the backend works using
                Strapi, PostgreSQL, and GraphQL. After using the Strapi UI to add the tables into our Strapi database,
                I also created migrations and seed files for the PostgreSQL database, checking the changes against the 
                Strapi database using pgAdmin. Once these changes had been merged, I worked on creating the GraphQL API
                requests so that the frontend can pull data from the backend. 
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expandedBack === 'panel3'} onChange={handleChangeBack('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography>Guide Homepage Backend | Sept 12, 2022</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                For this story, I created the entire backend for the guide homepages. By this point,
                I mostly understood how to construct tables, migrations, and seed files for the backend, so this
                story was not logically challenging. However, I found this story interesting because I was able to 
                create the entire backend and then continue to create the entire frontend as well.
                <p className="link" onClick={() => setExpandedFront('panel4')}>(see Guide Landing Page Frontend)</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expandedBack === 'panel4'} onChange={handleChangeBack('panel4')}>
            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
              <Typography>Safeco+ Email Templates | Dec 8, 2022</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                For this story, I created the templates for the auto-generated emails for the Safeco+ website using MJML.
                While creating the templates themselves were not too difficult after having already worked on the 
                Liberty+ email templates, configuring the emails to be automatically sent was a little more difficult as it
                required to be posted in the frontend and as it required the logic to determine which email to send depending
                on which website the user is logging in on.
              </Typography>
            </AccordionDetails>
          </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
