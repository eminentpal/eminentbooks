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
    backgroundColor:  "#DB8295 ",
    color: "white",
    border: "2px solid #420606"
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'blue',
    fontFamily:" Lato, sans-serif",
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
    fontFamily:" Lato, sans-serif",
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
    fontFamily:" Lato, sans-serif",
  },
  title: {
  
    fontFamily:" Lato, sans-serif",
    textAlign: "center"
  },
  cardActions: {
   
    display: 'flex',
    justifyContent: 'center',
    color: "#420606",
    fontFamily:" Lato, sans-serif",

   

 
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
});
