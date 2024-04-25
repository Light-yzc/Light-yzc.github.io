const ap = new APlayer({
  container: document.getElementById('aplayer'),
  autoplay: false,
  loop: 'all',
  volume: 0.7,
  listFolded: true,
  listMaxHeight: 60,
  audio: [
      {
          name: 'シリウスの心臓',
          artist: 'ヰ世界情緒',
          url: 'https://m801.music.126.net/20240425200517/ffd04ea2365462fe2bb3585cf5d8a6ac/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/29418750321/23dc/1569/148f/08f2a03cd106ecc374c8c369cd02a445.mp3',
          cover: 'cover1.jpg',
      },
    //   {
    //       name: 'name2',
    //       artist: 'artist2',
    //       url: 'url2.mp3',
    //       cover: 'cover2.jpg',
    //   }
  ]
});