# Rick and Morty Filter Uygulaması – Proje Dokümanı

Bu doküman, projeyi nasıl kuracağınızı, çalıştıracağınızı ve yapısını açıklar.

---

## **1. Proje Gereksinimleri**

Bu projeyi çalıştırmak için aşağıdaki araçların sisteminizde kurulu olduğundan emin olun:

### Gereksinimler:

- **Node.js**: 18.x veya üstü
- **NPM**: 8.x veya üstü (Node.js ile birlikte gelir)
- **GIT**: Kaynak kodu klonlamak için

---

## **2. Projeyi Klonlayın**

Kaynak kodu yerel makinenize indirmek için şu komutu kullanın:

```bash
git clone https://github.com/BBestamiS/rick-and-morty-filter.git
```

Proje klasörüne geçin:

```bash
cd rick-and-morty-filter
```

---

## **3. Bağımlılıkları Yükleyin**

Proje için gerekli bağımlılıkları yüklemek için şu komutu çalıştırın:

```bash
npm install
```

---

## **4. Projeyi Çalıştırın**

Uygulamayı geliştirme ortamında çalıştırmak için şu komutu çalıştırın:

```bash
npm run dev
```

Komut çalıştırıldıktan sonra aşağıdaki gibi bir mesaj görmelisiniz:

```
> Ready on http://localhost:3001
```

Tarayıcınızda `http://localhost:3001` adresine giderek uygulamayı çalıştırabilirsiniz.

---

## **5. Proje Yapısı**

Projenin dosya ve klasör yapısı şu şekildedir:

```plaintext
src/
└── app/
    ├── fonts/                # Font dosyaları (isteğe bağlı)
    ├── globals.css           # Global CSS stilleri
    ├── layout.tsx            # Tüm sayfalar için genel düzen
    ├── page.tsx              # Ana sayfa bileşeni
    ├── components/           # Tekrar kullanılan bileşenler
    │   ├── CharacterCard.tsx # Karakter kartı bileşeni
    │   └── FilterBar.tsx     # Filtreleme bileşeni
    └── types/
        └── character.ts      # Tür tanımları
```

### **Önemli Dosyalar**

1. **`app/layout.tsx`:** Genel sayfa düzenini sağlar.
2. **`app/page.tsx`:** Ana sayfa bileşenidir. SSR kullanır.
3. **`app/components/FilterBar.tsx`:** Status ve Gender filtrelerini sağlar.
4. **`app/components/CharacterCard.tsx`:** Karakter kartlarının tasarımını içerir.

---

## **6. Özellikler**

- **Filtreleme:**
  - `Status` (Alive, Dead, Unknown)
  - `Gender` (Male, Female, Genderless, Unknown)
  - Filtreler URL parametreleri ile senkronize çalışır.
- **SSR (Server-Side Rendering):** Sunucu tarafında veriler alınır ve filtreleme yapılır.
- **Responsive Tasarım:** Mobil ve masaüstü cihazlarda uyumludur.
- **Modern Tasarım:** Tailwind CSS ile şık bir arayüz.

---

## **7. Komutlar**

### Geliştirme Ortamı:

```bash
npm run dev
```

### Üretim Ortamı için Build:

```bash
npm run build
```

### Üretim Ortamını Çalıştırma:

```bash
npm start
```

---

## **8. Projenin Kullanımı**

1. `http://localhost:3001` adresine gidin.
2. **Filtreleme İşlemi:**
   - Status ve Gender seçeneklerini kullanarak karakterleri filtreleyin.
3. **URL Tabanlı Filtreleme:**
   - Filtreleme yaptığınızda URL parametreleri otomatik olarak güncellenir.

---
