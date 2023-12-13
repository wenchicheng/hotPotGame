// 目前分數
let score = 0
// 剩餘秒數
let time = 0
// 計時器
let timer = 0
// 最高分
const hs = {
  name: '-',
  score: 0
}
// SWEET ALERT----------------------------
function info() {
  $('#info').on('click', function () {
    Swal.fire({
      heightAuto: false,
      imageUrl: "./images/info.gif",
      imageWidth: "180",
      imageHeight: "auto",
      confirmButtonColor: "#3085d6",
    })
  })
}
// ---
//   Swal.fire({
//     title: "Custom width, padding, color, background.",
//     width: 600,
//     padding: "3em",
//     color: "#716add",
//     background: "#fff url(/images/trees.png)",
//     backdrop: `
// rgba(0,0,123,0.4)
// url("/images/nyan-cat.gif")
// left top
// no-repeat
// `
//   });
// ---


if (localStorage.hs) {
  const data = JSON.parse(localStorage.hs)
  hs.name = data.name
  hs.score = data.score
  $('#text-hsname').text(hs.name)
  $('#text-hsscore').text(hs.score)
}

// 點擊開始
$('#btn-start').click(function () {
  // 停用按鈕
  $(this).attr('disabled', true)
  $('btn-start', 'btn-Instructions').click
  // ----------------------------------------開始遊戲後，隱藏按鈕
  // 重設
  score = 0
  $('#text-score').text(score)
  time = 10
  $('#text-time').text(time)
  // 因為 setInterval 裡的 this 會指向 window，而不是點到的按鈕，所以先把 this 存起來
  const _this = this
  // 開始遊戲
  timer = setInterval(function () {
    // 倒數
    time--
    $('#text-time').text(time)
    // 隨機 1~10
    const random = Math.ceil(Math.random() * 10)
    // 如果隨機數字大於 2 且番茄的數量小於 2
    if (random > 2 && $('.tomato').length < 2) {
      // 隨機位置
      const top = Math.round(Math.random() * 100) + '%'
      const left = Math.round(Math.random() * 100) + '%'
      const deg = Math.round(Math.random() * 360) + 'deg'
      // ---------------------------------------------為什麼不會旋轉????????????
      // 產生關東煮
      const tomato = $(`<img src="image/tomato_red.png" class="tomato" style="top: ${top}; left: ${left}"; transsform="rotate:${deg}">`)
      $('#game-window').append(tomato)
      movetomato(tomato)
    }




    // 時間到-----------------------------------------------------------
    if (time === 0) {
      clearInterval(timer)
      // 重新啟用按鈕
      $(_this).attr('disabled', false)
      // 清空遊戲區域
      // .empty() 會把裡面的子元素都刪掉
      $('#game-window').empty()
      $('btn-start', 'btn-Instructions').show()
      // ---------------------------------------時間到之後出現這兩個按鈕


      Swal.fire({
        icon: 'info',
        title: '時間到',
        text: `你得到 ${score} 卡洛里`
      })
    }
  }, 1000)
})

// 點擊
$('#game-window').on('click', '.tomato', function () {
  $(this).stop()
  $(this).attr('src', './image/ebi_aka.png')
  $(this).removeClass('tomato').addClass('blood')
  score += 10
  $('#text-score').text(score)
})

function movetomato(tomato) {
  // 隨機位置
  const top = Math.round(Math.random() * 100) + '%'
  const left = Math.round(Math.random() * 100) + '%'
  tomato.animate({ top, left }, 2000, function () {
    blood.png
    cursor.png
    kodai_sacabambaspis.png(tomato)
  })
}