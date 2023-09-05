### About 
This repository is created for all users willing to contribute to improving [webmin.com](https://webmin.com) website.

<p align="center">
  <img width="1440" alt="webmin.com screenshot" src="https://github-production-user-asset-6210df.s3.amazonaws.com/4426533/265803170-b7e80d05-7203-4275-b639-5218b7df7959.png#gh-light-mode-only">
  <img width="1440" alt="webmin.com screenshot" src="https://github-production-user-asset-6210df.s3.amazonaws.com/4426533/265803044-72466644-ae1e-414a-aca1-d04219af5097.png#gh-dark-mode-only">
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
