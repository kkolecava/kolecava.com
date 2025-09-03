---
layout: default
title: Contact
permalink: /contact/
---

<!-- Version v0.1.0b -->

<style>
  .reveal{opacity:0;transform:translateY(14px);transition:opacity .6s,transform .6s}
  .reveal.show{opacity:1;transform:none}
  .hover-lift{transition:transform .2s,box-shadow .2s}
  .hover-lift:hover{transform:translateY(-4px);box-shadow:0 .75rem 2rem rgba(0,0,0,.08)}
  .section-label{letter-spacing:.08em;text-transform:uppercase;font-size:.8rem;color:#6c757d}
  .form-status{min-height:1.5rem}
  #cf-container{min-height:80px; display:flex; align-items:center}
  .cf-fallback{display:none; color:#b00020}
</style>

<div class="container mt-5 pt-5">
  <section class="row justify-content-center g-4">
    <div class="col-lg-8 reveal">
      <span class="section-label">Contact</span>
      <h1 class="display-6 mt-2">Let’s talk</h1>
      <p class="lead text-muted">Tell me a bit about your project. I’ll reply with next steps and a clear plan.</p>
    </div>

    <div class="col-lg-8">
      <div class="card shadow-sm hover-lift reveal">
        <div class="card-body p-4 p-md-5">
          <form id="contact-form" class="needs-validation" novalidate method="POST"
                action="https://script.google.com/macros/s/AKfycbwfHY5k82_lpSko3HiyvM6fJUrJKCiP2TZRP11cf-zsV_qzRgnfmIzdA_5KxTK3YrL9/exec">
            <div class="row g-3">
              <div class="col-md-6">
                <label for="name" class="form-label">Name</label>
                <input id="name" name="name" type="text" class="form-control" autocomplete="name" required placeholder="John Smith…">
                <div class="invalid-feedback">Please enter your name.</div>
              </div>
              <div class="col-md-6">
                <label for="email" class="form-label">Email</label>
                <input id="email" name="email" type="email" class="form-control" autocomplete="email" required placeholder="john.smith@example.com">
                <div class="invalid-feedback">Enter a valid email address.</div>
              </div>
              <div class="col-12">
                <label for="message" class="form-label">Message</label>
                <textarea id="message" name="message" class="form-control" rows="6" required placeholder="What do you need? Timeline, deliverables, references…"></textarea>
                <div class="invalid-feedback">Please include a short message.</div>
              </div>

              <!-- Honeypots -->
              <div class="col-12" style="position:absolute;left:-5000px;" aria-hidden="true">
                <label for="website">Website</label>
                <input id="website" name="website" type="text" tabindex="-1" autocomplete="off">
              </div>
              <div style="position:absolute;left:-5000px;" aria-hidden="true">
                <label for="phone">Phone</label>
                <input id="phone" name="phone" type="text" tabindex="-1" autocomplete="off">
              </div>

              <!-- Human timing -->
              <input type="hidden" name="ts" id="ts">

              <!-- Turnstile explicit render target + hidden token -->
              <div class="col-12">
                <label class="form-label">Spam check</label>
                <div id="cf-container"></div>
                <input type="hidden" name="cf-turnstile-response" id="cf-turnstile-response">
                <div id="cf-fallback" class="cf-fallback small">
                  Turnstile failed to load. Please disable ad blockers for this page and reload.
                </div>
              </div>

              <div class="col-12 d-flex align-items-center gap-3">
                <button id="submit-btn" type="submit" class="btn btn-dark px-4">
                  <img src="/assets/svgs/envelope.svg" alt="" height="18" class="me-2">Send message
                </button>
                <div id="form-status" class="form-status small text-muted" role="status" aria-live="polite"></div>
              </div>
            </div>
          </form>

          <hr class="my-4">

          <div class="small text-muted">
            Prefer email? <a href="mailto:hello@kolecava.com">hello@kolecava.com</a><br>
            I only use your details to reply. No newsletter, no sharing.
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-8">
      <div class="p-4 border rounded-3 bg-light reveal">
        <div class="row g-3 align-items-center">
          <div class="col-md">
            <div class="fw-semibold">📍 UK & Slovakia — Available worldwide</div>
            <div class="small text-muted">🇬🇧 +44 785 2124084 • 🇸🇰 +421 944 326 204</div>
          </div>
          <div class="col-md-auto text-md-end">
            <a href="mailto:hello@kolecava.com" class="btn btn-outline-dark">
              <img src="/assets/svgs/envelope.svg" alt="" height="18" class="me-2">Email directly
            </a>
          </div>
        </div>
      </div>
    </div>

  </section>
</div>

<!-- Turnstile explicit render -->
<script>
  // Called by the Turnstile script when it loads
  window.cfOnload = function() {
    try {
      window.cfWidgetId = turnstile.render('#cf-container', {
        sitekey: '0x4AAAAAAByZts8eVW6pAHkB',   // your SITE key (public)
        appearance: 'always',
        theme: 'auto',
        callback: function(token) {
          document.getElementById('cf-turnstile-response').value = token;
          document.getElementById('cf-fallback').style.display = 'none';
        },
        'error-callback': function() {
          document.getElementById('cf-turnstile-response').value = '';
          document.getElementById('cf-fallback').style.display = 'block';
        },
        'expired-callback': function() {
          document.getElementById('cf-turnstile-response').value = '';
          try { turnstile.reset(window.cfWidgetId); } catch(_) {}
        }
      });
    } catch (e) {
      document.getElementById('cf-fallback').style.display = 'block';
    }
  };
</script>
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=cfOnload&render=explicit" async defer></script>

<script>
  // Reveal on scroll
  (function() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(el=>el.classList.add('show')); return; }
    const io = new IntersectionObserver((entries)=>entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target);} }), {threshold:.15});
    els.forEach(el=>io.observe(el));
  })();

  // Minimal validation + set timestamp + require token
  (function () {
    const form = document.getElementById('contact-form');
    const statusEl = document.getElementById('form-status');
    const tsEl = document.getElementById('ts');
    const tokenEl = document.getElementById('cf-turnstile-response');

    function setTs(){ tsEl.value = Date.now().toString(); }
    setTs();
    ['focus','pointerdown','keydown','touchstart'].forEach(ev => {
      window.addEventListener(ev, function once(){ setTs(); window.removeEventListener(ev, once); }, { once:true });
    });

    form.addEventListener('submit', function (e) {
      if (!form.checkValidity()) {
        e.preventDefault(); e.stopPropagation();
        form.classList.add('was-validated');
        statusEl.textContent = 'Please fix the errors above.';
        return;
      }
      if (!tokenEl.value) {
        e.preventDefault(); e.stopPropagation();
        statusEl.textContent = 'Please complete the Turnstile check.';
        try { turnstile.reset(window.cfWidgetId); } catch(_) {}
        return;
      }
      // normal form POST → server verifies token and redirects to /thank-you/
    });
  })();
</script>
