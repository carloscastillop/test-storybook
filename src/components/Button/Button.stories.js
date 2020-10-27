import React from 'react';
import Button from './Button';

export default {
	component: Button,
	title: 'Components/Input/Button',
	argTypes: {
		title: { control: 'text' },
		color: {
			control: {
				type: 'select',
				options: ['default', 'primary', 'secondary'],
			},
		},
		disabled: { control: 'boolean' },
		disableElevation: { control: 'boolean' },
		variant: {
			control: {
				type: 'select',
				options: ['contained', 'outlined'],
			},
		},
		size: {
			control: {
				type: 'select',
				options: ['small', 'medium', 'large'],
			},
		},
	},
};

export const Default = args => <Button {...args} />;

Default.args = {
	size: 'small',
	variant: 'contained',
};