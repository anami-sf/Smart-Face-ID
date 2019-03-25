import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

    render () {
        const {onRouteChange} = this.props;
        return(
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center" >
                        <main className="pa4 black-80">
                            <div className="measure center">
                                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                    <legend className="f3 fw6 ph0 mh0">Sign In</legend>
                                    <div className="mt3">
                                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                        <input 
                                            onChange = {this.onEmailChange}
                                            className="pa2 input-reset ba bg-transparet  w-100" 
                                            type="email" 
                                            name="email-address"  
                                            id="email-address"                               
                                        />
                                    </div>
                                    <div className="mv3">
                                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                        <input 
                                            onChange = {this.onPasswordChange}
                                            className="b pa2 input-reset ba bg-transparent w-100" 
                                            type="password" 
                                            name="password"  
                                            id="password"                          
                                        />
                                    </div>
                                </fieldset>
                                <div className="">
                                    <input 
                                    className="b ph3 pv2 input-reset ba bg-light-purple white grow pointer f6 dib" 
                                    type="submit" 
                                    value="Sign in"
                                    onClick = {this.onSubmitSignIn}
                                    />
                                </div>
                                <div className="lh-copy mt3 pointer ">
                                    <p onClick = {() => onRouteChange('register')} className="f6 link dim black db">Register</p>
                                </div>
                            </div>
                        </main>
                    </article>
        )
    }
}
    
    export default SignIn;