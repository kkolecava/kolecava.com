---
layout: default
title: Sam Salter Editorial
permalink: /work/sam-salter/
---

<div class="container mt-5 pt-5">
  <div class="video-section mb-5">
    <div class="ratio ratio-16x9 mb-3">
      <iframe id="main-video" src="https://www.youtube.com/embed/vWXJadko7uw?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0" allowfullscreen></iframe>
    </div>

<div class="d-flex gap-3 mt-2">
  <div class="video-thumb selected" data-video="vWXJadko7uw">
    <div class="thumb-wrapper">
      <img src="https://img.youtube.com/vi/vWXJadko7uw/0.jpg" class="thumb-image">
      <div class="play-icon">▶</div>
    </div>
  </div>
  <div class="video-thumb" data-video="kNkEUJud1zU">
    <div class="thumb-wrapper">
      <img src="https://img.youtube.com/vi/kNkEUJud1zU/0.jpg" class="thumb-image">
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

    <p class="mb-2"><strong>Client:</strong> Sam Salter</p>
    <p class="mb-2"><strong>Director of Photography:</strong> Karol Kolecava</p>
    <p class="mb-2"><strong>Editor/Colour:</strong> Karol Kolecava</p>
  </div>

  <div class="row g-4">
    <div class="col-md-4 project-tile"><img src="{{ site.baseurl }}/assets/gifs/sam_001.gif" class="grid-image" alt="GIF 1"></div>
    <div class="col-md-4 project-tile"><img src="{{ site.baseurl }}/assets/gifs/sam_002.gif" class="grid-image" alt="GIF 2"></div>
    <div class="col-md-4 project-tile"><img src="{{ site.baseurl }}/assets/gifs/sam_003.gif" class="grid-image" alt="GIF 3"></div>
    <div class="col-md-4 project-tile"><img src="{{ site.baseurl }}/assets/gifs/sam_004.gif" class="grid-image" alt="GIF 3"></div>
    <div class="col-md-4 project-tile"><img src="{{ site.baseurl }}/assets/gifs/sam_005.gif" class="grid-image" alt="GIF 1"></div>
    <div class="col-md-4 project-tile"><img src="{{ site.baseurl }}/assets/gifs/sam_006.gif" class="grid-image" alt="GIF 2"></div>
    <div class="col-md-4 project-tile"><img src="{{ site.baseurl }}/assets/gifs/sam_007.gif" class="grid-image" alt="GIF 3"></div>
    <div class="col-md-4 project-tile"><img src="{{ site.baseurl }}/assets/gifs/sam_008.gif" class="grid-image" alt="GIF 3"></div>
    <div class="col-md-4 project-tile"><img src="{{ site.baseurl }}/assets/gifs/sam_009.gif" class="grid-image" alt="GIF 3"></div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const thumbs = document.querySelectorAll('.video-thumb');
    const iframe = document.getElementById('main-video');

    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        const videoId = thumb.getAttribute('data-video');
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0`;

        thumbs.forEach(t => t.classList.remove('selected'));
        thumb.classList.add('selected');
      });
    });
  });
</script>
