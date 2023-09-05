### About 
This repository is created for all users willing to contribute to improving [webmin.com](https://webmin.com) website.

<p align="center">
  <a href="https://webmin.com/screenshots/#gh-light-mode-only" target="_blank">
    <img width="1440" alt="webmin.com screenshot" src="https://github.com/webmin/webmin.com/assets/4426533/75418d54-8bda-41c4-9ed5-f4d93e4d04da">
  </a>
  <a href="https://webmin.com/screenshots/#gh-dark-mode-only" target="_blank">
    <img width="1440" alt="webmin.com screenshot" src="https://github.com/webmin/webmin.com/assets/4426533/852088cf-4005-4a04-80ae-7520584d180a">
  </a>
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
