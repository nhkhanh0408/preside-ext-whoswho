<cfparam name="args.who" />

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
</cfoutput>