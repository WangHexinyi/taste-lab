---
name: design-taste-frontend
description: Decision-driven anti-slop frontend design skill. First classify the requested surface and user loop, benchmark mature interaction categories when tools allow, then research real subjects, acquire media, derive art direction, and implement one coherent visual system. Optimized for high-end taste without converting utility products into editorial showcases or experimental demos.
---

# Taste Skill V3.4 - Surface-Routed Decision Architecture
> This skill is an art-direction workflow, not a template library.
> Judge it by the rendered result.
> **Standalone test build:** this file is self-contained. Do not expect or request any external `references/` or `recipes/` files.
## Operating model
Use this sequence:
`UNDERSTAND -> SURFACE ROUTER -> CATEGORY BENCHMARK -> RESEARCH/FRESHNESS (when relevant) -> ASSET GATE -> INTERACTION CONTRACT -> ART DIRECTION -> MEDIA -> COLOR -> TYPE -> COMPOSITION -> MOTION -> COHERENCE -> IMPLEMENT -> FUNCTIONAL QA -> RENDER CHECK -> REVIEW`
Do not start from effects, components, palette names, pattern names, or a favorite aesthetic.
Start from the requested product/surface, primary user loop, content truth, audience, media, and intended experience.
For task-oriented products, **surface classification and the interaction contract are blocking stages**. For real products, brands, places, people, software, or events, **research and asset acquisition are blocking stages**. Do not start visual implementation while core user tasks or easily obtainable real evidence are still unresolved.

## Execution discipline
The decision workflow is primarily internal. Unless the user asks for rationale, do not spend output budget dumping the Art Direction Packet, Coverage Map, candidate palettes, or Seven-Gate checklist.
Prioritize the requested artifact and working implementation. A brief design-read sentence is enough when explanation is useful.
If tools or rendering are available, use them; do not substitute a written promise for an implemented visual or interaction.
When the environment can browse/search/fetch images, actually use those capabilities for real-world subjects before coding. When it truly cannot acquire authentic media, be explicit about the limitation and label the result as a scaffold/prototype unless the user supplies assets; do not present blank asset slots as a finished high-fidelity promotional page.
For mature interactive categories (music player, commerce, messaging, maps, calendars, editors, dashboards, booking, etc.), use available browsing/reference tools to understand current category expectations before inventing a novel shell. Implementation constraints may simplify the backend, but must not silently mutate the requested product into a different concept.

---

# 0. TASTE AND PRIORITIES
## 0.1 Taste is a quality bar, not a surface type
When several directions fit the **same surface class** equally well, prefer:
- high-end restraint and precise hierarchy,
- confident image/type/content relationships,
- strong crops and material credibility when media matters,
- optical alignment and controlled spacing,
- intentional negative space without starving functional surfaces,
- low-to-medium chroma unless vivid color belongs to the subject/content,
- product-grade motion and immediate feedback before spectacle,
- one memorable visual or interaction moment surrounded by quieter decisions,
- micro-detail only when it clarifies structure, state, authorship, or meaning.

High-end work may arrive through different dominant modes:
- **product-grade precision** — useful, dense enough, frictionless, state-aware,
- **editorial authority** — image/content hierarchy, sequencing, crop, typography,
- **spatial/immersive impact** — depth, material response, 3D/procedural interaction.

Choose the mode **after** the Surface Router. Editorial and immersive language are optional vocabularies, not universal defaults.
Explicit user intent, product utility, category conventions, brand, audience, truth, accessibility, and supplied references outrank taste.
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

### Parallel-facet coverage
When the brief names parallel facets (`A + B`, `X and Y`, multiple audiences, product + software, nature + people), treat each as an explicit coverage obligation.
- Give each facet concrete content evidence.
- When media is a primary communication channel, give each facet visual evidence too; mentioning a facet only in body copy is not enough.
- One asset may cover multiple facets only when it genuinely communicates both.
- Re-check the rendered page against the named facets before delivery.

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


# 2. SURFACE ROUTER & CATEGORY BENCHMARK
Art direction begins only after deciding what kind of surface the user actually asked for.

## 2.1 Classify the primary surface (blocking)
Choose one primary class:
- **PRODUCT / UTILITY APP** — listen, search, message, edit, manage, create, monitor, organize.
- **MARKETING / CAMPAIGN** — explain, persuade, launch, convert, tell a product/brand story.
- **EDITORIAL / PUBLICATION** — read, browse stories/media, archive, learn.
- **COMMERCE / CATALOG** — discover, compare, configure, purchase/book.
- **IMMERSIVE / EXPERIMENTAL** — the interaction/spatial experience itself is the content.
- **HYBRID** — define which mode dominates each region.

Verb test: repeated **doing** -> PRODUCT APP; understanding/believing/buying -> CAMPAIGN; consuming a body of content -> EDITORIAL.
Do not reinterpret a utility product as an art piece merely because the user says `premium`, `minimal`, `luxury`, `cinematic`, or `high-end`.

