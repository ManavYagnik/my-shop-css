import React, { useState } from 'react'

import { Box, Grid } from '@mui/material'
import { Button } from '@mui/material';


const Myform = () => {
    const [userRegistration, setuserRegistration] = useState({
        uname: "",
        email: "",
        message: ""


    }

    );


    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setuserRegistration({ ...userRegistration, [name]: value })


    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { ...userRegistration };
        console.log(newUser);

        const res = fetch(`https://my-json-db.onrender.com/contacts`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ ...newUser })

        })
        .then (alert("Your message has been added"));
        



    }



    return (
        <>
            <Grid item xs={8} md={6}>
              <div className="w3-card-4 w3-margin InputForm " >
                <div class="w3-container w3-brown">
                  <h2>Contact Us</h2>
                </div>
                <form class="w3-container" action="" onSubmit={handleSubmit}>
                  <p>
                    <label class="w3-text-brown" htmlFor='uname'><b> Name</b></label>
                    <input class="w3-border w3-sand w3-input" name="uname" type="text" id="uname" value={userRegistration.uname} onChange={handleInput}  placeholder='Your name ...' />
                  </p>
                  <p>
                    <label class="w3-text-brown" htmlFor='email'><b>E-mail</b></label>
                    <input class="w3-input w3-border w3-sand" name="email" type="text " id="email"  value={userRegistration.email} onChange={handleInput} placeholder='Your E-mail...'/>

                  </p>

                  <p>
                    <label class="w3-text-brown" htmlFor='message'><b>Message</b></label>
                    <textarea class="w3-input w3-border w3-sand"  type="text" value={userRegistration.message} onChange={handleInput} name="message">This is text area</textarea>

                  </p>


                  <p>

                    <Button variant='contained' sx={{ backgroundColor: "brown" }} type="submit" value="Submit">Register</Button></p>

                </form>
              </div>
            </Grid> 
        </>

    )
}

export default Myform;

