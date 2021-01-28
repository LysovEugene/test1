import React from 'react';
import T from 'prop-types';
import styles from './Stats.module.css';

const StatsList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li className={styles.item} key={item.id}>
          <span className={styles.label}>{item.label}</span>
          <span className={styles.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

StatsList.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.number.isRequired,
    }),
  ),
};
export default StatsList;