## 2.2 Surface priority order
- **APP:** `core task -> navigation/state -> content access -> feedback -> density/readability -> identity -> spectacle`
- **CAMPAIGN:** `message -> authentic media -> narrative -> proof/CTA -> motion -> finish`
- **EDITORIAL:** `content/media -> reading/browsing hierarchy -> sequencing -> context -> motion`
- **COMMERCE:** `discovery -> product truth -> compare/configure -> trust -> conversion -> brand`
- **IMMERSIVE:** `experience thesis -> input/response -> spatial/material system -> legibility -> fallback`

A high-end app that fails its primary task is not high-end.

## 2.3 Interaction Contract (blocking for task-oriented surfaces)
Before styling, define:
`surface_class, primary_user_loop, core_tasks, persistent_regions, navigation_model, content_model, primary_state, essential_controls, mobile_recomposition`.
For PRODUCT / UTILITY APP, implementation must preserve this contract.

## 2.4 Mature-category benchmark gate
If the task belongs to an established interaction category and browsing/reference tools are available, inspect at least **two current strong products** before coding.
Extract invariants, not skins: IA, first-viewport task access, persistent shell, media/content density, current-state treatment, control placement, search/discovery, contextual panels, responsive behavior, feedback.
Do not copy exact palette/logo/layout.

Example: a general online music product is a **media-centric application**, not automatically a one-off listening installation. Mature players typically expose discovery/search, library/catalog, cover art, track/playlist surfaces, persistent now-playing controls, progress/volume, and queue/up-next behavior. The brief may narrow this set consciously.

## 2.5 No category mutation
Implementation difficulty does not authorize product redefinition.
`online music website -> six browser-generated tracks with no catalog` is a category mutation unless the user asked for generative audio.
If a backend is unavailable, use coherent mock/demo data while preserving the expected product architecture.

## 2.6 First-viewport product contract
For PRODUCT / UTILITY APP, the first viewport should communicate: where the user is, what they can do now, meaningful content to act on, current/persistent state, and the next obvious action.
Large empty regions require a strong intentional focal object/state; blank space alone is not luxury.

---

# 3. RESEARCH
Research has two forms: factual/media research for real-world subjects, and category/interaction benchmarking for mature product surfaces. The Surface Router decides which is required.
## 3.1 Research when
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
If research tools are available, actually use them to gather truth before inventing content/media. For a real public subject, do not skip available first-party research merely to start coding faster.
For a fictional/new product in a mature category, benchmark the category even when no factual brand research is required. The absence of a named real brand does not mean “invent product ergonomics from scratch.”
## 3.2 Source order
1. user-provided facts/assets,
2. current official brand/product sources,
3. first-party press/media kits/documentation,
4. reputable factual sources,
5. licensed/reusable photography when appropriate,
6. generated conceptual media,
7. explicit placeholder.

## 3.3 Freshness gate (blocking for named real subjects)
Release status, current model generation, specifications, pricing, availability, executive roles, campaign language, and public assets are freshness-sensitive. Model memory is not evidence for these facts.

Before claiming that a named real product is unreleased, unavailable, discontinued, unsupported, or lacks official imagery:
- verify against a current official source,
- prefer a dated official newsroom/product/support page,
- resolve relative time against the current date available in the environment,
- search again when the strongest evidence is older than the product cycle or conflicts with the brief.

**Inability to retrieve an image is not evidence that the product is unreleased.** Fact availability and asset retrieval are separate questions. Do not turn a retrieval failure into a product-status claim.

## 3.4 Product promotion
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
## 3.5 Research output
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

## 3.6 Evidence / Asset Gate (blocking)
For a real-world promotional page, do **not** proceed to final art direction or code until the available tooling has been used to obtain enough truth and media to make the page believable.

For a real physical product, the minimum viable gate is:
- at least one **current** trustworthy first-party or verified product source,
- at least one real/official hero-capable product image or render when publicly available,
- for a multi-section promotional page, normally at least two additional authentic supporting media items (detail, angle, use/context, archive, ecosystem, interface) when publicly available,
- several verified concrete facts sufficient to avoid slogan-only copy,
- a list of missing facts/assets that must not be fabricated.

A placeholder does **not** satisfy this gate when authentic public media exists and the available tools can reach it. A real-product promotional page with zero authentic subject media is a failed final render unless the user explicitly requested a wireframe/scaffold or explicitly accepted missing assets.

For a multi-section product story, actively seek visual diversity when available:
- hero/product overview,
- material/detail/angle,
- use/context/ecosystem,
- historical/archive or interface evidence when the brief needs them.

**Real product imagery must appear before conceptual decoration.** Do not replace an easily obtainable real product photo with a CSS drawing, fake 3D silhouette, abstract gradient, fake laptop frame, or generated imitation.

