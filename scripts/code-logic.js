document.addEventListener("DOMContentLoaded", () => {
  (document.querySelectorAll(".notification .delete") || []).forEach(
    ($delete) => {
      const $notification = $delete.parentNode;

      $delete.addEventListener("click", () => {
        $notification.parentNode.removeChild($notification);
      });
    }
  );
});

function getRandomLevel(e) {
  let combinedLevels = [];
  let randomLevel;
  var selectedValues = document.querySelectorAll("input:checked");
  if (selectedValues.length > 0) {
    for (let index = 0; index < selectedValues.length; index++) {
      const CURRENT_VALUE = selectedValues[index].value;
      combinedLevels = combinedLevels.concat(
        Object.values(BABA_LEVELS)[CURRENT_VALUE]
      );
    }
    randomLevel =
      combinedLevels[Math.floor(Math.random() * combinedLevels.length)];
    switchView(randomLevel);
  }
}

function switchView(randomLevel) {
  let formDiv = document.getElementById("baba-form");
  let levelCodeDiv = document.getElementById("baba-get-level");
  let levelCodeContainer = document.getElementById("baba-level-code");
  formDiv.style.display = "none";
  levelCodeDiv.style.display = "block";
  levelCodeContainer.value = randomLevel;
}

function resetView() {
  let formDiv = document.getElementById("baba-form");
  let levelCodeDiv = document.getElementById("baba-get-level");
  let levelCodeContainer = document.getElementById("baba-level-code");
  let checkboxes = document.querySelectorAll("input");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].type == "checkbox") {
      checkboxes[i].checked = false;
    }
  }
  formDiv.style.display = "block";
  levelCodeDiv.style.display = "none";
  levelCodeContainer.value = "";
}

function copyText(e) {
  var copyText = document.getElementById("baba-level-code");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);

  showSnackbar();
}

function showSnackbar() {
  var snackbarElement = document.getElementById("snackbar");

  snackbarElement.className = "show";

  setTimeout(function () {
    snackbarElement.className = snackbarElement.className.replace("show", "");
  }, 3000);
}

