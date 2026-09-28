(function () {
  'use strict';

  /* =====================================================
     1. 基础数据
     ===================================================== */
  var ENGINES = [
    {
      id: 'google',
      name: 'Google',
      url: 'https://www.google.com/search?q=',
      icon: 'data:image/svg+xml;base64,PCEtLSBMaWNlbnNlOiBNSVQuIE1hZGUgYnkgZWRlbnQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9lZGVudC9TdXBlclRpbnlJY29ucyAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCmFyaWEtbGFiZWw9Ikdvb2dsZSIgcm9sZT0iaW1nIgp2aWV3Qm94PSIwIDAgNTEyIDUxMiI+CiAgPHBhdGggZmlsbD0iIzQyODVmNCIgZD0iTTM4NiA0MDBjNDUtNDIgNjUtMTEyIDUzLTE3OUgyNjB2NzRoMTAyYy00IDI0LTE4IDQ0LTM4IDU3eiIvPgogIDxwYXRoIGZpbGw9IiMzNGE4NTMiIGQ9Ik05MCAzNDFhMTkyIDE5MiAwIDAgMCAyOTYgNTlsLTYyLTQ4Yy01MyAzNS0xNDEgMjItMTcxLTYweiIvPgogIDxwYXRoIGZpbGw9IiNmYmJjMDIiIGQ9Ik0xNTMgMjkyYy04LTI1LTgtNDggMC03M2wtNjMtNDljLTIzIDQ2LTMwIDExMSAwIDE3MXoiLz4KICA8cGF0aCBmaWxsPSIjZWE0MzM1IiBkPSJNMTUzIDIxOWMyMi02OSAxMTYtMTA5IDE3OS01MGw1NS01NGMtNzgtNzUtMjMwLTcyLTI5NyA1NXoiLz4KPC9zdmc+'
    },
    {
      id: 'baidu',
      name: 'Baidu',
      url: 'https://www.baidu.com/s?wd=',
      icon: 'data:image/svg+xml;base64,PCEtLSBMaWNlbnNlOiBNSVQuIE1hZGUgYnkgZWRlbnQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9lZGVudC9TdXBlclRpbnlJY29ucyAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCmFyaWEtbGFiZWw9IkJhaWR1IiByb2xlPSJpbWciCnZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KICA8cGF0aCBkPSJtMTMxIDI1MWM0MS05IDM1LTU4IDM0LTY4LTItMTctMjEtNDUtNDgtNDMtMzMgMy0zNyA1MC0zNyA1MC01IDIyIDEwIDcwIDUxIDYxbTc2LTgyYzIyIDAgNDAtMjYgNDAtNThzLTE4LTU4LTQwLTU4Yy0yMyAwLTQxIDI2LTQxIDU4czE4IDU4IDQxIDU4bTk2IDRjMzEgNCA1MC0yOCA1NC01MyA0LTI0LTE2LTUyLTM3LTU3cy00OCAyOS01MCA1MmMtMyAyNyAzIDU0IDMzIDU4bTEyMCA0MWMwLTEyLTEwLTQ3LTQ2LTQ3cy00MSAzMy00MSA1N2MwIDIyIDIgNTMgNDcgNTJzNDAtNTEgNDAtNjJtLTQ2IDEwMnMtNDYtMzYtNzQtNzVjLTM2LTU3LTg5LTM0LTEwNi01LTE4IDI5LTQ1IDQ4LTQ5IDUzLTQgNC01NiAzMy00NCA4NCAxMSA1MiA1MiA1MSA1MiA1MXMzMCAzIDY1LTUgNjUgMiA2NSAyIDgxIDI3IDEwNC0yNWMyMi01My0xMy04MC0xMy04MCIgZmlsbD0iIzIzMTlkYyIvPgogIDxwYXRoIGQ9Im0yMTQgMjY2djM0aC0yOHMtMjkgMy0zOSAzNWMtMyAyMSA0IDM0IDUgMzYgMSAzIDEwIDE5IDMzIDIzaDUzdi0xMjh6bS0xIDEwN2gtMjFzLTE1LTEtMTktMThjLTMtNyAwLTE2IDEtMjAgMS0zIDYtMTEgMTctMTRoMjJ6bTM4LTcwdjY4czEgMTcgMjQgMjNoNjF2LTkxaC0yNnY2OGgtMjVzLTgtMS0xMC03di02MXoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+'
    },
    {
      id: 'yandex',
      name: 'Yandex',
      url: 'https://yandex.com/search/?text=',
      icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9Ii03LjUgLTIgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0ibTUuMiAyNHYtNy43ODZsLTUuMi0xMy45NjRoMi42MTZsMy44MzQgMTAuNzY3IDQuNDEtMTMuMDE4aDIuNDA1bC01LjY1OCAxNi4zMDN2Ny42OTd6IiBmaWxsPSIjRkY2NjAwIi8+Cjwvc3ZnPg=='
    },
    {
      id: 'ddg',
      name: 'DuckDuckGo',
      url: 'https://duckduckgo.com/?q=',
      icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCmFyaWEtbGFiZWw9IkR1Y2tEdWNrR28iIHJvbGU9ImltZyIKdmlld0JveD0iLTEyOCAtMTI4IDI1NiAyNTYiIGZpbGw9IiNmZmYiPgogIDxjaXJjbGUgcj0iMTA4IiBmaWxsPSIjZDUzMyIvPgogIDxjaXJjbGUgcj0iOTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI3Ii8+CiAgPHBhdGggZD0iTS0zMi01NUMtNjItNDgtNTEtNi01MS02bDE5IDkzIDcgM00tMzktNzNoLThsMTEgNHMtMTEgMC0xMSA3YzI0LTEgMzUgNSAzNSA1IiBmaWxsPSIjZGRkIi8+CiAgPHBhdGggZD0iTTI1IDk1UzEgNTcgMSAzMmMwLTQ3IDMxLTcgMzEtNDRTMS01OCAxLTU4Yy0xNS0xOS00NC0xNS00NC0xNWw3IDRzLTcgMi05IDQgMTktMyAyOCA1Yy0zNyAzLTMxIDMzLTMxIDMzbDIxIDEyMCIvPgogIDxwYXRoIGQ9Ik0yNS0xbDM4LTEwYzM0IDUtMjkgMjQtMzMgMjNDMCA3IDkgMzIgNDUgMjRzOSAyMC0yNCA5Qy0yNiAyMC0xLTMgMjUtMSIgZmlsbD0iI2ZjMCIvPgogIDxwYXRoIGQ9Ik0xNSA3OGwyLTNjMjIgOCAyMyAxMSAyMi05czAtMjAtMjMtM2MwLTUtMTMtMy0xNSAwLTIxLTktMjMtMTItMjIgMiAyIDI5IDEgMjQgMjEgMTQiIGZpbGw9IiM2YjUiLz4KICA8cGF0aCBkPSJNLTEgNjd2MTJjMSAyIDE3IDIgMTctMnMtOCAzLTEzIDEtMi0xMy0yLTEzIiBmaWxsPSIjNGE0Ii8+CiAgPHBhdGggZD0iTS0yMy0zMmMtNS02LTE4LTEtMTUgNyAxLTQgOC0xMCAxNS03bTMyIDBjMS02IDExLTcgMTQtMS00LTItMTAtMi0xNCAxbS0zMyAxNmEyIDIgMCAxIDEgMCAxbS04IDNhNyA3IDAgMSAwIDAtMW01Mi02YTIgMiAwIDEgMSAwIDFtLTYgM2E2IDYgMCAxIDAgMC0xIiBmaWxsPSIjMTQ4Ii8+Cjwvc3ZnPg=='
    },
    {
      id: 'bing',
      name: 'Bing',
      url: 'https://www.bing.com/search?q=',
      icon: 'data:image/svg+xml;base64,PCEtLSBMaWNlbnNlOiBNSVQuIE1hZGUgYnkgZWRlbnQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9lZGVudC9TdXBlclRpbnlJY29ucyAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCmFyaWEtbGFiZWw9IkJpbmciIHJvbGU9ImltZyIKdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxwYXRoIGQ9Ik0xNDUsNzNsNzMsMjZWMzU2bDEwMy01OS01MC0yNC0zMi03OSwxNjIsNTd2ODNMMjE4LDQzOWwtNzMtNDFaIiBmaWxsPSIjMDA4MzczIi8+Cjwvc3ZnPg=='
    }
  ];

  var LS_ENGINE = 'startpage.engine';
  var LS_THEME  = 'startpage.theme';
  var LS_LANG   = 'startpage.lang';
  var LS_HIDDEN = 'startpage.hiddenEngines';

  var body       = document.body;
  var enginesEl  = document.getElementById('engines');
  var form       = document.getElementById('searchForm');
  var input      = document.getElementById('q');
  var themeBtn   = document.getElementById('themeToggle');
  var langBtn    = document.getElementById('langToggle');
  var submitBtn  = form.querySelector('.submit');
  var buttons    = [];

  var ctxMenu        = document.getElementById('contextMenu');
  var menuUpload     = document.getElementById('menuUpload');
  var menuReset      = document.getElementById('menuReset');
  var menuUploadText = document.getElementById('menuUploadText');
  var menuResetText  = document.getElementById('menuResetText');

  var inputMenu     = document.getElementById('inputMenu');
  var menuCut       = document.getElementById('menuCut');
  var menuCopy      = document.getElementById('menuCopy');
  var menuPaste     = document.getElementById('menuPaste');
  var menuCutText   = document.getElementById('menuCutText');
  var menuCopyText  = document.getElementById('menuCopyText');
  var menuPasteText = document.getElementById('menuPasteText');

  var engineMenu   = document.getElementById('engineMenu');
  var menuHide     = document.getElementById('menuHide');
  var menuShow     = document.getElementById('menuShow');
  var menuHideText = document.getElementById('menuHideText');
  var menuShowText = document.getElementById('menuShowText');

  var fileInput = document.getElementById('bgFile');
  var toastEl   = document.getElementById('toast');

  /* =====================================================
     2. 多语言文案
     ===================================================== */
  var I18N = {
    'zh-Hans': {
      title:      '澄浅标签页',
      searchWith: function (name) { return '使用 ' + name + ' 搜索'; },
      search:     '搜索',
      engines:    '搜索引擎',
      toDark:     '切换到深色模式',
      toLight:    '切换到浅色模式',
      langAria:   '切换语言，当前为中文',
      pageMenu:   '页面菜单',
      editMenu:   '编辑菜单',
      engineMenu: '搜索引擎菜单',
      menuUpload: '上传背景图片',
      menuReset:  '恢复默认背景',
      cut:        '剪切',
      copy:       '复制',
      paste:      '粘贴',
      hide:       '隐藏',
      show:       '显示',
      bgTooLarge: '图片大小不能超过 50MB',
      bgNotImage: '请选择图片文件',
      bgFailed:   '图片处理失败，请重试'
    },
    'zh-Hant': {
      title:      '澄淺標籤頁',
      searchWith: function (name) { return '使用 ' + name + ' 搜尋'; },
      search:     '搜尋',
      engines:    '搜尋引擎',
      toDark:     '切換至深色模式',
      toLight:    '切換至淺色模式',
      langAria:   '切換語言，目前為中文',
      pageMenu:   '頁面選單',
      editMenu:   '編輯選單',
      engineMenu: '搜尋引擎選單',
      menuUpload: '上傳背景圖片',
      menuReset:  '恢復預設背景',
      cut:        '剪下',
      copy:       '複製',
      paste:      '貼上',
      hide:       '隱藏',
      show:       '顯示',
      bgTooLarge: '圖片大小不能超過 50MB',
      bgNotImage: '請選擇圖片檔案',
      bgFailed:   '圖片處理失敗，請重試'
    },
    'en': {
      title:      'PaleasyTab',
      searchWith: function (name) { return 'Search with ' + name; },
      search:     'Search',
      engines:    'Search engines',
      toDark:     'Switch to dark mode',
      toLight:    'Switch to light mode',
      langAria:   'Switch language, currently English',
      pageMenu:   'Page menu',
      editMenu:   'Edit menu',
      engineMenu: 'Search engine menu',
      menuUpload: 'Upload background image',
      menuReset:  'Restore default background',
      cut:        'Cut',
      copy:       'Copy',
      paste:      'Paste',
      hide:       'Hide',
      show:       'Show',
      bgTooLarge: 'Image must be no larger than 50 MB',
      bgNotImage: 'Please choose an image file',
      bgFailed:   'Failed to process the image'
    }
  };

  function systemLang() {
    return String(navigator.language || navigator.userLanguage || 'en')
      .toLowerCase();
  }

  function detectDefaultMode() {
    return systemLang().indexOf('zh') === 0 ? 'zh' : 'en';
  }

  function resolveLocale(mode) {
    if (mode !== 'zh') return 'en';
    var l = systemLang();
    return /hant|tw|hk|mo/.test(l) ? 'zh-Hant' : 'zh-Hans';
  }

  function currentTexts() {
    return I18N[resolveLocale(langMode)];
  }

  /* =====================================================
     3. 状态初始化
     ===================================================== */
  var theme = 'light';
  try {
    if (localStorage.getItem(LS_THEME) === 'dark') theme = 'dark';
  } catch (e) {}

  var langMode = null;
  try { langMode = localStorage.getItem(LS_LANG); } catch (e) {}
  if (langMode !== 'zh' && langMode !== 'en') {
    langMode = detectDefaultMode();
    try { localStorage.setItem(LS_LANG, langMode); } catch (e) {}
  }

  var savedEngine = null;
  try { savedEngine = localStorage.getItem(LS_ENGINE); } catch (e) {}
  var current = (savedEngine && ENGINES.some(function (e) {
    return e.id === savedEngine;
  })) ? savedEngine : 'google';

  /* =====================================================
     4. 文案刷新
     ===================================================== */
  function updateTexts() {
    var loc = resolveLocale(langMode);
    var t   = I18N[loc];

    document.documentElement.lang = loc;
    document.title = t.title;
    body.classList.toggle('lang-en', langMode === 'en');

    input.placeholder = t.searchWith(engineById(current).name);
    input.setAttribute('aria-label', t.search);
    submitBtn.setAttribute('aria-label', t.search);
    enginesEl.setAttribute('aria-label', t.engines);
    langBtn.setAttribute('aria-label', t.langAria);
    themeBtn.setAttribute('aria-label',
      theme === 'dark' ? t.toLight : t.toDark);

    menuUploadText.textContent = t.menuUpload;
    menuResetText.textContent  = t.menuReset;
    menuUpload.setAttribute('aria-label', t.menuUpload);
    menuReset.setAttribute('aria-label', t.menuReset);
    ctxMenu.setAttribute('aria-label', t.pageMenu);

    menuCutText.textContent   = t.cut;
    menuCopyText.textContent  = t.copy;
    menuPasteText.textContent = t.paste;
    menuCut.setAttribute('aria-label', t.cut);
    menuCopy.setAttribute('aria-label', t.copy);
    menuPaste.setAttribute('aria-label', t.paste);
    inputMenu.setAttribute('aria-label', t.editMenu);

    menuHideText.textContent = t.hide;
    menuShowText.textContent = t.show;
    menuHide.setAttribute('aria-label', t.hide);
    menuShow.setAttribute('aria-label', t.show);
    engineMenu.setAttribute('aria-label', t.engineMenu);

    for (var i = 0; i < buttons.length; i++) {
      var engine = engineById(buttons[i].dataset.id);
      buttons[i].title = engine.name;
      buttons[i].setAttribute('aria-label', t.searchWith(engine.name));
    }
  }

  /* =====================================================
     5. 主题
     ===================================================== */
  function applyTheme(mode) {
    theme = mode;
    body.classList.toggle('dark', mode === 'dark');
    try { localStorage.setItem(LS_THEME, mode); } catch (e) {}
    updateTexts();
  }
  applyTheme(theme);

  themeBtn.addEventListener('click', function () {
    applyTheme(theme === 'dark' ? 'light' : 'dark');
    this.blur();
  });

  /* =====================================================
     6. 语言滑块
     ===================================================== */
  function applyLang(mode) {
    langMode = mode;
    try { localStorage.setItem(LS_LANG, mode); } catch (e) {}
    updateTexts();
  }
  applyLang(langMode);

  langBtn.addEventListener('click', function () {
    applyLang(langMode === 'zh' ? 'en' : 'zh');
    this.blur();
  });

  /* =====================================================
     7. 搜索引擎
     ===================================================== */
  function engineById(id) {
    for (var i = 0; i < ENGINES.length; i++) {
      if (ENGINES[i].id === id) return ENGINES[i];
    }
    return ENGINES[0];
  }

  function btnById(id) {
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].dataset.id === id) return buttons[i];
    }
    return null;
  }

  buttons = ENGINES.map(function (engine) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'engine';
    btn.dataset.id = engine.id;
    btn.tabIndex = -1;
    btn.setAttribute('aria-pressed', 'false');
    btn.title = engine.name;

    var img = document.createElement('img');
    img.src = engine.icon;
    img.alt = '';
    img.draggable = false;
    img.setAttribute('aria-hidden', 'true');
    btn.appendChild(img);

    // 阻止 mousedown 夺走输入框焦点，避免透明度闪动
    btn.addEventListener('mousedown', function (e) {
      e.preventDefault();
    });

    btn.addEventListener('click', function () {
      setEngine(engine.id);
      input.focus();
    });
    enginesEl.appendChild(btn);
    return btn;
  });

  function setEngine(id) {
    current = id;
    try { localStorage.setItem(LS_ENGINE, id); } catch (e) {}

    buttons.forEach(function (btn) {
      var on = btn.dataset.id === id;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    updateTexts();
  }
  setEngine(current);

  function rotateEngine(step) {
    var idx = 0;
    for (var i = 0; i < ENGINES.length; i++) {
      if (ENGINES[i].id === current) { idx = i; break; }
    }
    var next = ENGINES[(idx + step + ENGINES.length) % ENGINES.length];
    setEngine(next.id);
  }

  /* =====================================================
     8. 引擎按钮隐藏 / 显示
     ===================================================== */
  var hiddenEngines = {};
  var contextEngineId = null;

  (function loadHidden() {
    var raw = null;
    try { raw = localStorage.getItem(LS_HIDDEN); } catch (e) {}
    if (!raw) return;
    try {
      var arr = JSON.parse(raw);
      if (!Array.isArray(arr)) return;
      arr.forEach(function (id) {
        if (ENGINES.some(function (en) { return en.id === id; })) {
          hiddenEngines[id] = true;
        }
      });
    } catch (e) {}
  })();

  function saveHidden() {
    try {
      localStorage.setItem(LS_HIDDEN, JSON.stringify(Object.keys(hiddenEngines)));
    } catch (e) {}
  }

  function visibleEngineCount() {
    var n = 0;
    for (var i = 0; i < ENGINES.length; i++) {
      if (!hiddenEngines[ENGINES[i].id]) n++;
    }
    return n;
  }

  function hiddenEngineCount() {
    return ENGINES.length - visibleEngineCount();
  }

  function applyHiddenState() {
    for (var i = 0; i < ENGINES.length; i++) {
      var btn = btnById(ENGINES[i].id);
      if (btn) btn.classList.toggle('is-hidden', !!hiddenEngines[ENGINES[i].id]);
    }
  }

  function updateEngineMenuState() {
    menuHide.disabled = !contextEngineId;
    menuShow.disabled = hiddenEngineCount() === 0;
  }

  applyHiddenState();

  menuHide.addEventListener('click', function () {
    closeMenus();
    if (!contextEngineId) return;
    hiddenEngines[contextEngineId] = true;
    applyHiddenState();
    saveHidden();
  });

  menuShow.addEventListener('click', function () {
    closeMenus();
    hiddenEngines = {};
    applyHiddenState();
    saveHidden();
  });

  /* =====================================================
     9. 键盘交互
     ===================================================== */
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      rotateEngine(e.shiftKey ? -1 : 1);
      return;
    }
    if (e.key === 'Escape') input.value = '';
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab') return;
    if (document.activeElement === input) return;
    e.preventDefault();
    rotateEngine(e.shiftKey ? -1 : 1);
    input.focus();
  });

  /* =====================================================
     10. 提交搜索
     ===================================================== */
  function currentSearchUrl() {
    var q = input.value.trim();
    if (!q) return null;
    return engineById(current).url + encodeURIComponent(q);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var url = currentSearchUrl();
    if (!url) { input.focus(); return; }
    window.location.href = url;
  });

  function openInNewTab(e) {
    if (e.button !== 1) return;
    e.preventDefault();
    e.stopPropagation();
    var url = currentSearchUrl();
    if (!url) { input.focus(); return; }
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  submitBtn.addEventListener('auxclick', openInNewTab);
  input.addEventListener('auxclick', openInNewTab);

  submitBtn.addEventListener('mousedown', function (e) {
    if (e.button === 1) e.preventDefault();
  });

  /* =====================================================
     11. 轻提示
     ===================================================== */
  var toastTimer = null;
  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove('show');
    }, 2600);
  }

  /* =====================================================
     12. IndexedDB 极简封装
     ===================================================== */
  var DB_NAME  = 'paleasy-tab';
  var DB_VER   = 1;
  var DB_STORE = 'assets';
  var DB_KEY   = 'custom-background';

  function idbOpen() {
    return new Promise(function (resolve, reject) {
      if (!('indexedDB' in window)) {
        reject(new Error('indexeddb-unavailable'));
        return;
      }
      var req = indexedDB.open(DB_NAME, DB_VER);
      req.onupgradeneeded = function () {
        var db = req.result;
        if (!db.objectStoreNames.contains(DB_STORE)) {
          db.createObjectStore(DB_STORE);
        }
      };
      req.onsuccess = function () { resolve(req.result); };
      req.onerror   = function () { reject(req.error); };
    });
  }

  function idbSet(key, value) {
    return idbOpen().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(DB_STORE, 'readwrite');
        tx.objectStore(DB_STORE).put(value, key);
        tx.oncomplete = function () { db.close(); resolve(); };
        tx.onerror    = function () { db.close(); reject(tx.error); };
        tx.onabort    = function () { db.close(); reject(tx.error); };
      });
    });
  }

  function idbGet(key) {
    return idbOpen().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(DB_STORE, 'readonly');
        var rq = tx.objectStore(DB_STORE).get(key);
        rq.onsuccess = function () { resolve(rq.result); };
        rq.onerror   = function () { reject(rq.error); };
        tx.oncomplete = function () { db.close(); };
      });
    });
  }

  function idbDel(key) {
    return idbOpen().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(DB_STORE, 'readwrite');
        tx.objectStore(DB_STORE).delete(key);
        tx.oncomplete = function () { db.close(); resolve(); };
        tx.onerror    = function () { db.close(); reject(tx.error); };
      });
    });
  }

  /* =====================================================
     13. 自定义背景
     ===================================================== */
  var MAX_FILE_SIZE = 50 * 1024 * 1024;
  var MAX_EDGE      = 1920;
  var JPEG_QUALITY  = 0.86;

  var hasCustomBg = false;

  function applyBackground(dataURL) {
    hasCustomBg = true;
    body.classList.add('has-custom-bg');
    body.style.backgroundImage    = 'url("' + dataURL + '")';
    body.style.backgroundSize     = 'cover';
    body.style.backgroundPosition = 'center center';
    body.style.backgroundRepeat   = 'no-repeat';
    body.style.backgroundAttachment = 'fixed';
    updateMenuState();
  }

  function clearBackground() {
    hasCustomBg = false;
    body.classList.remove('has-custom-bg');
    body.style.backgroundImage    = '';
    body.style.backgroundSize     = '';
    body.style.backgroundPosition = '';
    body.style.backgroundRepeat   = '';
    body.style.backgroundAttachment = '';
    updateMenuState();
  }

  function updateMenuState() {
    menuReset.disabled = !hasCustomBg;
  }

  function compressImage(file) {
    return new Promise(function (resolve, reject) {
      var url = URL.createObjectURL(file);
      var img = new Image();

      img.onload = function () {
        URL.revokeObjectURL(url);
        try {
          var w = img.naturalWidth || img.width;
          var h = img.naturalHeight || img.height;
          if (!w || !h) { reject(new Error('bad-image')); return; }

          var scale = Math.min(1, MAX_EDGE / Math.max(w, h));
          var tw = Math.max(1, Math.round(w * scale));
          var th = Math.max(1, Math.round(h * scale));

          var canvas = document.createElement('canvas');
          canvas.width  = tw;
          canvas.height = th;

          var ctx = canvas.getContext('2d');
          ctx.imageSmoothingEnabled = true;
          if ('imageSmoothingQuality' in ctx) {
            ctx.imageSmoothingQuality = 'high';
          }
          ctx.drawImage(img, 0, 0, tw, th);

          var type = /^image\/(png|webp)$/.test(file.type) ? file.type : 'image/jpeg';
          resolve(canvas.toDataURL(type, JPEG_QUALITY));
        } catch (err) {
          reject(err);
        }
      };

      img.onerror = function () {
        URL.revokeObjectURL(url);
        reject(new Error('decode-failed'));
      };

      img.src = url;
    });
  }

  function restoreBackground() {
    idbGet(DB_KEY).then(function (dataURL) {
      if (typeof dataURL === 'string' && dataURL) applyBackground(dataURL);
      else updateMenuState();
    }).catch(function () {
      updateMenuState();
    });
  }
  restoreBackground();

  menuUpload.addEventListener('click', function () {
    closeMenus();
    fileInput.click();
  });

  fileInput.addEventListener('change', function () {
    var file = this.files && this.files[0];
    this.value = '';
    if (!file) return;

    var t = currentTexts();

    if (!/^image\//.test(file.type)) {
      showToast(t.bgNotImage);
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      showToast(t.bgTooLarge);
      return;
    }

    compressImage(file).then(function (dataURL) {
      return idbSet(DB_KEY, dataURL).then(function () {
        applyBackground(dataURL);
      });
    }).catch(function () {
      showToast(currentTexts().bgFailed);
    });
  });

  menuReset.addEventListener('click', function () {
    closeMenus();
    if (!hasCustomBg) return;
    clearBackground();
    idbDel(DB_KEY).catch(function () {});
  });

  /* =====================================================
     14. 自定义右键菜单
     ===================================================== */
  var activeMenu = null;
  var lastOpenTime = 0;

  // 输入框选区快照
  var savedSel = { start: 0, end: 0 };

  function openMenu(menuEl, x, y) {
    // 去抖：长按与 contextmenu 可能几乎同时触发，避免重复打开
    var now = Date.now();
    if (menuEl === activeMenu && now - lastOpenTime < 400) return;
    lastOpenTime = now;

    if (activeMenu && activeMenu !== menuEl) {
      activeMenu.classList.remove('open');
    }
    activeMenu = menuEl;
    menuEl.classList.add('open');

    var pad = 10;
    var w = menuEl.offsetWidth;
    var h = menuEl.offsetHeight;

    var left = Math.min(Math.max(pad, x),
                        Math.max(pad, window.innerWidth - w - pad));
    var top  = Math.min(Math.max(pad, y),
                        Math.max(pad, window.innerHeight - h - pad));

    menuEl.style.left = left + 'px';
    menuEl.style.top  = top  + 'px';
  }

  function closeMenus() {
    if (!activeMenu) return;
    activeMenu.classList.remove('open');
    activeMenu = null;
  }

  /* ---------- 编辑菜单状态 ---------- */
  function updateInputMenuState() {
    var hasSel = savedSel.end > savedSel.start;
    menuCut.disabled  = !hasSel;
    menuCopy.disabled = !hasSel;
    menuPaste.disabled = false;
  }

  function restoreCaret() {
    input.focus({ preventScroll: true });
    try { input.setSelectionRange(savedSel.start, savedSel.end); } catch (err) {}
  }

  /* ---------- 复制 / 剪切 ---------- */
  function doCopy(cut) {
    if (savedSel.end <= savedSel.start) return;
    restoreCaret();

    var ok = false;
    try { ok = document.execCommand(cut ? 'cut' : 'copy'); } catch (err) { ok = false; }

    if (!ok) {
      var text = input.value.slice(savedSel.start, savedSel.end);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(function () {});
      }
      if (cut) input.setRangeText('', savedSel.start, savedSel.end, 'end');
    }

    if (cut) {
      savedSel.start = savedSel.end = input.selectionStart || 0;
    }
  }

  /* ---------- 插入文本 ---------- */
  function insertText(text) {
    input.focus({ preventScroll: true });
    try { input.setSelectionRange(savedSel.start, savedSel.end); } catch (err) {}

    var ok = false;
    try { ok = document.execCommand('insertText', false, text); } catch (err) { ok = false; }

    if (!ok) input.setRangeText(text, savedSel.start, savedSel.end, 'end');

    savedSel.start = savedSel.end = input.selectionStart || 0;
  }

  /* ---------- 降级粘贴 ---------- */
  function legacyPaste() {
    restoreCaret();
    try { document.execCommand('paste'); } catch (err) {}
    savedSel.start = savedSel.end = input.selectionStart || 0;
  }

  /* ---------- 粘贴 ---------- */
  function doPaste() {
    restoreCaret();
    if (navigator.clipboard && navigator.clipboard.readText) {
      navigator.clipboard.readText().then(function (text) {
        if (text) insertText(text);
      }).catch(function () {
        legacyPaste();
      });
    } else {
      legacyPaste();
    }
  }

  menuCut.addEventListener('click', function () { closeMenus(); doCopy(true); });
  menuCopy.addEventListener('click', function () { closeMenus(); doCopy(false); });
  menuPaste.addEventListener('click', function () { closeMenus(); doPaste(); });

  /* ---------- 统一菜单分发逻辑 ---------- */
  function showContextMenuAt(x, y, target) {
    if (target && target.nodeType !== 1) target = target.parentElement;

    // 顶部控件 / 搜索按钮：无菜单
    if (target && target.closest && target.closest('.top-controls, .submit')) {
      closeMenus();
      return;
    }

    // 已有菜单内部：忽略
    if (target && target.closest && target.closest('.context-menu')) {
      return;
    }

    // 搜索引擎按钮：隐藏 / 显示
    var engineBtn = target && target.closest ? target.closest('.engine') : null;
    if (engineBtn) {
      contextEngineId = engineBtn.dataset.id;
      updateEngineMenuState();
      openMenu(engineMenu, x, y);
      return;
    }

    // 引擎容器空白区（含全部隐藏时）
    var engineArea = target && target.closest ? target.closest('.engines') : null;
    if (engineArea) {
      contextEngineId = null;
      updateEngineMenuState();
      openMenu(engineMenu, x, y);
      return;
    }

    // 搜索输入框：剪切 / 复制 / 粘贴
    if (target === input) {
      savedSel.start = input.selectionStart || 0;
      savedSel.end   = input.selectionEnd   || 0;
      updateInputMenuState();
      openMenu(inputMenu, x, y);
      return;
    }

    // 其余区域：页面菜单
    updateMenuState();
    openMenu(ctxMenu, x, y);
  }

  /* ---------- 桌面端右键 ---------- */
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    showContextMenuAt(e.clientX, e.clientY, e.target);
  });

  /* ---------- 移动端长按 ---------- */
  var LONG_PRESS_MS = 500;
  var LONG_PRESS_TOLERANCE = 12;   // 允许手指微动
  var touchInfo = null;

  function cancelLongPress() {
    if (!touchInfo) return;
    clearTimeout(touchInfo.timer);
    touchInfo = null;
  }

  var isTouchDevice = ('ontouchstart' in window) ||
                      (navigator.maxTouchPoints > 0);

  if (isTouchDevice) {
    document.addEventListener('touchstart', function (e) {
      if (e.touches.length !== 1) { cancelLongPress(); return; }
      var t = e.touches[0];
      touchInfo = {
        x: t.clientX,
        y: t.clientY,
        target: e.target,
        fired: false,
        timer: setTimeout(function () {
          if (!touchInfo) return;
          touchInfo.fired = true;
          showContextMenuAt(touchInfo.x, touchInfo.y, touchInfo.target);
        }, LONG_PRESS_MS)
      };
    }, { passive: true });

    document.addEventListener('touchmove', function (e) {
      if (!touchInfo) return;
      var t = e.touches[0];
      var dx = t.clientX - touchInfo.x;
      var dy = t.clientY - touchInfo.y;
      if (dx * dx + dy * dy >
          LONG_PRESS_TOLERANCE * LONG_PRESS_TOLERANCE) {
        cancelLongPress();
      }
    }, { passive: true });

    document.addEventListener('touchend', function (e) {
      if (!touchInfo) return;
      var fired = touchInfo.fired;
      cancelLongPress();
      if (fired) {
        // 长按已触发菜单：阻止后续合成 click
        e.preventDefault();
      }
    }, { passive: false });

    document.addEventListener('touchcancel', cancelLongPress);

    // 移动端：长按菜单项本身不再触发系统选择 / 放大镜
    document.addEventListener('touchstart', function (e) {
      var t = e.target;
      if (t && t.closest && t.closest('.context-menu')) {
        if (e.touches.length === 1) {
          // 允许菜单项自身的点击，但不启动长按计时
          cancelLongPress();
        }
      }
    }, { passive: true });
  }

  /* ---------- 关闭时机 ---------- */
  document.addEventListener('pointerdown', function (e) {
    if (!activeMenu) return;
    if (activeMenu.contains(e.target)) return;
    closeMenus();
  }, true);

  window.addEventListener('blur', closeMenus);
  window.addEventListener('resize', closeMenus);
  document.addEventListener('scroll', closeMenus, true);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenus();
  });

  updateMenuState();

  /* =====================================================
     15. 自动聚焦
     ===================================================== */
  window.addEventListener('load', function () {
    input.focus({ preventScroll: true });
  });
})();