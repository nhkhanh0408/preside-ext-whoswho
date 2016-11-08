<cfparam name="args.id"           default="" />
<cfparam name="args.name"         default="" />
<cfparam name="args.job_title"    default="" />
<cfparam name="args.image"        default="" />
<cfparam name="args.biography"    default="" />
<cfparam name="args.summary"      default="" />
<cfparam name="args.organisation" default="" />
<cfparam name="args.email"        default="" />
<cfparam name="args.telephone"    default="" />
<cfparam name="args.extension"    default="" />
<cfparam name="args.expand"       default="" />

<cfoutput>
	<cfset imageURL = "../../assets/img/dummy-images/dummy-oval.png" />

	<li class="whos-who-widget-item">
		<cfif NOT isEmpty( args.image )>
			<cfset imageURL = event.buildLink( assetId = args.image, derivative = "whos_who" ) />
		</cfif>
		
		<img src="#imageURL#" alt="" class="whos-who-image">
		<h3 class="heading">#args.name#</h3>
		<p class="caption">#args.job_title# <cfif NOT isEmpty( args.organisation )>( #args.organisation# )</cfif> </p>
		
		<cfif NOT isEmpty( args.summary )>
			<p>#renderContent( "richeditor", args.summary )#</p>
		</cfif>

		<cfif NOT isEmpty( args.biography ) OR NOT isEmpty( args.email ) OR NOT isEmpty( args.telephone ) OR NOT isEmpty( args.extension )>
			<div class="ext text-toggler<cfif args.expand EQ 1> is-content-shown</cfif>">
				<div class="ext text-toggler-content">
					<cfif NOT isEmpty( args.email )>
						<div class="row">
							<div class="col-sm-3 col-md-2">
								<p>Email:</p>
							</div>

							<div class="col-sm-9 col-md-10">
								<p>#args.email#</p>
							</div>
						</div>
					</cfif>
					
					<cfif NOT isEmpty( args.telephone )>
						<div class="row">
							<div class="col-sm-3 col-md-2">
								<p>Tel:</p>
							</div>

							<div class="col-sm-9 col-md-10">
								<p>#args.telephone#</p>
							</div>
						</div>
					</cfif>

					<cfif NOT isEmpty( args.extension )>
						<div class="row">
							<div class="col-sm-3 col-md-2">
								<p>Extension:</p>
							</div>

							<div class="col-sm-9 col-md-10">
								<p>#args.extension#</p>
							</div>
						</div>
					</cfif>

					<cfif NOT isEmpty( args.biography )>
						<p>#renderContent( "richeditor", args.biography )#</p>
					</cfif>
				</div>
			</div>
		</cfif>
	</li>
</cfoutput>

