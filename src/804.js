/**
 * @param {string[]} words
 * @return {number}
 */
module.exports = function uniqueMorseRepresentations(words) {
  const arr = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
  };
  const set = new Set();
  words.forEach((w) => {
    let str = '';
    for (let i = 0; i < w.length; i += 1) {
      str += arr[w[i]];
    }
    set.add(str);
  });
  return set.size;
};
