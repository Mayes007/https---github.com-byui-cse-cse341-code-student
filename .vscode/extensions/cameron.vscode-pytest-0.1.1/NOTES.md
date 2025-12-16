# Env file

Prior art.

- https://github.com/DonJayamanne/pythonVSCode/blob/35ab321bcda6b75456ff1d8661b33e8565b9bb55/src/client/common/envFileParser.ts
- https://github.com/DonJayamanne/pythonVSCode/blob/35ab321bcda6b75456ff1d8661b33e8565b9bb55/src/client/common/variables/environment.ts
- https://github.com/DonJayamanne/pythonVSCode/blob/35ab321bcda6b75456ff1d8661b33e8565b9bb55/src/client/common/variables/environmentVariablesProvider.ts

isValidPython

- https://github.com/DonJayamanne/pythonVSCode/blob/dc5812c083e967b2adf1c085422d6539e2f409b3/src/client/common/configSettings.ts#L417

```js
const pythonConfig = vscode.workspace.getConfiguration("python");
if (pythonConfig.pythonPath) {
  return {
    cmd: pythonConfig.pythonPath,
    args: ["-m", "pytest"]
  };
}
```

https://github.com/DonJayamanne/pythonVSCode/blob/master/package.json#L562

Command, set args.

````
    "commands": [
      {
        "command": "extension.sayHello",
        "title": "Hello World"
      }
    ],
    ```
````

https://github.com/kondratyev-nv/vscode-python-test-adapter
