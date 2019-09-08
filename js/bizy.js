$( document ).ready(function() {
    setDate();
    
    
    //
    data = getSavedData();
    if (data != null){
        loadsavedCard(data);
    }
    
});

function loadsavedCard(card){
    
    $(".qr_code").empty()
    $(".qr_code").qrcode({
        text:card,
        width: 500,
        height:500
    });
    
    $("#fname").val(localStorage.getItem('fname'));
    $("#lname").val(localStorage.getItem('lname'));
    $("#company").val(localStorage.getItem('company'));
    $("#title").val(localStorage.getItem('title'));
    $("#email").val(localStorage.getItem('email'));
    $("#phone").val(localStorage.getItem('phone'));
    $("#website").val(localStorage.getItem('website'));
    $("#street").val(localStorage.getItem('street'));
    $("#postcode").val(localStorage.getItem('postcode'));
    $("#state").val(localStorage.getItem('state'));
    $("#country").val(localStorage.getItem('country'));

    $(".modal-header").html(localStorage.getItem('fname')+ "'s Contact Details");
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

    return data;
}

function saveData(card){
    localStorage.setItem('card',card);
    localStorage.setItem('fname',$("#fname").val());
    localStorage.setItem('lname',$("#lname").val());
    localStorage.setItem('company',$("#company").val());
    localStorage.setItem('title',$("#title").val());
    localStorage.setItem('email',$("#email").val());
    localStorage.setItem('phone',$("#phone").val());
    localStorage.setItem('website',$("#website").val());
    localStorage.setItem('street',$("#street").val());
    localStorage.setItem('postcode',$("#postcode").val());
    localStorage.setItem('state',$("#state").val());
    localStorage.setItem('country',$("#country").val());
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
    saveData(card);
    loadSavedCard(card);
}