## 3.7 Retrieval fallback ladder
Before using a blank placeholder for a named real product, exhaust the available paths in this order:
1. current official product page imagery,
2. current official newsroom / press / media-kit imagery,
3. current official support/spec pages with product media,
4. verified first-party campaign or ecosystem imagery,
5. if the exact product is genuinely unreleased after current verification, use clearly labeled authentic family/previous-generation media for history/material/context plus a separate concept treatment for the unknown product,
6. only then use an explicit placeholder.

If a platform can browse pages but cannot download binary assets, prefer a verified remote official image URL, a supported page capture/screenshot workflow, or request/provide the asset rather than silently presenting a blank frame as finished design. If none is technically possible, label the result as a scaffold/prototype, not a completed high-fidelity promotional page.

Never say “official imagery does not exist” merely because the current tool did not fetch it. Never say “product unreleased” without current official verification.

## 3.8 Brand-language audit
For a real established brand, inspect its current/official visual language before inventing a new one. Extract at least:
- dominant neutral/chroma behavior,
- typography character,
- photography/product-render language,
- spacing/grid tendencies,
- surface/material treatment,
- recurring interaction/motion character when visible.

The result may reinterpret the brand, but it should not accidentally become a generic category template. `technology` is not permission for dark navy + cyan/purple glow. If the final direction departs materially from the brand's established language, that departure must be intentional and justified by the brief.

## 3.9 Competition/background research when requested
If the brief asks for development history, competitiveness, market context, heritage, or comparison, research those dimensions explicitly.
- Background/history needs verified milestones, not invented timelines.
- Competitive positioning needs real peers and factual comparison dimensions.
- Do not fabricate benchmark charts, performance multipliers, prices, market share, or claims.
- Convert the research into visible page content or media; do not leave it only in hidden reasoning.

---

# 4. ART DIRECTION
Define one visual world before individual choices.
## 4.1 Internal packet
Build this privately as a decision aid. Do not print it by default.

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

## 4.2 One dominant idea per viewport
Each major viewport should have a clear focal priority:
- product,
- headline,
- photograph,
- diagram,
- comparison,
- motion transition,
- detail.
Do not make type, cards, shader, particles, video, glow, and gradients compete simultaneously.
## 4.3 High-end means precision
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
## 4.4 Minimal means edited, not empty
Minimal means fewer simultaneous visual voices.
It does not mean missing information.
Use hierarchy, chaptering, progressive disclosure, visual explanation, or comparison to keep content rich without clutter.
## 4.5 Editorial is a relationship
Editorial quality comes from sequencing, crop, scale, margins, image pairs, meaningful captions, chapter rhythm, and type hierarchy.
Captions or chapter labels are optional: use them only when they identify, attribute, navigate, or add real context. Do not simulate a magazine by inventing micro-metadata.
Serif is optional.

---

# 5. MEDIA ENGINE
Choose media from its job, not from industry stereotypes.
## 5.1 Inputs
Ask:
- Is the subject real?
- Must the image prove exact appearance?
- Must it show use/context?
- Must it communicate material?
- Must it explain structure?
- Must it create emotion?
- Is fiction/concept acceptable?
- Are official assets available?
## 5.2 Media roles
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
## 5.3 Image packet
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


## 5.4 Media-centric application rule
For music, video, photography, publishing, social, travel, commerce, and other media-centric products, media objects are **core product data**.
- Main browsing surfaces need convincing artwork/thumbnails/avatars/covers where the category expects them.
- If the service is fictional, generate/source a coherent demo media set when tools allow.
- Distinct content should look distinct; repeated procedural SVG/canvas placeholders are not a substitute for a media layer unless that is the explicit concept.
- The interface must feel inhabited enough to browse, not like one hero object surrounded by dead space.

## 5.5 Real-subject media dominance
When the page promotes a real physical product, person, place, venue, or other visually verifiable subject, authentic subject media should dominate the major visual moments whenever it is obtainable.
- Put the real subject in the hero or first major visual moment when it is central to the brief.
- Use supporting real views/details/context before filling the page with decorative UI panels.
- Do not let conceptual diagrams, fake interface chrome, abstract blobs, or procedural backgrounds become more visually prominent than the thing being promoted.
- Reuse one source with different crops only when honest and compositionally useful; prefer genuinely different views when available.

## 5.6 Asset validation
A selected image is not an asset until it actually renders.
- Verify remote images load in the final preview.
- Preserve aspect ratio and crop intentionally.
- Replace broken/hotlink-blocked sources instead of shipping empty frames.
- Record meaningful alt text or decorative treatment.

## 5.7 Authentic media coverage floor
For a multi-section page whose main job is to promote a real visual subject, the final render should normally include:
- one authentic hero/overview visual,
- at least two authentic supporting visuals with different jobs (detail, angle, use, context, archive, ecosystem, interface).

Do not count logos, icons, decorative SVGs, CSS drawings, fake device frames, diagrams, or placeholders as authentic subject media.
Do not repeat one image three times with trivial crops merely to satisfy the count.
If authentic media exists publicly but the final page contains none, fail the Media Gate and revise before delivery.

