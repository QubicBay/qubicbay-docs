import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function ImageGrid() {
  const images = [
    "/img/qubicbay/Screenshot_1.png",
    "/img/qubicbay/Screenshot_2.png",
    "/img/qubicbay/Screenshot_3.png",
    "/img/qubicbay/Screenshot_4.png",
    "/img/qubicbay/Screenshot_5.png",
    "/img/qubicbay/Screenshot_6.png",
  ];
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "16px",
      justifyItems: "center"
    }}>
      {images.map((src, idx) => (
        <img key={idx} src={src} alt={`Screenshot ${idx+1}`} width={250} />
      ))}
    </div>
  );
}
