$("#btndn").click(function () {
  $("#myModal").modal();
});
$(document).ready(function name(params) {
  var i =1;
  function KTTen(){
    let mauKt=/^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})*$/;
    if($("#Name").val()==""){
        $("#tbName").html("Không để trống");
        return false;
    }
    if(!mauKt.test($("#Name").val())){
        $("#tbName").html("Mỗi kí tự đầu viết hoa không sử dụng số");
        return true;
    }
    $("#tbName").html("*");
    return true;
  }
  $("#Name").blur(KTTen);

  function KTMail(){
    var mail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+(\.\w{2,3})+$/;
    if($("#Email").val()==""){
        $("#tbEmail").html("Không để trống");
        return false;
    }

    if(!mail.test($("#Email").val())){
        $("#tbEmail").html("Nhập đúng định dang mail");
        return false;
    }

    $("#tbEmail").html("*");
    return true;
  } 
  $("#Email").blur(KTMail);

  function KTMK() {
    var mauKT =/^[A-Za-z0-9]*$/;
    if($("#Pass").val()==""){
      $("#tbPass").html("Không để trống");
      return false;
    }

    if(!mauKT.test($("#Pass").val())){
      $("#tbPass").html("Mật khẩu chỉ chứa chữ cái và số");
      return false;
    }

    $("#tbPass").html("*");
    return true;
  }
  $("#Pass").blur(KTMK);

  function KTDC(){
    var mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
    if($("#DC").val()==""){
        $("#tbDC").html("Không để trống");
        return false;
    }
    if(!mauKT.test($("#DC").val())){
        $("#tbDC").html("Mỗi kí tự đầu viết hoa không sử dụng số");
    }
    $("#tbDC").html("*");
    return true;
  }
  $("#DC").blur(KTDC);
  
  function KTSDT(){
    var sdt=/^0\d{3}-\d{3}-\d{3}$/;
    if($("#SDT").val()==""){
        $("#tbSDT").html("Không để trống");
        return false;
    }

    if(!sdt.test($("#SDT").val())){
        $("#tbSDT").html("Nhập theo dạng 0xxx-xxx-xxx trong đó x là số");
        return false;
    }

    $("#tbSDT").html("*");
    return true;
  }
  $("#SDT").blur(KTSDT);
});