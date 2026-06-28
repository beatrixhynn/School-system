
import { Routes } from '@angular/router';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { TeacherFormComponent } from './teacher/teacher-form/teacher-form.component';
import { GradeFormComponent } from './grade/grade-form/grade-form.component';
import { SchoolMealFormComponent } from './school-meal/school-meal-form/school-meal-form.component';

import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { GradeComponent } from './grade/grade.component';
import { SchoolMealComponent } from './school-meal/school-meal.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ThreeColumnsComponent } from './three-columns/three-columns.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';
import { CadastroComponent } from './cadastro/cadastro.component';


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
        { path: 'login', component: LoginComponent },
        { path: 'login-form', component: LoginFormComponent },
        // { path: 'students', component: StudentComponent, canActivate: [AuthGuard] },
        {
                path: 'students',
                component: StudentComponent,
                canActivate: [adminGuard]
        },
        { path: 'cadastro', component: CadastroComponent },
];
