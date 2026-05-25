webpackHotUpdate_N_E("pages/index",{

/***/ "./public/data.js":
/*!************************!*\
  !*** ./public/data.js ***!
  \************************/
/*! exports provided: skills, careers, activities, projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skills", function() { return skills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "careers", function() { return careers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activities", function() { return activities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
var skills = [{
  title: "Python",
  contents: ["데이터 분석 및 시각화에 능숙합니다. (NumPy, Pandas, Matplotlib, Seaborn)", "PyTorch를 활용한 딥러닝 모델 구현 경험이 있습니다.", "OpenCV를 활용한 영상 처리 및 컴퓨터 비전 개발 경험이 있습니다.", "EasyOCR 등 OCR 라이브러리를 활용한 텍스트 인식 경험이 있습니다."]
}, {
  title: "AI / ML",
  contents: ["Google Gemini API를 활용한 LLM 기반 분석 시스템 구현 경험이 있습니다.", "Monte Carlo 시뮬레이션을 활용한 확률적 AI 분석 시스템을 구현했습니다.", "DeepLabCut 등 행동 분석용 AI 도구 사용 경험이 있습니다.", "GPU 가속 기반 영상 처리 파이프라인을 구축한 경험이 있습니다."]
}, {
  title: "Embedded / HW",
  contents: ["Raspberry Pi 기반 임베디드 시스템 개발 경험이 있습니다.", "I2C 통신 프로토콜 및 GPIO 인터럽트 제어 경험이 있습니다.", "MAX30102 PPG 센서를 활용한 생체신호 데이터 수집 및 처리 경험이 있습니다.", "SciPy 기반 신호처리 필터링(이동평균, 가우시안 스무딩) 구현 경험이 있습니다."]
}, {
  title: "Frontend / GUI",
  contents: ["React를 활용한 웹 개발 경험이 있습니다.", "Tkinter를 활용한 데스크톱 GUI 애플리케이션 개발 경험이 있습니다.", "FFmpeg를 활용한 미디어 파일 처리 및 변환 경험이 있습니다.", "Next.js로 블로그를 직접 개발하여 운영하고 있습니다."]
}];
var careers = [{
  title: "바른피앤티",
  date: "2024.08 ~ 2025.12",
  about: "BTL Marketer"
}];
var activities = [{
  title: "서울대학교 뇌인지과학과",
  date: "학부생 인턴 (2025.06 ~ 2025.12)",
  about: "가치 기반 공간 학습의 해마-전전두피질 신경망 기전 연구"
}];
var projects = [{
  title: "Pokemon LLM 파티 분석기",
  date: "2026.05 (1명)",
  skills: ["Python", "Google Gemini", "PokeAPI", "Monte Carlo Simulation"],
  github: "https://github.com/lian-rla/pokemonLLM",
  about: "포켓몬 챔피언스 싱글배틀 파티를 LLM과 몬테카를로 시뮬레이션으로 분석하는 도구",
  contents: ["몬테카를로 시뮬레이션으로 56개 랭킹 파티 대상 승률 자동 계산", "턴제 배틀 규칙 기반 전투 엔진 구현 (메가진화, 상태이상, 급소 포함)", "6픽 3선 시스템: 상대 미리보기 기반 최적 포켓몬 자동 선택", "한국어/영어 이중 언어 입력 지원", "Google Gemini AI로 파티 강점/약점 분석 리포트 자동 생성", "smartnuo API + PokeAPI 기반 포켓몬 데이터베이스 자동 구축"]
}, {
  title: "행동신경과학 영상 분석 도구",
  date: "2026.04 (1명)",
  skills: ["Python", "PyTorch", "OpenCV", "DeepLabCut", "EasyOCR", "Tkinter"],
  github: "https://github.com/lian-rla/Video-Assistance",
  about: "해마 학습 연구를 위한 행동 영상 분석 통합 GUI 도구",
  contents: ["EasyOCR을 활용한 영상 내 타임스탬프 자동 추출 및 CSV 저장", "이벤트 로그 기반 프레임 강화 처리 파이프라인 구현", "DeepLabCut 좌표 데이터를 활용한 정지/이동 행동 자동 분류", "분석 결과를 영상 위에 텍스트 오버레이로 출력", "PyTorch GPU 가속을 통한 빠른 영상 처리"]
}, {
  title: "BVT 측정 임베디드 시스템",
  date: "2026.04 (1명)",
  skills: ["Python", "Raspberry Pi", "MAX30102", "NumPy", "SciPy", "Matplotlib"],
  github: "https://github.com/lian-rla/BVT-measurement-embedded-system",
  about: "라즈베리파이와 PPG 센서를 활용한 비침습적 동맥경화도 측정 시스템",
  contents: ["MAX30102 센서 기반 실시간 PPG 신호 수집 (I2C 통신, 25Hz 샘플링)", "이동평균 + 가우시안 스무딩 다단계 필터링으로 노이즈 제거", "APG 신호의 b/d 포인트 자동 검출 및 동맥 속도 지수(AVI) 계산", "심박수 및 혈중 산소포화도 자동 측정", "원시 신호 및 처리 신호 실시간 시각화"]
}, {
  title: "T-미로 실험 데이터 분석 도구",
  date: "2026.04 (1명)",
  skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Tkinter"],
  github: "https://github.com/lian-rla/Main-Task-Daily-Data-Table",
  about: "쥐 T-미로 행동 실험의 일일 데이터를 자동 분석·시각화하는 연구 보조 도구",
  contents: ["세션별 시행 지연시간 및 선택 방향 시각화", "장면별(Zebra/Pebbles) 정답률 추이 분석 (75% 기준선 표시)", "지연시간 박스플롯 및 행동 섹션별(Alpha/Beta/Gamma) 시간 분석", "날짜별 학습 진행도 자동 추적 및 스택 차트 생성", "GUI 기반 폴더 선택 및 실험 메타데이터 입력"]
}, {
  title: "SEC 영상 변환 GUI 도구",
  date: "2026.03 (1명)",
  skills: ["Python", "FFmpeg", "Tkinter"],
  github: "https://github.com/lian-rla/converter_GUI",
  about: "보안 DVR 전용 .sec 포맷 영상을 표준 포맷으로 변환하는 GUI 앱",
  contents: ["배치 폴더 변환 및 재귀적 하위 폴더 스캔 지원", "MP4(H.264), AVI(MPEG-4), MOV(H.264) 다중 출력 포맷 지원", "프레임레이트, 품질(CRF), 해상도 커스텀 설정 기능", "이중 진행 바 및 실시간 로그 창으로 변환 상태 모니터링", "변환 실패 시 자동 재시도 및 폴백 모드 구현"]
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2RhdGEuanMiXSwibmFtZXMiOlsic2tpbGxzIiwidGl0bGUiLCJjb250ZW50cyIsImNhcmVlcnMiLCJkYXRlIiwiYWJvdXQiLCJhY3Rpdml0aWVzIiwicHJvamVjdHMiLCJnaXRodWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsTUFBTSxHQUFHLENBQ3BCO0FBQ0VDLE9BQUssRUFBRSxRQURUO0FBRUVDLFVBQVEsRUFBRSxDQUNSLDJEQURRLEVBRVIsa0NBRlEsRUFHUix5Q0FIUSxFQUlSLDJDQUpRO0FBRlosQ0FEb0IsRUFVcEI7QUFDRUQsT0FBSyxFQUFFLFNBRFQ7QUFFRUMsVUFBUSxFQUFFLENBQ1IsbURBRFEsRUFFUiwrQ0FGUSxFQUdSLHdDQUhRLEVBSVIsc0NBSlE7QUFGWixDQVZvQixFQW1CcEI7QUFDRUQsT0FBSyxFQUFFLGVBRFQ7QUFFRUMsVUFBUSxFQUFFLENBQ1IsdUNBRFEsRUFFUixzQ0FGUSxFQUdSLGlEQUhRLEVBSVIsZ0RBSlE7QUFGWixDQW5Cb0IsRUE0QnBCO0FBQ0VELE9BQUssRUFBRSxnQkFEVDtBQUVFQyxVQUFRLEVBQUUsQ0FDUiwyQkFEUSxFQUVSLDJDQUZRLEVBR1Isc0NBSFEsRUFJUixrQ0FKUTtBQUZaLENBNUJvQixDQUFmO0FBdUNBLElBQU1DLE9BQU8sR0FBRyxDQUNyQjtBQUNFRixPQUFLLEVBQUUsT0FEVDtBQUVFRyxNQUFJLEVBQUUsbUJBRlI7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FEcUIsQ0FBaEI7QUFRQSxJQUFNQyxVQUFVLEdBQUcsQ0FDeEI7QUFDRUwsT0FBSyxFQUFFLGNBRFQ7QUFFRUcsTUFBSSxFQUFFLDRCQUZSO0FBR0VDLE9BQUssRUFBRTtBQUhULENBRHdCLENBQW5CO0FBUUEsSUFBTUUsUUFBUSxHQUFHLENBQ3RCO0FBQ0VOLE9BQUssRUFBRSxvQkFEVDtBQUVFRyxNQUFJLEVBQUUsY0FGUjtBQUdFSixRQUFNLEVBQUUsQ0FBQyxRQUFELEVBQVcsZUFBWCxFQUE0QixTQUE1QixFQUF1Qyx3QkFBdkMsQ0FIVjtBQUlFUSxRQUFNLEVBQUUsd0NBSlY7QUFLRUgsT0FBSyxFQUFFLDhDQUxUO0FBTUVILFVBQVEsRUFBRSxDQUNSLHFDQURRLEVBRVIsMENBRlEsRUFHUixvQ0FIUSxFQUlSLG9CQUpRLEVBS1IseUNBTFEsRUFNUiw0Q0FOUTtBQU5aLENBRHNCLEVBZ0J0QjtBQUNFRCxPQUFLLEVBQUUsaUJBRFQ7QUFFRUcsTUFBSSxFQUFFLGNBRlI7QUFHRUosUUFBTSxFQUFFLENBQUMsUUFBRCxFQUFXLFNBQVgsRUFBc0IsUUFBdEIsRUFBZ0MsWUFBaEMsRUFBOEMsU0FBOUMsRUFBeUQsU0FBekQsQ0FIVjtBQUlFUSxRQUFNLEVBQUUsOENBSlY7QUFLRUgsT0FBSyxFQUFFLGlDQUxUO0FBTUVILFVBQVEsRUFBRSxDQUNSLHdDQURRLEVBRVIsOEJBRlEsRUFHUix1Q0FIUSxFQUlSLDJCQUpRLEVBS1IsNkJBTFE7QUFOWixDQWhCc0IsRUE4QnRCO0FBQ0VELE9BQUssRUFBRSxpQkFEVDtBQUVFRyxNQUFJLEVBQUUsY0FGUjtBQUdFSixRQUFNLEVBQUUsQ0FBQyxRQUFELEVBQVcsY0FBWCxFQUEyQixVQUEzQixFQUF1QyxPQUF2QyxFQUFnRCxPQUFoRCxFQUF5RCxZQUF6RCxDQUhWO0FBSUVRLFFBQU0sRUFBRSw2REFKVjtBQUtFSCxPQUFLLEVBQUUsdUNBTFQ7QUFNRUgsVUFBUSxFQUFFLENBQ1IsaURBRFEsRUFFUixrQ0FGUSxFQUdSLDBDQUhRLEVBSVIsc0JBSlEsRUFLUix1QkFMUTtBQU5aLENBOUJzQixFQTRDdEI7QUFDRUQsT0FBSyxFQUFFLG1CQURUO0FBRUVHLE1BQUksRUFBRSxjQUZSO0FBR0VKLFFBQU0sRUFBRSxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLE9BQXJCLEVBQThCLFlBQTlCLEVBQTRDLFNBQTVDLEVBQXVELFNBQXZELENBSFY7QUFJRVEsUUFBTSxFQUFFLHdEQUpWO0FBS0VILE9BQUssRUFBRSw0Q0FMVDtBQU1FSCxVQUFRLEVBQUUsQ0FDUix5QkFEUSxFQUVSLDJDQUZRLEVBR1IsNENBSFEsRUFJUiw2QkFKUSxFQUtSLDRCQUxRO0FBTlosQ0E1Q3NCLEVBMER0QjtBQUNFRCxPQUFLLEVBQUUsa0JBRFQ7QUFFRUcsTUFBSSxFQUFFLGNBRlI7QUFHRUosUUFBTSxFQUFFLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsU0FBckIsQ0FIVjtBQUlFUSxRQUFNLEVBQUUsMkNBSlY7QUFLRUgsT0FBSyxFQUFFLDBDQUxUO0FBTUVILFVBQVEsRUFBRSxDQUNSLDRCQURRLEVBRVIsaURBRlEsRUFHUixnQ0FIUSxFQUlSLGlDQUpRLEVBS1IsMkJBTFE7QUFOWixDQTFEc0IsQ0FBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGVkNjkwY2ZlNjE4YzhkZGM2NjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBza2lsbHMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJQeXRob25cIixcbiAgICBjb250ZW50czogW1xuICAgICAgXCLrjbDsnbTthLAg67aE7ISdIOuwjyDsi5zqsIHtmZTsl5Ag64ql7IiZ7ZWp64uI64ukLiAoTnVtUHksIFBhbmRhcywgTWF0cGxvdGxpYiwgU2VhYm9ybilcIixcbiAgICAgIFwiUHlUb3JjaOulvCDtmZzsmqntlZwg65Sl65+s64udIOuqqOuNuCDqtaztmIQg6rK97ZeY7J20IOyeiOyKteuLiOuLpC5cIixcbiAgICAgIFwiT3BlbkNW66W8IO2ZnOyaqe2VnCDsmIHsg4Eg7LKY66asIOuwjyDsu7Ttk6jthLAg67mE7KCEIOqwnOuwnCDqsr3tl5jsnbQg7J6I7Iq164uI64ukLlwiLFxuICAgICAgXCJFYXN5T0NSIOuTsSBPQ1Ig65287J2067iM65+s66as66W8IO2ZnOyaqe2VnCDthY3siqTtirgg7J247IudIOqyve2XmOydtCDsnojsirXri4jri6QuXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkFJIC8gTUxcIixcbiAgICBjb250ZW50czogW1xuICAgICAgXCJHb29nbGUgR2VtaW5pIEFQSeulvCDtmZzsmqntlZwgTExNIOq4sOuwmCDrtoTshJ0g7Iuc7Iqk7YWcIOq1rO2YhCDqsr3tl5jsnbQg7J6I7Iq164uI64ukLlwiLFxuICAgICAgXCJNb250ZSBDYXJsbyDsi5zrrqzroIjsnbTshZjsnYQg7Zmc7Jqp7ZWcIO2ZleuloOyggSBBSSDrtoTshJ0g7Iuc7Iqk7YWc7J2EIOq1rO2YhO2WiOyKteuLiOuLpC5cIixcbiAgICAgIFwiRGVlcExhYkN1dCDrk7Eg7ZaJ64+ZIOu2hOyEneyaqSBBSSDrj4Tqtawg7IKs7JqpIOqyve2XmOydtCDsnojsirXri4jri6QuXCIsXG4gICAgICBcIkdQVSDqsIDsho0g6riw67CYIOyYgeyDgSDsspjrpqwg7YyM7J207ZSE65287J247J2EIOq1rOy2le2VnCDqsr3tl5jsnbQg7J6I7Iq164uI64ukLlwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJFbWJlZGRlZCAvIEhXXCIsXG4gICAgY29udGVudHM6IFtcbiAgICAgIFwiUmFzcGJlcnJ5IFBpIOq4sOuwmCDsnoTrsqDrlJTrk5wg7Iuc7Iqk7YWcIOqwnOuwnCDqsr3tl5jsnbQg7J6I7Iq164uI64ukLlwiLFxuICAgICAgXCJJMkMg7Ya17IugIO2UhOuhnO2GoOy9nCDrsI8gR1BJTyDsnbjthLDrn73tirgg7KCc7Ja0IOqyve2XmOydtCDsnojsirXri4jri6QuXCIsXG4gICAgICBcIk1BWDMwMTAyIFBQRyDshLzshJzrpbwg7Zmc7Jqp7ZWcIOyDneyytOyLoO2YuCDrjbDsnbTthLAg7IiY7KeRIOuwjyDsspjrpqwg6rK97ZeY7J20IOyeiOyKteuLiOuLpC5cIixcbiAgICAgIFwiU2NpUHkg6riw67CYIOyLoO2YuOyymOumrCDtlYTthLDrp4Eo7J2064+Z7Y+J6regLCDqsIDsmrDsi5zslYgg7Iqk66y065SpKSDqtaztmIQg6rK97ZeY7J20IOyeiOyKteuLiOuLpC5cIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRnJvbnRlbmQgLyBHVUlcIixcbiAgICBjb250ZW50czogW1xuICAgICAgXCJSZWFjdOulvCDtmZzsmqntlZwg7Ju5IOqwnOuwnCDqsr3tl5jsnbQg7J6I7Iq164uI64ukLlwiLFxuICAgICAgXCJUa2ludGVy66W8IO2ZnOyaqe2VnCDrjbDsiqTtgazthrEgR1VJIOyVoO2UjOumrOy8gOydtOyFmCDqsJzrsJwg6rK97ZeY7J20IOyeiOyKteuLiOuLpC5cIixcbiAgICAgIFwiRkZtcGVn66W8IO2ZnOyaqe2VnCDrr7jrlJTslrQg7YyM7J28IOyymOumrCDrsI8g67OA7ZmYIOqyve2XmOydtCDsnojsirXri4jri6QuXCIsXG4gICAgICBcIk5leHQuanProZwg67iU66Gc6re466W8IOyngeygkSDqsJzrsJztlZjsl6wg7Jq07JiB7ZWY6rOgIOyeiOyKteuLiOuLpC5cIixcbiAgICBdLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGNhcmVlcnMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCLrsJTrpbjtlLzslaTti7BcIixcbiAgICBkYXRlOiBcIjIwMjQuMDggfiAyMDI1LjEyXCIsXG4gICAgYWJvdXQ6IFwiQlRMIE1hcmtldGVyXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgYWN0aXZpdGllcyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIuyEnOyauOuMgO2Vmeq1kCDrh4zsnbjsp4Dqs7ztlZnqs7xcIixcbiAgICBkYXRlOiBcIu2Vmeu2gOyDnSDsnbjthLQgKDIwMjUuMDYgfiAyMDI1LjEyKVwiLFxuICAgIGFib3V0OiBcIuqwgOy5mCDquLDrsJgg6rO16rCEIO2VmeyKteydmCDtlbTrp4gt7KCE7KCE65GQ7ZS87KeIIOyLoOqyveunnSDquLDsoIQg7Jew6rWsXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJQb2tlbW9uIExMTSDtjIzti7Ag67aE7ISd6riwXCIsXG4gICAgZGF0ZTogXCIyMDI2LjA1ICgx66qFKVwiLFxuICAgIHNraWxsczogW1wiUHl0aG9uXCIsIFwiR29vZ2xlIEdlbWluaVwiLCBcIlBva2VBUElcIiwgXCJNb250ZSBDYXJsbyBTaW11bGF0aW9uXCJdLFxuICAgIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vbGlhbi1ybGEvcG9rZW1vbkxMTVwiLFxuICAgIGFib3V0OiBcIu2PrOy8k+uqrCDssZTtlLzslrjsiqQg7Iux6riA67Cw7YuAIO2MjO2LsOulvCBMTE3qs7wg66qs7YWM7Lm066W866GcIOyLnOuurOugiOydtOyFmOycvOuhnCDrtoTshJ3tlZjripQg64+E6rWsXCIsXG4gICAgY29udGVudHM6IFtcbiAgICAgIFwi66qs7YWM7Lm066W866GcIOyLnOuurOugiOydtOyFmOycvOuhnCA1NuqwnCDrnq3tgrkg7YyM7YuwIOuMgOyDgSDsirnrpaAg7J6Q64+ZIOqzhOyCsFwiLFxuICAgICAgXCLthLTsoJwg67Cw7YuAIOq3nOy5mSDquLDrsJgg7KCE7YisIOyXlOynhCDqtaztmIQgKOuplOqwgOynhO2ZlCwg7IOB7YOc7J207IOBLCDquInshowg7Y+s7ZWoKVwiLFxuICAgICAgXCI27ZS9IDPshKAg7Iuc7Iqk7YWcOiDsg4HrjIAg66+466as67O06riwIOq4sOuwmCDstZzsoIEg7Y+s7LyT66qsIOyekOuPmSDshKDtg51cIixcbiAgICAgIFwi7ZWc6rWt7Ja0L+yYgeyWtCDsnbTspJEg7Ja47Ja0IOyeheugpSDsp4Dsm5BcIixcbiAgICAgIFwiR29vZ2xlIEdlbWluaSBBSeuhnCDtjIzti7Ag6rCV7KCQL+yVveygkCDrtoTshJ0g66as7Y+s7Yq4IOyekOuPmSDsg53shLFcIixcbiAgICAgIFwic21hcnRudW8gQVBJICsgUG9rZUFQSSDquLDrsJgg7Y+s7LyT66qsIOuNsOydtO2EsOuyoOydtOyKpCDsnpDrj5kg6rWs7LaVXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIu2WieuPmeyLoOqyveqzvO2VmSDsmIHsg4Eg67aE7ISdIOuPhOq1rFwiLFxuICAgIGRhdGU6IFwiMjAyNi4wNCAoMeuqhSlcIixcbiAgICBza2lsbHM6IFtcIlB5dGhvblwiLCBcIlB5VG9yY2hcIiwgXCJPcGVuQ1ZcIiwgXCJEZWVwTGFiQ3V0XCIsIFwiRWFzeU9DUlwiLCBcIlRraW50ZXJcIl0sXG4gICAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9saWFuLXJsYS9WaWRlby1Bc3Npc3RhbmNlXCIsXG4gICAgYWJvdXQ6IFwi7ZW066eIIO2VmeyKtSDsl7Dqtazrpbwg7JyE7ZWcIO2WieuPmSDsmIHsg4Eg67aE7ISdIO2Gte2VqSBHVUkg64+E6rWsXCIsXG4gICAgY29udGVudHM6IFtcbiAgICAgIFwiRWFzeU9DUuydhCDtmZzsmqntlZwg7JiB7IOBIOuCtCDtg4DsnoTsiqTtg6ztlIQg7J6Q64+ZIOy2lOy2nCDrsI8gQ1NWIOyggOyepVwiLFxuICAgICAgXCLsnbTrsqTtirgg66Gc6re4IOq4sOuwmCDtlITroIjsnoQg6rCV7ZmUIOyymOumrCDtjIzsnbTtlITrnbzsnbgg6rWs7ZiEXCIsXG4gICAgICBcIkRlZXBMYWJDdXQg7KKM7ZGcIOuNsOydtO2EsOulvCDtmZzsmqntlZwg7KCV7KeAL+ydtOuPmSDtlonrj5kg7J6Q64+ZIOu2hOulmFwiLFxuICAgICAgXCLrtoTshJ0g6rKw6rO866W8IOyYgeyDgSDsnITsl5Ag7YWN7Iqk7Yq4IOyYpOuyhOugiOydtOuhnCDstpzroKVcIixcbiAgICAgIFwiUHlUb3JjaCBHUFUg6rCA7IaN7J2EIO2Gte2VnCDruaDrpbgg7JiB7IOBIOyymOumrFwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJCVlQg7Lih7KCVIOyehOuyoOuUlOuTnCDsi5zsiqTthZxcIixcbiAgICBkYXRlOiBcIjIwMjYuMDQgKDHrqoUpXCIsXG4gICAgc2tpbGxzOiBbXCJQeXRob25cIiwgXCJSYXNwYmVycnkgUGlcIiwgXCJNQVgzMDEwMlwiLCBcIk51bVB5XCIsIFwiU2NpUHlcIiwgXCJNYXRwbG90bGliXCJdLFxuICAgIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vbGlhbi1ybGEvQlZULW1lYXN1cmVtZW50LWVtYmVkZGVkLXN5c3RlbVwiLFxuICAgIGFib3V0OiBcIuudvOymiOuyoOumrO2MjOydtOyZgCBQUEcg7IS87ISc66W8IO2ZnOyaqe2VnCDruYTsuajsirXsoIEg64+Z66el6rK97ZmU64+EIOy4oeyglSDsi5zsiqTthZxcIixcbiAgICBjb250ZW50czogW1xuICAgICAgXCJNQVgzMDEwMiDshLzshJwg6riw67CYIOyLpOyLnOqwhCBQUEcg7Iug7Zi4IOyImOynkSAoSTJDIO2GteyLoCwgMjVIeiDsg5jtlIzrp4EpXCIsXG4gICAgICBcIuydtOuPme2Pieq3oCArIOqwgOyasOyLnOyViCDsiqTrrLTrlKkg64uk64uo6rOEIO2VhO2EsOungeycvOuhnCDrhbjsnbTspogg7KCc6rGwXCIsXG4gICAgICBcIkFQRyDsi6DtmLjsnZggYi9kIO2PrOyduO2KuCDsnpDrj5kg6rKA7LacIOuwjyDrj5nrp6Ug7IaN64+EIOyngOyImChBVkkpIOqzhOyCsFwiLFxuICAgICAgXCLsi6zrsJXsiJgg67CPIO2YiOykkSDsgrDshoztj6ztmZTrj4Qg7J6Q64+ZIOy4oeyglVwiLFxuICAgICAgXCLsm5Dsi5wg7Iug7Zi4IOuwjyDsspjrpqwg7Iug7Zi4IOyLpOyLnOqwhCDsi5zqsIHtmZRcIixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiVC3rr7jroZwg7Iuk7ZeYIOuNsOydtO2EsCDrtoTshJ0g64+E6rWsXCIsXG4gICAgZGF0ZTogXCIyMDI2LjA0ICgx66qFKVwiLFxuICAgIHNraWxsczogW1wiUHl0aG9uXCIsIFwiUGFuZGFzXCIsIFwiTnVtUHlcIiwgXCJNYXRwbG90bGliXCIsIFwiU2VhYm9yblwiLCBcIlRraW50ZXJcIl0sXG4gICAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9saWFuLXJsYS9NYWluLVRhc2stRGFpbHktRGF0YS1UYWJsZVwiLFxuICAgIGFib3V0OiBcIuylkCBULeuvuOuhnCDtlonrj5kg7Iuk7ZeY7J2YIOydvOydvCDrjbDsnbTthLDrpbwg7J6Q64+ZIOu2hOyEncK37Iuc6rCB7ZmU7ZWY64qUIOyXsOq1rCDrs7TsobAg64+E6rWsXCIsXG4gICAgY29udGVudHM6IFtcbiAgICAgIFwi7IS47IWY67OEIOyLnO2WiSDsp4Dsl7Dsi5zqsIQg67CPIOyEoO2DnSDrsKntlqUg7Iuc6rCB7ZmUXCIsXG4gICAgICBcIuyepeuptOuzhChaZWJyYS9QZWJibGVzKSDsoJXri7XrpaAg7LaU7J20IOu2hOyEnSAoNzUlIOq4sOykgOyEoCDtkZzsi5wpXCIsXG4gICAgICBcIuyngOyXsOyLnOqwhCDrsJXsiqTtlIzroa8g67CPIO2WieuPmSDshLnshZjrs4QoQWxwaGEvQmV0YS9HYW1tYSkg7Iuc6rCEIOu2hOyEnVwiLFxuICAgICAgXCLrgqDsp5zrs4Qg7ZWZ7Iq1IOynhO2WieuPhCDsnpDrj5kg7LaU7KCBIOuwjyDsiqTtg50g7LCo7Yq4IOyDneyEsVwiLFxuICAgICAgXCJHVUkg6riw67CYIO2PtOuNlCDshKDtg50g67CPIOyLpO2XmCDrqZTtg4DrjbDsnbTthLAg7J6F66ClXCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlNFQyDsmIHsg4Eg67OA7ZmYIEdVSSDrj4TqtaxcIixcbiAgICBkYXRlOiBcIjIwMjYuMDMgKDHrqoUpXCIsXG4gICAgc2tpbGxzOiBbXCJQeXRob25cIiwgXCJGRm1wZWdcIiwgXCJUa2ludGVyXCJdLFxuICAgIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vbGlhbi1ybGEvY29udmVydGVyX0dVSVwiLFxuICAgIGFib3V0OiBcIuuztOyViCBEVlIg7KCE7JqpIC5zZWMg7Y+s66e3IOyYgeyDgeydhCDtkZzspIAg7Y+s66e37Jy866GcIOuzgO2ZmO2VmOuKlCBHVUkg7JWxXCIsXG4gICAgY29udGVudHM6IFtcbiAgICAgIFwi67Cw7LmYIO2PtOuNlCDrs4DtmZgg67CPIOyerOq3gOyggSDtlZjsnIQg7Y+0642UIOyKpOy6lCDsp4Dsm5BcIixcbiAgICAgIFwiTVA0KEguMjY0KSwgQVZJKE1QRUctNCksIE1PVihILjI2NCkg64uk7KSRIOy2nOugpSDtj6zrp7cg7KeA7JuQXCIsXG4gICAgICBcIu2UhOugiOyehOugiOydtO2KuCwg7ZKI7KeIKENSRiksIO2VtOyDgeuPhCDsu6TsiqTthYAg7ISk7KCVIOq4sOuKpVwiLFxuICAgICAgXCLsnbTspJEg7KeE7ZaJIOuwlCDrsI8g7Iuk7Iuc6rCEIOuhnOq3uCDssL3snLzroZwg67OA7ZmYIOyDge2DnCDrqqjri4jthLDrp4FcIixcbiAgICAgIFwi67OA7ZmYIOyLpO2MqCDsi5wg7J6Q64+ZIOyerOyLnOuPhCDrsI8g7Y+067CxIOuqqOuTnCDqtaztmIRcIixcbiAgICBdLFxuICB9LFxuXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=