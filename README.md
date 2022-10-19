# react-native-key-event-listener
handles the external inputs
## Installation

```sh
npm install react-native-key-event-listener
```

## Usage

```js
import { KeyEvent  } from "@onurkantar/react-native-key-event-listener";

// ...

componentDidMount() {
    // if you want to react to keyDown
    KeyEvent.onKeyDownListener((keyEvent) => {
      console.log(`onKeyDown keyCode: ${keyEvent.keyCode}`);
      console.log(`Action: ${keyEvent.action}`);
      console.log(`Key: ${keyEvent.pressedKey}`);
    });
}

componentWillUnmount() {
    // if you are listening to keyDown
    KeyEvent.removeKeyDownListener();
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
