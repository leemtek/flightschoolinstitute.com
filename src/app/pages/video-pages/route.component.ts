import { Component } from '@angular/core';

@Component({
  selector: 'fsi-route',
  template: `
    <!-- page wrapper start -->
    <!-- ================ -->
    <div class="page-wrapper">
        <section class="pv-30">
            <div class="container">
                <a href="index.html"><i class="space-bottom-20 pl-5 fa fa-angle-double-left"> Go Back</i></a>
                <h1 class="text-center">Route Development</h1>
                <div class="row">
                    <div class="col-xs-12 col-md-6 space-bottom-20">
                        <video controls="controls" width="100%" class="center-block" src="assets/videos/section-2/my-movie-6.mp4"></video>
                    </div>
                    <div class="col-xs-12 col-md-6 space-bottom-20">
                        <video controls="controls" width="100%" class="center-block" src="assets/videos/section-2/my-movie-7.mp4"></video>
                    </div>
                </div>
                <a href="index.html"><i class="space-bottom-20 pl-5 fa fa-angle-double-left"> Go Back</i></a>
            </div>
        </section>

        <!-- footer start (Add "dark" class to #footer in order to enable dark footer) -->
        <!-- ================ -->
        <footer id="footer" class="clearfix ">
            <div class="subfooter">
                <div class="container">
                    <div class="subfooter-inner">
                        <div class="row">
                            <div class="col-md-12">
                                <p class="text-center">Copyright © 2016 The Project by LeemTek. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- footer end -->
        
    </div>
    <!-- page-wrapper end -->
  `,
  styles: ['']
})

export class FSIRouteComponent {
  
}