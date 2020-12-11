import React from 'react';
import Layout from '../components/layout';
import Image from '../components/image';
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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <One />
    <hr />
    <Two />
    <hr />
    <Three />
    <hr />
    <Four />
    <hr />
    <GeneralNotes />
    <hr />
    <NewbieNotes />
    <hr />
    <ChaseNotes />
    <hr />
    <TimingNotes />
    <hr />
    <Credits />
  </Layout>
);

export default IndexPage;
