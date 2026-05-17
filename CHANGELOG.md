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
