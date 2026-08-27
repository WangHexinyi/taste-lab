---
name: design-taste-frontend
version: 4.1-lite
description: Guided frontend design workflow that raises weak-model execution quality without constraining strong models. It converts briefs into research, assets, art direction, six design decisions, implementation, browser verification, and four blocking quality gates. High-end taste is expressed as relationships and production quality, not fixed palettes or templates.
---

# Taste Skill V4.1 Lite — Guided Design Workflow

> This is not a style template library.
> This is a lightweight design director + workflow controller.
> Judge success by the rendered result, not by how many rules were followed or how much code was written.
> **Standalone test build:** one file only. No external references, recipes, or configuration are required.

---

# 0. OPERATING CONTRACT

## 0.1 The job
Turn a user brief into a coherent, high-quality frontend by controlling **how the work is done**, not by forcing one visual style.

The default workflow is:

`UNDERSTAND -> ACQUIRE -> DIRECT -> SELECT -> BUILD -> REVIEW`

Where:

- **UNDERSTAND** = identify the real product/surface, user goal, content, audience, constraints.
- **ACQUIRE** = gather facts, assets, category references, and evidence when needed.
- **DIRECT** = define one coherent visual/product direction.
- **SELECT** = make six coordinated design decisions: Media, Color, Type, Composition, Depth, Motion.
- **BUILD** = implement the surface and its interactions.
- **REVIEW** = render, inspect, test, and revise through four blocking gates.

Do not begin with effects, colors, fonts, cards, layout patterns, or a favorite aesthetic.

## 0.2 Guided mode vs expert mode
Adapt the strictness to the model's demonstrated capability.

### Guided mode — default for uncertain/weak execution
Use explicit internal checkpoints.
Do not skip blocking stages.
If a gate fails, return to the responsible stage before continuing.
Use available research, image, browser, file, and code tools instead of merely describing what should happen.

### Expert mode — for strong execution
Internal stages may be compressed or combined.
Do not force verbose intermediate output.
The final artifact must still pass the same blocking gates.
Freedom of route does not mean freedom from evidence or quality standards.

Never print hidden workflow objects, candidate palettes, or checklists unless the user asks for rationale.
Spend the output budget on the artifact.

## 0.3 Tool discipline
If a tool can materially improve truth, media quality, implementation, or validation, use it.

Examples:
- real product/company/place/person/event -> browse current first-party sources;
- media-centric surface -> acquire/generate real-looking media assets appropriate to the truth status;
- existing website or mature product category -> benchmark current strong examples;
- code environment with browser -> run, inspect, interact, resize, debug;
- image generation -> use only when generation is the correct medium, not as a substitute for factual evidence.

A written intention to search, render, test, or inspect does not count as performing it.

## 0.4 No category mutation
Implementation difficulty does not authorize changing the user's product into something easier or more artistic.

Examples of failure:
- `online music product -> six generated tracks with no discovery/library`;
- `commerce -> editorial gallery with no purchase flow`;
- `dashboard -> poster-like landing page`;
- `real product launch -> abstract concept page with no product media`.

Preserve the core task even when the backend is mocked.

---

# 1. TASTE GRAMMAR — HOW TO UNDERSTAND “HIGH-END”

## 1.1 High-end is not a style
Do not equate high-end with:
- black + gold,
- off-white + serif,
- glassmorphism,
- giant typography,
- dark tech gradients,
- WebGL,
- excessive empty space,
- tiny editorial metadata.

High-end quality is usually the result of six invariants:

1. **Hierarchy precision** — the user knows what matters first.
2. **Asset quality** — the visual/content material itself is credible and strong.
3. **Coherence** — type, color, image, spacing, motion, and material belong to one world.
4. **Restraint** — quiet areas are intentional; not everything performs.
5. **Continuity** — interaction and state changes feel causally connected.
6. **Production finish** — crop, alignment, icon optics, responsive behavior, motion physics, loading, and typography are polished.

If these six fail, decorative sophistication does not rescue the result.

## 1.2 Translate adjectives into design variables
Treat user words as signals, not answers.

