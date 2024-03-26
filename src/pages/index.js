import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import PresentationPage from '@site/src/components/PresentationPage'

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={`container ${styles.container}`}>
        <div>
          <h1 className={styles.hero__title}>
            {siteConfig.title}
          </h1>
          <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}
          style={{
            display:'flex',
            gap:'1em',
            flexWrap:'wrap'
          }}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              📓 Leer documentación
            </Link>
            <a href={'/dashboard'} className="button button--secondary button--lg">
              💻 Ingresar a dashboard
            </a>
          </div>
        </div>
        <img src='img/undraw_doctors_p6aq.svg' className={styles.hero__svg} />
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <PresentationPage />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
