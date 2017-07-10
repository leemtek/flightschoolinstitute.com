import { Component } from '@angular/core';

@Component({
  selector: 'fsi-what',
  template: `
    <!--What It Is-->
    <section id="what" class="main-container">
      <div class="container">
        <div class="col-md-8 col-md-offset-2">
          <h2 class="text-center title">What <strong>It</strong> Is</h2>
          <div class="separator space-bottom-40"></div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <h3 class="title">Flight School Institute</h3>
            <p>We are a <strong><em>wide receiver/personal development school</em></strong> that teaches football fundamentals with detail analysis that produces superior results. What makes our services unique is that we focus on the application of drills to skills which result is the science of wide receiver performance. Flight School applies these 6 scientific methods of</p>

            <ul class="list-style-none">
              <li><em><strong>1) Purpose</strong></em></li>
              <li><em><strong>2) Research</strong></em></li>
              <li><em><strong>3) Hypothesis</strong></em></li>
              <li><em><strong>4) Experiment</strong></em></li>
              <li><em><strong>5) Analysis</strong></em></li>
              <li><em><strong>6) Conclusion</strong></em></li>
            </ul>

            <p>to produce a proper stance, release (off and press coverage) route running leverage, space creation for the catch, catching skills emphasizing body and hand positioning to achieve “friendly catches”, and understanding of eye dominant focus to secure a catch. The other unique service we offer ethical character development training which teaches proper attitudes will being coached, learning how to listen, and how to be a good teammate. Our Flight School athletes get the total package!</p>
          </div>
          <div class="col-md-6">							
            <img src="assets/images/kid-running.jpg" alt="">								
          </div>
        </div>
      </div>
      <br>
    </section>
    <!--/What It Is-->
  `,
  styles: ['']
})

export class FSIWhatComponent {
  
}