import React, { useEffect, useState } from 'react'

export default function Feature() {
    // variables 
    const [password, setPassword] = useState('kiughio');
    const [length, setLength] = useState(8);
    const [isNumber, setIsNumber] = useState(false);
    const [isChar, setIsChar] = useState(false)

    // the password genrate function
    const genratePassword = () => {
        let pass = '';
        let char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        
        if (isNumber) char += '1234567890';
        if (isChar) char += '~!@#$%^&*(){}[],./;<>?:';

        for (let i = 0; i < length; i++) {
            let randomChars = Math.floor(Math.random() * char.length);
            pass += char.charAt(randomChars);
        }
        setPassword(pass)
    }

    // use effect
    useEffect(() => {
        genratePassword();
    }, [length, isNumber, isChar])

    // the styles
    const inputstyle = {
        width:"100%",
        padding: "1rem",
        borderRadius: "8px",
        border: "1px dashed teal"
    }
    const formStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "2.34rem",
        width: "50%",
        marginInline: "auto",
        marginBlock: "200px"
    }
    const checkboxDiv = {
        display: "flex",
        alignItems: "center",
        gap: "3rem"
    }

    return (
        <>
            <form style={formStyle}>
                <h1>The Great Password Genrator</h1>
                <input type='text' style={inputstyle} value={password} />

                <label htmlFor="length">Length Your Password: <span>{length}</span></label>
                <input type="range" onChange={(e) => setLength(e.target.value)} id="length" max={30} min={8} />

                <div style={checkboxDiv} >
                    <label htmlFor="number">Add Numbers:</label>
                    <input value={isNumber} onChange={() => setIsNumber(prev => !prev)} type="checkbox" id="number" />
                </div>

                <div style={checkboxDiv}>
                    <label htmlFor="SpeilChar">Add Speciel Charactors</label>
                    <input value={isChar} onChange={() => setIsChar(prev => !prev)} type="checkbox" id="SpeilChar" />
                </div>

            </form>
        </>
    )
}
