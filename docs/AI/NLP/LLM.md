# LLM

[[TOC]]



## GPT-2

Language Models are Unsupervised Multitask Learners

- 结构
  - transformer的decoder
  - 在self-attention前加入layer-norm
  - 在self-attention前加入 pre-activation residual network (He et al., 2016)
  - an additional layer normalization was added after the final self-attention block. 
  - A modified initialization which accounts for the accumulation on the residual path with model depth is used. We scale the weights of residual layers at initialization by a factor of 1/ √ N where N is the number of residual layers.
  - The vocabulary is expanded to 50,257. We also increase the context size from 512 to 1024 tokens and a larger batchsize of 512 is used.

## GPT-3

[Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165)





## LLaMA

LLaMA: Open and Efficient Foundation Language Models

- 改进：
  - 层前norm
  - swiGLU：https://zhuanlan.zhihu.com/p/621058772
  - Rotary Embeddings：ROPE 苏剑林



## SFT(supervised-finetuning)

- 人类书写一些prompt-Answer对，作为训练集进行微调



## RLHF

### Reward Modeling

- 训练集：prompt-Answer-分数
  - 由人类对模型生成的不同answer进行打分
- 根据这个训练集来训练一个打分模型

### Reinforcement Learning

- 使用SFT后的模型，生成prompt-Answer，而后由奖励模型进行打分。
- 使用一个loss根据这个打分去更新SFT后的模型。

