import { Component } from '@angular/core';

@Component({
  selector: 'fsi-header',
  template: `
    <!-- header-container start -->
			<div id="main-page" class="header-container">
				<!-- header start -->
				<!-- classes:  -->
				<!-- "fixed": enables fixed navigation mode (sticky menu) e.g. class="header fixed clearfix" -->
				<!-- "dark": dark version of header e.g. class="header dark clearfix" -->
				<!-- "full-width": mandatory class for the full-width menu layout -->
				<!-- "centered": mandatory class for the centered logo layout -->
				<!-- ================ --> 
				<header class="header fixed clearfix">
					
					<div class="container">
						<div class="row">
							<div class="col-md-3 ">
								<div class="header-first clearfix">

									<!-- name-and-slogan -->
									<div class="site-slogan">
										<a href="#main-page">Flight School Institute</a>
									</div>
									
								</div>
							</div>
							<div class="col-md-9">
					
								<!-- header-right start -->
								<!-- ================ -->
								<div class="header-right clearfix">
									<!-- main-navigation start -->
									<!-- classes: -->
									<!-- "onclick": Makes the dropdowns open on click, this the default bootstrap behavior e.g. class="main-navigation onclick" -->
									<!-- "animated": Enables animations on dropdowns opening e.g. class="main-navigation animated" -->
									<!-- "with-dropdown-buttons": Mandatory class that adds extra space, to the main navigation, for the search and cart dropdowns -->
									<!-- ================ -->
									<div class="main-navigation animated">

										<!-- navbar start -->
										<!-- ================ -->
										<nav class="navbar navbar-default" role="navigation">
											<div class="container-fluid">

												<!-- Toggle get grouped for better mobile display -->
												<div class="navbar-header">
													<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
														<span class="sr-only">Toggle navigation</span>
														<span class="icon-bar"></span>
														<span class="icon-bar"></span>
														<span class="icon-bar"></span>
													</button>
												</div>

												<!-- Collect the nav links, forms, and other content for toggling -->
												<div class="collapse navbar-collapse scrollspy smooth-scroll" id="navbar-collapse-1">
													<ul class="nav navbar-nav navbar-right">
														<li><a href="#what">What It Is</a></li>
														<li><a href="#about">About Me</a></li>
														<li><a href="#service">Services</a></li>
														<li><a href="#how">How To Join</a></li>
														<li><a href="#footer">Contact Us</a></li>
													</ul>
												</div>

											</div>
										</nav>
										<!-- navbar end -->

									</div>
									<!-- main-navigation end -->
								</div>
								<!-- header-right end -->
					
							</div>
						</div>
					</div>
					
				</header>
				<!-- header end -->
			</div>
			<!-- header-container end -->
  `,
  styles: ['']
})

export class FSIHeaderComponent {
  
}