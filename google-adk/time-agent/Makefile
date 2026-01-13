.PHONY: install build run cli web dev clean help

# Default target
.DEFAULT_GOAL := help

install: ## Install dependencies
	npm install

build: ## Build TypeScript to JavaScript
	npm run build

run: cli ## Run the agent in CLI mode (alias for 'cli')

cli: ## Run the agent in CLI mode
	npm run cli

web: ## Run the agent in web interface mode
	npm run web

dev: ## Run in development mode with auto-reload
	npm run dev

clean: ## Remove build artifacts and dependencies
	rm -rf dist/ node_modules/

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'
