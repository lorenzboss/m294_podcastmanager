import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPodcastDialogComponent } from './add-podcast-dialog.component';

describe('AddPodcastDialogComponent', () => {
  let component: AddPodcastDialogComponent;
  let fixture: ComponentFixture<AddPodcastDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPodcastDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPodcastDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
