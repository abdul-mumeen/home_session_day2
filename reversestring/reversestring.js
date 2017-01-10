'use strict';

module.exports = {
  reverseString: function(word)
  {
    if (word === "")
    {
      return null;
    }
    else
    {
      var reverse = "";
      for (var i = word.length - 1; i >= 0; i--)
      {
        reverse += word[i];
      }
      if (reverse === word)
      {
        return true;
      }
      else
      {
        return reverse;
      }
    }
  }
};