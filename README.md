# dynamic import demo

So it looks like dynamic import is _truly_ dynamic. How does it generated the chunked files for something it doesn't know about on runtime?!

1. `yarn`
1. `yarn start`
1. or `yarn build && serve -s build -p 3000`, and it still works!

It looks like when running through webpack, it code splits correctly (where `MyComponent.js`) is a separate chunk, but when built statically, it's part of the main bundle.

Can someone explain this to me, pretty please?
