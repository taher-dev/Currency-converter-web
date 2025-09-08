# Currency Converter 💰

🔗 **[currency-converter-web.pages.dev](https://currency-converter-web.pages.dev/)**

A sleek, modern, and mobile-first currency converter application built with Vanilla JavaScript. This web app fetches real-time exchange rates and provides a clean, user-friendly interface with both light and dark modes.

This project was built as a hands-on exercise to practice modern JavaScript (ES Modules), API integration, and dynamic DOM manipulation.

---

## 📸 Preview

<p align="center">
  <img src="images/mobile-preview.png" alt="Mobile Preview" width="300"/>
</p>

---

## ✨ Features

- 📈 **Real-time Rates**: Fetches up-to-date exchange rates from the ExchangeRate-API.
- 🎨 **Light & Dark Mode**: A theme toggle for user preference, with the choice saved locally.
- 💾 **Persistent Selections**: Remembers the user's last selected currencies upon reload.
- 🇮🇳 **Dynamic Flags**: Displays the correct country flag for each selected currency.
- ↔️ **Swap Functionality**: Instantly swap the "from" and "to" currencies with a single click.
- 📱 **Mobile-First Design**: The layout is fully responsive and optimized for all screen sizes.

---

## 🛠️ Tech Stack

- **Frontend**: 💻 HTML5, 🎨 CSS3 (Flexbox, CSS Variables), 🍦 Vanilla JavaScript (ES Modules)
- **APIs**:
  - 🌐 [ExchangeRate-API](https://www.exchangerate-api.com/) for currency exchange data.
  - 🏳️ [FlagCDN](https://flagcdn.com/) for country flag images.
- **Deployment**: 🚀 [Vercel](https://vercel.com/) (or any static site host)

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You will need a free API key from [ExchangeRate-API](https://www.exchangerate-api.com/).

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd <repository-name>
    ```

3.  **Add your API Key:**
    Open the `app.js` file in your code editor. Find the `apiKey` constant and replace the placeholder string with your actual API key.

    ```javascript
    // In app.js
    const apiKey = "your_actual_api_key_here";
    ```

4.  **Run the application:**
    Simply open the `index.html` file in your favorite web browser\!

---

## 🔑 API Key Configuration

This project requires an API key to fetch exchange rates.

### ⚠️ Security Notice

For simplicity in this educational project, the API key is stored directly in the client-side `app.js` file. Please be aware that this is **not a secure practice for production applications**.

- **Risk**: Exposing an API key in the client-side code makes it possible for others to find and misuse it, potentially exhausting your free quota.
- **Standard Solution**: In a real-world application, the key should be kept on a secure server, and the client should make requests to that server instead of directly to the external API (a "server-side proxy").

This method is suitable for personal projects and learning, but it's important to know the secure alternative for professional work.

---

## 🙏 Acknowledgments

- Currency data provided by [ExchangeRate-API](https://www.exchangerate-api.com/).
- Flag images provided by [FlagCDN](https://flagcdn.com/).

---

## 📄 License

This project is licensed under the MIT License.
