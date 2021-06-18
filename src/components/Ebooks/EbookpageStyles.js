import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  content: {
    
    backgroundColor: "none",
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-between',
   
   
  },
   pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  roll:{
    position: "relative",
    top: "250px",
    left:"50%"

  },
  root: {
    flexGrow: 1,
  }
  ,
      loading : {
        position:"relative",
      left:"600px",
      top:"300px"
    },

    searchbar:{
      marginBottom: 30,
      marginLeft: 30,
      
      
    },
    search:{
      marginTop: 10,
      color: "pink",
      
      '& label.Mui-focused': {
        color: 'pink',
        borderColor: "pink"
      },
      "&$focused": {
        backgroundColor: "pink",
       
      },
      "& .MuiInput-underline:before": {
        borderBottomColor: "pink"
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "red"
      },
     
      
     
     
    },

    greenUnderline:{
      "&:hover": {
        borderColor: " blue !important",
        backgroundColor: "white !important"
      }
    },
    searchicon:{
      position : "relative",
      right: 40,
      top: 20,
      color:"pink",
      background: "none",
      width: 0
    }
}));