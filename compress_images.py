#!/usr/bin/env python3
"""
Compress images to reduce file size while maintaining quality.
"""
from PIL import Image
import os
from pathlib import Path

# Configuration
QUALITY = 85  # JPEG quality (1-100)
MAX_WIDTH = 1200
MAX_HEIGHT = 1200

def compress_image(input_path, output_path, quality=QUALITY, max_width=MAX_WIDTH, max_height=MAX_HEIGHT):
    """Compress and resize an image."""
    try:
        with Image.open(input_path) as img:
            # Convert RGBA to RGB if needed (for JPEG)
            if img.mode in ('RGBA', 'LA', 'P'):
                background = Image.new('RGB', img.size, (255, 255, 255))
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background
            
            # Resize if larger than max dimensions
            img.thumbnail((max_width, max_height), Image.Resampling.LANCZOS)
            
            # Save with compression
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
            
            original_size = os.path.getsize(input_path)
            compressed_size = os.path.getsize(output_path)
            ratio = (1 - compressed_size / original_size) * 100
            
            print(f"✓ {Path(input_path).name}: {original_size/1024/1024:.2f}MB → {compressed_size/1024/1024:.2f}MB (-{ratio:.1f}%)")
            return True
    except Exception as e:
        print(f"✗ Error processing {input_path}: {e}")
        return False

def main():
    # Compress profile photo
    profile_photo = "SAVE_20250418_112340.jpg.jpeg"
    if os.path.exists(profile_photo):
        compress_image(profile_photo, profile_photo, quality=QUALITY)
    
    # Compress all certificate images
    cert_root = "certificate"
    if os.path.exists(cert_root):
        for cert_folder in os.listdir(cert_root):
            cert_path = os.path.join(cert_root, cert_folder)
            if os.path.isdir(cert_path):
                for img_file in os.listdir(cert_path):
                    if img_file.lower().endswith(('.jpg', '.jpeg', '.png')):
                        img_path = os.path.join(cert_path, img_file)
                        compress_image(img_path, img_path, quality=QUALITY)
    
    print("\n✓ Image compression complete!")

if __name__ == "__main__":
    main()
