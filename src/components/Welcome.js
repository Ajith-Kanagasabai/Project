import React from 'react'
import Header1 from './Header1'

function Welcome() {
    return (
        <div>
            <Header1 />
            <div className='welcome'>
                <h1>Welcome to the Ramsy Healthcare</h1>
                <h3>Your Career Is In Excellent Hands</h3>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> 
                <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    )
}

export default Welcome