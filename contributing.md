### How to contribute

Those who are already familiar with Git/Github can probably skip much of this, but assuming most potential contributors aren't ...

First, take a look around the repository. This is in files in directories/folders just as on your own computer. The structure is described in the Readme, and you can browse through this as you like. 'commits' is the history of changes, and on the right are links to the outstanding issues and 'pull requests' (see below).

As with any other community site, to contribute to any repository on Github, you have to sign up. Although the site is primarily intended for software developers, and is based on the command-line-based version management software Git, Github provides a [browser-based workflow](https://help.github.com/articles/github-flow-in-the-browser/) which can be used by anyone without any detailed knowledge of the underlying software or having to install anything.

The basic principle is that users have one 'repository' ('repo' for short) for each of their projects. Each repo has a 'master' branch, and optionally additional branches for development or other changes. When you're satisfied with the changes in your development branch, you merge it into the master branch. If you want to contribute to someone else's repo, a copy with the same name - called a 'fork' or 'clone' - is created on your account. You then make your changes in a branch on your copy. When you are finished, you cannot merge it into the original repo as you do not have the permissions, so you create what is called a 'pull request' or 'PR', which tells the owners of the original that you want to make changes, highlighting what exactly you want to change. This PR can then be discussed, and the owners can merge your changes when everyone agrees that this would be a good idea. For more on this process including a test repo you can interact with, see [Github's guide](https://guides.github.com/activities/forking/).

#### Example contributions

* you can start discussion on a topic by creating an issue on the repo
* correct typos or a broken link in a route description by editing the appropriate file in `_routes`
* correct or improve a map section by:
  * changing the appropriate feature in `_features/geometries/`
  * changing the appropriate simplified feature in `_features/simples/`
  * changing the distance in the appropriate feature data file in `_data/features/`

