import './button.scss';

const BUTTON_TYPE_CLASSES = {
  red_button: 'red_button',
  black_button: 'black_button',
  blue_button: 'blue_button',
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;