Translate adjectives into relationships across:
- restraint,
- visual density,
- image/media dominance,
- typographic expression,
- spatial depth,
- motion intensity,
- materiality,
- contrast,
- asymmetry,
- editoriality,
- product clarity,
- experimentalism.

Do not literally expose numeric scores unless useful. Use the concept internally.

Example:

`premium + minimal + music product`

may imply:
- high restraint,
- medium content density,
- high product clarity,
- strong media identity,
- restrained interface color,
- subtle layered depth,
- state-driven motion,
- low decorative spectacle.

It does **not** imply black/champagne/serif.

## 1.3 Taste is a tie-breaker
When multiple solutions correctly fit the same task, prefer:
- precise hierarchy,
- confident negative space,
- strong image/type relationships,
- controlled chroma,
- optical alignment,
- material credibility,
- varied but disciplined composition,
- product-grade motion,
- one memorable moment with quiet supporting regions,
- editorial confidence without fake magazine decoration.

Explicit user references, brand truth, product utility, accessibility, and category expectations outrank this taste profile.

## 1.4 Dominant medium principle
Every strong surface should know what primarily carries its identity.

Possible dominant media:
- authentic product photography,
- editorial photography,
- illustration,
- album/cover artwork,
- typography,
- data/information,
- product UI/state,
- 3D/spatial interaction,
- motion itself.

Do not let five media families compete equally.

A useful rule:
> If every layer is trying to be the hero, there is no hero.

## 1.5 Effects must transform content
An effect earns its place when it changes how the user understands, feels, navigates, or manipulates the content.

Weak:
- pointer glow over an otherwise unchanged card,
- particles behind ordinary text,
- hover scale with no product meaning.

Stronger:
- a product rotates to reveal material details,
- album art transforms with track state,
- a story image changes crop/scale as the narrative advances,
- a 3D environment is itself the subject.

If removing an effect leaves the experience unchanged, it is probably decoration.

---

# 2. PHASE A — UNDERSTAND

Do not design before deciding what the user actually asked for.

## 2.1 Internal brief object
Identify internally:

```yaml
surface_class:
goal:
audience:
primary_task:
secondary_tasks:
content_type:
real_or_fictional:
real_entities:
required_facets:
style_intent:
media_dependency:
interaction_dependency:
brand_constraints:
technical_constraints:
```

Do not print this by default.

## 2.2 Surface classifier
Choose the dominant surface:

- **PRODUCT / UTILITY APP** — users repeatedly do something: listen, search, message, edit, manage, create, organize, monitor.
- **MARKETING / CAMPAIGN** — explain, launch, persuade, build desire, communicate brand/product story.
- **EDITORIAL / PUBLICATION** — read, browse stories/media, archive, learn.
- **COMMERCE / CATALOG** — discover, compare, configure, purchase, book.
- **PORTFOLIO / SHOWCASE** — experience a body of work and understand authorship/capability.
- **IMMERSIVE / EXPERIMENTAL** — interaction/spatial behavior is itself the content.
- **HYBRID** — identify which mode dominates each region.

The word `premium`, `minimal`, `luxury`, `cinematic`, or `high-end` never changes the surface class.

## 2.3 Primary user loop
For task-oriented surfaces, define the shortest meaningful loop.

Examples:
- music: `discover/search -> choose -> play -> continue browsing -> manage current play`;
- commerce: `discover -> inspect -> compare/configure -> trust -> purchase`;
- editor: `open -> create/edit -> inspect -> save/export`;
- booking: `search -> evaluate -> choose slot/item -> confirm`.

If the UI does not support the primary loop, visual polish is irrelevant.

## 2.4 Coverage obligations
Every named user requirement becomes a coverage obligation.

For parallel concepts (`nature + people`, `hardware + software`, `heritage + innovation`):
- give each concrete content evidence;
- when media is central, give each visual evidence;
- do not let one facet survive only as hidden reasoning or generic copy.

## 2.4.1 Content provenance mode
Before inventing content, decide which mode applies:

