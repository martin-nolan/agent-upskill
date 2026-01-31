# Agent-Upskill Roadmap

This roadmap is the single source of truth for how this repo evolves into an agent-first engineering portfolio.
It is intentionally long and comprehensive; work through it at your own pace.

## How to use this roadmap

- Each phase can be completed as a standalone milestone.
- Every phase produces demo-able outputs (examples, docs, tests, or deploy artifacts).
- Every example should include: README, local dev UI support, CLI script, tests.

## Phase 0 — Repo Spine & Navigation

**Goal:** Make the repo easy to navigate and self-teaching.

**Deliverables**
- docs hub with a clear learning path
- repo map + conventions
- updated root README
- example README template

**Checklist**
- [ ] Create docs directory with core learning docs
- [ ] Add `docs/repo-map.md` explaining layout and usage
- [ ] Add `docs/templates/example-readme-template.md`
- [ ] Update root `README.md` with new structure and learning path
- [ ] Add `CONTRIBUTING.md` with conventions and expectations

## Phase 1 — Core Foundations (Google ADK, TypeScript)

**Goal:** Master ADK in TypeScript with production-shaped examples.

**Target structure**
```
/google-adk/examples/
  basic-agent/
  tool-calling-agent/
  safe-tool-calling-agent/
  streaming-agent/
  memory-agent/
  multimodal-agent/
  evaluator-agent/
```

**Checklist**
- [ ] Add `basic-agent/` example
- [ ] Add `tool-calling-agent/` example
- [ ] Add `safe-tool-calling-agent/` example
- [ ] Add `streaming-agent/` example
- [ ] Add `memory-agent/` example
- [ ] Add `multimodal-agent/` example
- [ ] Add `evaluator-agent/` example
- [ ] For each example: README, CLI, local dev UI, tests
- [ ] Add `dev/` helper scripts

**Dev tooling**
```
/dev
  setup.sh
  run_dev_ui.sh
  lint_and_test.sh
```

## Phase 1b — Python Parity (Google ADK)

**Goal:** Mirror ADK usage in Python for Agent Engine compatibility.

**Target structure**
```
/google-adk-python/
  simple-agent/
  tool-agent/
  workflow-agent/
  deployable-agent/
```

**Checklist**
- [ ] Create `google-adk-python/` root
- [ ] Add `simple-agent/` example
- [ ] Add `tool-agent/` example
- [ ] Add `workflow-agent/` example
- [ ] Add `deployable-agent/` example
- [ ] For each example: README, CLI, local dev UI, tests

## Phase 2 — Orchestration & Multi-Agent Patterns

**Goal:** Build core orchestration patterns and multi-agent behaviors.

**Target structure**
```
/orchestration/
  sequential/
  parallel/
  loop/
  conditional-routing/
  llm-routing-agent/
  specialist-handoff/
  multi-agent-team/
```

**Checklist**
- [ ] Sequential workflow example
- [ ] Parallel workflow example
- [ ] Loop workflow example
- [ ] Conditional routing example
- [ ] LLM routing agent example
- [ ] Specialist handoff example
- [ ] Multi-agent team example
- [ ] For each example: README, CLI, local dev UI, tests

**Patterns to include**
- planner-executor
- critic-writer
- negotiation and delegation
- role-based handoff

## Phase 2b — Cross-Framework Parity (Later)

**Goal:** Demonstrate orchestration knowledge across ecosystem tools.

**Target structure**
```
/langgraph-examples/
/crewai-examples/
/azure-agent-framework-examples/
```

**Checklist**
- [ ] Mirror sequential workflows
- [ ] Mirror parallel workflows
- [ ] Mirror routing patterns
- [ ] Mirror multi-agent teams
- [ ] For each example: README, CLI, tests

## Phase 3 — Enterprise-Ready Engineering

**Goal:** Prove production-grade engineering skills.

**Target structure**
```
/enterprise/
  safety/
  observability/
  evaluation/
  governance/
  security/
```

### 3.1 Safety

