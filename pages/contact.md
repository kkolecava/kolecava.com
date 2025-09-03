---
layout: default
title: Contact
permalink: /contact/
---

<!-- kolecava.com - cform v0.1.4 -->

<style>
  .reveal{opacity:0;transform:translateY(14px);transition:opacity .6s,transform .6s}
  .reveal.show{opacity:1;transform:none}
  .hover-lift{transition:transform .2s,box-shadow .2s}
  .hover-lift:hover{transform:translateY(-4px);box-shadow:0 .75rem 2rem rgba(0,0,0,.08)}
  .section-label{letter-spacing:.08em;text-transform:uppercase;font-size:.8rem;color:#6c757d}
  .form-status{min-height:1.5rem}
  #cf-container{min-height:80px; display:flex; align-items:center}
  .cf-fallback{display:none; color:#b00020}
  /* Hide honeypots but keep them in DOM */
  .hp{position:absolute;left:-5000px;top:auto;width:1px;height:1px;overflow:hidden}
  /* Hidden iframe (submission target) */
  #form-target{display:none;width:0;height:0;border:0}
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

          <!-- Hidden iframe target to swallow Apps Script response -->
          <iframe id="form-target" name="form-target"></iframe>

          <form id="contact-form" class="needs-validation" novalidate method="POST"
                action="https://script.google.com/macros/s/AKfycbyU6THf_vsVyb5x2rv-3j3UDxqkI892OKMbzjipNI3GzKmgh005fdNhIpGSkDAwz94V/exec"
                target="form-target" autocomplete="off">
            <div class="row g-3">
              <div class="col-md-6">
                <label for="name" class="form-label">Name</label>
                <input id="name" name="name" type="text" class="form-control" autocomplete="name" required
                       placeholder="John Smith…" autocapitalize="words" spellcheck="false">
                <div class="invalid-feedback">Please enter your name.</div>
              </div>
              <div class="col-md-6">
                <label for="email" class="form-label">Email</label>
                <input id="email" name="email" type="email" class="form-control" autocomplete="email" required
                       placeholder="john.smith@example.com" autocapitalize="none" spellcheck="false">
                <div class="invalid-feedback">Enter a valid email address.</div>
              </div>
              <div class="col-12">
                <label for="message" class="form-label">Message</label>
                <textarea id="message" name="message" class="form-control" rows="6" required
                          placeholder="What do you need? Timeline, deliverables, references…"
                          autocapitalize="sentences"></textarea>
                <div class="invalid-feedback">Please include a short message.</div>
              </div>

              <!-- Classic honeypots -->
              <div class="hp" aria-hidden="true">
                <label for="website">Website</label>
                <input id="website" name="website" type="text" tabindex="-1" autocomplete="off">
              </div>
              <div class="hp" aria-hidden="true">
                <label for="phone">Phone</label>
                <input id="phone" name="phone" type="text" tabindex="-1" autocomplete="off">
              </div>

              <!-- Extra invisible traps (server expects these empty/default) -->
              <div class="hp" aria-hidden="true">
                <label><input type="checkbox" id="areubot" name="areubot" tabindex="-1" value="1"> Are you a bot?</label>
              </div>
              <div class="hp" aria-hidden="true">
                <label for="preferred_channel">Preferred contact channel</label>
                <select id="preferred_channel" name="preferred_channel" tabindex="-1">
                  <option value="" selected>—</option> <!-- must remain empty -->
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                </select>
              </div>

              <!-- Security fields -->
              <input type="hidden" name="ts" id="ts">
              <input type="hidden" name="jsok" id="jsok" value="">
              <input type="hidden" name="cf-turnstile-response" id="cf-turnstile-response">

              <!-- Turnstile -->
              <div class="col-12">
                <label class="form-label">Spam check</label>
                <div id="cf-container"></div>
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
  // Called when Turnstile script loads
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

  // HARDENING + hidden-iframe redirect
  (function () {
    const form = document.getElementById('contact-form');
    const statusEl = document.getElementById('form-status');
    const tsEl = document.getElementById('ts');
    const jsokEl = document.getElementById('jsok');
    const tokenEl = document.getElementById('cf-turnstile-response');
    const iframe = document.getElementById('form-target');

    // 1) Timestamp (updated on first interaction)
    function setTs(){ tsEl.value = Date.now().toString(); }
    setTs();
    ['focus','pointerdown','keydown','touchstart','mousemove'].forEach(ev => {
      window.addEventListener(ev, function once(){ setTs(); window.removeEventListener(ev, once); }, { once:true });
    });

    // 2) JS-only flag after simple human signals
    let moved = false, typed = false;
    let start = Date.now();
    window.addEventListener('mousemove', ()=>{ moved = true; }, {passive:true});
    window.addEventListener('keydown',  ()=>{ typed = true; }, {passive:true});
    const jsokTimer = setInterval(()=>{
      const elapsed = Date.now() - start;
      if (!jsokEl.value && elapsed > 1500 && (moved || typed)) {
        jsokEl.value = '1';
        clearInterval(jsokTimer);
      }
    }, 300);

    // 3) After the iframe finishes loading the server response, redirect this page
    iframe.addEventListener('load', function () {
      // If the user cancelled validation, there is no submit -> no load.
      // On successful POST, Apps Script returns some HTML to the iframe, then we redirect the top page:
      window.location.assign('/thank-you/');
    });

    // 4) Client-side validation guard
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
      if (jsokEl.value !== '1') {
        e.preventDefault(); e.stopPropagation();
        statusEl.textContent = 'Please interact with the page briefly, then try again.';
        return;
      }
      // No fetch/AJAX: normal form POST to hidden iframe → onload redirects current page.
      statusEl.textContent = 'Sending…';
    });
  })();
</script>
