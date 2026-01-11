---
layout: default
title: Gula Vol 1 - Short Film
permalink: /work/sam-salter/
---

<div class="container mt-5 pt-5">
  <div class="video-section mb-5">
    <div class="ratio ratio-16x9 mb-3">
      <iframe id="main-video" src="https://www.youtube.com/embed/XQ-xhePTYqg?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0" allowfullscreen></iframe>
    </div>
  </div>

  <div class="credits-section my-5">
    <div class="position-relative mb-4">
      <h6 class="credits-heading text-uppercase fw-normal text-muted mb-2">Credits</h6>
      <hr class="credits-line">
      <div class="credits-line-highlight"></div>
    </div>

    <p class="mb-2"><strong>Written and Directed:</strong> Victor De Almeida</p>
    <p class="mb-2"><strong>Produced By:</strong> Victor De Almeida</p>
    <p class="mb-2"><strong>Director of Photography:</strong> Archie Guinchard</p>
    <p class="mb-2"><strong>1st AC/Gimbal Operator:</strong> Karol Kolecava</p>
    <p class="mb-2"><strong>Produciton Designer:</strong> Tabitha Odutayo</p>
    <p class="mb-2"><strong>SFX MUA:</strong> Anna Joyce</p>
    <p class="mb-2"><strong>Editor:</strong> Ewa Habdas</p>
  </div>

  <div class="row g-4">
    <div class="col-md-4">
      <video class="grid-image" autoplay loop muted playsinline>
        <source src="{{ site.baseurl }}/assets/webm/gula_001.webm" type="video/webm">
      </video>
    </div>
    <div class="col-md-4">
      <video class="grid-image" autoplay loop muted playsinline>
        <source src="{{ site.baseurl }}/assets/webm/gula_002.webm" type="video/webm">
      </video>
    </div>
    <div class="col-md-4">
      <video class="grid-image" autoplay loop muted playsinline>
        <source src="{{ site.baseurl }}/assets/webm/gula_003.webm" type="video/webm">
      </video>
    </div>
    <div class="col-md-4">
      <video class="grid-image" autoplay loop muted playsinline>
        <source src="{{ site.baseurl }}/assets/webm/gula_004.webm" type="video/webm">
      </video>
    </div>
    <div class="col-md-4">
      <video class="grid-image" autoplay loop muted playsinline>
        <source src="{{ site.baseurl }}/assets/webm/gula_005.webm" type="video/webm">
      </video>
    </div>
    <div class="col-md-4">
      <video class="grid-image" autoplay loop muted playsinline>
        <source src="{{ site.baseurl }}/assets/webm/gula_006.webm" type="video/webm">
      </video>
    </div>
    <div class="col-md-4">
      <video class="grid-image" autoplay loop muted playsinline>
        <source src="{{ site.baseurl }}/assets/webm/gula_007.webm" type="video/webm">
      </video>
    </div>
    <div class="col-md-4">
      <video class="grid-image" autoplay loop muted playsinline>
        <source src="{{ site.baseurl }}/assets/webm/gula_008.webm" type="video/webm">
      </video>
    </div>
    <div class="col-md-4">
      <video class="grid-image" autoplay loop muted playsinline>
        <source src="{{ site.baseurl }}/assets/webm/gula_009.webm" type="video/webm">
      </video>
    </div>
    <div class="col-md-4">
      <video class="grid-image" autoplay loop muted playsinline>
        <source src="{{ site.baseurl }}/assets/webm/gula_010.webm" type="video/webm">
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
