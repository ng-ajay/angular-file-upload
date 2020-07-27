import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  uploadedFiles: Array<File>;

  constructor(private http: HttpClient) {

  }
  ngOnInit() {
  }

  fileChange(element){
    this.uploadedFiles = element.target.files;
  }

  upload(){
    const formData = new FormData();
    for (let i = 0; i < this.uploadedFiles.length; i++) {
        formData.append('uploads[]', this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.http.post('http://localhost:3000/api/upload', formData, {
      reportProgress:true,
      observe: 'events'
    })
    .subscribe((event) => {
      console.log('response receved is ', event);
    });
  }

}
