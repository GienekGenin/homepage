# Homepage
My very own personal website. Basically this is just a résumé.

## Requirements
For development, you will only need Node.js installed on your environement.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v9.3.0

    $ npm --version
    v6.0.0

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

## Install

    $ git clone https://github.com/GienekGenin/homepage.git
    $ cd homepage
    $ npm install

## Start & watch

    $ npm run dev

## Simple build for production

    $ npm run build

## Languages & tools

### HTML

[htmlshell](http://htmlshell.com/) for some templating.

### CSS

[bootstrap 4](https://getbootstrap.com/) is used to make page responsive.

### JavaScript

[jQuery](http://jquery.com/) is used for animations

### Module bundler

[webpack](https://github.com/webpack/webpack)

#### Loaders used in project

 - style-loader
 - css-loader
 - sass-loader
 - postcss-loader
 - file-loader

#### [Babel](https://babeljs.io/) was used for transpiling files

## Authors

**[Gennadii Genin](https://github.com/GienekGenin)**
