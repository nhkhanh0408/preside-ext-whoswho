component output=false {

	public void function configure( bundle ) output=false {
		bundle.addAsset( id="whoswho-css", path="/css/whos_who.css" );
		bundle.addAsset( id="whoswho-js" , path="/js/whos_who.js"   );

		bundle.addAsset( id="collapsible-css" , path="/css/collapsible.css" );
		bundle.addAsset( id="collapsible-js"  , path="/js/collapsible.js"   );
	}

}