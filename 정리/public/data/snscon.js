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
  {
    mName: "제11회 도서관 문화마당",
    userId: "user1",
    title: "모두가 그린(green)도서관",
    content:
      "도서관 문화마당은 광주광역시 공공, 작은도서관 및 독서단체가 협력하여 독서의 중요성을 알리고 독서진흥을 유도하기 위한 시민 참여형 행사이다. ",
    img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=6690aaaa-eb86-4d0a-9a6a-7308cf756453",
    heart: 23,
  },
  {
    mName: "제11회 도서관 문화마당",
    userId: "user2",
    title: "모두가 그린도서관",
    content:
      "도서관 문화마당은 광주광역시 공공, 작은도서관 및 독서단체가 협력하여 독서의 중요성을 알리고 독서진흥을 유도하기 위한 시민 참여형 행사이다. ",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MTBfMjg4%2FMDAxNjgzNjgwMTM5MjU0.XnvfnJI4jLiTUJagneH8d8edBwbODuwdqNUGmZNUXukg.96qy_IYX-BJXU1VPoRZmB3L7WDguYOVohSY-jZtRBVsg.JPEG.76jade%2F1683680137645.jpg&type=sc960_832",
    heart: 22,
  },
  {
    mName: "제11회 도서관 문화마당",
    userId: "user3",
    title: "와 도서관 축제다",
    content:
      "도서관 문화마당은 광주광역시 공공, 작은도서관 및 독서단체가 협력하여 독서의 중요성을 알리고 독서진흥을 유도하기 위한 시민 참여형 행사이다. ",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MjdfMTE2%2FMDAxNjgyNTgzMzQ0ODYw.lKIp2bgcCOWlfULfOAXPOCrPBKY6QBOVNv5CMbiAPagg.GoZIWHAMhit8NFWLtFqhsG6IA6EkYKLduegh6T-VmtYg.JPEG.kjdonghwa%2FIMG_0035.jpeg&type=sc960_832",
    heart: 11,
  },
  {
    mName: "5·18 기념공원",
    userId: "user1",
    title: "산책갔어요",
    content: "산책로 예뻐요",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMzFfMjE3%2FMDAxNjQzNjMzNzcwNDM4.MFoM8wKwvpmkjMb6pmkbsPj6vq1l5CdU5exkG3QWzq0g.GkjWut7BFaZK3gwJRpTEUL-z5iWj7hiideRcyKZBCqUg.JPEG.dimasputro%2F20220129_065355666_iOS.jpg&type=sc960_832",
    heart: 12,
  },
  {
    mName: "5·18 기념공원",
    userId: "user2",
    title: "구경갔어요",
    content: "멋져요",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MTlfMSAg%2FMDAxNTI0MDk2NTkxNDI3.5jSdH0GXiTDSkWED532eKUn0XiubY56zFqv_SzCazyAg.hlNaKLAZF_VQQmiBE2VIeEkdWG-Bn6pBPKtmokguDfwg.JPEG.gwangjuseogu%2F5.18%25B1%25E2%25B3%25E4%25B0%25F8%25BF%25F802.jpg&type=sc960_832",
    heart: 30,
  },
  {
    mName: "빌리지 1호점",
    userId: "user3",
    title: "브런치 최고",
    content: "아담하니 좋아요",
    img: "https://www.korearank.com/tour/tour_detail.php?uid=19839",
    heart: 33,
  },
  {
    mName: "금다연한정식",
    userId: "user1",
    title: "깔끔한 한정식",
    content: "맛있어요",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMDJfMTcz%2FMDAxNjY5OTg2ODUwMzc0.crYQSnoqKi3HHuosEcHW6WXO09sZcqVxBclCOUBGn7Ig.DSW9ZX6I38trL-QvpovVWrhP7Gt6KI21CdxMQ0Pefusg.JPEG.412ysj%2FIMG_4611.jpg&type=sc960_832",
    heart: 12,
  },
  {
    mName: "상무시민공원",
    userId: "user2",
    title: "시민들의 휴식공간으로 딱",
    content: "좋아요",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MDhfMTM1%2FMDAxNTk5NTU0NTI0MDE3.vzwYVGtcKTdWkeCDBPiM3D_8fCQ7isEjxuKjN-oxu-og.elZo6J24htAhhx6IdbtRWeAVm_ul-Kg3dnsa4VayyvQg.JPEG.gwangjuseogu%2F17.jpg&type=sc960_832",
    heart: 13,
  },
  {
    mName: "[백년가게]민들레",
    userId: "user3",
    title: "간장게장 좋아요",
    content: "맛있어요",
    img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn.wadiz.kr%2Fwwwwadiz%2Fgreen001%2F2020%2F1203%2F20201203154800763_91576.jpg%2Fwadiz%2Fformat%2Fjpg%2Fquality%2F80%2Foptimize&type=sc960_832",
    heart: 14,
  },
  {
    mName: "금강식육식당",
    userId: "user1",
    title: "가격 및 후기",
    content: "싸요",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA3MTFfMTc3%2FMDAxNTMxMzExMDk3ODk3.EmI-8A_1_p6Yugix8zXJ_lkVD9An7CUU9wLiB-Cd6ocg.0tazwWW1nOB2BQmuIIQMkMztsLrpAF_rYV4cSkTaVqYg.JPEG.nmsok2%2F%25B1%25A4%25C1%25D6%25B5%25BF%25C3%25B5%25B5%25BF%25B8%25C0%25C1%25FD_%25C3%25DF%25C3%25B5_%25B1%25DD%25B0%25AD%25BD%25C4%25C0%25B0%25BD%25C4%25B4%25E7_%25B0%25A1%25B0%25DD_%25B9%25D7_%25C8%25C4%25B1%25E2_2.JPG&type=sc960_832",
    heart: 15,
  },
  {
    mName: "Beer Fest Gwangju",
    userId: "user2",
    title: "재밌어요",
    content: "맥주가 최고",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MTBfMjc2%2FMDAxNjUyMTY0ODY0MTE3.bXu_8MEAaAfSzARX0NY7gbzGfBfsevjSvz3g-Q7xj0Eg.9ZkSkIymupQmnPeXv63_qh0DSdCRper6BJvp1O2TAO4g.JPEG.beerfestgj%2F%25B0%25F8%25BD%25C4%25C8%25A8%25C6%25E4%25C0%25CC%25C1%25F6-%25BF%25C0%25C7%25C2-002.jpg&type=sc960_832",
    heart: 16,
  },
  {
    mName: "마천루",
    userId: "user3",
    title: "마천루 좋아요",
    content: "딤섬맛집",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMTZfOTMg%2FMDAxNjQyMzIzNDYzMzg3.EGwapWRJDxd1FXeJ9wrMWRBczYR9xuwlQWlxF42yKd8g.CxUkwXgHvXN8BaAx3WttKD9Yf0kre79XEoDVthYSSbIg.JPEG.nomorecar%2F%25BD%25D6%25C3%25CC%25B5%25BF_%25B5%25F5%25BC%25B6_%25B8%25C0%25C1%25FD_%25B8%25B6%25C3%25B5%25B7%25E7IMGP2017.jpg&type=sc960_832",
    heart: 17,
  },
  {
    mName: "통큰샤브",
    userId: "user1",
    title: "샤브샤브 존맛",
    content: "샐러드바있어요",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAzMDJfNjUg%2FMDAxNTgzMTUzNTkwNjk0.RKJmUs_cb06D2kp_Bl7u47aHmBVO5SvxXVrbhE4luzog.gvLMc0C5Lu6_k7vVBZzxjgOki7Q74AwEKXRS5tvBH1Ag.JPEG.bts2c%2F1583153589606.jpg&type=sc960_832",
    heart: 18,
  },
  {
    mName: "한산사(여수)",
    userId: "user2",
    title: "멋있어요",
    content: "여수바다가 보여요",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130804_208%2Fdoggy3dogg_1375595567457eSwhE_JPEG%2FP8020300.JPG&type=sc960_832",
    heart: 19,
  },
  {
    mName: "예술의 섬 장도",
    userId: "user3",
    title: "예술의 섬",
    content: "예뻐요",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMDlfMTY4%2FMDAxNjM5MDU5ODM1MjY5.pjt3KOHbVfp4sirWVBYtvBVSzfCK7l_Oak-g47nF-jcg.d3EJNcFybZWnx676s-CmXfu5aFeeIRx1jO1RaYrSgL4g.JPEG.daum1977%2F20211207_130018.jpg&type=sc960_832",
    heart: 20,
  },
];

let snsCotents = sessionStorage.getItem("snsCotents");
if (snsCotents === null) {
  console.log(snsCotents);
  snsCotents = arrSnsCotent;
  sessionStorage.setItem("snsCotents", JSON.stringify(snsCotents));
  console.log(sessionStorage.getItem("snsCotents"));
}
