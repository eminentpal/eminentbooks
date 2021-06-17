import { makeStyles } from '@material-ui/core/styles';

export  default  makeStyles((theme) => ({
    shop: {
        fontSize: "4px",
        color: "black",
        diplay: "none"
      },
    [ theme.breakpoints.down("sm")]:{
     image:{
       width: "100%",
       height:"100",
       maxWidth: 600,
       
   },
  
    }
  }));