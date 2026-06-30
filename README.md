# Atlas Router – Intelligent LLM Routing Control Plane

A production-oriented LLM routing control plane that intelligently selects and orchestrates the optimal AI model workflow using structured task understanding, real artifact inspection, policy enforcement, runtime telemetry, Bayesian quality estimation, and multi-objective optimization.

> **Note:** Atlas Router does **not** require an LLM for routing. The default pipeline uses deterministic parsing and heuristic semantic extraction. A structured-output LLM may optionally replace the semantic parser to improve task understanding, but routing, policy evaluation, scoring, confidence estimation, planning, and decision generation remain deterministic and model-agnostic.

---

# Overview

Atlas Router is a decision intelligence engine designed to solve one of the biggest challenges in modern AI systems:

> **Given a task, its uploaded artifacts, operational constraints, runtime conditions, and available models, which model—or combination of models—should execute the request?**

Rather than routing every request to a single fixed model, Atlas Router analyzes the incoming request, inspects uploaded files, extracts structured routing signals, evaluates candidate models across multiple dimensions, and produces an optimized execution plan balancing quality, latency, cost, safety, reliability, and confidence.

The router supports both **single-model execution** and **multi-stage orchestration**, enabling workflows such as

- OCR → Reasoning
- Document Analysis → Domain Reasoning → Structured Output
- Generation → Verification
- Multi-model collaboration with fallbacks

---

# Features

- Canonical schema-driven model registry
- Real file-aware artifact inspection
- Automatic input format detection
- Multi-modal request understanding
- Lightweight semantic extraction
- Topic inference from uploaded documents
- Prompt–artifact conflict detection
- Deterministic + semantic task parsing
- Unified task representation
- Hard feasibility filtering
- Policy-aware routing
- Runtime telemetry integration
- Bayesian contextual quality estimation
- Pareto-optimal candidate reduction
- Multi-objective utility optimization
- Workflow-aware routing profiles
- Thompson-sampling confidence estimation
- Multi-stage workflow planning
- Verifier planning
- Fallback and failover planning
- Human escalation support
- Budget and SLA constraints
- Explainable routing decisions
- Versioned audit logging
- Learning hooks for future adaptation

---

# High-Level Architecture

```text
                     User Request
             (Prompt + Uploaded Files)
                      │
                      ▼
        Artifact Inspection Layer
     (PyMuPDF / Pillow / FFprobe /
      openpyxl / python-pptx)
                      │
                      ▼
   Lightweight Semantic Extraction
      + Conflict Detection
                      │
                      ▼
 Deterministic + Structured Parsing
                      │
                      ▼
     Unified Task Representation
                      │
                      ▼
      Hard Feasibility Filtering
                      │
                      ▼
          Policy Engine
                      │
                      ▼
 Bayesian Contextual Quality Estimation
                      │
                      ▼
      Runtime Telemetry Adjustment
                      │
                      ▼
      Pareto Candidate Reduction
                      │
                      ▼
     Multi-Objective Optimization
                      │
                      ▼
 Execution & Verification Planner
                      │
                      ▼
      Final Routing Decision
```

---

# Routing Pipeline

## 1. Artifact Inspection

Instead of relying only on user-declared formats, Atlas Router inspects uploaded files directly.

Supported artifact processing includes

- PDFs
- Images
- Audio
- Video
- Spreadsheets
- Presentations
- Text documents

Metadata extracted includes

- Page count
- OCR likelihood
- Scan quality
- Text density
- Table density
- Chart density
- Handwriting likelihood
- Language detection
- Audio duration
- Video metadata
- File size

When native libraries are unavailable, the router gracefully falls back to heuristic inspection rather than failing.

---

## 2. Lightweight Semantic Extraction

After artifact inspection, the router performs provider-agnostic semantic extraction by reading a lightweight preview of uploaded documents.

This enables

- Topic inference
- Domain inference
- Better routing for generic prompts such as

```
Explain this
```

without requiring the prompt itself to specify whether the document is legal, financial, medical, research, or another domain.

The default implementation uses deterministic keyword scoring, while the architecture allows future replacement with embeddings or other semantic representations.

---

## 3. Conflict Detection

Atlas Router validates consistency between

- Prompt intent
- Uploaded artifacts

For example

```
Prompt:
Explain this image

Uploaded file:
contract.pdf
```

The router detects the mismatch, trusts the uploaded artifact, records a structured conflict flag, and continues routing while preserving a complete audit trail.

---

## 4. Task Understanding

The parser combines deterministic extraction with semantic interpretation to determine

- Task family
- Domain
- Risk level
- Expected output
- Workflow stages
- Required capabilities
- Parser confidence

---

## 5. Unified Task Representation

All extracted information is merged into a canonical TaskFeatures object containing

