import React from 'react';
import css from './Statistics.module.css';

export const Statistics = ({ stats, title = '' }) => {
  return (
    <section className={css.statistics}>
      {title.length > 0 && <h2 className={css.title}>{title}</h2>}
      <ul className={css['stat-list']}>
        {Array.isArray(stats) &&
          stats.map(stat => {
            return (
              <li className={css.item} key={stat.id}>
                <span className={css.label}>{stat.label}</span>
                <span className={css.percentage}>{stat.percentage}%</span>
              </li>
            );
          })}
      </ul>
    </section>
  );
};
