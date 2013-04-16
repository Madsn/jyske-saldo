/*
 * Author: Mikkel Madsen - m@madsn.net
 * 2013-04-16
 */
var calcTotal = function(label){

  // add 'Saldo' title column
  var tableTitleRow =  document.getElementsByClassName('kbevPosteringerPadding')[0].childNodes[1].childNodes[1];
  var saldoHTML = '<th nowrap="nowrap" align="right"><a class="bdLinkB">Saldo</a></th>';
  tableTitleRow.innerHTML = tableTitleRow.innerHTML + saldoHTML;

  // get initial 'running total'
  var runningTotal = parseFloat(label.parentNode.childNodes[3].innerHTML.replace(".", "").replace(",","."));

  // loop through transaction rows
  var rows = document.getElementsByClassName(' highlightMe bdHighlightHover');
  for (var index in rows){
    var curRow = rows[index];
    if (curRow.id.indexOf('tr_parm') > 0){

      // insert running total
      var newNode = '<td valign="middle" align="right" nowrap="nowrap" class="hist_onclick_td">'
                    +runningTotal.toString().replace(".",",")+'</td>';
      curRow.innerHTML = curRow.innerHTML + newNode;

      // calculate new running total
      var transaction = parseFloat(curRow.childNodes[9].innerHTML.replace(".","").replace(",","."));
      runningTotal = (runningTotal - transaction).toFixed(2);
    }
  }
};

var labels = document.getElementsByClassName('label');
// only execute on "Til rådighed" page
if (labels.length > 0 && labels[0].innerHTML === 'Til rådighed')
    calcTotal(labels[0]);

