## [1.3.0] - 2026-05-17

### Added
- Mobile card layout for admin tables — rows render as stacked cards at ≤560px with no horizontal scroll.
- Tab bar, category filter, and Add button stay pinned at top on mobile; only the card list scrolls.
- Icon-only action buttons (pencil / trash / undo) replace text labels across all screen sizes.
- Availability shown as a coloured dot status indicator, visually distinct from category chips.
- Row state colours (yellow = edited, blue = new, red = deleted) visible in mobile card layout.

### Fixed
- App-shell layout on desktop: body locked to `100vh`, table scrolls internally with no page-level scroll or empty space below.
- Save bar no longer hides the last row on desktop or mobile.
- Undo icon replaced with a clean return-arrow shape.
- Category display order hidden on mobile cards.

## [1.2.0] - 2026-05-17

### Added
- Admin panel at `/admin/` with Supabase-backed menu and category management (ported from deccan-cafe).
- Success toast notification after bulk save, with green checkmark.
- Menu data served from Supabase at runtime — no rebuild needed for menu updates.

### Fixed
- Favicon paths in admin layout corrected to match actual filenames.
- `loadCategories` querying correct prefixed table name via `state.tables.categories`.
- Save bar buttons renamed: "Discard" → "Discard changes", "Save Changes" → "Save".

## [1.1.0] - 2026-01-04

### Added
- Redesigned mobile menu: custom dropdown with animated chevron and keyboard accessibility.
- Sticky category control so users can switch categories while scrolling.

### Changed
- Reduced image resolutions to improve bandwidth and loading performance.
- UI and style tweaks for better mobile usability.

### Fixed
- Notion menu data pagination; new Notion items are now fetched during build.
