import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Centralización de Información',
    Svg: require('@site/static/img/information.svg').default,
    description: (
      <>
        La plataforma permite centralizar y organizar de manera efectiva la información de todos los proveedores y productos médicos
      </>
    ),
  },
  {
    title: 'Ahorro de Tiempo en Investigación',
    Svg: require('@site/static/img/time.svg').default,
    description: (
      <>
        Los usuarios ahorran tiempo al no tener que buscar proveedores y productos en diferentes lugares
      </>
    ),
  },
  // {
  //   title: 'Datos de Contacto',
  //   Svg: require('@site/static/img/updated_data.svg').default,
  //   description: (
  //     <>
  //       Los datos de contacto de los proveedores se encuentran disponibles de manera clara y accesible en la plataforma.
  //     </>
  //   ),
  // },
  {
    title: 'Mejora en la Toma de Decisiones',
    Svg: require('@site/static/img/decision.svg').default,
    description: (
      <>
        Facilitar la toma de decisiones informadas al tener información detallada sobre productos y proveedores
      </>
    ),
  }
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
      <h2 style={{
        marginBottom:'2em',
        textAlign:'center',
        color: 'var(--ifm-color-primary)'
      }}>
        ¿Que beneficios proporciona ProveeMed?
      </h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
