 // 因为语言支持很多 还有重复的，所以搞了一个小脚本，用node运行哈


const FS = require('fs');
const htmlRule = "asa asax ascx ashx asmx asp aspx axd cshtml 	ejs 	htm  html 	inc  	jsp jspf 	jspx 	mas 	master 	mi  	php  	shtml 	skin 	tag 	vm 	xhtml ";

// 为了不混淆原本插件的语言定义，所以有vscode 有的要取消，用原始的
const jsRule = " as asax ascx asp aspx cshtml html  jsp jspf jsx mas mi php  xhtml ";

// js  javascript
// jsx JavaScript React
// typescriptreact TypeScript React
const vscodeLang = [ "javascript", "typescriptreact" ]

let langList = Array.from(new Set(`${htmlRule} ${jsRule}`.split(' ').map(_ => _.trim()).filter(_ => _)));

const languages = { languages: [] };
const whenString = [];

langList.forEach( resourceLangId => {
  languages.languages.push({
    "id": resourceLangId,
    "extensions": [ `.${resourceLangId}` ],
    "aliases": [ resourceLangId ]
  })
  whenString.push(`resourceLangId == ${resourceLangId}`);
} )

vscodeLang.forEach(resourceLangId => whenString.push(`resourceLangId == ${resourceLangId}`))

const menuWhen = `workspaceFolderCount >= 1 && ( ${whenString.join(' || ')} )`;

FS.writeFileSync('langconfig.json', JSON.stringify({
  languages,
  menuWhen,
  langList: [ ...langList, ...vscodeLang ],
  fileWhen: whenString.join(' || '),
}), null, 2);