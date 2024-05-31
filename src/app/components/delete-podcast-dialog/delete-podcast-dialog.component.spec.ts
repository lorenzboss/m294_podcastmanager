import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePodcastDialogComponent } from './delete-podcast-dialog.component';

describe('DeletePodcastDialogComponent', () => {
  let component: DeletePodcastDialogComponent;
  let fixture: ComponentFixture<DeletePodcastDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeletePodcastDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeletePodcastDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
