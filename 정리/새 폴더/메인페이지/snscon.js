const arrSnsCotent = [
  {
    mName: "5·18 기념공원",
    userId: "test",
    title: "반려동물과 가기 좋아요",
    content:
      "이런 더운 날씨에 그늘에서 산책도 할 수 있고, 관리도 잘되있어서 너무 좋아요~",
    img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA2MTZfMTk3%2FMDAxNjg2OTAxNTAyMTAy.a4cjCI7HRDdY90Pa7WjCzpNv0ITCyCb_FVpxwO3IFrIg.MFOUt5ncmaFy6KxLvg85CWZlkmuCV12ajqnAN7HX_EIg.JPEG%2F20230616_142216.jpg",
    heart: 10,
  },
  {
    mName: "5·18 기념공원",
    userId: "test",
    title: "학생희생자 추모 동상",
    content:
      "5.18 당시 희생된 초,중,고 학생들의 숭고한 정신을 계승하고 추모하기위해 '하늘을 보라-염' 주제의 동상.",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MjlfMjQ0%2FMDAxNjg1MzQ4MDcyMjE4.0HIiYiJuN8snciuzwloHiGNP1ciZUCth-N5Qrf_qClEg.lePVbfs02PumIZ-liSioYGPuNO4imwshLrxAb-Qu-9wg.JPEG.doggum28%2F%25B1%25A4%25C1%25D6%25B1%25E2%25B0%25F811.JPG",
    heart: 10,
  },
  {
    mName: "운천저수지",
    userId: "newid",
    title: "벚꽃명소 운천저수지",
    content: "근처에 숙소잡고 멀리나가기전에 산책하기 좋아요~",
    img: "https://www.focusi.co.kr/news/photo/202003/146455_165903_4849.jpg",
    heart: 10,
  },
];

let snsCotents = sessionStorage.getItem("snsCotents");
if (snsCotents === null) {
  console.log(snsCotents);
  snsCotents = arrSnsCotent;
  sessionStorage.setItem("snsCotents", JSON.stringify(snsCotents));
  console.log(sessionStorage.getItem("snsCotents"));
}
