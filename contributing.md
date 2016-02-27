### How to contribute

#### Github

Those who are already familiar with Git/Github can probably skip much of this introduction, but assuming most potential contributors aren't ...

First, take a look around the repository. This is in files in directories/folders just as on your own computer. The structure is described in the Readme, and you can browse through this as you like. 'commits' is the history of changes, and at the top are links to the outstanding issues and 'pull requests' (see below).

As with any other community site, to contribute to any repository on Github, you have to sign up. Although the site is primarily intended for software developers, and is based on the command-line-based version management software Git, Github provides a [browser-based workflow](https://help.github.com/articles/github-flow-in-the-browser/) which can be used by anyone without any detailed knowledge of the underlying software or having to install anything.

The basic principle is that users have one 'repository' ('repo' for short) for each of their projects. Each repo has a 'master' branch, and optionally additional branches for development or other changes. When you're satisfied with the changes in your development branch, you merge it into the master branch. If you want to contribute to someone else's repo, a copy with the same name - called a 'fork' or 'clone' - is created on your account. You then make your changes in a branch on your copy. When you are finished, you cannot merge it into the original repo as you do not have the permissions, so you create what is called a 'pull request' or 'PR', which tells the owners of the original that you want to make changes, highlighting what exactly you want to change. This PR can then be discussed, and the owners can merge your changes when everyone agrees that this would be a good idea. For more on this process including a test repo you can interact with, see [Github's guide](https://guides.github.com/activities/forking/).

#### Adhering to the database structure

As stated in the Readme, the database uses a fixed structure which all routes and geographic features adhere to. Contributions should follow this structure, though suggestions for improving the structure are always welcome. Of course, if the structure changes, all entries in the database have to be changed accordingly.

Geographic features are GeoJSON linestrings. You can convert files in other formats, such as KML (Google Earth) or GPX (widely used by GPS devices), into GeoJSON using online converters such as [Ogre](http://ogre.adc4gis.com/). GPX files in particular can be very large (for example, if the position is taken every few seconds), and such detail is not needed for mapping at the scales used by walkers or cyclists. So the database stores the linestrings in two standardised levels of detail, simplified as necessary using the Douglas-Peucker algorithm. You can do this reduction using the map program, which enables you to save features in GeoJSON format with simplified geometries:
* the geometry for the less detailed 0.01 tolerance used for the Europe-wide overview map
* the geometry for the default 0.00001 tolerance for map scales typically used for walking

#### Example contributions

* start discussion on a topic by creating an issue on the repo
* check/correct a route description:
  * edit the appropriate file in `_routes` (correct typos, broken links)
  * set `lastChecked` date in the file
* suggest a route synopsis by adding it to the data section in the appropriate file in `_routes`
* add a new route:
  *
* correct or improve a map section:
  * change the appropriate feature in `_includes/geometries/`
  * change the appropriate simplified feature in `_includes/simples/`
  * change the distance in the appropriate feature data file in `_data/features/`
* add a new map section by:
  *
* split an overlong map section into smaller sections:
  * load the maps page for the appropriate feature
  * add the draw component
  * use the split tool to split the feature as appropriate
  * save option
  * copy the output (in toolbar) to a file on your computer
  * get the geometries and distances
  * change the old map section to the first of the new, as above
  * add the other map section(s) as above
