#樊登读书
^http[s]?:\/\/.+dushu.+(v101/content|book/v100/info|/play/duration|/v100/index).*$ url request-body "token":"[^"]+ request-body "token":"20221117rUwJa1id5I0oUDDYTJk
^http[s]?:\/\/.+dushu.+(v101|v100|program/v100)\/(content|play/duration|index|list|userInfo|vipInfo|info|ceiltip|mainList|getMarketInfoByType) url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/FD.js