- Prompt
- Artifact profiles
- Semantic signals
- Constraints
- Workflow requirements
- Policy context
- Runtime requirements

Every downstream routing decision operates exclusively on this unified representation.

---

## 6. Hard Feasibility Filtering

Models that cannot satisfy mandatory requirements are eliminated before scoring.

Constraints include

- Required modalities
- Context length
- OCR support
- Function calling
- JSON generation
- Citation support
- Provider restrictions
- Tenant restrictions
- Regional restrictions
- Budget constraints

Hard constraints always override soft preferences.

---

## 7. Policy Evaluation

A dedicated policy engine applies

- Enterprise policies
- Tenant overlays
- Privacy constraints
- Budget enforcement
- SLA requirements
- High-risk routing rules
- Mandatory verification
- Human escalation requirements

Policy decisions remain fully separated from optimization logic for transparency and auditability.

---

## 8. Contextual Quality Estimation

Each feasible candidate is evaluated using Bayesian quality estimation combining

- Historical priors
- Task fit
- Domain expertise
- Workflow compatibility
- Runtime telemetry
- Reliability
- Safety support
- Operational health

---

## 9. Runtime Telemetry

Routing decisions adapt to live operational conditions such as

- Availability
- Latency
- Failure rate
- Rate limiting
- Operational pressure
- Telemetry freshness

This prevents routing solely from static benchmark performance.

---

## 10. Pareto Candidate Reduction

Dominated candidates are removed before optimization.

The remaining models represent the efficient trade-off frontier across

- Quality
- Cost
- Latency
- Reliability
- Safety

---

## 11. Multi-Objective Optimization

Candidate models are scored simultaneously across

- Quality
- Cost
- Latency
- Reliability
- Safety
- Confidence
- Domain expertise
- Context support

Workflow-specific routing profiles adjust optimization priorities for different application domains.

---

## 12. Workflow Planning

Atlas Router supports

- Single-model execution
- Multi-stage execution
- Multi-model orchestration
- Verification workflows
- Fallback planning
- Human escalation

The final output is an executable routing plan rather than simply selecting a single model.

---

# Supported Modalities

| Input Type | Supported |
|------------|-----------|
| Text | ✅ |
| Images | ✅ |
| PDFs | ✅ |
| Audio | ✅ |
| Video | ✅ |
| Spreadsheets | ✅ |
| Presentations | ✅ |

---

# Core Components

- Canonical Model Registry
- Artifact Inspection Engine
- Lightweight Semantic Extraction
- Conflict Detection Engine
- Structured Semantic Parser
- Task Feature Builder
- Feasibility Filter
- Policy Engine
- Bayesian Quality Estimator
- Runtime Telemetry Engine
- Pareto Optimizer
- Utility Scoring Engine
- Confidence Estimator
- Workflow Planner
- Verification Planner
- Explainability Module
- Decision Logger
- Learning Framework

---

# Optimization Objectives

Atlas Router simultaneously optimizes

- Response Quality
- Execution Cost
- Latency
- Runtime Reliability
- Safety
- Confidence
- Context Window
- Domain Expertise
- Operational Availability

---

# Supported Routing Strategies

- Single Model Routing
- Multi-Stage Routing
- Verification Routing
- Fallback Routing
- Budget-Aware Routing
- SLA-Constrained Routing
- Policy-Constrained Routing
- Multi-Modal Routing

---

# Example Workflow

```text
Prompt:
Explain this

Uploaded File:
Scanned Legal Contract

↓

Artifact Inspection

↓

Semantic Extraction

↓

Topic Inference

↓

Conflict Detection

↓

Task Parsing

↓

Policy Validation

↓

Candidate Evaluation

↓

Utility Optimization

↓

Verification Planning

↓

Final Execution Plan

↓

Primary Model
+ Fallback Models
+ Verifiers
+ Confidence
+ Human-Readable Explanation
```

---

# Explainability

Every routing decision includes

- Selected model(s)
- Multi-stage execution plan
- Alternative candidates
- Confidence estimate
- Utility score
- Expected latency
- Estimated cost
- Policy decisions
- Verification strategy
- Fallback models
- Human escalation status
- Runtime telemetry summary
- Human-readable explanation
- Reproducibility metadata

---

# Future Enhancements

- Embedding-based semantic extraction
- Reinforcement learning from routing outcomes
- Adaptive utility weight optimization
- Online confidence calibration
- Real-time benchmark integration
- Distributed multi-provider routing
- Streaming execution planning
- Automatic registry updates
- Continuous telemetry learning

---

# Technologies

- Python
- NumPy
- Pandas
- Dataclasses
- PyMuPDF
- Pillow
- FFprobe / Mutagen
- openpyxl
- python-pptx
- Bayesian Statistics
- Multi-Objective Optimization
- Decision Intelligence
- Workflow Orchestration
