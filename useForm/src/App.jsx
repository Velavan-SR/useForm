import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css'

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
  };

  return (
    <div className='all'>
      <form onSubmit={handleSubmit(onSubmit)}>
      {submitted && <p>Form submitted successfully!</p>}
        <div>
          <input {...register('firstName', { required: true })} placeholder="First Name" />
        </div>

        <div>
          <input {...register('lastName', { required: true })} placeholder="Last Name" />
        </div>

        <div>
          <input {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} placeholder="Email" />
          {errors.email && errors.email.type === 'required' && <p>Email is required</p>}
          {errors.email && errors.email.type === 'pattern' && <p>Invalid email</p>}
        </div>

        <div>
          <input {...register('password', { required: true, minLength: 5, maxLength: 20 })} type="password" placeholder="Password" />
          {errors.password && errors.password.type === 'required' && <p>Password is required</p>}
          {errors.password && errors.password.type === 'minLength' && <p>Password must be more than 4 characters</p>}
          {errors.password && errors.password.type === 'maxLength' && <p>Password cannot be more than 20 characters</p>}
        </div>

        <button type="submit">Submit</button>
      </form>

      
    </div>
  );
}

export default App;