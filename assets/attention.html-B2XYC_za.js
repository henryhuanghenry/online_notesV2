import{_ as s,r as o,o as r,c as d,b as t,e,w as i,d as n,a as c}from"./app-DFklLwn2.js";const _="/online_notesV2/assets/v2-60645bb5a5777b7bcee90c78de34eb00_720w-Cr2HT9dA.jpg",h="/online_notesV2/assets/v2-a5f8a19c6d89422fe7d8a74087088b37_720w-C13nk7Di.jpg",u="/online_notesV2/assets/image-20220703151031956-CddaZ-MW.png",m={},p=t("h1",{id:"attention",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#attention"},[t("span",null,"Attention")])],-1),f={class:"table-of-contents"},b=t("h2",{id:"_0-资料网址",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_0-资料网址"},[t("span",null,"0.资料网址：")])],-1),g={href:"https://zhuanlan.zhihu.com/p/47063917",target:"_blank",rel:"noopener noreferrer"},k={href:"https://slds-lmu.github.io/seminar_nlp_ss20/attention-and-self-attention-for-nlp.html",target:"_blank",rel:"noopener noreferrer"},x=t("li",null,[t("p",null,"[面经](面试官如何判断面试者的机器学习水平？ - 包包大人的回答 - 知乎 https://www.zhihu.com/question/62482926/answer/2317840159)")],-1),v=c('<h2 id="_1-attention" tabindex="-1"><a class="header-anchor" href="#_1-attention"><span>1. attention</span></a></h2><ul><li>在原始的seq2seq中，decoder模型只能利用encoder的最后一个Hidden state作为上一hidden state <ul><li><img src="'+_+'" alt="img"></li><li>随着序列的边长，所有的信息都压缩到了一个向量中，序列增长信息丢失严重</li></ul></li><li>因此，使用attention机制 <ul><li><img src="'+h+'" alt="img" style="zoom:50%;"></li><li><img src="'+u+'" alt="image-20220703151031956" style="zoom:80%;"></li></ul></li></ul><p>总结：</p><ul><li>在Decoder端，隐状态由 上一隐状态、上一输出、输入序列每个隐状态的加权和 决定 <ul><li>输出由 当前隐状态 和 上一输出 决定</li><li>为了计算 输入序列每个隐状态的加权和 ， 我们需要计算 上一隐状态 和 输入序列的所有隐状态的 相关性，而后softmax得到一个归一化的加权</li></ul></li><li>的</li></ul><table><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></tbody></table>',5);function w(y,V){const l=o("router-link"),a=o("ExternalLinkIcon");return r(),d("div",null,[p,t("nav",f,[t("ul",null,[t("li",null,[e(l,{to:"#_0-资料网址"},{default:i(()=>[n("0.资料网址：")]),_:1})]),t("li",null,[e(l,{to:"#_1-attention"},{default:i(()=>[n("1. attention")]),_:1})])])]),b,t("ul",null,[t("li",null,[t("p",null,[t("a",g,[n("知乎好的博文"),e(a)])])]),t("li",null,[t("p",null,[t("a",k,[n("一个非常好的NLP学习资料库"),e(a)])])]),x]),v])}const z=s(m,[["render",w],["__file","attention.html.vue"]]),A=JSON.parse('{"path":"/AI/Basic/attention.html","title":"Attention","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"0.资料网址：","slug":"_0-资料网址","link":"#_0-资料网址","children":[]},{"level":2,"title":"1. attention","slug":"_1-attention","link":"#_1-attention","children":[]}],"git":{"updatedTime":1706457681000,"contributors":[{"name":"henryhuanghenry","email":"henryhuanghenry@outlook.com","commits":1}]},"filePathRelative":"AI/Basic/attention.md"}');export{z as comp,A as data};
