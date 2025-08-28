---
layout: default
title: Contact
permalink: /contact/
---

<style>
  .reveal{opacity:0;transform:translateY(14px);transition:opacity .6s,transform .6s}
  .reveal.show{opacity:1;transform:none}
  .hover-lift{transition:transform .2s,box-shadow .2s}
  .hover-lift:hover{transform:translateY(-4px);box-shadow:0 .75rem 2rem rgba(0,0,0,.08)}
  .section-label{letter-spacing:.08em;text-transform:uppercase;font-size:.8rem;color:#6c757d}
  .form-status{min-height:1.5rem}
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
                action="https://script.google.com/macros/s/AKfycbwEwyxiS7PGf-ou0ARSFckJ9yi-lzlTgIVX0KVwgpbNDakc32F6nuqONT3TifPsxZFS/exec">
            <div class="row g-3">
              <div class="col-md-6">
                <label for="name" class="form-label">Name</label>
                <input id="name" name="name" type="text" class="form-control" autocomplete="name" required>
                <div class="invalid-feedback">Please enter your name.</div>
              </div>
              <div class="col-md-6">
                <label for="email" class="form-label">Email</label>
                <input id="email" name="email" type="email" class="form-control" autocomplete="email" required>
                <div class="invalid-feedback">Enter a valid email address.</div>
              </div>
              <div class="col-12">
                <label for="message" class="form-label">Message</label>
                <textarea id="message" name="message" class="form-control" rows="6" required placeholder="What do you need? Timeline, deliverables, references…"></textarea>
                <div class="invalid-feedback">Please include a short message.</div>
              </div>

              <!-- Honeypot -->
              <div class="col-12" style="position:absolute;left:-5000px;" aria-hidden="true">
                <label for="website">Website</label>
                <input id="website" name="website" type="text" tabindex="-1" autocomplete="off">
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

<script>
  // Reveal on scroll
  (function() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(el=>el.classList.add('show')); return; }
    const io = new IntersectionObserver((entries)=>entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target);} }), {threshold:.15});
    els.forEach(el=>io.observe(el));
  })();

  // Bootstrap validation + submit
  (function () {
    const form = document.getElementById('contact-form');
    const statusEl = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        statusEl.textContent = 'Please fix the errors above.';
        return;
      }
      submitBtn.disabled = true;
      statusEl.textContent = 'Sending…';

      try {
        const formData = new FormData(form);
        const res = await fetch(form.action, { method: 'POST', body: formData });
        let ok = res.ok;
        try { const j = await res.clone().json(); ok = j && j.ok !== false; } catch(_) {} // tolerate redirect/html
        if (ok) {
          statusEl.textContent = 'Thanks — your message has been sent.';
          form.reset();
          form.classList.remove('was-validated');
        } else {
          statusEl.textContent = 'Sorry, something went wrong. Please email hello@kolecava.com.';
        }
      } catch (err) {
        statusEl.textContent = 'Network error. Please try again or email hello@kolecava.com.';
      } finally {
        submitBtn.disabled = false;
      }
    }, false);
  })();
</script>
