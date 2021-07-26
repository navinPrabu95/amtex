// import React,{useState} from 'react'
// import Answer from './Answer'
// import Questions from './Questions'
// import Data from './Data'

// const PageNo=(props)=> {

//     const[list,setList]=useState(Data)
//     const[editIndex,setEditIndex]=useState(1)

//      const degPage=(value,index)=>{
        
//      }
//      const firstPage=(value,index)=>{
       
//      }
         
//     const increasePage=(value,index)=>{
//         setEditIndex(editIndex+1)
//         return editIndex==value.id&& console.log(value.question);
//         }
  

//     let library= list.map((value,index)=>{
//          return (
//              <div key={value.id}>
//             <button onClick={()=>degPage(value,index)}>Prev</button>
//             <button onClick={()=>firstPage(value,index)}>{index+1}</button>
//             <button onClick={()=>increasePage(value,index)}>Next</button>
//             </div>
//          )
//     })
//     return (
//         <div>
//             <h1>Page NO</h1>
//             {library}
//         </div>
//     )
   
// }

// export default PageNo