
function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function saveData(){
    //如果 project name 空白不能送出
    if ( $('#giftname').val() == '') {
        alert('Please Write A Message');
    } else {
        
        $('#wish-btn').html('♠♥♦♣');

        //取得新願望 並塞到前台。
        var newWish = $('#giftname').val();
        newWish = escapeHtml(newWish);
        
        //把 append 好的 data 存回去
        $.ajax({  
            url: "addWish.php",  
            type: "POST",
            data: { wish : newWish },
            success: function(data){
                if ( data == '1'){
                    alert('哎呀，好像有什麼東西出錯啦，請稍後再試。');
                } else {
                    $('.wish-pool div').eq(0).before('<div class="wish hide">'+newWish+'</div>');
                    $('.wish-pool div').eq(0).fadeIn(1000);
                }

                $('#giftname').val(''); //清空input
                setTimeout( function(){
                    $('#wish-btn').html('WISH'); //修改按鈕字串
                }, 1000 );
                
            },
            error: function(){  
                //console.log(" 新增專案大失敗 :-( ");  
            }  
        });  
    }
};
