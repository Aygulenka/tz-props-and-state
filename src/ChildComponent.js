import React  from 'react'

const ChildComponent = ({name, state}) =>{
    return(
        <div>
    <h3>Привет,{name}!</h3>
    <h3>Текущий счетчик:{state} </h3>

</div>
    )
}

export default ChildComponent