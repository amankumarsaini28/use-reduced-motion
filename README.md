# @thejsguy/use-reduced-motion

A custom React hook for detecting if the user has expressed a preference for reduced motion using the `prefers-reduced-motion` Media Query.

## Installation

Install the package using npm or yarn:

```bash
npm install @thejsguy/use-reduced-motion
```

or

```bash
yarn add @thejsguy/use-reduced-motion
```

## Peer Dependencies

Ensure you have the following peer dependencies installed:

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1"
}
```

## Usage

```typescript
import { useReducedMotion } from '@thejsguy/use-reduced-motion';

function MyComponent() {
  const prefersReducedMotion = useReducedMotion();

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <div>
      <button onClick={handleScroll}>Scroll to Top</button>
    </div>
  );
}
```


## API

`useReducedMotion()`

Returns a boolean value indicating whether the user has expressed a preference for reduced motion (`true`) or not (`false`).


## License

ISC License

Copyright 2024, Aman Kumar Saini

Permission to use, copy, modify, and/or distribute this software for any purpose
with or without fee is hereby granted, provided that the above copyright notice
and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
