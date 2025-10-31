import os, json, uuid
from pathlib import Path
from datetime import datetime
import uuid
# from utils.config import PRIVATE_KEY_PEM
# from utils.qrgen import make_qr_png
# from utils.pdfgen import generate_certificate_pdf
# from utils.sign import load_private_key, sign_json_bytes
# from utils.payload_utils import canonical_json


def save_certificates(cert: dict, out_dir: str = "log/NullBytes"):
    try:
        os.makedirs(out_dir, exist_ok=True)
    except PermissionError:
        out_dir = "/tmp/NullBytes"
        os.makedirs(out_dir, exist_ok=True)

    # this must be OUTSIDE the except block
    if "uuid" not in cert:
        cert["uuid"] = str(uuid.uuid4())
    if "device" not in cert:
        cert["device"] = cert.get("media", {}).get("source", "unknown")

    filename = f"{cert['uuid']}_{os.path.basename(cert['device'])}.json"
    json_path = Path(out_dir) / filename

    with open(json_path, "w") as f:
        json.dump(cert, f, indent=4)

    return str(json_path)

