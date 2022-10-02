import React from 'react';
import "./LoginPage.css"

export default function LoginPage() {
    return (
        <div className='login'>
            <div className='loginCard' >
                <form>
                    <div className="mb-3">
                        <label htmlFor="InputEmail" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="InputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" class="btn btn-primary ">Submit</button>
                </form>
            </div>
        </div>
    )
}


