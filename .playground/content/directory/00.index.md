---
title: Kitchen Sink
description: A test page for content
---

Text can be **bold**, _italic_, or ~~strike through~~. [Link to another page will have an icon](https://matter-labs.io).
A link to a relative page in the site [will not have an icon beside it](/about-us).
A paragraph should have whitespace around it.

Here's some Bob Ross ipsum generated text to illustrate paragraphs.

Sometimes you learn more from your mistakes than you do from your masterpieces.
Paint anything you want on the canvas.
Create your own world. A tree needs to be your friend if you're going to paint him.
We'll throw some old gray clouds in here just sneaking around and having fun.
There's nothing wrong with having a tree as a friend.
You're the greatest thing that has ever been or ever will be.
You're special. You're so very special.

See how easy it is to create a little tree right in your world.
You could sit here for weeks with your one hair brush trying to do that - or you could do it with one stroke with an almighty brush.
Let's get crazy. It's so important to do something every day that will make you happy.

---
## Code snippets

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```solidity [solidity-example.sol]
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### Header 4 does not show up in the `TOC`

You should notice that the header 4 will not show up in the
Table of Contents on the side.

> Here is a blockquote.
>
> Content in a blockquote will be styled differently.

## ZK parser

We have properties that can be parsed with a tag.
The tag is wrapped by double percent symbols and starts with `zk_`.
Object properties are separated by `_`.

The following text is replaced by `zk_mainnet_name` (wrapped with double percent symbols) -> %%zk_mainnet_name%%

## Custom components

Following are a list of components available in this layer template.

### Network adder

:network-adder{network="mainnet"}  :network-adder{network="testnet"}

### Callout

::callout{icon="i-heroicons-bell-alert-solid" color="blue"}
**This is a callout component.**
You can use this to callout particular bits of content that should be read.
::

::callout{icon="i-heroicons-chat-bubble-oval-left-20-solid" color="orange"}
**Callout components can be customized**
You can edit the icon and the color of a callout.
::

### Display partial component

:display-partial{path="/_partials/_example-partial"}

### Content switcher component

::content-switcher
---
items: [{
  label: 'Tab One',
  partial: '_partials/_content-switcher-one'
}, {
  label: 'Tab Two',
  partial: '_partials/_content-switcher-two'
}]
---
::

### Icon list

:check-icon Here is a checked icon list.

:check-icon Some more content in a list.

:check-icon Another item in the list.

:check-icon The last item in the list.

### Drop panel

::drop-panel
  ::panel{label="Click me!"}
    We can have content hidden under a panel tab that opens up on click.
  ::
::

## Lists

- This is an unordered list following a header.
- This is an unordered list following a header.
- This is an unordered list following a header.

1. This is an ordered list following a header.
1. This is an ordered list following a header.
1. This is an ordered list following a header.

[This is a very long link which wraps and therefore doesn't overflow
even when it comes at the beginning](.) of the line.

- [This is a very long link which wraps and therefore doesn't overflow the line
  when used first in an item](.) in a list.

| Col 1                | Col 2             | Col 3 |
|----------------------|-------------------|-------|
| Row 1                | some content      |  ✅   |
| Row 2                | content in a cell |  ✅   |
| Row 3                | more `cell` data  |  ✅   |
| Row 4                | `another cell`    |  ✅   |

### Unordered list

- Item foo
- Item bar
- Item baz
- Item zip

### Ordered list

1. Item one
1. Item two
1. Item three
1. Item four

### Ordered lists continued

1. Item one
1. Item two

Some text to break up lists

1. Item three
1. Item four

### Nested list

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

## Image

![Example Image](/images/atlas-erc20-interact.png)

## More code

::code-group

```bash [npm]
npm run script
```

```bash [yarn]
yarn hardhat script
```

```bash [pnpm]
pnpm run script
```

```bash [bun]
bun run script
```

::

```solidity [ZeekSecretMessage.sol]
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ZeekSecretMessages {
    bytes32[] private messages;

    // Event to acknowledge a new message
    event MessageReceived(string);

    constructor() {
        // Zeek initializes the contract with a welcome message
        emit MessageReceived("Zeek welcomes you to ZKsync!");
    }

    // Function to send a "secret" message to Zeek
    function sendMessage(string memory _message) public {
        bytes32 hashedMessage = keccak256(abi.encodePacked(_message));
        messages.push(hashedMessage);

        // Acknowledge the message receipt with Zeek's reply
        emit MessageReceived("ZK is the endgame - Message received!");
    }

    // Function to count the total messages sent to Zeek
    function getTotalMessages() public view returns (uint) {
        return messages.length;
    }
}
```
