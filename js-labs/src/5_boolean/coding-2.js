function sayHello(languageCode) {
  const languageMap = {
    en: 'Hello',
    vi: 'Xin chào',
    fr: 'Bonjour',
    cn: 'Nǐn hǎo',
    ja: 'Konnichiwa',
    ko: 'Anyoung haseyo',
  };

  return languageMap[languageCode] || 'Hello';
}

// ########################################

function logger(arrList, fnc) {
  const testCase = [];

  arrList.forEach((arr) => {
    testCase.push({
      languageCode: arr,
      'Xin chào': fnc(arr),
    });
  });

  console.table(testCase);
}

logger(['en', 'vi', 'fr', 'cn', 'ja', 'ko'], sayHello);
