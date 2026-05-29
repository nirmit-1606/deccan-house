## [1.4.0] - 2026-05-29

### Added
- Menu page redesign: section-scroll layout, sticky tab strip synced to header height via `ResizeObserver`, full-bleed category dividers, saffron-orange prices and warm gold section titles.
- Homepage animations: hero stagger fade-up on load, scroll-reveal (left/right/up) on about, chef's special and food sections, food image hover zoom.
- About page redesign: hero banner with eyebrow label, centred story section with decorative coriander/chilli PNGs (responsive opacity), three-pillar values strip.
- Responsive type scale: explicit `rem` font sizes replacing CSS keyword values, explicit `col-content h2` sizing across all breakpoints, hero h2 accent colour.
- `prefers-reduced-motion` support: all animations and transitions disabled for users who opt out.

### Changed
- Nav link colours swapped: inactive links use light text, active page link uses accent peach.
- Hamburger and close button colours updated to match active nav colour.
- Footer modernised with mobile-first layout; max-width aligned to `1400px` to match all other content containers.
- About subheading introduced for second heading line — smaller weight and olive colour to reduce visual weight.
- Price colour changed from primary green to saffron-orange to distinguish from category identity.
- Category title colour lightened to warm gold, clearly distinct from price colour.

### Fixed
- Mobile header height locked at minimum — no shrink animation on scroll, preventing gap between header and sticky tab strip on page refresh.
- 1px gap between header and tab strip on deccan-house resolved by subtracting 1px in `updateTabsTop`.
- Tab active state no longer hijacked by intermediate sections during smooth scroll — `suppressObserver` guard added.
- Hover opacity no longer sticks on mobile after tap — hover effect restricted to `@media (hover: hover)`.
- Carousel `</div>` closing tag was missing, causing JS duplication to silently fail.
- Inline styles replaced with CSS classes throughout homepage template.

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
