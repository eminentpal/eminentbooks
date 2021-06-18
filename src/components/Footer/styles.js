import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({

  root:{
    width: "100%",
    color: "white"
  },
  appBar: {
    boxShadow: 'none',
    borderBottom: '0',
     background: "#D67086",
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  hr:{
    marginBottom: 150,
    marginTop: 100,
    width: "100%",
    position: "relative",
    top: 130,
    color: "white"

    },
  col3:{
    // marginLeft: 100,
    color: "white",
    marginLeft: 130,
    fontFamily:" Lato, sans-serif",
    fontSize: 20
  }
  ,
  title: {
   color: "white"
  },
  col4:{
    // marginRight: 100,
    color: "white",
    marginLeft: 130,
    fontFamily:" Lato, sans-serif",
    fontSize: 15,
    content: "contain",

  }
  ,
  Copyright:{
    textAlign: "center",
    marginTop: 40,
    fontStyle: "italic",
    color: "white"
  },
  foot:{
   display: "flex",
   flexDirection: "row",
   marginTop: 40,
   

  },
  col1:{
    width:"25%",
    marginLeft: "40px",
    fontFamily:" Lato, sans-serif",
    fontSize: 20

  },
  social:{
    float:"left",
    marginRight:"4px"
  },
  text:{
    fontFamily:" Lato, sans-serif",
    
  },
  text1:{
    fontFamily:" Lato, sans-serif",
    
  },
 
    [theme.breakpoints.down('sm')]: {
      foot:{
        display: "grid",
      
      
      },
      social:{
        float:"none",
        marginRight:"20px",
        position: "relative",
        marginLeft: 20,
        
      },
      
      col1:{
       width: "100%",
       textAlign: "center",
       marginLeft: 0
      },
      col3:{
        marginLeft: 0,
        textAlign: "center"
      
      }
      ,
      title: {
       color: "#D67086",
       display: "block"
      },
      col4:{
        textAlign: "center",
        paddingLeft: 0,
        marginLeft: 0,
        marginTop: 0,
       
       
      }
      ,
      text:{
        display:"none"
      }
    },

}));