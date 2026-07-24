"use client";

import { FormEvent, useEffect, useState } from "react";

const sectors = [
  { id: "ai", label: "医疗AI影像", creators: "12", reach: "28", caseName: "从算法价值到临床叙事", note: "面向影像AI企业的专家内容与媒体传播组合" },
  { id: "device", label: "创新医疗器械", creators: "9", reach: "32", caseName: "产品上市前的合规传播准备", note: "覆盖产品教育、专家观点与产业渠道触达" },
  { id: "digital", label: "数字疗法", creators: "8", reach: "21", caseName: "数字健康的专业信任建设", note: "以临床价值、循证表达和行业影响力为主线" },
  { id: "pharma", label: "药企市场", creators: "11", reach: "39", caseName: "医药商业化的品牌内容路径", note: "联动专业内容、财经医疗媒体与决策人群" },
  { id: "policy", label: "政策合规", creators: "7", reach: "18", caseName: "新规下的发布风险审视", note: "以合规审核与传播边界梳理为前提" },
];

const serviceCards = [
  {
    no: "01",
    tone: "cyan",
    title: "达人矩阵内容服务",
    kicker: "精准触达医疗产业决策人",
    items: ["覆盖医疗AI影像、创新器械、数字疗法等 6 大赛道", "企业专访短视频、行业深度内容、品牌科普商单、产业直播栏目", "30–50 位医疗垂直达人，统一内容与商务品控"],
    metric: "30–50",
    metricLabel: "位医疗垂直达人",
  },
  {
    no: "02",
    tone: "amber",
    title: "品牌公关全域宣发",
    kicker: "让专业价值形成可沉淀的品牌资产",
    items: ["80+ 国内财经医疗媒体、100+ 海外国际媒体协同分发", "行业专栏、品牌视觉物料、产业主题海报、业绩长图", "从品牌叙事到媒体触达，建立长期声量"],
    metric: "180+",
    metricLabel: "国内外媒体渠道",
  },
  {
    no: "03",
    tone: "teal",
    title: "产业咨询 & 企业AI定制",
    kicker: "连接声量、资源与增长闭环",
    items: ["院士专家邀约、全球政企资源对接与产业园区联动", "行业AI知识库、企业AI定制与品牌策划培训", "让线上内容沉淀为线下合作、资本与政企机会"],
    metric: "20+",
    metricLabel: "国政企资源网络",
  },
];

