window.onload = function () {
    let bis = document.querySelectorAll(".bi")
    bis[0].onclick = function () {
        window.open('退出界面.html')
    }
    bis[1].onclick = function () {
        window.open('https://2897386543.github.io/sgs/')
    }
}
// 歌曲列表
var songs = ["media/SWIN-S - 只因你太美.mp3","media/李克勤 - 红日.mp3", "media/123.刘昊霖 - 儿时.mp3","media/17.赵雷 - 成都.mp3","media/256.薛之谦 - 狐狸.mp3"];
var currentSongIndex = 0;
// 播放/暂停功能
function togglePlay() {
  var audio = document.getElementById('audioPlayer');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
// 上一首歌曲
function prevSong() {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = songs.length - 1;
  }
  updateSong();
}
// 下一首歌曲
function nextSong() {
  currentSongIndex++;
  if (currentSongIndex >= songs.length) {
    currentSongIndex = 0;
  }
  updateSong();
}
// 更新音频源
function updateSong() {
  var audio = document.getElementById('audioPlayer');
  audio.src = songs[currentSongIndex];
  audio.load();
  audio.play();
}
// 监听音频播放时间更新事件
var audio = document.getElementById('audioPlayer');
audio.addEventListener('timeupdate', function() {
  var percent = (audio.currentTime / audio.duration) * 100;
  document.querySelector('.progress').style.width = percent + '%';
});
