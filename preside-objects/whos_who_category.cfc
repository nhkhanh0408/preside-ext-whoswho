/**
 * @dataManagerGroup Widget
 */

component {
	property name="who" control="objectpicker" object="whos_who" multiple=true quickadd=true quickedit=true sortable=true;
	property name="show_title"      type="boolean" dbtype="boolean" dafault=false;
	property name="open_by_default" type="boolean" dbtype="boolean" dafault=false help="Just apply when Show title is Yes";
}