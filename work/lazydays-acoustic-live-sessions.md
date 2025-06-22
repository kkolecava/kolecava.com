---
layout: default
title: Lazydays Acoustic Live Sessions
permalink: /work/lazydays-acoustic-live-sessions/
---

<div class="container mt-5 pt-5">
  <div class="video-section mb-5">
    <div class="ratio ratio-16x9 mb-3">
      <iframe id="main-video" src="https://www.youtube.com/embed/g9l7EDR4pA4?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0" allowfullscreen></iframe>
    </div>

<div class="d-flex gap-3 mt-2">
  <div class="video-thumb selected" data-video="p0dfUFiLLhk">
    <div class="thumb-wrapper">
      <img src="https://img.youtube.com/vi/p0dfUFiLLhk/0.jpg" class="thumb-image">
      <div class="play-icon">▶</div>
    </div>
  </div>
  <div class="video-thumb" data-video="g9l7EDR4pA4">
    <div class="thumb-wrapper">
      <img src="https://img.youtube.com/vi/g9l7EDR4pA4/0.jpg" class="thumb-image">
      <div class="play-icon">▶</div>
    </div>
  </div>
  <div class="video-thumb" data-video="D32SWctO5aY">
    <div class="thumb-wrapper">
      <img src="https://img.youtube.com/vi/D32SWctO5aY/0.jpg" class="thumb-image">
      <div class="play-icon">▶</div>
    </div>
  </div>
</div>

  </div>

  <div class="credits-section my-5">
    <div class="position-relative mb-4">
      <h6 class="credits-heading text-uppercase fw-normal text-muted mb-2">Credits</h6>
      <hr class="credits-line">
      <div class="credits-line-highlight"></div>
    </div>

    <p class="mb-2"><strong>Client:</strong> Lazydays Festival</p>
    <p class="mb-2"><strong>Camera Operator:</strong> Karol Kolecava</p>
    <p class="mb-2"><strong>Camera Assistant:</strong> Rob Humm</p>
    <p class="mb-2"><strong>Colour:</strong> Karol Kolecava</p>
  </div>

  <div class="row g-4">
    <div class="col-md-4 project-tile"><img src="{{ site.baseurl }}/assets/gifs/mabes_001.gif" class="grid-image" alt="GIF 1"></div>
    <div class="col-md-4 project-tile"><img src="{{ site.baseurl }}/assets/gifs/leowalrus_002.gif" class="grid-image" alt="GIF 2"></div>
    <div class="col-md-4 project-tile"><img src="{{ site.baseurl }}/assets/gifs/franlusty_003.gif" class="grid-image" alt="GIF 3"></div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const thumbs = document.querySelectorAll('.video-thumb');
    const iframe = document.getElementById('main-video');

    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        const videoId = thumb.getAttribute('data-video');
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0`;

        thumbs.forEach(t => t.classList.remove('selected'));
        thumb.classList.add('selected');
      });
    });
  });
</script>
