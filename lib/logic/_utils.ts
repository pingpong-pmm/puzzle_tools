export const True = true,
  False = false,
  None = false;

Object.defineProperty(Array.prototype, "append", {
  enumerable: false,
  value: function (el) {
    this.push(el);
  },
});

Object.defineProperty(Array.prototype, "remove", {
  enumerable: false,
  value: function (el) {
    const index = this.indexOf(el);
    if (index > -1) {
      this.splice(index, 1);
    }
  },
});

Object.defineProperty(Array.prototype, "ipop", {
  enumerable: false,
  value: function (index) {
    return this.splice(index, 1)[0];
  },
});

Object.defineProperty(Array.prototype, "toNormalString", {
  enumerable: false,
  value: function () {
    return this.toString().replaceAll(",", "");
  },
});

Object.defineProperty(Array.prototype, "insert", {
  enumerable: false,
  value: function (index, item) {
    this.splice(index, 0, item);
  },
});

Object.defineProperty(String.prototype, "isalpha", {
  enumerable: false,
  value: function () {
    return Boolean(this.match(/^[A-Za-z]+$/));
  },
});

Object.defineProperty(String.prototype, "capitalize", {
  enumerable: false,
  value: function () {
    return this.substring(0, 1).toUpperCase() + this.substring(1).toLowerCase();
  },
});

Object.defineProperty(String.prototype, "replaceAt", {
  enumerable: false,
  value: function (index, replacement) {
    if (index >= this.length) {
      return this.valueOf();
    }

    return this.substring(0, index) + replacement + this.substring(index + 1);
  },
});

Object.defineProperty(String.prototype, "shuffle", {
  enumerable: false,
  value: function () {
    let a = this.split(""),
      n = a.length;

    for (let i = n - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return String(a.join(""));
  },
});

export function rand_int(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

export function rand_choice(ls) {
  return ls[~~(Math.random() * ls.length)];
}

export function rand_choices(ls, k) {
  let toRet = [];
  for (let i = 0; i < k; i++) toRet.push(ls[~~(Math.random() * ls.length)]);
  return toRet;
}

export function rand_shuffle(arr) {
  let array = JSON.parse(JSON.stringify(arr));
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function list_dup(ls) {
  return JSON.parse(JSON.stringify(ls));
}

export function dict_dup(ls) {
  return JSON.parse(JSON.stringify(ls));
}

export function len(ls) {
  return ls.length;
}

export function setlen(ls) {
  return ls.size;
}

export function str(s) {
  return String(s);
}

export function int(i) {
  return Math.floor(i);
}

export function chr(i) {
  return String.fromCharCode(i);
}

export function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

export function* xrange(start, end, step) {
  let ctr = start;
  while (ctr < end) {
    yield ctr;
    ctr += step;
  }
}
