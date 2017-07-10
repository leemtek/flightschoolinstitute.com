import { Component } from '@angular/core';

@Component({
  selector: 'fsi-about',
  template: `
    <!--About Me start-->
    <section id="about" class="dark-translucent-bg pv-30" style="background-position:50% 30%;">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <h2 class="text-center">About <strong>Me</strong></h2>
            <div class="separator space-bottom-40"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <p>I am Coach Coleman and my background is developing elite wide receivers at all level. In my playing days I was a 2 time all conference wide receiver at Weber State University and a free agent wide receiver with the Oakland Raiders. I have been in coaching for over 25 years and have a proven track record of improving receiver’s. Many of my coaching skills were developed from my time working with some of the games greatest receivers. While coaching at the 49ers I worked under Hall of Fame legend Bill Walsh and worked with the greatest receiver of all times Hall of Famer Jerry Rice as well as Hall of Fame nominee Terrell (T.O.) Owens. I have coached in NFL Europe as an Offensive Coordinator as well as on the college level at Sac State and Head Coach at Contra Costa College. My purpose for creating “Flight School” is two fold, first to provide fundamental teaching tools to wide receivers that desire to be “master craftsmen” of their position. Secondly, to provide an environment where the total person is being developed through ethical training of teamwork, cooperation, and moral ethics. My method of coaching is cerebral, and contemporary but “old school” tough. Our 2 mantras at “Flight School” are “everyday in everyway we get a little better” and “we go after football’s like a dog going after a Frisbee!” Coach Coleman</p>
          </div>
          <div class="col-md-6">	
            <video controls="controls" width="100%" src="assets/videos/3-hard-in.mov"></video>
          </div>
        </div>
      </div>
    </section>
    <!--/About Me end-->
  `,
  styles: ['']
})

export class FSIAboutComponent {
  
}