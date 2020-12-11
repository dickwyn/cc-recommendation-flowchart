import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Layout from '../components/layout';
import SEO from '../components/seo';
import RecommendationForm from '../components/recommendationForm';
import Credits from '../../data/credits.mdx';
import GeneralNotes from '../../data/faq/general-notes.mdx';
import NewbieNotes from '../../data/faq/notes-for-newbies.mdx';
import ChaseNotes from '../../data/faq/notes-on-chase-cards.mdx';
import TimingNotes from '../../data/faq/notes-for-timing.mdx';

import './index.scss';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Card Recommendation Flowchart" />
      <RecommendationForm />
      <div className="accordion">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="full-card-recommendation-flowchart"
            id="panel-1-header"
          >
            Full flowchart
          </AccordionSummary>
          <AccordionDetails>
            <div className="full-flowchart-container">
              <iframe
                src="https://kevlarlover.s3.us-east-2.amazonaws.com/Card+Recommendation+Flowchart+v16.html"
                frameBorder="0"
              />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="general-notes"
            id="panel-2-header"
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
            aria-controls="notes-for-newbies"
            id="panel-3-header"
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
            aria-controls="notes for chase cards"
            id="panel-4-header"
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
            aria-controls="notes-on-timing"
            id="panel-5-header"
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
