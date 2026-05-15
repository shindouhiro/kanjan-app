import { Search, RefreshCw, ArrowRight, ChevronRight } from "lucide-react";

export default function HistoryPage() {
  return (
    <div className="flex justify-center w-full page-padding">
      <div style={{ maxWidth: '1024px', width: '100%' }}>
        <div className="mb-10">
          <h1 className="font-semibold text-2xl mb-2">过往看见</h1>
          <p className="text-muted text-sm">这里沉淀的是聊天记录——更是你在每一次思考中真正看清的东西。</p>
        </div>

        <div className="history-grid">
          
          {/* Left Sidebar */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-muted">
              <RefreshCw size={14} /> 最近看见
            </div>
            
            <div className="card mb-6" style={{ padding: '1.5rem', borderRadius: '1rem' }}>
              <div className="flex justify-between items-center mb-4 text-xs text-muted">
                <span>职业选择 · 昨天 16:40</span>
                <span style={{ width: '6px', height: '6px', backgroundColor: '#22c55e', borderRadius: '50%' }}></span>
              </div>
              
              <div className="flex items-center gap-1 text-xs text-muted mb-2">
                <RefreshCw size={12} /> 写到坎里你的问题
              </div>
              <h3 className="font-semibold text-base mb-2 leading-snug">
                我是在逃避现状，还是在奔向一个真正值得的机会？
              </h3>
              <p className="text-xs text-muted mb-6">来自: 关于是否转岗到创新业务线</p>
              
              <div className="flex items-center gap-1 text-xs text-muted mb-2">
                <ArrowRight size={12} /> 最小下一步
              </div>
              <p className="text-sm font-medium mb-6 leading-relaxed">
                约创新业务负责人进行 30 分钟非正式沟通，摸底实际资源情况。
              </p>
              
              <button className="btn btn-primary w-full">
                查看完整看见 <ArrowRight size={14} />
              </button>
            </div>

            <div className="flex items-start gap-2 opacity-50">
              <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>✦</span>
              <p className="text-xs italic leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                每一张看见卡，都是你认知推进的记录——不是聊天，是资产。
              </p>
            </div>
          </div>

          {/* Right Area */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-semibold text-muted">每一轮</span>
              <div style={{ position: 'relative', width: '240px' }}>
                <Search size={14} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted-foreground)' }} />
                <input type="text" placeholder="搜索..." className="input" style={{ paddingLeft: '2rem', padding: '0.5rem 1rem 0.5rem 2rem', borderRadius: '2rem', height: 'auto', fontSize: '0.75rem' }} />
              </div>
            </div>

            <div className="flex flex-col">
              
              {/* Item 1 */}
              <div className="card" style={{ padding: '1.25rem', borderRadius: '0.75rem', marginBottom: '1rem', borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderBottom: '1px solid var(--border)' }}>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-sm">如何平衡短期 KPI 与长期架构重构？</h3>
                  <span style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem', borderRadius: '0.25rem', backgroundColor: '#fff7ed', color: '#ea580c', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <RefreshCw size={10} /> 这轮还在
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span style={{ padding: '0.2rem 0.5rem', backgroundColor: 'var(--muted)', borderRadius: '0.25rem' }}>技术决断</span>
                  <span>今天 10:24</span>
                  <ChevronRight size={14} className="ml-auto" />
                </div>
              </div>

              {/* Item 2 */}
              <div className="card" style={{ padding: '1.25rem', borderRadius: '0', marginBottom: '1rem', borderTop: 'none', borderBottom: '1px solid var(--border)' }}>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-sm">关于是否转岗到创新业务线</h3>
                  <span style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem', borderRadius: '0.25rem', backgroundColor: '#f0fdf4', color: '#16a34a' }}>
                    已沉淀
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted mb-3">
                  <span style={{ padding: '0.2rem 0.5rem', backgroundColor: 'var(--muted)', borderRadius: '0.25rem' }}>职业选择</span>
                  <span>昨天 16:40</span>
                  <ChevronRight size={14} className="ml-auto" />
                </div>
                <p className="text-xs italic text-muted">我是在逃避现状，还是在奔向一个真正值得的机会？</p>
              </div>

              {/* Item 3 */}
              <div className="card" style={{ padding: '1.25rem', borderRadius: '0', marginBottom: '1rem', borderTop: 'none', borderBottom: '1px solid var(--border)' }}>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-sm">与合伙人在公司未来战略上的分歧</h3>
                  <span style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem', borderRadius: '0.25rem', backgroundColor: '#f0fdf4', color: '#16a34a' }}>
                    已沉淀
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted mb-3">
                  <span style={{ padding: '0.2rem 0.5rem', backgroundColor: 'var(--muted)', borderRadius: '0.25rem' }}>关系与协作</span>
                  <span>上周二</span>
                  <ChevronRight size={14} className="ml-auto" />
                </div>
                <p className="text-xs italic text-muted">我们是在争夺控制权，还是用不同方式达成同一个财务目标？</p>
              </div>

              {/* Item 4 */}
              <div className="card" style={{ padding: '1.25rem', borderRadius: '0.75rem', borderTopLeftRadius: 0, borderTopRightRadius: 0, borderTop: 'none' }}>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-sm">面对大量负面用户反馈时的焦虑</h3>
                  <span style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem', borderRadius: '0.25rem', backgroundColor: 'var(--muted)', color: 'var(--muted-foreground)' }}>
                    沉淀中
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span style={{ padding: '0.2rem 0.5rem', backgroundColor: 'var(--muted)', borderRadius: '0.25rem' }}>情绪与决策</span>
                  <span>3月1日</span>
                  <ChevronRight size={14} className="ml-auto" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
