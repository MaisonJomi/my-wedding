/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "임창조",
    nameEn: "Groom",
    father: "임정호",
    mother: "양정순",
    fatherDeceased: false,
    motherDeceased: false
  },


  bride: {
    name: "박영미",
    nameEn: "Bride",
    father: "박정훈",
    mother: "",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-07-11",
    time: "12:25",
    venue: "울산 W시티컨벤션",
    hall: "1층 그랜드홀" ,
    address: "울산광역시 북구 진장17길 10",
    tel: "052-977-8080",
    mapLinks: {
      kakao: "https://kko.to/L8N3mX-wof",
      naver: "https://naver.me/5WBQ6qtO"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 하나님의 인도하심으로\n같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나님의 인도하심으로\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "임창조", name: "임창조", bank: "농협은행", number: "302-9041-7777-01" },
      { role: "임정호", name: "임정호", bank: "농협은행", number: "611011-51-166724" },
      { role: "양정순", name: "양정순", bank: "농협은행", number: "611810-56-018406" }
    ],
    bride: [
      { role: "박영미", name: "박영미", bank: "농협은행", number: "312-0139-9535-51" },
      { role: "박정훈", name: "박정훈", bank: "하나은행", number: "179-18-10323-6" },
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "임창조 ♥ 박영미 결혼합니다",
    description: "2026년 7월 11일, 소중한 분들을 초대합니다."
  }
};
