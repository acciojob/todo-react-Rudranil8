
// import React from "react";
// import './../styles/App.css';

// const App = () => {
//   return (
//     <div>
//         {/* Do not remove the main div */}
//     </div>
//   )
// }

// export default App

// import React, { useState } from "react";
// import './../styles/App.css';

// const App = () => {
//   let [todos,setTodos]=useState([])
//   let [newTodo,setNewTodo]=useState('')

//   function addTodo(){
//     if(newTodo.trim()!==''){
//       setTodos([...todos,newTodo]);
//       setNewTodo('');
//     }
//   }

//   function removeTodo(i){
//     let updatedTodos=todos.filter((element,index)=>{
//       return i!==index;
//     })
//     setTodos(updatedTodos)
//   }

//   return (
//     <div className="main">
//         {/* Do not remove the main div */}
//         <h1>To-D0 List</h1>
//         <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}  />
//         <button onClick={addTodo}>Add Todo</button>
//         <ul>
//         {
//           todos.map((element,index)=>(
//             <li key={index}>
//               <div>{element}</div>
//               <button on
// import React, { useState } from "react";
// import './../styles/App.css';

// const App = () => {
//   let [todos,setTodos]=useState([])
//   let [newTodo,setNewTodo]=useState('')

//   function addTodo(){
//     if(newTodo.trim()!==''){
//       setTodos([...todos,newTodo]);
//       setNewTodo('');
//     }
//   }

//   function removeTodo(i){
//     let updatedTodos=todos.filter((element,index)=>{
//       return i!==index;
//     })
//     setTodos(updatedTodos)
//   }

//   return (
//     <div className="main">
//         {/* Do not remove the main div */}
//         <h1>To-D0 List</h1>
//         <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}  />
//         <button onClick={addTodo}>Add Todo</button>
//         <ul>
//         {
//           todos.map((element,index)=>(
//             <li key={index}>
//               <div>{element}</div>
//               <button onClick={()=>removeTodo(index)}></button>
//             </li>
//           ))
//         }
//         </ul>
//     </div>
//   )
// }

// export default App




// import React, { useState } from "react";
// import './../styles/App.css';

// const App = () => {
//   let [todos,setTodos]=useState([])
//   let [newTodo,setNewTodo]=useState('')

//   function addTodo(){
//     if(newTodo.trim()!==''){
//       setTodos([...todos,newTodo]);
//       setNewTodo('');
//     }
//   }

//   function removeTodo(i){
//     let updatedTodos=todos.filter((element,index)=>{
//       return i!==index;
//     })
//     setTodos(updatedTodos)
//   }

//   return (
//     <div className="main">
//         {/* Do not remove the main div */}
//         <h1>To-D0 List</h1>
//         <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}  />
//         <button onClick={addTodo}>Add Todo</button>
//         <ul>
//         {
//           todos.map((element,index)=>(
//             <li key={index}>
//               <div>{element}</div>
//               <button onClick={()=>removeTodo(index)}></button>
//             </li>
//           ))
//         }
//         </ul>
//     </div>
//   )
// }

// export default App

import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    const trimmedTodo = newTodo.trim();
    if(trimmedTodo !== ''){
      setTodos([...todos, trimmedTodo]);
      setNewTodo('');
    }
  }

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((element, i) => i !== index);
    setTodos(updatedTodos);
  }

  return (
    <div className="main">
        <h1>To-D0 List</h1>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}  />
        <button onClick={addTodo}>Add Todo</button>
        <ul>
        {
          todos.map((element, index) => (
            <li key={index}>
              <div>{element}</div>
              <button onClick={() => removeTodo(index)}>Delete</button>
            </li>
          ))
        }
        </ul>
    </div>
  )
}

export default App;
