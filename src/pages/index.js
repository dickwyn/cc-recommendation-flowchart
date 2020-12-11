import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';

import Layout from '../components/layout';
import SEO from '../components/seo';
import One from '../../data/yes-southwest-companion-pass.mdx';
import Two from '../../data/no-southwest-companion-pass.mdx';
import Three from '../../data/focus-on-travel.mdx';
import Four from '../../data/focus-on-cashback.mdx';
import Credits from '../../data/credits.mdx';
import GeneralNotes from '../../data/general-notes.mdx';
import NewbieNotes from '../../data/notes-for-newbies.mdx';
import ChaseNotes from '../../data/notes-on-chase-cards.mdx';
import TimingNotes from '../../data/notes-for-timing.mdx';

import './index.css';

const IndexPage = () => {
  const [answer, setAnswer] = useState('');

  return (
    <Layout>
      <SEO title="Home" />

      {answer === '' && (
        <>
          <div style={{ display: 'flex' }}>
            <h1>Are you under 5/24?</h1>
            <Button
              target="_blank"
              href="https://old.reddit.com/r/churning/wiki/index#wiki_chase_cc_rules.2C_including_5.2F24"
              startIcon={<InfoIcon />}
            >
              Learn about 5/24
            </Button>
          </div>
          <Button
            variant="contained"
            onClick={() => {
              setAnswer(`${answer}0`);
            }}
          >
            Yes
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setAnswer(`${answer}1`);
            }}
          >
            No
          </Button>
        </>
      )}
      {answer === '0' && (
        <>
          <div style={{ display: 'flex' }}>
            <h1>Do you want the SW Companion Pass?</h1>
          </div>
          <Button
            variant="contained"
            onClick={() => {
              setAnswer(`${answer}0`);
            }}
          >
            Yes
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setAnswer(`${answer}1`);
            }}
          >
            No
          </Button>
        </>
      )}
      {answer === '1' && (
        <>
          <div style={{ display: 'flex' }}>
            <h1>Are you focusing on travel or cashback?</h1>
          </div>
          <Button
            variant="contained"
            onClick={() => {
              setAnswer(`${answer}0`);
            }}
          >
            Travel
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setAnswer(`${answer}1`);
            }}
          >
            Cashback
          </Button>
        </>
      )}
      {answer.length === 2 && (
        <>
          <Button
            variant="contained"
            onClick={() => {
              setAnswer(``);
            }}
          >
            Reset
          </Button>
        </>
      )}

      {answer === '00' && <One />}
      {answer === '01' && <Two />}
      {answer === '10' && <Three />}
      {answer === '11' && <Four />}

      <div className="accordion">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            General Notes
          </AccordionSummary>
          <AccordionDetails>
            <GeneralNotes />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            Notes for Newbies
          </AccordionSummary>
          <AccordionDetails>
            <NewbieNotes />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            Notes for Chase Cards
          </AccordionSummary>
          <AccordionDetails>
            <ChaseNotes />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            Notes on Timing
          </AccordionSummary>
          <AccordionDetails>
            <TimingNotes />
          </AccordionDetails>
        </Accordion>
      </div>
      <Credits />
    </Layout>
  );
};

export default IndexPage;
