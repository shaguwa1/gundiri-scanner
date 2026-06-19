# Implementation Plan - Token Safety & Research App (Hausa Language Support)

The goal is to build a web application that helps users research crypto tokens to avoid risks and find high-quality tokens. The primary interface and content will be in Hausa to cater to the user's request.

## Scope Summary
- **Token Search/Analysis UI:** A simple dashboard to input a token address or name and see simulated or real security data.
- **Safety Indicators:** Clear visual cues (Green/Yellow/Red) for token safety based on common risk factors (honeypot, liquidity lock, contract verified).
- **Educational Content:** Information in Hausa about what to look for in a "safe" token.
- **Client-only Data:** No backend/Supabase; will use static mock data or external API calls (if possible without a proxy) to demonstrate functionality.

## Non-Goals
- Real-time blockchain integration requiring a private node or complex wallet connection (keep it lightweight/simulated for now).
- User accounts or portfolio tracking.
- Transaction execution (buying/selling).

## Assumptions & Open Questions
- **Language:** The user requested in Hausa ("Inason wannan app zai yake aikine wajen taima kawa mutane..."). The app should be localized in Hausa.
- **Data Source:** Since no Supabase is available, we will mock common token security scenarios or use a public API if available.

## Affected Areas
- **Frontend:**
  - `src/App.tsx`: Main layout and state management.
  - `src/components/TokenSearch.tsx`: Input field for token analysis.
  - `src/components/SecurityReport.tsx`: Detailed breakdown of token risks.
  - `src/components/EducationalResources.tsx`: Helpful tips in Hausa.
- **Static Assets:** Translation strings for Hausa.

## Ordered Phases

### Phase 1: Foundation & Layout
- Set up the main application shell with a clean, trustworthy theme (Blue/Green).
- Implement a navigation bar and footer.
- Define Hausa translation dictionary for UI elements.
- **Owner:** `frontend_engineer`

### Phase 2: Token Search & Mock Logic
- Create the search component.
- Implement a simulation engine that "analyzes" a token address and returns mock security metrics (Liquidity, Honeypot check, Contract status).
- **Owner:** `frontend_engineer`

### Phase 3: Security Dashboard & Visualization
- Build the report UI using Shadcn components (Cards, Badges, Progress bars).
- Ensure warnings are prominent and clear in Hausa.
- **Owner:** `frontend_engineer`

### Phase 4: Educational Section & Final Polish
- Add a section explaining common crypto scams (Rug pulls, Honeypots) in Hausa.
- Responsive design check for mobile users.
- **Owner:** `frontend_engineer`

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Build the complete UI and logic in Hausa.

**Per-agent instructions:**
### 1. frontend_engineer
- **Phases:** 1, 2, 3, 4
- **Scope:** Create a comprehensive token research tool in Hausa.
- **Files:**
  - `src/App.tsx`: Navigation and main state.
  - `src/components/Header.tsx`: Brand and language header.
  - `src/components/TokenAnalyzer.tsx`: The core logic for token input and results.
  - `src/components/EducationCard.tsx`: Scams explanation component.
- **Depends on:** none
- **Acceptance criteria:**
  - App is fully translated into Hausa (e.g., "Binciken Token", "Hadari", "Inganci").
  - User can enter a "token address" and see a mock security report.
  - Report includes visual indicators (Safe/Warning/Danger).
  - Responsive design works on mobile.
  - No Supabase/Backend references.

**Do not dispatch:**
- supabase_engineer (Out of scope)
- quick_fix_engineer (Frontend engineer will handle all initial build)
