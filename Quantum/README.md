Note: If you're on Windows, you must go to ```package.json``` file and change the word 'export' for 'set'

## Quick start

```bash
git clone https://github.com/GabrielValenzuelaLorca/Proyecto-IngSoftware.git
```
Instalar dependencias

```bash
cd Proyecto-IngSoftware/Quantum
npm install
```
Execute app
```bash
npm start
```

## Packaging(For test)

The app has support for packaging using 'electron-packager'

```bash
$ npm run package -- --all
```

Will run the package for OSX. You can also provide additional options to the package command such as

*  --name : The package name
*  --all : Will packaget the application to all the platforms
*  --arch : Arches to be provided
*  --icon : The icon for the app

## Generate Installer

Modify [electron-builder.yml](./electron-builder.yml) to edit package info.

For a full list of options see: https://github.com/electron-userland/electron-builder/wiki/Options.

Create a package for OSX, Windows and Linux
```
npm run pack
```

Or target a specific platform
```
npm run pack:mac
npm run pack:win
npm run pack:linux
```

## License

[MIT]

[Webpack]: http://webpack.github.io
[MIT]: http://markdalgleish.mit-license.org
[angular2]: http://angular.io
[electron]: http://electron.atom.io/
[ngrx]: https://github.com/ngrx/store
[electron-packager]: https://github.com/electron-userland/electron-packager
