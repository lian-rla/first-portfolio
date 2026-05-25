export const skills = [
  {
    title: "Python",
    contents: [
      "데이터 분석 및 시각화에 능숙합니다. (NumPy, Pandas, Matplotlib, Seaborn)",
      "PyTorch를 활용한 딥러닝 모델 구현 경험이 있습니다.",
      "OpenCV를 활용한 영상 처리 및 컴퓨터 비전 개발 경험이 있습니다.",
      "EasyOCR 등 OCR 라이브러리를 활용한 텍스트 인식 경험이 있습니다.",
    ],
  },
  {
    title: "AI / ML",
    contents: [
      "Google Gemini API를 활용한 LLM 기반 분석 시스템 구현 경험이 있습니다.",
      "Monte Carlo 시뮬레이션을 활용한 확률적 AI 분석 시스템을 구현했습니다.",
      "DeepLabCut 등 행동 분석용 AI 도구 사용 경험이 있습니다.",
      "GPU 가속 기반 영상 처리 파이프라인을 구축한 경험이 있습니다.",
    ],
  },
  {
    title: "Embedded / HW",
    contents: [
      "Raspberry Pi 기반 임베디드 시스템 개발 경험이 있습니다.",
      "I2C 통신 프로토콜 및 GPIO 인터럽트 제어 경험이 있습니다.",
      "MAX30102 PPG 센서를 활용한 생체신호 데이터 수집 및 처리 경험이 있습니다.",
      "SciPy 기반 신호처리 필터링(이동평균, 가우시안 스무딩) 구현 경험이 있습니다.",
    ],
  },
  {
    title: "Frontend / GUI",
    contents: [
      "React를 활용한 웹 개발 경험이 있습니다.",
      "Tkinter를 활용한 데스크톱 GUI 애플리케이션 개발 경험이 있습니다.",
      "FFmpeg를 활용한 미디어 파일 처리 및 변환 경험이 있습니다.",
      "Next.js로 블로그를 직접 개발하여 운영하고 있습니다.",
    ],
  },
];

export const careers = [
  {
    title: "바른피앤티",
    date: "2024.08 ~ 2025.12",
    about: "BTL Marketer",
  },
];

export const activities = [
  {
    title: "서울대학교 뇌인지과학과",
    date: "학부생 인턴 (2025.06 ~ 2025.12)",
    about: "가치 기반 공간 학습의 해마-전전두피질 신경망 기전 연구",
  },
];

export const projects = [
  {
    title: "Pokemon LLM 파티 분석기",
    date: "2026.05 (1명)",
    skills: ["Python", "Google Gemini", "PokeAPI", "Monte Carlo Simulation"],
    github: "https://github.com/lian-rla/pokemonLLM",
    about: "포켓몬 챔피언스 싱글배틀 파티를 LLM과 몬테카를로 시뮬레이션으로 분석하는 도구",
    contents: [
      "몬테카를로 시뮬레이션으로 56개 랭킹 파티 대상 승률 자동 계산",
      "턴제 배틀 규칙 기반 전투 엔진 구현 (메가진화, 상태이상, 급소 포함)",
      "6픽 3선 시스템: 상대 미리보기 기반 최적 포켓몬 자동 선택",
      "한국어/영어 이중 언어 입력 지원",
      "Google Gemini AI로 파티 강점/약점 분석 리포트 자동 생성",
      "smartnuo API + PokeAPI 기반 포켓몬 데이터베이스 자동 구축",
    ],
  },
  {
    title: "행동신경과학 영상 분석 도구",
    date: "2025.12 (1명)",
    skills: ["Python", "PyTorch", "OpenCV", "DeepLabCut", "EasyOCR", "Tkinter"],
    github: "https://github.com/lian-rla/Video-Assistance",
    about: "해마 학습 연구를 위한 행동 영상 분석 통합 GUI 도구",
    contents: [
      "EasyOCR을 활용한 영상 내 타임스탬프 자동 추출 및 CSV 저장",
      "이벤트 로그 기반 프레임 강화 처리 파이프라인 구현",
      "DeepLabCut 좌표 데이터를 활용한 정지/이동 행동 자동 분류",
      "분석 결과를 영상 위에 텍스트 오버레이로 출력",
      "PyTorch GPU 가속을 통한 빠른 영상 처리",
    ],
  },
  {
    title: "SEC 영상 변환 GUI 도구",
    date: "2025.09 (1명)",
    skills: ["Python", "FFmpeg", "Tkinter"],
    github: "https://github.com/lian-rla/converter_GUI",
    about: "보안 DVR 전용 .sec 포맷 영상을 표준 포맷으로 변환하는 GUI 앱",
    contents: [
      "배치 폴더 변환 및 재귀적 하위 폴더 스캔 지원",
      "MP4(H.264), AVI(MPEG-4), MOV(H.264) 다중 출력 포맷 지원",
      "프레임레이트, 품질(CRF), 해상도 커스텀 설정 기능",
      "이중 진행 바 및 실시간 로그 창으로 변환 상태 모니터링",
      "변환 실패 시 자동 재시도 및 폴백 모드 구현",
    ],
  },
  {
    title: "T-maze 실험 데이터 분석 도구",
    date: "2025.07 (1명)",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Tkinter"],
    github: "https://github.com/lian-rla/Main-Task-Daily-Data-Table",
    about: "쥐 T-미로 행동 실험의 일일 데이터를 자동 분석·시각화하는 연구 보조 도구",
    contents: [
      "세션별 시행 지연시간 및 선택 방향 시각화",
      "장면별(Zebra/Pebbles) 정답률 추이 분석 (75% 기준선 표시)",
      "지연시간 박스플롯 및 행동 섹션별(Alpha/Beta/Gamma) 시간 분석",
      "날짜별 학습 진행도 자동 추적 및 스택 차트 생성",
      "GUI 기반 폴더 선택 및 실험 메타데이터 입력",
    ],
  },
  {
    title: "BVT 측정 임베디드 시스템",
    date: "2025.3 (1명)",
    skills: ["Python", "Raspberry Pi", "MAX30102", "NumPy", "SciPy", "Matplotlib"],
    github: "https://github.com/lian-rla/BVT-measurement-embedded-system",
    about: "라즈베리파이와 PPG 센서를 활용한 비침습적 동맥경화도 측정 시스템",
    contents: [
      "MAX30102 센서 기반 실시간 PPG 신호 수집 (I2C 통신, 25Hz 샘플링)",
      "이동평균 + 가우시안 스무딩 다단계 필터링으로 노이즈 제거",
      "APG 신호의 b/d 포인트 자동 검출 및 동맥 속도 지수(AVI) 계산",
      "심박수 및 혈중 산소포화도 자동 측정",
      "원시 신호 및 처리 신호 실시간 시각화",
    ],
  },
];
