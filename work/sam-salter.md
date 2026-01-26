---
layout: default
title: Sam Salter Editorial
permalink: /work/sam-salter/
---

<div class="container mt-5 pt-5">
  <div class="video-section mb-5">
    <div class="ratio ratio-16x9 mb-3">
      <iframe id="main-video" src="https://www.youtube.com/embed/vWXJadko7uw?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0" allowfullscreen></iframe>
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
    <p class="mb-2"><strong>Creative Director:</strong> Jack Chipper</p>
    <p class="mb-2"><strong>Director of Photography:</strong> Karol Kolecava</p>
    <p class="mb-2"><strong>Editor/Colour:</strong> Karol Kolecava</p>
  </div>

  <div class="row g-4">
    <div class="col-md-4">
      <video class="grid-image" autoplay loop muted playsinline>
        <source src="{{ site.baseurl }}/assets/webm/sam_001.webm" type="video/webm">
      </video>
    </div>
    <div class="col-md-4">
      <video class="grid-image" autoplay loop muted playsinline>
        <source src="{{ site.baseurl }}/assets/webm/sam_002.webm" type="video/webm">
      </video>
    </div>
    <div class="col-md-4">
      <video class="grid-image" autoplay loop muted playsinline>
        <source src="{{ site.baseurl }}/assets/webm/sam_003.webm" type="video/webm">
      </video>
    </div>
    <div class="col-md-4">
      <video class="grid-image" autoplay loop muted playsinline>
        <source src="{{ site.baseurl }}/assets/webm/sam_004.webm" type="video/webm">
      </video>
    </div>
    <div class="col-md-4">
      <video class="grid-image" autoplay loop muted playsinline>
        <source src="{{ site.baseurl }}/assets/webm/sam_005.webm" type="video/webm">
      </video>
    </div>
    <div class="col-md-4">
      <video class="grid-image" autoplay loop muted playsinline>
        <source src="{{ site.baseurl }}/assets/webm/sam_006.webm" type="video/webm">
      </video>
    </div>
    <div class="col-md-4">
      <video class="grid-image" autoplay loop muted playsinline>
        <source src="{{ site.baseurl }}/assets/webm/sam_007.webm" type="video/webm">
      </video>
    </div>
    <div class="col-md-4">
      <video class="grid-image" autoplay loop muted playsinline>
        <source src="{{ site.baseurl }}/assets/webm/sam_008.webm" type="video/webm">
      </video>
    </div>
    <div class="col-md-4">
      <video class="grid-image" autoplay loop muted playsinline>
        <source src="{{ site.baseurl }}/assets/webm/sam_009.webm" type="video/webm">
      </video>
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
