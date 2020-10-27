import React from 'react';
import MuiButton from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const Button = ({ 
	title, 
  color, 
  disabled = false, 
  disableElevation = false, 
  variant, 
  size,
  onClickHandle
 }) => {
	return (
		<MuiButton 
			size={size}
			color={color}
			variant={variant}
			disabled={disabled}
      disableElevation={disableElevation}
			>
			{title}
		</MuiButton>
	);
}

export default Button;

Button.propTypes = {
	title: PropTypes.string,
	size: PropTypes.string,
	color: PropTypes.string,
	variant: PropTypes.string,
	disabled: PropTypes.bool, 
	disableElevation: PropTypes.bool, 
};
Button.defaultProps = {
	title: "A button",
	size: "medium",
	color: "primary",
	variant: "contained",
	disabled: false,
	disableElevation: false, 
};