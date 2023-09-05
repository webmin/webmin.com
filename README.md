### About 
This repository is created for all users willing to contribute to improving [webmin.com](https://webmin.com) website.

<img width="1420" alt="image" src="https://github.com/virtualmin/webmin.com/assets/4426533/518360af-a0c6-458b-b5a9-cef14892e0c9">

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
