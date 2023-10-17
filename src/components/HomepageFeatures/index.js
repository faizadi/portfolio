import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About Me',
    Svg: require('@site/static/img/undraw_profile_re_4a55.svg').default,
    description: (
      <>
        Currently work at <code>WIKA</code> - Managing ERP (Enterprise Resource Planning) Application.
      </>
    ),
  },
  {
    title: 'My Contact',
    Svg: require('@site/static/img/undraw_agreement_re_d4dv.svg').default,
    description: (
      <>
        Reach me at <a href="mailto:faizadiwicaksono@hotmail.com">faizadiwicaksono@hotmail.com</a>.
      </>
    ),
  },
  {
    title: 'Skills',
    Svg: require('@site/static/img/undraw_programming_re_kg9v.svg').default,
    description: (
      <>
         <code>SAP-Project System</code> <code>SAP-Material Management</code> <code>ERP</code> <code>SQL Database</code> <code>PHP</code> <code>CSS</code> <code>Java Script</code> .
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
