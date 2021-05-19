import {makeStyles} from "@material-ui/core/styles"


export default  makeStyles((theme)=> ({
    root: {
        maxWidth: '100%',
        background:"#f5d7e0",

      },
      media: {
        height: 200,
        width: '100%', // 16:9
       
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      cardContent: {
        display: 'flex',
        textAlign:'center',
        
        justifyContent: 'center',
      } 
      ,
      link:{
        textOutline:"none",
        textDecoration:"none",
        color:"black"

        
      },
      pric:{
        color:"#DB545A"
      },
      body:{
        color:"black",
      },
      title:{
        color:"black",
      }
     ,
      [theme.breakpoints.down("sm")]: {
        media: {
          height: 290,
          width: '100%', // 16:9
         
        },
      }
 
}) )

//to avoid instant retrun you wrap it inside parentices ({your code here})