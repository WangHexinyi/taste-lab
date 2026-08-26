---
name: design-taste-frontend
description: Decision-driven anti-slop frontend design skill. Research real content and media first, derive art direction from the brief, then select media, color, typography, composition, motion, and implementation as one coherent visual system. Optimized for high-end editorial taste without forcing one visual template.
---

# Taste Skill V3.0 - Decision Architecture
> This skill is an art-direction workflow, not a template library.
> Judge it by the rendered result.
> **Standalone test build:** this file is self-contained. Do not expect or request any external `references/` or `recipes/` files.
## Operating model
Use this sequence:
`UNDERSTAND -> RESEARCH -> ART DIRECTION -> MEDIA -> COLOR -> TYPE -> COMPOSITION -> MOTION -> COHERENCE -> IMPLEMENT -> REVIEW`
Do not start from effects, components, palette names, or pattern names.
Start from content, truth, audience, real assets, and intended experience.

---

# 0. TASTE AND PRIORITIES
## 0.1 Default taste
When several directions fit equally well, prefer:
- high-end editorial restraint,
- magazine-quality image/type relationships,
- strong crops,
- asymmetric but grid-anchored layouts,
- confident negative space,
- low-to-medium chroma unless vivid color serves the subject,
- material credibility,
- Mobbin-like product motion before spectacle,
- one memorable visual moment surrounded by quieter sections,
- precise micro-detail over decorative noise.
These are tie-breakers, not universal recipes.
Explicit brand, audience, product truth, supplied references, accessibility, and user direction outrank them.
## 0.2 Translate adjectives into relationships
Never map one word directly to one palette, font, effect, or layout.
Translate words such as `premium`, `royal`, `minimal`, `cinematic`, `technical`, `playful`, `natural`, `futuristic`, or `editorial` into:
- hierarchy,
- density,
- contrast,
- materiality,
- image truth,
- crop behavior,
- type personality,
- color temperature/chroma,
- motion character,
- information rhythm.
Bad:
`luxury -> black + gold -> serif -> centered hero`
Good:
`brief + brand + real assets + audience + content -> visual thesis -> coordinated decisions`
## 0.3 Truth first
Real facts and real media beat invented substitutes.
Generated media is a creative tool, not evidence.
Never use generated imagery to imply an unverified real product feature, person, place, customer, testimonial, result, interface, or material property.
## 0.4 Make decisions
Do not show the user a giant menu unless the brief genuinely requires a choice.
Infer the strongest direction and proceed.
Ask at most one clarifying question only when two materially different directions remain equally plausible.

---

# 1. UNDERSTAND
Before visual work, extract the design problem.
## 1.1 Identify
- page/product type,
- audience,
- primary action,
- communication goal,
- real-world subject/product,
- brand identity,
- supplied assets,
- references,
- content requirements,
- technical stack,
- accessibility/regulatory constraints,
- tone words,
- scope constraints.
## 1.2 Coverage map
Every named requirement must appear in an internal coverage map before styling.

```yaml
requirements:
  - item: product materials
    evidence: official source
    role: credibility
  - item: internal structure
    evidence: technical source
    role: explanation
```

No requirement silently disappears because it is visually inconvenient.
## 1.3 Content hierarchy
Classify content:
- **Primary**: must be noticed/understood first.
- **Secondary**: builds desire, trust, comprehension.
- **Tertiary**: detail, specs, proof, context, navigation.
If everything is primary, hierarchy has failed.
## 1.4 Design Read
When useful, state one short line before implementation:
`Reading this as: <page kind> for <audience>, aiming for <experience>, with <primary visual logic>.`
Do not turn this into an essay.

---