## 5.8 Generation rule
Use generation because it is the right medium, not because the tool exists.
Generated media must not impersonate factual evidence.
For existing commercial products, generated or hand-drawn product likenesses are last-resort concept placeholders, never the default hero.

## 5.9 Image and type are one composition
Ask:
- Where is visual weight inside the image?
- Where is negative space?
- Which crop creates useful tension or type room?
- Should UI recede behind the image?
- Does overlap add meaning or only complexity?
A strong crop often improves the page more than another effect.

---

# 6. COLOR ENGINE
Do not begin from a preset palette.
## 6.1 Source order
Derive color from:
1. established brand and current campaign language,
2. product/material/colorways,
3. dominant real imagery,
4. audience/emotional intent,
5. environment/context,
6. accessibility/viewing conditions.
For established brands, generic category styling has lower priority than brand evidence. A visually fashionable palette is still wrong if it makes the page look like a different company.

## 6.2 Candidate comparison before commitment
When no established brand palette clearly decides the answer, privately form 2-3 materially different **relationship hypotheses** before choosing.
They should differ in meaningful structure such as temperature, luminance, chroma, contrast, or whether imagery vs interface carries color. Do not create three near-identical hex palettes.
Compare candidates against:
- subject/brand truth,
- dominant imagery/materials,
- audience and emotional target,
- legibility/accessibility,
- distinctiveness vs generic category conventions,
- coherence with typography and motion.
Choose the strongest one and discard the rest. Do not show the menu unless the user asks for options.
`editorial`, `premium`, `natural`, `heritage`, or `luxury` do **not** automatically privilege warm-paper/off-white surfaces. A warm-paper solution may still win after comparison.

## 6.3 Decide relationships first
Decide:
- warm/cool/neutral/mixed,
- low/medium/high chroma,
- soft/medium/hard contrast,
- surface hierarchy,
- text contrast,
- accent purpose,
- image-to-interface relationship.
Then select actual colors.
## 6.4 Semantic roles
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

## 6.5 Accent discipline
Accent should focus action, connect information, echo product/brand material, or signal meaningful state.
It should not exist because the page feels empty.
Use one accent family by default, with tonal variation rather than one repeated hex.
## 6.6 Image-led color
When photography dominates, UI often should recede.
Coordinate with image temperature, material tones, chroma, highlights, and shadows.
## 6.7 Reject shortcuts
Never assume:
- luxury = black/gold,
- tech = blue/purple,
- wellness = sage/beige,
- sustainability = green,
- children = rainbow,
- royal = purple/gold.
A stereotype may still win after reasoning. It is never automatic.
## 6.8 Validate
Ask:
- Does the palette belong to the brand/subject?
- Does it cooperate with imagery?
- Is hierarchy visible without hue alone?
- Is accent scarce enough to remain meaningful?
- Does contrast pass accessibility?
- Would removing one color improve the system?

---

# 7. TYPOGRAPHY ENGINE
## 7.1 Inputs
Consider:
- brand character,
- content length,
- language/glyph coverage,
- reading vs display priority,
- technical vs emotional tone,
- existing brand fonts,
- licensing/performance.
## 7.2 Roles before families
Define:
- display,
- text,
- utility/metadata,
- numeric/technical when needed.
Most pages need one or two families, not four.

### Utility/metadata is optional, not decorative
Small labels, indices, captions, issue numbers, chapter names, coordinates, timestamps, technical strings, and mono microcopy must carry a real function: navigation, attribution, factual context, specification, status, or genuine publication structure.
Apply the removal test: **if deleting the microcopy loses no meaning, navigation, attribution, or verified context, delete it.**
Do not scatter faux-editorial labels merely to make the page look designed. Avoid invented `VOL.`, `PLATE`, `FIELD NOTE`, archive codes, coordinates, dates, or issue metadata unless the brief/source genuinely supports them.

## 7.3 Hierarchy beyond size
Use scale, weight, width, leading, tracking, case, color, measure, placement, and whitespace.
Do not solve every hierarchy problem with a giant H1.
## 7.4 Serif is contextual
Use serif when historical, editorial, literary, luxury, or brand character genuinely benefits.
Do not add serif merely to make a page feel expensive.
Do not inject a random serif word into a sans headline as a generic trick.
## 7.5 Reading quality
Body copy needs deliberate line length, contrast, line-height, paragraph rhythm, and stable font loading.
The rendered type matters more than the font's reputation.

---

