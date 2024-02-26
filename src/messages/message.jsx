import axios from "axios";
import Cookies from 'universal-cookie';
 function Messages(){
    const cookies2 = new Cookies();
cookies2.remove('token', { path: '/' });
    return(
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault()
                axios.get('http://localhost/api/newMessages.php',{
                    params:{
                        message:document.querySelector('#message').value,
                        receiver:document.querySelector('#username').value,

                    }
                })
            }
                
            }>
            <label>Username</label>
            <input type="text" name="username" id="username" /><br/>
            <label htmlFor="">Messages:</label>
            <textarea  name="w3review" rows="4" cols="50" id="message"></textarea>
           
            <input type="submit" value="submit" />
           </form>
        </div>
    )
 }
 export default Messages