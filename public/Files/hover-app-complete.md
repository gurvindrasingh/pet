# Complete Hover-like Application - All Files

## Project Configuration Files

### package.json

```json
{
  "name": "hover-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.15.0",
    "@reduxjs/toolkit": "^1.9.5",
    "react-redux": "^8.1.2",
    "axios": "^1.5.0",
    "react-query": "^3.39.3",
    "clsx": "^2.0.0",
    "class-variance-authority": "^0.7.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@vitejs/plugin-react": "^4.0.3",
    "autoprefixer": "^10.4.14",
    "eslint": "^8.45.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "postcss": "^8.4.27",
    "tailwindcss": "^3.3.3",
    "typescript": "^5.0.2",
    "vite": "^4.4.5",
    "vitest": "^0.34.1",
    "@testing-library/react": "^13.4.0",
    "@testing-library/jest-dom": "^5.17.0",
    "jsdom": "^22.1.0"
  }
}
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/pages/*": ["./src/pages/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/services/*": ["./src/services/*"],
      "@/utils/*": ["./src/utils/*"],
      "@/types/*": ["./src/types/*"],
      "@/store/*": ["./src/store/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### tsconfig.node.json

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

### vite.config.ts

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### tailwind.config.ts

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
```

### postcss.config.js

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### .env.example

```
VITE_API_BASE_URL=http://localhost:3001
VITE_APP_NAME=HoverClone
VITE_STRIPE_PUBLIC_KEY=pk_test_...
```

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/logo.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HoverClone - Domain Registration Platform</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## Source Files

### src/main.tsx

```typescript
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App.tsx";
import { store } from "./store";
import "./styles/globals.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
```

### src/App.tsx

```typescript
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/Home";
import { DomainSearch } from "./pages/Domains";
import { Dashboard } from "./pages/Dashboard";
import { Login, Register } from "./pages/Auth";
import { Pricing } from "./pages/Pricing";
import { Support } from "./pages/Support";
import { About } from "./pages/About";
import { ProtectedRoute } from "./components/auth";
import { ErrorBoundary } from "./components/common";
import { AuthProvider, ThemeProvider, CartProvider } from "./context";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/domains" element={<DomainSearch />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/support" element={<Support />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/dashboard/*"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </Layout>
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
```

## Types

### src/types/common.ts

```typescript
export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  items: T[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export type LoadingState = "idle" | "loading" | "succeeded" | "failed";
```

### src/types/domain.ts

```typescript
import { BaseEntity } from "./common";

export enum DomainStatus {
  AVAILABLE = "available",
  TAKEN = "taken",
  PREMIUM = "premium",
  RESERVED = "reserved",
}

export interface Domain extends BaseEntity {
  name: string;
  extension: string;
  status: DomainStatus;
  price: number;
  premiumPrice?: number;
  registrar?: string;
  expirationDate?: string;
  autoRenew?: boolean;
  locked?: boolean;
  privacy?: boolean;
}

export interface DomainSearchResult {
  domain: string;
  available: boolean;
  status: DomainStatus;
  price: number;
  suggestions?: string[];
}

export interface DomainTransferRequest {
  domainName: string;
  authCode: string;
  nameservers?: string[];
}
```

### src/types/user.ts

```typescript
import { BaseEntity } from "./common";

export interface User extends BaseEntity {
  email: string;
  name: string;
  avatar?: string;
  verified: boolean;
  role: "user" | "admin";
}

export interface UserProfile extends User {
  phone?: string;
  address?: Address;
  preferences?: UserPreferences;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

export interface UserPreferences {
  notifications: {
    email: boolean;
    sms: boolean;
    marketing: boolean;
  };
  theme: "light" | "dark" | "system";
}
```

### src/types/auth.ts

```typescript
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  name: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}
```

### src/types/cart.ts

```typescript
import { Domain } from "./domain";

export interface CartItem {
  id: string;
  domain: Domain;
  years: number;
  addons: CartAddon[];
}

export interface CartAddon {
  type: "privacy" | "ssl" | "email";
  name: string;
  price: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
  isOpen: boolean;
}
```

### src/types/index.ts

```typescript
export * from "./common";
export * from "./domain";
export * from "./user";
export * from "./auth";
export * from "./cart";
```

## Utilities

### src/utils/classNames.ts

```typescript
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
```

### src/utils/formatters.ts

```typescript
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const formatDate = (date: string | Date): string => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
};

export const formatDomain = (domain: string): string => {
  return domain.toLowerCase().trim();
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};
```

### src/utils/validators.ts

```typescript
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateDomain = (domain: string): boolean => {
  const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?$/;
  return domainRegex.test(domain);
};

export const validatePassword = (
  password: string
): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push("Password must be at least 8 characters long");
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter");
  }

  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter");
  }

  if (!/\d/.test(password)) {
    errors.push("Password must contain at least one number");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
```

### src/utils/constants.ts

```typescript
export const APP_CONFIG = {
  name: "HoverClone",
  version: "1.0.0",
  apiUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:3001",
};

export const DOMAIN_EXTENSIONS = [
  { extension: ".com", price: 12.99, popular: true },
  { extension: ".net", price: 14.99, popular: false },
  { extension: ".org", price: 13.99, popular: false },
  { extension: ".io", price: 59.99, popular: false },
  { extension: ".co", price: 24.99, popular: false },
  { extension: ".app", price: 19.99, popular: false },
];

export const ROUTES = {
  HOME: "/",
  DOMAINS: "/domains",
  DASHBOARD: "/dashboard",
  LOGIN: "/login",
  REGISTER: "/register",
  PRICING: "/pricing",
  SUPPORT: "/support",
  ABOUT: "/about",
} as const;
```

### src/utils/config.ts

