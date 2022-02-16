export class AuthService {
  loggedIn = false;
  constructor() { }
  isAuthenticated(){
    let token = localStorage.getItem('token');
    if(token != undefined && token.length > 0){
      return true;
    }
    return false;
  }

  login(){
    this.loggedIn = true;
    localStorage.setItem('token', 'da dang nhap');
  }

  logout(){
    this.loggedIn = false;
    localStorage.removeItem('token');
  }
}