# 2. RESEARCH
Research is part of design when the subject exists in the real world.
## 2.1 Research when
The task concerns a real public:
- product,
- company,
- venue,
- place,
- person,
- event,
- publication,
- technology,
- service,
- existing website.
If research tools are available, gather truth before inventing content/media.
## 2.2 Source order
1. user-provided facts/assets,
2. official brand/product sources,
3. first-party press/media kits/documentation,
4. reputable factual sources,
5. licensed/reusable photography when appropriate,
6. generated conceptual media,
7. explicit placeholder.
## 2.3 Product promotion
For real product promotion, seek when available:
- official hero photography,
- multiple product angles,
- macro/material detail,
- product in use,
- packaging/ecosystem,
- official colorways,
- dimensions/specifications,
- differentiators,
- brand typography/color,
- campaign language,
- real software screenshots.
Do not design the product page before understanding the product.
## 2.4 Research output
Build a compact inventory:

```yaml
facts:
  verified: []
  uncertain: []
media:
  official: []
  lifestyle: []
  detail: []
  screenshot: []
  logo: []
missing: []
```

Stop when you can answer:
- what is it really like,
- what should the viewer believe,
- what proves that,
- which media can carry the story,
- what remains unknown and must not be invented.

---

# 3. ART DIRECTION
Define one visual world before individual choices.
## 3.1 Internal packet

```yaml
visual_thesis: "one sentence"
brand_character: ["three", "specific", "traits"]
audience_state: "desired feeling"
dominant_content: "product | photo | type | information | interaction"
visual_tension: "quiet/expressive, soft/sharp, warm/cool, organic/engineered"
media_role: "evidence | desire | explanation | atmosphere | mixed"
color_behavior: "relationship, not hex"
type_behavior: "roles and hierarchy"
composition_behavior: "grid and rhythm"
motion_behavior: "role and physical character"
signature_moment: "one memorable moment"
resting_mode: "how surrounding sections become quiet"
```

## 3.2 One dominant idea per viewport
Each major viewport should have a clear focal priority:
- product,
- headline,
- photograph,
- diagram,
- comparison,
- motion transition,
- detail.
Do not make type, cards, shader, particles, video, glow, and gradients compete simultaneously.
## 3.3 High-end means precision
High-end quality usually comes from:
- strong hierarchy,
- excellent imagery,
- deliberate crop,
- optical alignment,
- controlled spacing,
- coherent color,
- clear type roles,
- material credibility,
- restrained interaction,
- continuity.
If removing an effect improves hierarchy, remove it.
## 3.4 Minimal means edited, not empty
Minimal means fewer simultaneous visual voices.
It does not mean missing information.
Use hierarchy, chaptering, progressive disclosure, visual explanation, or comparison to keep content rich without clutter.
## 3.5 Editorial is a relationship
Editorial quality comes from sequencing, crop, scale, margins, image pairs, captions, chapter rhythm, and type hierarchy.
Serif is optional.

---

# 4. MEDIA ENGINE
Choose media from its job, not from industry stereotypes.
## 4.1 Inputs
Ask:
- Is the subject real?
- Must the image prove exact appearance?
- Must it show use/context?
- Must it communicate material?
- Must it explain structure?
- Must it create emotion?
- Is fiction/concept acceptable?
- Are official assets available?
## 4.2 Media roles
### Evidence
Use when exact appearance/existence must be trusted.
Prefer official photography, real screenshots, documentary media, verified product renders.
### Experience
Use when the viewer should imagine use/context.
Prefer lifestyle, environmental, documentary, human-scale photography.
### Material
Use when craft, texture, finish, or physical precision matters.
Prefer macro/detail photography, studio closeups, raking light, controlled crops.
### Explanation
Use when operation or structure must be understood.
Prefer diagrams, annotated photography, exploded views, technical renders, real UI.
### Emotion
Use when media carries brand feeling.
Prefer art-directed editorial/campaign photography, cinematic stills, intentional illustration.
### Imagination
Use when the subject is fictional, speculative, conceptual, or impossible to photograph.
Prefer generation, illustration, collage, abstract 3D, experimental media.
## 4.3 Image packet
For every major image decide:

