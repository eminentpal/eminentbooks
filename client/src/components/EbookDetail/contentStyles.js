import {makeStyles} from "@material-ui/core/styles"


export default makeStyles((theme)=>({
    card: {
        
        background:"none",
       boxShadow:"none",
       marginBottom: 100
        
      },
      content: {
          display: 'flex',
          textAlign: "left",
          marginTop: theme.spacing(10),
          textAlign: "justify",
         
          
      },
      typo:{
        width:"45%",
          position:"relative",
          left:30,
          borderRadius: "10px",
          border: "3px  ",
          padding: "30px",
         
          
      },
      button :{
        marginTop: theme.spacing(3),
        margin: "0 auto",
        background: 'white',
        borderRadius: 30,
        marginBottom: theme.spacing(3),
        background:"white",
        color:"#d99eb0",
        border:"2px solid #d99eb0",
        display: "block",
        alignItems: "center",
        padding: "10px 40px 10px 20px",
        fontWeight: "bold"
        
      }
      ,
      button2 :{
       background:"none",
       color: "#f5d7e0",
       position: "relative",
       bottom: -8
      },
      a:{
        color:"#d99eb0"
      },
      back:{
        color:"#d99eb0",
        marginBottom: 20
      },
      body:{
        marginTop: theme.spacing(3),
        color:'#3D113D',
        lineHeight:2,
      },
      titl:{
        marginBottom: theme.spacing(3),
        width:"100%",
        textAlign:"center",
        
      },
      title:{
        fontSize:"30px",
        
      },
      whatsapp:{
        color:"#4CED69" ,
        marginLeft: "4px",
        position: "absolute",
        
      
        
      },
      mainMedia:{
        marginTop: "0px",
        width: "550px",
        height: "450px",
        borderRadius: "10px",
        overflow:" hidden",
        marginLeft: "30px",
        
        border: "2px solid #d99eb0"
      },
      media: {
        
        width:"80%",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
        height: "80%",
        margin: "50px 60px",
      },
      price:{
        marginBottom: theme.spacing(3),
        color:"#DB545A"
      },

      recommendedPosts:{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        margin: "0 auto",
        maxWidth: "1200px",
        textAlign:"center"
      },
      card2:{
        textAlign:"center",
        background: "pink"
      },
      grid:{
        marginRight: "10px",
       marginLeft: 10
      }
      ,
      selectedFile :{
        width:" 100%",
        maxWidth:300,
        height: "100%",

        maxHeight: 150,
        marginTop: 30
      },
      typo1:{
        maxWidth:"310px", 
      textAlign: "center"
    },
      [theme.breakpoints.down("sm")]: {
        card: {
        
          background:"none",
         boxShadow:"none",
         width: "100%" 
        },
        content: {
            display: 'block',
            textAlign: "left",
            marginTop: theme.spacing(10),
            textAlign: "justify",
            
        }
        ,
      button :{
    
        margin: " 0 auto",
        background: 'white',
        borderRadius: 30,
       
        background:"white",
        color:"#DB545A",
        border:"1px solid #DB545A"
        
      }
      ,
      mainMedia:{
        marginTop: "0px",
        width: "90%",
        height: "350px",
        borderRadius: "10px",
        overflow:" hidden",
        
        margin: "0 auto",
        border: "2px solid #d99eb0"
      },
      media: {
        
        width:"100%",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
        height: "100%",
        margin: "0px 0px",
      }
      ,
      body:{
        marginBottom: 100,
        color:'#3D113D',
        lineHeight:2,
      },
      typo:{
        width:"100%",
          position:"relative",
          left:0,
          borderRadius: "10px",
          border: "3px  ",
          padding: "30px",
         
          
      },
      recommendedPosts:{
        display: "block",
      
        width: "100%",
        maxWidth: "300px",
       margin: "0 auto"
      },

      card2: {
        textAlign: "center",
        background: "pink"
      },
      grid:{
        marginRight: 0,
        marginBottom: "50px",
        marginTop: "50px",
      },
      typo1:{
        maxWidth:"100%", 
      textAlign: "center"
    },
      },
}))