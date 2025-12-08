"use client";

import React, { useRef } from "react";
import { Invoice } from "../lib/types";

interface InvoicePreviewProps {
    invoice?: Invoice;
    template?: "classic" | "modern" | "minimalist";
}

const InvoicePreview: React.FC<InvoicePreviewProps> = ({ invoice, template = "modern" }) => {
    const previewRef = useRef<HTMLDivElement>(null);

const handleDownloadPDF = async () => {
  if (!previewRef.current) return;
  const html2pdf = (await import("html2pdf.js")).default;

  html2pdf()
    .set({
      margin: 0.5,
      filename: `invoice-${invoice?.id || "new"}.pdf`,
      html2canvas: { 
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    })
    .from(previewRef.current)
    .save();
};

    if (!invoice) {
        return (
            <div style={{ background: 'linear-gradient(to bottom right, #f9fafb, #f3f4f6)', padding: '32px', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '50%' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '256px' }}>
                    <p style={{ color: '#9ca3af', fontSize: '18px' }}>Fill the form to preview your invoice</p>
                </div>
            </div>
        );
    }

    const totalAmount = invoice.items.reduce((sum, item) => sum + item.total, 0);

    const ClassicTemplate = () => (
        <div style={{ background: '#ffffff' }}>
            {/* Elegant Header with Gradient */}
            <div style={{ background: 'linear-gradient(to right, #1e293b, #0f172a)', color: '#ffffff', padding: '32px', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h1 style={{ fontSize: '36px', fontWeight: 'bold', letterSpacing: '-0.025em', marginBottom: '8px', margin: 0 }}>INVOICE</h1>
                        <p style={{ fontSize: '14px', color: '#cbd5e1', margin: 0 }}>#{invoice.id}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '8px 16px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                            <p style={{ fontSize: '12px', marginBottom: '4px', color: '#cbd5e1', margin: 0 }}>Amount Due</p>
                            <p style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>${totalAmount.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ padding: '32px' }}>
                {/* From/To Section */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '32px' }}>
                    <div>
                        <h3 style={{ fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>From</h3>
                        <div>
                            <p style={{ fontWeight: '600', color: '#0f172a', fontSize: '18px', margin: '4px 0' }}>{invoice.from.name}</p>
                            <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.5', margin: '4px 0' }}>{invoice.from.address}</p>
                        </div>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Bill To</h3>
                        <div>
                            <p style={{ fontWeight: '600', color: '#0f172a', fontSize: '18px', margin: '4px 0' }}>{invoice.to.name}</p>
                            <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.5', margin: '4px 0' }}>{invoice.to.address}</p>
                        </div>
                    </div>
                </div>

                {/* Dates */}
                <div style={{ display: 'flex', gap: '32px', marginBottom: '32px', paddingBottom: '32px', borderBottom: '1px solid #e2e8f0' }}>
                    <div>
                        <p style={{ fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Issue Date</p>
                        <p style={{ color: '#0f172a', fontWeight: '500', margin: 0 }}>{invoice.date}</p>
                    </div>
                    <div>
                        <p style={{ fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Due Date</p>
                        <p style={{ color: '#0f172a', fontWeight: '500', margin: 0 }}>{invoice.dueDate}</p>
                    </div>
                </div>

                {/* Items Table */}
                <div style={{ marginBottom: '32px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid #cbd5e1' }}>
                                <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: '600', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Description</th>
                                <th style={{ textAlign: 'center', padding: '12px 8px', fontSize: '12px', fontWeight: '600', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Qty</th>
                                <th style={{ textAlign: 'right', padding: '12px 8px', fontSize: '12px', fontWeight: '600', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Rate</th>
                                <th style={{ textAlign: 'right', padding: '12px 8px', fontSize: '12px', fontWeight: '600', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoice.items.map((item, index) => (
                                <tr key={item.id} style={{ borderBottom: index !== invoice.items.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                                    <td style={{ padding: '16px 8px', color: '#0f172a' }}>{item.description}</td>
                                    <td style={{ padding: '16px 8px', textAlign: 'center', color: '#334155' }}>{item.quantity}</td>
                                    <td style={{ padding: '16px 8px', textAlign: 'right', color: '#334155' }}>${item.price.toFixed(2)}</td>
                                    <td style={{ padding: '16px 8px', textAlign: 'right', fontWeight: '500', color: '#0f172a' }}>${item.total.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Totals */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '32px' }}>
                    <div style={{ width: '320px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '12px', borderTop: '2px solid #cbd5e1', fontSize: '18px', fontWeight: 'bold', color: '#0f172a' }}>
                            <span>Total</span>
                            <span>${totalAmount.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/* Notes */}
                {invoice.notes && (
                    <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <h3 style={{ fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Notes</h3>
                        <p style={{ color: '#334155', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>{invoice.notes}</p>
                    </div>
                )}
            </div>
        </div>
    );

    const ModernTemplate = () => (
        <div style={{ background: '#ffffff' }}>
            {/* Modern Header with Accent */}
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: '384px', height: '384px', borderRadius: '9999px', filter: 'blur(64px)', background: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))' }}></div>
                <div style={{ position: 'relative', padding: '32px', paddingBottom: '48px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                        <div>
                            <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '8px', background: 'linear-gradient(to right, #2563eb, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                INVOICE
                            </h1>
                            <p style={{ color: '#64748b', fontWeight: '500', margin: 0 }}>#{invoice.id}</p>
                        </div>
                        <div style={{ textAlign: 'right', color: '#ffffff', padding: '16px 24px', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', background: 'linear-gradient(to bottom right, #2563eb, #9333ea)' }}>
                            <p style={{ fontSize: '12px', marginBottom: '4px', opacity: 0.9 }}>Total Amount</p>
                            <p style={{ fontSize: '30px', fontWeight: 'bold', margin: 0 }}>${totalAmount.toFixed(2)}</p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                        <div style={{ padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', background: 'rgba(255, 255, 255, 0.8)' }}>
                            <h3 style={{ fontSize: '12px', fontWeight: 'bold', color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>From</h3>
                            <p style={{ fontWeight: 'bold', color: '#0f172a', fontSize: '18px', marginBottom: '8px' }}>{invoice.from.name}</p>
                            <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>{invoice.from.address}</p>
                        </div>
                        <div style={{ padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', background: 'rgba(255, 255, 255, 0.8)' }}>
                            <h3 style={{ fontSize: '12px', fontWeight: 'bold', color: '#9333ea', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Bill To</h3>
                            <p style={{ fontWeight: 'bold', color: '#0f172a', fontSize: '18px', marginBottom: '8px' }}>{invoice.to.name}</p>
                            <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>{invoice.to.address}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ padding: '0 32px 32px 32px' }}>
                {/* Dates */}
                <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
                    <div style={{ flex: 1, padding: '16px', borderRadius: '12px', background: 'linear-gradient(to bottom right, #dbeafe, rgba(219, 234, 254, 0.5))' }}>
                        <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Issue Date</p>
                        <p style={{ color: '#0f172a', fontWeight: '600', margin: 0 }}>{invoice.date}</p>
                    </div>
                    <div style={{ flex: 1, padding: '16px', borderRadius: '12px', background: 'linear-gradient(to bottom right, #fae8ff, rgba(250, 232, 255, 0.5))' }}>
                        <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#7e22ce', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Due Date</p>
                        <p style={{ color: '#0f172a', fontWeight: '600', margin: 0 }}>{invoice.dueDate}</p>
                    </div>
                </div>

                {/* Items */}
                <div style={{ marginBottom: '32px', overflow: 'hidden', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead style={{ background: 'linear-gradient(to right, #f8fafc, #f1f5f9)' }}>
                            <tr>
                                <th style={{ textAlign: 'left', padding: '16px', fontSize: '12px', fontWeight: 'bold', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Description</th>
                                <th style={{ textAlign: 'center', padding: '16px', fontSize: '12px', fontWeight: 'bold', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Qty</th>
                                <th style={{ textAlign: 'right', padding: '16px', fontSize: '12px', fontWeight: 'bold', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Rate</th>
                                <th style={{ textAlign: 'right', padding: '16px', fontSize: '12px', fontWeight: 'bold', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Amount</th>
                            </tr>
                        </thead>
                        <tbody style={{ background: '#ffffff' }}>
                            {invoice.items.map((item, index) => (
                                <tr key={item.id} style={{ background: index % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                                    <td style={{ padding: '16px', color: '#0f172a', fontWeight: '500' }}>{item.description}</td>
                                    <td style={{ padding: '16px', textAlign: 'center', color: '#334155' }}>{item.quantity}</td>
                                    <td style={{ padding: '16px', textAlign: 'right', color: '#334155' }}>${item.price.toFixed(2)}</td>
                                    <td style={{ padding: '16px', textAlign: 'right', fontWeight: '600', color: '#0f172a' }}>${item.total.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Totals */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '32px' }}>
                    <div style={{ width: '384px', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', background: 'linear-gradient(to bottom right, #f8fafc, #f1f5f9)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '12px', borderTop: '2px solid #cbd5e1', fontSize: '20px', fontWeight: 'bold', color: '#0f172a' }}>
                            <span>Total</span>
                            <span style={{ background: 'linear-gradient(to right, #2563eb, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                ${totalAmount.toFixed(2)}
                            </span>
                        </div>
                    </div>
                </div>

                {invoice.notes && (
                    <div style={{ padding: '24px', borderRadius: '12px', border: '1px solid #bfdbfe', background: 'linear-gradient(to bottom right, #dbeafe, #fae8ff)' }}>
                        <h3 style={{ fontSize: '12px', fontWeight: 'bold', color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Notes</h3>
                        <p style={{ color: '#334155', lineHeight: '1.5', margin: 0 }}>{invoice.notes}</p>
                    </div>
                )}
            </div>
        </div>
    );

    const MinimalistTemplate = () => (
        <div style={{ background: '#ffffff' }}>
            <div style={{ padding: '48px' }}>
                {/* Ultra-minimal Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '64px', paddingBottom: '32px', borderBottom: '1px solid #0f172a' }}>
                    <div>
                        <h1 style={{ fontSize: '60px', fontWeight: '300', letterSpacing: '-0.025em', color: '#0f172a', marginBottom: '8px', margin: 0 }}>Invoice</h1>
                        <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>{invoice.id}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <p style={{ color: '#64748b', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Amount Due</p>
                        <p style={{ fontSize: '36px', fontWeight: '300', color: '#0f172a', margin: 0 }}>${totalAmount.toFixed(2)}</p>
                    </div>
                </div>

                {/* Parties */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', marginBottom: '64px' }}>
                    <div>
                        <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8', marginBottom: '16px' }}>From</p>
                        <p style={{ fontWeight: '500', color: '#0f172a', fontSize: '18px', marginBottom: '4px' }}>{invoice.from.name}</p>
                        <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>{invoice.from.address}</p>
                    </div>
                    <div>
                        <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8', marginBottom: '16px' }}>To</p>
                        <p style={{ fontWeight: '500', color: '#0f172a', fontSize: '18px', marginBottom: '4px' }}>{invoice.to.name}</p>
                        <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>{invoice.to.address}</p>
                    </div>
                </div>

                {/* Dates */}
                <div style={{ display: 'flex', gap: '48px', marginBottom: '64px' }}>
                    <div>
                        <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8', marginBottom: '8px' }}>Issue Date</p>
                        <p style={{ color: '#0f172a', margin: 0 }}>{invoice.date}</p>
                    </div>
                    <div>
                        <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8', marginBottom: '8px' }}>Due Date</p>
                        <p style={{ color: '#0f172a', margin: 0 }}>{invoice.dueDate}</p>
                    </div>
                </div>

                {/* Items */}
                <div style={{ marginBottom: '48px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #0f172a' }}>
                                <th style={{ textAlign: 'left', padding: '16px 0', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8', fontWeight: 'normal' }}>Description</th>
                                <th style={{ textAlign: 'center', padding: '16px 0', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8', fontWeight: 'normal' }}>Qty</th>
                                <th style={{ textAlign: 'right', padding: '16px 0', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8', fontWeight: 'normal' }}>Rate</th>
                                <th style={{ textAlign: 'right', padding: '16px 0', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8', fontWeight: 'normal' }}>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoice.items.map((item) => (
                                <tr key={item.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                                    <td style={{ padding: '20px 0', color: '#0f172a' }}>{item.description}</td>
                                    <td style={{ padding: '20px 0', textAlign: 'center', color: '#475569' }}>{item.quantity}</td>
                                    <td style={{ padding: '20px 0', textAlign: 'right', color: '#475569' }}>${item.price.toFixed(2)}</td>
                                    <td style={{ padding: '20px 0', textAlign: 'right', color: '#0f172a', fontWeight: '500' }}>${item.total.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Totals */}
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div style={{ width: '320px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid #0f172a', fontSize: '20px', color: '#0f172a' }}>
                            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Total</span>
                            <span style={{ fontWeight: '300' }}>${totalAmount.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {invoice.notes && (
                    <div style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid #e2e8f0' }}>
                        <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8', marginBottom: '12px' }}>Notes</p>
                        <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.5', maxWidth: '672px', margin: 0 }}>{invoice.notes}</p>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div style={{ padding: '24px', borderRadius: '12px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '50%', background: 'linear-gradient(to bottom right, #f8fafc, #f1f5f9)' }}>
            <div ref={previewRef}>
                {template === "classic" && <ClassicTemplate />}
                {template === "modern" && <ModernTemplate />}
                {template === "minimalist" && <MinimalistTemplate />}
            </div>

            <button
                onClick={handleDownloadPDF}
                style={{ 
                    width: '100%', 
                    marginTop: '24px', 
                    background: '#2563eb', 
                    color: '#ffffff', 
                    fontWeight: '600', 
                    padding: '12px 24px', 
                    borderRadius: '8px', 
                    transition: 'all 0.2s', 
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', 
                    border: 'none',
                    cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#1d4ed8'}
                onMouseOut={(e) => e.currentTarget.style.background = '#2563eb'}
            >
                Download PDF
            </button>
        </div>
    );
};

export default InvoicePreview;