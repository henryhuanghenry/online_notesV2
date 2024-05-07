import{_ as o,r as t,o as d,c as h,b as e,e as l,w as i,d as n,a as r}from"./app-DFklLwn2.js";const u={},c=e("h1",{id:"llm",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#llm"},[e("span",null,"LLM")])],-1),f={class:"table-of-contents"},p=r('<h2 id="gpt-2" tabindex="-1"><a class="header-anchor" href="#gpt-2"><span>GPT-2</span></a></h2><p>Language Models are Unsupervised Multitask Learners</p><ul><li>结构 <ul><li>transformer的decoder</li><li>在self-attention前加入layer-norm</li><li>在self-attention前加入 pre-activation residual network (He et al., 2016)</li><li>an additional layer normalization was added after the final self-attention block.</li><li>A modified initialization which accounts for the accumulation on the residual path with model depth is used. We scale the weights of residual layers at initialization by a factor of 1/ √ N where N is the number of residual layers.</li><li>The vocabulary is expanded to 50,257. We also increase the context size from 512 to 1024 tokens and a larger batchsize of 512 is used.</li></ul></li></ul><h2 id="gpt-3" tabindex="-1"><a class="header-anchor" href="#gpt-3"><span>GPT-3</span></a></h2>',4),g={href:"https://arxiv.org/abs/2005.14165",target:"_blank",rel:"noopener noreferrer"},m=r('<h2 id="llama" tabindex="-1"><a class="header-anchor" href="#llama"><span>LLaMA</span></a></h2><p>LLaMA: Open and Efficient Foundation Language Models</p><ul><li>改进： <ul><li>层前norm</li><li>swiGLU：https://zhuanlan.zhihu.com/p/621058772</li><li>Rotary Embeddings：ROPE 苏剑林</li></ul></li></ul><h2 id="sft-supervised-finetuning" tabindex="-1"><a class="header-anchor" href="#sft-supervised-finetuning"><span>SFT(supervised-finetuning)</span></a></h2><ul><li>人类书写一些prompt-Answer对，作为训练集进行微调</li></ul><h2 id="rlhf" tabindex="-1"><a class="header-anchor" href="#rlhf"><span>RLHF</span></a></h2><h3 id="reward-modeling" tabindex="-1"><a class="header-anchor" href="#reward-modeling"><span>Reward Modeling</span></a></h3><ul><li>训练集：prompt-Answer-分数 <ul><li>由人类对模型生成的不同answer进行打分</li></ul></li><li>根据这个训练集来训练一个打分模型</li></ul><h3 id="reinforcement-learning" tabindex="-1"><a class="header-anchor" href="#reinforcement-learning"><span>Reinforcement Learning</span></a></h3><ul><li>使用SFT后的模型，生成prompt-Answer，而后由奖励模型进行打分。</li><li>使用一个loss根据这个打分去更新SFT后的模型。</li></ul>',10);function L(_,v){const a=t("router-link"),s=t("ExternalLinkIcon");return d(),h("div",null,[c,e("nav",f,[e("ul",null,[e("li",null,[l(a,{to:"#gpt-2"},{default:i(()=>[n("GPT-2")]),_:1})]),e("li",null,[l(a,{to:"#gpt-3"},{default:i(()=>[n("GPT-3")]),_:1})]),e("li",null,[l(a,{to:"#llama"},{default:i(()=>[n("LLaMA")]),_:1})]),e("li",null,[l(a,{to:"#sft-supervised-finetuning"},{default:i(()=>[n("SFT(supervised-finetuning)")]),_:1})]),e("li",null,[l(a,{to:"#rlhf"},{default:i(()=>[n("RLHF")]),_:1}),e("ul",null,[e("li",null,[l(a,{to:"#reward-modeling"},{default:i(()=>[n("Reward Modeling")]),_:1})]),e("li",null,[l(a,{to:"#reinforcement-learning"},{default:i(()=>[n("Reinforcement Learning")]),_:1})])])])])]),p,e("p",null,[e("a",g,[n("Language Models are Few-Shot Learners"),l(s)])]),m])}const b=o(u,[["render",L],["__file","LLM.html.vue"]]),k=JSON.parse('{"path":"/AI/NLP/LLM.html","title":"LLM","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"GPT-2","slug":"gpt-2","link":"#gpt-2","children":[]},{"level":2,"title":"GPT-3","slug":"gpt-3","link":"#gpt-3","children":[]},{"level":2,"title":"LLaMA","slug":"llama","link":"#llama","children":[]},{"level":2,"title":"SFT(supervised-finetuning)","slug":"sft-supervised-finetuning","link":"#sft-supervised-finetuning","children":[]},{"level":2,"title":"RLHF","slug":"rlhf","link":"#rlhf","children":[{"level":3,"title":"Reward Modeling","slug":"reward-modeling","link":"#reward-modeling","children":[]},{"level":3,"title":"Reinforcement Learning","slug":"reinforcement-learning","link":"#reinforcement-learning","children":[]}]}],"git":{"updatedTime":1706457681000,"contributors":[{"name":"henryhuanghenry","email":"henryhuanghenry@outlook.com","commits":1}]},"filePathRelative":"AI/NLP/LLM.md"}');export{b as comp,k as data};
