.PHONY: build-RuntimeDependenciesLayer build-lambda-common
.PHONY: build-HelloFunction build-GetProductFunction

build-HelloFunction:
	$(MAKE) HANDLER=src/modules/hello/index.ts build-lambda-common
build-GetProductFunction:
	$(MAKE) HANDLER=src/modules/product/handlers/getProducts.ts build-lambda-common

build-lambda-common:
	npm install
	# rm -rf dist
	echo "{\"extends\": \"./tsconfig.json\", \"include\": [\"${HANDLER}\"] }" > tsconfig-only-handler.json
	npm run build -- --build tsconfig-only-handler.json
	# cp -r dist "$(ARTIFACTS_DIR)/"

build-RuntimeDependenciesLayer:
	mkdir -p "$(ARTIFACTS_DIR)/nodejs"
	cp package.json package-lock.json "$(ARTIFACTS_DIR)/nodejs/"
	npm install --production --prefix "$(ARTIFACTS_DIR)/nodejs/"
	rm "$(ARTIFACTS_DIR)/nodejs/package.json" # to avoid rebuilding when changes don't relate to dependencies