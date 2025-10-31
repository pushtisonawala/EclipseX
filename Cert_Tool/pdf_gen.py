from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer, Image, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from pathlib import Path
from pypdf import PdfReader, PdfWriter
import json
from datetime import datetime

styles = getSampleStyleSheet()

# Professional styles
styles.add(ParagraphStyle(
    name='CertTitle',
    parent=styles['Title'],
    fontSize=20,
    textColor=colors.black,
    spaceAfter=4,
    alignment=TA_CENTER,
    fontName='Helvetica-Bold'
))

styles.add(ParagraphStyle(
    name='SubTitle',
    parent=styles['Normal'],
    fontSize=10,
    textColor=colors.HexColor('#333333'),
    alignment=TA_CENTER,
    fontName='Helvetica'
))

styles.add(ParagraphStyle(
    name='SectionHeader',
    parent=styles['Heading3'],
    fontSize=11,
    textColor=colors.black,
    spaceAfter=6,
    spaceBefore=12,
    fontName='Helvetica-Bold',
    borderWidth=0,
    borderPadding=0,
    borderColor=colors.black,
    underlineProportion=0.15,
    underlineGap=-2
))

def make_section(title, data, col_widths=None):
    # Section header with underline
    section_title = Paragraph(f'<u><b>{title}</b></u>', styles['SectionHeader'])
    
    # Create table with alternating row colors
    table = Table(data, colWidths=col_widths)
    
    # Calculate number of rows for alternating colors
    row_colors = []
    for i in range(len(data)):
        if i % 2 == 0:
            row_colors.append(('BACKGROUND', (0, i), (-1, i), colors.HexColor('#F5F5F5')))
    
    style_commands = [
        ('BOX', (0,0), (-1,-1), 0.75, colors.black),
        ('LINEBELOW', (0,0), (-1,-1), 0.25, colors.HexColor('#CCCCCC')),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('FONTNAME', (0,0), (0,-1), 'Helvetica-Bold'),
        ('FONTNAME', (1,0), (-1,-1), 'Helvetica'),
        ('FONTSIZE', (0,0), (-1,-1), 9),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
    ] + row_colors
    
    table.setStyle(TableStyle(style_commands))
    return [section_title, table, Spacer(1, 10)]

def header(elements, subtitle: str | None = None):
    # Title
    elements.append(Spacer(1, 10))
    elements.append(Paragraph("<b>CERTIFICATE OF SANITIZATION</b>", styles['CertTitle']))
    elements.append(Spacer(1, 6))
    
    # NIST Reference
    elements.append(Paragraph("In Accordance with NIST SP 800-88 Revision 1", styles['SubTitle']))
    elements.append(Paragraph("Guidelines for Media Sanitization", styles['SubTitle']))
    elements.append(Spacer(1, 8))
    
    if subtitle:
        elements.append(Paragraph(f"{subtitle}", styles['SubTitle']))
        elements.append(Spacer(1, 6))
    
    # Certificate details box
    cert_date = datetime.now().strftime("%B %d, %Y")
    cert_time = datetime.now().strftime("%I:%M %p")
    
    cert_info = Table([
        ["Certificate Issue Date:", cert_date, "Issue Time:", cert_time],
    ], colWidths=[130, 120, 80, 130])
    
    cert_info.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.75, colors.black),
        ('FONTNAME', (0,0), (0,-1), 'Helvetica-Bold'),
        ('FONTNAME', (2,0), (2,-1), 'Helvetica-Bold'),
        ('FONTNAME', (1,0), (1,-1), 'Helvetica'),
        ('FONTNAME', (3,0), (3,-1), 'Helvetica'),
        ('FONTSIZE', (0,0), (-1,-1), 9),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#F5F5F5')),
    ]))
    
    elements.append(cert_info)
    elements.append(Spacer(1, 16))

