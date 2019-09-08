$( document ).ready(function() {
    setDate();
    $(".qr_code").empty();
    data = getSavedData();

    if (data != null){
        loadsavedCard(data);
    }
    
});

function loadsavedCard(card){
    $(".qr_code").qrcode({
        text:card[0],
        width: 500,
        height:500
    });

    $(".modal-header").html(card[1] + "'s Contact Details");
    $('.qrmodal').modal('show');
}

function setDate(){
    $("ydate").html(new Date().getFullYear());
}

function getSavedData(){
    data = localStorage.getItem('card');
    if(data === null){
        return null;
    }
    name = localStorage.getItem('name');

    return [data, name];
}

function saveData(card, name){
    localStorage.setItem('card',card);
    localStorage.setItem('name',name);
}

function createQR(){
    card = "BEGIN:VCARD\nVERSION:3.0"
    end = "\nEND:VCARD"
    name = "\nN:"+$("#lname").val()+";"+$("#fname").val();
    fn = "\nFN:"+$("#fname").val()+" "+$("#lname").val();
    org = "\nORG:"+$("#company").val();
    title = "\nTITLE:"+$("#title").val();
    email = "\nEMAIL;WORK;INTERNET:"+$("#email").val();
    phone = "\nTEL;CELL:"+$("#phone").val();
    website= "\nURL:"+$("#url").val();
    street = $("#address").val();
    suburb = $("#suburb").val();
    postcode = $("#postcode").val();
    state = $("#state").val();
    country = $("#country").val();
    address = "\nADR:;;"+street+";"+suburb+";"+state+";"+postcode+";"+country;
    
    $(".modal-header").html($("#fname").val() + "'s Contact Details");

    card = card+name+fn+org+title+address+phone+email+website+end;
    $(".qr_code").empty();
    $(".qr_code").qrcode({
        text:card,
        width: 500,
        height:500
    });
    saveData(card, $("#fname").val());
}