### About 
This repository is created for all users willing to contribute to improving [webmin.com](https://webmin.com) website.

![image](https://user-images.githubusercontent.com/4426533/265804009-e2587bd6-2ec2-4bee-aa9c-1e29bdf5be07.png#gh-light-mode-only)
![image](https://user-images.githubusercontent.com/4426533/265804165-40511951-6ac1-4244-b790-b56fb6cf9c12.png#gh-dark-mode-only)

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
