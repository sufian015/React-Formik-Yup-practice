import React from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik';


export default function Signup() {


     const formik = useFormik({

          initialValues: {
     
            name: '',
            email:'',
            password:''
     
          },validationSchema:yup.object({

               name:yup.string().min(2,'name must have atleast 2 chracters').required(),
               email:yup.string().email().required(),
               password:yup.string().min(6,'passsword must have atleast 6 chracters').required(),
          })
          ,onSubmit: (values,{resetForm}) => {
               console.log(values)
               resetForm({values:""})
        
             }
          })

          
     
          // error rendering

          const renderNameError=formik.touched.name && formik.errors.name && <span style={{color:'red'}}>{formik.errors.name}</span>

          const renderEmailError=formik.touched.email && formik.errors.email && <span style={{color:'red'}}>{formik.errors.email}</span>

          const renderPasswordError=formik.touched.password && formik.errors.password && <span style={{color:'red'}}>{formik.errors.password}</span>



          const renderForm= <form onSubmit={formik.handleSubmit}>
          <div>
               <label htmlFor="name">Name:</label>
               <input type="text" id='name' name='name' onChange={formik.handleChange} value={formik.values.name}/>
               <br />
          
               {renderNameError}
          </div>
          <div>
               <label htmlFor="email">Email:</label>
                    <input type="email" id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>
                    <br />
          
               {renderEmailError}
               </div>
               <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id='password' name='password' onChange={formik.handleChange} value={formik.values.password}/>
                    <br />
          
               {renderPasswordError}
          </div>

          <button type='submit'>Sign Up</button>

          </form>




 
       
  return (
    <div>
          <h1>User Signup</h1>

          {renderForm}
          
          
         
        
    </div>
  )
}
