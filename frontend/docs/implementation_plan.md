# MMO Resource Seller UI Implementation Plan

Build a comprehensive UI for an MMO resource selling platform using Nuxt 3, Shadcn-Vue, and Tailwind 4. The UI will follow a multi-layout architecture to cater to different user roles (Guest, Buyer, Seller, Admin).

## Proposed Changes

### 1. Layouts
Organize the UI into specialized layouts to handle different routing contexts.

- **Public Layout** (`layouts/default.vue`): Standard header/footer, navigation for products/shops.
- **Auth Layout** (`layouts/guest.vue`): Minimal layout centered for login/register.
- **Member Layout** (`layouts/member.vue`): Shared layout for Buyer and Seller with a sidebar and top bar.
- **Admin Layout** (`layouts/admin.vue`): specialized admin dashboard layout with administrative navigation.

### 2. Components
Create reusable UI components to ensure consistency across the platform.

- **Navigation**: Sidebar components for User, Seller, and Admin.
- **Data Display**: Product cards, Shop profile headers, Transaction tables, Charts for dashboards.
- **Forms**: Auth forms, Product creation forms, Settings forms, Seller request form.

### 3. Pages

#### Public Pages
- `pages/index.vue`: Hero banner, Categories, Featured products, Top sellers.
- `pages/shops/[slug].vue`: Shop-specific layout.
    - **Product Selection**: Products displayed as interactive **Radio Cards**.
    - **Quick View**: A "View" button on each card opens a **Modal/Dialog** with full product details and demo.
    - **Order Flow**: Select a radio card and click "Buy Now" to proceed to checkout.
- `pages/checkout.vue`: Finalizing purchases.

#### Auth Pages
- `pages/login.vue`: Email/Password login.
- `pages/register.vue`: Member registration.
- `pages/forgot-password.vue`: Password recovery request.

#### Buyer (User) Pages
- `pages/user/dashboard.vue`: Quick stats, recent orders.
- `pages/user/orders.vue`: History and item retrieval (keys/files).
- `pages/user/wallet.vue`: Balance and top-up options.
- `pages/user/settings.vue`: Profile and security management.
- `pages/user/become-seller.vue`: Application form for seller status.

#### Seller Pages
- `pages/seller/dashboard.vue`: Revenue metrics and order stats.
- `pages/seller/products/index.vue`: Inventory management.
- `pages/seller/products/create.vue`: Add new resources.
- `pages/seller/shop-settings.vue`: Customize shop branding.
- `pages/seller/orders.vue`: Customer order management and refunds.

#### Admin Pages
- `pages/admin/dashboard.vue`: System-level analytics.
- `pages/admin/requests/sellers.vue`: Moderation of seller applications.
- `pages/admin/shops.vue`: Global shop management.
- `pages/admin/users.vue`: User database.
- `pages/admin/transactions.vue`: System-wide flow of funds.
- `pages/admin/permissions.vue`: Role-based access control.
- `pages/admin/settings.vue`: Global platform configuration.

## Verification Plan

### Automated Tests
- Check route accessibility: Ensure layouts are correctly applied to the corresponding routes.
- Component rendering: Verify critical UI elements (e.g., "Buy Now" button, "Add Product" form) are present.

### Manual Verification
- **Navigation Flow**: Verify the transition from Guest -> Search -> Product -> Login -> Checkout -> User Orders.
- **Responsive Design**: Test layouts on Mobile and Desktop viewports.
- **Theme Support**: Toggle between Dark and Light modes to ensure readability and aesthetic quality.
- **Role Access**: Verify that Seller/Admin menus are only visible when simulated permissions are active.
