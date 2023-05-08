import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const SendMessage = () => {

    const [ value, setValue ] = useState("");  
    const { currentUser } = UserAuth();

    const handleSendMessage = async (e) => {
        e.preventDefault();

        if(value.trim() === "") {
            alert("Enter valid message!");
            return;
        }

        try {
            const { uid, displayName, photoURL } = currentUser;
            await addDoc(collection(db, "messages"), {
                text: value,
                name: displayName,
                avatar: photoURL,
                createdAt: serverTimestamp(),
                uid
            })
        }catch (e) {
            console.log(e)
        }

        console.log(value);
        setValue("");
    }

    return (
        <div className='bg-gray-900 fixed bottom-0 w-full py-10 shadow-lg'>
            <form onSubmit={handleSendMessage} className='px-2 containerWrap flex'>
                <input className='input w-full focus:outline-none bg-gray-800 rounded-r-none' type="text" value={value} onChange={e => setValue(e.target.value)}/>
                <button type="submit" className='w-auto bg-gray-700 text-white rounded-r-lg px-5 text-sm'>Send</button>
            </form>
        </div>
    )
}

export default SendMessage