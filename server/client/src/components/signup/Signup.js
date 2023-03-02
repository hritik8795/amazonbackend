import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Signup = () => {
    const [udata,setUdata] =useState({

        fname:"",
        email:"",
        mobile:"",
        password:"",
        cpassword:""
    })
    console.log(udata)

    const adddata =(e)=>{
        const{name,value} =e.target; 

        setUdata(()=>{
            return {
               ...udata,
               [name]:value 
            }
        })

    };

    const senddata =async(e)=>{

        e.preventDefault();

        const {fname,email,mobile,password,cpassword} =udata;

        if(fname === ""){
            toast.warn("please fill the name",{
                position: "top-center",
            })

        }
        else if (email === ""){
            toast.warn("please fill email",{
                position: "top-center",
            })
        }
        else if (mobile==="") {
                toast.warn("please fill the mobile",{
                    position: "top-center",
                })
        }
        else if(password === ""){
            toast.warn("please provide the password",{
                position: "top-center",
            })
        }
        else if (cpassword ===""){
                toast.warn("please match the password",{
                    position: "top-center",
                })
        }
        else {   

        const res =await fetch("register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                fname,email,mobile,password,cpassword

            })
        });
    
        const data =await res.json();
        // console.log(data);
        if(res.status ===422 || !data) {
            // alert("no data available");
            toast.warn("invalid details",{
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });
        }else {
            // alert("data added successfully");
            toast.success("data added successfully",{
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });
            setUdata({...udata,fname:"",email:"",mobile:"",password:"",cpassword:""});
        }
    }

    }
  

  return (
    <section>
    <div className="sign_container">
        <div className="sign_header">
            <img src="./assets/blacklogoamazon.png" alt="Amazon id"/>
        </div>
        <div className="sign_form">
            <form method="POST">
                <h1>Sign-Up</h1>

                <div className="form_data">
                <label htmlFor="fname">Your Name</label>
                <input type ="name"
                // onChange={(e)=>setUdata({...udata,fname:e.target.value})}
                 onChange ={adddata} 
                value={udata.fname} name="fname" id="fname"/>

                </div>

                <div className="form_data">
                <label htmlFor="email">Email</label>
                <input type ="email" onChange={adddata} value={udata.value} name="email" id="email"/>

                </div>

                <div className="form_data">
                <label htmlFor="number">Mob Number</label>
                <input type ="text" onChange={adddata} value={udata.mobile} name="mobile" id="mobile"/>

                </div>

                <div className="form_data">
                <label htmlFor="password">Password</label>
                <input type ="password" onChange ={adddata} value={udata.password} name="password"placeholder="At least 6 char" id="password"/>

                </div>

                <div className="form_data">
                <label htmlFor="cpassword">Confirm Password</label>
                <input type ="cpassword" onChange={adddata} value={udata.cpassword} name="cpassword" id="cpassword"/>

                </div>
                <button className="signin_btn" onClick={senddata}>Continue</button>
                <div className="sign_info">
                  <p>Already have an account ?</p>
                  <NavLink to ="/login">Signin</NavLink>
                </div>
            </form>
        </div>
        <ToastContainer />
        
    </div>
</section>  )
}

export default Signup