- **REAL CONTENT** — user supplied the actual facts/assets, or they can be verified from authoritative sources. Preserve them.
- **DEMO CONTENT** — the user asks for a finished concept but has not supplied private/personal/project-specific data. Build a convincing demo structure, but clearly treat invented names, dates, metrics, results, awards, credentials, and project details as sample content rather than verified biography.
- **SHELL CONTENT** — exact private content is essential and cannot be inferred safely. Build the design/system with explicit replacement slots instead of fake precision.

Do not confuse “plausible for this category” with “true about this person.”
For portfolio/resume/coursework tasks, exact personal achievements, grades, dates, measurements, project outcomes, accreditation claims, and institutional verification require user data or evidence.

## 2.5 Architecture before decoration
For PRODUCT / UTILITY / COMMERCE surfaces, establish the functional shell before visual choreography.

Determine what must be persistent, searchable, browsable, contextual, stateful, or reversible.

A product app should not become a sequence of poster-like scroll sections merely because that is visually easier.

---

# 3. PHASE B — ACQUIRE

The Acquire phase answers:
> What material do I need before I can design credibly?

It may include research, image acquisition/generation, category benchmarking, and content inventory.

## 3.1 Build a research plan first
Before browsing, decide what must be learned.

Ask:
- Which facts affect the design or copy?
- Which facts are freshness-sensitive?
- Which media assets are needed?
- Which source types can prove them?
- Does this product category have mature interaction conventions worth studying?
- What is missing that must not be invented?

### Bounded acquisition — do not deadlock
Research is a means, not the deliverable.
Use the smallest evidence set that makes the next design decision credible.

Default behavior:
1. one focused research plan;
2. one evidence-gathering pass;
3. one targeted follow-up only for unresolved blockers;
4. then move forward in REAL / DEMO / SHELL mode.

Do not recursively research every plausible detail, benchmark, or visual reference.
A weak model that keeps “thinking/researching” without building has failed the workflow just as surely as a model that skips research.

## 3.2 Real-world research
For real public products, companies, people, places, events, software, technologies, or services, prefer:

1. user-provided material,
2. current official product/site pages,
3. current first-party newsroom/press/media kit/docs,
4. reputable factual sources,
5. licensed/reusable secondary media when appropriate.

Model memory is not enough for freshness-sensitive claims.

Verify current status before claiming:
- unreleased,
- discontinued,
- unavailable,
- current specs/pricing,
- current executives,
- current product generation,
- absence of official imagery.

Asset retrieval failure is not evidence of product nonexistence.

## 3.3 Category benchmark
For mature product categories, use browsing/reference tools when available to inspect at least two current strong products.

Extract **behavioral invariants**, not skins:
- information architecture,
- first-viewport task access,
- persistent regions,
- content density,
- navigation,
- search/discovery,
- current-state treatment,
- control placement,
- contextual panels,
- mobile behavior,
- empty/loading/error states.

Do not copy branding, exact layout, or palette.

## 3.4 Media acquisition logic
Choose the truth class first:

- **Evidence** — exact appearance/existence must be trusted.
- **Experience** — show what use/context feels like.
- **Material** — communicate craft, texture, finish.
- **Explanation** — explain operation/structure.
- **Emotion** — carry atmosphere or campaign feeling.
- **Imagination** — fictional/speculative/abstract content.

Then choose medium:
- official photography,
- real screenshot,
- documentary photo,
- editorial/lifestyle photography,
- macro/detail,
- technical render/diagram,
- illustration,
- generated concept,
- procedural media.

Generated media is not factual evidence.

## 3.5 Media-centric products
For music, video, photography, publishing, travel, social, or commerce, media objects are part of the product data.

A music product without convincing artwork/artist/playlist media is equivalent to a shop without product images.

If the product is fictional:
- source or generate a coherent demo media set when tools allow;
- make distinct items look distinct;
- do not use one procedural SVG/canvas language for every item unless that is the explicit concept.

## 3.6 Asset readiness test
Before Direct, ask:

