import * as firebase from 'firebase';
   
export class AuthService
{tk:any;
   signupUser (email:string,password:string)
   {
       firebase.auth().createUserWithEmailAndPassword(email,password)
       .catch(
          error=>console.log(error)
       )
   }
   signinUser(email:string,password:string)
   {
      firebase.auth().signInWithEmailAndPassword(email,password)
      .then(
         response =>{
            this.tk = response,
            localStorage.setItem('userId',this.tk.user.uid);
            localStorage.setItem('token',this.tk.user.l);
            console.log(localStorage.getItem('userId'));
         }, 
         
           )
      .catch(
         error =>console.log(error)
      )
   }

   getToken()
   {
      return localStorage.getItem('token');
   }

   loggedIn()
   {
      return !!localStorage.getItem('token');
   }
   logOut()
   {
       localStorage.removeItem('token');
       localStorage.removeItem('userId');
   }
}