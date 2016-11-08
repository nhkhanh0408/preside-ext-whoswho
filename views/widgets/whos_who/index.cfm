<cfparam name="args.who"      default="" />
<cfparam name="args.category" default="" />
<cfparam name="args.default_collapsible" default="" />

<cfscript>
	event.include( "whoswho-css" );
	event.include( "whoswho-js" );

	if( args.default_collapsible == 1 ){
		event.include( "collapsible-css" );
		event.include( "collapsible-js" );
	}
</cfscript>

<cfoutput>
	<cfif NOT isEmpty( args.who )>
		<ul class="whos-who-widget">
			#renderview(
				presideobject = "whos_who"
				, view          = "/widgets/whos_who/_who"
				, filter        = { id = listToArray( args.who ) }
				, orderby       = "FIELD(id,#listQualify(args.who,"'")#)"
			)#
		</ul>
	</cfif>
	<cfif NOT isEmpty( args.category )>
		#renderview(
			  presideobject = "whos_who_category"
			, view          = "/widgets/whos_who/_category"
			, filter        = { id = listToArray( args.category ) }
			, orderby       = "FIELD(id,#listQualify(args.category,"'")#)"
		)#
	</cfif>
</cfoutput>