import React from 'react';
import Card from './Card';

export default {
	component: Card,
	title: 'Components/Surfaces/Card',
	argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
        imageUrl: { control: 'text' },
		color: {
			control: {
				type: 'select',
				options: ['default', 'primary', 'secondary'],
			},
		},
		variant: {
			control: {
				type: 'select',
				options: ['contained', 'outlined'],
			},
		},
	},
};

export const Default = args => (
    <div style={{'width':'280px'}}>
        <Card {...args} />
    </div>
);

// Default.args = {
// 	title: '',
// 	imageUrl: '',
// 	description: '',
// };