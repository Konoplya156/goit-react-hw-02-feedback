import css from './Statistics.module.css';
import Notification from 'components/Notification/Notification';
import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return total ? (
    <div>
      <p className={css.statItem}>
        Good: <span className={css.good}>{good}</span>
      </p>
      <p className={css.statItem}>
        Nautral: <span className={css.nautral}>{neutral}</span>
      </p>
      <p className={css.statItem}>
        Bad: <span className={css.bad}>{bad}</span>
      </p>
      <p className={css.statItem}>
        Total: <span className={css.neutral}>{total}</span>
      </p>
      <p className={css.statItem}>
        Positive feedback:{' '}
        <span className={css.good}>{positivePercentage}</span>%
      </p>
    </div>
  ) : (
    <Notification message="There is no feedback" />
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
