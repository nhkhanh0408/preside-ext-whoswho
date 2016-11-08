<cfparam name="args.label" default="" />
<cfparam name="args.who"   default="" />
<cfparam name="args.show_title"      default="" />
<cfparam name="args.open_by_default" default="" />

<cfoutput>
	<cfif NOT isEmpty( args.who )>
		<cfif args.show_title EQ 1>
			<div class="collapsible mod-whos-who">
				<div class="collapsible-item <cfif args.open_by_default EQ 1>is-open</cfif>">
					<h4 class="collapsible-item-header"><a href="##">#args.label#</a></h4>
					<div class="collapsible-item-content">
		</cfif>
			<ul class="whos-who-widget">
				#renderview(
					presideobject = "whos_who"
					, view          = "/widgets/whos_who/_who"
					, filter        = { id = listToArray( args.who ) }
					, orderby       = "FIELD(id,#listQualify(args.who,"'")#)"
				)#
			</ul>
		<cfif args.show_title EQ 1>
					</div>
				</div>
			</div>
		</cfif>
	</cfif>
</cfoutput>