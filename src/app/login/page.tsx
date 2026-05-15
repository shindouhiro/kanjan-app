import Link from "next/link";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen" style={{ padding: '2rem', position: 'relative' }}>
      
      <div className="flex flex-col items-center mb-10">
        <div style={{
          width: '40px',
          height: '40px',
          backgroundColor: 'var(--primary)',
          color: 'var(--primary-foreground)',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '18px',
          marginBottom: '1.5rem'
        }}>
          看
        </div>
        <h1 className="font-semibold text-2xl mb-3">欢迎回来</h1>
        <p className="text-muted text-sm text-center" style={{ maxWidth: '300px' }}>
          入局，而后破局。在静默中找寻转折的契机。
        </p>
      </div>

      <div className="card w-full mb-8" style={{ maxWidth: '400px', padding: '2.5rem' }}>
        <div className="mb-5">
          <label className="text-xs font-semibold mb-2 block" style={{ color: 'var(--muted-foreground)' }}>邮箱</label>
          <div style={{ position: 'relative' }}>
            <Mail size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted-foreground)' }} />
            <input type="email" placeholder="name@example.com" className="input" style={{ paddingLeft: '2.5rem' }} />
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-semibold" style={{ color: 'var(--muted-foreground)' }}>密码</label>
            <Link href="#" className="text-xs" style={{ color: 'var(--muted-foreground)' }}>忘记密码?</Link>
          </div>
          <div style={{ position: 'relative' }}>
            <Lock size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted-foreground)' }} />
            <input type="password" placeholder="••••••••" className="input" style={{ paddingLeft: '2.5rem' }} />
          </div>
        </div>

        <button className="btn btn-primary w-full mb-6" style={{ padding: '0.875rem' }}>
          确认登录 <ArrowRight size={16} />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border)' }}></div>
          <span className="text-xs text-muted">或者</span>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border)' }}></div>
        </div>

        <button className="btn btn-outline w-full" style={{ padding: '0.875rem' }}>
          <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Google 登录
        </button>
      </div>

      <div className="text-sm">
        <span className="text-muted text-xs">还没有账号？</span> <Link href="#" className="font-semibold text-xs">立即注册</Link>
      </div>

      <div style={{ position: 'absolute', bottom: '2rem', maxWidth: '400px', textAlign: 'center', opacity: 0.5 }}>
        <p className="text-xs italic" style={{ color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
          “凡事皆有其局。登录不仅是权限的开启，更是心境的切换。邀你于此处境中，照见真我。”
        </p>
      </div>

    </div>
  );
}
