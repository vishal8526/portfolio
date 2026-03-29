from pathlib import Path
import sys
import subprocess

resume_path = Path(r"d:\downloads\Portfolio\Vishal_Resume.pdf")

try:
    import pypdf  # type: ignore
except Exception:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf", "-q"])
    import pypdf  # type: ignore

reader = pypdf.PdfReader(str(resume_path))
print(f"PAGES: {len(reader.pages)}")
for page_number, page in enumerate(reader.pages, start=1):
    page_text = (page.extract_text() or "").strip()
    print(f"\n--- PAGE {page_number} ---\n")
    print(page_text[:10000])
