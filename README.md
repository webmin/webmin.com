## How-tos

### How to add a new post

```
hugo new changelog/webmin-2.012-and-usermin-1.862-released.md
```

or

```
hugo new changelog/webmin-2.012
```

Alternatively, just manually put file under `content/` directory.


---


### Update build tree
To regenerate (and clean) content of `public/` directory run:

```
hugo --cleanDestinationDir
```