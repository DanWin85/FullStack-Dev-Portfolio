// src/store/slices/uiSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ContactFormData } from '../../types';

interface UIState {
  mobileMenuOpen: boolean;
  loading: boolean;
  activeSection: string;
  contactFormData: ContactFormData;
  notifications: Array<{
    id: string;
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    timestamp: number;
  }>;
}

const initialState: UIState = {
  mobileMenuOpen: false,
  loading: false,
  activeSection: 'hero',
  contactFormData: {
    name: '',
    email: '',
    subject: '',
    message: '',
  },
  notifications: [],
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileMenuOpen = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
    updateContactForm: (state, action: PayloadAction<Partial<ContactFormData>>) => {
      state.contactFormData = { ...state.contactFormData, ...action.payload };
    },
    resetContactForm: (state) => {
      state.contactFormData = {
        name: '',
        email: '',
        subject: '',
        message: '',
      };
    },
    addNotification: (state, action: PayloadAction<Omit<UIState['notifications'][0], 'id' | 'timestamp'>>) => {
      const notification = {
        ...action.payload,
        id: Date.now().toString(),
        timestamp: Date.now(),
      };
      state.notifications.push(notification);
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(n => n.id !== action.payload);
    },
  },
});

export const {
  toggleMobileMenu,
  setMobileMenuOpen,
  setLoading,
  setActiveSection,
  updateContactForm,
  resetContactForm,
  addNotification,
  removeNotification,
} = uiSlice.actions;

export default uiSlice.reducer;