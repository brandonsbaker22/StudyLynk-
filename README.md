# StudyLynk — Project README

## About This Project

StudyLynk is a tutoring service website built as a Signature Assignment for ITC 2400 Web Design. The site is designed to connect students in the Bentonville, AR area with tutors who offer personalized one-on-one and group study sessions, as well as field trips and hands-on learning experiences.

---

## Site Structure

```
StudyLynk/
├── index.html          — Homepage
├── services.html       — Services & Pricing
├── tutors.html         — Meet the Tutors
├── impact.html         — Our Impact
├── schedule.html       — Schedule & Availability (Support Services)
├── contact.html        — Contact Us
├── faq.html            — Frequently Asked Questions
├── privacy.html        — Privacy Policy
├── terms.html          — Terms of Service
├── images/             — All site images
├── js/                 — External JavaScript files
│   ├── nav.js          — Hamburger menu and dropdown navigation
│   ├── booking.js      — Consultation modal logic
│   └── validation.js   — Contact form JavaScript validation
└── stylesheet/
    └── styles.css      — Main external stylesheet
```

---

## Page Overviews

**Home (`index.html`)**
The front door to the site. Introduces the StudyLynk mission, highlights the three main offerings (1-on-1 tutoring, group sessions, beyond the classroom), and links to the tutors page. Designed to be simple and welcoming.

**Services & Pricing (`services.html`)**
Details the tutoring formats, subjects covered, pricing by grade level in a responsive table, and what is included with every session. No workshops or courses — tutoring only.

**Meet the Tutors (`tutors.html`)**
Introduces the founder Brandon Scott and each tutor with a short story and their subject focus. Ends with the "Meet the Bosses" section featuring the team's dogs.

**Our Impact (`impact.html`)**
Showcases student outcomes through stats, three testimonials, and the community outreach programs including field trips and hands-on learning.

**Schedule & Availability (`schedule.html`)**
Lists all support services in an ordered list format with hours and details in unordered lists inside each category. Uses image-styled checkmark bullets. This is one of the two pages required for Deliverables 3 and 4.

**Contact (`contact.html`)**
A detailed contact form with JavaScript validation including auto-capitalization of first name, last name, and city, plus zip code and email format validation. Also includes contact information and a multi-step consultation request modal. This is one of the two pages required for Deliverables 3 and 4.

**FAQ (`faq.html`)**
Accordion-style FAQ organized into four categories: Getting Started, Sessions & Scheduling, Pricing & Payment, and Policies.

---

## April 2026 Policy & Pricing Updates

- **Pricing tables** on the Services page now show only straightforward hourly rates for each grade group (no bundles or savings columns).
- **Terms of Service** link and policy statement are now displayed directly below the pricing tables for visibility.
- **Field trips and special meetings:**
  - For K–12 students, all off-site activities are coordinated with parents/guardians in advance. Most trips are scheduled for weekends or after school, with times arranged to fit parents’ schedules. Permission slips are required for students under 18.
  - For college students, trips and special meeting dates are discussed and scheduled directly with the student at the time of session.
- All banners and hero sections are now visually and structurally consistent across pages.
- Font sizes and spacing have been standardized for improved readability and consistency.

---

## Deliverable Progress

| Deliverable | Pages | Status |
|-------------|-------|--------|
| First | Site map and wireframes | Submitted |
| Second | `index.html` + `services.html` + `styles.css` | Submitted |
| Third | `contact.html` (HTML5 validation) + `schedule.html` (ordered/unordered lists) | Submitted |
| **Final** | `contact.html` (JavaScript validation) + `schedule.html` (completed site) | **Due Apr 25** |

---

## Key Features

- Fully responsive layout with CSS media queries for all screen sizes
- Mobile hamburger navigation menu (external `js/nav.js`)
- JavaScript form validation with uppercase conversion, zip validation, and email validation (`js/validation.js`)
- Multi-step consultation request modal (`js/booking.js`)
- Support services page with ordered list categories and image-styled unordered list bullets
- Consistent nav and footer across all 9 pages
- External stylesheet linked on every page
- At least 5 HTML5 semantic elements on every page
- Meta descriptions on all pages for SEO
- Favicon branding across all pages
- Accessible form validation with ARIA attributes
- Responsive navbar fixed to top with proper content spacing

---

## Recent Improvements (April 2026)

The following enhancements were made to improve UX, SEO, accessibility, and design:

**Design & UX**
- Reduced navbar height from 90px to 70px for a more compact header
- Reduced logo size from 130px to 85px to match the smaller navbar
- Added proper top padding to main content areas to prevent overlap with the fixed navbar
- Updated navbar positioning on mobile to align with new height

**SEO & Branding**
- Added unique meta descriptions to all 9 pages (improves search engine visibility and social media previews)
- Added favicon link on all pages (improves branding consistency)

**Accessibility**
- Enhanced form validation with ARIA attributes (`aria-invalid`, `aria-describedby`) for screen reader support

**Content Updates**
- Updated contact email across all pages to `studylynktutors@gmail.com`
- Made all email instances clickable mailto links for better UX

---

## Design Notes

The color scheme uses dark navy (`#0B2545`), gold (`#C9922A`), and cream (`#F5EEE6`) throughout the site. This palette was chosen to feel professional and academic while remaining warm and approachable for students and parents.

All fonts are loaded from Google Fonts: Playfair Display for headings and DM Sans for body text.

---

## Next Steps (Final Deliverable — Due Apr 25)

## Final Submission & Reflections

### Project Evolution & Reflections

Throughout the development of StudyLynk, the site has undergone significant improvements in both design and functionality. Early concepts were more ambitious and visually complex, but as the project progressed, careful choices were made to refine the user experience, simplify navigation, and focus on clarity and accessibility. Many pages were toned down from their initial designs to ensure the site remained approachable and easy to use for students, parents, and educators.

Key decisions included:
- Streamlining navigation and page layouts for consistency across all devices
- Reducing visual clutter and focusing on essential content for each page
- Enhancing accessibility with semantic HTML, ARIA attributes, and keyboard navigation
- Prioritizing responsive design to ensure usability on mobile, tablet, and desktop
- Choosing a professional yet warm color palette and typography for readability and trust
- Adding real-world touches, like tutor stories and pet photos, to make the site more relatable

### Site-wide Enhancements
- Unique meta descriptions and favicon branding on every page
- Consistent header and footer for seamless navigation
- Multi-step modal for consultation requests, improving user engagement
- Advanced JavaScript form validation for a smooth contact experience
- Responsive images and layouts using Flexbox and Grid
- Clear, accessible forms with real-time feedback and error handling
- Smooth transitions and button animations for a polished feel
- All links, images, and resources tested for reliability and correctness

### Final Thoughts
The process of building StudyLynk has been a valuable learning experience in balancing creativity with usability. Early ideas were refined through testing and feedback, leading to a site that is both visually appealing and highly functional. Every page was carefully considered to serve its purpose, and the final choices reflect a commitment to quality, accessibility, and user-centered design.

The site is now complete, fully tested, and ready for submission. Thank you for reviewing my work!

---

The two pages being graded for the Final Deliverable are:

1. **`contact.html`** — JavaScript form validation is already implemented. Fields validated: first name (auto-capitalize), last name (auto-capitalize), city (auto-capitalize), zip code (5-digit check), email (format check).

2. **`schedule.html`** — Support services page with ordered list for major categories and unordered lists with image-styled bullets for hours and details inside each category.

The full site must also be published to GitHub Pages before the final submission date.
