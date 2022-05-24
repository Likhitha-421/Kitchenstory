import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject,Observable, tap } from 'rxjs';
import { USER_LOGIN_URL } from '../shared/constants/Urls';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { User } from '../shared/models/User';
const User_KEY ='User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable:Observable<User>;
  constructor(private http:HttpClient, private toastrService:ToastrService) {
    this.userObservable = this.usersSubject.asObservable();
  }
  login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) =>{
          this.setUserToLocalStorage(user);
          this.usersSubject.next(user);
          this.toastrService.success(
            `welcome to KitchenStory ${user.name}!`,
            'Login Successful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error,'Login Failed');

        }
      })
    );

  }
  logout(){
    this.usersSubject.next(new User());
    localStorage.removeItem(User_KEY);
    window.location.reload();
  }

  private setUserToLocalStorage(user:User){
    localStorage.setItem(User_KEY, JSON.stringify(user))
  }
  private getUserFromLocalStorage():User{
    const userJson = localStorage.getItem(User_KEY);
    if(userJson) return JSON.parse(userJson) as User;
    return new User();
  }
}
