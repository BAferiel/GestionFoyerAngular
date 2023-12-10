import { CanActivateFn,Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../models/user.model';
import { Injectable, inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
    const userService = inject(UserService);
    const router = inject(Router);
    if (!userService.isAuthenticated()) {
        router.navigate(['/login']);
        return false;
    }
    const user: User = userService.getUser();
    if(user.roles !== 'ROLE_ADMIN' && route.data['roles'] === 'ROLE_ADMIN'){
        router.navigate(['/welcome']);
        return false;
    }
    return true;
};
