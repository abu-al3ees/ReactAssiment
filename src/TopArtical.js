
import React from 'react'
import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function TopArtical() {
    // const [comment,setComment]=useState([])
    const [articles,setArticles]=useState([])
    useEffect(() => {
        const fetchComments=async () => {
        try{
         
            const res =await fetch(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=MGSon52mLAHPAMzKnMeJ4X10rMm0Pgyn`);
             
     const articles=await res.json();
     console.log(articles.results);
      setArticles(articles.results)
        } catch (error){
          console.log(error)
      
        }
      }
       fetchComments();
      }, [])
    return (
        <div>
            {articles.map((article)=>{
  const {
    title,
    abstract,
    section,
    url,


  } = article
  return (
    

<Card className="text-center" style={{textAlign:'center',width:'50%',background:'white',margin:'50px auto',height:'50vh',borderRadius:'15px',}} >
<Card.Body>
  <Card.Title style={{padding:'15px',background:'#b1afaf' }}>{title}</Card.Title>
   <Card.Text style={{marginTop:'3rem',width:'42rem',fontSize:'medium'}} >
   {abstract}
  </Card.Text>
 <a href={url} ><Button Style={{border:'none'}}>Read More...</Button></a>
</Card.Body>
<Card.Footer className="text-muted" style={{marginTop:'5rem'}}>Categroy : {section}</Card.Footer>
</Card> 
  )
})

}
            
        </div>
    )
}

export default TopArtical