```yaml
role: "evidence | experience | material | explanation | emotion | imagination"
truth_status: "official | verified | illustrative | generated | placeholder"
shot_type: "wide | medium | macro | top-down | portrait | detail | screen"
lighting: "natural | soft | hard | directional | dramatic"
lens_feel: "wide | neutral | compressed | intimate | architectural"
finish: "clean | grain | muted | hard-flash | monochrome | vivid"
crop_behavior: "full object | edge crop | negative-space | full bleed"
aspect_ratio: "chosen for composition"
```

## 4.4 Generation rule
Use generation because it is the right medium, not because the tool exists.
Generated media must not impersonate factual evidence.
## 4.5 Image and type are one composition
Ask:
- Where is visual weight inside the image?
- Where is negative space?
- Which crop creates useful tension or type room?
- Should UI recede behind the image?
- Does overlap add meaning or only complexity?
A strong crop often improves the page more than another effect.

---

# 5. COLOR ENGINE
Do not begin from a preset palette.
## 5.1 Source order
Derive color from:
1. established brand,
2. product/material,
3. dominant imagery,
4. audience/emotional intent,
5. environment/context,
6. accessibility/viewing conditions.
## 5.2 Decide relationships first
Decide:
- warm/cool/neutral/mixed,
- low/medium/high chroma,
- soft/medium/hard contrast,
- surface hierarchy,
- text contrast,
- accent purpose,
- image-to-interface relationship.
Then select actual colors.
## 5.3 Semantic roles
Prefer roles over isolated hex values:

```text
surface.base
surface.raised
surface.inverse
text.primary
text.secondary
text.muted
border.subtle
accent.primary
accent.hover
accent.soft
state.* only when semantic
```

## 5.4 Accent discipline
Accent should focus action, connect information, echo product/brand material, or signal meaningful state.
It should not exist because the page feels empty.
Use one accent family by default, with tonal variation rather than one repeated hex.
## 5.5 Image-led color
When photography dominates, UI often should recede.
Coordinate with image temperature, material tones, chroma, highlights, and shadows.
## 5.6 Reject shortcuts
Never assume:
- luxury = black/gold,
- tech = blue/purple,
- wellness = sage/beige,
- sustainability = green,
- children = rainbow,
- royal = purple/gold.
A stereotype may still win after reasoning. It is never automatic.
## 5.7 Validate
Ask:
- Does the palette belong to the brand/subject?
- Does it cooperate with imagery?
- Is hierarchy visible without hue alone?
- Is accent scarce enough to remain meaningful?
- Does contrast pass accessibility?
- Would removing one color improve the system?

---

# 6. TYPOGRAPHY ENGINE
## 6.1 Inputs
Consider:
- brand character,
- content length,
- language/glyph coverage,
- reading vs display priority,
- technical vs emotional tone,
- existing brand fonts,
- licensing/performance.
## 6.2 Roles before families
Define:
- display,
- text,
- utility/metadata,
- numeric/technical when needed.
Most pages need one or two families, not four.
## 6.3 Hierarchy beyond size
Use scale, weight, width, leading, tracking, case, color, measure, placement, and whitespace.
Do not solve every hierarchy problem with a giant H1.
## 6.4 Serif is contextual
Use serif when historical, editorial, literary, luxury, or brand character genuinely benefits.
Do not add serif merely to make a page feel expensive.
Do not inject a random serif word into a sans headline as a generic trick.
## 6.5 Reading quality
Body copy needs deliberate line length, contrast, line-height, paragraph rhythm, and stable font loading.
The rendered type matters more than the font's reputation.

---

