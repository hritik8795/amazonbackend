import React, { useState,useContext } from "react";
import { NavLink } from "react-router-dom";
import "./signin.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Logincontext } from "../context/ContextProvider";
const Signin =()=>{
    const[logdata ,setData] =useState({
        email:"",
        password:""

    });
    console.log(logdata);

    const { account, setAccount } = useContext(Logincontext);


    const adddata =(e) =>{
        const {name,value} =e.target;

        setData(()=>{
            return {
                ...logdata,
                [name]:value
            }

        })
        // console.log(e.target.value);
    }
        const senddata = async (e) =>{
            e.preventDefault();

            const { email,password } = logdata;
            const res =await fetch("/login",{ 
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email, password
    
                })
            });

            const data =await res.json();
            console.log(data);

            if(res.status === 400 || !data) {
                console.log("invalid details")
                toast.warn("please fill email",{
                    position: "top-center",
                })
            }
            else {
                console.log("data valid");
                setAccount(data)
                toast.success("user signIn successfully",{
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
    
                });
                setData({...logdata ,email:"",password:""});
            }        

    }
    return (
        <>
            <section>
                <div className="sign_container">
                    <div className="sign_header">
                        <img src="./assets/blacklogoamazon.png" alt="Amazon id"/>
                    </div>
                    <div className="sign_form">
                        <form method="POST">
                            <h1>Sign-In</h1>
                            <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type ="email" onChange ={adddata} value={logdata.email} name="email" id="email"/>

                            </div>
                            <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type ="password" onChange={adddata} value={logdata.password} name="password"placeholder="At least 6 char" id="password"/>

                            </div>
                            <button className="signin_btn" onClick={senddata}>Continue</button>
                        </form>
                    </div>
                    <div className="create_accountinfo">
                    <p>New To Amazon</p>
                    <NavLink to="/register"><button>Create your amazon account</button></NavLink>
                    </div>
                </div>
                <ToastContainer/>
            </section>
        </>
    )
}
 export default Signin;