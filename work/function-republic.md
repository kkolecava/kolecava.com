---
layout: default
title: Function Republic Live
permalink: /work/function-republic/
---

<div class="container mt-5 pt-5">
  <div class="video-section mb-5">
    <div class="ratio ratio-16x9 mb-3">
      <iframe id="main-video" src="https://www.youtube.com/embed/Ha7aWdZad28?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0" allowfullscreen></iframe>
    </div>

<div class="d-flex gap-3 mt-2">
  <div class="video-thumb selected" data-video="Ha7aWdZad28">
    <div class="thumb-wrapper">
      <img src="https://img.youtube.com/vi/Ha7aWdZad28/0.jpg" class="thumb-image">
      <div class="play-icon">▶</div>
    </div>
  </div>
  <div class="video-thumb" data-video="W9979qvBe0U">
    <div class="thumb-wrapper">
      <img src="https://img.youtube.com/vi/W9979qvBe0U/0.jpg" class="thumb-image">
      <div class="play-icon">▶</div>
    </div>
  </div>
  <div class="video-thumb" data-video="nGV-dSXgckM">
    <div class="thumb-wrapper">
      <img src="https://img.youtube.com/vi/nGV-dSXgckM/0.jpg" class="thumb-image">
      <div class="play-icon">▶</div>
    </div>
  </div>
  <div class="video-thumb" data-video="zBvNDT8gad4">
    <div class="thumb-wrapper">
      <img src="https://img.youtube.com/vi/zBvNDT8gad4/0.jpg" class="thumb-image">
      <div class="play-icon">▶</div>
    </div>
  </div>
  <div class="video-thumb" data-video="TRdp-i9AoCE">
    <div class="thumb-wrapper">
      <img src="https://img.youtube.com/vi/TRdp-i9AoCE/0.jpg" class="thumb-image">
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

  <p class="mb-2"><strong>Client:</strong> Function Republic</p>
  <p class="mb-2"><strong>Director of Photography / Camera Operator:</strong> Joe Simkins</p>
  <p class="mb-2"><strong>Lighting Assist / Camera Operator:</strong> Karol Kolecava</p>
  <p class="mb-2"><strong>Editor/Colour:</strong> Joe Simkins</p>
</div>

<div class="row g-4">
  <div class="col-md-4">
    <video class="grid-image" autoplay loop muted playsinline>
      <source src="{{ site.baseurl }}/assets/webm/functionrep_001.webm" type="video/webm">
    </video>
  </div>
  <div class="col-md-4">
    <video class="grid-image" autoplay loop muted playsinline>
      <source src="{{ site.baseurl }}/assets/webm/functionrep_002.webm" type="video/webm">
    </video>
  </div>
  <div class="col-md-4">
    <video class="grid-image" autoplay loop muted playsinline>
      <source src="{{ site.baseurl }}/assets/webm/functionrep_003.webm" type="video/webm">
    </video>
  </div>
  <div class="col-md-4">
    <video class="grid-image" autoplay loop muted playsinline>
      <source src="{{ site.baseurl }}/assets/webm/functionrep_004.webm" type="video/webm">
    </video>
  </div>
  <div class="col-md-4">
    <video class="grid-image" autoplay loop muted playsinline>
      <source src="{{ site.baseurl }}/assets/webm/functionrep_005.webm" type="video/webm">
    </video>
  </div>
  <div class="col-md-4">
    <video class="grid-image" autoplay loop muted playsinline>
      <source src="{{ site.baseurl }}/assets/webm/functionrep_006.webm" type="video/webm">
    </video>
  </div>
  <div class="col-md-4">
    <video class="grid-image" autoplay loop muted playsinline>
      <source src="{{ site.baseurl }}/assets/webm/functionrep_007.webm" type="video/webm">
    </video>
  </div>
  <div class="col-md-4">
    <video class="grid-image" autoplay loop muted playsinline>
      <source src="{{ site.baseurl }}/assets/webm/functionrep_008.webm" type="video/webm">
    </video>
  </div>
  <div class="col-md-4">
    <video class="grid-image" autoplay loop muted playsinline>
      <source src="{{ site.baseurl }}/assets/webm/functionrep_009.webm" type="video/webm">
    </video>
  </div>
  <div class="col-md-4">
    <video class="grid-image" autoplay loop muted playsinline>
      <source src="{{ site.baseurl }}/assets/webm/functionrep_010.webm" type="video/webm">
    </video>
  </div>
  <div class="col-md-4">
    <video class="grid-image" autoplay loop muted playsinline>
      <source src="{{ site.baseurl }}/assets/webm/functionrep_011.webm" type="video/webm">
    </video>
  </div>
  <div class="col-md-4">
    <video class="grid-image" autoplay loop muted playsinline>
      <source src="{{ site.baseurl }}/assets/webm/functionrep_012.webm" type="video/webm">
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