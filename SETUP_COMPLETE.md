# Hackman-2025 Certificate Tool - Setup Complete! 🎉

## Environment Setup ✅
- ✅ Virtual environment created: `hackman_env`
- ✅ All dependencies installed successfully
- ✅ Certificate generation system initialized
- ✅ Sample certificates generated and verified

## Generated Sample Certificates

### 1. Samsung SSD Certificate (`certificate.pdf`)
- **Device**: Samsung SSD 860 EVO 
- **Method**: Crypto Erase
- **Organization**: NullBtyes Solutions Pvt. Ltd.
- **Classification**: Confidential → Unclassified

### 2. Western Digital HDD Certificate (`certificate2.pdf`) 
- **Device**: WD Blue 1TB Hard Drive
- **Method**: DoD 5220.22-M (3-pass)
- **Organization**: SecureTech Solutions Inc.
- **Classification**: Top Secret → Unclassified

### 3. SanDisk USB Certificate (`certificate3.pdf`)
- **Device**: SanDisk Ultra USB 3.0
- **Method**: Single Pass Overwrite  
- **Organization**: TechCorp Ltd.
- **Classification**: Internal Use Only → Unclassified

## How to Use

### Activate Virtual Environment
```bash
cd "/c/Users/PUSHT/OneDrive/Desktop/hackmanv2/Hackman-2025"
source hackman_env/Scripts/activate
cd Cert_Tool
```

### Generate New Certificate
```bash
python main.py --json your_data.json --subtitle "Your Custom Subtitle"
```

### Verify Certificate
```bash
python verifier.py --pdf out/certificate.pdf
```

### Custom Output Paths
```bash
python main.py --json sample.json --pdf-out custom/path.pdf --qr-out custom/qr.png
```

## File Structure

```
Cert_Tool/
├── main.py              # Certificate generator
├── verifier.py          # Certificate verifier
├── sample.json          # Sample data (Samsung SSD)
├── sample2.json         # Sample data (WD HDD)  
├── sample3.json         # Sample data (USB)
├── keys/
│   ├── private.pem      # Private signing key
│   └── public.pem       # Public verification key
└── out/
    ├── certificate*.pdf # Generated certificates
    ├── certificate*.qr.png # QR codes
    └── certificate*.json   # Certificate data
```

## Features Verified ✅

- ✅ JSON data validation
- ✅ Cryptographic signing (RSA)
- ✅ PDF certificate generation
- ✅ QR code generation with verification URLs
- ✅ Certificate verification system
- ✅ Offline and online payload support

## Sample JSON Format

```json
{
  "PersonPerformingSanitization": {
    "Name": "Your Name",
    "Title": "Your Title", 
    "Organization": "Your Organization",
    "Location": "Your Location",
    "Phone": "Your Phone"
  },
  "MediaInformation": {
    "MakeVendor": "Device Manufacturer",
    "Model": "Device Model",
    "SerialNumber": "Serial Number",
    "MediaPropertyNumber": "Asset Tag",
    "MediaType": "Storage Type",
    "Source": "Source Location",
    "Classification": "Data Classification",
    "DataBackedUp": "Yes/No"
  },
  "SanitizationDetails": {
    "MethodType": "Clear/Purge/Destroy",
    "MethodUsed": "Specific Method",
    "ToolUsed": "Tool and Version",
    "VerificationMethod": "Verification Type",
    "NumberOfPasses": "Number",
    "PostSanitizationClassification": "Final Classification"
  },
  "MediaDestination": {
    "Option": "Destination Type",
    "Details": "Specific Details"
  }
}
```

## Ready to Use! 🚀

Your Hackman-2025 certificate generation system is fully initialized and ready for production use. All sample certificates have been successfully generated and verified.