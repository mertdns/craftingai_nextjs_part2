# 🚀 CraftingAI - Modern AI Landing Page

Modern, responsive ve performans odaklı bir yapay zeka platformu landing sayfası. Next.js 16, React 19 ve Tailwind CSS 4 ile geliştirilmiştir.

![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Özellikler

### 🎨 Modern Tasarım
- **Gradient Animasyonlar**: Dinamik ve göz alıcı gradient efektler
- **Glassmorphism**: Modern cam efekti tasarım
- **Dark Theme**: Profesyonel koyu tema
- **Responsive**: Tüm cihazlarda mükemmel görünüm

### ⚡ Performans
- **Server Components**: Next.js 16 Server Components ile optimize edilmiş render
- **Minimal Bundle**: Gereksiz client-side JavaScript'i minimize edildi
- **SEO-Friendly**: Server-side rendering ile mükemmel SEO
- **Fast Load**: Optimize edilmiş asset'ler ve lazy loading

### 🌐 Çoklu Dil Desteği (i18n)
- **next-intl Integration**: Profesyonel çoklu dil desteği
- **Türkçe & İngilizce**: Tam çeviri desteği
- **Locale Routing**: `/tr` ve `/en` route desteği
- **Modern Language Switcher**: Glassmorphism efektli dil değiştirici
- **Animated Dropdown**: Scale & fade animasyonlu dropdown menü
- **SEO Optimized**: Her dil için ayrı meta tags

### 🎭 Gelişmiş Animasyonlar
- **Slide-Down Mobile Menu**: Yumuşak kayan mobil menü animasyonu
- **Hamburger → X Transformation**: Animasyonlu menü ikonu
- **Globe Icon Animation**: Hover'da dönen dünya ikonu
- **Flag Hover Effects**: Hover'da büyüyen bayrak animasyonları
- **Glow Border Effects**: Hover'da parlayan kenar efektleri
- **Loading Spinner**: Dil değişimi sırasında spinner

### 🧭 Navigasyon
- **Scroll Spy**: Otomatik section algılama ve aktif link gösterimi
- **Smooth Scrolling**: Yumuşak sayfa içi navigasyon
- **Animated Mobile Menu**: Slide-down animasyonlu mobil menü
- **Fixed Header**: Sabit header ile kolay erişim
- **Locale-Aware Links**: Dil-aware navigasyon linkleri

### 🛠️ State Management
- **Redux Toolkit**: Modern state yönetimi
- **React Redux**: React entegrasyonu
- **Client Components**: Gerektiğinde client-side interaktivite

## 🏗️ Proje Yapısı

```
craftingai_nextjs_p2/
├── app/
│   ├── [locale]/                 # Locale-based routing
│   │   ├── landing/              # Landing page route
│   │   ├── login/                # Login page route
│   │   ├── register/             # Register page route
│   │   ├── layout.tsx            # Locale layout
│   │   └── page.tsx              # Locale redirect
│   ├── components/
│   │   ├── Landing_Layout/
│   │   │   ├── Header/           # Navigation header (index.tsx)
│   │   │   └── Footer/           # Footer component (index.tsx)
│   │   └── LanguageSwitcher/     # Language switcher (index.tsx)
│   ├── store/
│   │   └── store.ts              # Redux store configuration
│   ├── globals.css               # Global styles & animations
│   └── layout.tsx                # Root layout
├── locales/                       # i18n translations
│   ├── tr/                        # Turkish translations
│   │   ├── common.json
│   │   └── landing.json
│   └── en/                        # English translations
│       ├── common.json
│       └── landing.json
├── i18n.ts                        # i18n configuration
├── middleware.ts                  # Locale middleware
├── public/                        # Static assets
└── package.json
```

## 🚀 Kurulum

### Gereksinimler
- Node.js 20.x veya üzeri
- npm, yarn, pnpm veya bun

### Adımlar

1. **Repository'yi klonlayın**
```bash
git clone <repository-url>
cd craftingai_nextjs_p2
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
# veya
yarn install
# veya
pnpm install
```

3. **Development sunucusunu başlatın**
```bash
npm run dev
```

4. **Tarayıcınızda açın**
```
http://localhost:3000/tr/landing
# veya
http://localhost:3000/en/landing
```

## 📦 Teknolojiler

### Core
- **Next.js 16.0.3** - React framework (App Router)
- **React 19.2.0** - UI library
- **TypeScript 5** - Type safety

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS transformations
- **Custom Animations** - CSS keyframe animations

### State Management
- **Redux Toolkit 2.10.1** - State management
- **React Redux 9.2.0** - React bindings

### Internationalization
- **next-intl 3.27.2** - i18n for Next.js App Router
- **Locale Routing** - Automatic locale detection and routing
- **Server & Client Components** - Full i18n support

### Development
- **ESLint 9** - Code linting
- **TypeScript** - Static type checking

## 🎯 Sayfalar

### Landing Page (`/landing`)
- ✨ Hero section with animated gradients
- 🎯 Features section with 4 key features
- 📊 Statistics showcase
- 💻 Code mockup demonstration
- 📱 Fully responsive design

### Components
- **Header**: Fixed navigation with scroll spy
- **Footer**: Multi-column footer with social links

## 🔧 Geliştirme

### Scripts

```bash
# Development sunucusu
npm run dev

# Production build
npm run build

# Production sunucusu başlat
npm run start

# Linting
npm run lint
```

### Özelleştirme

**Renkler**: `globals.css` ve Tailwind utility class'ları kullanarak özelleştirin

**Animasyonlar**: `globals.css` içinde keyframe tanımları

**Components**: `app/components/` altında component'leri düzenleyin

## 🎨 Tasarım Sistemi

### Renk Paleti
- **Primary**: Indigo (500-950)
- **Secondary**: Purple (400-500)
- **Accent**: Pink (400-500)
- **Background**: Slate (800-950)

### Animasyonlar
- `animate-pulse` - Pulsing effect
- `animate-gradient` - Gradient position animation
- Hover transitions - Scale, translate, opacity

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Önerilen)
```bash
# Vercel CLI ile deploy
vercel
```

### Build & Export
```bash
npm run build
npm run start
```

## 📄 Lisans

Bu proje özel/ticari bir proje olarak geliştirilmiştir.

## 👨‍💻 Geliştirici

**CraftingAI Team**

---

<div align="center">
  <p>⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!</p>
  <p>Made with ❤️ using Next.js & Tailwind CSS</p>
</div>
