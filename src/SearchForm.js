import React,{useState} from 'react'

const SearchForm = ({SearchText}) => {
const [text,setText]=useState('')
const handleSubmit = (e)=>{
    e.preventDefault()
 SearchText(text)
}

    return (
        <div style={{textAlign:'center'}}>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='e.g category World or Science'
                onChange={(e)=>setText(e.target.value) }
               
                style={{width:'300px',height:'35px',border:'none',borderTopLeftRadius:'5px',borderBottomLeftRadius:'5px'}}
                />
                <button type='submit'
                 style={{width:'60px',height:'35px',border:'none',borderTopRightRadius:'5px',borderBottomRightRadius:'5px',background:'grey'}}
                >search</button>
            </form>
            
        </div>
    )
}

export default SearchForm
