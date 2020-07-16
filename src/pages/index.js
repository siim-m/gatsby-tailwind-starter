import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi!</h1>
    <p>Gatsby starter ready to be styled with TailwindCSS.</p>
  </Layout>
);

export default IndexPage;