# 7. COMPOSITION ENGINE
Turn content relationships into space.
## 7.1 Inputs
Use:
- primary/secondary/tertiary content,
- media strength,
- information amount,
- narrative order,
- comparison needs,
- repeated item count,
- interaction needs,
- viewport behavior.
## 7.2 Map relationship to direction
### One proposition + strong asset
Favor dominant-media composition with supporting copy.
### Sequential explanation
Favor chaptered narrative, sticky media, progressive reveal, or vertical storytelling.
### Comparable items
Favor grid, matrix, grouped modules, or controlled carousel depending on density.
### Photography-led story
Favor editorial spreads, full bleed, image pairs, caption rails, changing scale.
### Technical explanation
Favor annotated media, diagrams, exploded views, spec clusters, sticky explanatory rails.
### Many weak items
Do not create many weak cards. Regroup or reduce prominence.
## 7.3 Grid before gesture
Even expressive asymmetry needs anchors.
Define:
- content width,
- columns,
- gutters,
- alignment lines,
- full-bleed exceptions,
- section rhythm.
## 7.4 Magazine rhythm
Create compression and release:
- dense -> open,
- contained -> full bleed,
- image dominant -> type dominant,
- large -> intimate,
- quiet -> signature -> quiet.
Do not repeat identical section geometry down the page.
## 7.5 Repetition vs variation
Keep repeated:
- grid,
- spacing logic,
- type roles,
- shape language,
- caption behavior.
Vary when content requires:
- section geometry,
- image scale,
- dominant side,
- density,
- crop ratio.
## 7.6 Optical alignment
Align what looks correct, not only what measures equally.
Consider cap height, image visual center, punctuation, optical margins, and irregular silhouettes.
## 7.7 Mobile is recomposition
For each major section decide mobile:
- order,
- crop,
- text measure,
- sticky removal/retention,
- image height,
- interaction fallback,
- spacing reset.
Do not merely shrink desktop.

---

# 8. MOTION ENGINE
Choose a physical language before effects.
## 8.1 Motion roles
Every nontrivial animation should serve:
- hierarchy,
- feedback,
- continuity,
- state transition,
- storytelling,
- orientation,
- atmosphere.
If its only reason is `looks cool`, remove it unless the brief is explicitly experimental.
## 8.2 Motion character
Choose a dominant character:
- precise,
- soft,
- elastic,
- mechanical,
- cinematic,
- fluid,
- editorial,
- playful.
Keep easing, distance, overshoot, and duration consistent with it.
## 8.3 Motion scale
- **micro**: button, hover, focus, toggle,
- **component**: card, gallery, menu, modal,
- **section**: reveal, pin, chapter transition,
- **page**: narrative choreography.
Most projects need many quiet micro interactions, a few component transitions, and at most one strong section/page signature.
## 8.4 Mobbin-like polish
Prioritize:
- spatial continuity,
- immediate feedback,
- clear state change,
- restrained distance,
- consistent springs/easing,
- no unnecessary delay,
- no animation that blocks the next action.
## 8.5 Signature motion
Choose at most one primary memorable motion idea unless the brief explicitly calls for an experimental site.
Everything else supports it.
## 8.6 Technology routing
Use the lightest capable tool:
- CSS for simple states,
- Motion for component/spring interaction,
- CSS scroll-driven animation for simple scroll relationships when suitable,
- GSAP/ScrollTrigger for deliberate complex choreography,
- Canvas/WebGL only for graphics that need per-frame rendering.
Do not import a heavy library to animate opacity.
## 8.7 Continuous input
For pointer/scroll values:
- avoid React state per frame,
- prefer transforms/opacity,
- use motion values, CSS variables, or animation-system state,
- clean up observers/timelines/RAF,
- degrade on coarse pointers and reduced motion,
- never replace the native cursor,
- do not hijack native scroll by default.

---

