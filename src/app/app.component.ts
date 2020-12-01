import { HttpClient } from "@angular/common/http";
import { Component, OnInit, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;
  constructor(private http: HttpClient) {}
  abc: any = [];
  abc1: any = [];
  abc3: any;
  ngOnInit() {
    this.abc = this.http
      .get("https://jsonplaceholder.typicode.com/users")
      .subscribe((res: any) => {
        console.log(res);
        this.abc1 = res;
        console.log(this.abc1);
      });

    //this.abc = this.ab
  }
}
