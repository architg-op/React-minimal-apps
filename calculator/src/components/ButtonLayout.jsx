import Button from './Button';
import styles from './ButtonLayout.module.css';

const ButtonLayout = () => {
  let rows = [
    ['C', '1', '2'],
    ['+', '3', '4'],
    ['-', '5', '6'],
    ['*', '7', '8'],
    ['/', '9', '0'],
    ['0', '.'],
  ];

  return (
    <div className={styles.buttonsDisplay}>
      {rows.map((row) => (
        <div className="row">
          {row.map((item) => (
            <div className="col-1">
              <Button text={item} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ButtonLayout;