# 8. COMPOSITION ENGINE
Turn content relationships into space.
## 8.1 Inputs
Use:
- primary/secondary/tertiary content,
- media strength,
- information amount,
- narrative order,
- comparison needs,
- repeated item count,
- interaction needs,
- viewport behavior.
## 8.2 Map relationship to direction
### One proposition + strong asset
Favor dominant-media composition with supporting copy.
### Sequential explanation
Favor chaptered narrative, sticky media, progressive reveal, or vertical storytelling.
### Comparable items
Favor grid, matrix, grouped modules, or controlled carousel depending on density.
### Photography-led story
Favor editorial spreads, full bleed, image pairs, changing scale, and caption rails only when captions carry real context.
### Technical explanation
Favor annotated media, diagrams, exploded views, spec clusters, sticky explanatory rails.
### Many weak items
Do not create many weak cards. Regroup or reduce prominence.

## 8.3 Product-app shell before page choreography
For PRODUCT / UTILITY APP, build a usable shell before dramatic sections: navigation/search, main content canvas, optional context panel, and persistent state/action region when the category expects it.
- Do not structure a utility app as full-screen marketing chapters.
- Keep primary controls/state available while users browse.
- Use enough content density to feel useful.
- Avoid the **PPT tell**: oversized title + one centered object + huge dead space + scroll to the next “slide”.
- A hero moment may exist, but it must not delay the core task.
For media apps, artwork/list/grid/collections should occupy meaningful area; it should feel like a place to browse and play, not a brochure about listening.

## 8.4 Grid before gesture
Even expressive asymmetry needs anchors.
Define:
- content width,
- columns,
- gutters,
- alignment lines,
- full-bleed exceptions,
- section rhythm.

### Reading width is not media width
Do not constrain an entire premium/product page to one narrow centered `max-width`. Text may have a controlled reading measure while product imagery, photography, timelines, comparison fields, and cinematic moments use a wider or full-bleed visual field.
When the product is the primary subject on desktop, its main visual should usually carry comparable or greater visual weight than supporting copy. A tiny mock object floating inside a large empty container is not product drama.
## 8.5 Magazine rhythm
Create compression and release:
- dense -> open,
- contained -> full bleed,
- image dominant -> type dominant,
- large -> intimate,
- quiet -> signature -> quiet.
Do not repeat identical section geometry down the page.
## 8.6 Repetition vs variation
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
## 8.7 Optical alignment
Align what looks correct, not only what measures equally.
Consider cap height, image visual center, punctuation, optical margins, and irregular silhouettes.
## 8.8 Mobile is recomposition
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

# 9. MOTION ENGINE
Choose a physical language before effects.
## 9.1 Motion roles
Every nontrivial animation should serve:
- hierarchy,
- feedback,
- continuity,
- state transition,
- storytelling,
- orientation,
- atmosphere.
If its only reason is `looks cool`, remove it unless the brief is explicitly experimental.
## 9.2 Motion character
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
## 9.3 Motion scale
- **micro**: button, hover, focus, toggle,
- **component**: card, gallery, menu, modal,
- **section**: reveal, pin, chapter transition,
- **page**: narrative choreography.
Most projects need many quiet micro interactions, a few component transitions, and at most one strong section/page signature.

## 9.4 Route motion by surface class
- **APP:** stateful motion first — selection/current item, play/pause, content/artwork transitions, panel/queue open-close, reorder, hover/focus, loading/progress. Scroll reveal is not a default app motion system.
- **CAMPAIGN / EDITORIAL:** viewport choreography may carry narrative if it does not hide content or repeat mechanically.
- **IMMERSIVE:** input-coupled spatial/material response may dominate with legibility, performance, and fallback.
If motion makes the product feel like a slideshow, route it again.

## 9.5 Mobbin-like polish
Prioritize:
- spatial continuity,
- immediate feedback,
- clear state change,
- restrained distance,
- consistent springs/easing,
- no unnecessary delay,
- no animation that blocks the next action.

### Wrong motion is worse than no motion
Do not add an interaction merely because the skill mentions that class of effect. A subtle static response is preferable to a conspicuous gimmick.
- Global cursor-follow glows/spotlights are **off by default**.
- Pointer-driven light is allowed only when it plausibly represents local material response and remains visually subordinate; it must not look like a flashlight beam.
- Parallax/depth needs separable visual planes, crop room, and a narrative reason. A gradient moving under the cursor is not depth.
- Use foreground/midground/background, scale differential, overlap, blur/shadow, and real photographic depth before procedural glow.
- Do not use WebGL/shader merely to make a technology page feel technological.

### Prefer content-coupled motion over decorative motion
When a product/story brief asks for rich dynamic effects and real media exists, prefer motion that changes the viewer's relationship to the content:
- a real product visual persists while chapters/specs change,
- image crop/scale/position evolves with narrative progress,
- detail/angle/colorway/context changes are tied to scroll or selection,
- annotations and comparison evidence appear when relevant.
This creates depth and continuity. It is usually more valuable than a cursor glow, floating particles, or unrelated hover spectacle.

