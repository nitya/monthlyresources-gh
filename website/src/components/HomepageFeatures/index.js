import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Featured Content',
    Svg: require('@site/static/img/featured-red.svg').default,
    description: (
      <>
       Hot off the presses - new content from Microsoft and Community
      </>
    ),
  },
  {
    title: 'Code Samples',
    Svg: require('@site/static/img/code-gold.svg').default,
    description: (
      <>
        Explore hands-on tutorials, workshops and learning paths to skill yourself up.
      </>
    ),
  },
  {
    title: 'Dev Resources',
    Svg: require('@site/static/img/resources-gold.svg').default,
    description: (
      <>
        Additional Developer Resources to continue your learning journey.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
