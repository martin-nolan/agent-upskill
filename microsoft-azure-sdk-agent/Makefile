.PHONY: install run clean help

# Default target
.DEFAULT_GOAL := help

# Default query if not specified
QUERY ?= What time is it in Seattle?

install: ## Install Python dependencies using uv
	uv pip install agent-framework --pre python-dotenv

run: ## Run the agent (use: make run QUERY="your query here")
	uv run agent.py "$(QUERY)"

run-default: ## Run the agent with default query
	uv run agent.py

clean: ## Remove Python cache files
	find . -type d -name "__pycache__" -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete
	find . -type f -name "*.pyo" -delete
	rm -rf .venv/

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'
	@echo ''
	@echo 'Examples:'
	@echo '  make install'
	@echo '  make run'
	@echo '  make run QUERY="What time is it in Tokyo?"'
