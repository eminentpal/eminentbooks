import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 200,
    // paddingTop: '56.25%',
    width: "100%",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'blue',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: 3,
    display: 'flex',
    justifyContent: 'center',
    color: "white",

    fontWeight: "bold",
    fontSize: "30px",
 
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
});
