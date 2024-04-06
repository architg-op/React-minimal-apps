import Button from './Button';

const ButtonLayout = () => {
  let row1 = ['C', '1', '2'];
  let row2 = ['+', '3', '4'];
  let row3 = ['-', '5', '6'];
  let row4 = ['*', '7', '8'];
  let row5 = ['/', '=', '9'];
  let row6 = ['0', '.'];

  return (
    <>
      <div class="container text-center">
        <div class="row">
          {row1.map((item) => (
            <div class="col">
              <Button text={item} />
            </div>
          ))}
        </div>
        <div class="row">
          {row2.map((item) => (
            <div class="col">
              <Button text={item} />
            </div>
          ))}
        </div>{' '}
        <div class="row">
          {row3.map((item) => (
            <div class="col">
              <Button text={item} />
            </div>
          ))}
        </div>{' '}
        <div class="row">
          {row4.map((item) => (
            <div class="col">
              <Button text={item} />
            </div>
          ))}
        </div>{' '}
        <div class="row">
          {row5.map((item) => (
            <div class="col">
              <Button text={item} />
            </div>
          ))}
        </div>{' '}
        <div class="row">
          {row6.map((item) => (
            <div class="col">
              <Button text={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ButtonLayout;
