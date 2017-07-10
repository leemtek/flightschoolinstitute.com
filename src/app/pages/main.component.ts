import { Component } from '@angular/core';

@Component({
  selector: 'fsi-main',
  template: `
    <!--Main Section-->
    <section class="dark-translucent-bg flight-school-hd-bg" style="background-position:50% 30%;">
      <div class="container">
        <div class="row">
          <div class="col-md-8 text-center col-md-offset-2 space-bottom">
            <div class="title large_white object-non-visible" data-animation-effect="fadeIn" data-effect-delay="100">Flight School Institute</div>
            <div class="separator object-non-visible" data-animation-effect="fadeIn" data-effect-delay="125"></div>
            <p class="text-center lead object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="275">Teaching wide receivers the art of pass catching and touching lives with ethical character development.</p>
          </div>
        </div>
      </div>
    </section>
    <!--/Main Section-->
  `,
  styles: ['']
})

export class FSIMainComponent {
  
}