- Do I have enough truth to write specific content?
- Do I have enough media to make the main visual moments credible?
- Do I know what remains unknown?
- Do I understand the product/category enough to preserve the primary user loop?

For a real multi-section visual product promotion, normally require:
- one authentic hero/overview visual;
- at least two different authentic supporting visuals when publicly available;
- verified concrete product/content facts.

Do not count logos, decorative SVGs, CSS drawings, or blank placeholders as authentic subject media.

If public authentic assets exist and tools can access them, a zero-authentic-media final render fails.

## 3.7 Stop condition
If critical evidence/assets are missing:
- keep researching when tools can resolve it;
- request the missing asset only when tools truly cannot obtain it and the asset is essential;
- otherwise clearly build a scaffold/prototype rather than pretending it is a finished high-fidelity result.

Do not silently solve missing evidence with fake precision.

---

# 4. PHASE C — DIRECT

Now define one coherent visual/product world.

## 4.1 Internal Design Direction
Create privately:

```yaml
dominant_medium:
visual_thesis:
brand_character:
hierarchy_behavior:
density_behavior:
color_behavior:
type_behavior:
composition_behavior:
depth_behavior:
motion_behavior:
signature_moment:
resting_mode:
```

Do not use fixed hex values or named layout templates in this packet.

## 4.2 One dominant idea per viewport
Every important viewport/state gets one primary visual priority:
- media,
- product,
- content,
- task,
- diagram,
- comparison,
- interaction.

Supporting elements should reinforce rather than compete.

## 4.3 Minimal means edited, not empty
Minimalism means reducing competing signals, not deleting useful content.

For information-rich surfaces, use:
- hierarchy,
- chaptering,
- progressive disclosure,
- grouping,
- strong media scale,
- contextual panels,
- tabs/filters when functional,
- controlled density.

Blank space is not automatically luxury.

## 4.4 Editorial means relationship
Editorial quality comes from:
- sequencing,
- image scale/crop,
- rhythm,
- margins,
- asymmetry within structure,
- typography hierarchy,
- meaningful captions/context.

It does not require serif, off-white, issue numbers, PLATE labels, coordinates, or tiny pseudo-metadata.

## 4.5 Immersive means experience
Immersive quality comes from:
- a spatial/interaction thesis,
- coherent input-response behavior,
- strong material/lighting quality,
- continuity,
- legibility and fallbacks.

It does not mean adding shader, particles, pointer glow, or 3D to a conventional page.

## 4.6 Product precision
For utility/product surfaces, high-end means:
- task access is immediate,
- current state is obvious,
- content feels inhabited,
- controls are predictable,
- layout is dense enough to be useful,
- interaction is fast and reversible,
- identity supports the product rather than replacing it.

---

# 5. PHASE D — SELECT

Select six coordinated systems from the Design Direction.
Do not decide each shelf independently.

---

## 5.1 MEDIA ENGINE

### Inputs
- truth requirement,
- dominant medium,
- subject/content,
- category expectations,
- available assets,
- desired emotional effect.

### Decide
For each major visual, determine:
- role: evidence / experience / material / explanation / emotion / imagination;
- source class;
- crop;
- scale;
- shot/view type;
- lighting/finish;
- aspect ratio;
- relationship with type and surrounding UI.

### Prefer
- authentic real media when reality is part of the value proposition;
- distinct high-quality media for distinct content;
- strong crops over tiny decorative thumbnails;
- wide/full-bleed treatment when media is the hero;
- purposeful alternate crops only when honest.

### Avoid
- fake product likenesses when official assets are available;
- tiny product image floating inside a huge empty box;
- media used merely as background texture when it should carry meaning;
- repeated generic stock style across unrelated subjects;
- procedural placeholders becoming the visual identity by accident.

### Validate
Ask:
> If the interface styling disappeared, would the media still make this subject believable and desirable?

---

## 5.2 COLOR ENGINE

### Inputs
- brand evidence,
- product/material colors,
- dominant imagery,
- audience,
- emotional intent,
- accessibility/viewing conditions.

