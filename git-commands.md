\## 11. Crear Directorio y Archivo CI

\- \*\*Comando\*\*: `mkdir -p .github/workflows \&\& notepad .github/workflows/ci.yml`

\- \*\*Explicación\*\*: Crea el directorio `.github/workflows` y el archivo YAML `ci.yml` para configurar GitHub Actions.

\- \*\*Contenido\*\*: 

&nbsp; ```yaml

&nbsp; name: CI Pipeline

&nbsp; on:

&nbsp;   push:

&nbsp;     branches: \[ master, feature/\*, fix/\* ]

&nbsp;   pull\_request:

&nbsp;     branches: \[ master ]

&nbsp; jobs:

&nbsp;   build-and-test:

&nbsp;     runs-on: ubuntu-latest

&nbsp;     steps:

&nbsp;       - name: Checkout code

&nbsp;         uses: actions/checkout@v4

&nbsp;       - name: Set up Node.js

&nbsp;         uses: actions/setup-node@v4

&nbsp;         with:

&nbsp;           node-version: '18'

&nbsp;       - name: Install dependencies

&nbsp;         run: npm install

&nbsp;       - name: Build project

&nbsp;         run: npm run build

&nbsp;       - name: Run tests

&nbsp;         run: npm test

&nbsp;       - name: Generate report

&nbsp;         run: echo "Test report generated" > test-report.txt

&nbsp;         if: always()

&nbsp;       - name: Upload report artifact

&nbsp;         uses: actions/upload-artifact@v4

&nbsp;         with:

&nbsp;           name: test-report

&nbsp;           path: test-report.txt