# 9. COHERENCE PASS
Run before implementation and again after rendering.
Compare:
- photography,
- color,
- typography,
- grid,
- spacing,
- shapes,
- surfaces/material,
- icons,
- motion physics,
- copy tone.
Ask:
1. Do photography and typography feel like the same brand?
2. Does color temperature agree with images/materials?
3. Do controls/cards share an intentional object language?
4. Does motion feel like the same brand as the static page?
5. Is there one clear focal hierarchy per viewport?
6. Is anything visibly borrowed from another trend/system?
7. Does the signature moment have quiet space around it?
If several elements look polished individually but from different websites, the design fails.
## Remove before adding
When the page feels generic/noisy, first remove:
- duplicate headings,
- unnecessary cards,
- extra accents,
- decorative labels,
- weak images,
- redundant CTAs,
- repeated effects,
- unnecessary borders/shadows.
Do not fix incoherence with more decoration.

---

# 10. IMPLEMENTATION
## 10.1 Respect the project
Before adding packages:
- inspect stack/dependencies,
- reuse existing design systems when appropriate,
- do not force React/Next/Tailwind/GSAP onto a different project,
- avoid mixing unrelated design systems.
## 10.2 Separate concerns
Separate:
- static structure,
- interactive leaves,
- animation logic,
- media,
- theme tokens.
Continuous animation/pointer logic should not rerender the entire page.
## 10.3 Implementation capsules only after selection
Use the embedded Appendix A capsules only when the art direction has already selected that interaction/media behavior.
A capsule implements a chosen idea. It must never choose the idea.
## 10.4 Software/product visuals
Priority:
1. real screenshot,
2. actual live/minified component preview,
3. clearly conceptual generated visual,
4. no screenshot.
Do not present decorative div rectangles as a real product interface.

---

# 11. CONTENT ENGINE
## 11.1 Truth classes
Every factual claim is:
- user-provided,
- verified-public,
- inferred-nonfactual,
- placeholder/sample.
Do not mix these invisibly.
## 11.2 Richness from dimensions
A complete page covers the dimensions that matter, not many paragraphs.
Possible dimensions:
- what it is,
- why it matters,
- how it works,
- construction/material,
- use context,
- differentiators,
- proof,
- specifications,
- variants,
- compatibility,
- price,
- availability,
- process,
- people,
- place,
- story.
Select only what the brief/sources support.
## 11.3 No fake precision
Never invent dimensions, performance numbers, prices, percentages, awards, customer counts, dates, testimonials, materials, or technical capabilities.
Unknown information is omitted, researched, or labeled sample.
## 11.4 Copy register
Choose one dominant voice:
- technical,
- editorial,
- direct commercial,
- playful,
- institutional,
- cultural,
- luxurious restraint,
- documentary.
Avoid empty prestige language when a concrete sentence exists.

---

# 12. PRODUCTION QUALITY
## 12.1 Responsive media
Images must reserve layout space and deliver appropriate sources/crops.
Use responsive images and art-directed crops when supported.
Do not send huge desktop media to small phones without reason.
## 12.2 LCP
Identify likely largest above-fold media and load it intentionally.
Do not lazy-load the LCP image.
Lazy-load noncritical below-fold media.
## 12.3 Motion performance
Prefer transform/opacity.
Avoid layout-thrashing animation.
Use `will-change` sparingly.
Canvas/WebGL needs static fallback and should pause/simplify when not visible.
## 12.4 Reduced motion
Nontrivial motion must respect `prefers-reduced-motion`.
Parallax, magnetic physics, looping animation, scroll choreography, and shader motion reduce to static/simple state changes.
## 12.5 Accessibility
At minimum:
- semantic structure,
- meaningful alt handling,
- keyboard navigation,
- visible focus,
- readable contrast,
- form labels,
- adequate targets,
- no essential hover-only meaning.
## 12.6 SEO/social
For public pages when applicable, verify:
- title,
- description,
- canonical,
- indexability intent,
- social title/description,
- OG/social image,
- truthful structured data,
- heading hierarchy.

---

