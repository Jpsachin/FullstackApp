# Project Architecture & Rules

## Folder Structure

- Each module is in `src/modules/<moduleName>/`.
- If a module has multiple files of the same type (e.g., components, hooks, store), use a folder (e.g., `components/`, `hooks/`).
- If only one file of a type exists, keep it flat in the module folder.
- Shared/common resources are in `src/common/`.

## Example: Flat vs. Nested

### Flat (single file per type)

```
src/modules/landing/
  LandingPage.tsx
  landingPageStyles.ts
  landingStore.ts
  landingConstants.ts
  landingTypes.ts
  landingUtils.ts
  useLanding.ts
```

### Nested (multiple files per type)

```
src/modules/landing/
  components/
    LandingPage.tsx
    HeroSection.tsx
    ...
  store/
    landingStore.ts
    anotherStore.ts
  hooks/
    useLanding.ts
    useHero.ts
  ...
```

## Naming Conventions

- Component files: PascalCase (e.g., `LandingPage.tsx`)
- Other files: camelCase (e.g., `landingStore.ts`)
- Types/interfaces: PascalCase (e.g., `LandingPageProps`), files camelCase (e.g., `landingTypes.ts`)
- Variables/functions/hooks: camelCase

## Architectural Rules

1. **Common Layout**: Header and Footer in `common/`, used in `App.tsx` for all pages.
2. **Routing & Auth**: All routes except `/login` are private. Unauthenticated users are redirected to `/login`. Auth state managed in `authStore.ts` and `useAuth.ts`.
3. **State Management**: App-level state in `common/appStore.ts`, `userStore.ts`, `toastStore.ts`. Module-level state in each module’s store file. Local state/context for isolated logic.
4. **Tailwind Styling**: All styles via Tailwind classes, localized in `*Styles.ts` files per component.
5. **API Handling**: Centralized Axios instance in `common/useAxios.ts`. Interceptors and common request/response logic in `apiHandler.ts`. Error handling in `errorHandler.ts`.
6. **Toast Notifications**: `Toast.tsx` and `toastStore.ts` for global error/info messages.
7. **Network Error Modal**: `NetworkErrorModal.tsx` for network failures, with refresh/retry logic.
8. **Error Boundaries**: `ErrorBoundary.tsx` for graceful error handling.
9. **Folder Rules**: Only create a folder if there are multiple files of the same type in a module; otherwise, use a flat structure.

## Example: Common Components

```
src/common/
  Header.tsx
  headerStyles.ts
  ...
```

## Example: Landing Module (Flat, Localized)

```
src/modules/landing/
  LandingPage.tsx
  landingPageStyles.ts
  landingStore.ts
  landingConstants.ts
  landingTypes.ts
  landingUtils.ts
  useLanding.ts
```

## Example: Landing Module (Nested, Multiple Components)

```
src/modules/landing/
  components/
    LandingPage.tsx
    HeroSection.tsx
  landingPageStyles.ts
  landingStore.ts
  ...
```

---

This architecture is modular, scalable, and maintainable. Follow these rules for all new modules and features.
