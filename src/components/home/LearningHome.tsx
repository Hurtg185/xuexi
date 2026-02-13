import React, { useState } from "react";
import {
  Menu,
  X,
  Sparkles,
  Mic2,
  Music4,
  Layers,
  BookText,
  Globe,
  Library,
  Star,
  Volume2,
  ChevronRight,
  Headphones
} from "lucide-react";
import "./LearningHome.css";

const pinyinMain = [
  { id: "initials", title: "声母", sub: "ဗျည်း", icon: Mic2, href: "/pinyin/initials" },
  { id: "finals", title: "韵母", sub: "သရ", icon: Music4, href: "/pinyin/finals" },
  { id: "whole", title: "整体", sub: "အသံတွဲ", icon: Layers, href: "/pinyin/whole" },
  { id: "tones", title: "声调", sub: "အသံ", icon: BookText, href: "/pinyin/tones" }
];

export default function LearningHome() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="learn-shell">
      <div className="learn-phone">
        <aside className={`learn-sidebar ${sidebarOpen ? "open" : ""}`} aria-hidden={!sidebarOpen}>
          <div className="learn-sidebar-head">
            <strong>学习菜单</strong>
            <button onClick={() => setSidebarOpen(false)} aria-label="关闭菜单">
              <X size={18} />
            </button>
          </div>
          <nav className="learn-sidebar-nav">
            <a href="/">首页</a>
            <a href="/pinyin/initials">拼音系统</a>
            <a href="/spoken">口语练习</a>
            <a href="/posts">课程文章</a>
            <a href="/about">关于我们</a>
          </nav>
        </aside>

        {sidebarOpen && (
          <button
            className="learn-overlay"
            aria-label="关闭侧边栏"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <header className="learn-hero">
          <div className="learn-hero-top">
            <button className="icon-btn" onClick={() => setSidebarOpen(true)} aria-label="打开菜单">
              <Menu size={18} />
            </button>

            <div className="pill">
              <Sparkles size={12} />
              <span>Premium Class</span>
            </div>

            <a className="messenger-btn" href="https://m.me/61575187883357" target="_blank" rel="noreferrer">
              Messenger
            </a>
          </div>

          <h1>中缅文学习中心</h1>
          <p>拼音・口语・HSK 一体化学习平台（手机/平板同款体验）</p>
        </header>

        <main className="learn-main">
          <section className="card glass">
            <h3 className="section-title">拼音基础</h3>

            <div className="grid-4">
              {pinyinMain.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.id} href={item.href} className="mini-card">
                    <Icon size={16} />
                    <span>{item.title}</span>
                    <em>{item.sub}</em>
                  </a>
                );
              })}
            </div>

            <div className="grid-2 mt-12">
              <a href="/tools/translator" className="action-card blue">
                <Globe size={16} />
                <span>AI 翻译</span>
              </a>
              <a href="/books" className="action-card cyan">
                <Library size={16} />
                <span>免费书籍</span>
              </a>
            </div>

            <div className="grid-2 mt-12">
              <a href="/favorites/words" className="soft-btn">
                <Star size={14} />
                单词收藏
              </a>
              <a href="/favorites/spoken" className="soft-btn">
                <Volume2 size={14} />
                口语收藏
              </a>
            </div>
          </section>

          <a href="/spoken" className="banner">
            <img
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&q=80"
              alt="oral practice"
            />
            <div className="banner-mask">
              <div>
                <p>Oral Practice</p>
                <h4>日常口语练习</h4>
                <small>နေ့စဉ်သုံး စကားပြော လေ့ကျင့်ခန်း</small>
              </div>
              <ChevronRight size={20} />
            </div>
          </a>
        </main>

        <nav className="bottom-nav" aria-label="底部导航">
          <a href="/" className="active">首页</a>
          <a href="/spoken"><Headphones size={16} />口语</a>
          <a href="/posts">课程</a>
          <button type="button" onClick={() => setSidebarOpen(true)}>菜单</button>
        </nav>
      </div>
    </div>
  );
}