### Decide relationships first
- warm / cool / neutral / mixed;
- low / medium / high chroma;
- soft / medium / hard contrast;
- surface hierarchy;
- text hierarchy;
- accent role;
- whether media or UI carries color.

Then choose actual colors.

### Candidate comparison
When no brand system determines the answer, privately compare 2–3 materially different relationship hypotheses.

Do not compare three near-identical palettes.

### Avoid shortcuts
Never map:
- luxury -> black/gold;
- editorial -> warm paper;
- tech -> blue/purple neon;
- wellness -> sage/beige;
- royal -> purple/gold.

These may be valid outcomes only when derived from the subject.

### Validate
Ask:
- Does the palette belong to this content/brand?
- Is it distinct from generic category styling?
- Does UI support rather than fight the imagery?
- Is contrast sufficient in real use?

---

## 5.3 TYPE ENGINE

### Inputs
- reading vs control density,
- brand character,
- language/script,
- content length,
- media dominance,
- platform constraints.

### Assign roles before fonts
Possible roles:
- display,
- body,
- UI/control,
- metadata/caption,
- numeric/data.

Not every project needs all roles.

### Decide
- personality,
- weight hierarchy,
- width/measure,
- optical size,
- line-height,
- tracking,
- language compatibility.

### Avoid
- serif as automatic luxury;
- uppercase mono microcopy everywhere;
- five type personalities competing;
- tiny text used to simulate sophistication;
- headlines so large that the product/task disappears.

### Microcopy removal test
Delete metadata/captions if removing them loses no real information, navigation, authorship, state, or context.

### Validate
Ask:
> Can the type system explain the hierarchy without relying only on huge size differences?

---

## 5.4 COMPOSITION ENGINE

### Inputs
- surface class,
- primary user loop,
- content hierarchy,
- dominant medium,
- number/relationship of items,
- viewport behavior.

### Functional shell first
For PRODUCT / COMMERCE surfaces, establish task architecture before cinematic composition.

Examples of product regions may include:
- navigation,
- search,
- browse/discovery,
- library/catalog,
- workspace/content view,
- context/queue/inspector,
- persistent current-state controls.

Use only what the task needs.

### Relationship-to-layout mapping
- one proposition + strong asset -> dominant asset with supporting copy;
- sequential explanation -> narrative/sticky sequence;
- comparable items -> grid/table/structured comparison;
- photography-led story -> editorial sequencing and changing scale;
- technical explanation -> annotated media/diagram + supporting text;
- repeated interactive objects -> consistent product grid/list with state.

### Composition rhythm — do not confuse alternation with variation
A page needs a stable grid **and** changing visual pressure.
Do not create variety by mechanically flipping the same module left/right.
`image-left/text-right -> image-right/text-left -> repeat` for many sections is a template tell, not editorial rhythm.

Before implementation, assign major sections/items different compositional roles based on importance and evidence, for example:
- **anchor** — largest visual/content moment;
- **feature** — one project/story receives expanded treatment;
- **support** — compact secondary item;
- **index** — dense scan-friendly list/table/contact sheet;
- **break** — full-width media, quote/data band, timeline, diagram, or deliberate quiet interval;
- **compare** — two or more items shown as a relationship rather than separate cards.

Across a long page, vary at least some of these dimensions intentionally:
- media scale;
- text-to-media ratio;
- column span;
- alignment;
- density;
- crop/aspect ratio;
- grouping (single / pair / cluster / index);
- background/surface treatment only when semantically justified.

Do not vary all dimensions at once. The grid remains stable while emphasis changes.
For repeated collections, allow consistency at the data level while introducing one or two larger anchors and at least one denser overview/index treatment when the content supports it.

### Repetition budget
Three or more consecutive sections using the same composition skeleton require explicit justification.
Two mirrored variants still count as the same skeleton.
If the content hierarchy differs but the geometry does not, redesign the sequence.

### Grid before gesture
Start from alignment, column logic, spacing rhythm, and content relationships.
Then introduce asymmetry, breakout, overlap, or full bleed.

### Reading width is not media width
Keep long text readable, but allow important media/product/interactive surfaces to break out wider when appropriate.

