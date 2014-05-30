#!/bin/bash

set -e

mkdir -p public/js/lib

wget -O public/js/lib/jquery.js http://code.jquery.com/jquery-2.0.0.js
wget -O public/js/lib/handlebars.js http://cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.0/handlebars.js
wget -O public/js/lib/ember.js http://builds.emberjs.com/canary/ember.js
wget -O public/js/lib/ember-data.js http://builds.emberjs.com/canary/ember-data.js
