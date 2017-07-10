import { Component } from '@angular/core';

@Component({
  selector: 'fsi-join',
  template: `
    <!--How to Join-->
    <section id="how" class="pv-30">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <h2 class="text-center">How To <strong>Join</strong></h2>
            <div class="separator space-bottom-40"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <p><strong>Bronze package ($25)</strong> -  Is our video collection with coaching tips on how to improve at a particular skill. As a bonus feature you will get one practice session (60 min) at our summer skills camp.</p>
              
            <p><strong>Silver package ($75)</strong> - everything offered in our bronze package along with evaluation of practice and game video (total of 10 each) and coaching points on how to improve. 2 days complimentary at our summer skills camp.</p>

            <p><strong>Gold package ($100)</strong> - All-inclusive package to all 3 services offered and 3 complimentary days at our summer skills camp.</p>
          </div>
          <div class="col-sm-6">
            <video controls width="100%" src="assets/videos/teaser.ogg"></video>
          </div>
        </div>
      </div>
    </section>
    <!--/How to Join-->
  `,
  styles: ['']
})

export class FSIJoinComponent {
  
}