const BABA_LEVELS = {
  CHILL_LEVELS: [
    "UU9E-QU6K",
    "4D7L-R7BK",
    "6YV9-NHQJ",
    "X99M-8GN9",
    "3DAQ-Y46Y",
    "JL4Z-GE63",
    "AUEK-R3JI",
    "J3CH-UEUI",
    "3N3W-3AU8",
    "ERB4-LPPH",
    "W8GN-ZTJU",
    "AIYR-7B96",
    "U7AG-WE4M",
    "C22U-89E9",
    "V1HA-QL2Q",
    "827E-7TWL",
    "A3MA-QLCL",
    "LZPW-D3GC",
    "X9VE-WLME",
    "R9VQ-A2EA",
    "RFAQ-VWBF",
    "GTXT-GRT6",
    "IX1I-7GZJ",
    "R1UV-3WDT",
    "PU31-NLA6",
    "9BRF-ZVW7",
    "HW69-EL4I",
    "GZ7H-NRNL",
    "LF1Z-EV9F",
    "3BHQ-6WZ3",
    "CHE4-9HWQ",
    "L9R8-F3R1",
    "GEC3-UDH2",
    "GV3W-A9DZ",
    "1R2Q-MHGR",
    "K9VI-QC1G",
    "L1ZB-PMDD",
    "7ZIL-PDPM",
    "I3IP-Z3I3",
    "XILA-RG8N",
    "AEMU-H2I8",
    "CYAB-IHJR",
    "483H-3U3E",
    "V2KA-CNQL",
    "8YF8-Y9HP",
    "6ZJR-P3JR",
    "HFYB-N6TF",
    "DWI1-4FBX",
    "442V-U7JK",
    "A9D3-GTKJ",
    "W82V-VZYC",
    "Z2P4-9KTN",
    "8EZ7-6L8N",
    "J2XU-R8DA",
    "H431-4987",
    "9C4A-HQYE",
    "BBAH-9BPX",
    "HFFV-VPFD",
    "UWVX-CHVJ",
  ],
  EUREKA_LEVEL: [
    "AL96-R71L",
    "M8BI-XW4Q",
    "7RL2-FURD",
    "QX28-YZQU",
    "G2EC-GV4T",
    "3AB3-QTE8",
    "8J22-8UEH",
    "XR1V-2IPN",
    "LYY9-R3IY",
    "T6GP-74DH",
    "WN4D-WQXT",
    "VJ7Y-YE7X",
    "BTQT-TH3T",
    "H1B1-48JP",
    "3922-99ZF",
    "PJHK-DIV3",
    "F6DP-RHP7",
    "3G22-JAGH",
    "MP4C-GV9T",
    "TI37-2FP7",
    "7Q4F-BV1N",
    "JU48-MGQK",
    "MZDH-CLED",
    "463B-FW3P",
    "8J8T-IB4W",
    "QK3D-GCPA",
    "LDF1-83XC",
    "3233-RTF9",
    "BM39-GY6J",
    "HTD2-MQUC",
    "6YER-JTCL",
    "FY6C-PV88",
    "ZXHX-Z6YP",
    "9LKP-2RFT",
    "CGJF-2WTF",
    "GZIJ-LVTB",
    "MMIT-W9J7",
    "32BN-TYA8",
    "3VPF-7I7P",
    "MTEZ-N9WL",
    "CZQ8-TMQG",
    "LYEB-E9GE",
    "DFPA-RTPX",
    "PPCR-QEDP",
    "37DV-8EJD",
    "UM6J-TYPP",
    "INB6-RPTL",
    "8BAM-WVZW",
    "MIRL-MTB8",
    "HV2G-ZJM6",
    "CJA3-DLNU",
    "DQ2R-8ZAQ",
    "7BPF-YZ24",
    "ZRR2-JQNI",
    "Q2T1-42BD",
    "YCPG-ERXM",
    "ZQYA-W2JC",
    "EDGY-XENN",
    "XIUJ-GDBV",
    "U6CC-LFI3",
    "CIAD-WURC",
  ],
  BOOM_LEVELS: [
    "UTN9-UN84",
    "YMR6-E8KR",
    "YNUM-D8RW",
    "1I1Y-7KJ3",
    "RQJF-NERX",
    "WZVA-QWJB",
    "EVMW-47WG",
    "8999-8YRK",
    "TGBR-AQB9",
    "3CWX-6TZT",
    "A3UU-4K3A",
    "I6EY-17RL",
    "6T2E-88V8",
    "4HM4-UAUV",
    "HURL-HT3V",
    "EZF9-BKZV",
    "B223-NIW3",
    "THQP-XVFE",
    "AE87-PPXI",
    "YRR7-6BNW",
    "9F82-YPAI",
    "HEBQ-FXVP",
    "UM68-PUYW",
    "BZCL-3C99",
    "6DU7-DFFB",
    "KYGQ-GD4E",
    "EWAT-4TTB",
    "ILYN-MLM2",
    "FDVJ-34ZG",
    "ZIVC-76F7",
    "4GVH-W743",
    "TJ8Y-4P7G",
    "3HAX-ZRKQ",
    "N936-NJ1U",
    "X9B4-16QZ",
    "ZWQI-QQVQ",
    "4CQM-A8V6",
    "6AG1-H3JI",
    "FA3P-YLWJ",
    "IDVB-AL6V",
    "Q69H-MJFB",
    "TDVN-YFZW",
    "JEUE-JRA8",
    "ZWU1-2U3X",
    "KJN2-D3VI",
    "7U1U-QUT1",
    "84AP-76QB",
  ],
  COMFY_LEVELS: [
    "YTE7-TNEE",
    "GJNK-RZBD",
    "4XW3-R933",
    "ZNGM-T4F6",
    "6BV9-B7X2",
    "1R26-2WD2",
    "1QC2-82H6",
    "KCUC-UIPW",
    "YPPD-QPPR",
    "RNFL-ATH9",
    "V8B7-J1HB",
    "KXW3-VMXR",
    "FUUB-CKG7",
    "KM1W-P6R4",
    "2DKJ-KVEL",
    "FPXP-AA1A",
    "R21N-1FW1",
    "QDHZ-GDYJ",
    "NCYG-HGTA",
    "LDW2-6FA9",
    "G9Y7-1UHD",
    "DLBM-LXH7",
    "7XUK-YKM7",
    "BX91-FG4Y",
    "WECF-76YA",
    "VJVI-RXVV",
    "67H7-A8YM",
    "H431-4987",
    "9C4A-HQYE",
    "BBAH-9BPX",
    "HFFV-VPFD",
    "772I-B1TT",
  ],
};
