import { APP_SIZE, APP_VERSION } from '@/lib/site';

const appInfoRows = [
  { label: 'App Name', value: '3 Patti Room' },
  { label: 'App Size', value: APP_SIZE },
  { label: 'Version', value: APP_VERSION },
  { label: 'Required OS', value: 'Android 5.0+' },
  { label: 'Last Update', value: '06-February-2026' },
  { label: 'Downloads', value: '500K+' },
  { label: 'Language', value: 'Urdu, English' },
  { label: 'Price', value: '0$' },
];

export default function AppInfoTable() {
  return (
    <div className="app-info-table mt-12">
      <div className="app-info-table-header">
        <h2>Teen Patti Room</h2>
      </div>
      <div className="app-info-table-body">
        {appInfoRows.map(({ label, value }) => (
          <div key={label} className="app-info-row">
            <span className="app-info-label">{label}</span>
            <span className="app-info-value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
