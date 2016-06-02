# sha1-sum

> SHA1 sum of a file

## install

install the [package](http://npmjs.org/sha1-sum) with [npm](https://npmjs.org):

```sh
$ npm install sha1-sum
```

## usage

```js
import sha1sum from 'sha1-sum';

sha1sum('path/to/file').then(sum => console.log(sum));
```

## api

### `sha1sum(file: string): Promise<string>`

Returns a `Promise` that will resolve to the SHA1 sum of `file`.

## license

MIT
