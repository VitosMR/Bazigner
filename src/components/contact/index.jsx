import React from "react";
import './style.css'
const Form= ()=>{
    return(
        <div className="forma">
        <form>
            <h1>
                Conatact
                <input type="text" name="name" id="" placeholder="Your name" />
                <input type="email" name="email" id=""placeholder="Your email" />
                <input type="text" name="Subject" id="" placeholder="Subject" />
                <input type="text" name="Message" id="" placeholder="Message"/>
                <button type="submit" > Send</button>
                </h1>
        </form>
        </div>
    )
}
export default Form