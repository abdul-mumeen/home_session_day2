'use strict';

function isWhiteSpace(ch)
{
  if (ch === " " || ch === "\t" || ch == "\n")
  {
    return true;
  }
  else
  {
    return false;
  }
}

function isPucntuation(ch)
{
  if ((ch === ",") || (ch === ".") || (ch === "'") || (ch === "!") || (ch === "?"))
  {
    return true;
  }
  else
  {
    return false;
  }
}

function SplitSentence(sentence)
{
  var str = "";
  var inWord = false;
  var wordArray = [];
  sentence += " ";
  for (var i = 0; i < sentence.length; i++)
  {
    var ch = sentence[i];
    if (!inWord && !(isPucntuation(ch) || isWhiteSpace(ch)))
    {
      inWord = true;
      str += ch;
    }
    else if (inWord && !(isPucntuation(ch) || isWhiteSpace(ch)))
    {
      str += ch;
    }
    else
    {
      if (inWord)
      {
        if (str !== "")
        {
          wordArray.push(str);
          str = "";
          inWord = false;
        }
      }
    }
  }
  return wordArray;
}


module.exports = {

  function CheckFrequency(wArray)
  {
    var words = wArray;
    var result = {};
    for (var i = 0; i < wArray.length; i++)
    {
      var word = wArray[i];
      var count = 1;
      wArray.splice(i,1);
      i--;
      for (var j = i + 1; j < wArray.length; j++)
      {
        if (word === wArray[j])
        {
          wArray.splice(j,1);
          count++;
          j--;
        }
      }
      result[word] = count;
    }
    return result;
  }
}

