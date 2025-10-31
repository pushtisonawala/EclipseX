#!/usr/bin/env python3
"""
Hackman USB Wipe Simulator
Simulates USB device wiping and generates certificates
"""

import os
import json
import time
import uuid
import hashlib
from datetime import datetime
from pathlib import Path

def simulate_usb_detection():
    """Simulate detecting a USB device"""
    print("🔍 Scanning for USB devices...")
    time.sleep(1)
    
    # Simulate device detection
    simulated_device = {
        "device_path": "/dev/sdb1",
        "vendor": "SanDisk",
        "model": "Ultra USB 3.0",
        "serial": "SD-USB-789012",
        "capacity": "32GB",
        "mount_point": "D:\\",
        "filesystem": "FAT32"
    }
    
    print(f"✅ USB Device Detected:")
    print(f"   Vendor: {simulated_device['vendor']}")
    print(f"   Model: {simulated_device['model']}")
    print(f"   Serial: {simulated_device['serial']}")
    print(f"   Capacity: {simulated_device['capacity']}")
    print(f"   Mount Point: {simulated_device['mount_point']}")
    
    return simulated_device

def simulate_pre_wipe_analysis(device):
    """Simulate analyzing device before wiping"""
    print(f"\n🔍 Analyzing device {device['model']}...")
    time.sleep(2)
    
    analysis = {
        "files_found": 47,
        "total_size": "2.3 GB",
        "file_types": ["Documents", "Images", "Videos", "System Files"],
        "classification": "Internal Use Only",
        "contains_sensitive_data": True
    }
    
    print(f"   Files Found: {analysis['files_found']}")
    print(f"   Total Size: {analysis['total_size']}")
    print(f"   File Types: {', '.join(analysis['file_types'])}")
    print(f"   Data Classification: {analysis['classification']}")
    
    return analysis

def simulate_secure_wipe(device, method="Single Pass Overwrite"):
    """Simulate the secure wiping process"""
    print(f"\n🔄 Starting secure wipe of {device['model']}...")
    print(f"   Method: {method}")
    
    # Simulate wipe progress
    stages = [
        "Unmounting device...",
        "Initializing wipe pattern...",
        "Writing zeros to all sectors...",
        "Verifying wipe completion...",
        "Performing final verification..."
    ]
    
    for i, stage in enumerate(stages, 1):
        print(f"   [{i}/{len(stages)}] {stage}")
        time.sleep(1)
    
    # Generate wipe metadata
    wipe_data = {
        "start_time": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "end_time": (datetime.now()).strftime("%Y-%m-%d %H:%M:%S"),
        "method": method,
        "passes": 1,
        "sectors_wiped": 62914560,
        "verification_hash": hashlib.sha256(str(uuid.uuid4()).encode()).hexdigest()[:16],
        "success": True
    }
    
    print(f"✅ Wipe completed successfully!")
    print(f"   Sectors Wiped: {wipe_data['sectors_wiped']:,}")
    print(f"   Verification Hash: {wipe_data['verification_hash']}")
    
    return wipe_data

def generate_wipe_certificate(device, analysis, wipe_data):
    """Generate certificate data from wipe operation"""
    cert_data = {
        "PersonPerformingSanitization": {
            "Name": "System Administrator",
            "Title": "IT Security Specialist",
            "Organization": "Hackman Security Solutions",
            "Location": "Test Environment",
            "Phone": "+1-555-HACKMAN"
        },
        "MediaInformation": {
            "MakeVendor": device['vendor'],
            "Model": device['model'],
            "SerialNumber": device['serial'],
            "MediaPropertyNumber": f"USB-{datetime.now().strftime('%Y%m%d')}-001",
            "MediaType": "USB Flash Drive",
            "Source": f"Workstation - {device['mount_point']}",
            "Classification": analysis['classification'],
            "DataBackedUp": "No"
        },
        "SanitizationDetails": {
            "MethodType": "Clear",
            "MethodUsed": wipe_data['method'],
            "ToolUsed": "Hackman USB Wiper v1.0",
            "VerificationMethod": "Full Surface Verification",
            "NumberOfPasses": str(wipe_data['passes']),
            "PostSanitizationClassification": "Unclassified"
        },
        "MediaDestination": {
            "Option": "Reuse",
            "Details": "Returned to IT inventory for redistribution"
        },
        "WipeMetadata": {
            "StartTime": wipe_data['start_time'],
            "EndTime": wipe_data['end_time'],
            "SectorsWiped": wipe_data['sectors_wiped'],
            "VerificationHash": wipe_data['verification_hash'],
            "ToolVersion": "1.0.0"
        }
    }
    
    return cert_data

def save_wipe_log(device, analysis, wipe_data, cert_data):
    """Save detailed wipe log"""
    log_data = {
        "operation_id": str(uuid.uuid4()),
        "timestamp": datetime.now().isoformat(),
        "device_info": device,
        "pre_wipe_analysis": analysis,
        "wipe_operation": wipe_data,
        "certificate_data": cert_data
    }
    
    # Create log directory if it doesn't exist
    log_dir = Path("../USB-D/log/WipeOperations")
    log_dir.mkdir(parents=True, exist_ok=True)
    
    # Save log file
    log_file = log_dir / f"{log_data['operation_id']}_wipe_log.json"
    with open(log_file, 'w') as f:
        json.dump(log_data, f, indent=2)
    
    print(f"📝 Wipe log saved: {log_file}")
    return log_file

def main():
    print("🚀 Hackman USB Wipe Simulator")
    print("=" * 40)
    
    # Step 1: Detect USB device
    device = simulate_usb_detection()
    
    # Step 2: Analyze device
    analysis = simulate_pre_wipe_analysis(device)
    
    # Step 3: Confirm wipe operation
    print(f"\n⚠️  WARNING: This will permanently delete all data on {device['model']}")
    confirm = input("Type 'WIPE' to confirm deletion: ")
    
    if confirm != 'WIPE':
        print("❌ Operation cancelled by user")
        return
    
    # Step 4: Perform secure wipe
    wipe_data = simulate_secure_wipe(device)
    
    # Step 5: Generate certificate data
    print(f"\n📄 Generating certificate data...")
    cert_data = generate_wipe_certificate(device, analysis, wipe_data)
    
    # Step 6: Save wipe log
    log_file = save_wipe_log(device, analysis, wipe_data, cert_data)
    
    # Step 7: Save certificate JSON for processing
    cert_file = Path("wipe_certificate.json")
    with open(cert_file, 'w') as f:
        json.dump(cert_data, f, indent=2)
    
    print(f"📄 Certificate data saved: {cert_file}")
    print(f"\n✅ Wipe operation completed successfully!")
    print(f"   Device: {device['model']} ({device['serial']})")
    print(f"   Method: {wipe_data['method']}")
    print(f"   Verification: {wipe_data['verification_hash']}")
    print(f"\n🎯 Next steps:")
    print(f"   1. Review certificate data in {cert_file}")
    print(f"   2. Generate PDF certificate using: python ../Cert_Tool/main.py --json {cert_file}")

if __name__ == "__main__":
    main()