# 13. REDESIGN
## 13.1 Audit first
Inspect:
- brand tokens,
- typography,
- logo use,
- imagery,
- information architecture,
- conversion paths,
- hierarchy,
- signature interactions,
- accessibility wins,
- analytics-sensitive labels/IDs,
- SEO-sensitive URLs/metadata.
## 13.2 Preserve identity
Do not silently change:
- logo,
- URL structure,
- legal copy,
- critical form fields,
- primary navigation meaning,
- real product facts.
## 13.3 Modernize in leverage order
1. typography/hierarchy,
2. spacing/grid,
3. media quality/crop,
4. color calibration,
5. motion layer,
6. section recomposition,
7. structural replacement only when needed.

---

# 14. COMPACT ANTI-SLOP
These are recurring failure modes, not an aesthetic.
Avoid by default:
- automatic AI-purple/blue tech glow,
- centered hero over generic mesh gradient,
- three equal feature cards,
- glass on every surface,
- giant meaningless H1,
- text-only fake minimalism,
- eyebrow label above every section,
- repeated bento grids,
- endless left/right zigzags,
- random neon outer glow,
- excessive gradient text,
- fake version/status decoration,
- fake dashboard/terminal built from decorative divs,
- generic stock when real subject imagery exists,
- multiple marquees/scroll gimmicks,
- custom cursor replacement,
- fake locale/weather/build metadata,
- generic invented brands/people,
- fabricated exact numbers,
- fake customer logos/testimonials,
- prestige copy that says nothing.
## Card restraint
Use a card only when a contained object/action/hierarchy needs one.
Do not put every paragraph inside a rounded rectangle.
## Shape consistency
Define object language and follow it.
Mixed radii can be valid if the rule is intentional.
## Effect budget
Do not accumulate:
`grain + glass + parallax + shader + marquee + magnetic + glow + scramble + hover trail`
Use the smallest set that reinforces the visual thesis.

---

# 15. FINAL REVIEW - SEVEN GATES
Inspect the rendered result where possible. Do not mechanically claim success.
## Gate 1 - Truth
- Facts/claims sourced or user-provided?
- Real products/people/places represented honestly?
- Generated media not pretending to be evidence?
## Gate 2 - Art Direction
- Image, color, type, material, shape, motion in one visual world?
- One clear thesis?
- Still fits the brief rather than only the preferred taste?
## Gate 3 - Hierarchy
- Primary idea obvious in first viewport?
- One dominant priority per major viewport?
- Secondary/tertiary content quieter?
## Gate 4 - Originality
- Obvious AI-template signatures avoided?
- Repeated section geometry controlled?
- Signature moment specific to this content?
## Gate 5 - Motion/Interaction
- Coherent physical character?
- Major animations serve a role?
- Pointer, touch, keyboard, reduced-motion behavior valid?
## Gate 6 - Responsive/Accessible
- Mobile recomposed rather than shrunk?
- Crops/text/controls remain usable?
- Accessibility basics pass?
## Gate 7 - Production
- Image sizes/priorities sensible?
- Layout shifts controlled?
- Animation costs controlled?
- Metadata/social cards present when relevant?
- Dependencies justified?
- Required loading/error/empty states handled?
If a gate fails, revise the design. Do not compensate with more decoration.

---

# 16. SUCCESS CONDITION
The skill succeeds when unrelated briefs produce unrelated-looking pages that still share a high quality bar.
If asked, the agent should be able to explain:
- why these images,
- why this color relationship,
- why this layout,
- why this typography,
- why this motion character,
- why the page is coherent,
- what was deliberately not used.
If the same palette, hero, cards, font trick, or motion sequence repeats across unrelated prompts, the skill is failing even when each page looks polished.

---

# APPENDIX A - EMBEDDED IMPLEMENTATION CAPSULES
These are compact implementation references for the single-file test build. Use them only after the corresponding visual behavior has been selected by the decision workflow.

## A1. Responsive images
Goals: correct crop, correct resolution, stable layout, fast LCP, lazy noncritical media.

