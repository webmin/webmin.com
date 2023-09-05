### About 
This repository is created for all users willing to contribute to improving [webmin.com](https://webmin.com) website.

<p align="center">
  <img width="1440" alt="webmin.com screenshot" src="https://user-images.githubusercontent.com/4426533/265800212-75418d54-8bda-41c4-9ed5-f4d93e4d04da.png#gh-light-mode-only">
  <img width="1440" alt="webmin.com screenshot" src="https://user-images.githubusercontent.com/4426533/265800773-852088cf-4005-4a04-80ae-7520584d180a.png#gh-dark-mode-only">
</p>

The pages which have **Suggest Changes** link can be submitted for improvements via PR.


### How-tos

#### How to add a new post

```
hugo new changelog/webmin-2.013-and-usermin-1.862-released.md
```

or

```
hugo new changelog/webmin-2.013
```

#### Update build tree for uploading to webmin.com
To regenerate (and clean) content of `public/` directory run:

```
hugo --cleanDestinationDir
```
