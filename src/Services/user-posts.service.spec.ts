/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserPostsService } from './user-posts.service';

describe('UserPostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserPostsService]
    });
  });

  it('should ...', inject([UserPostsService], (service: UserPostsService) => {
    expect(service).toBeTruthy();
  }));
});
