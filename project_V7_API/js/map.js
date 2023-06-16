// var container = document.getElementById("sns_api_map");
var container = document.querySelector(".API_map");
var options = {
  center: new kakao.maps.LatLng(35.16, 126.8512),
  level: 3,
};

var map = new kakao.maps.Map(container, options);

var positions = fetch("./data/광주_관광지_데이터.json");
positions
  .then((data) => data.json())
  .then((obj) => {
    console.log(obj);
  });

var location = [
  {
    name: "무등산 주상절리대",
    Latitude: 35.1200598333,
    longitude: 126.9989650099,
  },
  {
    name: "중외공원",
    Latitude: 35.1814981787,
    longitude: 126.8842958259,
  },
  {
    name: "사직공원(광주)",
    Latitude: 35.1413559608,
    longitude: 126.9121749221,
  },
  {
    name: "광주호",
    Latitude: 35.1851523796,
    longitude: 126.9927528112,
  },
  {
    name: "약사암(광주)",
    Latitude: 35.1223174593,
    longitude: 126.9722478684,
  },
  {
    name: "원효사",
    Latitude: 35.1486258304,
    longitude: 126.9857793462,
  },
  {
    name: "증심사(광주)",
    Latitude: 35.1287583574,
    longitude: 126.9697618157,
  },
  {
    name: "충장사",
    Latitude: 35.1625602481,
    longitude: 126.9787157312,
  },
  {
    name: "포충사",
    Latitude: 35.0898468165,
    longitude: 126.8487457033,
  },
  {
    name: "충민사",
    Latitude: 35.1519696177,
    longitude: 126.9692640546,
  },
];
// console.log(location);
// 마커 이미지의 이미지 주소입니다
// var imageSrc =
//   "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

var imageSrc = "./image/icon/down-arrow.png";

for (var i = 0; i < positions.length; i++) {
  // 마커 이미지의 이미지 크기 입니다
  var imageSize = new kakao.maps.Size(24, 35);

  // 마커 이미지를 생성합니다
  var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    map: map, // 마커를 표시할 지도
    position: new kakao.maps.LatLng(
      positions[i].Latitude,
      positions[i].longitude
    ), // 마커를 표시할 위치
    title: positions[i].name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    image: markerImage, // 마커 이미지
  });
}
