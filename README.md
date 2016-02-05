# glue-module-slider

###Project Structure

* package.json -> contains list of node modules
* gulpfile.js -> all build tasks are defined
* .gitignore -> folders/files that needs to be ignored during git commit
* src -> is the working directory
	* assets -> all styles, scripts, images, etc.
  		* images
      * js
      		* custom -> all scripts written by developer
          * lib	-> all library scripts
      * sass -> sass stylesheets
* htdocs -> is the compiled directory
	* assets -> compiled scripts, styles and images
  		* css -> compiled style sheet
      * js -> compiled script
      * images -> images

### Gulp Tasks

* **gulp develop** -> compiles all scripts, styles. moves images, html files to build folder. Starts up the index.html page in browser and watches your changes as well.
* **gulp clean** -> deletes your build folder.

###Things to do when you want to use this module with compiled version

* Download htdocs folder
*

###Things to do when you want to use this module with build
* Download this folder
* Run Commands in terminal
	* go to the folder in terminal
  * run ```npm install``` to install all required node_modules defined in package.json
  * run ```gulp develop``` to create a compiled folder and view in browser
  * develop according to your requirement in src/ folder. Gulp would compile your work and place it in htdocs/