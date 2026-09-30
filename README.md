# 🛡️ When Guardrails Fail

This repository contains the project website and research materials for **“When Guardrails Fail: Multilingual Long-Context Safety in Tool-Using Agents,”** accepted at **NeurIPS 2026, Long-Context Foundation Models (LCFM)**.

The work studies **multilingual safety in tool-using AI agents** as a complete **guard-to-action pipeline**, rather than evaluating guardrails only as isolated text classifiers. We examine how safety changes with **language, context length, prompt position, runtime guardrail, downstream agent, and harm category**.

🔗 **Paper:** [OpenReview](https://openreview.net/forum?id=lbBivgE96k)  
🌐 **Project Website:** `https://supreme-lab.github.io/NeurIPS-Multilingual-Long-Context-Safety/` 

---

## 🔍 Research Overview

The evaluation begins with **1,901 unsafe English prompts** derived from AEGIS2.0 and constructs parallel prompts across **98 languages**, yielding up to **186,298 multilingual instances** spanning **19 harm categories**.

We evaluate five runtime safety guardrails:

- **AprielGuard**
- **CREST**
- **GuardReasoner**
- **WildGuard**
- **XGuard**

Guard-admitted harmful requests are then passed to two downstream tool-using agents:

- **Llama-3.1-8B-Instruct**
- **Qwen2.5-14B-Instruct**

The long-context evaluation tests **8K and 32K contexts**, with harmful requests placed at the **beginning, middle, or end** of the context. Restricted tools are inert symbolic tools, allowing action-level safety failures to be measured without executing harmful actions.

---

## 📊 At a Glance

- **98 languages**
- **19 harm categories**
- **5 runtime guardrails**
- **2 downstream tool-using agents**
- **8K and 32K context lengths**
- **3 prompt positions:** beginning, middle, end
- **Up to 186,298 multilingual prompt instances**

---

## 🚨 Key Findings

### 1️⃣ Safety is not a fixed model property

Safety depends jointly on the **downstream model, context length, and prompt position**. Increasing context from 8K to 32K can either improve or degrade safety depending on the condition.

For example:

- **Qwen, beginning position:** 28.53% → 35.24% restricted-tool selection
- **Llama, beginning position:** 10.97% → 0.72%

### 2️⃣ Prompt position can reverse model rankings

The relative safety of Llama and Qwen changes depending on where the harmful request appears in the context. Llama is substantially safer at beginning positions, while Qwen is safer at the end.

### 3️⃣ Longer context can change the safety state of individual prompts

Across matched 8K → 32K comparisons:

- **76.2%** remain safe
- **11.9%** remain unsafe
- **6.4%** change from safe → unsafe
- **5.5%** change from unsafe → safe

### 4️⃣ Low-resource languages exhibit higher downstream risk

Restricted-tool selection rates are:

- **High-resource languages:** 11.08%
- **Medium-resource languages:** 10.66%
- **Low-resource languages:** 21.65%

These results show that aggregate safety scores can conceal substantial multilingual disparities.

---

## 🧩 Guard-to-Agent Evaluation Pipeline

The framework evaluates safety across the complete trajectory:

```text
Unsafe English Prompts
        ↓
Translation into 98 Languages
        ↓
Translation Quality + Metadata
        ↓
Five Runtime Guardrails
        ↓
Guardrail Block  ─────────────→ Blocked
        ↓ Guard Bypass
Long-Context Construction
(8K / 32K × Beginning / Middle / End)
        ↓
Tool-Using Agent
(Llama / Qwen)
        ↓
Refuse | Escalate | Restricted Tool Selection
        ↓
Action-Level Safety Analysis
```

The project website contains the full framework figure and result visualizations from the paper.

---

## 📂 Repository Structure

```text
NeurIPS-Multilingual-Long-Context-Safety/
├── index.html          # Main GitHub Pages project website
├── README.md           # Project overview and documentation
└── assets/             # Paper figures and website assets
    ├── framework.png
    ├── context_heatmap.png
    ├── multilingual_risk.png
    ├── harm_categories.png
    ├── safety_transitions.png
    ├── context_effect.png
    ├── position_effect.png
    └── agent_comparison.png
```

---

## 🌐 Deploy the Project Website

### 1️⃣ Clone the repository

```bash
git clone https://github.com/supreme-lab/NeurIPS-Multilingual-Long-Context-Safety.git
cd NeurIPS-Multilingual-Long-Context-Safety
```

### 2️⃣ Enable GitHub Pages

In the GitHub repository:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Select the `main` branch.
4. Select `/ (root)` as the folder.
5. Save the configuration.

The website should then be available at:

```text
https://supreme-lab.github.io/NeurIPS-Multilingual-Long-Context-Safety/
```

---

## 📌 Research Contributions

- **Multilingual guard-to-agent benchmark** spanning 98 languages and 19 harm categories.
- **Compositional safety evaluation** that follows harmful requests from guardrail admission to downstream agent action.
- **Paired long-context evaluation** across 8K/32K contexts and beginning/middle/end prompt positions.
- **Action-grounded safety metric** based on restricted-tool selection rather than only free-form LLM judgments.
- **Disaggregated risk analysis** across language, language-resource tier, harm category, translation quality, context length, and model choice.

---

## ⚠️ Scope and Limitations

The multilingual benchmark is primarily translation-based, and translation-quality metrics do not guarantee native fluency or full cultural equivalence. The long-context experiments use controlled benign English history and evaluate two downstream agents, two context lengths, and three prompt positions. Restricted tools are symbolic and inert, so the study measures **attempted unsafe action**, not real-world execution.

Future work includes native-authored multilingual prompts, realistic retrieved and multilingual contexts, additional agents and longer context windows, independently evaluated guard-agent pipelines, sandboxed tool execution, additional defense layers, and matched benign controls.

---

## 📜 Citation

If you use this work, please cite:

```bibtex
@inproceedings{alam2026guardrails,
  title     = {When Guardrails Fail: Multilingual Long-Context Safety in Tool-Using Agents},
  author    = {Alam, Md Jahangir and Hossain, Ismail and Ahad, Tanzim and Puppala, Sai and Talukder, Sajedul},
  booktitle = {NeurIPS 2026, Long-Context Foundation Models (LCFM)},
  year      = {2026}
}
```

> **Note:** Replace this BibTeX entry with the canonical workshop citation if an official proceedings or workshop citation is released.

---

## 📌 TODO

- [ ] Add the de-anonymized public code repository
- [ ] Add dataset / benchmark release link
- [ ] Add canonical NeurIPS 2026 LCFM citation when available
- [ ] Add Hugging Face dataset link if released
- [ ] Add any final camera-ready figures or updated results

---

## 📜 License

Please update this section to reflect the final license selected for the code, data, and website assets.

---
