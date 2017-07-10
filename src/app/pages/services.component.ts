import { Component } from '@angular/core';

@Component({
  selector: 'fsi-services',
  template: `
    <!--Main Services-->
    <section id="service" class="light-gray-bg pv-30 clearfix">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <h2 class="text-center">Main <strong>Services</strong></h2>
            <div class="separator space-bottom-40"></div>
          </div>
          
          <div class="col-sm-4">
            <div class="image-box style-2 mb-20">
              <div class="overlay-container overlay-visible">
                <img src="assets/images/football.jpg" width="100%" alt="">
                <a routerLink="/drills" class="overlay-link"><i class="fa fa-link"></i></a>
                <div class="overlay-bottom hidden-xs">
                  <div class="text">
                    <p class="margin-clear text-left">Drills</p>
                  </div>
                </div>
              </div>
              <div class="body padding-horizontal-clear">
                <div class="visible-xs">
                  <h3>Drills</h3>
                  <div class="separator"></div>
                </div>
                <p>We offer video collection on how to develop specific skill sets necessary to improve your play at the wide receiver position. Each drill is design with coaching points that articulate how to improve your skills, and explain defensive tactic.</p>
                <a routerLink="/drills">View Videos<i class="pl-5 fa fa-angle-double-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="image-box style-2 mb-20">
              <div class="overlay-container overlay-visible">
                <img src="assets/images/football-1.jpg" width="100%" alt="">
                <a routerLink="route" class="overlay-link"><i class="fa fa-link"></i></a>
                <div class="overlay-bottom hidden-xs">
                  <div class="text">
                    <p class="margin-clear text-left">Route Development Beating Coverages!</p>
                  </div>
                </div>
              </div>
              <div class="body padding-horizontal-clear">
                <div class="visible-xs">
                  <h3>Route Development Beating Coverages!</h3>
                  <div class="separator"></div>
                </div>
                <p>In this service Flight School will evaluate your practice or game videos. Once you upload to your HUDL account I will provide you with detail evaluation with coaching points to improve your performance. We offer individual access via phone or videoconference to evaluate your performances each week. This access allows you immediate feedback to assist you with particular in game challenges and make proper adjustments for success.</p>
                <a routerLink="route">View Videos<i class="pl-5 fa fa-angle-double-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="image-box style-2 mb-20">
              <div class="overlay-container overlay-visible">
                <img src="assets/images/football-2.jpg" width="100%" alt="">
                <a routerLink="ethical" class="overlay-link"><i class="fa fa-link"></i></a>
                <div class="overlay-bottom hidden-xs">
                  <div class="text">
                    <p class="margin-clear text-left">Ethical Development</p>
                  </div>
                </div>
              </div>
              <div class="body padding-horizontal-clear">
                <div class="visible-xs">
                  <h3>Ethical Development</h3>
                  <div class="separator"></div>
                </div>
                <p>What are your principles? Your principles are those propositions and truths that act as a system of belief or behavior and ultimately how you reason a thing. Flight School will help you address if your principles are working for you or against you! We will provide you with audio/video content to study and a series of question to work through for your mental development.</p>
                <a routerLink="ethical">View Videos<i class="pl-5 fa fa-angle-double-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/Main Services end-->
  `,
  styles: ['']
})

export class FSIServicesComponent {
  
}