var dropdownlist=document.getElementsByClassName("dropdown")
function iff(con, notmet, met){if (con){return met} else {return notmet}}

for (var i = 0; i < dropdownlist.length; i++){
    if (dropdownlist[i].children.length != 2) {
        console.warn("Dropdown #"+i+" has unacceptible amount of child tags. It will therefore not be treated as a dropdown and left as-is.")
        continue
    }
    if (dropdownlist[i].children[0].tagName != "BUTTON") {
        console.warn("Dropdown #"+i+"'s first child is not a <button>. It will therefore not be treated as a dropdown and left as-is.")
        continue
    }
    if (dropdownlist[i].children[0].getElementsByClassName("dropdown-knob").length != 1){
        console.warn("Dropdown #"+i+"'s first child has bad amount of img knobs. It will therefore not be treated as a dropdown and left as-is.")
        continue
    }
    if (dropdownlist[i].children[1].tagName != "DIV") {
        console.warn("Dropdown #"+i+"'s second child is not a <div> element. It will therefore not be treated as a dropdown and left as-is.")
        continue
    }
    dropdownlist[i].children[0].style="transform:none;" // Prevent button scaling
    dropdownlist[i].children[0].value = i // Remember which entry of the list I'm from
    dropdownlist[i].children[1].value = "1" // I'm hidden at first
    dropdownlist[i].children[0].onclick = function() {
        var lse=Number.parseInt(this.value); // get where I came from
        var knob=dropdownlist[lse].children[0].getElementsByClassName("dropdown-knob")[0]
        var but=dropdownlist[lse].children[0], cont=dropdownlist[lse].children[1]
        var conhid=Number.parseInt(cont.value)
        if (conhid==NaN) conhid=0
        cont.value = (conhid + 1) % 2
        but.style = "transform: none; border-radius: 12px 12px "+(12*!conhid+"px ")+(12*!conhid+"px ")+";"
        knob.style = "transform: rotate("+(conhid * 90)+"deg);"
        cont.style = "height: "+iff(conhid, "0px", (cont.scrollHeight)+"px")+"; opacity: "+conhid+";  border-radius: "+(12*!conhid+"px ")+(12*!conhid+"px ")+"12px 12px;"
    }
}

var headerDiv = document.getElementById("header")
if (headerDiv != null) {
    headerDiv.innerHTML = `
    <div id="headerNav" class="disabled"></div>
    <a id="headerLogo" href="/" title="To the homepage"></a>
    <div id="headerLogo2" class="rspn_hide"></div>
    `
}
var scrboxes = document.getElementsByClassName("scrbox")
for (var i = 0; i < scrboxes.length; i++) {
    e = scrboxes.item(i)
    e.innerHTML = ""
    e.style = "opacity: 0;"
    i1 = document.createElement("embed")
    i1.src = "/assets/images/arrow-left.svg"
    i1.width = i1.height = "32px"
    i1.onload = function (){
        i1.getSVGDocument().getElementById("arrow").attributes.fill.value = "#000"
        e.style = "opacity: 1;"
    }
    e.appendChild(i1)
}