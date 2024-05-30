import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TopicsComponent } from '../../pages/topics/topics.component';
import { TopicsService } from '../../service/topics.service';
import { Topic, CreateTopic } from '../../data/topic';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-topic-dialog',
  templateUrl: './edit-topic-dialog.component.html',
  styleUrl: './edit-topic-dialog.component.scss',
})
export class EditTopicDialogComponent {
  topicForm = this.fb.group({
    description: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private topicsService: TopicsService,
    private dialogRef: MatDialogRef<EditTopicDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Topic
  ) {}

  ngOnInit() {
    this.topicForm.patchValue(this.data);
  }

  onSubmit() {
    if (this.topicForm.valid && this.topicForm.value.description) {
      const topic: Topic = {
        id: this.data.id,
        description: this.topicForm.value.description as string,
      };
      this.topicsService.updateTopic(topic).subscribe({
        next: () => {
          this.dialogRef.close();
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
