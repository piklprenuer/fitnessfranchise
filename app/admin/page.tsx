'use client';
import { useState } from 'react';
import { Loader2, Lock, Download, RefreshCw } from 'lucide-react';

type Lead = {
  id: number;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  budget: string;
  interest: string;
  location: string;
  timeline: string;
};

const budgetLabels: Record<string, string> = {
  under_100k: 'Under $100k',
  '100k_250k': '$100k–$250k',
  '250k_500k': '$250k–$500k',
  '500k_plus': '$500k+',
};

const timelineLabels: Record<string, string> = {
  asap: 'ASAP',
  '3_6_months': '3–6 months',
  '6_12_months': '6–12 months',
  '12_plus_months': '12+ months',
};

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [authed, setAuthed] = useState(false);

  const fetchLeads = async (pw?: string) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/leads?password=${encodeURIComponent(pw || password)}`);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Unauthorized');
      setLeads(json.leads);
      setAuthed(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const exportCsv = () => {
    const headers = ['ID', 'Date', 'Name', 'Email', 'Phone', 'Budget', 'Interest', 'Location', 'Timeline'];
    const rows = leads.map((l) => [
      l.id,
      new Date(l.created_at).toLocaleDateString('en-AU'),
      l.name, l.email, l.phone,
      budgetLabels[l.budget] || l.budget,
      l.interest, l.location,
      timelineLabels[l.timeline] || l.timeline,
    ]);
    const csv = [headers, ...rows].map((r) => r.map((v) => `"${v}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock size={28} className="text-brand-600" />
            </div>
            <h1 className="font-display text-2xl text-slate-900">Admin Login</h1>
            <p className="text-slate-500 text-sm mt-1">FitnessFranchise.com.au</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="label">Password</label>
              <input
                className="input-field"
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && fetchLeads()}
              />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button
              onClick={() => fetchLeads()}
              disabled={loading || !password}
              className="btn-primary w-full disabled:opacity-60"
            >
              {loading ? <><Loader2 size={16} className="animate-spin" /> Logging in...</> : 'Login'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl text-slate-900">Leads Dashboard</h1>
            <p className="text-slate-500 text-sm">{leads.length} total leads</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => fetchLeads()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50"
            >
              <RefreshCw size={14} /> Refresh
            </button>
            <button
              onClick={exportCsv}
              className="flex items-center gap-2 btn-primary text-sm px-4 py-2"
            >
              <Download size={14} /> Export CSV
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {leads.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            <p className="text-lg font-medium">No leads yet.</p>
            <p className="text-sm mt-1">Submitted leads will appear here.</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    {['Date', 'Name', 'Email', 'Phone', 'Budget', 'Interest', 'Location', 'Timeline'].map((h) => (
                      <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50/50">
                      <td className="px-4 py-3 text-slate-500 whitespace-nowrap">
                        {new Date(lead.created_at).toLocaleDateString('en-AU', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </td>
                      <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">{lead.name}</td>
                      <td className="px-4 py-3 text-slate-700">{lead.email}</td>
                      <td className="px-4 py-3 text-slate-700 whitespace-nowrap">{lead.phone}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="px-2 py-1 bg-brand-50 text-brand-700 rounded-md text-xs font-semibold">
                          {budgetLabels[lead.budget] || lead.budget}
                        </span>
                      </td>
                      <td className="px-4 py-3 capitalize text-slate-700">{lead.interest?.replace('_', ' ')}</td>
                      <td className="px-4 py-3 text-slate-700 whitespace-nowrap">{lead.location}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-slate-700">
                        {timelineLabels[lead.timeline] || lead.timeline}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