## 9.6 Motion claimed = motion shipped
If the chosen `motion_behavior` is non-static and the environment supports interaction, the rendered result must visibly demonstrate it.
As a practical baseline, deliver at least:
- one meaningful section/content transition, and
- one appropriate microinteraction or continuity response,
unless the brief is intentionally static, reduced-motion is active, or the platform cannot support it.
Do not describe parallax, magnetic behavior, reveal choreography, or spatial continuity in prose without implementing it.
Do not compensate by animating every element.

## 9.7 Viewport reveal lifecycle
For decorative, atmospheric, editorial, or storytelling reveals, **replay is the default** when the element fully exits and later re-enters the viewport. A one-shot `once: true` reveal is not the default.
For PRODUCT / UTILITY APP, viewport reveal is usually unnecessary and should not be applied to ordinary lists, controls, library items, settings, tables, or core content merely to make the app feel animated.
Use hysteresis so scrolling near a threshold does not flicker:
- enter around 15% visible (tune to composition),
- do not remove the visible state while meaningful content remains on screen,
- reset only after fully out of view, preferably with a short grace period (~300-400ms).
Scrolling back should restore the choreography rather than leave the page permanently inert.
Exceptions: animations representing completed user state, progress, acknowledgement, purchases, onboarding, or other semantic state changes may remain one-shot.
Prefer varied but coherent reveal mechanics derived from composition; do not repeat the same generic fade-up on every section.

## 9.8 Signature motion
Choose at most one primary memorable motion idea unless the brief explicitly calls for an experimental site.
Everything else supports it.
## 9.9 Technology routing
Use the lightest capable tool:
- CSS for simple states,
- Motion for component/spring interaction,
- CSS scroll-driven animation for simple scroll relationships when suitable,
- GSAP/ScrollTrigger for deliberate complex choreography,
- Canvas/WebGL only for graphics that need per-frame rendering.
Do not import a heavy library to animate opacity.
## 9.10 Continuous input
For pointer/scroll values:
- avoid React state per frame,
- prefer transforms/opacity,
- use motion values, CSS variables, or animation-system state,
- clean up observers/timelines/RAF,
- degrade on coarse pointers and reduced motion,
- never replace the native cursor,
- do not hijack native scroll by default.

---

# 10. COHERENCE PASS
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
8. Are micro-labels/captions carrying real information rather than performing a style?
9. Did the palette emerge from this subject, or from a habitual category default?
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

# 11. IMPLEMENTATION
## 11.1 Respect the project
Before adding packages:
- inspect stack/dependencies,
- reuse existing design systems when appropriate,
- do not force React/Next/Tailwind/GSAP onto a different project,
- avoid mixing unrelated design systems.
## 11.2 Separate concerns
Separate:
- static structure,
- interactive leaves,
- animation logic,
- media,
- theme tokens.
Continuous animation/pointer logic should not rerender the entire page.
## 11.3 Implementation follows evidence
Do not let an available code trick choose the design. Real assets, brand language, and content structure must already be established before interaction implementation begins.
The single-file test build intentionally avoids flashy effect recipes because examples inside the prompt can become accidental aesthetic priors. Implement selected effects from first principles or the project's existing stack.

## 11.4 Functional Surface Gate
For PRODUCT / UTILITY APP, do not present a visual mock as a finished app unless the primary loop works.
- Every visible control works, is clearly disabled, or is omitted.
- Navigation, selection/current state, progress/volume/search/filter/queue stay synchronized when shown.
- Loading/empty/error states exist when relevant.
- Keyboard/focus behavior does not break the primary task.

Backend limitation does not authorize category mutation. Use mock/demo data or sample/local/synthetic media **behind a normal product UI**. Do not redefine a requested music service as a generative-audio experiment unless requested.

## 11.5 Complexity ROI
Do not spend disproportionate effort on a synth, shader, 3D scene, or physics system while IA, media, controls, spacing, or responsive states remain mediocre.
Custom complexity must materially improve the primary loop. Code volume is not quality.

## 11.6 Software/product visuals
Priority:
1. real screenshot,
2. actual live/minified component preview,
3. clearly conceptual generated visual,
4. no screenshot.
Do not present decorative div rectangles as a real product interface.
For app-like work, the interface itself is evidence: implement the actual interaction structure instead of drawing a beautiful but inert depiction of an app.

---

# 12. CONTENT ENGINE
## 12.1 Truth classes
Every factual claim is:
- user-provided,
- verified-public,
- inferred-nonfactual,
- placeholder/sample.
Do not mix these invisibly.
## 12.2 Richness from dimensions
A complete page covers the dimensions that matter, not many paragraphs.
For promotional work, every major section should earn its space through at least one of: verified information, authentic media, useful comparison, meaningful interaction, or concrete conversion value. Generic slogans alone do not make a section.
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
## 12.3 No fake precision
Never invent dimensions, performance numbers, prices, percentages, awards, customer counts, dates, testimonials, materials, or technical capabilities.
Unknown information is omitted, researched, or labeled sample.
## 12.4 Copy register
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
For PRODUCT / UTILITY APP, default visible UI copy to concise functional language. Do not turn track names, menus, controls, empty states, or navigation into literary editorial prose unless the product concept explicitly calls for it.

