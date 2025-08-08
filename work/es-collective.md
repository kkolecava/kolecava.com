---
layout: default
title: E.S Collective - Launch Party
permalink: /work/es-collective/
---

<div class="container mt-5 pt-5">
  <div class="video-section mb-5">
    <div class="ratio ratio-16x9 mb-3">
      <iframe id="main-video" src="https://www.youtube.com/embed/yv4PSznxr50?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0" allowfullscreen></iframe>
    </div>

<div class="d-flex gap-3 mt-2">
  <div class="video-thumb selected" data-video="yv4PSznxr50">
    <div class="thumb-wrapper">
      <img src="https://img.youtube.com/vi/yv4PSznxr50/0.jpg" class="thumb-image">
      <div class="play-icon">▶</div>
    </div>
  </div>
  <div class="video-thumb" data-video="V-Vv6otEfmw">
    <div class="thumb-wrapper">
      <img src="https://img.youtube.com/vi/V-Vv6otEfmw/0.jpg" class="thumb-image">
      <div class="play-icon">▶</div>
    </div>
  </div>
  <div class="video-thumb" data-video="gquuTFUmR7Q">
    <div class="thumb-wrapper">
      <img src="https://img.youtube.com/vi/gquuTFUmR7Q/0.jpg" class="thumb-image">
      <div class="play-icon">▶</div>
    </div>
  </div>
  <div class="video-thumb" data-video="ZhwyVVG38x4">
    <div class="thumb-wrapper">
      <img src="https://img.youtube.com/vi/ZhwyVVG38x4/0.jpg" class="thumb-image">
      <div class="play-icon">▶</div>
    </div>
  </div>
  <div class="video-thumb" data-video="2TngZmXnNsQ">
    <div class="thumb-wrapper">
      <img src="https://img.youtube.com/vi/2TngZmXnNsQ/0.jpg" class="thumb-image">
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

  <p class="mb-2"><strong>Client:</strong> E.S Collective</p>
  <p class="mb-2"><strong>DoP / Videographer:</strong> Karol Kolecava</p>
  <p class="mb-2"><strong>Models:</strong> Rachel Williams, Zeezy Wright, Milena Sanchez, Sharaye Thomas</p>
</div>

<div class="row g-4">
  <div class="col-md-4">
    <video class="grid-image" autoplay loop muted playsinline>
      <source src="{{ site.baseurl }}/assets/webm/es_001.webm" type="video/webm">
    </video>
  </div>
  <div class="col-md-4">
    <video class="grid-image" autoplay loop muted playsinline>
      <source src="{{ site.baseurl }}/assets/webm/es_002.webm" type="video/webm">
    </video>
  </div>
  <div class="col-md-4">
    <video class="grid-image" autoplay loop muted playsinline>
      <source src="{{ site.baseurl }}/assets/webm/es_006.webm" type="video/webm">
    </video>
  </div>
  <div class="col-md-4">
    <video class="grid-image" autoplay loop muted playsinline>
      <source src="{{ site.baseurl }}/assets/webm/es_004.webm" type="video/webm">
    </video>
  </div>
  <div class="col-md-4">
    <video class="grid-image" autoplay loop muted playsinline>
      <source src="{{ site.baseurl }}/assets/webm/es_005.webm" type="video/webm">
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