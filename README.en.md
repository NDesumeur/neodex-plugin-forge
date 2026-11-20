# Forge

A rhythm game at the forge: a weapon forged in three acts on the music, the blade, the guard then the pommel, each with its own move. Your accuracy picks the metal of each piece, from iron to star, and every new weapon joins your collection. Play the 1200 tracks from the Rythme plugin, or your own music.

*Version française : [README.md](README.md)*

## How to play

- **Act I, the blade**: any key (or a click) when the ingot reaches the anvil; on a **red bar**, hold the key until its end to stretch the blade.
- **Act II, the guard**: pieces come from both sides; strike on the right one (**← or D/F** for left, **→ or J/K** for right, or a click on that half of the screen).
- **Act III, the pommel**: set the falling gems; a **double gem** takes both hands (one key on each side, almost together).
- The **accuracy of each act** picks the metal of its piece: iron, bronze, steel, damascus, mithril or star.
- Six weapon shapes: **36 blades to collect** (shape × blade metal). The three latest weapons rest on the rack.

## Accuracy and points

Notes are judged by how far they are from the right moment: **Perfect** (about ±45 ms), **Good** (±90 ms), **OK** (±140 ms), otherwise a miss.

A note's points rise by 1 % per note of combo, up to double at 100 notes in a row; a miss resets the combo. At the end, accuracy gives a grade: **S** from 95 %, **A** at 90 %, **B** at 80 %, **C** at 70 %, **D** below.

## Songs and difficulty

The **Songs** tab has the 1200 Rythme tracks, in four difficulties (Easy, Normal, Hard, Expert). Each level's difficulty is computed from its notes (density, busy passages), from 1 to 10 stars.

## My music

In **My music**, create a level from an imported **audio file** or a track from your **NeoMusic** library: the game finds its tempo and strong beats and turns them into a level, at the chosen **difficulty** (1 to 10 stars).

## Settings

- Music **volume**.
- **Hit sound**: the sound played on each note you hit, one of 10 (Soft, Clap, Wood, Kick, Crystal, Pop, Hi-hat, Snare, Pluck, Tock) or none. Losing a combo of 10 or more plays a « combo break » sound.
- **Offset** (−300 to +300 ms): it adjusts itself after each game based on your average lateness or earliness; you can also change it by hand.

## Data and sync

Your scores and grades per level and your settings are stored by NeoDex, backed up and synced between your PCs when sync is on.

## Install

In NeoDex: **NeoStore → Discover → Forge → Install**.

Building a plugin: see the [NeoDex SDK](https://github.com/NDesumeur/neodex-sdk).
