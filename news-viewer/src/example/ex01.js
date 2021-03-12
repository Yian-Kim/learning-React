// 14.2 axios로 API 호출해서 데이터 받아 오기
/**
 * App.js
 */
 import React, { useState } from 'react';
 import axios from 'axios';
 
 const App = () => {
   const [data, setData] = useState(null);
   const onClick = async () => {
     try {
       const response = await.axios.get('https://jsonplaceholder.tyicode.com/todos/1',
       );
       setData(response.data);
     } catch (e) {
       console.log(e);
     }
   };
   return (
     <div>
       <div>
         <button onClick={onClick}>불러오기</button>
       </div>
       {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
     </div>
   );
 };
 
 export default App;