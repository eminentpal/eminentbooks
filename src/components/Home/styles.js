import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card:{
      marginTop: 0,
      background: "none",
      marginBottom: 100,
      borderBottom: "0px",
      

      
      
      
    },
    cardmiddle:{
      width: "95%",
      margin: " 0 auto",
      overflow: "visible"
    },
    image:{
        width: "100%",
        height:"100",
        maxWidth: 600,
       

    },
    container:{
        display: "flex",
        alignItems: "space-around",
        height: 500,
        
        

    },
    title:{
        marginTop: 100,
        marginBottom: 30,
        fontFamily:" cursive",
    
    }
    ,
    grid:{
        width: "100%",
        
        maxWidth: 600,
        marginLeft: 200,
        textAlign: "justify",
        textAlign: "right",
        fontFamily:" cursive",
        
    }
    ,
    grid2:{
        width: "100%",
        textAlign: "left",
        maxWidth: 600,
        marginRight: 200,
       
    },
    content: {
      fontFamily:" cursive",
      fontSize: 20

    },

    // styling contain 1
  mainGrid:{
    display: " flex",
    justifyContent: " space-between",
    marginTop: 100,
    
  },
  button:{
    
    background: 'white',
    border: "2px solid pink",
    marginBottom: theme.spacing(3),
    background:"white",
    color:"#B1328E",
    fontWeight: "bold",
    marginTop: 60,
   
  },
    contain1:{
       width: "30%",
       height: "50%",
        marginRight: 20,
       textAlign: " center",
       marginBottom: 200,
     
       
       

       
    },
    

    image2:{
  display: "inline-block"
    },
    hr:{
     position: "relative",
     top:"100px",
   
     width:" 100%",
  maxWidth: 300,
  margin: "0 auto 0 auto"
  
    },
    hr2:{
      position: "relative",
      top:"100px",
    
      width:" 100%",
   maxWidth: 300,
   margin: "0 auto 0 auto"
   
     },
     hr3:{
      position: "relative",
      bottom:"500px",
      margin: "0 auto 0 auto",
      width:" 100%",
   maxWidth: 300,
  
   
     },

    container1:{
        display: "flex",
        alignItems: "space-around",
        height: 500,
        flexDirection: "row-reverse",
        
        

    },
    content2:{
      fontFamily:" cursive",
      fontSize: 20
    },
    title2:{
      fontFamily:" cursive",
      fontSize: 40,
      marginBottom: 10
    },
    
   [ theme.breakpoints.down("sm")]:{
    image:{
      width: "100%",
      height:"100",
      maxWidth: 600,
      
  },

  
  container:{
      display: "block",
      alignItems: "center",
      textAlign: "center",
      height: 800,
      overflow: "hidden",
      


  },
  title:{
      marginTop: 100,
      marginBottom: 30,
  
  }
  ,
  grid:{
      width: "100%",
      
      maxWidth: "100%",
      marginLeft: 0,
      textAlign: "justify",
      textAlign: "right",
      
  }
  ,
  grid2:{
      width: "100%",
      textAlign: "center",
      maxWidth: 600,
      marginRight: 200
  },
  content: {
      
     

  },

  // styling contain 1
mainGrid:{
  display: "block",
  justifyContent: " space-between",
  marginTop: 100,
  marginBottom: 200
},
button:{
  
  background: 'white',
  border: "2px solid pink",
  marginBottom: theme.spacing(3),
  background:"white",
  color:"#B1328E",
  fontWeight: "bold",
  marginTop: 30,
},
  contain1:{
     width: "100%",
     height: "50%",
      marginRight: 0,
     textAlign: " center",
     marginBottom: 60,

     
     

     
  },
  content: {
    fontFamily:" cursive",
    fontSize: 20

  },

  image2:{
display: "inline-block"
  },
  hr:{
   position: "relative",
   top:"100px",
 
   width:" 100%",
maxWidth: 300,
margin: "0 auto 0 auto"

  },
  hr2:{
    position: "relative",
    top:"100px",
  
    width:" 100%",
 maxWidth: 300,
 margin: "0 auto 0 auto"
 
   },
   hr3:{
    position: "relative",
    bottom:"820px",
    margin: "0 auto 0 auto",
    width:" 100%",
 maxWidth: 300,

 
   },

  container1:{
      display: "block",
      alignItems: "space-around",
      textAlign: "center",
      height: 500,
      flexDirection: "row-reverse",
      marginBottom: 300,
    
      
      

  },

   }
 
}));

