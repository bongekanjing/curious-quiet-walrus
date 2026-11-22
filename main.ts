// Writes one short text to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
//
// 1 to 280 characters, counted as Unicode code points, not only white space: the gate the sealed scorer runs.
// The text is a literal here, not built at run time, so the same bytes arrive on every run.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT =
  'The key was warm. Eleven years in a drawer had not cooled it, and she turned it twice in her palm before she ' +
  'remembered the door, and how quietly it had been left ajar.';

// The gate's own counting: code points, not UTF-16 units, and not only white space.
const points = [...TEXT].length;
if (points < 1 || points > 280) throw new Error(`the text is ${points} code points, outside 1 to 280`);
if (!/\S/.test(TEXT)) throw new Error('the text is only white space');

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
