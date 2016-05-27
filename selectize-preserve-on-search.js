/**
 * Plugin: "preserve_on_search" (selectize.js)
 * Based on methods used in 'preserve_on_blur' plugin by Eric M. Klingensmith & contributors.
 *
 * Copyright (c) 2016 K. Canoot
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
 * NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

Selectize.define('preserve_on_search', function (options) {
  'use strict';
  var self = this;

  options.text = options.text || function (option) {
        return option[this.settings.labelField];
      };

  this.onOptionSelect = (function (e) {
    var original = self.onOptionSelect;

    return function (e) {
      // Capture the current input value
      var $input = this.$control_input;
      var inputValue = $input.val();

      // Do the default actions
      original.apply(this, arguments);

      // Set the value back
      this.setTextboxValue(inputValue);

      // Refresh the options in the dropdownlist
      self.refreshOptions();
    };
  })();
});
