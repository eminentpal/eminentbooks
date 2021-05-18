import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({

  root:{
    width: "100%",
    color: "grey"
  },
  appBar: {
    boxShadow: 'none',
    borderBottom: '0',
     background: "grey",
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
    top: 130

    },
  col3:{
    marginLeft: 100,
    color: "pink"
  }
  ,
  title: {
   color: "#D67086"
  },
  col4:{
    marginRight: 100,
    color: "pink"
  }
  ,
  Copyright:{
    textAlign: "center",
    marginTop: 0,
    fontStyle: "italic",
    color: "pink"
  },
 
    [theme.breakpoints.down('sm')]: {
      foot:{
       textAlign: "center"
      }
      ,
      col3:{
        marginLeft: 0,
        width: "100%",
        color: "pink"
      }
      ,
      title: {
       color: "#D67086"
      },
      col4:{
        marginRight: 0,
        width: "100%",
        color: "pink"
      }
      ,
    },

}));