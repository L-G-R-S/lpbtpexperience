## 🎨 DESIGN SYSTEM

### Identidade Visual Prime Control

Extrair identidade visual de:
- https://lp.primecontrol.com.br/prime-control-experience-dezembro-de-2025/
- https://www.primecontrol.com.br/

### Cores (Proporção 70/20/10)

```css
/* Azuis Institucionais */
--primary-dark: #002753     /* 70% - Backgrounds principais */
--primary: #004A8F          /* 20% - Elementos secundários */
--primary-light: #2FC3FF    /* 10% - Acentos */

/* Laranja (CTAs APENAS) */
--accent: #FF7800           /* Uso estratégico */
--accent-hover: #E66D00

/* Secundário */
--secondary: #05183A
--secondary-hover: #0D1C44

/* Neutros */
--white: #FFFFFF
--text-primary: #333333
--text-secondary: #666666
```

### Tipografia

```css
/* Headings */
font-family: 'Titillium Web', sans-serif
font-weight: 600-700

/* Body */
font-family: 'Poppins', sans-serif
font-weight: 400-500

/* Tamanhos */
H1: 45px desktop / 32px mobile
H2: 36px desktop / 28px mobile
H3: 28px
H4: 23px
Body: 23px desktop / 16px mobile
```

### Espaçamento (Base Unit: 4px)

```css
/* System */
--spacing-4: 16px
--spacing-6: 24px
--spacing-8: 32px
--spacing-12: 48px
--spacing-16: 64px
--spacing-24: 96px

/* Sections */
Desktop: 96px
Tablet: 80px
Mobile: 64px

/* Container */
Max-width: 1200px
Padding: 24px desktop / 16px mobile
```

### Componentes

**Botão Primário:**
```css
background: #FF7800
color: #FFFFFF
border-radius: 0px
padding: 16px 32px
font-size: 18px
font-weight: 600
box-shadow: rgba(255, 120, 0, 0.3) 0px 0px 20px
```

**Botão Secundário:**
```css
background: #05183A
color: #FFFFFF
border-radius: 0px
padding: 16px 32px
```

**Input Field:**
```css
background: #F2F3F4
border: 2px solid #00BAFF
border-radius: 8px
padding: 14px 16px
box-shadow: rgba(0, 186, 255, 0.25) 0px 0px 15px
```

---


## 📱 RESPONSIVIDADE

### Breakpoints
```css
Mobile: < 768px
Tablet: 768px - 1024px
Desktop: > 1024px
```

### Mobile-First
- Design para mobile primeiro
- Progressive enhancement para desktop
- Touch targets > 44px