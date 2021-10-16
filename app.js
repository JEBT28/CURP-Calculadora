
const calculateCURP = ()=>{

    let name = String(document.getElementById("name").value).trim().toUpperCase();
    let fstLastName = String(document.getElementById("fstLastName").value).trim().toUpperCase();
    let scnLastName = String(document.getElementById("scnLastName").value).trim().toUpperCase();
    let sex = String(document.getElementById("sex").value).trim();
    let [year,month,day] = document.getElementById("bornDate").value.split('-');
    let state = String(document.getElementById("state").value).trim();

    let aux1 = fstLastName.substring(1).replace(/[AEIOU]/gm,'');
    let aux2 = scnLastName.substring(1).replace(/[AEIOU]/gm,'');
    let aux3 = name.split(" ")[0].substring(1).replace(/[AEIOU]/gm,'');
    let curp = `${fstLastName.substring(0,2)}${scnLastName[0]}${name[0]}${year.substring(2)}${month}${day}${sex}${state}${aux1[0]}${aux2[0]}${aux3[0]}`;

    console.log(curp);
}
