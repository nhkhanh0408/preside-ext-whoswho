# preside-ext-whoswho
Who is who widget for PresideCMS

## Git Submodule method
From the root of your application, type the following command:

	git submodule add https://github.com/nhkhanh0408/preside-ext-whoswho.git application/extensions/preside-ext-whoswho

From the Preside CMS developer console (using the back tick ` key) reload the application:

	reload all

### Enabling the extension
Once the files are installed, enable the extension by opening up the Preside CMS developer console and entering:

	extension enable preside-ext-whoswho
	reload all

#### Usage
When editing a page, simply click on the Widget icon within the WYSIWYG editor and select the Who is who widget.

##### Whos who fields required are as follows:
 * Internal label * (this should only be seen in admin, but will be the label seen in the admin listings and pickers)
 * Full name *
 * Profile image
 * Job title
 * Organisation
 * Summary (this shows before the read more link is clicked)
 * Biography (this shows after the read more link is clicked) If no content is added the show more link should not show.
 * Category picker (multiple)

##### When adding the who's who widget to a preside page the admin should be able to select individual people or categories to show

###### When adding a new category to data manager you should be able to define a category label and pick, add new or reorder users for that category. The order should then be reflecting in the front end.

