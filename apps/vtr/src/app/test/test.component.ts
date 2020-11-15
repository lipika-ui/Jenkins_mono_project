import { Component, OnInit } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'lla-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  sampleData : {} = {};
  constructor( private http: HttpClient ) { }

  ngOnInit(): void {

    this.http.get("https://directus.projects.prodaptconsulting.com/directus/items/basic_pages/1")
    .subscribe((response : {})=>{
        this.sampleData = response;
        console.log(this.sampleData);
    })

   
  }

}
