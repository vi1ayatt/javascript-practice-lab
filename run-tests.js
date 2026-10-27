const fs = require('node:fs');
const path = require('node:path');
const { isDeepStrictEqual } = require('node:util');

const tasks = [
  ['01-personal-info', 'personalInfo', 'Easy'],
  ['02-shopping-receipt', 'shoppingReceipt', 'Easy'],
  ['03-student-grade', 'studentGrade', 'Medium'],
  ['04-movie-ticket', 'movieTicket', 'Medium'],
  ['05-atm', 'atm', 'Hard'],
  ['06-delivery', 'delivery', 'Hard'],
];

const requested = process.argv[2];
const selected = requested
  ? tasks.filter(([id]) => id.startsWith(requested.padStart(2, '0')) || id === requested)
  : tasks;
if (selected.length === 0) {
  console.error('Tapşırıq tapılmadı. İstifadə: node run-tests.js [1..6]');
  process.exitCode = 1;
} else {
  let passed = 0, total = 0;
  for (const [id, fnName, level] of selected) {
    const testCases = JSON.parse(fs.readFileSync(path.join(__dirname, 'tests', id + '.json'), 'utf8'));
    console.log(`\n${id} (${level})`);
    let fn;
    try { fn = require(path.join(__dirname, 'tasks', id + '.js'))[fnName]; }
    catch (error) { console.error('  Fayl yüklənmədi:', error.message); }
    for (let i = 0; i < testCases.length; i++) {
      total++;
      const { input, expected } = testCases[i];
      try {
        if (typeof fn !== 'function') throw new Error('Funksiya tapılmadı');
        const actual = fn(...input);
        const ok = isDeepStrictEqual(actual, expected);
        if (ok) passed++;
        console.log(`  Test ${i + 1}: ${ok ? 'PASS ✓' : 'FAIL ✗'}`);
        if (!ok) {
          console.log('    Input:     ', JSON.stringify(input));
          console.log('    Gözlənilən:', JSON.stringify(expected));
          console.log('    Alınan:    ', JSON.stringify(actual));
        }
      } catch (error) {
        console.log(`  Test ${i + 1}: ERROR ✗ (${error.message})`);
      }
    }
  }
  console.log(`\nYEKUN: ${passed}/${total} test keçdi — ${Math.round(passed / total * 100)} bal / 100`);
  if (passed !== total) process.exitCode = 1;
}
