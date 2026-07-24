"use client";

import { FormEvent, useState } from "react";
import "./contact.css";

const tracks = [
  "医疗 AI 大模型 / 医学影像",
  "创新医疗器械",
  "数字疗法 / 互联网医院",
  "药企市场 / 医药商业化",
  "医疗产业创投 / 基金",
  "其他医疗硬科技赛道",
];

const services = [
  "达人矩阵内容传播",
  "品牌公关与全域媒体宣发",
  "医疗合规风控评估与审核",
  "产业咨询 / 企业 AI 知识库定制",
  "专家、政企、资本资源对接",
];

const partners = ["恒瑞医药", "联影医疗", "红杉资本", "高瓴", "华为云", "百度健康"];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function copyEmail() {
    await navigator.clipboard?.writeText("business@equistrat.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="contact-page">
      <header className="contact-nav">
        <a className="contact-brand" href="/" aria-label="返回策衡咨询首页">
          <span className="brand-glyph">⚖</span>
          <span><b>EquiStrat</b><small>策衡咨询</small></span>
        </a>
        <div className="nav-right"><span>HANGZHOU · CHINA</span><a href="/">返回官网 <b>↗</b></a></div>
      </header>

      <section className="contact-hero">
        <p>START A CONVERSATION / 08</p>
        <h1>与策衡建立联系，<em>开启合规增长</em></h1>
        <span>让专业表达、可信传播与产业资源，在正确的边界内发生。</span>
      </section>

      <section className="contact-layout">
        <aside className="contact-trust">
          <p className="section-label">INFORMATION &amp; TRUST</p>
          <h2>把您的下一步<br />交给更懂产业的人。</h2>
          <p className="trust-intro">我们的专属产业顾问将在 24 小时内与您联系，提供一对一咨询服务。</p>

          <div className="contact-facts">
            <div><span>商务合作邮箱</span><button type="button" onClick={copyEmail}>{copied ? "已复制邮箱" : "business@equistrat.com"} <b>↗</b></button></div>
            <div><span>公司地址</span><strong>中国 · 杭州</strong></div>
          </div>

          <div className="location-card" aria-label="策衡咨询杭州总部位置示意">
            <div className="map-grid" />
            <div className="map-river" />
            <div className="map-pin"><i />杭州总部<small>EquiStrat HQ</small></div>
            <span>HANGZHOU / ZHEJIANG</span>
          </div>

          <div className="media-row">
            <div className="qr-code" aria-label="官方媒体二维码示意"><i /><i /><i /><i /><b>+</b></div>
            <p><b>官方媒体矩阵</b><span>医线Insight · 西高Med.T</span><span>查线产业观察</span></p>
          </div>

          <div className="confidentiality">
            <span>⌑</span><p><b>严格保密协议</b>策衡恪守医疗产业合规要求。您提交的企业信息与合作需求均受商业保密协议保护，不向任何第三方泄露。</p>
          </div>
        </aside>

        <section className="lead-panel">
          <div className="form-heading"><p className="section-label">INTERACTIVE LEAD FORM</p><h2>告诉我们，<span>您正在推进什么。</span></h2><small>带 <b>*</b> 的为必填项</small></div>
          <form onSubmit={submitForm}>
            <div className="field-grid">
              <label>姓名 <b>*</b><input required name="name" placeholder="请输入您的姓名" /></label>
              <label>企业 / 机构名称 <b>*</b><input required name="organization" placeholder="请输入公司全称" /></label>
              <label>您的职务 <b>*</b><input required name="role" placeholder="如：创始人 / 市场总监" /></label>
              <label>工作手机 / 微信 <b>*</b><input required name="phone" placeholder="用于匹配专属顾问" /></label>
              <label className="wide">工作邮箱 <b>*</b><input required type="email" name="email" placeholder="请输入公司邮箱" /></label>
            </div>

            <fieldset><legend>您所在的细分赛道是？ <b>*</b></legend><div className="choice-list track-list">{tracks.map((track, index) => <label key={track}><input required={index === 0} type="radio" name="track" value={track} /><span>{track}</span></label>)}</div></fieldset>
            <fieldset><legend>您希望策衡为您提供哪些服务？ <b>*</b></legend><div className="choice-list service-list">{services.map((service) => <label key={service}><input type="checkbox" name="service" value={service} /><span>{service}</span></label>)}</div></fieldset>

            <div className="field-grid bottom-fields">
              <label className="wide">需求简述 <small>选填</small><textarea name="brief" placeholder="简要描述您目前面临的传播痛点或拟推广的项目…" /></label>
              <label>预计执行时间 <small>选填</small><select name="timeline" defaultValue=""><option value="" disabled>请选择时间安排</option><option>1 个月内</option><option>本季度</option><option>半年内</option><option>仅先了解</option></select></label>
              <label>预算区间 <small>选填</small><select name="budget" defaultValue=""><option value="" disabled>请选择预算范围</option><option>10 万以内</option><option>10 - 50 万</option><option>50 - 100 万</option><option>100 万以上</option></select></label>
            </div>
            <button className="submit-button" type="submit"><span>提交需求，免费获取定制增长方案</span><b>↗</b></button>
            <p className="form-hook">提交后可自动获取《医疗 AI 产业合规传播与全域增长白皮书》</p>
          </form>
        </section>
      </section>

      <section className="contact-partners"><span>TRUSTED INDUSTRY CONNECTIONS</span><div>{[...partners, ...partners].map((partner, index) => <b key={`${partner}-${index}`}>{partner}</b>)}</div></section>
      <footer className="contact-footer"><span>© 2026 策衡 EquiStrat</span><span>医疗 AI 垂直产业全域传播服务商</span><a href="mailto:business@equistrat.com">business@equistrat.com</a></footer>

      <div className="floating-contact"><a href="tel:057100000000" aria-label="电话联系">☎</a><button type="button" onClick={copyEmail} aria-label="复制商务邮箱">✦</button></div>

      {submitted && <div className="success-backdrop" role="dialog" aria-modal="true" aria-labelledby="success-title"><div className="success-modal"><span>✓</span><p>REQUEST RECEIVED</p><h3 id="success-title">提交成功！</h3><div>您的专属产业顾问（杭州团队）已收到您的需求，将在 24 小时内与您联系。</div><button type="button" onClick={() => setSubmitted(false)}>好的，我知道了 <b>↗</b></button></div></div>}
    </main>
  );
}
