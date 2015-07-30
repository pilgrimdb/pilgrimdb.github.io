### Pilgrim Routes Database

A database of European pilgrimage routes for walkers and cyclists, with overview description and mapping.

It is designed to be communally maintained, using the Github infrastructure widely used by open-source software projects. The website is generated using Github's [Jekyll](http://jekyllrb.com/) software. See the [contributing](contributing.md) page for details on how to contribute.

#### Data structure
Each route has:
* a unique alpha id
* a title
* one or more branches
* descriptive text in [Markdown](https://guides.github.com/features/mastering-markdown/) format

Each branch links two or more towns, and has a unique id.

A branch may or may not have mapping. Each mapped branch has one or more sections, generally roughly one day's walk. These sections correspond to GeoJSON features, and have the following attributes:
* a unique numeric id (`fid`)
* a title
* distance in km
* a reference to the route they belong to (some sections belong to >1 route)

#### Directory structure

* `/_routes/` (the `routes` collection): each route has its own page here, named `id.md`, generated as `/id.html`, containing an overview description and listing the id, title and branches in the front-matter
* `_data/features/` contains one file per feature/mapsection, listing the feature attributes
* `_data/mapsections.yaml` lists the fids for each route id
* `_data/places.yaml` lists the towns referred to in the branch definitions, together with their Lon/Lat geographic coordinates
* `_features` (the `features` collection): each feature/mapsection has:
  * 2 GeoJSON LineString geometries, which are static files so will render in Github:
    * the full geometry in `/_features/geometries/fid.geojson`; can be accessed with url `/features/geometries/fid.geojson`
    * a simplified geometry for displaying on the overview map in `/_features/simples/fid.geojson`; can be accessed with url `/features/simples/fid.geojson`
  * a file `/_features/fid.f` which generates a GeoJSON feature accessed with `/features/fid.geojson`; this adds the feature data as attributes to the geometry (using `_layouts/feature`)
* each route has a file `/_features/id.fc`, which generates a GeoJSON Feature Collection for all the features in the route (using `_layouts/routefc`), accessed with `/id.geojson`

#### Other files

* `_features/simp.geo` generates a GeoJSON Feature Collection for all the simplified geometries (using `_layouts/fc`), accessed with `/simp.geojson`, and used by the overview map
* `/unmapped.geo` generates a GeoJSON Feature Collection with 1 feature per unmapped branch (using `_layouts/fc`, which uses `_data/places.yaml` to get the appropriate Lon/Lat coordinate for each town); this is accessed with `/unmapped.geojson`, and is also used by the overview map
