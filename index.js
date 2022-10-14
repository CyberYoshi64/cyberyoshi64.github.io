var dropdownlist=document.getElementsByClassName("dropdown")

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
        var cont=dropdownlist[lse].children[1], conhid=Number.parseInt(cont.value)
        if (conhid==NaN) conhid=0
        cont.value = (conhid + 1) % 2
        knob.style = "transform: rotate("+(conhid * 90)+"deg);"
        cont.style = "height: "+iff(conhid, "0px", "40vh")+"; margin: "+conhid * 8+"px 0px; opacity: "+conhid+"; padding: "+conhid * 16+"px;"
    }
}

var headerDiv = document.getElementById("header")
if (headerDiv != null) {
    headerDiv.innerHTML = 
    `<a href="/"><img src="/assets/images/cyic_bubble.png" title="To the homepage" style="position: absolute; width: 40pt; height: 40pt; left: 8pt; top: calc(50% - 20pt);"></a>
    <img src="/assets/images/menubtn.png" title="Site navigator not implemented." style="position: absolute; width: 40pt; height: 40pt; right: 8pt; top: calc(50% - 20pt); filter: opacity(0.25); transform: scale(0.5);">
    `
}

function iff(con, notmet, met){if (con){return met} else {return notmet}}
