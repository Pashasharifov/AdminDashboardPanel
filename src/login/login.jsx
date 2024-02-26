import axios from "axios";
import Cookies from 'universal-cookie';
 function Login(){
    const cookies2 = new Cookies();
cookies2.remove('token', { path: '/' });
    return(
        <div>
            <form  onSubmit={(e)=>{
                e.preventDefault()
                axios.get('http://localhost/api/login.php', {
                    params: {
                     username: document.querySelector('#username').value,
                    
                     password:document.querySelector('#password').value,
                   


                    }
                  })
                    .then(response => {
                       console.log(response.data)
                        if(response.data==0){
                            alert('Data is not valid')
                            
                            
                        }
                        else  {
                            const cookies = new Cookies();
                            cookies.set('token', response.data, { path: '/' });
                          window.location.href="http://localhost:3000/home"
                            
                        }
                    });
            }}>
            <label>Username</label>
            <input type="text" name="username" id="username" /><br/>
            <label htmlFor="">Password</label>
            <input type="password" name="password" id="password" />
            <input type="submit" value="submit" />
           </form>
        </div>
    )
 }
 export default Login