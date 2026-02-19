

# Fingerprint Authentication App

## Overview
A mobile-first web app that uses your phone's fingerprint scanner (via WebAuthn/Passkeys) to register and log in. No passwords needed — just your fingerprint.

## Backend (Supabase)
- **Authentication** via Supabase Auth
- **Profiles table** to store user info (display name, email, created date)
- **Credentials table** to store WebAuthn credential IDs linked to each user
- **Edge functions** to handle WebAuthn registration and verification server-side

## Pages & Flow

### 1. Landing / Welcome Page
- Clean mobile-first design with app branding
- Two buttons: **Register** and **Login**

### 2. Registration Flow
- User taps "Register" → enters a display name and optional email
- App prompts for fingerprint scan (phone's native biometric prompt appears)
- On success, account is created and fingerprint credential is stored
- User is redirected to their dashboard

### 3. Login Flow
- User taps "Login" → app immediately prompts for fingerprint scan
- If the fingerprint matches a registered credential, user is logged in
- Redirected to dashboard

### 4. Profile Dashboard
- Shows user's display name, email, and registration date
- Option to edit profile info
- **Logout** button

## Design
- Mobile-optimized layout (full-width, touch-friendly buttons)
- Clean, minimal UI with fingerprint icon branding
- Smooth transitions between auth states
- Clear feedback messages (success, error, "place your finger on sensor")

## Key Technical Notes
- Uses the **Web Authentication API (WebAuthn)** which triggers the phone's native fingerprint prompt
- Works on modern mobile browsers (Chrome, Safari) that support biometrics
- Fingerprint data never leaves the device — only a cryptographic key is stored server-side