```html
<picture>
  <source media="(max-width: 767px)" srcset="/hero-mobile-960.avif" type="image/avif" />
  <source srcset="/hero-1200.avif 1200w, /hero-2000.avif 2000w" type="image/avif" />
  <img
    src="/hero-1600.jpg"
    srcset="/hero-900.jpg 900w, /hero-1600.jpg 1600w, /hero-2400.jpg 2400w"
    sizes="(max-width: 767px) 100vw, 62vw"
    width="1600"
    height="1200"
    alt="Specific description of the image's relevant content"
    fetchpriority="high"
    decoding="async"
  />
</picture>
```

For below-fold media, remove high fetch priority and use `loading="lazy"`. In frameworks, apply the same principles through the installed image component rather than blindly copying outdated API syntax.

## A2. Magnetic interaction
Use only for a small number of important controls, fine pointers, and a motion language that benefits from physical attraction.

```tsx
"use client";
import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

export function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();
  const rawX = useMotionValue(0), rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 260, damping: 24, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 260, damping: 24, mass: 0.5 });

  function move(e: React.PointerEvent<HTMLButtonElement>) {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const cap = 10;
    rawX.set(Math.max(-cap, Math.min(cap, dx * 0.16)));
    rawY.set(Math.max(-cap, Math.min(cap, dy * 0.16)));
  }
  const reset = () => { rawX.set(0); rawY.set(0); };

  return <motion.button ref={ref} style={{ x, y }} onPointerMove={move}
    onPointerLeave={reset} onPointerCancel={reset}
    whileTap={reduce ? undefined : { scale: 0.98 }}>{children}</motion.button>;
}
```

Keep displacement subtle. The control must remain where the user expects it.

## A3. Pointer spotlight
Use for local material response, never as generic blue/purple neon decoration.

```tsx
"use client";
import { useRef } from "react";

export function SpotlightSurface({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  function move(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  }
  return <div ref={ref} onPointerMove={move} className="spotlight-surface">{children}</div>;
}
```

```css
.spotlight-surface { position: relative; isolation: isolate; }
.spotlight-surface::before {
  content: ""; position: absolute; inset: 0; pointer-events: none; opacity: 0;
  transition: opacity 180ms ease;
  background: radial-gradient(280px circle at var(--mx) var(--my), rgb(255 255 255 / .10), transparent 65%);
}
@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .spotlight-surface:hover::before { opacity: 1; }
}
```

Tune radius, tint and opacity to the material system.

## A4. Lightweight shader background
Only use when procedural graphics are part of the art direction.
Progressive enhancement is mandatory: complete static/CSS fallback first, WebGL second; pause offscreen/hidden; respect reduced motion; fail silently on initialization/context loss.

```glsl
precision mediump float;
uniform vec2 uResolution;
uniform float uTime;
void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  vec2 p = uv - 0.5;
  p.x *= uResolution.x / uResolution.y;
  float wave = sin(p.x * 5.0 + uTime * 0.25) * 0.04;
  float d = length(p + vec2(0.0, wave));
  float field = smoothstep(0.72, 0.05, d);
  vec3 base = vec3(0.055, 0.06, 0.07);
  vec3 tint = vec3(0.20, 0.24, 0.25);
  vec3 color = mix(base, tint, field * 0.35);
  gl_FragColor = vec4(color, 1.0);
}
```

This is a technical skeleton, not an art-direction preset. Re-derive the shader palette, field, speed and geometry from the project.

## A5. Sticky narrative
Use only for genuine sequential storytelling where one visual should remain contextually persistent.

```css
.story {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
  gap: clamp(2rem, 6vw, 8rem);
}
.story-media { position: sticky; top: 10vh; height: 80vh; align-self: start; }
@media (max-width: 767px) {
  .story { display: block; }
  .story-media { position: relative; top: auto; height: auto; }
}
```

Prefer native sticky plus lightweight state observation. If GSAP/ScrollTrigger is already justified, keep native scroll input, compute end from real content, clean up triggers, and simplify on mobile/reduced motion. Do not use sticky narrative for ordinary feature cards.

