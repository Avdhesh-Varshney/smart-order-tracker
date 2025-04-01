# 🚀 Smart Order Tracker 

Smart Order Tracker is a web-based order management system that allows customers to raise new orders and track their status in real time. 
Managers have the ability to update the order status, ensuring seamless coordination. 
Both customers and managers have the option to cancel orders when needed. 
The platform provides a structured and efficient order management workflow with authentication and role-based access control.

### 🎯 Features
- **Home Page:** User-friendly landing page for seamless navigation.
- **Order Status Page:** Real-time tracking of order progress.
- **New Order Drafting:** Customers can create and manage new orders effortlessly.
- **Role-Based Access:** Customers can create and cancel orders, while managers can update and manage order statuses.
- **Order Cancellation:** Both customers and managers have the option to cancel an order.
- **Authentication System:** Secure login and authentication with JWT.
- **Dashboard for Managers:** A dedicated dashboard for managers to handle and track orders efficiently.
- **404 Error Page:** Custom-designed error page for improved user experience.

### 🛠️ Tech Stack
- **Frontend:** React.js, Vite, Tailwind CSS, Axios, React Router DOM, Framer Motion, React Hot Toast, React Icons & Flat Icons 
- **Backend:** Node.js, Express.js, MongoDB, Nanoid, Bcrypt 
- **State Management:** Redux Toolkit
- **Authentication:** JWT-based authentication system

### 📸 Screenshots

| LOGIN |
|:-------:|
| ![login](https://github.com/user-attachments/assets/b39bc7b3-ef66-40ba-a11a-73b26dc8f24f) |

| USER SIGNUP | ADMIN SIGNUP |
|:-----------:|:------------:|
| ![signup-user](https://github.com/user-attachments/assets/e10d50cb-37d1-444d-befc-d23d45e94efa) | ![signup-admin](https://github.com/user-attachments/assets/40770d28-4902-4d34-b331-791644749c93) |

| CUSTOMER DASHBOARD | MANAGER DASHBOARD |
|:----------------------------:|:---------------------------:|
| ![customer-dashboard](https://github.com/user-attachments/assets/fcc95eab-2e43-4e54-9b14-6ed766c3b437) | ![manager-dashboard](https://github.com/user-attachments/assets/b364fc0c-1b76-4276-a01f-c914ad776e3b) |

| CREATE NEW ORDER |
|:-----------------------:|
| ![create-new-order](https://github.com/user-attachments/assets/2f3fc584-09e3-4f4d-a14f-a7ff3fb137fa) |

| CUSTOMER STATUS UPDATE PANEL | MANAGER STATUS UPDATE PANEL |
|:---------------------------------------:|:--------------------------------------:|
| ![customer-status-update-panel](https://github.com/user-attachments/assets/279d9f0d-4a7c-4c91-8716-7dcf14d479fe) | ![manager-status-update-panel](https://github.com/user-attachments/assets/452b40a2-4c11-4760-8ad4-e061b5152189) |


### 🏗️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Avdhesh-Varshney/smart-order-tracker.git
   cd smart-order-tracker
   ```

2. **Install dependencies for both frontend and backend:**
   ```bash
   cd frontend && npm install
   cd backend && npm install
   ```

3. **Start the development servers:**
   ```bash
   cd frontend && npm run dev
   cd backend && npm run dev
   ```

### 🔗 API Endpoints

| Method   | Endpoint          | Description                         |
|----------|:-----------------:|-------------------------------------|
| `GET`    | `/order/all`      | Fetch all orders                    |
| `GET`    | `/order/get`      | Fetch orders of respective customer |
| `POST`   | `/order/create`   | Create a new order                  |
| `GET`    | `/order/:orderId` | Fetch order details                 |
| `PUT`    | `/order/:orderId` | Update order status                 |
| `DELETE` | `/order/:orderId` | Delete an order                     |
