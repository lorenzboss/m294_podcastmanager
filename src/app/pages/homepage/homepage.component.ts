import { Component, OnInit } from '@angular/core';
import { WritersService } from '../../service/writers.service';
import { CreateWriter, Writer } from '../../data/writer';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private writerService: WritersService) {}

  ngOnInit() {
    this.saveWriter();
  }

  saveWriter() {
    const writer: CreateWriter = { firstname: 'John', lastname: 'Boss' };
    this.writerService.saveWriter(writer).subscribe((writer) => {
      this.getWriters();
    });
  }

  getWriters() {
    this.writerService.getWriters().subscribe((writers) => {
      console.log(writers);

      writers.forEach((writer) => {
        this.updateWriter(writer);
      });
    });
  }

  updateWriter(writer: Writer) {
    writer = { ...writer, firstname: 'Lorenz' };
    this.writerService.updateWriter(writer).subscribe((writer) => {
      console.log(writer);
      this.deleteWriter(writer);
    });
  }

  deleteWriter(writer: Writer) {
    this.writerService.deleteWriter(writer).subscribe(() => {
      console.log('Writer deleted');
      this.writerService.getWriters().subscribe((writers) => {
        console.log(writers);
      });
    });
  }
}
