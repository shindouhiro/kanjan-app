import Link from 'next/link';
import { Activity, Clock, Settings, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center nav-header" style={{ padding: '1.25rem 2rem', borderBottom: '1px solid rgba(0,0,0,0.05)', position: 'sticky', top: 0, zIndex: 50, background: 'rgba(250, 250, 250, 0.8)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
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
        <span className="font-semibold text-lg nav-title whitespace-nowrap">看见 KanJan</span>
      </div>

      <nav className="flex items-center gap-2 md:gap-6 text-sm font-medium nav-links">
        <Link href="/" className="flex items-center gap-1.5 whitespace-nowrap tooltip-trigger" data-tooltip="开局" style={{ color: 'var(--foreground)' }}>
          <Activity size={18} /> <span className="hide-on-mobile">开局</span>
        </Link>
        <Link href="/history" className="flex items-center gap-1.5 text-muted whitespace-nowrap tooltip-trigger" data-tooltip="过往看见">
          <Clock size={18} /> <span className="hide-on-mobile">过往看见</span>
        </Link>
        <Link href="/login" className="flex items-center gap-1.5 text-muted whitespace-nowrap tooltip-trigger" data-tooltip="登录">
          <User size={18} /> <span className="hide-on-mobile">登录</span>
        </Link>
        <button className="text-muted tooltip-trigger" data-tooltip="设置" style={{ display: 'flex', alignItems: 'center' }}>
          <Settings size={18} />
        </button>
      </nav>
    </header>
  );
}
