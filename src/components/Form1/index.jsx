import React, {useRef, useState} from 'react'
import styles from './index.module.css'

function Form1() {
    const fullnameRef=useRef();
    const emailRef=useRef()
    const usernamRef=useRef()
    const passwordRef=useRef()
    const descRef=useRef()
    const [user, setUser] = useState([])

    function validate(){
        if(fullnameRef.current.value.length<3){
            fullnameRef.current.style.outlineColor="red";
            fullnameRef.current.focus();
            return false;
        }

        if(emailRef.current.value.length<3){
            emailRef.current.style.outlineColor="red";
            emailRef.current.focus();
            return false;
        }

        if(usernamRef.current.value.length<3){
            usernamRef.current.style.outlineColor="red";
            usernamRef.current.focus();
            return false;
        }

        if(passwordRef.current.value.length<3){
            passwordRef.current.style.outlineColor="red";
            passwordRef.current.focus();
            return false;
        }

        return true;
    }

    function handleSubmit(event){
        event.preventDefault();
        const isValid=validate();

        if(!isValid){
            return;
        }

        let user={
            fullname: fullnameRef.current.value,
            email: emailRef.current.value,
            username: usernamRef.current.value,
            password: passwordRef.current.value,
            desc: descRef.current.value
        }

        setUser(item=>{
            item.push(user)
            return item;
        })
    
    }

  return (
    <div>
      <form className={styles.form}>
        <h2>Create an account</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <input ref={fullnameRef} type="text" name="" id="" placeholder='Enter your fullname' />
        <input ref={emailRef} type="email" name="" placeholder='Enter youe email address' id="" />
        <input ref={usernamRef} type="text" name="" placeholder='Enter your username'  id="" />
        <input ref={passwordRef} type="password" name="" placeholder='Enter your password' id="" />
        <textarea ref={descRef} name="" placeholder='Your biography' id=""></textarea>
        <button onClick={handleSubmit}>CREATE ACCOUNT</button>
        <small>You will receive an email after setting up your account</small>
      </form>
    </div>
  )
}

export default Form1;
