# Phase 2 Reception Examples

## Purpose

This document collects examples for Phase 2 reception.

Phase 2 is not implementation yet.

It is a research space for studying:

- attention preservation
- viewpoint preservation
- experiential field preservation

---

## Core Question

Does the response preserve what the user was attending to?

---

## Example 1

Input:

窓の外は雨

Weak response:

雨が降っているんですね。

Issue:

This sounds natural,
but it removes the user's viewpoint:

- 窓の外

Candidate response:

窓の外の雨に目が向いているのですね。

Potential Benefit:

* preserves viewpoint
* attempts attention preservation

Potential Risk:

* infers attention
* may introduce interpretation

---

## Example 2

Input:

隣のビルが解体中。音がうるさい。

Weak response:

その音の中で、何か別の感覚が目を覚ましましたか？

Issue:

This adds poetic meaning.

Better response:

隣のビルの解体音が、かなり響いているのですね。

Preserved:

- neighboring building
- demolition
- loudness
- immediate disturbance

Potential Question:

Does the response preserve disturbance?

Or does it merely restate the situation?

The distinction between:

* situation preservation
* experience preservation

remains unclear.


---

## Example 3

Input:

雨が降ってきた

Weak response:

湿った空気が漂い、地面がしっとりと濡れていく。

Issue:

This adds atmosphere not given by the user.

Better response:

雨が降ってきたのですね。

Preserved:

- rain started
- no added atmosphere

---

---

## Example 4

Input:

今日は疲れた

Candidate response:

今日は疲れたのですね。

Observation:

This preserves language.

However, it may not preserve attention.

Open Questions:

* What was the user attending to?
* Is fatigue the focus?
* Is the day itself the focus?
* Is simple preservation sufficient?

Research Question:

Can a response preserve experience without inferring hidden meaning?

---

## Phase 2 Evaluation

A Phase 2 response should be evaluated by:

- Did it preserve the user's attention?
- Did it preserve viewpoint?
- Did it avoid new objects?
- Did it avoid poetic inflation?
- Did it avoid interpretation before reception?

---

## Current Status

Phase 2 is exploratory.

Do not change `reception.ts` yet.

---

## Example Review

Phase 2 examples should be reviewed carefully.

A response may appear receptive while still introducing interpretation.

Example:

Input:

窓の外は雨

Response:

窓の外の雨に目が向いているのですね。

Potential Issue:

The phrase:

"目が向いている"

was not explicitly provided by the user.

This may represent interpretation rather than preservation.

Open Question:

Can attention be preserved without inferring attention?

This question remains open.

---

## Emerging Question

A response may preserve attention.

A response may also infer attention.

These are not necessarily the same thing.

Example:

Input:

窓の外は雨

Response:

窓の外の雨に目が向いているのですね。

This may preserve attention.

It may also infer attention.

Future Phase 2 research should distinguish between:

* attention preservation
* attention inference

The boundary between these remains unclear.

