#!/usr/bin/env python3
"""
Test script to demonstrate Zero Trust enforcement
Creates a fake process to trigger forensic tool detection
"""

import subprocess
import time
import sys

def test_zero_trust_violation():
    """Test Zero Trust violation scenario"""
    print("🧪 Testing Zero Trust Enforcement")
    print("=" * 40)
    
    # Start a fake "wireshark" process (just sleep)
    print("🔧 Starting fake forensic tool process...")
    
    if sys.platform.startswith('win'):
        # Windows - create a renamed copy of a simple process
        fake_process = subprocess.Popen(['ping', '-n', '60', 'localhost'], 
                                       stdout=subprocess.DEVNULL, 
                                       stderr=subprocess.DEVNULL)
    else:
        # Linux/Mac - use sleep
        fake_process = subprocess.Popen(['sleep', '60'])
    
    print(f"✅ Fake process started (PID: {fake_process.pid})")
    print("🚀 Now running secure_wipe_auditor.py...")
    print("⚠️  This should trigger Zero Trust violation")
    
    try:
        # Run the auditor - it should detect the "forensic tool" and exit
        result = subprocess.run([sys.executable, 'secure_wipe_auditor.py', '--mock'], 
                              capture_output=True, text=True, input='test_operator\n')
        
        print("\n" + "="*50)
        print("AUDITOR OUTPUT:")
        print("="*50)
        print(result.stdout)
        
        if result.stderr:
            print("ERRORS:")
            print(result.stderr)
            
        print(f"Exit Code: {result.returncode}")
        
    finally:
        # Clean up the fake process
        fake_process.terminate()
        fake_process.wait()
        print(f"🧹 Cleaned up fake process")

if __name__ == "__main__":
    test_zero_trust_violation()