import React from 'react';


const Signin= ({ onRouteChange }) => {
	return (
		<article class="br3 ba dark-gray 50 b-black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-black center opacity-50">
			<main class="pa4 black-80">
			  	<div class="measure">
				    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
					    <legend class="f2 fw6 ph0 mh0">Sign In</legend>
					    <div class="mt3">
					        <label class="db fw6 lh-copy f6" htmlfor="email-address">Email</label>
					        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
					    </div>
					    <div class="mv3">
					        <label class="db fw6 lh-copy f6" htmlfor="password">Password</label>
					        <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
					    </div>
				    </fieldset>
				    <div class="">
				      	<input
				      		onClick={() => onRouteChange('home')} 
				      		class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      		type="submit" 
				      		value="Sign in" 
				      	/>
				    </div>
				    <div class="lh-copy mt3">
				      	<p onClick={() => onRouteChange('register')} class="f6 link dim black db pointer">Register</p>
				      	
			    	</div>
			  	</div>
			</main>
		</article>
	);
}

export default Signin;