
        $(document).ready(function() {
            var chkArray = [];

            function removebuttons(div) { 
                while (div.firstChild) {
                // console.log(div.firstChild); 
                 div.removeChild(div.firstChild);
                } 
            }
            function removeLine(div) {
                while(div.firstChild) {
                    div.removeChild(div.firstChild);
                }
            }
            function clearAllButtons(div) { 
                while (div.firstChild) {
                // console.log(div.firstChild); 
                 div.removeChild(div.firstChild);
                } 
                var line = document.getElementById('line');
                removeLine(line);
                var cb = document.getElementsByClassName("chk");
                chkArray = [];
                for (var i = cb.length - 1; i >= 0; i--) {
                 cb[i].checked = false;
                }
            }
            function createbuttons($chkArray){
               // console.log("in button");
                var div = document.getElementById('insert');
                var line = document.getElementById('line');
                removebuttons(div);
                removeLine(line);
                for (var i in chkArray){
                   //  console.log(chkArray[i]);
                     var btn = document.createElement('button');
                     var txt = document.createTextNode(chkArray[i]);
                     btn.appendChild(txt);
                     btn.setAttribute('type', 'button');
                     btn.setAttribute('class','filterbtn');
                     div.appendChild(btn);
                }
                if(chkArray.length >= 1) {
                    var hr = document.createElement('HR'); 
                    line.appendChild(hr);
                	var lbl = document.createElement('text');
                	var txt = document.createTextNode('CLEAR ALL');
                	lbl.appendChild(txt);
                	lbl.setAttribute('type', 'text');
                	lbl.setAttribute('class','clear');
                	div.appendChild(lbl);
               		lbl.onclick = function () {clearAllButtons(div)};
                }
            }
                $(".chk").click(function() {
                // console.log("in Log"); 		
                // console.log($(this).is(":checked"));
                if($(this).is(":checked")) {
                    chkArray.push($(this).val()); 
                    createbuttons(chkArray); 
                   // console.log(chkArray);
                } else{
                    chkArray = chkArray.filter(item => item !== $(this).val()); 
                    createbuttons(chkArray);
                 //   console.log("in else");
                }
            });
    });