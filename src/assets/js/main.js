//디바이스 체크
getdevice = function(){
	if($('#_devicePc').css('display')=='block'){
		return 'pc';
	}else if($('#_deviceTa').css('display')=='block'){
		return 'ta';
	}else if($('#_deviceMo').css('display')=='block'){
		return 'mo';
	}else{
		return null;
	}
}

//전역변수 선언
VARS = {
	'ani' : {
		'speed' : 600,
		'easing' : 'easeInOutExpo'
	}
}



function darkMode() {
  const root = document.body;
  root.dataset.theme = 'dark-mode';
}

function lightMode() {
  const root = document.body;
  root.dataset.theme = 'light-mode';
}

$(document).ready(function () {
  $('.data-copy').click(function () {
    // 이 버튼이 속한 li 안의 input 찾기
    var $input = $(this).siblings('.data-area');

    // hidden → text로 잠깐 변경
    $input.attr('type', 'text');

    // 선택 후 복사
    $input.select();
    var copy = document.execCommand('copy');

    // 다시 hidden으로
    $input.attr('type', 'hidden');

    if (copy) {
      alert("사이트 주소가 복사되었습니다.");
    } else {
      alert("복사에 실패했습니다. 다시 시도해주세요.");
    }
  });
});

