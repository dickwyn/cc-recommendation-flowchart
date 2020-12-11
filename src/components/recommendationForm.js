import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import One from '../../data/yes-southwest-companion-pass.mdx';
import Two from '../../data/no-southwest-companion-pass.mdx';
import Three from '../../data/focus-on-travel.mdx';
import Four from '../../data/focus-on-cashback.mdx';
import './recommendationForm.scss';

const RecommendationForm = () => {
  const [answer, setAnswer] = useState('');

  return (
    <>
      <div className="question-container">
        {answer === '' && (
          <>
            <div className="heading">
              <h1>
                Are you under{' '}
                <Link
                  target="_blank"
                  href="https://old.reddit.com/r/churning/wiki/index#wiki_chase_cc_rules.2C_including_5.2F24"
                >
                  5/24 <OpenInNewIcon />
                </Link>{' '}
                ?
              </h1>
            </div>
            <div className="actions">
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
            </div>
          </>
        )}
        {answer === '0' && (
          <>
            <div className="heading">
              <h1>Do you want the SW Companion Pass?</h1>
            </div>
            <div className="actions">
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
            </div>
          </>
        )}
        {answer === '1' && (
          <>
            <div className="heading">
              <h1>Are you focusing on travel or cashback?</h1>
            </div>
            <div className="actions">
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
            </div>
          </>
        )}
        {answer.length === 2 && (
          <>
            <h1>Here's your recommendation</h1>
            <div className="actions single">
              <Button
                variant="contained"
                onClick={() => {
                  setAnswer(``);
                }}
              >
                Start over
              </Button>
            </div>
          </>
        )}
      </div>

      <div className="answer-container" style={{ display: answer.length < 2 ? 'none' : 'block' }}>
        {answer === '00' && <One />}
        {answer === '01' && <Two />}
        {answer === '10' && <Three />}
        {answer === '11' && <Four />}
      </div>
    </>
  );
};

export default RecommendationForm;
