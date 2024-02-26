import { useEffect, useState } from "react";
import "./newUser.css"
import axios from "axios";
function NewUser(){
   const[reng,setReng]=useState()

    return(
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form onSubmit={(e)=>{
                e.preventDefault()
                    const article = { name: 'React POST Request Example' };
                    axios.get('http://localhost/api/newUser.php', {
                        params: {
                         name: document.querySelector('#username').value,
                         fullName:document.querySelector('#fullName').value,
                         email:document.querySelector('#email').value,
                         password:document.querySelector('#password').value,
                         address:document.querySelector('#address').value,
                         phone:document.querySelector('#phone').value,
                         active:document.querySelector('#active').value,
                       


                        }
                      })
                        .then(response => {
                           
                            if(response.data==1){
                                alert('Melumat elave olundu')
                            }
                            else if(response.data==2){
                                setReng('1px solid red')
                                
                            }
                        });
                }} 
                
                
                className="newUserForm">
                  
                      <div className="newUserItem">
                                      <label>Username</label>
                                     
                                      <input type="text" name="" id="username" placeholder="john" />
                                  </div>
                  
                                  <div className="newUserItem">
                                      <label>Full Name</label>
                                      <input type="text" name="" id="fullName" placeholder="John Smith" />
                                  </div>
                  
                                  <div className="newUserItem">
                                      <label>Email </label>
                                      <input type="text" name="" style={{border:reng}} id="email"  placeholder="John@gmail.com" />
                                  </div>
                  
                                  <div className="newUserItem">
                                      <label>Password </label>
                                      <input type="password" name="" id="password" placeholder="password" />
                                  </div>
                  
                                  <div className="newUserItem">
                                      <label>Phone </label>
                                      <input type="phone" name="" id="phone" placeholder="+1 234 567 89" />
                                  </div>
                  
                                  <div className="newUserItem">
                                      <label>Address </label>
                                      <input type="text" name="" id="address" placeholder="New York | USA" />
                                  </div>
                  
                                  <div className="newUserItem">
                                      <label>Gender </label>
                                      <div className="newUserGender">
                                      <input type="radio" name="gender" id="male" value="male" />
                                          <label for="male">Male</label>
                                          <input type="radio" name="gender" id="female" value="female" />
                                          <label for="female">Female</label>
                                          <input type="radio" name="gender" id="other" value="other" />
                                          <label for="other">Other</label>
                                      </div>
                                  </div>
                  
                                  <div className="newUserItem">
                                      <label >Active</label>
                                      <select name="active" id="active" className="newUserSelect">
                                          <option value="yes">Yes</option>
                                          <option value="no">No</option>
                                      </select>
                                  </div>
                  
                <button type="submit" className="newUserButton" >Create</button>
                
            </form>
        </div>
    )
}
export default NewUser