const partners = ["恒瑞医药", "联影医疗", "晶泰科技", "百度医疗", "华为云", "美年健康", "红杉", "高瓴", "IDG", "君联", "深创投"];
const contactTracks = ["医疗 AI 大模型 / 医学影像", "创新医疗器械", "数字疗法 / 互联网医院", "药企市场 / 医药商业化", "医疗产业创投 / 基金", "其他医疗硬科技赛道"];
const contactServices = ["达人矩阵内容传播", "品牌公关与全域媒体宣发", "医疗合规风控评估与审核", "产业咨询 / 企业 AI 知识库定制", "专家、政企、资本资源对接"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSector, setActiveSector] = useState(sectors[0]);
  const [whitepaperOpen, setWhitepaperOpen] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [homeContactSubmitted, setHomeContactSubmitted] = useState(false);

  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        const end = Number(element.dataset.count || 0);
        const suffix = element.dataset.suffix || "";
        const started = performance.now();
        const duration = 900;
        const animate = (now: number) => {
          const progress = Math.min((now - started) / duration, 1);
          element.textContent = `${Math.round(end * (1 - Math.pow(1 - progress, 3)))}${suffix}`;
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        observer.unobserve(element);
      });
    }, { threshold: 0.45 });
    counters.forEach((counter) => observer.observe(counter));
    return () => observer.disconnect();
  }, []);

  async function copyEmail() {
    await navigator.clipboard?.writeText("business@equistrat.com");
    setEmailCopied(true);
    window.setTimeout(() => setEmailCopied(false), 1800);
  }

  function requestWhitepaper(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDownloaded(true);
  }

  function submitHomeContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setHomeContactSubmitted(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)} aria-label="策衡咨询首页">
          <span className="brand-mark" aria-hidden="true">⚖</span>
          <span><b>EquiStrat</b><small>策衡咨询</small></span>
        </a>
        <button className="menu-toggle" aria-label="打开导航" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><i /><i /></button>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#about" onClick={() => setMenuOpen(false)}>关于策衡</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>核心服务</a>
          <a href="#resources" onClick={() => setMenuOpen(false)}>标杆资源</a>
          <a href="#compliance" onClick={() => setMenuOpen(false)}>合规保障</a>
          <a href="#why" onClick={() => setMenuOpen(false)}>为什么选策衡</a>
          <a href="#consult" onClick={() => setMenuOpen(false)}>联系我们</a>
        </nav>
        <a className="header-cta" href="#consult">预约专家咨询 <span>↗</span></a>
      </header>

      <section id="top" className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> MEDICAL AI · INDUSTRY COMMUNICATION</p>
          <h1>医疗AI产业<br /><em>合规安全的增长引擎</em></h1>
          <p className="hero-en">Balanced Strategies for Medical AI Industry</p>
          <p className="hero-description">深耕医疗AI、创新器械与数字健康赛道，以专业内容、合规机制与产业资源，帮助品牌建立可持续的影响力与增长路径。</p>
          <div className="hero-tags"><span>产业达人矩阵</span><span>品牌全案宣发</span><span>资本产业服务</span></div>
          <div className="hero-actions"><a className="button primary" href="#consult">获取定制增长方案 <b>↗</b></a><button className="button quiet" onClick={() => setWhitepaperOpen(true)}>下载行业指南 <b>↓</b></button></div>
        </div>
        <aside className="hero-panel" aria-label="策衡增长方法">
          <p>THE EQUISTRAT METHOD</p>
          <div className="balance-line"><span>专业</span><i /><span>增长</span></div>
          <strong>以合规为边界<br />以产业为尺度</strong>
          <small>内容 × 媒体 × 资源</small>
        </aside>
        <div className="hero-footer"><span>HANGZHOU · CHINA</span><span>© 2026 EQUISTRAT</span><a href="#about">SCROLL TO DISCOVER <b>↓</b></a></div>
      </section>

      <section id="about" className="statement section-shell">
        <p className="section-kicker">01 / ABOUT EQUISTRAT</p>
        <div><h2>增长，不止被看见。<br />更要被<span>正确地看见。</span></h2><p>策衡是深耕医疗AI、创新器械、数字健康赛道的垂直产业传播机构。我们不以泛流量替代专业影响力，而是让每一次发声都落在合规边界内，并连接到真正的产业决策现场。</p></div>
      </section>

      <section className="pain-section section-shell">
        <p className="section-kicker">02 / WHY INDUSTRY NEEDS US</p>
        <div className="section-title"><h2>医疗AI企业传播，<br />为什么这么难？</h2><p>赛道高速发展，品牌传播却常常同时面对专业、合规与转化的三重挑战。</p></div>
        <div className="pain-grid">
          <article className="pain-card warning"><span>01</span><h3>合规风险高悬</h3><p>监管趋严，传统MCN只顾流量不顾合规；一条内容就可能带来封号或行政处罚风险。</p><b>→ 专职合规团队一票否决</b></article>
          <article className="pain-card amber"><span>02</span><h3>流量与专业脱节</h3><p>泛娱乐达人不懂专业，专家不擅表达，品牌难以触达真正需要被影响的决策人群。</p><b>→ 30–50位垂直达人精准触达</b></article>
          <article className="pain-card cyan"><span>03</span><h3>声量与转化断裂</h3><p>线上点赞不少，却难对接院士、资本、政企与园区资源，声量无法转化为产业线索。</p><b>→ 线上线下资源闭环</b></article>
        </div>
      </section>

      <section id="services" className="services section-shell">
        <p className="section-kicker">03 / CORE SERVICES</p>
        <div className="services-heading"><h2>三大核心服务，<br /><span>把影响力变成增长能力。</span></h2><p>从内容声量，到客户线索，再到线下资源转化，建立可衡量、可持续的产业传播闭环。</p></div>
        <div className="service-grid">{serviceCards.map((service) => <article className={`service-card ${service.tone}`} key={service.no}><div className="service-top"><span>{service.no}</span><i>{service.no === "01" ? "◌" : service.no === "02" ? "◉" : "✦"}</i></div><h3>{service.title}</h3><p className="service-kicker">{service.kicker}</p><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul><div className="metric"><strong>{service.metric}</strong><span>{service.metricLabel}</span></div></article>)}</div>
      </section>

      <section className="sector-section section-shell">
        <div><p className="section-kicker">04 / CREATOR MATRIX</p><h2>懂产业的内容，<br /><span>才有有效触达。</span></h2><p className="sector-lead">按赛道匹配达人、媒体覆盖与内容策略。选择一条赛道，查看策衡能够组织的传播切面。</p><div className="sector-list">{sectors.map((sector) => <button className={activeSector.id === sector.id ? "active" : ""} key={sector.id} onClick={() => setActiveSector(sector)}>{sector.label}<b>↗</b></button>)}</div></div>
        <aside className="sector-result"><p>SELECTED SECTOR / {activeSector.label}</p><h3>{activeSector.caseName}</h3><div><strong>{activeSector.creators}<small>位匹配达人</small></strong><strong>{activeSector.reach}<small>家重点媒体</small></strong></div><span>{activeSector.note}</span><a href="#consult">获取该赛道资源清单 <b>↗</b></a></aside>
      </section>

      <section id="resources" className="resource-section section-shell">
        <p className="section-kicker">05 / INDUSTRY ECOSYSTEM</p>
        <div className="resource-heading"><h2>标杆产业资源，<br />一座<span>声量到转化</span>的桥梁。</h2><p>线上内容沉淀影响力，线下资源连接专家、企业、资本与政企网络。</p></div>
        <div className="resource-grid"><article><span>✦</span><h3>院士专家资源</h3><p>两院院士、海外外籍院士、三甲医院院长、行业顶尖专家库</p></article><article><span>▦</span><h3>头部企业资源</h3><p>恒瑞医药、联影医疗、晶泰科技、百度医疗、华为云、美年健康</p></article><article><span>◈</span><h3>创投机构资源</h3><p>红杉、高瓴、IDG、君联、深创投及上百家一线投资机构</p></article><article><span>◎</span><h3>国际政企资源</h3><p>爱尔兰、新加坡、比利时、20国使领馆、全国产业园区</p></article><article><span>⌁</span><h3>会展行业资源</h3><p>中国会展经济研究会、国内头部会展集团与顶层人脉网络</p></article></div>
        <div className="logo-strip"><span>SELECTED INDUSTRY CONNECTIONS</span><div>{[...partners, ...partners].map((partner, index) => <b key={`${partner}-${index}`}>{partner}</b>)}</div></div>
      </section>

      <section id="compliance" className="compliance section-shell">
        <div className="compliance-copy"><p className="section-kicker">06 / COMPLIANCE FIRST</p><h2>安全不是附加项，<br /><span>而是增长的起点。</span></h2><p>所有医疗内容在发布前，均由专职合规团队统一审核。医疗监管法规与商业推广双向制衡，确保专业表达始终在合规边界内。</p><a className="text-link" href="#consult">预约合规传播诊断 <b>↗</b></a></div>
        <div className="process"><p>COMPLIANCE REVIEW PROCESS</p><div><span>01</span><h3>内容立项</h3><small>确认产品、受众与传播边界</small></div><div><span>02</span><h3>专业审核</h3><small>核验医学表达与事实依据</small></div><div><span>03</span><h3>合规审校</h3><small>专职岗位拥有一票否决权</small></div><div><span>04</span><h3>统一发布</h3><small>全程留痕与动态风险复盘</small></div></div>
      </section>

      <section id="why" className="why-section section-shell">
        <p className="section-kicker">07 / WHY EQUISTRAT</p><h2>为什么选择策衡</h2>
        <div className="why-grid"><article><span>01</span><h3>合规零风险</h3><p>专职医疗合规岗位拥有内容发布一票否决权。</p></article><article><span>02</span><h3>规模与品控兼得</h3><p>统一管控账号、内容与商单，兼顾流量与质量。</p></article><article><span>03</span><h3>商务对接高效</h3><p>矩阵式组织架构，权责清晰，商务决策不再卡壳。</p></article><article><span>04</span><h3>声量转化闭环</h3><p>线上做声量，线下直接对接高端政企、院士与资本资源。</p></article></div>
        <div className="counter-row"><div><strong data-count="50" data-suffix="+">0</strong><span>医疗垂直达人</span></div><div><strong data-count="180" data-suffix="+">0</strong><span>国内外媒体渠道</span></div><div><strong data-count="20" data-suffix="+">0</strong><span>国政企资源网络</span></div><div><strong data-count="10" data-suffix="W+">0</strong><span>产业垂直粉丝</span></div></div>
      </section>

      <section id="consult" className="consult-section">
        <div className="consult-inner"><div><p className="section-kicker">08 / START A CONVERSATION</p><h2>让下一个增长节点，<br /><span>从这里开始。</span></h2><p>提交合作需求，我们将在 24 小时内与您联系。</p></div><a className="consult-button" href="/contact"><span>预约专家咨询</span><b>↗</b></a></div>
      </section>

      <section id="contact-form" className="home-contact-form">
        <div className="home-form-intro"><p className="section-kicker">09 / INTERACTIVE LEAD FORM</p><h2>告诉我们，<br /><span>您正在推进什么。</span></h2><p>留下关键需求，策衡杭州团队将在 24 小时内为您匹配专属产业顾问。</p><div><b>⌑</b><span>您的企业信息与合作需求均受商业保密协议保护。</span></div></div>
        <form className="home-lead-form" onSubmit={submitHomeContact}>
          <div className="home-form-title"><p>INTERACTIVE LEAD FORM</p><span>带 <b>*</b> 的为必填项</span></div>
          <div className="home-field-grid"><label>姓名 <b>*</b><input name="name" required placeholder="请输入您的姓名" /></label><label>企业 / 机构名称 <b>*</b><input name="company" required placeholder="请输入公司全称" /></label><label>您的职务 <b>*</b><input name="position" required placeholder="如：创始人 / 市场总监" /></label><label>工作手机 / 微信 <b>*</b><input name="phone" required placeholder="用于匹配专属顾问" /></label><label className="home-wide">工作邮箱 <b>*</b><input name="email" required type="email" placeholder="请输入公司邮箱" /></label></div>
          <fieldset><legend>您所在的细分赛道是？ <b>*</b></legend><div className="home-choice-list">{contactTracks.map((track, index) => <label key={track}><input required={index === 0} type="radio" name="track" value={track} /><span>{track}</span></label>)}</div></fieldset>
          <fieldset><legend>您希望策衡为您提供哪些服务？ <b>*</b></legend><div className="home-choice-list home-service-choice">{contactServices.map((service) => <label key={service}><input type="checkbox" name="service" value={service} /><span>{service}</span></label>)}</div></fieldset>
          <div className="home-field-grid home-bottom-fields"><label className="home-wide">需求简述 <small>选填</small><textarea name="brief" placeholder="简要描述您目前面临的传播痛点或拟推广的项目…" /></label><label>预计执行时间 <small>选填</small><select name="timeline" defaultValue=""><option value="" disabled>请选择时间安排</option><option>1 个月内</option><option>本季度</option><option>半年内</option><option>仅先了解</option></select></label><label>预算区间 <small>选填</small><select name="budget" defaultValue=""><option value="" disabled>请选择预算范围</option><option>10 万以内</option><option>10 - 50 万</option><option>50 - 100 万</option><option>100 万以上</option></select></label></div>
          <button className="home-submit" type="submit"><span>提交需求，免费获取定制增长方案</span><b>↗</b></button><p className="home-form-hook">提交后可自动获取《医疗 AI 产业合规传播与全域增长白皮书》</p>
        </form>
      </section>

      <footer><div className="footer-brand"><span>⚖</span><b>EquiStrat</b><small>策衡咨询</small></div><div><p>商务合作邮箱</p><button onClick={copyEmail}>{emailCopied ? "已复制邮箱" : "business@equistrat.com"}</button></div><div><p>公司地址</p><span>中国 · 杭州</span></div><div><p>关注我们</p><span>医线Insight · 西高Med.T</span></div><small>© 2026 策衡 EquiStrat ｜ 医疗AI垂直产业全域传播服务商</small></footer>

      {homeContactSubmitted && <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="home-contact-success"><div className="home-contact-success"><span>✓</span><p>REQUEST RECEIVED</p><h3 id="home-contact-success">提交成功！</h3><div>您的专属产业顾问（杭州团队）已收到需求，将在 24 小时内与您联系。</div><button type="button" onClick={() => setHomeContactSubmitted(false)}>好的，我知道了 <b>↗</b></button></div></div>}
      {whitepaperOpen && <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="guide-title"><div className="guide-modal"><button className="modal-close" aria-label="关闭" onClick={() => { setWhitepaperOpen(false); setDownloaded(false); }}>×</button>{downloaded ? <div className="download-success"><span>✓</span><h3>资料领取成功</h3><p>《医疗AI产业合规传播指南》将发送至您填写的邮箱。</p></div> : <><p className="section-kicker">EQUISTRAT INSIGHT</p><h3 id="guide-title">领取《医疗AI产业合规传播指南》</h3><p>提交邮箱，即可获取医疗AI品牌传播的合规要点与行业长图。</p><form onSubmit={requestWhitepaper}><label>工作邮箱<input required type="email" placeholder="name@company.com" /></label><button className="button primary" type="submit">领取资料 <b>↓</b></button></form></>}</div></div>}
    </main>
  );
}
