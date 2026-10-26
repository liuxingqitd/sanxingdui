'use strict';
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const historyData = {
 '1927': ['最初的发现', '一批玉石器，叩开古蜀之门', '广汉当地农民发现一批玉石器，三星堆逐渐进入学术视野。这里的首次发现年份采用三星堆博物馆现行简介中的1927年口径。'],
 '1934': ['科学发掘的起点', '从偶然相遇，到考古求证', '华西协合大学博物馆组织了三星堆遗址的首次科学考古发掘。此后历代考古工作者持续调查与发掘，逐步揭示这处遗址的文化面貌。'],
 '1986': ['两座埋藏坑的震撼', '青铜世界，破土而出', '一、二号“祭祀坑”相继发现。青铜大立人、纵目面具、神树与金杖等器物重见天日，令三星堆成为认识古蜀文明的重要窗口。'],
 '2019': ['新发现，接续旧线索', '更多器物，更多新的问题', '2019年以来，三至八号坑陆续被发现。考古发掘将文物保护与多学科研究结合，新的青铜器、金器和象牙等遗物，为理解古蜀社会提供了更多材料。'],
 '2023': ['走进新的展陈空间', '古蜀故事，有了新的讲述', '三星堆博物馆新馆于2023年7月开放。更多出土文物与考古成果走进公众视野，让人们得以近距离观看古蜀先民留下的创造。']
};
const museumSource = 'https://www.sxd.cn/Guide?type=3';
const artifacts = {
 mask: { title: '青铜纵目面具', subtitle: '超越想象的古蜀面孔', image: 'assets/mask-front.jpg', era: '商代晚期 / 青铜', description: '柱状眼球向前凸出，宽大的双耳向两侧延展。夸张而有力的造型，是三星堆青铜艺术最鲜明的表达之一。', measure: '1986 年', measureLabel: '同类代表器出土于二号坑', observe: '留意眼球与面部的连接方式，以及双耳上的纹饰。它并非普通人脸的写实再现，而是带有强烈象征意味的形象。', note: '研究提示：面具与古蜀传说中蚕丛的关系，是一种学术解释，尚无定论。', source: 'https://museum.shu.edu.cn/info/1030/3736.htm' },
 tree: { title: '一号青铜神树', subtitle: '向天空生长的想象', image: 'assets/tree-full.jpg', era: '商代晚期 / 青铜', description: '树干、树枝、神鸟与龙共同构成一个繁复的青铜世界。各部分分别铸造后组装，展现了古蜀先民高超的铸造和连接技术。', measure: '3.96 米', measureLabel: '一号青铜神树现存高度', observe: '神树分为三层，每层伸出三枝，枝上栖鸟。顺着枝干寻找鸟、果实与龙，观察这些形象如何被组织在同一件器物中。', note: '研究提示：神树常被联系到扶桑、建木与通天的观念，具体含义仍待研究。', source: 'https://artsandculture.google.com/asset/bronze-tree-0015/4QFtGPFBL2km5Q' },
 gold: { title: '戴金面罩青铜人头像', subtitle: '青铜与黄金的相遇', image: 'assets/gold-head.jpg', era: '商代晚期 / 青铜与黄金', description: '青铜头像外贴敷薄薄的金面罩，眉眼处镂空，金色与青铜的色泽形成鲜明对比。这种复合材料的运用，展现了精巧的金属加工工艺。', measure: '金 + 铜', measureLabel: '两种材料共同构成的面孔', observe: '留意金箔如何顺应脸部起伏，以及眉、眼和嘴部的开口。不同材料的组合，赋予了这张面孔独特的视觉效果。', note: '研究提示：金面罩可能与身份或礼仪有关，具体使用方式不能仅凭外观确定。', source: museumSource },
 standing: { title: '青铜大立人像', subtitle: '站立三千年的庄严', image: 'assets/standing.jpg', era: '商代晚期 / 青铜', description: '头戴高冠，身着长衣，赤足立于高台之上。大立人像以超乎寻常的尺度，展现出古蜀青铜造像的气度。', measure: '2.62 米', measureLabel: '通高，包含底座', observe: '重点观察双手：两手环握而中空，位置一高一低。原本是否执握象牙、权杖或其他物品，仍没有确定答案。', note: '研究提示：人物的具体身份与原持物，学界尚无定论。', source: 'https://m.ccdi.gov.cn/content/d0/4d/3539.html' },
 staff: { title: '金杖', subtitle: '刻在黄金上的古蜀密码', image: 'assets/staff-cc0.jpg', era: '商代晚期 / 黄金', description: '金皮曾包卷在木芯之外，形成细长的杖。表面刻有人面、鱼、鸟等纹样，为理解古蜀的象征体系提供了珍贵线索。', measure: '逾 1.4 米', measureLabel: '金杖长度', observe: '观察杖身上的纹样组合：鱼、鸟与人面被安排在相连的图像中。这些形象的含义，是研究者持续解读的课题。', note: '研究提示：金杖常被视为权力与祭仪的象征，其具体含义尚待考证。', source: 'https://artsandculture.google.com/asset/gold-sheath-for-a-scepter-unknown/ogGLKbi9hMB6xw' }
};
const menuButton = $('.menu-toggle');
const navigation = $('#navigation');
function closeMenu() { menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', '打开导航菜单'); menuButton.textContent = '☰'; navigation.classList.remove('open'); }
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? '关闭导航菜单' : '打开导航菜单'); menuButton.textContent = open ? '×' : '☰'; navigation.classList.toggle('open', open); });
$$('a', navigation).forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
$('.theme-toggle').addEventListener('click', () => { const current = document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); const next = current === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = next; try { localStorage.setItem('sxd-theme', next); } catch {} });
function selectYear(button) {
 $$('[role=tab]').forEach(b => { const selected = b === button; b.setAttribute('aria-selected', String(selected)); b.tabIndex = selected ? 0 : -1; });
 const year = button.dataset.year, data = historyData[year];
 $('.history-year').textContent = year; $('#history-label').textContent = data[0]; $('#history-subtitle').textContent = data[1]; $('#history-text').textContent = data[2]; $('#history-panel').setAttribute('aria-labelledby', button.id);
}
$$('[data-year]').forEach(b => { b.addEventListener('click', () => selectYear(b)); b.addEventListener('keydown', e => { const tabs = $$('[data-year]'); const i = tabs.indexOf(b); let n; if (e.key === 'ArrowRight') n = (i + 1) % tabs.length; if (e.key === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length; if (e.key === 'Home') n = 0; if (e.key === 'End') n = tabs.length - 1; if (n !== undefined) { e.preventDefault(); tabs[n].focus(); selectYear(tabs[n]); } }); });
$$('[data-filter]').forEach(button => button.addEventListener('click', () => {
 $$('[data-filter]').forEach(b => { const selected = b === button; b.classList.toggle('selected', selected); b.setAttribute('aria-pressed', String(selected)); });
 const filter = button.dataset.filter;
 $$('.artifact').forEach(a => { a.hidden = filter !== 'all' && a.dataset.material !== filter; });
 $('.gallery').classList.toggle('filtered', filter !== 'all');
 $('#gallery-count').textContent = `展出 ${$$('.artifact:not([hidden])').length} 件代表文物`;
}));
let currentArtifact = 'mask';
const detailDialog = $('#artifact-dialog');
const imageDialog = $('#image-dialog');
function syncScrollLock() { document.body.classList.toggle('no-scroll', $$('dialog[open]').length > 0); }
function openArtifact(key) {
 const item = artifacts[key]; if (!item) return; currentArtifact = key;
 $('#dialog-photo').src = item.image; $('#dialog-photo').alt = item.title;
 ['title','subtitle','era','description','measure','observe','note'].forEach(field => $(`#dialog-${field}`).textContent = item[field]);
 $('#dialog-measure-label').textContent = item.measureLabel; $('#dialog-source').href = item.source;
 detailDialog.showModal(); detailDialog.scrollTop = 0; syncScrollLock();
}
function openImage(key) { const item = artifacts[key]; $('#full-image').src = item.image; $('#full-image').alt = item.title; $('#full-caption').textContent = `${item.title} / 真实文物影像`; imageDialog.showModal(); syncScrollLock(); }
$$('[data-artifact]').forEach(b => b.addEventListener('click', () => openArtifact(b.dataset.artifact)));
$$('[data-view]').forEach(b => b.addEventListener('click', () => openImage(b.dataset.view)));
$('.dialog-image').addEventListener('click', () => openImage(currentArtifact));
$('.dialog-close').addEventListener('click', () => detailDialog.close());
$('.image-close').addEventListener('click', () => imageDialog.close());
$$('dialog').forEach(dialog => { dialog.addEventListener('close', syncScrollLock); dialog.addEventListener('click', e => { if(e.target !== dialog) return; const r = dialog.getBoundingClientRect(); if(e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); }); });
const sectionObserver = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { $$('#navigation a').forEach(a => { const active = a.hash === `#${entry.target.id}`; a.classList.toggle('active', active); if(active) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); }); } }); }, { rootMargin: '-15% 0px -50% 0px', threshold: 0 });
$$('main section[id]').forEach(s => sectionObserver.observe(s));
