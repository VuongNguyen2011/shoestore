import React from "react";
import { Link } from "react-router-dom";

// import '../../App.css'

export default function SignUpPage() {
  return (
    <div className="text-center col-3" style={{margin: '0 auto'}} >
      <form style={{border: '1px solid ', color: 'white', }}>
        <div style={{backgroundColor: 'lightseagreen', padding: '10px'}}><h2 >Signup Form</h2></div>
          
        <div className="content" style={{padding: '15px', backgroundColor: '#eee'}}>
          
          <div class="form-group">
            <label style={{color: 'black'}} for="lblFullname">Fullname</label>
            <input style={{borderRadius:'0px'}}
              type="text"
              class="form-control"
              id="fullname"
              aria-describedby="emailHelp"
              placeholder="Enter your fullname"
              pattern="^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s|_]+$"
            />
          </div>
        
        <br />


        <div class="form-group">
          <label  style={{color: 'black'}} for="lblPhone">Phone Number</label>
          <input style={{borderRadius:'0px'}}
            type="text"
            class="form-control"
            id="phone"
            aria-describedby="emailHelp"
            placeholder="Enter phonenumber"
            pattern="(?=.*[0-9]).{10}"
          />
        </div>

        <br />

        <div class="form-group">
          <label   style={{color: 'black'}} for="lblEmail">Email address</label>
          <input style={{borderRadius:'0px'}}
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            pattern="^[\D\.]+@([\w-]+\.)+[\w-]{2,4}$"
          />
          
        </div>

      {/* Password contains 8 length at least 1 number, 1 char special, 1 upercase, 1 lowercase */}
        <br />
        <div class="form-group">
          <label style={{color: 'black'}} for="lblPassword">Password</label>
          <input style={{borderRadius:'0px'}}
            type="password"
            class="form-control"  
            id="password"
            placeholder="Enter password"  
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
          />
        </div>

        <br />
        <button style={{backgroundColor: 'lightseagreen', border: 'none', borderRadius:'0px'}} type="submit" class="btn btn-primary">
          Sign up
        </button>

        </div>
        
      </form>
      
      </div>
  );
}
