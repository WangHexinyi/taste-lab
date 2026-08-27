# V4.3 Spatial Experiment Protocol

## Controlled change
This build is based on V4.2 Portable. The main design-policy change is the treatment of 2D/2.5D/3D spatial media. Other core workflow and taste rules are intentionally kept stable so the benchmark can isolate the effect of the new spatial policy.

## Hypotheses

H1. The agent should no longer interpret “avoid automatic spectacle” as “avoid true 3D”.

H2. Abstract 2D interface modules may still use expressive perspective/tilt/parallax when it improves tactile feedback.

H3. A single-angle 2D physical product should not be rotated so aggressively that the interaction exposes missing geometry.

H4. If a physical product is meant to be inspected for form/material/configuration and the environment supports it, the agent should seriously consider true 3D, multi-view, or pre-rendered 3D instead of defaulting to a CSS fake.

H5. Advanced 3D should remain subordinate to category positioning, hierarchy, media quality, and usability.

## Evidence to collect
- whether `taste-frontend` was passively or actively activated;
- plan / direction showing chosen `spatialMode` and `spatialRole`;
- source files for the spatial implementation;
- desktop + mobile first viewport;
- one close-up screenshot of the spatial product/object;
- 15–30 second recording of pointer/drag/scroll interaction if possible;
- subjective 5-point rating;
- note whether the 3D/2.5D behavior increases or decreases perceived credibility;
- performance or responsiveness issues.

## Do not help the agent during the benchmark
Do not tell it “use Three.js”, “make this 3D”, or “do not use 3D”. The benchmark should test whether the Skill makes the correct media decision itself.