**Checklist**
- [ ] Tool input sanitization utilities
- [ ] Output validators
- [ ] Clarifying question patterns
- [ ] Redaction tools
- [ ] PII detection hooks
- [ ] `enterprise/safety/safe_tool_wrapper.ts`
- [ ] `enterprise/safety/redaction.py`
- [ ] `enterprise/safety/prompt_policies.md`

### 3.2 Observability

**Checklist**
- [ ] OpenTelemetry tracing setup
- [ ] Token usage logging
- [ ] Tool execution timeline tracking
- [ ] Error correlation IDs

**Target structure**
```
/enterprise/observability/
  otel_config.ts
  agent_tracing.ts
  logs/
  dashboards/
```

### 3.3 Evaluation & Regression

**Checklist**
- [ ] Golden tests
- [ ] Trajectory tests
- [ ] Evaluation runner
- [ ] Datasets for evaluation
- [ ] Trajectory scoring
- [ ] Multi-step correctness evaluation
- [ ] Latency/cost regression checks
- [ ] GitHub Action: `run_evaluation.yml`

**Target structure**
```
/enterprise/evaluation/
  golden-tests/
  trajectory-tests/
  evaluation-runner.ts
  datasets/
```

### 3.4 Governance

**Checklist**
- [ ] Agent owner responsibilities
- [ ] Tool permission matrix
- [ ] Audit logging standards
- [ ] Safe release checklist
- [ ] Compliance considerations

**Target structure**
```
/enterprise/governance/
  agent_owner_responsibilities.md
  tool_permission_matrix.md
  audit_logging_standards.md
  safe_release_checklist.md
  compliance_considerations.md
```

## Phase 4 — Deployment & Runtime (Vertex AI Agent Engine)

**Goal:** Production deployment readiness.

**Target structure**
```
/deployment/
  agent-engine/
  cloud-run/
  docker/
  hybrid/
```

**Agent Engine requirements**
- Standard deployment path
- Reasoning engine configuration
- Session management
- Memory bank integration
- Load testing
- Rollback scripts

**Scripts**
- `deploy_to_agent_engine.sh`
- `smoke_test_agent.py`
- `rollback_agent.sh`

## Phase 5 — Real-World Integrations

**Goal:** Showcase real tool integrations and grounded agents.

**Target structure**
```
/integrations/
  sky-data-stubs/
  http-tools/
  rag/
  bigquery/
  search/
  multimodal/
```

**Checklist**
- [ ] HTTP GET/POST tool
- [ ] BigQuery query tool
- [ ] Search/RAG tool
- [ ] Auth patterns (service account impersonation)

## Phase 6 — Specialist Agents

**Goal:** End-to-end agent development examples.

**Target structure**
```
/specialist-agents/
  reporting-agent/
  learning-agent/
  data-assistant/
  document-summariser/
  planning-agent/
```

**Requirements**
- Multi-agent orchestration
- RAG or external data
- Golden tests
- Deployable to Agent Engine
- README with diagrams

## Phase 7 — Full Blueprint (Enterprise Template)

**Goal:** A production-shaped, reusable template.

**Target structure**
```
/blueprints/
  enterprise-agent-template/
    src/agents/
    src/tools/
    src/workflows/
    src/memory/
    src/evaluations/
    infra/
    deployment/
    README.md
```

**Requirements**
- Infrastructure as Code
- Observability hooks
- Golden datasets
- Tests
- Safe tool calling
- Multi-agent orchestration
- Memory bank support
- Agent Engine deploy configs
- Cost controls
- Audit logs

## Phase 8 — Progression Map

**Goal:** Track skill outcomes.

**Outcomes**
- ADK mastery (TypeScript + Python)
- Multi-agent orchestration
- Production-safe tool calling
- Observability and OpenTelemetry
- Regression testing and evaluation
- Governance, safety, compliance patterns
- Multimodal agents
- Deployment to Vertex AI Agent Engine
- RAG grounding and integrations
- Reusable enterprise templates

## Definitions of Done

**Example is done when**
- README exists and explains the concept
- CLI script can run it
- Local dev UI can run it
- Tests exist (smoke test minimum)
- Inputs and outputs are documented

**Phase is done when**
- All target folders exist
- At least one example in that phase is fully complete
- Docs are updated to reflect changes
