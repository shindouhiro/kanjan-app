import Link from "next/link";
import { ArrowRight, Compass, Target, Anchor, Users, Play, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full" style={{ padding: '4rem 1rem' }}>
      
      {/* Top Section */}
      <div style={{ maxWidth: '720px', width: '100%' }}>
        <div className="flex flex-col items-center text-center mb-10">
          <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--muted-foreground)', borderRadius: '50%', marginBottom: '1.5rem', boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}></div>
          <h1 className="mb-4 text-gradient" style={{ fontFamily: '"Songti SC", "STSong", "Noto Serif SC", serif', fontSize: '3.5rem', fontWeight: 500, letterSpacing: '0.02em' }}>
            把说不清的问题，先看清。
          </h1>
          <p className="text-muted" style={{ fontSize: '1rem', letterSpacing: '0.05em' }}>
            不是来这里找答案的——而是先看清，到底是什么在真正卡住你。
          </p>
        </div>

        <div className="glass-card mb-6 hover-lift" style={{ padding: '0', borderRadius: '1rem', overflow: 'hidden' }}>
          <textarea 
            placeholder="先说说——你现在面对的是什么局？"
            style={{
              width: '100%',
              minHeight: '140px',
              border: 'none',
              borderBottom: '1px solid rgba(0,0,0,0.05)',
              resize: 'none',
              outline: 'none',
              fontSize: '1rem',
              backgroundColor: 'transparent',
              color: 'var(--foreground)',
              padding: '1.5rem',
              lineHeight: 1.6
            }}
          />
          <div className="flex justify-between items-center" style={{ padding: '1rem 1.5rem', backgroundColor: 'rgba(0,0,0,0.02)' }}>
            <span style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>
              先把局看清，才知道怎么走
            </span>
            <button className="btn" style={{ backgroundColor: '#111', color: '#fff', borderRadius: '2rem', padding: '0.6rem 1.2rem', fontSize: '0.875rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              先看清这件事 <ArrowRight size={14} />
            </button>
          </div>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-20">
          {["在舒适区待久了，不知道该跳槽还是内部转岗", "觉得每天都在救火，推不动重要的事", "想做一份更有意义的工作，但不知道方向"].map((text, i) => (
            <button key={i} className="pill-btn">
              {text}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Grid Section */}
      <div style={{ maxWidth: '1024px', width: '100%', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }}>
        
        {/* Column 1 */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-semibold text-muted">场景切入</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6" style={{ paddingBottom: '1.25rem', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
            <span className="btn hover-lift" style={{ padding: '0.4rem 1rem', borderRadius: '1.5rem', backgroundColor: '#111', color: '#fff', fontSize: '0.75rem', cursor: 'pointer' }}>职业选择</span>
            <span className="btn hover-lift" style={{ padding: '0.4rem 1rem', borderRadius: '1.5rem', backgroundColor: '#f5f5f5', color: '#555', fontSize: '0.75rem', cursor: 'pointer' }}>创业指南</span>
            <span className="btn hover-lift" style={{ padding: '0.4rem 1rem', borderRadius: '1.5rem', backgroundColor: '#f5f5f5', color: '#555', fontSize: '0.75rem', cursor: 'pointer' }}>家庭教育</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: '1.5rem', columnGap: '2rem', fontSize: '0.8rem' }}>
            <div className="flex items-center gap-2 text-muted" style={{ color: '#666' }}><Compass size={14} /> 走到了岔路口</div>
            <div className="flex items-center gap-2 text-muted" style={{ color: '#666' }}><Target size={14} /> 推不动的事</div>
            <div className="flex items-center gap-2 text-muted" style={{ color: '#666' }}><Anchor size={14} /> 卡在一个决定</div>
            <div className="flex items-center gap-2 text-muted" style={{ color: '#666' }}><Users size={14} /> 与人之间的拉扯</div>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-semibold text-muted">最近看见</span>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center text-sm" style={{ paddingTop: '0.4rem' }}>
              <span style={{ color: '#333' }}>产品出海第一站选型</span>
              <span className="text-xs" style={{ color: '#aaa' }}>昨天</span>
            </div>
            <div className="flex justify-between items-center text-sm" style={{ marginTop: '1rem' }}>
              <span className="flex items-center gap-3" style={{ color: '#333' }}>
                <span style={{ width: '5px', height: '5px', backgroundColor: '#3b82f6', borderRadius: '50%' }}></span>
                是否应该裸辞休息三个月
              </span>
              <span style={{ color: '#3b82f6', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem' }}>
                <Play size={12} /> 继续
              </span>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-semibold text-muted">过往看见</span>
          </div>
          <Link href="/history" className="flex items-center gap-4 hover-lift" style={{ cursor: 'pointer', display: 'inline-flex', padding: '0.2rem' }}>
            <div style={{ padding: '0.75rem', backgroundColor: '#f2f2f2', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BookOpen size={18} color="#666" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-sm font-medium" style={{ color: '#111', marginBottom: '0.2rem' }}>查看全部看见记录</span>
              <span className="text-xs" style={{ color: '#999' }}>4 轮 · 2 张看见卡</span>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
