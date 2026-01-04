# 🛍️ ShoppyGlobe – E-commerce Application

ShoppyGlobe is a modern, responsive e-commerce web application built using **React (Vite)**.  
The application demonstrates core frontend concepts such as component-based architecture, state management using Redux, dynamic routing, data fetching, and performance optimization.

---

## 🚀 Live Features

- Product listing fetched from external API
- Product detail page with similar product suggestions
- Add to Cart & Direct Buy functionality
- Cart management with quantity control
- Modern checkout page with validation
- Customer login (UI-based / dummy)
- Redux-based global state management
- Search functionality using Redux
- Lazy loading and code splitting
- Fully responsive modern UI
- Custom 404 page for invalid routes

---

## 🛠️ Tech Stack

- **React** (with Vite)
- **Redux Toolkit**
- **React Router DOM (createBrowserRouter)**
- **JavaScript (ES6+)**
- **CSS (Modern UI with CSS Variables)**

---


## 🔄 Routing

Routing is implemented using **createBrowserRouter** with dynamic routes:

- `/` → Home (Product List)
- `/product/:id` → Product Detail (Dynamic)
- `/cart` → Cart Page
- `/checkout` → Checkout Page
- `*` → 404 Not Found

---

## 📦 State Management (Redux)

Redux Toolkit is used to manage global state:

### Cart State
- Add product to cart
- Remove product from cart
- Update product quantity (minimum 1)
- Clear cart after order placement

### Product State
- Search filter using Redux state

Selectors are used to compute:
- Total cart quantity
- Total cart price

---

## 🌐 Data Fetching

- Products are fetched from:
https://dummyjson.com/products
- Product details are fetched dynamically using route parameters.
- Custom hook `useFetchProducts` is used for fetching product lists.
- Proper error handling is implemented for API failures.

---

## ⚡ Performance Optimization

- **Lazy loading** implemented using `React.lazy` and `Suspense`
- **Code splitting** for all major components
- **Image lazy loading** using `loading="lazy"`

---

## 🎨 UI & Styling

- Modern, responsive UI
- Custom color palette using CSS variables
- Mobile-first responsive design
- Order-summary styled cart & checkout pages
- Product detail page with similar products section

---

## ✅ Checkout Validation

- User must fill:
- Full Name
- Email Address
- Mobile Number
- Delivery Address
- Empty field validation before placing order
- On successful order:
- Cart is cleared
- User is redirected to Home page
- Confirmation message displayed

---

## 🧪 How to Run the Project

```bash
npm install
npm run dev

📌 GitHub Repository

🔗 Repository Link:
👉 
## 📌 GitHub Repository
🔗 [ShoppyGlobe – E-commerce Application](https://github.com/jp702020/E-commerce-Application)


👨‍💻 Author

Junaid Patel
Frontend Developer | React | Redux | JavaScript