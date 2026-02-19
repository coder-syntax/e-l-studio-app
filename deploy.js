const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');

// Crear archivo .nojekyll
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');

console.log('✓ Archivo .nojekyll creado');

try {
  // Guardar la rama actual
  const currentBranch = execSync('git branch --show-current').toString().trim();
  console.log(`✓ Rama actual: ${currentBranch}`);

  // Verificar si existe la rama gh-pages
  let ghPagesExists = false;
  try {
    execSync('git show-ref --verify --quiet refs/heads/gh-pages');
    ghPagesExists = true;
  } catch (e) {
    console.log('✓ Creando nueva rama gh-pages');
  }

  // Crear o cambiar a la rama gh-pages
  if (ghPagesExists) {
    execSync('git checkout gh-pages', { stdio: 'inherit' });
  } else {
    execSync('git checkout --orphan gh-pages', { stdio: 'inherit' });
  }

  // Limpiar la rama gh-pages (excepto out/)
  if (ghPagesExists) {
    execSync('git rm -rf .', { stdio: 'inherit' });
  }

  // Copiar archivos de out/ a la raíz
  execSync(`xcopy /E /I /Y "${outDir}\\*" .`, { stdio: 'inherit', shell: 'cmd.exe' });

  console.log('✓ Archivos copiados');

  // Agregar archivos
  execSync('git add .', { stdio: 'inherit' });

  // Commit
  const timestamp = new Date().toISOString();
  execSync(`git commit -m "Deploy to GitHub Pages - ${timestamp}"`, { stdio: 'inherit' });

  console.log('✓ Commit creado');

  // Push
  execSync('git push origin gh-pages --force', { stdio: 'inherit' });

  console.log('✓ Push completado');

  // Volver a la rama original
  execSync(`git checkout ${currentBranch}`, { stdio: 'inherit' });

  console.log('\n✅ Deploy exitoso! Tu sitio estará disponible en:');
  console.log('https://coder-syntax.github.io/e-l-studio-app/\n');

} catch (error) {
  console.error('❌ Error durante el deploy:', error.message);
  process.exit(1);
}
