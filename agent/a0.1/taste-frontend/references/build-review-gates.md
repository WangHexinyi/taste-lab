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

## 8.0 External QA hook (optional, preferred when available)
If a project/workspace contains `taste-check.mjs`, treat it as the mechanical delivery checker for the final frontend.

After the implementation is runnable, execute:

`node taste-check.mjs <entry-html-or-url>`

- `FAIL` is blocking: fix the reported problem and run the checker again.
- `WARN` requires judgment but is not automatically blocking.
- `PASS` only covers mechanical delivery quality; it does **not** replace visual/art-direction judgment.
- If the checker is absent or cannot run in the current platform, continue with the browser review below.

This hook must never change the requested design direction or turn the task into a tooling exercise.

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

