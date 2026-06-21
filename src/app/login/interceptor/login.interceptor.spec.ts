import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';
import { beforeEach, describe, it } from 'node:test';


describe('loginInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) => 
    TestBed.runInInjectionContext(() => interceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

});

