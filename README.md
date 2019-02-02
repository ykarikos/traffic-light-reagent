# 🚦 Traffic lights on Reagent

Inspired by [Olavi's](https://twitter.com/0lpeh) [tweet](https://twitter.com/0lpeh/status/1090301982173261825), I gave a try using [Reagent](https://reagent-project.github.io/).

There's two versions:
- One using `js/setTimeout` in the [master](https://github.com/ykarikos/traffic-light-reagent/tree/master) branch
- Another using [Beicon](http://funcool.github.io/beicon/latest/) in the [streams](https://github.com/ykarikos/traffic-light-reagent/tree/streams) branch

Check the running demo at https://ykarikos.github.io/traffic-light-reagent/

### Development mode

To start the Figwheel compiler, navigate to the project folder and run the following command in the terminal:

```
lein figwheel
```

Figwheel will automatically push cljs changes to the browser.
Once Figwheel starts up, you should be able to open the `docs/index.html` page in the browser.

### REPL

The project is setup to start nREPL on port `7002` once Figwheel starts.
Once you connect to the nREPL, run `(cljs)` to switch to the ClojureScript REPL.

### Building for production

```
lein clean
lein package
```

## License

Licensed with [MIT License](LICENSE).

## Thanks

This project is a grateful recipient of the [Futurice Open Source sponsorship program](http://futurice.com/blog/sponsoring-free-time-open-source-activities?utm_source=github&utm_medium=spice) 🌶🦄
