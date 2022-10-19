$(function() {
    $('.js-upload-file').on('change', function () { //ファイルが選択されたら
      var file = $(this).prop('files')[0]; //ファイルの情報を代入(file.name=ファイル名/file.size=ファイルサイズ/file.type=ファイルタイプ)
      
      if (file) {
        //upload-areaを隠す
        $('.upload-area').hide();

        $('.js-upload-filename').text(file.name); //ファイル名を出力

        // ファイルのブラウザ上でのURLを取得する
        var blobUrl = window.URL.createObjectURL(file);
        // img要素に表示
        $('#file-preview').attr('src', blobUrl);
      }
    });

    // loading
    $('#submit-btn').on('click', function() {
      $('#file-preview').animate( { opacity: '0.3',}, { duration: 300, easing: 'swing', } ); //透過
      setTimeout(function(){
        $('#loading').show(); //gif追加
      },300);
    });

    $('#cancel-btn').on('click', function() {
      location.href = '/';
    });

  });
