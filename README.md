## How-tos

### Hugo version used and installation

- #### Hugo version with which development was done initially
  ``` 
  - hugo v0.110.0+extended darwin/amd64 BuildDate=unknown
  ```

- #### How to install Hugo on Mac:
  ```
  brew install hugo
  ```
  .. or [read Hugo manual](https://gohugo.io/installation/)

### How to add a new post

```
hugo new changelog/webmin-2.013-and-usermin-1.862-released.md
```

or

```
hugo new changelog/webmin-2.013
```

#### Alternatively, just manually put a new file under `content/` directory by copy/pasting from existing to use it as a template.


### Update build tree for uploading to webmin.com
To regenerate (and clean) content of `public/` directory run:

```
hugo --cleanDestinationDir
```

### Update hash table for included page after product update

```
./update:download-checksum-verification.pl /home/user/releases/webmin download/checksum-verification.md 2.011
```

For more details see [.scripts/update:download-checksum-verification.pl](https://github.com/virtualmin/webmin.com/blob/main/.scripts/update:download-checksum-verification.pl) script.


