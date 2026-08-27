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

