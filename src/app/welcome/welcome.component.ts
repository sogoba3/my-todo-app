import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
// import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  title = 'my-todo-app';
  name = 'Aboubacar Sidiki Sogoba';
  welcomeMessageFromService: string
  name1 = ""

  constructor(
    private route:ActivatedRoute,
    private service: WelcomeDataService
    ) { }

  ngOnInit() {
    // console.log(this.name)
    this.name1 = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    //  console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    // console.log('last line of getWelcomeMessage ')
    // console.log("get welcome message")
  }

  getWelcomeMessageWithParameter() {
    // console.log(this.service.executeHelloWorldBeanServiceWithPathVariable(this.name));

   this.service.executeHelloWorldBeanServiceWithPathVariable(name).subscribe(
     response => this.handleSuccessfulResponse(response),
     error => this.handleErrorResponse(error)
   );

   // console.log('last line of getWelcomeMessage ')
   // console.log("get welcome message")
 }

  handleErrorResponse(error){
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message
    // console.log(response);
    // console.log(response.message);
  }
}
