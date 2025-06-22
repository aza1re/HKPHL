# HKPHL App - Scaffold

A React Native app built with Expo Router for the Hong Kong Professional Hockey League.

## Project Structure

```
app/
├── index.tsx                    # Onboarding screen
├── (tabs)/                      # Main tab navigation
│   ├── _layout.tsx             # Tab layout configuration
│   ├── tournaments/            # Tournaments section
│   │   ├── _layout.tsx         # Stack navigation for tournaments
│   │   ├── index.tsx           # Tournament list
│   │   └── [id].tsx            # Tournament details with tabs
│   ├── education/              # Education section
│   │   ├── _layout.tsx         # Stack navigation for education
│   │   ├── index.tsx           # Education main screen
│   │   ├── camps.tsx           # Hockey camps
│   │   └── showcases.tsx       # Showcases
│   ├── leagues.tsx             # HKPHL with tabs
│   ├── favourites.tsx          # Favourite teams
│   └── more/                   # More section
│       ├── _layout.tsx         # Stack navigation for more
│       ├── index.tsx           # More main screen
│       ├── registration/       # Registration forms
│       │   ├── _layout.tsx
│       │   ├── hkphl.tsx
│       │   └── tournament.tsx
│       ├── settings/           # Settings screens
│       │   ├── _layout.tsx
│       │   ├── notifications.tsx
│       │   ├── personal-data.tsx
│       │   └── preferences.tsx
│       ├── ai-chatbot.tsx
│       ├── about-us.tsx
│       └── annual-report.tsx
├── teams/                      # Team details
│   ├── _layout.tsx
│   └── [id].tsx
context/
├── AdminContext.tsx            # Admin state management
firebase/
├── firebase.ts                 # Firebase configuration
types/
├── index.ts                    # TypeScript type definitions
```

## Features Implemented

### 1. Onboarding

- Welcome screen with navigation to main app

### 2. Tournaments

- Tournament list with sample data
- Tournament details with tabs:
  - Standings
  - Schedule
  - Teams
  - Players

### 3. Education

- Main education screen
- Hockey camps section
- Showcases section

### 4. Leagues

- HKPHL main screen with tabs:
  - Standings
  - Schedule
  - Teams
  - News

### 5. Favourites

- Favourite teams list
- Team details screen

### 6. More Section

- **Team Registration**
  - HKPHL Registration
  - Tournament Registration
- **Settings**
  - Notifications
  - Personal Data
  - Preferences
- **Support**
  - AI Chatbot
  - About Us
  - Request Full Annual Report

## Technical Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router (file-based routing)
- **UI**: React Native with Material Top Tabs for sub-navigation
- **State Management**: React Context (AdminContext)
- **Backend**: Firebase (Firestore + Auth)
- **Styling**: StyleSheet with consistent design system
- **TypeScript**: Full type safety with custom type definitions

## Design System

- **Primary Color**: #007AFF (iOS Blue)
- **Secondary Colors**: #8E8E93 (Gray), #f8f9fa (Light Gray)
- **Typography**: System fonts with consistent sizing
- **Layout**: Consistent padding (16-24px), border radius (12px)
- **Icons**: Ionicons from @expo/vector-icons

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Run on specific platform:
   ```bash
   npm run ios     # iOS simulator
   npm run android # Android emulator
   npm run web     # Web browser
   ```

## Next Steps

Each screen currently shows placeholder content. Implementation can proceed by:

1. Adding real data models and API integration
2. Implementing forms for registration screens
3. Adding authentication flow
4. Building out tournament/league functionality
5. Implementing search and filtering
6. Adding push notifications
7. Integrating AI chatbot functionality

## Notes

- All screens are scaffolded with proper navigation structure
- TypeScript types are defined for future data models
- Firebase is configured but not yet fully integrated
- Admin context is available for role-based features
- Navigation follows Expo Router best practices
