
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';


export const signInAsync = createAsyncThunk(
  'auth/signInAsync',
  async ({ email, password }) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user;
  }
);

export const registerAsync = createAsyncThunk(  // here registerAsync is user define
  'auth/registerAsync',                         // here auth and registerAsync is user define
  async ({ email, password }) => {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    return response.user;
  }
);

export const logoutAsync = createAsyncThunk(
  'auth/logoutAsync',
  async () => {
    await signOut(auth);
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signInAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(registerAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(logoutAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const initializeAuth = () => (dispatch) => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch(authSlice.actions.setUser(user));
    } else {
      dispatch(authSlice.actions.clearUser());
    }
  });

  return unsubscribe;
};

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