### Anti-PPT rule
A utility surface should not default to:
`large title -> one centered object -> empty space -> next slide-like section`.

### Mobile recomposition
Do not merely scale desktop.
Re-evaluate hierarchy, navigation, media crop, persistent controls, panel order, interaction reach, and density.

### Validate
Ask:
> Does this layout look like a mature instance of its product/content category while still having its own identity?

---

## 5.5 DEPTH ENGINE

Depth should create spatial hierarchy, material credibility, or continuity.

### Sources of depth
Prefer combinations of:
- foreground / midground / background;
- scale differential;
- overlap;
- crop;
- lighting/material cues;
- real photographic depth of field;
- controlled shadow/blur;
- sticky/spatial relationships;
- parallax only when content structure supports it;
- 3D only when spatial manipulation matters.

### Avoid
- gradient glow pretending to be depth;
- global mouse spotlight;
- random blur blobs;
- glass panels with no material logic;
- perspective gimmicks that reduce readability.

### Validate
Ask:
> If the glow/blur were removed, would the spatial hierarchy still exist?

If no, the depth strategy is weak.

---

## 5.6 MOTION ENGINE

### First choose the role
Motion may provide:
- feedback,
- state change,
- continuity,
- hierarchy,
- storytelling,
- navigation,
- atmosphere.

Do not animate without a role.

### Route by surface
**PRODUCT / UTILITY:** state continuity, selection, panel transitions, loading/progress, drag/reorder, play/pause, hover/focus.

**CAMPAIGN:** product/media choreography, narrative transitions, reveal, scroll-linked explanation.

**EDITORIAL:** restrained reveals, image sequencing, typographic cadence, navigation continuity.

**IMMERSIVE:** continuous input-response, spatial/material transformation, controlled camera/world behavior.

### Motion character
Choose a coherent physical language:
- crisp / engineered,
- soft / editorial,
- elastic / playful,
- cinematic / weighted,
- fluid / continuous,
- mechanical / precise.

Do not mix several unrelated motion languages.

### Content-coupled motion
Prefer animation that changes the content or state itself.
Avoid effects that merely decorate containers.

### Wrong motion is worse than no motion
Remove any motion that:
- distracts from the primary task,
- feels like a flashlight or cursor gimmick,
- makes content harder to read,
- lowers perceived quality,
- exists only because a library/template makes it easy.

### Replay behavior
Decorative viewport reveals may replay after fully exiting and re-entering.
Semantic completion/progress/state changes should normally remain stateful rather than replaying.

### Validate
Ask:
> Does the interaction feel better because motion exists, or merely busier?

---

# 6. COHERENCE PASS

Before implementation, check the six systems as one composition.

Ask:
- Does the media quality match the typography ambition?
- Does the palette belong to the media/material?
- Does the composition support the primary task/message?
- Does depth reinforce hierarchy?
- Does motion use the same physical character as the visual system?
- Does every major effect have a role?
- Does the page/app still have quiet regions?

Remove before adding.

Common symptoms of incoherence:
- editorial type + SaaS cards + cyberpunk glow;
- luxury palette + cheap procedural media;
- Apple-like minimal layout + gaming motion;
- immersive background + ordinary product grid fighting for attention;
- beautiful hero + generic repeated sections.

If the systems feel borrowed from different websites, return to Direct.

---

# 7. PHASE E — BUILD

## 7.1 Preserve architecture
Implementation must preserve:
- surface class,
- primary user loop,
- required content facets,
- asset truth,
- design direction.

Do not let technical convenience rewrite the concept.

## 7.2 Complexity ROI
Before writing custom shader, synth, 3D system, physics, or elaborate animation, ask:

> Is the primary architecture, media, hierarchy, controls, and responsive behavior already strong?

If not, fix those first.

Code volume is not quality.
A 300-line polished product can outperform a 2500-line broken experience.

## 7.3 Progressive enhancement
Critical content and controls should remain usable if optional animation/visual effects fail.

Do not hide essential content before confirming the animation runtime initialized successfully.

