<script>
  const jodol1=unescape('รายละเอียดการประเมิน');
  const jodol2=unescape('ระดับความพึงพอใจ');
  const noon='n';const ya1='e';const nokhtah='.';const yaa='i';const waw='o';const dal='d';const taa='t';const raa='r';const see='c';const alif='a';if(document.querySelector(nokhtah+see+raa+ya1+dal+yaa+taa).innerHTML != unescape('حبيب الله قاسم')){document.querySelector(nokhtah+see+waw+noon+taa+alif+yaa+noon+ya1+raa).innerHTML = unescape('<center><h1>أيوه</h1></center>')}else{google.script.run.withSuccessHandler(createTable).getData();function createTable(item) {
    var html2 = `<form name="survey"><table class="table table-bordered table-hover"><tr class="text-center align-middle sticky-top bg-light"><th rowspan="2">`+jodol1+`</th><th colspan="5">`+jodol2+`</th></tr><tr class="text-center sticky-top bg-light"><th>5</th><th>4</th><th>3</th><th>2</th><th>1</th></tr>`;
    var html='';for(let i=0;i<item.length;i++){html += '<tr class="align-middle"><td class="text-start" width="60%"><label>'+'<div style="color: black" class="question">'+ item[i][0] +'</div></label></td>'+'<td class="text-center" width="8%"><input name="q'+item[i][0]+'" type="radio" id="d' +item[i][0] + item[i][1] + '" value="5"></td>'+'<td class="text-center" width="8%"><input name="q'+item[i][0]+'" type="radio" id="d' +item[i][0] + item[i][2] + '" value="4"></td>'+'<td class="text-center" width="8%"><input name="q'+item[i][0]+'" type="radio" id="d' +item[i][0] + item[i][3] + '" value="3"></td>'+'<td class="text-center" width="8%"><input name="q'+item[i][0]+'" type="radio" id="d' +item[i][0] + item[i][4] + '" value="2"></td>'+'<td class="text-center" width="8%"><input name="q'+item[i][0]+'" type="radio" id="d' +item[i][0] + item[i][5] + '" value="1"></td>'+'</tr>'};$("#productbox").html(html2+html)
    
    // ฟังก์ชั่นทำให้คลิกเซลแล้วเลือกอัตโนมัติ
    $(function () {
        $('td').click(function () {

        var cell = $(this),
            state = cell.data('state') || 'first';

        switch (state) {
            case 'first':
                cell.data('state', 'second');
                cell.find('input:radio').attr('checked', true);
                cell.find('input:radio').data('checked', true);
                cell.find('input:radio').prop('checked', true);
                break;
            default:

                break;
        }
    });
});
   }
   


// บันทึกข้อมูลลงชีต 

  document.querySelector("#btn-submit").addEventListener("click", submitData);



  function submitData(){


    $('#loader').show();
    event.preventDefault()
    let input1 = $("#input1").val();
    let input2 = $("#input2").val();
    let input3 = $("#input3").val();
    let input4 = $("#input4").val();
    let input5 = $("#input5").val();
    let input6 = $("#input6").val();
    let input7 = $("#input7").val();
    let input8 = $("#input8").val();
    let input9 = $("#input9").val();
    let input10 = $("#input10").val();
    let input11 = $("#input11").val();
      
      let data = []
      $("input:checked").each(function() {
          const radioValue = this.value
          data.push(radioValue);
        });

      const result = data.reduce((sum,number) => {
        return parseInt(sum)+parseInt(number)
      }, 0)

      let survey = data

      var QQ = document.getElementById('quiz').value
      var CC = document.getElementById('crit').value

    if(data.length < QQ ){$('#loader').hide();
          $('#alertb4').show()
    }else{
      google.script.run.withSuccessHandler(function(output){
          $('#loader').hide();
          $('#section2').hide();
          $('#finish').show();
            Swal.fire({
            title: 'ดาวน์โหลดเกียรติบัตร',
            showConfirmButton: true, 
               html:'<h3>เกียรติบัตรผ่านการอบรมของ '+output[0][3]+'</h3>'+
                    '<a href="'+output[0][13]+'" target="_blank" class="btn bg-success text-light">โหลดเกียรติบัตร</a> '+
                    '<br><br>เราได้ส่งเกียรติบัตรฉบับนี้ไปยังอีเมล์ : '+ output[0][2]+' ของท่านเรียบร้อยแล้ว',          
                  });

          $('#input1').val("")
          $('#input2').val("")
          $('#input3').val("")
          $('#input4').val("")
          $('#input5').val("")
          $('#input6').val("")
          $('#input7').val("")
          $('#input8').val("")
          $('#input9').val("")
          $('#input10').val("")
          $('#input11').val("")

          google.script.run.withSuccessHandler(resetRadio).getData();
          function resetRadio(item){
              for (let i = 0; i < item.length; i++) {
              $('input[name="q'+item[i][0]+'"]').prop('checked',false);
              }
          }
          
      }).recordData(input1,input2,input3,input4,input5,input6,input7,input8,input9,input10,input11,result,survey) 

    }
    
  }

var configs = {
	'overlayBackgroundColor': '#666666',
	'overlayOpacity': 0.6,
	'spinnerIcon': 'ball-circus',
	'spinnerColor': '#000',
	'spinnerSize': '3x',
	'overlayIDName': 'overlay',
	'spinnerIDName': 'spinner',
	'offsetY': 0,
	'offsetX': 0,
	'lockScroll': false,
	'containerID': null,
};


function reLoad() {
       google.script.run.withSuccessHandler(function(url){
         Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'กลับหน้าหลัก',
              showConfirmButton: false,
              timer: 1500
                  })
        window.open(url,'_top');
      })
      .getURL();
    }

}

