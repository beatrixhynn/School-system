
import { Routes } from '@angular/router';
import { StudentFormComponent } from './features/student/student-form/student-form.component';
import { TeacherFormComponent } from './features/teacher/teacher-form/teacher-form.component';

import { TeacherComponent } from './features/teacher/teacher.component';

import { MainMenuComponent } from './layout/main-menu/main-menu.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { Component } from '@angular/core';
import { ThreeColumnsComponent } from './layout/three-columns/three-columns.component';
import { AuthGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';
import { HeaderComponent } from './shared/header/header.component';
import { StudentComponent } from './features/student/student.component';
import { SchoolMealFormComponent } from './pages/school-meal/school-meal-form/school-meal-form.component';
import { LoginComponent } from './auth/login/login.component';
import { GradeComponent } from './pages/grade/grade.component';
import { SchoolMealComponent } from './pages/school-meal/school-meal.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { RegisterComponent } from './auth/register/register.component';
import { GradeFormComponent } from './pages/grade/grade-form/grade-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


export const routes: Routes = [
        { path: '', component: LoginComponent },
        { path: 'main-menu', component: MainMenuComponent },
        { path: 'students-form', component: StudentFormComponent },
        { path: 'students-form/:id', component: StudentFormComponent },
        { path: 'teachers-form', component: TeacherFormComponent },
        { path: 'teachers-form/:id', component: TeacherFormComponent },
        { path: 'grades-form', component: GradeFormComponent },
        { path: 'grades-form/:id', component: GradeFormComponent },
        { path: 'school-meals-form', component: SchoolMealFormComponent },
        { path: 'school-meals-form/:id', component: SchoolMealFormComponent },

        { path: 'teachers', component: TeacherComponent },
        { path: 'grades', component: GradeComponent },
        { path: 'school-meals', component: SchoolMealComponent },
        { path: 'header', component: HeaderComponent },
        { path: 'gallery', component: GalleryComponent },
        { path: 'about-us', component: AboutUsComponent },
        { path: 'gallery-page', component: GalleryPageComponent },
        { path: 'contact-us', component: ContactUsComponent },
        { path: 'three-columns', component: ThreeColumnsComponent },
        { path: 'login', component: LoginComponent ,  data: { hideLayout: true }
 },
        { path: 'login-form', component: LoginFormComponent ,  data: { hideLayout: true }
 },
        {
                path: 'students',
                component: StudentComponent,
                canActivate: [adminGuard]
        },
        { path: 'register', component: RegisterComponent, data: { hideLayout: true } },
        {
                path: '**',
                component: NotFoundComponent,  data: { hideLayout: true }

        }
];
