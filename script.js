const copyBtn = document.getElementById('copyBib');
const bib = document.getElementById('bibtexText');

if (copyBtn && bib) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(bib.innerText);
      const old = copyBtn.textContent;
      copyBtn.textContent = 'Copied';
      setTimeout(() => { copyBtn.textContent = old; }, 1400);
    } catch (e) {
      copyBtn.textContent = 'Select & copy';
    }
  });
}
