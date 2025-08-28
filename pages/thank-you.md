---
layout: default
title: Thank You
permalink: /thank-you/
---

<style>
  .reveal{opacity:0;transform:translateY(14px);transition:opacity .6s,transform .6s}
  .reveal.show{opacity:1;transform:none}
  .hover-lift{transition:transform .2s,box-shadow .2s}
  .hover-lift:hover{transform:translateY(-4px);box-shadow:0 .75rem 2rem rgba(0,0,0,.08)}
  .section-label{letter-spacing:.08em;text-transform:uppercase;font-size:.8rem;color:#6c757d}
  .icon { vertical-align: -2px; margin-right: .4rem; }
</style>

<div class="container mt-5 pt-5">
  <!-- Confirmation -->
  <section class="row justify-content-center">
    <div class="col-lg-8">
      <div class="p-5 border rounded-3 bg-light text-center reveal">
        <h1 class="h4 mb-2">Thanks — your message is in my inbox.</h1>
        <p class="text-muted mb-0">I’ll reply as soon as I can. If it’s time-sensitive, feel free to ping me directly below.</p>
      </div>
    </div>
  </section>

  <!-- Quick connect -->
  <section class="row justify-content-center mt-4">
    <div class="col-lg-8">
      <div class="card shadow-sm hover-lift reveal">
        <div class="card-body p-4 p-md-5">
          <span class="section-label">While you wait</span>
          <div class="row g-3 align-items-center mt-2">
            <div class="col-md-7">
              <div class="d-flex flex-wrap gap-2">
                <!-- Instagram -->
                <a class="btn btn-outline-dark" href="https://instagram.com/kolecava" target="_blank" rel="noopener">
                  <img class="icon" src="/assets/svgs/instagram.svg" alt="" height="18"> Follow on Instagram
                </a>
                <!-- LinkedIn -->
                <a class="btn btn-outline-dark" href="https://www.linkedin.com/in/kolecava" target="_blank" rel="noopener">
                  <img class="icon" src="/assets/svgs/linkedin.svg" alt="" height="18"> Connect on LinkedIn
                </a>
                <!-- WhatsApp (use digits only, no +) -->
                <a class="btn btn-success" href="https://wa.me/447852124084" target="_blank" rel="noopener">
                  <img class="icon" src="/assets/svgs/whatsapp.svg" alt="" height="18"> WhatsApp (UK)
                </a>
                <a class="btn btn-success" href="https://wa.me/421944326204" target="_blank" rel="noopener">
                  <img class="icon" src="/assets/svgs/whatsapp.svg" alt="" height="18"> WhatsApp (SK)
                </a>
              </div>
            </div>
            <div class="col-md-5 text-md-end">
              <div class="small text-muted">Prefer a quick call?</div>
              <div class="fw-semibold">
                <a href="tel:+447852124084" class="me-3">+44 785 2124084</a>
                <a href="tel:+421944326204">+421 944 326 204</a>
              </div>
            </div>
          </div>

          <hr class="my-4">

          <!-- Next steps microcopy -->
          <div class="row g-3">

          <div class="col-md-6">
            <h2 class="h6 mb-3">What happens next</h2>
            <div class="small text-muted">
              <div class="mb-3 d-flex align-items-start">
                <span class="badge rounded-pill bg-dark me-2">1</span>
                I’ll actually read what you wrote (not just skim).
              </div>
              <div class="mb-3 d-flex align-items-start">
                <span class="badge rounded-pill bg-dark me-2">2</span>
                We’ll jump on a quick call if that’s the fastest way to get clarity.
              </div>
              <div class="d-flex align-items-start">
                <span class="badge rounded-pill bg-dark me-2">3</span>
                You’ll leave with a clear plan and a quote that makes sense.
              </div>
            </div>
          </div>

            <div class="col-md-6">
              <h2 class="h6 mb-2">Browse more work</h2>
              <div class="d-grid gap-2">
                <a class="btn btn-dark" target="_blank" href="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=0&controls=0&showinfo=0&modestbranding=0&rel=0&loop=1&playlist=P56Fe2VRf5Y">
                  <img class="icon" src="/assets/svgs/play.svg" alt="" height="18"> Watch the showreel
                </a>
                <a class="btn btn-outline-dark" target="_blank" href="/cv-en/">
                  <img class="icon" src="/assets/svgs/file-text.svg" alt="" height="18"> View CV / credits
                </a>
                <a class="btn btn-outline-dark" target="_blank" href="/about-me/">
                  <img class="icon" src="/assets/svgs/user.svg" alt="" height="18"> About me
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

<!-- Featured Work -->
<section class="row justify-content-center mt-5">
  <div class="col-lg-8">
    <span class="section-label reveal">Featured work</span>

    <!-- Documentaries -->
    <section class="mt-4" aria-labelledby="documentaries-heading">
      <div class="row g-4">
        <!-- Flags in the Wind – Ukraine -->
        <div class="col-12 col-sm-6 col-lg-4 reveal">
          <a href="{{ site.baseurl }}/work/flags-in-the-wind/" class="project-overlay text-decoration-none" aria-label="Flags in the Wind – Ukraine Trailer">
            <video class="img-fluid grid-image rounded shadow-sm" autoplay loop muted playsinline loading="lazy" poster="{{ site.baseurl }}/assets/images/ua_oldman-thumb.jpg">
              <source src="{{ site.baseurl }}/assets/webm/ua_oldman.webm" type="video/webm">
            </video>
            <div class="overlay">
              <span class="project-title">Flags in the Wind – Ukraine</span>
            </div>
          </a>
        </div>

        <!-- Function Republic - Live -->
        <div class="col-12 col-sm-6 col-lg-4 reveal">
          <a href="{{ site.baseurl }}/work/function-republic/" class="project-overlay text-decoration-none" aria-label="Function Republic - Live">
            <video class="img-fluid grid-image rounded shadow-sm" autoplay loop muted playsinline loading="lazy" poster="{{ site.baseurl }}/assets/images/ua_oldman-thumb.jpg">
              <source src="{{ site.baseurl }}/assets/webm/functionrep_007.webm" type="video/webm">
            </video>
            <div class="overlay">
              <span class="project-title">Function Republic – Live</span>
            </div>
          </a>
        </div>

        <!-- Hargreaves Lansdown: Pass it On -->
        <div class="col-12 col-sm-6 col-lg-4 reveal">
          <a href="{{ site.baseurl }}/work/hargreaves-landsdown-pass-it-on/" class="project-overlay text-decoration-none" aria-label="Hargreaves Lansdown – Pass it On">
            <img src="{{ site.baseurl }}/assets/gifs/passit_002.gif" class="img-fluid grid-image rounded shadow-sm" alt="Hargreaves Lansdown Pass it On thumbnail" loading="lazy">
            <div class="overlay">
              <span class="project-title">Hargreaves Lansdown – Pass it On</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Back to homepage button -->
    <div class="text-end mt-4">
      <a href="/" class="btn btn-dark">← Back to homepage</a>
    </div>
  </div>
</section>

</div>

<script>
  // Reveal on scroll
  (function() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(el=>el.classList.add('show')); return; }
    const io = new IntersectionObserver((entries)=>entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target);} }), {threshold:.15});
    els.forEach(el=>io.observe(el));
  })();
</script>
