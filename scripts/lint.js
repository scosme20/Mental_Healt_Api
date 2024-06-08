import { ESLint } from 'eslint';

(async function main() {
    const eslint = new ESLint();
    const results = await eslint.lintFiles(['src/**/*.js']);

    const formatter = await eslint.loadFormatter('stylish');
    const resultText = formatter.format(results);

    console.log(resultText);

    const hasErrors = results.some(result => result.errorCount > 0);
    process.exit(hasErrors ? 1 : 0);
})().catch(error => {
    process.exitCode = 1;
    console.error(error);
});