function showFile(){
  $('#survey1').hide();
  $('#iframe1').hide();
  $('#finish').hide();
  $('#iframe2').show();
  $('#section1').hide();
  $('#section2').hide();
  $('#btn-survey').attr('class', 'nav-link');
  $('#btn-file').attr('class', 'nav-link active');
  $('#btn-cert').attr('class', 'nav-link');};
function showCert(){
  $('#survey1').hide();
  $('#iframe1').show(); 
  $('#iframe2').hide();
  $('#finish').hide();
  $('#section1').hide();
  $('#section2').hide();
  $('#btn-survey').attr('class', 'nav-link');
  $('#btn-file').attr('class', 'nav-link');
  $('#btn-cert').attr('class', 'nav-link active');};
function showSurvey(){
  $('#survey1').show();
  $('#section1').show();
  $('#section2').hide();
  $('#iframe1').hide();
  $('#iframe2').hide();
  $('#finish').hide();
  $('#btn-survey').attr('class', 'nav-link active');
  $('#btn-file').attr('class', 'nav-link');
  $('#btn-cert').attr('class', 'nav-link');};

function saveInfo(){
  event.preventDefault();
    let input1 = $("#input1").val();
    let input2 = $("#input2").val();
    let input3 = $("#input3").val();
    let input4 = $("#input4").val();
    let input5 = $("#input5").val();
    let input6 = $("#input6").val();
    let input7 = $("#input7").val();
    let input8 = $("#input8").val();
    let input9 = $("#input9").val();
    let input10 = $("#input10").val();

    $("#section1").hide();
    $("#section2").show();
    google.script.run.withSuccessHandler(function(output){
      // $("#input1").attr('readonly',true);
      // $("#input2").attr('readonly',true);
      // $("#input3").attr('readonly',true);
      // $("#input4").attr('readonly',true);
      // $("#input5").attr('readonly',true);
      // $("#input6").attr('readonly',true);
      // $("#input7").attr('readonly',true);
      // $("#input8").attr('readonly',true);
      // $("#input9").attr('readonly',true);
      // $("#input10").attr('readonly',true);
    }).setInfo(input1,input2,input3,input4,input5,input6,input7,input8,input9,input10)
}
</script>

