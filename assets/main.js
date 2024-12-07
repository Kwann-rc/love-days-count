const startDay = new Date(2024, 10, 23);

function updateCountDown() {
  const now = new Date();
  const timeRela = now - startDay;

  const days = Math.floor(timeRela / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRela % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRela % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRela / 1000) % 60);

  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  daysElement.textContent = days;
  hoursElement.textContent = hours.toString().padStart(2, "0");
  minutesElement.textContent = minutes.toString().padStart(2, "0");
  secondsElement.textContent = seconds.toString().padStart(2, "0");
}

updateCountDown();
setInterval(updateCountDown, 1000);
// playlist
const musicData = [
  {
      "audio": "/audio/BẠN ĐỜI.mp3",
      "avatar": "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/5/4/8/e/548ebf004852b5e6887fb3f8861115c1.jpg",
      "title": "Bạn Đời",
      "author": "Karik"
  },
  {
      "audio": "/audio/CHÁU XIN LỖI CHÚ.mp3",
      "avatar": "https://avatar-ex-swe.nixcdn.com/song/2021/02/19/9/a/4/2/1613752824099.jpg",
      "title": "Cháu Xin Lỗi Chú",
      "author": "Linh Thộn"
  },
  {
      "audio": "/audio/Không Yêu Em Thi Yêu Ai.mp3",
      "avatar": "https://avatar-ex-swe.nixcdn.com/song/2024/09/25/0/a/8/0/1727269398545_640.jpg",
      "title": "Không Yêu Em Thì Yêu Ai?",
      "author": "Vũ."
  },
  {
      "audio": "/audio/binh yên.mp3",
      "avatar": "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/4/4/e/5/44e55530a0195fb4c1c4deb059a381eb.jpg",
      "title": "Bình Yên",
      "author": "Vũ."
  },
  {
      "audio": "/audio/Có em.mp3",
      "avatar": "https://avatar-ex-swe.nixcdn.com/song/2023/01/09/f/5/7/7/1673261552140_640.jpg",
      "title": "Có em",
      "author": "Mahidu"
  },
  {
      "audio": "/audio/PRECIOUS.mp3",
      "avatar": "https://i.scdn.co/image/ab67616d0000b2732d86081270e2131e616a5306",
      "title": "Precious",
      "author": "DaDuc"
  },
  {
      "audio": "/audio/Tell Ur Mom II  Remake.mp3",
      "avatar": "https://avatar-ex-swe.nixcdn.com/song/2023/08/09/6/d/c/8/1691581614319_640.jpg",
      "title": "Tell Ur Mom II",
      "author": "Winno"
  },
  {
      "audio": "/audio/Phóng Đổ Tim Em.mp3",
      "avatar": "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/9/2/2/1/9221a527645f506db573a5af94c38ceb.jpg",
      "title": "Phóng Đổ Tim Em",
      "author": "Wren"
  },
  {
      "audio": "/audio/biet iu 1 nguoi.mp3",
      "avatar": "https://i.scdn.co/image/ab67616d0000b273e36139d968a78ee6ce18b81a",
      "title": "biet iu mot nguoi",
      "author": "Winno"
  },
  {
      "audio": "/audio/EM CỦA ANH ĐỪNG CỦA AI.mp3",
      "avatar": "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/4/2/b/4/42b4bc9eb1486e225ed57e0b7e2172d1.jpg",
      "title": "ECAĐCA",
      "author": "LongCao"
  },
  {
    "audio": "/audio/tình ca tình ta.mp3",
    "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3aRxBcTY-bKnlnm6gC_Y3Mcg2LwZBFJHGg&s",
    "title": "Tình Ca Tình Ta",
    "author": "Kis"
  },
  {
    "audio": "/audio/Đã Lỡ Yêu Em Nhiều.mp3",
    "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQngIhv0QGhjeezNQbAhqQ4Y2Cy6Szq-eW02g&s",
    "title": "Đã lỡ yêu em nhiều",
    "author": "JT "
  },
  {
    "audio": "/audio/MUỘN RỒI MÀ SAO CÒN.mp3",
    "avatar": "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/e/f/6/c/ef6c9d4b97048c9911ea6069e968dadb.jpg",
    "title": "Muộn Rồi Mà Sao Còn",
    "author": "Sơn Tùng"
  }
];

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

const playlist = document.querySelector(".music-box .music-playlist");

/*for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
              <table class="music-list">
          <tr class="music-song" onclick="playMusic('${musicData[i].audio}')">
            <td class="song-image"><img class="img" src="${musicData[i].avatar}"></td>
            <td class="song-name">${musicData[i].title}</td>
            <td class="song-authors">${musicData[i].author}</td>
          </tr>
        </table>`;
};


function playMusic(song) {
  var audioPlayer = document.getElementById('audioPlayer');
  var audioSource = document.getElementById('audioSource');

  audioSource.src = song;

  audioPlayer.load();
  audioPlayer.play();
}*/
// MENU
function showMenu() {
  const menu = document.querySelector(".music-box");
  menu.style.display = "flex";
};
function closeMenu() {
  const menu = document.querySelector(".music-box");
  menu.style.display = "none";
}

// END MENU

let currentSongIndex = 0; // Biến để theo dõi bài hát hiện tại

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
      <div class="music-song" onclick="playMusic(${i})">
        <div class="song-image"><img class="img" src="${musicData[i].avatar}"></div>
        <div class="song-name">${musicData[i].title}</div>
        <div class="song-authors">${musicData[i].author}</div>
      </div>`;
};


// Hàm phát nhạc và chuyển bài khi hết nhạc
function playMusic(index) {
  currentSongIndex = index;  // Lưu lại bài hát hiện tại

  var audioPlayer = document.getElementById('audioPlayer');
  var audioSource = document.getElementById('audioSource');

  // Khi chọn nhạc
  audioSource.src = musicData[index].audio;

  // Tải lại và phát nhạc
  audioPlayer.load();
  audioPlayer.play();

  // Lắng nghe sự kiện kết thúc nhạc
  audioPlayer.onended = function() {
    // Khi nhạc kết thúc, chuyển sang bài hát tiếp theo
    currentSongIndex = (currentSongIndex + 1) % musicData.length; // Chuyển tới bài hát tiếp theo
    playMusic(currentSongIndex); // Gọi lại hàm để phát bài tiếp theo
  };
}
