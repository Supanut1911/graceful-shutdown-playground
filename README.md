
### Set up
1. add module type at package.json
```
{
    ...

     "type": "module",

    ...
}
```

2. install typescript
```

    $ npm i typescript --save-dev
    $ npm i -D @types/node
```

3. add scripts to run via tsc
```
{
    ...

     "scripts": {
        "build": "tsc"
     }

    ...
}
```

4. create "tsconfig.json"
```
{
    "compilerOptions": {
      "module": "NodeNext",
      "moduleResolution": "NodeNext",
      "target": "ES2020",
      "sourceMap": true,
      "outDir": "dist",
    },
    "include": ["src/**/*"],
  }
```

---

### To run
```
  $ npm run build
  $ node dist/index/js

```