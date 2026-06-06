import { writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const assets = [
  { url: 'https://cdn.durable.co/blocks/239hcnyHD4569mEuHUPGTsKp7Aq8Ro2k36zGKKOsDfIt3Bvi6SD4b4O9qWNoOHxP.png', dest: 'public/images/logo.png' },
  { url: 'https://cdn.durable.co/covers/100D2YcrOs8BJqizkMY4USqsdFXmYJAEFV5TEbRTIfoKeNN3zP3m5rlzgOyj2aP5.jpg', dest: 'public/images/hero-bg.jpg' },
  { url: 'https://cdn.durable.co/getty/eqkPmbfwMH0yei4uzNkezgcxBcZzF1QKpk5pMzCFb65SvXU6jzP6FRCw7WdlW9JZ.jpeg', dest: 'public/images/refit-card.jpg' },
  { url: 'https://cdn.durable.co/getty/1eQ7FjUDBOTXjMR4mKrefw4i2KWxQbzAOLudVqgDnDF177qgQZZFsmuts3KpPn9k.jpeg', dest: 'public/images/technical-card.jpg' },
  { url: 'https://cdn.durable.co/getty/2aYKHWDXKan5fsiF0VSp3k4q4tSdowoA4YH8fmUqF9oJsM5DxPrvmV5c8NNlLl4A.jpeg', dest: 'public/images/newbuild-card.jpg' },
  { url: 'https://cdn.durable.co/getty/33wpbD6CdpGUNa3xwCmD8gDuug0afP2g0966CCSURmcd8HDADXuHdupiS4AMdjiT.jpeg', dest: 'public/images/banner.jpg' },
  { url: 'https://cdn.durable.co/blocks/fUuORm80DUzUIp5uvVjUDZrU7ctHfnt507YohuOBlCqw5KelYbnFMDr3grSRftdg.jpg', dest: 'public/images/about-yacht.jpg' },
  { url: 'https://cdn.durable.co/blocks/4GVe3i1cOSiROYVJQSJLL61f8YMaQHuDjH4RyT72oKPpLF525wg203jkADaPu8WQ.png', dest: 'public/images/superyacht-uk.png' },
  { url: 'https://cdn.durable.co/blocks/24awwDLEAjOjfnc6GqevUhZZCLlgLZiC2JcmOc1QJiwBEQgKYdTy3oT9oEhtK98B.png', dest: 'public/images/british-marine.png' },
  { url: 'https://cdn.durable.co/logos/1fVRKtuXXPJ9SNbcwLjbt1j7rc3WF8wEq6YBcKuuahce2qiiZRi6kh57z4qEa5xs.png', dest: 'public/seo/favicon.png' },
];

async function downloadAsset(url, dest) {
  const fullDest = join(root, dest);
  await mkdir(dirname(fullDest), { recursive: true });
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = await res.arrayBuffer();
    await writeFile(fullDest, Buffer.from(buf));
    console.log(`✓ ${dest}`);
  } catch (err) {
    console.error(`✗ ${dest}: ${err.message}`);
  }
}

// Download 4 at a time
for (let i = 0; i < assets.length; i += 4) {
  await Promise.all(assets.slice(i, i + 4).map(a => downloadAsset(a.url, a.dest)));
}
console.log('Done!');
