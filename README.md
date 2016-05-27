# selectize-preserve-on-search
This plugin for selectize makes it possible to preserve the search input value in the text box after selecting an option from the option list if you use selectize multiselect.

Based on methods used in 'preserve_on_blur' plugin by Eric M. Klingensmith & contributors.
https://github.com/eklingen88/selectize.js-plugins-preserve_on_blur

To use the plugin make sure you include the javascript file after you included the selectize files:
```
<script type="text/javascript" src="...<your_location>/selectize-preserve-on-search.js"></script>
```

And add it to your selectize constructor:
```
$( '#selector').selectize( {    
    ...
    plugins: [ 'preserve_on_search' ],           
    ...
} );
```

For more info about Selectize check Brian Reavis' Selectize:
http://selectize.github.io/selectize.js/