Decorative failure must degrade to a good static state.

## 7.4 Control quality
For buttons and controls:
- stable hit boxes;
- optical, not only mathematical, centering;
- SVG with explicit viewBox and `display:block`;
- consistent icon stroke/fill weight;
- sufficient touch target;
- visible hover/focus/pressed/disabled states when relevant.

Play triangles often require slight optical correction to the right even inside geometrically centered containers.

## 7.5 Media delivery
For raster media:
- reserve dimensions/aspect ratio to prevent layout shift;
- use responsive sources/sizes when appropriate;
- lazy-load below the fold;
- prioritize true LCP media;
- use deliberate mobile crops;
- verify remote assets actually load.

Do not optimize away visible quality.

## 7.6 Accessibility and reduced motion
Maintain:
- semantic controls,
- keyboard/focus access,
- readable contrast,
- meaningful alt text where applicable,
- reduced-motion fallback,
- non-motion equivalent for important state/information.

Accessibility is part of production finish.

---

# 8. PHASE F — REVIEW

The model must not self-certify from code alone when rendering/testing tools exist.

Use the best available loop:

`RUN -> RENDER -> INTERACT -> INSPECT -> REVISE`

## 8.1 Browser verification
When a browser/runtime is available:
- load the actual result;
- inspect the first viewport;
- scroll/browse the full surface;
- click primary controls;
- test primary user loop;
- resize to mobile/narrow width;
- inspect console/runtime errors;
- verify images/media load;
- verify hover/focus/active states;
- inspect at least one deep state, not only the hero.

Do not declare completion before this pass.

## 8.2 Visual screenshot review
Evaluate the rendered result, not only DOM/CSS correctness.

Ask:
- Is there a clear focal anchor?
- Is important media too small or missing?
- Does the first viewport feel empty without purpose?
- Is layout density appropriate to the surface class?
- Do controls look optically aligned?
- Is there obvious AI-template styling?
- Are multiple sections repeating the same composition?
- Is the “variation” only left/right mirroring of one skeleton?
- Is there a deliberate rhythm of anchor / support / index / break rather than equal-weight modules?
- Does the interface look inhabited with real/convincing content?
- Do motion and depth improve the experience?
- Does this look competitive with strong products/sites in its category?

If the answer is no, revise.

---

# 9. FOUR BLOCKING GATES

These are the only final gates. Keep them strict.

## GATE 1 — CONTENT / ASSETS
Pass only if:
- named requirements are visibly covered;
- real facts are verified when necessary;
- freshness-sensitive claims were checked;
- required media is credible and actually loads;
- generated media is correctly labeled by truth role;
- personal/private/project-specific claims follow REAL / DEMO / SHELL provenance mode;
- no fake precision or invented evidence is presented as real;
- content is specific enough to avoid slogan-only emptiness.

Typical failure:
- real product promotion with no real product imagery despite accessible official assets.

## GATE 2 — ARCHITECTURE
Pass only if:
- the correct surface class was preserved;
- the primary user loop is supported;
- mature product-category expectations were considered when relevant;
- first viewport makes the next action/content/state understandable;
- mobile architecture remains usable;
- implementation did not mutate the user's requested product.

Typical failure:
- online music product turned into a static listening-room exhibition.

## GATE 3 — ART DIRECTION
Pass only if:
- one dominant medium/idea is clear;
- media, color, type, composition, depth, and motion belong to one visual world;
- hierarchy is precise;
- visual quality does not rely on clichés or generic AI styling;
- decorative details do not outnumber meaningful details;
- motion/depth have roles;
- the result feels intentional at both macro and micro scale.

Typical failure:
- dark background + gradient glow + tiny mono labels used as a shortcut for premium technology.

## GATE 4 — DELIVERY
Pass only if:
- code parses/runs;
- primary interactions work;
- no critical console/runtime error remains;
- critical content stays visible when optional effects fail;
- responsive behavior is credible;
- reduced-motion/accessibility fallback exists where relevant;
- controls/icons are visually finished;
- final render was inspected when tools allow.