```typescript
export const config = {
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:3001",
    timeout: 10000,
  },
  app: {
    name: import.meta.env.VITE_APP_NAME || "HoverClone",
    version: "1.0.0",
  },
  stripe: {
    publicKey: import.meta.env.VITE_STRIPE_PUBLIC_KEY || "",
  },
};
```

### src/utils/helpers.ts

```typescript
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
```

### src/utils/index.ts

```typescript
export * from "./classNames";
export * from "./formatters";
export * from "./validators";
export * from "./constants";
export * from "./config";
export * from "./helpers";
```

## Hooks

### src/hooks/useAuth.ts

```typescript
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { login, logout, register } from "@/store/slices/authSlice";
import { LoginCredentials, RegisterCredentials } from "@/types";

export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const handleLogin = async (credentials: LoginCredentials) => {
    return dispatch(login(credentials));
  };

  const handleRegister = async (credentials: RegisterCredentials) => {
    return dispatch(register(credentials));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    ...auth,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
  };
};
```

### src/hooks/useDomainSearch.ts

```typescript
import { useState, useCallback } from "react";
import { useQuery } from "react-query";
import { domainService } from "@/services";
import { DomainSearchResult } from "@/types";

export const useDomainSearch = () => {
  const [query, setQuery] = useState("");

  const {
    data: results,
    isLoading,
    error,
  } = useQuery(
    ["domainSearch", query],
    () => domainService.searchDomains(query),
    {
      enabled: !!query && query.length > 2,
      staleTime: 30000, // 30 seconds
    }
  );

  const searchDomains = useCallback((searchQuery: string) => {
    setQuery(searchQuery);
  }, []);

  return {
    query,
    results: results?.data || [],
    isLoading,
    error,
    searchDomains,
  };
};
```

### src/hooks/useCart.ts

```typescript
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import {
  addItem,
  removeItem,
  clearCart,
  toggleCart,
} from "@/store/slices/cartSlice";
import { Domain } from "@/types";

export const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const addToCart = (domain: Domain, years: number = 1) => {
    dispatch(addItem({ domain, years }));
  };

  const removeFromCart = (itemId: string) => {
    dispatch(removeItem(itemId));
  };

  const clearAllItems = () => {
    dispatch(clearCart());
  };

  const toggleCartDrawer = () => {
    dispatch(toggleCart());
  };

  return {
    ...cart,
    addItem: addToCart,
    removeItem: removeFromCart,
    clearCart: clearAllItems,
    toggleCart: toggleCartDrawer,
  };
};
```

### src/hooks/useDebounce.ts

```typescript
import { useState, useEffect } from "react";

export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
```

### src/hooks/useLocalStorage.ts

```typescript
import { useState, useEffect } from "react";

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};
```

### src/hooks/useApi.ts

```typescript
import { useState, useEffect } from "react";
import { ApiResponse } from "@/types";

interface UseApiOptions {
  immediate?: boolean;
}

export const useApi = <T>(
  apiFunction: () => Promise<ApiResponse<T>>,
  options: UseApiOptions = {}
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiFunction();
      setData(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (options.immediate) {
      execute();
    }
  }, [options.immediate]);

  return { data, loading, error, execute };
};
```

### src/hooks/index.ts

```typescript
export { useAuth } from "./useAuth";
export { useDomainSearch } from "./useDomainSearch";
export { useCart } from "./useCart";
export { useDebounce } from "./useDebounce";
export { useLocalStorage } from "./useLocalStorage";
export { useApi } from "./useApi";
```

## Context

### src/context/AuthContext.tsx

```typescript
import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { User } from "@/types";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthAction =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS"; payload: User }
  | { type: "LOGIN_FAILURE" }
  | { type: "LOGOUT" };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, isLoading: true };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case "LOGOUT":
      return {
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
    isLoading: false,
  });

  const login = async (email: string, password: string) => {
    dispatch({ type: "LOGIN_START" });
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const user: User = {
        id: "1",
        email,
        name: "John Doe",
        verified: true,
        role: "user",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      dispatch({ type: "LOGIN_SUCCESS", payload: user });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      throw error;
    }
  };

  const register = async (email: string, password: string, name: string) => {
    dispatch({ type: "LOGIN_START" });
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const user: User = {
        id: "1",
        email,
        name,
        verified: false,
        role: "user",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      dispatch({ type: "LOGIN_SUCCESS", payload: user });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      throw error;
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
```

### src/context/ThemeContext.tsx

```typescript
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme");
    return (saved as Theme) || "system";
  });

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      setIsDark(systemTheme === "dark");
    } else {
      root.classList.add(theme);
      setIsDark(theme === "dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
```

### src/context/CartContext.tsx

```typescript
import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import { CartItem, Domain } from '@/types'

interface CartState {
  items: CartItem[]
  total: number
  isOpen: boolean
}

interface CartContextType extends CartState {
  addItem: (domain: Domain, years?: number) => void
  removeItem: (itemId: string) => void
  clearCart: () => void
  toggleCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

type CartAction =
  | { type: 'ADD_ITEM'; payload: { domain: Domain; years: number } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newItem: CartItem = {
        id: Date.now().toString(),
        domain: action.payload.domain,
        years: action.payload.years,
        addons: [],
      }
      const newItems = [...state.items, newItem]
      return {
        ...state,
        items: newItems,
        total: newItems.reduce((sum, item) => sum + item.domain.price * item.years, 0),
      }
    }
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload)
      return {
        ...state,
        items: newItems,
        total: newItems.reduce((sum, item) => sum + item.domain.price * item.years, 0),
      }
    }
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        total: 0,
      }
    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen,
      }
    default:
      return state
  }
}

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    isOpen: false,
  })

  const addItem = (domain: Domain, years: number = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { domain, years } })
  }

  const removeItem = (itemId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId })
  }


```