---

# 13. PRODUCTION QUALITY
## 13.1 Responsive media
Images must reserve layout space and deliver appropriate sources/crops.
Use responsive images and art-directed crops when supported.
Do not send huge desktop media to small phones without reason.
## 13.2 LCP
Identify likely largest above-fold media and load it intentionally.
Do not lazy-load the LCP image.
Lazy-load noncritical below-fold media.
## 13.3 Motion performance
Prefer transform/opacity.
Avoid layout-thrashing animation.
Use `will-change` sparingly.
Canvas/WebGL needs static fallback and should pause/simplify when not visible.
## 13.4 Reduced motion
Nontrivial motion must respect `prefers-reduced-motion`.
Parallax, magnetic physics, looping animation, scroll choreography, and shader motion reduce to static/simple state changes.
## 13.5 Accessibility
At minimum:
- semantic structure,
- meaningful alt handling,
- keyboard navigation,
- visible focus,
- readable contrast,
- form labels,
- adequate targets,
- no essential hover-only meaning.

## 13.6 Control geometry and icon optics
- Give icon buttons stable hit boxes (normally ~40–44px for primary touch targets).
- Center with grid/flex; SVGs need explicit size, valid `viewBox`, and `display:block`.
- Normalize adjacent icon weight; center by eye, not only bounding box. Play triangles often need a tiny positive-X optical offset.
- Verify transport/menu/close/mute icons at rendered size; no baseline-drifting glyphs/emoji as final icons.

## 13.7 Runtime and progressive-enhancement safety
Before delivery: parse/check JavaScript where possible, inspect console errors, smoke-test the primary loop, resize/mobile, and relevant empty/failure states.
Critical content is visible by default. Initialize reveal/animation controllers **before** applying any global class that hides pre-animation content. One syntax/runtime error must not turn the product blank.

## 13.8 SEO/social
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

# 14. REDESIGN
## 14.1 Audit first
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
## 14.2 Preserve identity
Do not silently change:
- logo,
- URL structure,
- legal copy,
- critical form fields,
- primary navigation meaning,
- real product facts.
## 14.3 Modernize in leverage order
1. typography/hierarchy,
2. spacing/grid,
3. media quality/crop,
4. color calibration,
5. motion layer,
6. section recomposition,
7. structural replacement only when needed.

---

# 15. COMPACT ANTI-SLOP
These are recurring failure modes, not an aesthetic.
Avoid by default:
- automatic AI-purple/blue tech glow,
- centered hero over generic mesh gradient,
- three equal feature cards,
- glass on every surface,
- giant meaningless H1,
- text-only fake minimalism,
- eyebrow label above every section,
- decorative editorial micro-metadata with no information job,
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
- prestige copy that says nothing,
- utility apps redesigned as editorial “listening rooms” / showcases without user request,
- giant dead-space app screens that feel like presentation slides,
- fake fidelity/status badges that imply capabilities the demo does not actually have,
- repeated procedural placeholder art in a media-centric product when richer media is feasible.
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

# 16. RENDER CHECK BEFORE REVIEW
Inspect the actual rendered product, not only code. Before claiming completion, verify:
- the requested **surface class is visually obvious**,
- the primary user task can begin without hunting through a showcase,
- mature-category expectations were not silently discarded,
- meaningful media/content actually loaded and the interface feels inhabited,
- real assets actually loaded when the subject is real,
- wide-screen composition is not trapped in a narrow centered box or dominated by dead space,
- app-like work does not look like a sequence of presentation slides,
- controls/icons are optically centered and consistent,
- no syntax/runtime error breaks initial rendering or interaction,
- core controls/state changes really work,
- depth comes from meaningful layering rather than cursor glow,
- motion matches the surface class and is visible but not distracting,
- copy contains concrete substance rather than prestige filler,
- mobile crops/order/navigation still make sense.
If the rendered result looks generic, synthetic, category-wrong, broken, or obviously less usable than mature category products, revise before presenting it.