Typical failure:
- 2000 lines of code with one syntax error that hides the whole page.

If any gate fails, revise before presenting the work as finished.

---

# 10. ANTI-SLOP RULES

These are broad failure detectors, not a design style.

## 10.1 Avoid semantic visual clichés
Do not default to:
- AI purple/blue gradients for technology;
- black/gold for luxury;
- beige/serif for editorial;
- sage for wellness;
- generic dark glass cards for premium apps.

Use them only when derived from real context.

## 10.2 Avoid component soup
Do not fill pages with:
- identical cards,
- excessive pills,
- badges without information value,
- repeated icon-text-feature rows,
- floating glass panels,
- generic dashboard boxes.

A card is not a default container.
If removing the card background/border does not damage grouping, interaction, or comprehension, consider removing it.

Structure should emerge from content relationships.

## 10.2.1 Avoid zig-zag automation
Do not use endless alternating image/text rows as a substitute for composition.
Mirroring the same 7/5 split is repetition, not variety.
Use hierarchy to decide which items deserve wide media, compact index treatment, pairing, clustering, technical annotation, or a deliberate section break.

## 10.3 Avoid fake editorialism
Remove:
- VOL. XX,
- PLATE XX,
- FIELD NOTE,
- fake coordinates,
- pseudo timestamps,
- fake archival IDs,
- meaningless captions,

unless they communicate real information, navigation, state, authorship, or context.

## 10.4 Avoid fake interfaces and fake evidence
Do not fabricate:
- product screenshots,
- testimonials,
- awards,
- customer logos,
- performance charts,
- prices/specs,
- exact statistics,
- real-world product forms.

Mock functional data may be used for fictional/demo products when clearly part of a prototype.

## 10.5 Avoid automatic spectacle
Do not add by default:
- pointer spotlight,
- magnetic buttons,
- shader backgrounds,
- parallax,
- particle systems,
- 3D,
- marquee,
- scroll-jacking.

First prove they support the Design Direction and primary experience.

## 10.6 Avoid empty luxury
Large negative space must serve one of:
- focal emphasis,
- reading rhythm,
- media scale,
- spatial tension,
- interaction state.

If it only makes the page look expensive, it is probably wasted space.

---

# 11. CONTENT QUALITY

## 11.1 Richness comes from dimensions
Content becomes substantial through useful dimensions, not longer paragraphs.

Possible dimensions:
- what it is,
- why it matters,
- how it works,
- history/context,
- use cases,
- comparison,
- proof,
- specification,
- material/process,
- people/authorship,
- limitations,
- next action.

Choose those appropriate to the brief.

## 11.2 Copy register
Match the surface:
- product UI -> concise, state/action-oriented;
- campaign -> clear proposition + proof + desire;
- editorial -> authored, contextual, readable;
- technical -> precise, concrete, non-hype;
- premium -> confident and restrained, not pseudo-poetic by default.

Avoid repeating generic claims such as:
`powerful`, `seamless`, `innovative`, `future`, `immersive`, `premium`
without evidence or concrete meaning.

---

# 12. FINAL EXECUTION SUMMARY

For every task, internally follow this compact loop:

## UNDERSTAND
1. Classify the surface.
2. Define the primary user loop/message.
3. Capture all named requirements.

## ACQUIRE
4. Determine what facts/assets/references are required.
5. Use tools to gather them when available.
6. Do not continue while critical evidence or category understanding is unresolved.

## DIRECT
7. Define one dominant medium and one coherent visual/product thesis.
8. Translate style words into relationships rather than presets.

## SELECT
9. Coordinate Media, Color, Type, Composition, Depth, and Motion.
10. Run the coherence pass.

## BUILD
11. Implement the architecture before spectacle.
12. Use progressive enhancement and production-quality controls/media.

## REVIEW
13. Run/render/interact/inspect when tools allow.
14. Revise until all four gates pass.

The purpose of this Skill is not to make every model produce the same website.
The purpose is to make weak models less likely to skip essential design work, while giving strong models a clear quality bar and route to better judgment.

