import React,{useState} from 'react'

//here we have to destructuring the props from parent to child 

const List = ({array}) => {

  //make the list type means dynamically nature 

const [product ,setproduct]= useState(array)


//Delete the Element from the list 
  
  const deleteIt=(e)=>{
    // console.log(e.target.id);
    let updatePro=product.filter((el)=> e.target.id  !== `${el.id}` )
    // console.log(updatePro);
    setproduct(updatePro)
  }
   



  return (
    <div>

    <h1>List Render</h1>

   {/* Rendering the List from Json data   */}

  {product.map((e,i)=>(
       <div key={e.id}>
        <h2>{e.id}</h2>
        <h3>{e.node_id}</h3>
        <h4><img src={e.avatar_url} alt="empty"/></h4>
        <h5>{e.type}</h5>
        <br/>


  {/* delete the data from the rendering list  */}

        <button id={e.id} onClick={deleteIt}>Remove</button>
       </div>
      ))} 
    
    </div>
  )
}

export default List
