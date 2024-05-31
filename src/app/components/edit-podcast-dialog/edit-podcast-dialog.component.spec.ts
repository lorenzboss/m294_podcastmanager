import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPodcastDialogComponent } from './edit-podcast-dialog.component';

describe('EditPodcastDialogComponent', () => {
  let component: EditPodcastDialogComponent;
  let fixture: ComponentFixture<EditPodcastDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPodcastDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPodcastDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
