"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Invoice, LineItem } from "../lib/types";
// Lucide icon imports
import { Users, Home, User, Calendar, PlusCircle, Trash2, FileText } from "lucide-react";

interface InvoiceFormProps {
  onChange?: (invoice: Invoice) => void;
}

const InvoiceForm: React.FC<InvoiceFormProps> = ({ onChange }) => {
  const [fromName, setFromName] = useState("");
  const [fromAddress, setFromAddress] = useState("");
  const [toName, setToName] = useState("");
  const [toAddress] = useState("");
  const [toAddressLocal, setToAddress] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [dueDate, setDueDate] = useState(new Date().toISOString().slice(0, 10));
  const [notes, setNotes] = useState("");
  const [items, setItems] = useState<LineItem[]>([
    { id: uuidv4(), description: "", quantity: 1, price: 0, total: 0 },
  ]);

  const [invoiceId] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}${(now.getMonth()+1)
      .toString()
      .padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}-` +
      `${now.getHours().toString().padStart(2, "0")}${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}${now.getSeconds().toString().padStart(2, "0")}`;
  });

  const handleItemChange = (id: string, field: keyof LineItem, value: any) => {
    const updated = items.map((item) => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        updatedItem.total = updatedItem.quantity * updatedItem.price;
        return updatedItem;
      }
      return item;
    });
    setItems(updated);
    triggerOnChange(updated);
  };

  const addItem = () => {
    const newItem: LineItem = {
      id: uuidv4(),
      description: "",
      quantity: 1,
      price: 0,
      total: 0,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    const filtered = items.filter((it) => it.id !== id);
    setItems(filtered);
    triggerOnChange(filtered);
  };

  const triggerOnChange = (updatedItems: LineItem[]) => {
    if (onChange) {
      const invoice: Invoice = {
        id: invoiceId,
        from: { name: fromName, address: fromAddress },
        to: { name: toName, address: toAddressLocal },
        items: updatedItems,
        notes,
        date,
        dueDate,
      };
      onChange(invoice);
    }
  };

  const totalAmount = items.reduce((acc, it) => acc + it.total, 0);

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 font-sans text-gray-900">
        <h2 className="text-3xl font-bold mb-8 flex items-center text-gray-800">
          <FileText className="h-6 w-6 mr-3 text-blue-600" /> Invoice Details
        </h2>

        {/* From & To */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
              <Home className="h-5 w-5 mr-2 text-gray-600" /> From
            </h3>
            <input
              type="text"
              placeholder="Your Company Name"
              className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
              value={fromName}
              onChange={(e) => setFromName(e.target.value)}
              onBlur={() => triggerOnChange(items)}
            />
            <textarea
              placeholder="Your Address"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
              rows={3}
              value={fromAddress}
              onChange={(e) => setFromAddress(e.target.value)}
              onBlur={() => triggerOnChange(items)}
            />
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
              <User className="h-5 w-5 mr-2 text-gray-600" /> To
            </h3>
            <input
              type="text"
              placeholder="Client Name"
              className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
              value={toName}
              onChange={(e) => setToName(e.target.value)}
              onBlur={() => triggerOnChange(items)}
            />
            <textarea
              placeholder="Client Address"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
              rows={3}
              value={toAddressLocal}
              onChange={(e) => setToAddress(e.target.value)}
              onBlur={() => triggerOnChange(items)}
            />
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <label className="block text-gray-700 font-medium mb-2 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-gray-600" /> Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                triggerOnChange(items);
              }}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-gray-600" /> Due Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
              value={dueDate}
              onChange={(e) => {
                setDueDate(e.target.value);
                triggerOnChange(items);
              }}
            />
          </div>
        </div>

        {/* Items */}
        <div className="mb-8">
          <h3 className="font-semibold text-gray-700 mb-4 flex items-center">
            <Users className="h-5 w-5 mr-2 text-gray-600" /> Items
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="border p-3 text-left">Description</th>
                  <th className="border p-3 w-24">Qty</th>
                  <th className="border p-3 w-32">Price</th>
                  <th className="border p-3 w-32">Total</th>
                  <th className="border p-3 w-16">Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="border p-2">
                      <input
                        type="text"
                        placeholder="Item description"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
                        value={item.description}
                        onChange={(e) =>
                          handleItemChange(item.id, "description", e.target.value)
                        }
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="number"
                        className="w-full border border-gray-300 rounded-lg p-2 text-center focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
                        value={item.quantity}
                        onChange={(e) =>
                          handleItemChange(item.id, "quantity", Number(e.target.value))
                        }
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="number"
                        className="w-full border border-gray-300 rounded-lg p-2 text-right focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
                        value={item.price}
                        onChange={(e) =>
                          handleItemChange(item.id, "price", Number(e.target.value))
                        }
                      />
                    </td>
                    <td className="border p-2 text-right text-gray-800">
                      {item.total.toFixed(2)}
                    </td>
                    <td className="border p-2 text-center">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center text-white bg-red-500 rounded-lg p-2 hover:bg-red-600 transition"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}

                {/* Total Row */}
                <tr className="bg-gray-50">
                  <td colSpan={3} className="border p-3 text-right font-semibold text-gray-700">
                    Total
                  </td>
                  <td className="border p-3 text-right font-bold text-gray-900">
                    {totalAmount.toFixed(2)}
                  </td>
                  <td className="border p-3"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <button
            type="button"
            className="mt-4 inline-flex items-center bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-600 transition"
            onClick={addItem}
          >
            <PlusCircle className="h-5 w-5 mr-2" /> Add Item
          </button>
        </div>

        {/* Notes */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
            <FileText className="h-5 w-5 mr-2 text-gray-600" /> Notes
          </h3>
          <textarea
            placeholder="Any additional notes..."
            className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            onBlur={() => triggerOnChange(items)}
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceForm;