def generate_certificate_pdf(cert_data: dict,
                              qr_png_path: Path,
                              qr_url: str,
                              output_pdf_path: Path,
                              subtitle: str | None = "Issued by NullBytes",
                              payload_obj: dict | None = None):
    # Build PDF with ReportLab
    doc = SimpleDocTemplate(str(output_pdf_path), pagesize=A4,
                            rightMargin=40, leftMargin=40, topMargin=35, bottomMargin=35)
    elements = []
    header(elements, subtitle)

    # Section 1: Person Performing Sanitization
    person = cert_data["PersonPerformingSanitization"]
    elements.extend(make_section("1. SANITIZATION PERSONNEL INFORMATION", [
        ["Name:", person["Name"]],
        ["Title/Position:", person["Title"]],
        ["Organization:", person["Organization"]],
        ["Location:", person["Location"]],
        ["Contact Phone:", person["Phone"]],
    ], [140, 380]))

    # Section 2: Media Information
    media = cert_data["MediaInformation"]
    elements.extend(make_section("2. MEDIA IDENTIFICATION AND CLASSIFICATION", [
        ["Media Type:", media["MediaType"]],
        ["Manufacturer/Vendor:", media["MakeVendor"]],
        ["Model:", media["Model"]],
        ["Serial Number:", media["SerialNumber"]],
        ["Asset/Property Number:", media["MediaPropertyNumber"]],
        ["Source/Custodian:", media["Source"]],
        ["Security Classification:", media["Classification"]],
        ["Data Backup Completed:", media["DataBackedUp"]],
    ], [140, 380]))

    # Section 3: Sanitization Details
    s = cert_data["SanitizationDetails"]
    elements.extend(make_section("3. SANITIZATION PROCESS DETAILS", [
        ["Sanitization Method Type:", s["MethodType"]],
        ["Specific Method Used:", s["MethodUsed"]],
        ["Tool/Software Used (Version):", s["ToolUsed"]],
        ["Number of Passes:", s["NumberOfPasses"]],
        ["Verification Method:", s["VerificationMethod"]],
        ["Post-Sanitization Classification:", s["PostSanitizationClassification"]],
    ], [140, 380]))

    # Section 4: Media Destination
    d = cert_data["MediaDestination"]
    elements.extend(make_section("4. MEDIA DISPOSITION", [
        ["Disposition Method:", d["Option"]],
        ["Additional Details:", d["Details"]],
    ], [140, 380]))

    # Section 5: Certification Statement
    elements.append(Spacer(1, 6))
    elements.append(Paragraph('<u><b>5. CERTIFICATION AND ATTESTATION</b></u>', styles['SectionHeader']))
    
    cert_statement = """I hereby certify that the media sanitization described in this certificate has been 
    performed in strict accordance with the National Institute of Standards and Technology (NIST) Special 
    Publication 800-88 Revision 1 guidelines. The sanitization process has been completed, verified, and 
    documented as specified above. All applicable organizational security policies and procedures have been 
    followed during this sanitization process."""
    
    cert_para = Paragraph(cert_statement, styles['BodyText'])
    elements.append(cert_para)
    elements.append(Spacer(1, 16))

    # Signature block
    sig_table = Table([
        ["", ""],
        ["Authorized Signature: _______________________________", f"Date: {datetime.now().strftime('%m/%d/%Y')}"],
        ["", ""],
        ["Print Name: _______________________________", ""],
    ], colWidths=[340, 140])
    
    sig_table.setStyle(TableStyle([
        ('FONTNAME', (0,0), (-1,-1), 'Helvetica'),
        ('FONTSIZE', (0,0), (-1,-1), 9),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'BOTTOM'),
    ]))
    elements.append(sig_table)
    elements.append(Spacer(1, 20))

    # QR Verification Section
    elements.append(Paragraph('<u><b>6. DIGITAL VERIFICATION</b></u>', styles['SectionHeader']))
    
    qr_img = Image(str(qr_png_path), width=90, height=90)
    
    verification_text = """<b>Certificate Verification</b><br/><br/>
    Scan the QR code to access the secure verification portal and confirm the authenticity of this certificate. 
    The digital verification system provides real-time validation of certificate details and ensures document integrity."""
    
    qr_table = Table([
        [qr_img, Paragraph(verification_text, styles['BodyText'])],
    ], colWidths=[110, 410])
    
    qr_table.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.75, colors.black),
        ('ALIGN', (0,0), (0,0), 'CENTER'),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 12),
        ('RIGHTPADDING', (0,0), (-1,-1), 12),
        ('TOPPADDING', (0,0), (-1,-1), 10),
        ('BOTTOMPADDING', (0,0), (-1,-1), 10),
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#F5F5F5')),
    ]))
    elements.append(qr_table)
    elements.append(Spacer(1, 4))
    
    # Hidden verification URL
    elements.append(Paragraph(f"<font size=6 color='white'>{qr_url}</font>", styles['Normal']))
    
    # Footer note
    elements.append(Spacer(1, 10))
    footer_style = ParagraphStyle(
        'Footer',
        parent=styles['Normal'],
        fontSize=7,
        textColor=colors.HexColor('#666666'),
        alignment=TA_CENTER
    )
    elements.append(Paragraph("This certificate serves as official documentation of media sanitization procedures completed in accordance with federal guidelines.", footer_style))

    doc.build(elements)

    # Embed payload into PDF metadata
    if payload_obj:
        reader = PdfReader(str(output_pdf_path))
        writer = PdfWriter()
        writer.append_pages_from_reader(reader)

        payload_json = json.dumps(payload_obj, separators=(",", ":"), sort_keys=True)
        writer.add_metadata({
            "/CertPayload": payload_json
        })

        with open(output_pdf_path, "wb") as f_out:
            writer.write(f_out)