import React from 'react';
import styles from './index.module.css'

export default function PresentationPage() {
    return (
      <section className={styles.presentation}>
        <div className={styles.presentation__text}>
            <h2>Bienvenido!!</h2>
            <p className={styles.presentation__p}>Bienvenido a nuestro sistema de gestión integral para proveedores de equipos médicos en Argentina. Diseñado con la visión de facilitar y optimizar el proceso de adquisición de productos médicos, nuestra plataforma centraliza toda la información relevante sobre proveedores y productos en un solo lugar accesible.</p>
        </div>
        <img className={styles.presentation__svg} src='img/app.svg' />
      </section>
    );
  }