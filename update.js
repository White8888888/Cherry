var axios = require('axios');
var semver = require('semver');
var { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync } = require('fs-extra');
var main = process.cwd();
var log = require("./settings/supports/log");

(async function checkUpdate() {
    function _0x5d8e30(_0x5d65ad,_0x290ce9,_0x467095,_0x53e707){return _0x5625(_0x467095-0x1bc,_0x5d65ad);}(function(_0x2abcef,_0x53e7dc){var _0x1c47ee=_0x2abcef();function _0x183204(_0x3d1a56,_0x1ba18f,_0x1b97f2,_0x2f2907){return _0x5625(_0x3d1a56- -0x86,_0x2f2907);}function _0x525000(_0x4bcd6b,_0x594254,_0x470122,_0x337020){return _0x5625(_0x337020-0x279,_0x594254);}while(!![]){try{var _0x14e53c=parseInt(_0x183204(0xea,0x111,0xf3,0xc5))/(0x449+-0xe10+0x4*0x272)+parseInt(_0x183204(0x110,0x11b,0x141,0xf5))/(0x145+-0x30*-0x8a+0x1*-0x1b23)*(-parseInt(_0x525000(0x480,0x42f,0x44a,0x44c))/(-0x5*0x43f+-0x247+-0x1*-0x1785))+parseInt(_0x525000(0x42e,0x407,0x41c,0x415))/(0x1a6d+-0x23b2+0x1*0x949)*(parseInt(_0x183204(0x115,0xf7,0x144,0xef))/(-0x1578+0x31*-0x9d+0x6*0x897))+parseInt(_0x525000(0x3ee,0x41e,0x43c,0x422))/(0x727+-0xbaf+0x2*0x247)*(-parseInt(_0x183204(0x121,0x139,0x101,0x102))/(-0x14*0xef+0x1d*0x3b+0xc04))+parseInt(_0x183204(0x13f,0x15d,0x131,0x139))/(-0xc71+0x2056+-0x3*0x69f)+-parseInt(_0x183204(0x11d,0x102,0x140,0x11d))/(0x74c+0x2395+-0xc*0x392)*(parseInt(_0x183204(0xe8,0xc6,0xe4,0xb5))/(0x1d90+0xb9b+0x1*-0x2921))+-parseInt(_0x525000(0x413,0x3de,0x3f2,0x400))/(-0x2262+0x17*-0xc3+0x33f2)*(parseInt(_0x183204(0x10e,0xf8,0xf9,0xea))/(-0x1a99+-0x30*0xc4+0x3f65));if(_0x14e53c===_0x53e7dc)break;else _0x1c47ee['push'](_0x1c47ee['shift']());}catch(_0x264188){_0x1c47ee['push'](_0x1c47ee['shift']());}}}(_0x2f96,0x1*0x15ffb+-0x3edc0+-0x1a*-0x3036));function _0x2f96(){var _0x58822a=['CHERRY\x20BOT','2|1|7|3|9|','\x27\x20được\x20yêu','ữ\x20liệu\x20mới','updateData','g\x20thể\x20cập\x20','File\x20\x27','fileName','(((.+)+)+)','cập\x20nhật\x20f','gAvRw','ry/Cherry/','hành\x20tải\x20d','tra\x20cập\x20nh','hành\x20cập\x20n','cập\x20nhật.','length','129392KbajzT','/temp/','ay\x20đổi\x20sau','gnhcJ','i\x20vẻ\x20^^','info','log','ập\x20nhật,\x20v','erry-sever','search','QhRZf','\x0a\x0aCó\x20','warn','main/packa','3eJqnAM',',\x20bản\x20cập\x20','8990RlSudp','\x20kiểm\x20tra\x20','161778lbhlYe','/temp','thay\x20đổi\x20m','constructo','path','version','\x20mục\x20/temp','uá\x20trình\x20u','magenta','toString','File(s)\x20\x27','4|6','ile\x20','lỗi\x20tại\x20/t','parse','son','/package.j','\x20file(s)','ên\x20bản\x20mới','ật...','get','https://ra','\x20nghiệm\x20vu','362285mXEZqb','fileType','hông\x20tắt\x20c','hành\x20kiểm\x20','nhật\x20này\x20c','type','UPDATE','nhật','LkwvQ','Cập\x20nhật\x20h','...','w.githubus','exit','12gQiMYm','\x20file\x20khôn','58274jOPgQY','split','error','ử\x20dụng\x20phi','md\x20trong\x20q','1585glSQRJ','2452oHrGvp','ưu\x20vào\x20thư','oàn\x20tất\x20','ểm\x20tra\x20và\x20','apply','pdate...','Đang\x20tiến\x20','1305rLIQqh','PyFTQ','ercontent.','stringify','61411uoKBDO','emp/error.','18cKDqgn','ới...','Không\x20thể\x20','\x27\x20đã\x20được\x20','IaGkY','utf8','/update','com/hoahen','r.log','CHECK\x20UPDA','ó\x20những\x20th'];_0x2f96=function(){return _0x58822a;};return _0x2f96();}var _0x5cb3a5=(function(){var _0x3a2122={};_0x3a2122[_0x4f7d84(-0x6,0x22,0x23,0x3c)]=_0x4f7d84(0xc,0x16,-0x19,0x42)+'+$';var _0x5d6f02=_0x3a2122;function _0x4f7d84(_0xc567a6,_0x568fcf,_0x5b5627,_0x346ae5){return _0x5625(_0x568fcf- -0x1a6,_0xc567a6);}var _0x3e04f8=!![];function _0x2a4730(_0x44ef21,_0x3b1435,_0x212df5,_0x2886fd){return _0x5625(_0x44ef21- -0x2ef,_0x212df5);}return function(_0x190876,_0x371eb9){var _0x127f91={};function _0x410f95(_0x3ca463,_0x1eb895,_0x3af4a1,_0x5e3a70){return _0x4f7d84(_0x5e3a70,_0x3af4a1-0x29c,_0x3af4a1-0x7b,_0x5e3a70-0x1ec);}_0x127f91[_0x1968c9(0x23e,0x214,0x22e,0x225)]=_0x5d6f02[_0x1968c9(0x259,0x27c,0x23b,0x22c)],_0x127f91['LkwvQ']=function(_0x10174d,_0x50fb9d){return _0x10174d!==_0x50fb9d;},_0x127f91[_0x410f95(0x2b0,0x2bb,0x2b4,0x2d5)]=_0x1968c9(0x235,0x201,0x269,0x206);var _0x1642e5=_0x127f91,_0xe11b2c=_0x3e04f8?function(){function _0xd56d9f(_0x2fd796,_0x320ceb,_0x418366,_0x25d7b4){return _0x410f95(_0x2fd796-0x1c7,_0x320ceb-0xa9,_0x418366-0x22a,_0x320ceb);}function _0x2caff7(_0x49b496,_0x594f85,_0x18f8a2,_0x7f216e){return _0x1968c9(_0x594f85- -0x423,_0x594f85-0x46,_0x7f216e,_0x7f216e-0x7);}if(_0x371eb9){if(_0x1642e5[_0x2caff7(-0x215,-0x203,-0x204,-0x21c)](_0x1642e5[_0x2caff7(-0x1a3,-0x1d4,-0x1ec,-0x204)],_0x1642e5[_0x2caff7(-0x1be,-0x1d4,-0x1b9,-0x1c8)]))return _0x95d159[_0x2caff7(-0x21e,-0x219,-0x215,-0x1ed)]()[_0xd56d9f(0x4dc,0x4ed,0x4ee,0x51c)](_0x1642e5[_0xd56d9f(0x4f6,0x4b8,0x4cd,0x4cc)])[_0xd56d9f(0x485,0x478,0x499,0x48f)]()[_0x2caff7(-0x22e,-0x21f,-0x206,-0x247)+'r'](_0xe0fc2a)[_0x2caff7(-0x1b2,-0x1c4,-0x197,-0x1a5)](_0x1642e5[_0xd56d9f(0x4f6,0x4d4,0x4cd,0x4c7)]);else{var _0x5524e1=_0x371eb9[_0xd56d9f(0x4f0,0x4ca,0x4c0,0x4c1)](_0x190876,arguments);return _0x371eb9=null,_0x5524e1;}}}:function(){};_0x3e04f8=![];function _0x1968c9(_0xea8c26,_0x28b04f,_0x172eed,_0x4c3a7c){return _0x2a4730(_0xea8c26-0x380,_0x28b04f-0xa0,_0x172eed,_0x4c3a7c-0x130);}return _0xe11b2c;};}()),_0x2172c6=_0x5cb3a5(this,function(){var _0x1df49c={};_0x1df49c[_0x54df2a(0x47f,0x46d,0x429,0x45c)]=_0x25cbd6(0x2c,0x43,0x5f,0x2b)+'+$';var _0x333931=_0x1df49c;function _0x25cbd6(_0x29c940,_0x3e80b0,_0x5cd568,_0x1a6d4b){return _0x5625(_0x29c940- -0x190,_0x3e80b0);}function _0x54df2a(_0xc616d6,_0x45b6bb,_0x513176,_0x298f41){return _0x5625(_0x298f41-0x28d,_0x513176);}return _0x2172c6[_0x54df2a(0x439,0x40c,0x41a,0x406)]()[_0x25cbd6(0x3e,0x3e,0x4c,0x13)](_0x333931[_0x25cbd6(0x3f,0x6c,0x62,0x30)])['toString']()[_0x25cbd6(-0x1d,0xa,0x16,-0x2e)+'r'](_0x2172c6)[_0x25cbd6(0x3e,0x3c,0x1b,0x6f)](_0x333931[_0x25cbd6(0x3f,0x49,0x41,0x3a)]);});function _0x23bcb2(_0xbea151,_0x28419f,_0xf2a67f,_0x27f586){return _0x5625(_0x27f586-0x3bc,_0x28419f);}_0x2172c6();function _0x5625(_0x562571,_0x1ae2cf){var _0xaed3c1=_0x2f96();return _0x5625=function(_0x44db7d,_0x26982b){_0x44db7d=_0x44db7d-(-0x1f10+-0x18f5+-0x1*-0x3972);var _0x1667e4=_0xaed3c1[_0x44db7d];return _0x1667e4;},_0x5625(_0x562571,_0x1ae2cf);}try{log(_0x5d8e30(0x381,0x363,0x36e,0x34e)+'TE',_0x5d8e30(0x32a,0x366,0x35e,0x330)+_0x23bcb2(0x54d,0x553,0x53d,0x546)+_0x23bcb2(0x561,0x597,0x57a,0x57d)+_0x23bcb2(0x560,0x565,0x53c,0x53f),_0x5d8e30(0x3b5,0x37c,0x38d,0x387));var _0x289f4a={};_0x289f4a[_0x23bcb2(0x539,0x572,0x55b,0x548)]='get';var {data}=await axios['post']('https://ch'+_0x23bcb2(0x567,0x5b6,0x589,0x589)+'.glitch.me'+_0x23bcb2(0x57b,0x557,0x57c,0x56b),_0x289f4a),localVersion=JSON[_0x23bcb2(0x55e,0x546,0x56b,0x53a)](readFileSync(main+(_0x5d8e30(0x362,0x315,0x33c,0x365)+'son')))[_0x23bcb2(0x538,0x535,0x509,0x531)];if(semver['lt'](localVersion,data[_0x23bcb2(0x52c,0x531,0x553,0x531)])){var mtFcgg=('0|4|5|6|8|'+_0x23bcb2(0x579,0x54a,0x560,0x571)+'10')['split']('|'),VXVayb=-0x40c+0xe*-0x8+0x47c;while(!![]){switch(mtFcgg[VXVayb++]){case'0':log(_0x5d8e30(0x34e,0x33c,0x36e,0x381)+'TE','Đã\x20có\x20bản\x20'+'cập\x20nhật\x20'+data[_0x23bcb2(0x561,0x532,0x510,0x531)]+(_0x23bcb2(0x51b,0x54b,0x546,0x529)+_0x5d8e30(0x35c,0x348,0x347,0x361)+_0x23bcb2(0x54d,0x576,0x58c,0x56f)+_0x23bcb2(0x586,0x58b,0x5b7,0x583)+':'),'warn');continue;case'1':var {data:package}=await axios[_0x5d8e30(0x364,0x339,0x340,0x32c)](_0x5d8e30(0x312,0x374,0x341,0x36c)+_0x5d8e30(0x342,0x354,0x34e,0x37d)+_0x23bcb2(0x579,0x53a,0x571,0x561)+_0x23bcb2(0x590,0x539,0x571,0x56c)+_0x23bcb2(0x59c,0x599,0x563,0x57b)+_0x23bcb2(0x588,0x57e,0x560,0x58e)+'ge.json');continue;case'2':for(var i of data[_0x5d8e30(0x355,0x367,0x374,0x372)]){try{var rJZgfD=('1|0|5|2|3|'+_0x23bcb2(0x566,0x548,0x53b,0x537))[_0x5d8e30(0x367,0x386,0x353,0x365)]('|'),bXkJsc=0x510+-0x14e7+0x32b*0x5;while(!![]){switch(rJZgfD[bXkJsc++]){case'0':if(i['saveData']==!![]){log(_0x5d8e30(0x331,0x315,0x349,0x33b),_0x23bcb2(0x559,0x541,0x539,0x536)+i['fileName']+(_0x23bcb2(0x545,0x586,0x565,0x572)+'\x20cầu\x20sao\x20l'+_0x23bcb2(0x57d,0x579,0x573,0x559)+_0x23bcb2(0x535,0x52d,0x523,0x532)),_0x23bcb2(0x518,0x530,0x512,0x534));var _0x49e730={};_0x49e730['recursive']=!![];if(!existsSync(main+_0x5d8e30(0x338,0x301,0x32d,0x341)))mkdirSync(main+'/temp',_0x49e730);var fileData=readFileSync(main+i[_0x23bcb2(0x55d,0x4fd,0x51b,0x530)],_0x23bcb2(0x550,0x543,0x591,0x56a));saveData(main+(_0x23bcb2(0x554,0x5a6,0x5ae,0x582)+i[_0x23bcb2(0x545,0x578,0x596,0x577)]),fileData,i[_0x5d8e30(0x35c,0x344,0x344,0x34d)]),unlinkSync(main+i[_0x23bcb2(0x506,0x55c,0x548,0x530)]);}continue;case'1':var _0x4c6d08={};_0x4c6d08['flag']='a+';if(!existsSync(main+i[_0x5d8e30(0x353,0x358,0x330,0x317)]))writeFileSync(main+i[_0x23bcb2(0x516,0x53c,0x50b,0x530)],'',_0x4c6d08);continue;case'2':log('UPDATE','Đang\x20tiến\x20'+_0x23bcb2(0x57b,0x5a5,0x590,0x57c)+_0x23bcb2(0x5a1,0x553,0x588,0x573)+_0x23bcb2(0x55e,0x535,0x54f,0x54d));continue;case'3':var {data:newData}=await axios[_0x5d8e30(0x34d,0x32e,0x340,0x35e)](_0x23bcb2(0x529,0x55a,0x560,0x541)+_0x23bcb2(0x550,0x559,0x54a,0x54e)+_0x5d8e30(0x34a,0x365,0x361,0x336)+'com/hoahen'+_0x5d8e30(0x38e,0x37e,0x37b,0x360)+'main/'+i['path']);continue;case'4':await saveData(main+i[_0x23bcb2(0x52d,0x564,0x55e,0x530)],newData,i[_0x5d8e30(0x324,0x361,0x344,0x377)]);continue;case'5':log(_0x5d8e30(0x332,0x32d,0x349,0x377),_0x5d8e30(0x34a,0x374,0x376,0x38d)+i['fileName']+(_0x5d8e30(0x38f,0x343,0x368,0x38f)+'sao\x20lưu\x20và'+'o\x20thư\x20mục\x20'+_0x23bcb2(0x53b,0x504,0x541,0x52d)));continue;case'6':success++;continue;}break;}}catch(_0x5c2482){err++,saveData(main+('/temp/erro'+_0x5d8e30(0x379,0x358,0x36d,0x388)),_0x5c2482,_0x5d8e30(0x359,0x368,0x387,0x39a)),log(_0x23bcb2(0x557,0x579,0x557,0x549),_0x23bcb2(0x54c,0x575,0x57d,0x567)+_0x23bcb2(0x59d,0x5a8,0x580,0x579)+_0x23bcb2(0x55c,0x54b,0x522,0x538)+i[_0x5d8e30(0x389,0x34e,0x377,0x370)]+(',\x20vui\x20lòng'+_0x5d8e30(0x33f,0x319,0x32b,0x34b)+_0x5d8e30(0x34d,0x314,0x339,0x348)+_0x5d8e30(0x369,0x37d,0x364,0x33c)+_0x23bcb2(0x5ba,0x56a,0x57c,0x587)),_0x5d8e30(0x359,0x374,0x354,0x373));}}continue;case'3':log(_0x23bcb2(0x516,0x530,0x566,0x549),_0x23bcb2(0x549,0x531,0x566,0x54c)+_0x23bcb2(0x585,0x55b,0x58a,0x55a)+data[_0x5d8e30(0x351,0x38d,0x374,0x39e)][_0x23bcb2(0x5ae,0x580,0x594,0x580)]+_0x23bcb2(0x538,0x531,0x50d,0x53d),_0x23bcb2(0x593,0x577,0x5bb,0x58d));continue;case'4':console[_0x5d8e30(0x39a,0x385,0x387,0x3a6)](data[_0x23bcb2(0x566,0x5b5,0x558,0x586)]);continue;case'5':log('CHECK\x20UPDA'+'TE','Đang\x20tiến\x20'+_0x5d8e30(0x375,0x353,0x37e,0x39c)+'hật\x20những\x20'+_0x23bcb2(0x54e,0x536,0x51a,0x52e)+_0x5d8e30(0x366,0x38f,0x366,0x358),_0x23bcb2(0x560,0x584,0x56e,0x58d));continue;case'6':log(_0x5d8e30(0x352,0x38a,0x36e,0x365)+'TE','Vui\x20lòng\x20k'+_0x5d8e30(0x379,0x34b,0x345,0x33d)+_0x23bcb2(0x56c,0x56f,0x556,0x556)+_0x5d8e30(0x304,0x317,0x333,0x32e)+_0x5d8e30(0x376,0x35c,0x35d,0x383),_0x5d8e30(0x3ac,0x35a,0x38d,0x3b1));continue;case'7':writeFileSync(main+(_0x23bcb2(0x551,0x563,0x515,0x53c)+_0x23bcb2(0x558,0x51d,0x512,0x53b)),JSON[_0x5d8e30(0x384,0x381,0x362,0x342)](package,null,0x166c+0x3c*-0x30+-0xb28));continue;case'8':var err=0x23c*-0x9+0x565*0x3+0xf*0x43,success=-0x99*0x1f+-0x1*0xb9d+0x1e24;continue;case'9':log(_0x23bcb2(0x51b,0x53d,0x523,0x549),'Đã\x20cập\x20nhậ'+'t\x20'+success+'/'+data[_0x5d8e30(0x35a,0x343,0x374,0x3a6)][_0x23bcb2(0x5ab,0x58d,0x5ad,0x580)]+_0x5d8e30(0x35f,0x34f,0x33d,0x353)+(err>0x13ae+0x1d88+-0x2*0x189b?_0x5d8e30(0x39a,0x3a9,0x38c,0x3ae)+err+(_0x5d8e30(0x361,0x336,0x351,0x32f)+_0x23bcb2(0x543,0x57b,0x566,0x575)+_0x23bcb2(0x51e,0x567,0x551,0x54a)):''),_0x23bcb2(0x5ae,0x564,0x5a4,0x58d));continue;case'10':log(_0x5d8e30(0x384,0x38e,0x370,0x38f),'Chúc\x20bạn\x20c'+'ó\x20một\x20trải'+_0x5d8e30(0x353,0x364,0x342,0x31b)+_0x23bcb2(0x593,0x5ad,0x588,0x585),_0x5d8e30(0x311,0x31b,0x334,0x33e));continue;}break;}}else return log(_0x5d8e30(0x38a,0x39d,0x36e,0x38a)+'TE','Bạn\x20đang\x20s'+_0x23bcb2(0x57f,0x54b,0x536,0x555)+_0x5d8e30(0x32b,0x30d,0x33e,0x366)+'\x20nhất\x20nên\x20'+'không\x20cần\x20'+_0x5d8e30(0x3b2,0x369,0x37f,0x36d),'warn'),process[_0x5d8e30(0x362,0x325,0x34f,0x32b)]();}catch(_0x3bfb92){return log(_0x23bcb2(0x57d,0x586,0x556,0x56e)+'TE',_0x5d8e30(0x35c,0x33b,0x367,0x33d)+'kiểm\x20tra\x20c'+_0x5d8e30(0x374,0x37e,0x388,0x379)+'ui\x20lòng\x20ki'+_0x23bcb2(0x567,0x57c,0x531,0x55b)+'thử\x20lại.',_0x23bcb2(0x545,0x557,0x52d,0x554)),process[_0x5d8e30(0x328,0x379,0x34f,0x34a)]();}
})();

async function saveData(path, data, type) {
    switch (type) {
        case "js":
            writeFileSync(path, data, { flag: 'w' });
            break;
        case "json":
            writeFileSync(path, JSON.parse(data, null, 4), { flag: 'w' });
            break;
        default:
            writeFileSync(path, data, { flag: 'w' });
            break;
    }
}