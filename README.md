# Atlas Router – Intelligent LLM Routing Control Plane

A production-oriented LLM routing control plane that intelligently selects and orchestrates the optimal AI model workflow using structured task understanding, policy enforcement, runtime telemetry, Bayesian quality estimation, and multi-objective optimization.

You can access my model here: [Atlas Model](https://mantavyamaan.github.io/Atlas-Router/atlas_router.html)

---

## 🚀 The Architecture (V1 vs V2)

This repository contains two distinct implementations of the Atlas Router to suit different deployment needs:

### **V1: Data-Science Prototyping (`ATLAS_Router.ipynb`)**
The original prototyping engine built with standard data-science libraries (`numpy`, `pandas`). It excels at rapid iteration, tabular data visualization, and mathematical experimentation using compiled C-backend statistics.

### **V2: Web-Ready Pure Math (`ATLAS_Router_V2.py` / `.ipynb`)**
A zero-dependency, mathematically deterministic engine. All heavy data-science libraries have been stripped out and replaced with a custom Pseudo-Random Number Generator (PRNG) and standard Python mathematics (`math`, `statistics`). This allows the entire Bayesian confidence simulation and routing pipeline to be ported 1-to-1 into **Vanilla JavaScript** for execution entirely inside the browser on static websites.

---

## 🧠 101-Model 2026 Registry

Both V1 and V2 pull from a centralized `model_registry.py` featuring 101 cutting-edge frontier and open-weight models (including `GPT-5.5`, `Claude-Opus-4.8`, `Gemini-3.1-Pro`, `Llama-4-Maverick`, `DeepSeek-V4-Pro`, and `o3`).
- **2026-Era Specs**: Models are parameterized with up to 10M+ context windows.
- **Domain Specialization**: Hardcoded performance multipliers organically skew routing paths based on expertise (e.g., routing math tasks to `DeepSeek-R1` and audio tasks to `Gemini-3.1-Pro`).

---

# Overview

Atlas Router is a decision intelligence engine designed to solve one of the biggest challenges in modern AI systems:

> **Given a task, operational constraints, runtime conditions, and available models, which model—or combination of models—should execute the request?**

Rather than routing every request to a single fixed model, Atlas Router analyzes the incoming request, extracts structured routing signals, evaluates 101 candidate models across multiple dimensions, and produces an optimized execution plan balancing quality, latency, cost, safety, reliability, and confidence.

The router supports both **single-model execution** and **multi-stage orchestration**, enabling workflows such as:
- OCR → Reasoning
- Document Analysis → Domain Reasoning → Structured Output
- Generation → Verification
- Multi-model collaboration with fallbacks

---

# Core Routing Pipeline

1. **Hard Feasibility Filtering:** Automatically filters models that cannot meet minimum context windows or policy rules.
2. **Bayesian Contextual Quality Estimation:** Evaluates historical priors, task fit, domain expertise, and runtime telemetry.
3. **Pareto-Optimal Candidate Reduction:** Dominated candidates are instantly removed before heavy simulation.
4. **Multi-Objective Utility Optimization:** Balances cost, latency, safety, and reasoning capability dynamically.
5. **Thompson-Sampling Confidence Estimation:** Determines if the system should escalate the decision to human review based on uncertainty variance.
6. **Multi-Stage Workflow Planning:** Generates fallback chains and automated verifier nodes for high-risk scenarios.

---

# Example Routing Outputs

### Scenario 1: Complex Coding Task
Because coding heavily relies on logical reasoning, the router organically bypasses standard chat models and selects a specialized frontier reasoning model like `o3`, verifying its context window and generating a fallback chain.

### Scenario 2: Budget-Constrained Customer Support
For low-complexity summarization tasks, the router completely ignores expensive frontier models and accurately calculates that an open-weight model like `GLM-4` provides a Pareto-optimal 93% workflow fit for a fraction of a cent.

### Scenario 3: High-Risk Legal Review
When faced with a complex legal contract requiring massive context, the policy engine kicks in, restricting the pool to frontier anchors. The router evaluates the time constraint and confidence intervals, often throwing an `ABSTAIN` to mandate human escalation due to high uncertainty variance if latency SLAs cannot be met.

---

# Explainability

Every routing decision includes:
- Selected model(s)
- Multi-stage execution plan
- Alternative candidates
- Confidence estimate (via Thompson Sampling)
- Utility score
- Expected latency
- Estimated cost
- Verification strategy
- Fallback models
- Human escalation status
- Reproducibility metadata

---

# Technologies

- **V1:** Python, NumPy, Pandas, Dataclasses
- **V2:** Pure Python (Zero dependencies, Web-Ready)
- **Math:** Bayesian Statistics (Gamma / Beta Distributions), Multi-Objective Optimization
