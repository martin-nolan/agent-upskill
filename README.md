# Agent Upskill

A collection of agent development examples using different frameworks and SDKs.

## Projects

### 1. Google ADK Agent
Location: [`google-adk/`](google-adk/)

Google Agent Development Kit (ADK) example with TypeScript.

**Tech Stack:**
- TypeScript
- Google ADK (`@google/adk`)
- Gemini 2.5 Flash model

**Quick Start:**
```bash
cd google-adk/time-agent
npm install
npm run cli  # Run CLI interface
npm run web  # Run web interface
```

### 2. Microsoft Azure SDK Agent
Location: [`microsoft-azure-sdk-agent/`](microsoft-azure-sdk-agent/)

Azure Agent Framework example in Python.

**Tech Stack:**
- Python
- Azure Agent Framework
- Azure OpenAI
- uv (package manager)

**Quick Start:**

```bash
cd microsoft-azure-sdk-agent
uv pip install agent-framework --pre python-dotenv
uv run agent.py "What time is it in Tokyo?"
```

## Current Features

Both projects currently demonstrate:
- **Function/Tool Calling** - Structured tool definitions and execution
- **Custom Tool Implementation** - Building domain-specific tools
- **Environment-based Configuration** - Secure API key management
- **Basic Agent Setup** - Simple LLM agent initialization

## Learning Goals

Planned concepts to explore across both frameworks:

### Orchestration & Multi-Agent Patterns
- **Orchestration Patterns** - Sequential, parallel, loop, and routing workflows
- **Multi-agent Handoff** - Specialist agents with dynamic delegation
- **Agent Composition** - Building complex systems from simple agents

### State & Memory Management
- **Session State** - Temporary scratchpad data for conversations
- **Cross-session Memory** - Persistent knowledge stores and RAG patterns
- **Context Windows** - Managing long-running conversations

### Real-time & Streaming
- **Token Streaming** - Real-time response generation
- **Tool Event Streaming** - Intermediate tool result updates
- **Bidirectional Streaming** - Live voice-like interactions

### Observability & Evaluation
- **OpenTelemetry Tracing** - Distributed tracing for agent workflows
- **Cost & Latency Monitoring** - Track LLM usage and performance
- **Evaluation Frameworks** - Test datasets, trajectory scoring, output quality
- **Regression Testing** - Automated agent behavior validation

### Production & Deployment
- **Deployment Targets** - Vertex Agent Engine (Google), Azure hosting patterns
- **Scalability Patterns** - Load balancing, rate limiting, caching
- **Error Handling** - Retry logic, fallbacks, graceful degradation

## Prerequisites

- Node.js 20.12.7 or later
- npm 9.2.0 or later
- Python 3.8 or later (for Python examples)
- uv (for Python package management)

## Configuration

Each project requires API keys to be configured in their respective `.env` files. See individual project READMEs for details.

---

Primary learning path: **Google ADK first, then replicate patterns in Azure Agent Framework.**
