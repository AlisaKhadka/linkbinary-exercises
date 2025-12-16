import { useState } from "react";

 export default function SimpleCounter(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>Simple Counter</h1>
           <h2>Count:{count}</h2>
           <button onClick={()=> setCount(count + 1)}>plus(+)</button>

           <button onClick={()=> setCount(count - 1)}>minus(-)</button>
        </div>
    );
 }