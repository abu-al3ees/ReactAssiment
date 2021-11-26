import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import TopArtical from "./TopArtical";
import './Home.css'
import { Button, Card } from "react-bootstrap";

const Home = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));
  const [articles,setArticles]=useState([])
const [term,setTerms]=useState('everything')

useEffect(() => {
  const fetchArticles=async () => {
  try{
   
      const res =await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=MGSon52mLAHPAMzKnMeJ4X10rMm0Pgyn`)

const articles=await res.json()
// console.log(articles.response.docs)
 setArticles(articles.response.docs)
  } catch (error){
    console.log(error)

  }
}
 fetchArticles();
}, [term])


  const userNotLogin = () => (
    <>
     
      <h3>

        {/* If you have an account, then please <Link to="/login">Login</Link> */}
      </h3>
      <h4 className='register' style={{textAlign:'center'}} >
        Don't have an account, you can {" "}
        <Link to="/register">Register</Link>
        <h2 className='top_art'>Top Article</h2>
        <TopArtical/>
      </h4>
    </>
  );

  return (
    <div style={{ marginTop: "100px" }}>
      {isLoginTrue && isLoginTrue.userLogin ? (
        
       <section>
         
         <SearchForm SearchText={(text)=> setTerms(text) }/>
        
         <div>

          
{articles.map((article)=>{
  const {
    abstract,
    headline:{main},
    byline:{original},
    lead_paragraph,
    news_desk,
    section_name,
    web_url,
    _id,
   

  } = article
  return (
    
<Card className="text-center" style={{textAlign:'center',width:'50%',background:'white',margin:'50px auto',height:'80vh',borderRadius:'15px',}} >
<Card.Body>
  <Card.Title style={{padding:'15px',background:'#b1afaf' }}>{main}</Card.Title>
   <Card.Text style={{marginTop:'3rem',width:'42rem',fontSize:'medium'}} >
   {abstract}
  </Card.Text>
  <Card.Text style={{marginTop:'3rem',width:'42rem',fontSize:'small'}} >
   {lead_paragraph}
  </Card.Text>
 
</Card.Body>
<Card.Footer className="text-muted" style={{marginTop:'1rem'}}> {original}</Card.Footer>
<Card.Footer className="text-muted" style={{marginTop:'1rem'}}>Categroy : {section_name}</Card.Footer>
<a href={web_url} ><Button Style={{border:'none'}}>Read More...</Button></a>
</Card> 


  )
})

}
</div>

       </section>
      ) : (
        <>{userNotLogin()}</>
      )}
    </div>
  );
};

export default Home;