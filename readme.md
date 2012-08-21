## Skeleton.less
A starting point for building responsive websites using less. This project uses
[Skeleton](http://www.getskeleton.com) along with [Less Elements](http://lesselements.com).

## Getting Started
The most commonly updated values have been placed in `variables.less`. When creating new styles,
add them to `layout.less` which includes a place for site styles and page styles (just like when
using skeleton).

Clone the repository and install the node dependencies (grunt and grunt-less), add your HTML
content, then update `variables.less` and `layout.less` with your new styles. To rebuild the
CSS, run `grunt` in terminal to run the grunt task.

The grunt watch task is configured to run grunt-less so you may also run `grunt watch` then
go about your business without having to worry about having the latest compiled CSS.

It is also possible to compress the output of the compiled CSS by setting `compress` to
`true` in the base less task in `grunt.js`.

## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Please don't
make any changes directly to the `css` directory as `style.css` is generated from the less and
your changes will be overwritten.

## Release History
`0.0.1` - Initial release.

## License
[Skeleton](http://www.getskeleton.com/#licenseandlog) is licensed under the open-source MIT license.

[Less Elements](http://lesselements.com) is not licensed, but _is_ super awesome.
