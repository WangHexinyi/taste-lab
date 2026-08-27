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

For multi-section expressive surfaces, use this section together with `composition-motion.md`.

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

Track scale, density, alignment, media ratio, container behavior, reading width, vertical tempo, and interactive state across the full page. A centered max-width grid may be a useful shell, but it should not become a prison for every major section.
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

## 5.5 DEPTH / SPATIAL MEDIA ENGINE

Depth should create spatial hierarchy, material credibility, continuity, or meaningful manipulation.

### Choose a spatial mode deliberately
Do not treat “2D versus 3D” as a binary quality ranking. Choose the fidelity the interaction actually needs:

1. **2D** — typography, photography, illustration, diagrams, flat UI.
2. **2.5D interface depth** — cards, panels, posters, images, or interface surfaces using perspective, parallax, tilt, layered shadows, local highlight response, and z-order.
3. **Hybrid spatial composition** — photography/video/2D media composited with 3D objects, depth layers, masks, or camera-like motion.
4. **True 3D** — actual geometry/material/camera/light representation when users need to inspect volume, material, configuration, orientation, or environment.
5. **Pre-rendered / multi-view 3D** — path-traced turntables, image sequences, rendered angles, or depth-aware composites when runtime 3D is unnecessary or too costly.

### Representation–Interaction Fidelity
The interaction must not promise more dimensional truth than the representation can support.

**Abstract interface surfaces**
- cards, dashboards, technical modules, media panels, posters, data objects;
- expressive pseudo-3D tilt/parallax is allowed when it strengthens tactility, hierarchy, or interaction feedback;
- the object does not need to pretend it has a real-world hidden backside.

**2D representations of real physical objects**
- product photos, cut-outs, screenshots, single-angle renders;
- subtle perspective, local highlight, shadow response, parallax, crop drift, or small-angle motion can be excellent;
- avoid large rotations or material claims that reveal missing geometry, impossible side surfaces, fake refraction, or inconsistent lighting.

**Inspectable physical products or environments**
- if the experience asks the user to rotate, orbit, inspect material, configure components, compare angles, or understand spatial construction, prefer true 3D, multi-view imagery, or another representation that can sustain that claim.

Ask:
> When the object moves, does the interaction enrich the illusion or expose that the representation is fake?

If it exposes the fake, either reduce the spatial claim or upgrade the asset.

### Sources of depth
Use combinations of:
- foreground / midground / background;
- scale differential;
- overlap;
- crop;
- lighting and material cues;
- real photographic depth of field;
- controlled shadow/blur;
- sticky/spatial relationships;
- parallax when content structure supports it;
- 2.5D interaction for abstract/UI surfaces;
- true 3D when form/material/spatial manipulation matters.

### True 3D quality bar
A true 3D moment should be judged by:
- silhouette and geometry quality;
- believable scale and proportions;
- material response, roughness, metalness, transmission/refraction when relevant;
- lighting/environment quality;
- camera framing and focal behavior;
- input mapping and motion damping;
- product legibility and CTA hierarchy;
- mobile/touch behavior;
- performance, loading, and fallback.

A technically complex scene with weak lighting/materials can look cheaper than a strong photograph.

### Avoid
- gradient glow pretending to be depth;
- global mouse spotlight;
- random blur blobs;
- glass panels with no material logic;
- large pseudo-3D rotation on flat physical-product art that cannot support the angle;
- 3D added only as proof that the developer knows 3D.

### Validate
Ask both:
> If the glow/blur were removed, would the spatial hierarchy still exist?

and
> Is the chosen spatial fidelity honest for what the user is being invited to inspect or manipulate?

If either answer is no, revise the spatial strategy.

Read `spatial-media.md` for the detailed 3D decision tree, rendering guidance, and fallbacks.

---

## 5.6 MOTION ENGINE

For brand/editorial/cultural/product storytelling surfaces, use this section together with `composition-motion.md`.

### First choose the role

Distinguish ambient, object, state, narrative, and transition motion. Background or object movement does not by itself create reading continuity.
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

### Narrative continuity baseline
For expressive multi-section surfaces, default to a restrained narrative/transition motion baseline unless the category calls for stillness. Do not reduce this to one universal fade-up recipe; select a small motion vocabulary that fits the content.

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

