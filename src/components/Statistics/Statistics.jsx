import styles from './Statistics.module.css';
import data from './data.json';
import PropTypes from 'prop-types';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Statistics = () => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>UPLOAD STATS</h2>

      <ul className={styles.statList}>
        {data.map((item, index) => (
          <li
            className={styles.item}
            style={{ backgroundColor: getRandomColor() }}
            key={index}
          >
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { Statistics };

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
