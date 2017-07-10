import { Component } from '@angular/core';

@Component({
  selector: 'fsi-footer',
  template: `
    <!-- footer start (Add "dark" class to #footer in order to enable dark footer) -->
    <!-- ================ -->
    <footer id="footer" class="clearfix ">

      <!-- .footer start -->
      <!-- ================ -->
      <div class="footer">
        <div class="container">
          <div class="footer-inner">
            <div class="row">
              <div class="col-md-6">
                <div class="footer-content">
                  <div class="logo-footer"><h3>Flight School Institute</h3></div>
                  <p><strong>Summer skills camp</strong> (one week 6/19-23) <strong>$100</strong></p>
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick">
                    <input type="hidden" name="hosted_button_id" value="9CD3X96546J5L">
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
                  </form>
                  
                  <ul class="list-inline mb-20">
                    <li><i class="text-default fa fa-map-marker pr-5"></i> Oakland High School</li>
                    <li><i class="text-default fa fa-phone pl-10 pr-5"></i> 1 (510) 214-6792</li>
                    <li><a href="mailto:flightschoolinstitue@gmail.com" class="link-dark"><i class="text-default fa fa-envelope-o pl-10 pr-5"></i> flightschoolinstitue@gmail.com</a></li>
                  </ul>
                  <div class="separator-2"></div>
                  <ul class="social-links circle margin-clear animated-effect-1">
                    <li class="instagram"><a target="_blank" href="https://www.instagram.com/coachtc333/"><i class="fa fa-instagram"></i></a></li>
                    <li class="twitter"><a target="_blank" href="http://www.twitter.com/coachtc333/"><i class="fa fa-twitter"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6">
                <div class="footer-content">
                  <h2 class="title">Contact Us</h2>
                  <div class="alert alert-success hidden" id="MessageSent2">
                    We have received your message, we will contact you very soon.
                  </div>
                  <div class="alert alert-danger hidden" id="MessageNotSent2">
                    Oops! Something went wrong please refresh the page and try again.
                  </div>
                  <form role="form" id="footer-form" class="margin-clear">
                    <div class="form-group has-feedback mb-10">
                      <label class="sr-only" for="name2">Name</label>
                      <input type="text" class="form-control" id="name2" placeholder="Name" name="name2">
                      <i class="fa fa-user form-control-feedback"></i>
                    </div>
                    <div class="form-group has-feedback mb-10">
                      <label class="sr-only" for="email2">Email address</label>
                      <input type="email" class="form-control" id="email2" placeholder="Enter email" name="email2">
                      <i class="fa fa-envelope form-control-feedback"></i>
                    </div>
                    <div class="form-group has-feedback mb-10">
                      <label class="sr-only" for="message2">Message</label>
                      <textarea class="form-control" rows="4" id="message2" placeholder="Message" name="message2"></textarea>
                      <i class="fa fa-pencil form-control-feedback"></i>
                    </div>
                    <input type="submit" value="Send" class="margin-clear submit-button btn btn-default">
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- .footer end -->

      <!-- .subfooter start -->
      <!-- ================ -->
      <div class="subfooter">
        <div class="container">
          <div class="subfooter-inner">
            <div class="row">
              <div class="col-md-12">
                <p class="text-center">Copyright © 2017 The Project by LeemTek. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- .subfooter end -->

    </footer>
    <!-- footer end -->
  `,
  styles: ['']
})

export class FSIFooterComponent {
  
}