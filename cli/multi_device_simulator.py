#!/usr/bin/env python3
"""
Multi-Device Wipe Simulator
Demonstrates wiping capabilities for different device types
"""

import json
import time
import uuid
import hashlib
from datetime import datetime, timedelta
from pathlib import Path

def simulate_sata_wipe():
    """Simulate SATA drive secure erase"""
    print("🔍 SATA Drive Secure Erase Simulation")
    print("=" * 40)
    
    device = {
        "vendor": "Western Digital",
        "model": "WD Blue 1TB",
        "serial": "WD-WCAZA1234567",
        "capacity": "1TB",
        "interface": "SATA III",
        "device_path": "/dev/sda"
    }
    
    print(f"Device: {device['vendor']} {device['model']}")
    print(f"Serial: {device['serial']}")
    print(f"Interface: {device['interface']}")
    
    # Simulate ATA secure erase process
    print(f"\n🔄 Performing ATA Secure Erase...")
    print("   [1/4] Checking secure erase support...")
    time.sleep(1)
    print("   [2/4] Setting security password...")
    time.sleep(1)
    print("   [3/4] Issuing secure erase command...")
    time.sleep(3)  # Longer for larger drive
    print("   [4/4] Verifying erase completion...")
    time.sleep(1)
    
    wipe_data = {
        "method": "ATA Secure Erase",
        "start_time": (datetime.now() - timedelta(minutes=2)).strftime("%Y-%m-%d %H:%M:%S"),
        "end_time": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "passes": 1,
        "sectors_wiped": 1953525168,  # 1TB
        "verification_hash": hashlib.sha256(str(uuid.uuid4()).encode()).hexdigest()[:16],
        "erase_time_minutes": 2.0
    }
    
    print(f"✅ SATA Secure Erase completed!")
    print(f"   Sectors wiped: {wipe_data['sectors_wiped']:,}")
    print(f"   Time taken: {wipe_data['erase_time_minutes']} minutes")
    
    return device, wipe_data

def simulate_nvme_format():
    """Simulate NVMe crypto erase"""
    print("\n🔍 NVMe Crypto Erase Simulation")
    print("=" * 40)
    
    device = {
        "vendor": "Samsung",
        "model": "980 PRO 2TB",
        "serial": "S6BZNF0T123456A",
        "capacity": "2TB", 
        "interface": "NVMe PCIe 4.0",
        "device_path": "/dev/nvme0n1"
    }
    
    print(f"Device: {device['vendor']} {device['model']}")
    print(f"Serial: {device['serial']}")
    print(f"Interface: {device['interface']}")
    
    # Simulate NVMe format with crypto erase
    print(f"\n🔄 Performing NVMe Crypto Erase...")
    print("   [1/3] Checking crypto erase support...")
    time.sleep(1)
    print("   [2/3] Issuing format command with crypto erase...")
    time.sleep(2)
    print("   [3/3] Verifying namespace reconstruction...")
    time.sleep(1)
    
    wipe_data = {
        "method": "NVMe Crypto Erase",
        "start_time": (datetime.now() - timedelta(seconds=30)).strftime("%Y-%m-%d %H:%M:%S"),
        "end_time": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "passes": 1,
        "sectors_wiped": 3907029168,  # 2TB
        "verification_hash": hashlib.sha256(str(uuid.uuid4()).encode()).hexdigest()[:16],
        "erase_time_seconds": 30
    }
    
    print(f"✅ NVMe Crypto Erase completed!")
    print(f"   Sectors wiped: {wipe_data['sectors_wiped']:,}")
    print(f"   Time taken: {wipe_data['erase_time_seconds']} seconds")
    
    return device, wipe_data

def generate_enterprise_certificate(device, wipe_data, device_type):
    """Generate enterprise-grade certificate"""
    
    cert_data = {
        "PersonPerformingSanitization": {
            "Name": "Dr. Sarah Chen",
            "Title": "Senior Data Security Engineer",
            "Organization": "Enterprise Security Solutions Corp",
            "Location": "San Francisco, CA",
            "Phone": "+1-415-555-0123"
        },
        "MediaInformation": {
            "MakeVendor": device['vendor'],
            "Model": device['model'],
            "SerialNumber": device['serial'],
            "MediaPropertyNumber": f"{device_type.upper()}-{datetime.now().strftime('%Y%m%d')}-ENT",
            "MediaType": f"{device_type.upper()} Drive",
            "Source": f"Enterprise Server - {device['device_path']}",
            "Classification": "Confidential",
            "DataBackedUp": "Yes"
        },
        "SanitizationDetails": {
            "MethodType": "Purge",
            "MethodUsed": wipe_data['method'],
            "ToolUsed": f"Hackman Enterprise {device_type.upper()} Tool v2.0",
            "VerificationMethod": "Hardware-level Verification",
            "NumberOfPasses": str(wipe_data['passes']),
            "PostSanitizationClassification": "Unclassified"
        },
        "MediaDestination": {
            "Option": "Secure Destruction",
            "Details": "Sent to certified e-waste destruction facility"
        },
        "EnterpriseMetadata": {
            "StartTime": wipe_data['start_time'],
            "EndTime": wipe_data['end_time'],
            "SectorsWiped": wipe_data['sectors_wiped'],
            "VerificationHash": wipe_data['verification_hash'],
            "Interface": device['interface'],
            "ComplianceStandards": ["NIST SP 800-88", "DoD 5220.22-M", "ISO 27001"]
        }
    }
    
    return cert_data

def main():
    print("🚀 Hackman Multi-Device Wipe Demonstration")
    print("=" * 50)
    
    # Test SATA drive
    sata_device, sata_wipe = simulate_sata_wipe()
    sata_cert = generate_enterprise_certificate(sata_device, sata_wipe, "sata")
    
    # Save SATA certificate
    with open("sata_wipe_certificate.json", 'w') as f:
        json.dump(sata_cert, f, indent=2)
    
    # Test NVMe drive  
    nvme_device, nvme_wipe = simulate_nvme_format()
    nvme_cert = generate_enterprise_certificate(nvme_device, nvme_wipe, "nvme")
    
    # Save NVMe certificate
    with open("nvme_wipe_certificate.json", 'w') as f:
        json.dump(nvme_cert, f, indent=2)
    
    print(f"\n📄 Certificates Generated:")
    print(f"   • SATA: sata_wipe_certificate.json")
    print(f"   • NVMe: nvme_wipe_certificate.json")
    
    print(f"\n🎯 Generate PDF certificates with:")
    print(f"   python ../Cert_Tool/main.py --json sata_wipe_certificate.json --subtitle 'Enterprise SATA Wipe'")
    print(f"   python ../Cert_Tool/main.py --json nvme_wipe_certificate.json --subtitle 'Enterprise NVMe Wipe'")

if __name__ == "__main__":
    main()