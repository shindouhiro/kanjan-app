import Link from 'next/link';
import { Activity, Clock, Settings } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center" style={{ padding: '1.25rem 2rem', borderBottom: '1px solid rgba(0,0,0,0.05)', position: 'sticky', top: 0, zIndex: 50, background: 'rgba(250, 250, 250, 0.8)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
      <div className="flex items-center gap-3">
        <div style={{
          width: '32px',
          height: '32px',
          backgroundColor: 'var(--primary)',
          color: 'var(--primary-foreground)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '14px'
        }}>
          看
        </div>
        <span className="font-semibold text-lg">看见 KanJan</span>
      </div>

      <nav className="flex items-center gap-6 text-sm font-medium">
        <Link href="/" className="flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
          <Activity size={16} /> 开局
        </Link>
        <Link href="/history" className="flex items-center gap-2 text-muted">
          <Clock size={16} /> 过往看见
        </Link>
        <Link href="/login" className="flex items-center gap-2 text-muted">
          登录
        </Link>
        <button className="text-muted" style={{ display: 'flex', alignItems: 'center' }}>
          <Settings size={16} />
        </button>
      </nav>
    </header>
  );
}
