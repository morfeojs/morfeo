import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  HowItWorks,
  CodeExample,
  HomepageHeader,
  HomepageFeatures,
} from '../components';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HowItWorks />
        <CodeExample />
      </main>
    </Layout>
  );
}
