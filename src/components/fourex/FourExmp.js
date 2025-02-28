import { useState } from "react";
const Four = () => {
    const [firstName] = useState('Aashish')
    const [lastName] = useState('Morya')
    return(
        <div>
            <p>
                First Name is : {firstName} <br/>
                Last Name is : {lastName}<br/>
            </p>
        </div>
    )
}
export default Four;