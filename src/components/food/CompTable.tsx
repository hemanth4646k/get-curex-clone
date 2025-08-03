import ComparisonTable from '../../common/ui/ComparisonTable';

const columns = [
  {
    key: 'curex',
    label: <span style={{display:'flex',alignItems:'center',gap:8}}><img src="/curex-logo-pink.svg" alt="Curex logo" style={{height:32}} /> <span style={{fontWeight:700,fontSize:'1.2rem'}}>curex</span></span>,
    imageSrc: '',
    imageAlt: 'Curex',
  },
  {
    key: 'oit',
    label: <span style={{fontWeight:700}}>Oral Immunotherapy</span>,
    imageSrc: '',
    imageAlt: 'Oral Immunotherapy',
  },
];

const rows = [
  { key: 'tolerance', label: 'Tolerance Post-Treatment', values: [<span style={{fontWeight:500}}>High</span>, <span style={{fontWeight:500}}>Higher</span>] },
  { key: 'anaphylaxis', label: 'Risk of Anaphylaxis', values: [<span style={{fontWeight:500}}>&lt;0.1%</span>, <span style={{fontWeight:500}}>High</span>] },
  { key: 'painfree', label: 'Pain-Free Treatment', values: [
    <span style={{display:'flex',justifyContent:'center'}}><span style={{background:'#e6ffe6',borderRadius:'50%',padding:4,display:'inline-block'}}><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#22c55e"/><path d="M6 10.5L9 13.5L14 8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span></span>,
    <span style={{display:'flex',justifyContent:'center'}}><span style={{background:'#fff0f0',borderRadius:'50%',padding:4,display:'inline-block'}}><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#ff5e7d"/><path d="M7 7L13 13M13 7L7 13" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg></span></span>
  ] },
  { key: 'athome', label: 'At-home Treatment', values: [
    <span style={{display:'flex',justifyContent:'center'}}><span style={{background:'#e6ffe6',borderRadius:'50%',padding:4,display:'inline-block'}}><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#22c55e"/><path d="M6 10.5L9 13.5L14 8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span></span>,
    <span style={{display:'flex',justifyContent:'center'}}><span style={{background:'#fff0f0',borderRadius:'50%',padding:4,display:'inline-block'}}><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#ff5e7d"/><path d="M7 7L13 13M13 7L7 13" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg></span></span>
  ] },
  { key: 'telemedicine', label: 'Telemedicine Support', values: [
    <span style={{display:'flex',justifyContent:'center'}}><span style={{background:'#e6ffe6',borderRadius:'50%',padding:4,display:'inline-block'}}><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#22c55e"/><path d="M6 10.5L9 13.5L14 8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span></span>,
    <span style={{display:'flex',justifyContent:'center'}}><span style={{background:'#fff0f0',borderRadius:'50%',padding:4,display:'inline-block'}}><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#ff5e7d"/><path d="M7 7L13 13M13 7L7 13" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg></span></span>
  ] },
  { key: 'cost', label: 'Cost', values: [
    <div style={{background:'#22c55e',color:'#fff',fontWeight:600,fontSize:'1.1rem',padding:'16px 0',borderRadius:'0 0 0 16px',textAlign:'center'}}>$149 per month</div>,
    <div style={{background:'#ffb6c1',color:'#22223b',fontWeight:600,fontSize:'1.1rem',padding:'16px 0',borderRadius:'0 0 16px 0',textAlign:'center'}}>$4,000 - $10,000<br/>per year</div>
  ], isPriceRow: true },
];

const CompTable = () => (
  <div>
    <h2 style={{textAlign:'center',fontWeight:700,fontSize:'2.2rem',margin:'40px 0 32px'}}>A Better Alternative to Food OIT</h2>
    <ComparisonTable
      columns={columns}
      rows={rows}
    />
  </div>
);

export default CompTable;