# 17. FINAL REVIEW - SEVEN GATES
Inspect the rendered result where possible. Do not mechanically claim success. Run the gates internally and revise failures; do not print a gate table unless the user asks for the audit.
## Gate 1 - Truth / Freshness / Evidence
- Facts/claims sourced or user-provided?
- Freshness-sensitive release status/spec/availability checked against a current official source rather than model memory?
- Real products/people/places represented honestly?
- For a real promotional subject, were available first-party research and real assets actually used?
- No retrieval failure was converted into a false “unreleased / unavailable / no official imagery” claim?
- Generated media not pretending to be evidence?
- Requested history/competition claims backed by real sources?
## Gate 2 - Surface Fit / Art Direction / Brand Fidelity
- Is this the kind of product/surface the user actually asked for?
- Was a utility product accidentally turned into a campaign, editorial story, or art experiment?
- If this is a mature category, does its information architecture respect current user expectations while remaining visually original?
- Can the user identify the primary task and current state in the first viewport?
- Image, color, type, material, shape, motion in one visual world?
- One clear thesis?
- For a real brand, does the result inherit or intentionally reinterpret actual brand language rather than generic category styling?
- Still fits the brief rather than only the preferred taste?
- Every named parallel facet has concrete evidence; visually important facets have visual evidence?
- Palette was selected from subject-driven comparison rather than category reflex?
## Gate 3 - Hierarchy
- Primary idea obvious in first viewport?
- One dominant priority per major viewport?
- Secondary/tertiary content quieter?
## Gate 4 - Originality
- Obvious AI-template signatures avoided?
- Repeated section geometry controlled?
- Signature moment specific to this content?
## Gate 5 - Function / Motion / Interaction
- Does the primary user loop actually work?
- Are visible controls functional, intentionally disabled, or omitted rather than fake?
- Are current/selected/playing states synchronized across the UI?
- Are control icons optically centered and consistent?
- Coherent physical character?
- Major animations serve a role appropriate to the surface class?
- PRODUCT / UTILITY APP motion is primarily stateful rather than scroll-showcase choreography?
- Pointer, touch, keyboard, reduced-motion behavior valid?
- Non-static motion was actually implemented rather than only described?
- Decorative viewport reveals replay cleanly after full exit/re-entry when appropriate?
- Any pointer-follow effect materially improves the design rather than acting as a flashlight/gimmick?
- Depth is built from meaningful planes/layering, not just glow?
## Gate 6 - Responsive/Accessible
- Mobile recomposed rather than shrunk?
- Crops/text/controls remain usable?
- Accessibility basics pass?
## Gate 7 - Production / Asset Reality
- JavaScript parses and the browser console is free of uncaught errors?
- Critical content remains visible if enhancement code fails?
- Primary controls were smoke-tested in the rendered result?
- Real/remote images actually load in the rendered result?
- If this is a real-subject promotion, is the authentic subject visibly present in the hero/first major visual?
- For a multi-section real-product promotion, are supporting authentic media present when publicly obtainable?
- If authentic media is publicly available but the final render has none, FAIL and revise; placeholders do not pass this gate.
- Image sizes/priorities sensible?
- Layout shifts controlled?
- Animation costs controlled?
- Metadata/social cards present when relevant?
- Dependencies justified?
- Required loading/error/empty states handled?
If a gate fails, revise the design. Do not compensate with more decoration.

---

# 18. SUCCESS CONDITION
The skill succeeds when unrelated briefs produce unrelated-looking, **category-correct and usable** interfaces that still share a high quality bar.
If asked, the agent should be able to explain:
- why these images,
- why this color relationship,
- why this layout,
- why this typography,
- why this motion character,
- why the page is coherent,
- what was deliberately not used.
If the same palette, hero, cards, faux-editorial metadata, font trick, motion sequence, or “concept showcase” structure repeats across unrelated prompts, the skill is failing even when each page looks polished.
If an app looks stylish but a mature competitor is obviously easier to understand, denser with useful content, or more trustworthy to operate, the skill is failing the product layer.

---

# APPENDIX A - IMPLEMENTATION SAFETY NOTES
These notes solve production quality, not art direction.

## A1. Responsive media
Reserve intrinsic dimensions; use responsive sources/crops; prioritize the LCP image; lazy-load noncritical media; verify remote assets really load. Framework APIs change, so apply the principle through the installed image system rather than copying stale syntax.

## A2. Neutral icon geometry
Use a stable button box, grid/flex centering, block-level SVGs with explicit dimensions/viewBox, and optical correction when glyph geometry demands it. Keep the treatment visually neutral; the art direction decides color, border, radius, and motion.

---

# V3.4 TEST EMPHASIS
For random evaluation, judge the rendered result especially on:
1. Did the agent classify the surface correctly before styling?
2. For a mature interaction category, did it benchmark current strong products when tools allowed and extract interaction invariants rather than copy a skin?
3. Did the final UI preserve the requested product meaning, or mutate it into an easier art/demo concept?
4. Can the primary user task start quickly and continue through a coherent product loop?
5. Does the first viewport feel inhabited, useful, and category-correct rather than empty/PPT-like?
6. For media-centric products, is the media/content layer convincing enough to carry the experience?
7. Is motion routed correctly: stateful for apps, narrative for editorial/campaign, spatial for immersive work?
8. Are visible controls functional and are icons optically aligned?
9. Did the agent avoid spending disproportionate complexity on synth/shader/3D effects while basic UI remained weak?
10. Does JavaScript parse, does the console remain clean, and does critical content stay visible if enhancement code fails?
11. For named real-world subjects, did freshness/evidence/asset gates still work?
12. Against a mature category reference, would the interface plausibly feel premium rather than merely “designed”?
