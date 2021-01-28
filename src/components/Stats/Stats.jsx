import React from 'react';
import T from 'prop-types';
import StatsList from './StatsList';
import styles from './Stats.module.css';

const Stats = ({ title, stats }) => {
  return (
    <section className={styles.section}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <StatsList items={stats} />
    </section>
  );
};

Stats.propTypes = {
  title: T.string,
};

export default Stats;
