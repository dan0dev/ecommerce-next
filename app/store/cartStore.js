import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      count: 0,

      // Add item with optional size, color and quantity
      addToCart: (product, options = {}) => {
        const { size, color, quantity = 1 } = options;

        // Check if item already exists with same product ID, size, and color
        const existingItem = get().items.find(
          (item) =>
            item.productId === product.id &&
            item.size === size &&
            item.color === color
        );

        if (existingItem) {
          // Return false to indicate that the item is already in the cart
          return false;
        }

        // Create new cart item
        const newItem = {
          id: `${product.id}-${Date.now()}`,
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size,
          color,
          quantity,
        };

        set((state) => ({
          items: [...state.items, newItem],
          count: state.count + quantity,
        }));

        return true;
      },

      // Remove item from cart
      removeFromCart: (cartItemId) =>
        set((state) => {
          const item = state.items.find((i) => i.id === cartItemId);
          return {
            items: state.items.filter((i) => i.id !== cartItemId),
            count: state.count - (item?.quantity || 1),
          };
        }),

      // Clear all cart items
      clearCart: () => set({ items: [], count: 0 }),

      // Update item quantity
      updateQuantity: (cartItemId, quantity) =>
        set((state) => {
          const items = state.items.map((item) => {
            if (item.id === cartItemId) {
              return { ...item, quantity };
            }
            return item;
          });

          const newCount = items.reduce((sum, item) => sum + item.quantity, 0);
          return { items, count: newCount };
        }),

      // Update item size
      updateSize: (cartItemId, size) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === cartItemId ? { ...item, size } : item
          ),
        })),

      // Update item color
      updateColor: (cartItemId, color) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === cartItemId ? { ...item, color } : item
          ),
        })),

      // Clear cart
      clearCart: () => set({ items: [], count: 0 }),
    }),
    {
      name: "cart-storage",
    }
  )
);
