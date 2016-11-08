/**
 * @dataManagerGroup Widget
 * @labelfield       internal_name
 */

component {
	property name="name"           type="string" dbtype="varchar" required="true";
	property name="internal_name"  type="string" dbtype="varchar" required="true" default="method:internalName" basedOn="name" control="autoslug";
	property name="job_title"      type="string" dbtype="varchar";
	property name="organisation"   type="string" dbtype="varchar";
	property name="email"          type="string" dbtype="varchar";
	property name="telephone"      type="string" dbtype="varchar";
	property name="extension"      type="string" dbtype="varchar";	
	property name="image"          relationship="many-to-one" relatedTo="asset"  allowedtypes="image";
	property name="summary"        type="string" dbtype="text";
	property name="biography"      type="string" dbtype="text";
	property name="expand"         type="boolean" dbtype="boolean";
}

public string function internalName( required struct orgData ) {
	return slug;
}