# Spatial Media & 3D — Decision and Execution Guide

This reference exists to prevent two opposite failures:

1. **fake spatiality** — flat assets are pushed into large pseudo-3D motion that exposes their lack of geometry or material truth;
2. **technical timidity** — the agent avoids true 3D/WebGL/spatial rendering even when the product or concept clearly benefits from it.

The goal is not “more 3D”. The goal is the **right spatial fidelity**.

---

## 1. Treat 3D as a first-class design medium

3D is not merely an effect category. It can be the dominant medium, just like photography, typography, video, illustration, or product UI.

Strong reasons to choose true 3D include:
- the user needs to inspect form from changing angles;
- material response is central to desire or understanding;
- the product is configurable or modular;
- assembly, mechanism, interior structure, or component relationship matters;
- spatial environment is itself the story;
- depth/scale/orbit is the signature interaction;
- a simple geometric object can be modeled convincingly in the available time/tooling;
- the user's reference or brief clearly rewards advanced spatial interaction.

Do not reject true 3D simply because it is harder than CSS.

---

## 2. Spatial-mode ladder

Choose one primary mode and optional supporting modes.

### Mode A — 2D
Use when identity is carried by photography, typography, illustration, information, or product UI rather than spatial manipulation.

### Mode B — 2.5D interface depth
Use perspective, tilt, layered transforms, parallax, light response, and depth shadows on abstract interface surfaces.

Excellent candidates:
- technical modules;
- dashboards;
- feature cards;
- posters;
- media panels;
- diagrams;
- UI windows;
- data objects.

These surfaces may be flat by nature; pseudo-3D interaction can still create legitimate tactile feedback.

### Mode C — Hybrid spatial composition
Combine 2D media and true spatial layers:
- a real product render floating over editorial photography;
- 3D type/object plus 2D content;
- depth-mapped photography;
- foreground 3D particles constrained to a meaningful physical/material system;
- camera movement linking rendered object and page narrative.

### Mode D — True runtime 3D
Use actual geometry, materials, camera, and lighting when users are invited to inspect or manipulate volume.

### Mode E — Pre-rendered / multi-view 3D
Use offline-rendered turntables, image sequences, rendered angle sets, or path-traced stills when runtime 3D is unnecessary, too costly, or unsupported.

---

## 3. Representation–Interaction Fidelity

The interaction should not claim more dimensional truth than the representation can sustain.

### Abstract UI object
A flat UI card can tilt strongly because it is not pretending to be a hidden three-dimensional consumer product.

Allowed when coherent:
- `rotateX/rotateY`;
- perspective;
- parallax layers;
- light-follow response;
- z-separation;
- magnetic movement;
- spring/damping.

### Physical object represented by a single 2D image/render
Allowed:
- subtle camera drift;
- local light response;
- small-angle tilt;
- shadow movement;
- foreground/background parallax;
- crop/scale motion.

Risky:
- large yaw/pitch rotation;
- fake side surfaces;
- fake glass refraction inconsistent with the image;
- lighting that changes as if geometry existed when it does not.

### Physical object whose form/material is the experience
Prefer:
- real 3D geometry;
- a high-quality GLB/GLTF or equivalent asset;
- procedural geometry when the object is simple enough;
- multi-angle product imagery;
- turntable sequence;
- pre-rendered path-traced views.

Decision question:
> When movement begins, does the interaction increase credibility or reveal the trick?

If it reveals the trick, lower the spatial claim or upgrade the asset.

---

## 4. 3D opportunity scan during DIRECT

Before settling on a purely 2D art direction, ask:

- Is the subject a physical product with meaningful form/material?
- Would rotation, orbit, exploded view, configuration, assembly, or spatial comparison improve understanding?
- Is there a simple procedural geometry route?
- Is a credible model already available or obtainable?
- Would one strong 3D signature moment outperform many decorative 2D effects?
- Does the target device/browser support it with a graceful fallback?

If several answers are yes, true 3D should be considered seriously rather than automatically deferred.

---

## 5. Quality bar for true 3D

A high-end 3D result depends more on art direction than polygon count.

Prioritize:
1. **Geometry / silhouette** — proportions and recognizable form.
2. **Materials** — roughness, metalness, transmission, clearcoat, anisotropy, subsurface or refraction only when materially relevant.
3. **Lighting** — environment, key/fill/rim, reflections, contrast, and product readability.
4. **Camera** — focal length, framing, orbit constraints, composition, and transition to surrounding UI.
5. **Interaction** — damping, inertia, pointer/touch mapping, limits, discoverability.
6. **Integration** — typography and CTA must still belong to the same composition.
7. **Performance** — loading, DPR, texture sizes, geometry complexity, offscreen pausing.
8. **Fallback** — poster image, pre-rendered turntable, or strong static product render.

A bad 3D model with flat lighting is not more premium than excellent photography.

---

## 6. Rendering ambition

Use physically based rendering and credible lighting/material response when appropriate.

Possible implementation families include, depending on the host stack and available tools:
- CSS 3D / DOM transforms for 2.5D UI;
- SVG/Canvas for graphic spatial systems;
- WebGL/WebGPU for real-time rendering;
- a mature scene graph / 3D framework when available;
- web-native model viewers for product inspection;
- generated or acquired GLB/GLTF assets;
- procedural geometry;
- pre-rendered multi-angle or turntable sequences.

Do not install a heavy framework only to rotate one rectangle. Do not avoid a mature 3D framework when the experience genuinely requires a scene, materials, camera, lighting, and input handling.

### About ray tracing / path tracing
Do not use “ray tracing” as a marketing label for bloom, gradients, or ordinary reflections.

For the web target:
- physically based materials + environment lighting are a strong baseline;
- use real-time path tracing / advanced ray-based rendering only when the available runtime can support it responsibly;
- otherwise use offline/path-traced product renders, baked reflections, lightmaps, or progressive enhancement to achieve high-end material fidelity.

The visual claim must match the actual rendering method.

---

## 7. Mobile and fallback

If runtime 3D is used:
- cap device pixel ratio when needed;
- simplify geometry/materials on constrained devices;
- reduce texture resolution appropriately;
- pause rendering when offscreen;
- avoid continuous high-cost animation when no interaction is occurring;
- provide touch orbit/drag behavior;
- preserve the primary CTA outside the canvas when sensible;
- respect reduced motion;
- provide a credible static fallback.

Do not make the entire product inaccessible because a 3D engine fails to initialize.

---

## 8. Review questions

Before delivery, inspect the rendered scene and ask:
- Is 3D solving a content/product problem or merely signaling technical ambition?
- Does the object look more convincing while moving than while static?
- Are material and lighting quality sufficient for the category?
- Does the 3D moment dominate too much of the page?
- Does the rest of the layout remain composed rather than becoming a shell around a demo scene?
- Is the fallback still visually authored?
- Are 2.5D interactions on flat UI surfaces adding tactility without confusing them with real objects?

The ideal system can use **true 3D where spatial truth matters** and **2.5D where tactile interface depth is enough**.
