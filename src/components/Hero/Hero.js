import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '../Button/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: '#f2f2f2',
    padding: theme.spacing(8, 0, 6),
    marginBottom: theme.spacing(4),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const Hero = ({
  title,
  description,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {description}
        </Typography>
        <div>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button text="Main call to action" variant="contained" color="primary" />
            </Grid>
            <Grid item>
              <Button text="Secondary action" variant="outlined" color="primary" />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Hero;

Hero.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
Hero.defaultProps = {
  title: "This is a title",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet varius est, at convallis libero vehicula quis.",
};