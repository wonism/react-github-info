# React Github Information
> A Component That Renders Github's Information

## Getting Started
```sh
$ cd /PROJECT/PATH
$ npm i -S react react-dom react-github-info
```

## Development
```sh
$ npm run demo
```
- Open [localhost:8888](http://localhost:8888)

## Production Bundle
```sh
$ npm run bundle
```

## How to Use
```jsx
import { Profile, Repository } from 'react-github-info';

{/* pass the username for Profile */}
<Profile username="wonism" />

{/* pass the username and repository name for Repository */}
<Repository username="wonism" repos="til" />
```
