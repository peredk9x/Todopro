//Show thẻ thay đổi ảnh && xem ảnh
function clickshow() {
    document.getElementById("edit-img").style.display = 'block';
};
function clickhidden() {
    document.getElementById("edit-img").style.display = 'none';
};
//Kích hoạt input
function showInfor(){
    document.getElementById("name").disabled = false; 
    document.getElementById("gender").disabled = false; 
    document.getElementById("date").disabled = false; 
    document.getElementById("phone").disabled = false; 
    document.getElementById("email").disabled = false; 
    document.getElementById("save").style.display = 'block';
    document.getElementById("huy").style.display = 'block';
    document.getElementById("btn").style.display = 'none';
}
function hiddenInfor(){
    document.getElementById("name").disabled = true; 
    document.getElementById("gender").disabled = true; 
    document.getElementById("date").disabled = true; 
    document.getElementById("phone").disabled = true; 
    document.getElementById("email").disabled = true; 
    document.getElementById("save").style.display = 'none';
    document.getElementById("huy").style.display = 'none';
    document.getElementById("btn").style.display = 'block';
}




    document.getElementsByName('pb').onclick=function ()
    { var checkradio= document.getElementsByName('public');
        for ( var i = 0; i<checkradio.length;i++ )
    {
        if(ckeckradio[i].checked === true)
        document.write(checkradio[i].value);
    }
};
    