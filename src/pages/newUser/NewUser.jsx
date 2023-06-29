import "./newUser.css"
function NewUser(){
    return(
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserForm">
            <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" name="" id="" placeholder="john" />
                </div>

                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" name="" id="" placeholder="John Smith" />
                </div>

                <div className="newUserItem">
                    <label>Email </label>
                    <input type="email" name="" id="" placeholder="John@gmail.com" />
                </div>

                <div className="newUserItem">
                    <label>Password </label>
                    <input type="password" name="" id="" placeholder="password" />
                </div>

                <div className="newUserItem">
                    <label>Phone </label>
                    <input type="phone" name="" id="" placeholder="+1 234 567 89" />
                </div>

                <div className="newUserItem">
                    <label>Adress </label>
                    <input type="text" name="" id="" placeholder="New York | USA" />
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
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}
export default NewUser