import React from 'react'
import styles from './index.module.css'

function Form1() {
  return (
    <div>
      <form className={styles.form}>
        <h2>Create an account</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <input type="text" name="" id="" placeholder='Enter your fullname' />
        <input type="email" name="" placeholder='Enter youe email address' id="" />
        <input type="text" name="" placeholder='Enter your username'  id="" />
        <input type="password" name="" placeholder='Enter your password' id="" />
        <textarea name="" placeholder='Your biography' id=""></textarea>
        <button>CREATE ACCOUNT</button>
        <small>You will receive an email after setting up your account</small>
      </form>
    </div>
  )
}

export default Form1;
