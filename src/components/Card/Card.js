import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiCard from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '../Button/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
card: {
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
},
cardMedia: {
	paddingTop: '56.25%', // 16:9
},
cardContent: {
	flexGrow: 1,
},
}));

const Card = ({
	title,
	imageUrl,
	description,
	variant,
}) => {
	const classes = useStyles();
	return (
		<MuiCard className={classes.card} variant={variant}>
			<CardMedia
				className={classes.cardMedia}
				image={imageUrl}
				title={title}
			/>
			<CardContent className={classes.cardContent}>
				<Typography gutterBottom variant="h5" component="h2">
					{title}
				</Typography>
				<Typography>
					{description}
        </Typography>
			</CardContent>
			<CardActions>
				<Button text="View" size="small" color="primary" variant="contained" />
				<Button text="Save" size="small" color="primary" variant=""/>
			</CardActions>
		</MuiCard>
	);
}

export default Card;

Card.propTypes = {
	title: PropTypes.string,
	imageUrl: PropTypes.string,
	description: PropTypes.string,
	variant: PropTypes.string,
};
Card.defaultProps = {
	title: "A title",
	imageUrl: "//source.unsplash.com/random",
	description: "This is a media card. You can use this section to describe the content.",
	variant: "outlined"
};