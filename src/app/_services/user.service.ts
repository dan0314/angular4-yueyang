import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    //获取注册验证码
    getSendCode(phone: number) {
        return this.http.post('/v1/tool/sendsms', { phone: phone, type: 'register' });
    }

    // getAll() {
    //     return this.http.get<User[]>('/api/users');
    // }

    // getById(id: number) {
    //     return this.http.get('/api/users/' + id);
    // }

    // create(user: User) {
    //     return this.http.post('/api/users', user);
    // }

    // update(user: User) {
    //     return this.http.put('/api/users/' + user.id, user);
    // }

    // delete(id: number) {
    //     return this.http.delete('/api/users/' + id);
    // }
}
