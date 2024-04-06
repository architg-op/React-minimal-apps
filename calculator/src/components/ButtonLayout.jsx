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
    <div class="container text-center">
      {rows.map((row) => (
        <div class="row">
          {row.map((item) => (
            <div class="col-1">
              <Button text={item} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ButtonLayout;
