import{_ as n,r as h,o as s,c as o,b as l,e as t,w as i,a as c,d as a}from"./app-DFklLwn2.js";const u={},r=l("h1",{id:"转化延迟",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#转化延迟"},[l("span",null,"转化延迟")])],-1),p={class:"table-of-contents"},d=c('<h2 id="概况" tabindex="-1"><a class="header-anchor" href="#概况"><span>概况</span></a></h2><ul><li>转化模型+延迟模型 <ul><li>一个cvr模型+一个延迟模型。线上预估只用cvr模型。延迟模型建模涉及：生存分析。</li><li>https://zhuanlan.zhihu.com/p/165625326</li><li>https://zhuanlan.zhihu.com/p/360188539</li><li>https://zhuanlan.zhihu.com/p/467524578</li><li>https://zhuanlan.zhihu.com/p/348335062</li></ul></li><li>样本重放+重要性采样： <ul><li>所有的假负样本一开始都作为负样本进入模型。 <ul><li>等观察周期结束后，某些样本再次作为正样本进入模型。通过重要性采样消偏。</li><li>FNW是只将正样本重放。而DEFER是将所有样本重放一次。</li></ul></li><li>https://zhuanlan.zhihu.com/p/493044810</li></ul></li></ul><h2 id="样本重放-重要性采样" tabindex="-1"><a class="header-anchor" href="#样本重放-重要性采样"><span>样本重放+重要性采样</span></a></h2><p>不同的样本重放机制，导致不同的重要性采样权重。</p><ul><li><p>DEFER：</p><ul><li>所有样本过两次。一开始是真负+假负(以负标签进入)+真正；再一次是：真负+假负(以正标签进入)+真正。</li><li>通过重要性采样修改Loss进行消偏。</li></ul></li><li><p>DEFUSE</p><ul><li>https://zhuanlan.zhihu.com/p/506476146</li><li>没有提出新的回放机制。但是提出了新的LOSS的推导方式</li></ul></li></ul>',5);function _(m,f){const e=h("router-link");return s(),o("div",null,[r,l("nav",p,[l("ul",null,[l("li",null,[t(e,{to:"#概况"},{default:i(()=>[a("概况")]),_:1})]),l("li",null,[t(e,{to:"#样本重放-重要性采样"},{default:i(()=>[a("样本重放+重要性采样")]),_:1})])])]),d])}const E=n(u,[["render",_],["__file","转化延迟.html.vue"]]),v=JSON.parse('{"path":"/AI/RecSys/%E8%BD%AC%E5%8C%96%E5%BB%B6%E8%BF%9F.html","title":"转化延迟","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"概况","slug":"概况","link":"#概况","children":[]},{"level":2,"title":"样本重放+重要性采样","slug":"样本重放-重要性采样","link":"#样本重放-重要性采样","children":[]}],"git":{"updatedTime":1706457681000,"contributors":[{"name":"henryhuanghenry","email":"henryhuanghenry@outlook.com","commits":1}]},"filePathRelative":"AI/RecSys/转化延迟.md"}');export{E as comp,v as data};
