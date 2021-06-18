import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  ul: {
    // display:"flex",
    // flexDirection: "row",
    justifyContent: 'space-around',
   
  },
  li:{
    margin: 70
  },
 
  [theme.breakpoints.down("sm")]:{
    page:{
      width:"100%",
      margin: "0 auto",
      maxWidth: "300px"
      
  
    },
    li:{
      marginLeft: 20
    },
  }
}));
