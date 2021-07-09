import { useState,useEffect } from "react";
import { useHistory } from 'react-router-dom';
import React from 'react';

const Login=()=>{

    const history=useHistory();
    const [userid,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const postdata = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                userid, password
            })
        });

        const data = await res;
        if (res.status === 400 || !data) {
            window.alert('Invalid userid or password');
        } else {
            history.push("/verified");
        }

    }

    const Authdata = async ()=>{
        try{
            const res = await fetch('/Auth',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });

            if(res.status == 200){
                history.push("/")
            }else{
                history.push("/login");
            }
        }catch(err){
            history.push("/login");
        }
    }


    useEffect(()=>{
        Authdata();
    },[]);

    return(
        <>
        <form method="POST" className="Login">
            <h1>Login</h1>
            <div style={{margin: "auto auto"}}>
                User Id: <input type="text" name="userid" id="luserid" required
                value={userid} onChange={(e)=>setEmail(e.target.value)}/><br/>
                Password: <input type="password" name="password" id="lpassword" required
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button onClick={postdata}>Send</button>
        </form>
        </>
    )
};

export default Login;