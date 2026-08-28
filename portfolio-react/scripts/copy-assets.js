const fs = require('fs')
const path = require('path')

const srcDir = path.join(__dirname, '..', '..', 'portfolio_html', 'assets')
const destDir = path.join(__dirname, '..', 'public', 'assets')

if (!fs.existsSync(srcDir)) {
  console.error('Fonte de assets não encontrada:', srcDir)
  process.exit(1)
}

fs.mkdirSync(destDir, { recursive: true })

const files = fs.readdirSync(srcDir)
for (const file of files) {
  const srcFile = path.join(srcDir, file)
  const destFile = path.join(destDir, file)
  fs.copyFileSync(srcFile, destFile)
  console.log('Copiado', file)
}

console.log('Cópia de assets concluída.')
