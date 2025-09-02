# 天氣小幫手 ☁️

![license](https://img.shields.io/badge/license-MIT-green)
![vue](https://img.shields.io/badge/vue-3.0-brightgreen)
![ts](https://img.shields.io/badge/typescript-5.8-blue)

---

## Demo網站
👉 https://891128peter.github.io/Vue-WeatherCast/

---

## 專案介紹
**天氣小幫手** 是一個使用 **Vue 3** 與 **TypeScript** 搭建的天氣查詢網站。  
透過 **Nuxt 3** 建立 API Proxy 來隱藏氣象局 API 金鑰，並部署於 **Vercel**。  

網站採用 **Vue Router** 管理路由，實現頁面切換，並利用 **axios** 串接氣象局 API，提供使用者即時的最新氣象資訊。

---

## 功能特色
- 🔎 查詢 **台灣各縣市** 的天氣資訊  
- 🌡️ 顯示 **氣溫**  
- 🌧️ 顯示 **降雨機率**  
- 🙂 顯示 **舒適度指數**  
- 📱 簡潔清晰的資訊介面，方便使用者快速掌握天氣狀況  

---

## 🚀 安裝與使用
```bash
# 複製專案
git clone https://github.com/891128peter/Vue-WeatherCast.git
cd Vue-WeatherCast

# 安裝套件
npm install

# 啟動開發伺服器
npm run dev

# 打包專案（建置生產環境）
npm run build

# 預覽建置結果
npm run preview
